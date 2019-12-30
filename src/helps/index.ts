import {
    camelCase,
    kebabCase,
    lowerCase,
    snakeCase,
    startCase,
    upperCase,
    capitalize,
    escape,
    unescape,
    escapeRegExp,
    lowerFirst,
    upperFirst,
    pad,
    padEnd,
    padStart,
    repeat,
    toLower,
    toUpper,
    trim,
    trimEnd,
    trimStart,
    truncate
} from 'lodash/string'
import {
    castArray, // 如果不是数组，则将其转换为数组
    cloneDeep, // 深克隆
    cloneDeepWith, // 自定义深克隆
    conformsTo, // 通过使用对象的相应属性值调用源的谓词属性来检查对象是否符合源
    eq, // 两个值之间的比较以确定它们是否相等
    isArray,
    isArrayBuffer,
    isArrayLike,
    isArrayLikeObject,
    isBoolean,
    isBuffer,
    isDate,
    isElement,
    isEmpty,
    isEqual, // 在两个值之间进行深入比较以确定它们是否相等
    isEqualWith, // 此方法与_.isEqual类似，只是它接受调用以比较值的定制程序。 如果定制程序返回未定义，则比较由该方法处理
    isError, // 检查值是否为Error，EvalError，RangeError，ReferenceError，SyntaxError，TypeError或URIError对象
    isFunction,
    isLength,
    isMap,
    isMatch, // 在对象和源之间执行部分深层比较以确定对象是否包含等效属性值
    isNaN,
    isNil, // 检查是否为null或undefined
    isNull,
    isNumber,
    isObject,
    isObjectLike,
    isPlainObject,
    isRegExp,
    isSafeInteger,
    isSet,
    isString,
    isSymbol,
    isUndefined,
    isWeakMap,
    isWeakSet,
    toArray, // 将value转换为数组,
    toFinite,
    toInteger,
    toLength,
    toString,
    toNumber
} from 'lodash/lang'
import {
    chunk, // 创建一个元素数组，分成长度为size。如果array不能均匀分割，最后的块将成为剩余的元素
    compact, // 创建一个数组，其中删除所有false值
    pull,
    remove,
    first,
    last,
    tail,
    take
} from 'lodash/array'
import {
    countBy,
    groupBy,
    keyBy,
    invokeMap,
    orderBy,
    sample,
    sampleSize,
    find
} from 'lodash/collection'
import {
    czLength,
    stringSlice,
    conversionDate,
    getDate,
    getEastDate,
    formatDate,
    deleteAssignString,
    htmlTagToSpace,
    numberZoom,
    transformArray,
    lately
} from './string'
import {
    getUrlParamList,
    deleteUrlParams,
    getOriginUrl,
    getUrlParam,
    updateUrlParams
} from './url'
import {
    floatSubtraction,
    floatMultiplication,
    floatAddition,
    floatDivision,
    findComponentUpward,
    findComponentDownward,
    generatingEnAB,
    isChinese,
    isEmail,
    isHideNum,
    ishideName,
    isIdCard,
    isMasterDomain,
    isPhoneNum,
    isQQ,
    isURLSearchParams
} from './utils'
const helps = {
    camelCase,
    kebabCase,
    lowerCase,
    snakeCase,
    startCase,
    upperCase,
    capitalize,
    escape,
    unescape,
    escapeRegExp,
    lowerFirst,
    upperFirst,
    pad,
    padEnd,
    padStart,
    repeat,
    toLower,
    toUpper,
    trim,
    trimEnd,
    trimStart,
    truncate,
    castArray, // 如果不是数组，则将其转换为数组
    cloneDeep, // 深克隆
    cloneDeepWith, // 自定义深克隆
    conformsTo, // 通过使用对象的相应属性值调用源的谓词属性来检查对象是否符合源
    eq, // 两个值之间的比较以确定它们是否相等
    isArray,
    isArrayBuffer,
    isArrayLike,
    isArrayLikeObject,
    isBoolean,
    isBuffer,
    isDate,
    isElement,
    isEmpty,
    isEqual, // 在两个值之间进行深入比较以确定它们是否相等
    isEqualWith, // 此方法与_.isEqual类似，只是它接受调用以比较值的定制程序。 如果定制程序返回未定义，则比较由该方法处理
    isError, // 检查值是否为Error，EvalError，RangeError，ReferenceError，SyntaxError，TypeError或URIError对象
    isFunction,
    isLength,
    isMap,
    isMatch, // 在对象和源之间执行部分深层比较以确定对象是否包含等效属性值
    isNaN,
    isNil, // 检查是否为null或undefined
    isNull,
    isNumber,
    isObject,
    isObjectLike,
    isPlainObject,
    isRegExp,
    isSafeInteger,
    isSet,
    isString,
    isSymbol,
    isUndefined,
    isWeakMap,
    isWeakSet,
    toArray, // 将value转换为数组,
    toFinite,
    toInteger,
    toLength,
    toString,
    toNumber,
    chunk, // 创建一个元素数组，分成长度为size。如果array不能均匀分割，最后的块将成为剩余的元素
    compact, // 创建一个数组，其中删除所有false值
    pull,
    remove,
    first,
    last,
    tail,
    take,
    countBy,
    groupBy,
    keyBy,
    invokeMap,
    orderBy,
    sample,
    sampleSize,
    find,
    czLength,
    stringSlice,
    conversionDate,
    getDate,
    getEastDate,
    formatDate,
    deleteAssignString,
    htmlTagToSpace,
    numberZoom,
    transformArray,
    getUrlParamList,
    deleteUrlParams,
    getOriginUrl,
    getUrlParam,
    updateUrlParams,
    floatSubtraction,
    floatMultiplication,
    floatAddition,
    floatDivision,
    findComponentUpward,
    findComponentDownward,
    generatingEnAB,
    isChinese,
    isEmail,
    isHideNum,
    ishideName,
    isIdCard,
    isMasterDomain,
    isPhoneNum,
    isQQ,
    isURLSearchParams,
    lately
};
export default helps;
