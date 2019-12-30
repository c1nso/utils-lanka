/**
 * 获取url所有参数
 * @returns {{}}
 */
export function getUrlParamList(): object {
    let reg = '/[^?&]+=[^?&]+/g',
        arr = window.location.href.match(reg),
        o = {};
    if (arr instanceof Array && arr.length > 0) {
        arr.forEach(i => {
            let combo;
            combo = i.split('=');
            if (combo[0]) o[combo[0]] = combo[1] || '';
        })
    }
    return o;
}

/**
 * 获取origin url
 * @returns {{}}
 */
export function getOriginUrl(): string {
    return document.location.origin;
}

/**
 * 获取url特定参数
 * @param name
 * @returns {string}
 */
export function getUrlParam(name: string): string {
    const re = new RegExp('(?:\\?|#|&)' + name + '=([^&#]*)(?:$|&|#)', 'i'),
        m = re.exec(window.location.href);
    return m ? m[1] : '';
}


/**
 * 删除链接的某个参数
 * @param url
 * @param name
 */
export function deleteUrlParams(url: string, name: string): string {
    url = url || location.href;
    let reg = new RegExp(`(^|)${name}=([^&]*)(|$)`);
    if (url.match(reg) !== null) {
        let urlArray = url.split('?'),
            query = urlArray[1].split('&'),
            obj = {};
        for (let i = 0, length = query.length; i < length; i++) {
            let queryArr = query[i].split('=');
            obj[queryArr[0]] = queryArr[1] ? queryArr[1] : '';
        }
        delete obj[name];
        return `${urlArray[0]}?${
            JSON.stringify(obj)
                .replace(/["{}]/g, '')
                .replace(/:/g, '=')
                .replace(/,/g, '&')
            }`;
    }
    return url;
}

/**
 * 更新或增加url参数
 * @param url       链接
 * @param name      参数名称
 * @param value     需要设置的值
 * @param removeParam     需要删除的参数
 */
export function updateUrlParams(url: string, name: string, value: any, removeParam?: string): string {
    let r = url || location.href;
    if (r !== null && r !== 'undefined' && r !== '') {
        value = encodeURIComponent(value);
        const reg = new RegExp(`(^|)${name}=([^&]*)(|$)`),
            tmp = name + '=' + value;
        if (url.match(reg) !== null) {
            r = url.replace(eval(String(reg)), tmp);
        } else {
            if (url.match('[?]')) {
                r = url + '&' + tmp;
            } else {
                r = url + '?' + tmp;
            }
        }
    }
    if (removeParam) return deleteUrlParams(r, removeParam);
    return r;
}
