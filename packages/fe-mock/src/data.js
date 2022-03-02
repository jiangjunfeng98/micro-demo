const { api, resp, mock } = require('apite');

api.get('/from/search', () => {
  const list = new Array(8).fill({
    date: '@date',
    name: '@name',
    address: '@csentence',
    id:'@id'
  });
  return resp.list(mock(list));
});

