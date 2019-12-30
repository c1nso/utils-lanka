declare class Validator {
    cache: any[];
    constructor();
    add(value: any, rules: any): void;
    start(): boolean | string;
}
export default Validator;
