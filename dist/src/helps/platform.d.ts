declare class Platform {
    /**
     * @method isWebView
     * @signature isWebView()
     * @description
     * 返回app是否在Cordova中运行
     * @return {Boolean}
     */
    isWebView(): boolean;
    /**
     * @method isIPhone
     * @signature isIPhone()
     * @description
     * 返回设备是否为iPhone
     * @return {Boolean}
     */
    isIPhone(): boolean;
    /**
     * @method isIPhoneX
     * @signature isIPhoneX()
     * @description
     * 返回设备是否为iPhone X
     * @return {Boolean}
     */
    isIPhoneX(): boolean;
    /**
     * @method isIPad
     * @signature isIPad()
     * @description
     * 返回设备是否为iPad
     * @return {Boolean}
     */
    isIPad(): boolean;
    /**
     * @method isIPod
     * @signature isIPod()
     * @description
     * 返回设备是否为iPod
     * @return {Boolean}
     */
    isIPod(): boolean;
    /**
     * @method isIOS
     * @signature isIOS([forceActualPlatform])
     * 如果为true，则忽略所选平台并返回实际平台
     * @description
     * 返回操作系统是否为iOS。 默认情况下，如果已设置，将返回手动选择的平台。
     * @return {Boolean}
     */
    isIOS(): boolean;
    /**
     * @method isIOS7above
     * @signature isIOS7above()
     * @description
     * 返回iOS版本是否为7或更高版本
     * @return {Boolean}
     */
    isIOS7above(): boolean;
    /**
     * @method isIOSSafari
     * @signature isIOSSafari()
     * @description
     * 返回app是否在iOS Safari中运行
     * @return {Boolean}
     */
    isIOSSafari(): boolean;
    /**
     * @method isWKWebView
     * @signature isWKWebView()
     * @description
     * 返回app是否在WKWebView中运行。
     * @return {Boolean}
     */
    isWKWebView(): boolean;
    /**
     * @method isUIWebView
     * @signature isUIWebView()
     * @description
     * 返回app是否在UIWebView中运行
     * @return {Boolean}
     */
    isUIWebView(): boolean;
    /**
     * @method isAndroidPhone
     * @signature isAndroidPhone()
     * @description
     * 返回设备是否为Android手机
     * @return {Boolean}
     */
    isAndroidPhone(): boolean;
    /**
     * @method isAndroidTablet
     * @signature isAndroidTablet()
     * @description
     * 返回设备是否为Android平板电脑
     * @return {Boolean}
     */
    isAndroidTablet(): boolean;
    /**
     * @method isAndroid
     * @signature isAndroid([forceActualPlatform])
     * 如果为true，则忽略所选平台并返回实际平台
     * @description
     * 返回操作系统是否为Android。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isAndroid(): boolean;
    /**
     * @method isAndroid5above
     * @signature isAndroid5above()
     * @description
     * 返回Android版本是否为5或更高版本
     * @return {Boolean}
     */
    isAndroid5above(): boolean;
    /**
     * @method isWP
     * @signature isWP([forceActualPlatform])
     * 如果为true，则忽略所选平台并返回实际平台
     * @description
     * 返回操作系统是否为Windows手机。 默认情况下，如果已设置，将返回手动选择的平台。
     * @return {Boolean}
     */
    isWP(): boolean;
    /**
     * @method isBlackBerry
     * @signature isBlackBerry()
     * @description
     * 返回设备是否为BlackBerry。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isBlackBerry(): boolean;
    /**
     * @method isOpera
     * @signature isOpera()
     * @description
     * 返回浏览器是否为Opera。 默认情况下，如果已设置，将返回手动选择的平台。
     * @return {Boolean}
     */
    isOpera(): boolean;
    /**
     * @method isFirefox
     * @signature isFirefox()
     * @description
     * 返回浏览器是否为Firefox。 默认情况下，如果已设置，将返回手动选择的平台。
     * @return {Boolean}
     */
    isFirefox(): boolean;
    /**
     * @method isSafari
     * @signature isSafari()
     * @description
     * 返回浏览器是否为Safari。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isSafari(): boolean;
    /**
     * @method isChrome
     * @signature isChrome()
     * @description
     * 返回浏览器是否为Chrome。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isChrome(): boolean;
    /**
     * @method isIE
     * @signature isIE()
     * 如果为true，则忽略所选平台并返回实际平台。
     * @description
     * 返回浏览器是否为IE。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isIE(): boolean;
    /**
     * @method isEdge
     * @signature isEdge()
     * 如果为true，则忽略所选平台并返回实际平台。
     * @description
     * 返回浏览器是否为Edge。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isEdge(): boolean;
    /**
     * 返回手机系统
     * @return {String}
     */
    getMobileOS(): string;
    /**
     * 返回ios系统设备
     * @return {String}
     */
    getIOSDevice(): string;
    /**
     * @method getWechat
     * @signature getWechat()
     * 返回true表示是微信浏览器
     * @return {Boolean}
     */
    getWechat(): boolean;
    /**
     * @method getQqGuide
     * @signature getQqGuide()
     * 返回true表示是QQ内置浏览器
     * @return {Boolean}
     */
    getQqGuide(): boolean;
}
declare const _default: Platform;
export default _default;
