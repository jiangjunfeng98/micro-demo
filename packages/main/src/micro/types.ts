export type IAppProps = {
  // 应用名称，以 "-app" 结尾
  name: string,
  // 子应用地址，支持html全地址或者拆分地址
  entry: string | { scripts?: string[]; styles?: string[]; html?: string },
  // 挂载容器
  container: string,
  // 匹配规则
  activeRule: string
}
