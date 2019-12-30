// 校验规则
export const strategies = {
    isNotEmpty(value:any, errorMsg: string) {
        if (value === "") {
            return errorMsg;
        }
    },
    minLength(value: string, length: number, errorMsg: string) {
        if (value.length < length) {
            return errorMsg;
        }
    },
    maxLength(value, length, errorMsg) {
        if (value.length > length) {
            return errorMsg;
        }
    },
    isMobile(value, errorMsg) {
        const rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
        if (!rule.test(value)) {
            return errorMsg;
        }
    },
    isIdentityCard(value, errorMsg) {
        const rule = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        if (!rule.test(value)) {
            return errorMsg;
        }
    },
    isEmail(value, errorMsg) {
        const rule = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
        if (!rule.test(value)) {
            return errorMsg;
        }
    },
    isUserName(value, errorMsg) {
        // 4到16位（字母，数字，下划线，减号）
        const rule = /^[a-zA-Z0-9_-]{4,16}$/;
        if (!rule.test(value)) {
            return errorMsg;
        }
    },
    isQq(value, errorMsg) {
        const rule = /^[1-9][0-9]{4,11}$/;
        if (!rule.test(value)) {
            return errorMsg;
        }
    },
    isWx(value, errorMsg) {
        const rule = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
        if (!rule.test(value)) {
            return errorMsg;
        }
    },
    isSpecialChar(value, errorMsg) {
        const rule = /["'<>%;)(&+]+-!！@#$~/;
        if (!rule.test(value)) {
            return errorMsg;
        }
    },
    isTrueName(value, errorMsg) {
        const rule = /[\u4E00-\u9FA5]/;
        if (!rule.test(value)) {
            return errorMsg;
        }
    }
};
