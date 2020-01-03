declare const CookieStorage: {
    isEnabled(): boolean;
    /**
     * 设置cookie
     * @param name
     * @param value
     * @param expires
     * @param path
     * @param domain
     * @param secure
     */
    setCookie(name: string, value: any, expires?: number, path?: string, domain?: string, secure?: boolean): void;
    /**
     * 获取cookie
     * @param name
     */
    getCookie(name: string): string;
    /**
     * 清除cookie
     * @param name
     */
    removeCookie(name: string): void;
    /**
     * 清空所有cookie
     */
    clearCookie(): void;
};
export default CookieStorage;
