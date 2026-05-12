import './menu'
import router from "./router";
import defUtl from "./utils/defUtl";
window.addEventListener('DOMContentLoaded', () => {
    defUtl.addGzStyle(document.body)
    router.staticRoute(window.location.href, document.title);
})