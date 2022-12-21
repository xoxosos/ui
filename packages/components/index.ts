/*
 * @Author: LinRenJie
 * @Date: 2022-12-21 11:59:35
 * @LastEditTime: 2022-12-21 12:11:18
 * @Description: 
 * @FilePath: /newest-ui/packages/components/index.ts
 * @Email: xoxosos666@gmail.com
 */
import { App } from 'vue';
import components from './src/index';
export * from './src/index';
export default {
    install: (app: App) => {
        components.forEach(c => app.use(c));
    }
}