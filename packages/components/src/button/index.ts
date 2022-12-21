/*
 * @Author: LinRenJie
 * @Date: 2022-12-21 12:06:08
 * @LastEditTime: 2022-12-21 12:20:43
 * @Description: 
 * @FilePath: /newest-ui/packages/components/src/button/index.ts
 * @Email: xoxosos666@gmail.com
 */
import type { App, Plugin } from "vue"
import button from './button.vue'
type SFCWithInstall<T> = T&Plugin
const withInstall = <T>(comp:T) => {
    (comp as SFCWithInstall<T>).install = (app:App)=>{
        //注册组件
        app.component((comp as any).name,(comp as any))
    }
    return comp as SFCWithInstall<T>
}
const Button = withInstall(button)
export default Button