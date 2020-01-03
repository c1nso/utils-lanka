import Helps from "../helps";

const CookieStorage = {
    isEnabled(): boolean {
        let cookieEnabled = Boolean(navigator.cookieEnabled);
        if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled){
            document.cookie= 'test';
            cookieEnabled = document.cookie.indexOf("test") !== -1;
        }
        return cookieEnabled;
    },

    /**
     * 设置cookie
     * @param name
     * @param value
     * @param expires
     * @param path
     * @param domain
     * @param secure
     */
    setCookie(name: string, value: any, expires?: number, path: string = '/', domain?: string, secure?: boolean): void {
        let cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));
        if (Helps.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toUTCString());
        }
        if (Helps.isString(path)) cookie.push('path=' + path);
        if (Helps.isString(domain)) cookie.push('domain=' + domain);
        if (secure === true) cookie.push('secure');
        document.cookie = cookie.join('; ');
    },

    /**
     * 获取cookie
     * @param name
     */
    getCookie(name: string): string {
        let match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
    },

    /**
     * 清除cookie
     * @param name
     */
    removeCookie(name: string): void {
        this.setCookie(name, '', Date.now() - 86400000);
    },

    /**
     * 清空所有cookie
     */
    clearCookie(): void {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            document.cookie = cookies[i].split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    }
};
export default CookieStorage;
