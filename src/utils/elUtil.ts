export default {
    elFindCss(selector: string, doc: HTMLElement|Document = document, timeout = 1000): Promise<Element> {
        return new Promise(resolve => {
            const i = setInterval(() => {
                const el = doc.querySelector(selector);
                if (el === null) return;
                clearInterval(i)
                resolve(el)
            }, timeout)
        })
    }
}
