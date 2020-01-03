declare const LocalStorage: {
    support: boolean;
    /**
     * 设置localStorage
     * @param key
     * @param value
     * @param time
     */
    setItem(key: string, value: any, time?: number): void;
    /**
     * 获取localStorage
     * @param key
     */
    getItem(key: string): string;
    /**
     * 删除指定localStorage
     */
    removeItem(key: string): void;
    /**
     * 清空所有localStorage
     */
    clear(): void;
};
export default LocalStorage;
