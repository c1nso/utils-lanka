import CookieStorage from './cookies'
import Helps from "../helps";
const LocalStorage = {
    support: !!window.localStorage,

    /**
     * 设置localStorage
     * @param key
     * @param value
     * @param time
     */
	setItem(key: string, value: any, time: number = 0): void {
		if (this.support) {
			if (typeof key !== 'string') return;
			if (Helps.isNumber(time) && time !== 0) {
                time = time + new Date().getTime();
			}
			const setValue = {
				value,
				time
			};
			localStorage.setItem(key, JSON.stringify(setValue));
		} else {
            CookieStorage.setCookie(key, value, time);
		}
	},

    /**
     * 获取localStorage
     * @param key
     */
	getItem(key: string): string {
		if (this.support) {
			const getValue = JSON.parse(localStorage.getItem(key));
			if (!getValue) return null;
			const expires = getValue.time;
			if (expires !== 0  && expires < new Date().getTime()) {
				this.removeItem(key);
				return null;
			} else {
				return JSON.parse(getValue.value);
			}
		} else {
		    CookieStorage.getCookie(key);
		}
	},

    /**
     * 删除指定localStorage
     */
	removeItem(key: string): void {
		if (this.support) return localStorage.removeItem(key);
		CookieStorage.removeCookie(key);
	},

    /**
     * 清空所有localStorage
     */
	clear() {
		if (this.support) return localStorage.clear();
        CookieStorage.clearCookie();
	}
};

export default LocalStorage;
