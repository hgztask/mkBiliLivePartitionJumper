import elUtil from "./utils/elUtil";
import defUtl from "./utils/defUtl";

/**
 * 判断是否为直播间
 * @param url {string}
 * @returns {boolean}
 */
const isLiveRoom = (url: string = location.href): boolean => {
    return url.search('/live.bilibili.com/\\d+') !== -1 ||
        url.search('https://live.bilibili.com/blanc/\\d+') !== -1 ||
        url.includes('live.bilibili.com/blackboard/era');
}

//是否是活动类直播间页面
const isLiveRoomActivity = () => {
    return isLiveRoom() && !document.title.endsWith('哔哩哔哩直播，二次元弹幕直播平台');
}

function installLiveSectionButton(body: HTMLElement | any = document.body) {
    const p = new Promise(resolve => {
        const i = setInterval(() => {
            const headInfoVmDivEl = body.querySelector('#head-info-vm');
            if (headInfoVmDivEl === null) return
            // @ts-ignore
            const vueData = headInfoVmDivEl['__vue__'];
            if (vueData === undefined) return;
            const {liveAreaName=null} = vueData as any;
            if (liveAreaName === null) return;
            clearInterval(i)
            resolve(vueData)
        }, 1000);
    })
    p.then(vueData => {
        const {childAreaUri, liveAreaName} = vueData as any;
        elUtil.elFindCss('.normal-row-ctnr', body).then(el => {
            const butAEl = document.createElement('a');
            butAEl.target = '_blank';
            butAEl.href = childAreaUri
            const but = document.createElement('button');
            but.setAttribute('gz_type', 'info')
            but.textContent = liveAreaName
            but.title = `当前直播的分区:${liveAreaName}`
            butAEl.appendChild(but)
            el.appendChild(butAEl)
        })
    })
}

export default {
    staticRoute(url: string, title: string) {
        if (!isLiveRoom(url)) return
        const isLiveRoomActivityVal = isLiveRoomActivity();
        if (isLiveRoomActivityVal) {
            console.log("直播活动页面")
            elUtil.elFindCss('#player-ctnr iframe').then(el => {
                const iframeEl = el as HTMLIFrameElement
                const contentDocument = iframeEl.contentDocument as unknown as Document;
                defUtl.addGzStyle(contentDocument.head, contentDocument.head)
                installLiveSectionButton(contentDocument)
            })
            return;
        } else {
            installLiveSectionButton()
            console.log("常规直播间", url, title)
        }
    }
}