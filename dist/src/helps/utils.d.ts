/**
 * 生成英文字母
 */
export declare function generatingEnAB(): string[];
/**
 * 浮点运算加法
 * @param args
 */
export declare function floatAddition(args: number[]): number;
/**
 * 浮点运算减法
 * @param a
 * @param b
 */
export declare function floatSubtraction(a: number, b: number): number;
/**
 * 浮点运算乘法
 * @param args
 * @returns {*}
 */
export declare function floatMultiplication(args: number[]): number;
/**
 * 浮点运算除法
 * @param a
 * @param b
 * @returns {number}
 */
export declare function floatDivision(a: number, b: number): number;
/**
 * 向上查找组件
 * @param context
 * @param componentName
 * @returns {*|Vue}
 */
export declare function findComponentUpward(context: any, componentName: string): object;
/**
 * 向下查找某个组件
 * @param context
 * @param componentName
 * @returns {*}
 */
export declare function findComponentDownward(context: any, componentName: string): object;
/**
 * 是否为url参数对象
 * @param val
 */
export declare function isURLSearchParams(val: any): boolean;
/**
 * 验证是否为中文
 * @param str
 * @returns {boolean}
 */
export declare function isChinese(str: string): boolean;
/**
 * 验证是否为QQ账号
 * @param str
 * @returns {boolean}
 */
export declare function isQQ(str: string): boolean;
/**
 * 判断是否为邮箱地址
 * @param str
 * @returns {boolean}
 */
export declare function isEmail(str: string): boolean;
/**
 * 判断是否为身份证号
 * @param str
 * @returns {boolean}
 */
export declare function isIdCard(str: string): boolean;
/**
 * 判断是否为手机号
 * @param str
 * @returns {boolean}
 */
export declare function isPhoneNum(str: string): boolean;
/**
 * 判断是否是主域
 * @param str
 * @returns {boolean}
 */
export declare function isMasterDomain(str: string): boolean;
/**
 * 是否是Iphone
 */
export declare function isIPhone(): boolean;
/**
 * 号码加※号
 */
export declare function isHideNum(num: any, index: any): string;
/**
 * 名字加※号
 */
export declare function ishideName(name: any, index: any): string;
/**
 * 是否是安卓手机
 */
export declare function isAndroidPhone(): boolean;
/**
 * 检查浏览器版本
 */
export declare function checkBrowser(): boolean | string;
export declare function partingNumber(num: number): number[];
