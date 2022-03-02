module.exports = {
  port: 8080,
  dir: 'src',
  watchDelay: 300,
  // 是否格式化json输出
  jsonFormat: true,
  prefix: '/api/v1',
  // 文档标题
  docTitle: 'Mocke 服务',
  docDesc: '若接口变化请大家及时更新',
  // 公共返回格式定义
  resp: {
    // 成功字段，默认返回码
    code: ['code', '200'],
    // 失败信息，默认返回码
    fail: ['fail', 400],
    // 信息字段，默认值
    msg: ['msg', null],
    result: ['data', null]
  }
};
