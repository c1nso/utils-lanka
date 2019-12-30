/**
 * 获取字串长度
 * @param str
 */
export declare function czLength(str?: any): number;
/**
 * 删除指定字符串
 * @param str
 * @param key
 */
export declare function deleteAssignString(str: string, key: string): string;
/**
 * 字符串截取
 * @param str 需要处理的字符串
 * @param len 截取的长度
 */
export declare function stringSlice(str: string, len: number): string;
/**
 * 字符串转数组
 * @param str
 * @param key
 */
export declare function transformArray(str: string, key: string): string[];
/**
 * 删除所有HTML标签
 * @param tag
 */
export declare function htmlTagToSpace(tag: string): string;
/**
 * 通过字符串操作将一个数放大或缩小指定倍数
 * @param num 被转换的数 小数或整数
 * @param m 表示小数点移动的位数 正数为放大，负数为缩小
 * @param needNumber 表示是否需要强转为数字
 */
export declare function numberZoom(num: number | string, m: number, needNumber?: boolean): number | string;
/**
 * 日期转换
 * @param date
 * @description ios new Date函数不支持带有 "-"的日期格式，即 "new Date("2019-02-26 16:10:00")"会无效
 * 需将"2019-02-26 16:10:00"转换成"2019/02/26 16:10:00"
 */
export declare function conversionDate(date: string): string;
/**
 * 格式化时间对象
 * @param dataTime
 * @param format
 * @returns {*}
 */
export declare function formatDate(dataTime: any, format?: string): string;
/**
 * 获取日期
 * @param beforeDays    几天之前
 * @param format        时间返回格式
 */
export declare function getDate(beforeDays?: number, format?: string): string;
/**
 * 获取美东时间的时间对象
 */
export declare function getEastDateObject(): Date;
/**
 * 获取日期
 * @param beforeDays    几天之前
 * @param format        时间返回格式
 */
export declare function getEastDate(beforeDays?: number, format?: string): string;
export interface TimeDate {
    stime: string;
    etime: string;
}
/**
 * 获取今天 昨天 本月 上月 最近7天
 * @param id 1今天 2昨天 3本月 4上月 5最近7天
 * */
export declare function lately(id?: number): TimeDate;
