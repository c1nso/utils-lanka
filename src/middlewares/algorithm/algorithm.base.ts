/**
 * 计算笛卡尔积
 * @description 可接受可迭代的数组、字符串、对象
 * 笛卡尔乘积是指在数学中，两个集合X和Y的笛卡尓积，又称直积，表示为X × Y，
 * 第一个对象是X的成员而第二个对象是Y的所有可能有序对的其中一个成员。
 * @returns {IterableIterator<*[]>}
 * @param head
 * @param tail
 */
export const Cartesian = function(head?: any, ...tail: any[]) {
    return Array.prototype.reduce.call(arguments, function(head, tail) {
        let ret = [];
        head.forEach(function(a) {
            tail.forEach(function(b) {
                ret.push(a.concat([b]));
            });
        });
        return ret;
    }, [[]]);
};

/**
 * 计算排列组合
 * @param arr
 * @param size
 * @description 排列数指的是从n个不同元素中任取r（r≦n）个元素排成一列（考虑元素先后出现次序）称此为一个排列，
 * 此种排列的总数即为排列数，即叫做从n个不同元素中取出r个元素的排列数。
 * @returns {IterableIterator<*|*>}
 */
export const Arrangement = function* (arr: any[], size: number) {
    function* generateArrangement(offset, combo) {
        if (combo.length === size) yield combo;
        for (let i = offset; i < arr.length; i++) yield * generateArrangement(i + 1, combo.concat(arr[i]));
    }
    yield * generateArrangement(0, []);
};

export class AlgorithmBase {
    /**
     * 计算阶乘
     * @param n
     * @description 0!=1，n!=(n-1)!×n
     * 当n > 21 时，得到的值会溢出
     * 一个正整数的阶乘是所有小于及等于该数的正整数的积，并且0的阶乘为1。
     * @returns {number}
     */
    static factorial = (n: number): number => !(n > 1) ? 1 : AlgorithmBase.factorial(n - 1) * n;

    /**
     * 计算组合数
     * @param n
     * @param m
     * @description C(n,m)=n!/((n-m)!*m!)（m≤n)
     * 从n个不同元素中，任取m(m≤n)个元素并成一组，叫做从n个不同元素中取出m个元素的一个组合；
     * 从n个不同元素中取出m(m≤n)个元素的所有组合的个数，叫做从n个不同元素中取出m个元素的组合数。
     * @returns {number}
     */
    static combination = (n: number, m: number): number => {
        if (n < m) return 0;
        if (n === m) return 1;
        return Math.round(AlgorithmBase.factorial(n) / (AlgorithmBase.factorial(m) * AlgorithmBase.factorial(n - m)));
    };

    /**
     * 计算交集
     * @param a
     * @param b
     * @description 集合论中，设A，B是两个集合，由所有属于集合A且属于集合B的元素所组成的集合，
     * 叫做集合A与集合B的交集（intersection），记作A∩B。
     * @returns {*}
     */
    static intersection = (a: any[], b: any[]): any[] => {
        if (!(a.length > 0) && !(b.length > 0)) return [];
        return a.filter(i => b.indexOf(i) !== -1);
    };
}

export default AlgorithmBase;
