import gzStyleCss from '../css/gz-style.css'

export default {
    /**
     * 插个人常用样式
     * @param el {Document}该元素下是否已经插入过样式
     * @param insertionPosition {Element|Document} 要插入样式的位置
     */
    addGzStyle(el: HTMLElement, insertionPosition: Element | any | Document | any = document.head) {
        const styleEl = el.querySelector("style[gz_style]");
        if (styleEl !== null) {
            console.log("已有gz_style样式，故不再插入该样式内容");
            return;
        }
        const style = document.createElement('style');
        style.setAttribute("gz_style", "");
        style.textContent = gzStyleCss;
        insertionPosition.appendChild(style);
    }
}