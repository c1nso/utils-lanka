import { strategies } from "./validator.config";

class Validator {
    public cache: any[];
    constructor() {
        this.cache = [];
    }

    public add(value, rules) {
        const self = this;
        for (let i = 0, rule; (rule = rules[i++]); ) {
            (rule => {
                const strategyAry = rule.strategy.split(":");
                const errorMsg = rule.errorMsg;
                self.cache.push(() => {
                    let strategy = strategyAry.shift();
                    strategyAry.unshift(value);
                    strategyAry.push(errorMsg);
                    return strategies[strategy].apply(value, strategyAry);
                });
            })(rule);
        }
    }

    public start(): boolean | string {
        for (let i = 0, validatorFunc; (validatorFunc = this.cache[i++]); ) {
            const errorMsg = validatorFunc();
            if (errorMsg) return errorMsg;
        }
    }
}

export default Validator;
