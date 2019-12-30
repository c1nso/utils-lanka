/**
 *
 *  Base64 encode / decode
 *  @author lanka
 *
 */
declare class Base64 {
    private _input;
    private readonly _keyStr;
    constructor(data: string);
    encode(): string;
    decode(): string;
    private _utf8_encode;
    private _utf8_decode;
}
export default Base64;
