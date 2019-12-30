import {toString, find} from 'lodash'


/**
 * 生成英文字母
 */
export function generatingEnAB(): string[] {
    let arr = [];
    for (let i = 65; i < 91; i++) {
        arr.push(String.fromCharCode(i).toLowerCase())
    }
    return arr;
}

/**
 * 浮点运算加法
 * @param args
 */
export function floatAddition(args: number[]): number {
    if (args.length < 2) return;
    return args.reduce((prev, next) => {
        let a, b, m, c;
        try {
            a = toString(prev).split('.')[1].length;
        } catch (e) {
            a = 0;
        }
        try {
            b = toString(next).split('.')[1].length;
        } catch (e) {
            b = 0;
        }
        c = Math.abs(a - b);
        m = Math.pow(10, Math.max(a, b));
        if (c > 0) {
            let cm = Math.pow(10, c);
            if (a > b) {
                prev = Number(toString(prev).replace('.', ''));
                next = Number(toString(next).replace('.', '')) * cm;
            } else {
                prev = Number(toString(prev).replace('.', '')) * cm;
                next = Number(toString(next).replace('.', ''));
            }
        } else {
            prev = Number(toString(prev).replace('.', ''));
            next = Number(toString(next).replace('.', ''));
        }
        return (prev + next) / m;
    });
}

/**
 * 浮点运算减法
 * @param a
 * @param b
 */
export function floatSubtraction(a: number, b: number): number {
    let a1, b1, m, n;
    try {
        a1 = toString(a).split('.')[1].length;
    } catch (e) {
        a1 = 0;
    }
    try {
        b1 = toString(b).split('.')[1].length;
    } catch (e) {
        b1 = 0;
    }
    m = Math.pow(10, Math.max(a1, b1));
    n = (a1 >= b1) ? a1 : b1;
    return Number(((a * m - b * m) / m).toFixed(n));
}

/**
 * 浮点运算乘法
 * @param args
 * @returns {*}
 */
export function floatMultiplication(args: number[]): number {
    if (args.length < 2) return;
    return args.reduce((prev, next) => {
        let m = 0, p = toString(prev), n = toString(next);
        try {
            m += p.split('.')[1].length;
        } catch (e) {}
        try {
            m += n.split('.')[1].length;
        } catch (e) {}
        return Number(p.replace('.', '')) * Number(n.replace('.', '')) / Math.pow(10, m);
    });
}

/**
 * 浮点运算除法
 * @param a
 * @param b
 * @returns {number}
 */
export function floatDivision(a: number, b: number): number {
    let a1 = 0, b1 = 0, a2, b2;
    try {
        a1 = toString(a).split('.')[1].length;
    } catch (e) {}
    try {
        b1 = toString(b).split('.')[1].length;
    } catch (e) {}
    a2 = Number(toString(a).replace('.', ''));
    b2 = Number(toString(b).replace('.', ''));
    return (a2 / b2) * Math.pow(10, b1 - a1);
}

/**
 * 向上查找组件
 * @param context
 * @param componentName
 * @returns {*|Vue}
 */
export function findComponentUpward(context: any, componentName: string): object {
    if (typeof componentName !== 'string') throw new Error('componentName should be string.');
    let parent = context.$parent,
        name = parent.$options.name;
    while (parent && (!name || componentName !== name)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}

/**
 * 向下查找某个组件
 * @param context
 * @param componentName
 * @returns {*}
 */
export function findComponentDownward(context: any, componentName: string): object {
    let children = null;
    if (context.$children.length) {
        for (const child of context.$children) {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}

/**
 * 是否为url参数对象
 * @param val
 */
export function isURLSearchParams(val): boolean {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}


/**
 * 验证是否为中文
 * @param str
 * @returns {boolean}
 */
export function isChinese(str: string): boolean {
    return /^[\u4e00-\u9fa5]+$/.test(str);
}

/**
 * 验证是否为QQ账号
 * @param str
 * @returns {boolean}
 */
export function isQQ(str: string): boolean {
    return /^[1-9][0-9]{4,9}$/g.test(str);
}

/**
 * 判断是否为邮箱地址
 * @param str
 * @returns {boolean}
 */
export function isEmail(str: string): boolean {
    return /^\w+@+[0-9a-zA-Z]+\.(cn|com|com\.cn|org|org\.cn|net|net\.cn|biz|cc|mobi|info)$/.test(str);
}

/**
 * 判断是否为身份证号
 * @param str
 * @returns {boolean}
 */
export function isIdCard(str: string): boolean {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
}

/**
 * 判断是否为手机号
 * @param str
 * @returns {boolean}
 */
export function isPhoneNum(str: string): boolean {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
}

/**
 * 判断是否是主域
 * @param str
 * @returns {boolean}
 */
export function isMasterDomain(str: string): boolean {
    return /[\w][\w-]*\.(?:com\.cn|com|cn|co|net|org|gov|cc|biz|info)(\/|$)/.test(str)
}

/**
 * 是否是Iphone
 */
export function isIPhone() {
    return /iPhone/i.test(navigator.userAgent);
}

/**
 * 号码加※号
 */
export function isHideNum(num, index) {
    return `***********${num.slice(index)}`;
}

/**
 * 名字加※号
 */
export function ishideName(name, index) {
    return `**${name.slice(index)}`;
}

/**
 * 是否是安卓手机
 */
export function isAndroidPhone() {
    return /Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent);
}

/**
 * 检查浏览器版本
 */
export function checkBrowser(): boolean | string {
    const userAgent = navigator.userAgent.toLocaleLowerCase();
    let ver: string[];
    if (ver = userAgent.match(/cpu iphone os (.*?) like mac os/)) {
        const ios = ver[1].replace(/_/g, '.');
        if (Number(ios) < 9) {
            return '您的手机系统版本过低，为了更好地访问体验，请将手机系统升级到9.0以上版本。';
        } else {
            return true;
        }
    }
}


//分割数字
export function partingNumber(num: number): number[] {
    return toString(num).split('').map(i => Number(i))
}
