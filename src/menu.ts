import globalValue from "./data/globalValue";

GM_registerMenuCommand('脚本猫脚本更新页', () => {
    GM_openInTab(globalValue.scriptCat_js_url)
}, 'E')

GM_registerMenuCommand('gf脚本更新页', () => {
    GM_openInTab(globalValue.greasyFork_js_url)
}, 'W')

GM_registerMenuCommand('加入or反馈', () => {
    GM_openInTab(globalValue.group_url)
}, "T")

GM_registerMenuCommand('更新日志', () => {
    GM_openInTab(globalValue.update_log_url)
}, 'U')