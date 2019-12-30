/**
 * 获取url所有参数
 * @returns {{}}
 */
export declare function getUrlParamList(): object;
/**
 * 获取origin url
 * @returns {{}}
 */
export declare function getOriginUrl(): string;
/**
 * 获取url特定参数
 * @param name
 * @returns {string}
 */
export declare function getUrlParam(name: string): string;
/**
 * 删除链接的某个参数
 * @param url
 * @param name
 */
export declare function deleteUrlParams(url: string, name: string): string;
/**
 * 更新或增加url参数
 * @param url       链接
 * @param name      参数名称
 * @param value     需要设置的值
 * @param removeParam     需要删除的参数
 */
export declare function updateUrlParams(url: string, name: string, value: any, removeParam?: string): string;
