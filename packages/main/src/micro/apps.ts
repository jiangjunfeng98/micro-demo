import type { RegistrableApp } from 'qiankun';
import type { IAppProps } from './types';

/**
 * apps
 */
const apps: RegistrableApp<IAppProps>[] = [{
  name: 'A-app',
  entry: import.meta.env.VITE_APP1_URL as string,
  container: '#a-app',
  activeRule: '/app1'
}, {
  name: 'B-app',
  entry: import.meta.env.VITE_APP2_URL as string,
  container: '#b-app',
  activeRule: '/app2'
}];

export default apps;
