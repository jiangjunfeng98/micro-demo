const { api, resp, mock } = require('apite');

/**
 * 登陆
 */
api.post('/auth/login', () => {
  return resp.list(mock({
    token: '@guid'
  }));
});

/**
 * @name 模拟数据
 */
api.get('/user', () => {
  return resp.list(mock({
    name: '@cname',
    userName:'@name',
    userId: '@id'
  }));
});

/**
 * 路由信息
 */
api.get('/routers', () => {
  return resp.list(mock([
    {
      id: '@id',
      name: '应用1',
      enName: 'APP1',
      list: [
        { path: '/app1/a', name: '应用1-A', enName: 'App1-A' },
        { path: '/app1/b', name: '应用1-B', enName: 'App1-B' },
        { path: '/app1/c', name: '应用1-C', enName: 'App1-C' },
      ]
      // @ts-ignore
    }, {
      id: '@id',
      name: '应用2',
      enName: 'APP2',
      list: [
        { path: '/app2/q', name: '应用2-Q', enName: 'App2-Q' },
        { path: '/app2/w', name: '应用2-W', enName: 'App2-W' },
        { path: '/app2/e', name: '应用2-E', enName: 'App2-E' }
      ]
    },
    // @ts-ignore
    {
      id: '@id',
      name: '用户信息',
      enName: 'User Center',
      list: [
        { path: '/user', name: '用户信息', enName: 'User' }
      ]
    }
  ]));
});
