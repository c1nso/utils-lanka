declare const window: Window & {
    cordova?: any;
    phonegap?: any;
    PhoneGap: any;
    webkit?: any;
    HTMLElement?: any;
    opera?: any;
    chrome?: any;
    navigator: Navigator & {
        standalone?: boolean
    }
};

declare const document: Document & {
    documentMode?: boolean;
};

const NativeHTMLElement = window.HTMLElement;

class Platform {
    /**
     * @method isWebView
     * @signature isWebView()
     * @description
     * 返回app是否在Cordova中运行
     * @return {Boolean}
     */
    isWebView(): boolean {
        if (document.readyState === 'loading') {
            throw new Error('isWebView() method is available after dom contents loaded.');
        }

        return !!(window.cordova || window.phonegap || window.PhoneGap);
    }

    /**
     * @method isIPhone
     * @signature isIPhone()
     * @description
     * 返回设备是否为iPhone
     * @return {Boolean}
     */
    isIPhone(): boolean {
        return /iPhone/i.test(navigator.userAgent);
    }

    /**
     * @method isIPhoneX
     * @signature isIPhoneX()
     * @description
     * 返回设备是否为iPhone X
     * @return {Boolean}
     */
    isIPhoneX(): boolean {
        return this.isIPhone() &&
            (window.screen.width === 375 && window.screen.height === 812 || // X, XS portrait
                window.screen.width === 812 && window.screen.height === 375 || // X, XS landscape
                window.screen.width === 414 && window.screen.height === 896 || // XS Max, XR portrait
                window.screen.width === 896 && window.screen.height === 414); // XS Max, XR landscape
    }

    /**
     * @method isIPad
     * @signature isIPad()
     * @description
     * 返回设备是否为iPad
     * @return {Boolean}
     */
    isIPad(): boolean {
        return /iPad/i.test(navigator.userAgent);
    }

    /**
     * @method isIPod
     * @signature isIPod()
     * @description
     * 返回设备是否为iPod
     * @return {Boolean}
     */
    isIPod(): boolean {
        return /iPod/i.test(navigator.userAgent);
    }

    /**
     * @method isIOS
     * @signature isIOS([forceActualPlatform])
     * 如果为true，则忽略所选平台并返回实际平台
     * @description
     * 返回操作系统是否为iOS。 默认情况下，如果已设置，将返回手动选择的平台。
     * @return {Boolean}
     */
    isIOS(): boolean {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    /**
     * @method isIOS7above
     * @signature isIOS7above()
     * @description
     * 返回iOS版本是否为7或更高版本
     * @return {Boolean}
     */
    isIOS7above(): boolean {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            const ver = (navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/) || [''])[0].replace(/_/g, '.');
            return (parseInt(ver.split('.')[0]) >= 7);
        }
        return false;
    }


    /**
     * @method isIOSSafari
     * @signature isIOSSafari()
     * @description
     * 返回app是否在iOS Safari中运行
     * @return {Boolean}
     */
    isIOSSafari(): boolean {
        const navigator = window.navigator;
        const ua = navigator.userAgent;
        return !!(this.isIOS() && ua.indexOf('Safari') !== -1 && ua.indexOf('Version') !== -1 && !navigator.standalone);
    }

    /**
     * @method isWKWebView
     * @signature isWKWebView()
     * @description
     * 返回app是否在WKWebView中运行。
     * @return {Boolean}
     */
    isWKWebView(): boolean {
        const lte9 = /constructor/i.test(NativeHTMLElement);
        return !!(this.isIOS() && window.webkit && window.webkit.messageHandlers && window.indexedDB && !lte9);
    }

    /**
     * @method isUIWebView
     * @signature isUIWebView()
     * @description
     * 返回app是否在UIWebView中运行
     * @return {Boolean}
     */
    isUIWebView(): boolean {
        return !!(this.isIOS() && !this.isIOSSafari() && !this.isWKWebView());
    }

    /**
     * @method isAndroidPhone
     * @signature isAndroidPhone()
     * @description
     * 返回设备是否为Android手机
     * @return {Boolean}
     */
    isAndroidPhone(): boolean {
        return /Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent);
    }

    /**
     * @method isAndroidTablet
     * @signature isAndroidTablet()
     * @description
     * 返回设备是否为Android平板电脑
     * @return {Boolean}
     */
    isAndroidTablet(): boolean {
        return /Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent);
    }

    /**
     * @method isAndroid
     * @signature isAndroid([forceActualPlatform])
     * 如果为true，则忽略所选平台并返回实际平台
     * @description
     * 返回操作系统是否为Android。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isAndroid(): boolean {
        return /Android/i.test(navigator.userAgent);
    }

    /**
     * @method isAndroid5above
     * @signature isAndroid5above()
     * @description
     * 返回Android版本是否为5或更高版本
     * @return {Boolean}
     */
    isAndroid5above(): boolean {
        if (/Android/i.test(navigator.userAgent)) {
            const ver = (navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/) || [''])[0].replace(/_/g, '.');
            return (parseInt(ver.split('.')[0]) >= 5);
        }
        return false;
    }

    /**
     * @method isWP
     * @signature isWP([forceActualPlatform])
     * 如果为true，则忽略所选平台并返回实际平台
     * @description
     * 返回操作系统是否为Windows手机。 默认情况下，如果已设置，将返回手动选择的平台。
     * @return {Boolean}
     */
    isWP(): boolean {
        return /Windows Phone|IEMobile|WPDesktop/i.test(navigator.userAgent);
    }

    /**
     * @method isBlackBerry
     * @signature isBlackBerry()
     * @description
     * 返回设备是否为BlackBerry。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isBlackBerry(): boolean {
        return /BlackBerry|RIM Tablet OS|BB10/i.test(navigator.userAgent);
    }

    /**
     * @method isOpera
     * @signature isOpera()
     * @description
     * 返回浏览器是否为Opera。 默认情况下，如果已设置，将返回手动选择的平台。
     * @return {Boolean}
     */
    isOpera(): boolean {
        return (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0);
    }

    /**
     * @method isFirefox
     * @signature isFirefox()
     * @description
     * 返回浏览器是否为Firefox。 默认情况下，如果已设置，将返回手动选择的平台。
     * @return {Boolean}
     */
    isFirefox(): boolean {
        return /firefox/i.test(navigator.userAgent.toLowerCase());
    }

    /**
     * @method isSafari
     * @signature isSafari()
     * @description
     * 返回浏览器是否为Safari。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isSafari(): boolean {
        return (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) ||
            (function (p) { return p.toString() === '[object SafariRemoteNotification]' })(!window['safari']);
    }

    /**
     * @method isChrome
     * @signature isChrome()
     * @description
     * 返回浏览器是否为Chrome。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isChrome(): boolean {
        return (!!window.chrome && !(!!window.opera ||
            navigator.userAgent.indexOf(' OPR/') >= 0) && !(navigator.userAgent.indexOf(' Edge/') >= 0));
    }

    /**
     * @method isIE
     * @signature isIE()
     * 如果为true，则忽略所选平台并返回实际平台。
     * @description
     * 返回浏览器是否为IE。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isIE(): boolean {
        return !!document.documentMode;
    }

    /**
     * @method isEdge
     * @signature isEdge()
     * 如果为true，则忽略所选平台并返回实际平台。
     * @description
     * 返回浏览器是否为Edge。 默认情况下，如果已设置，将返回手动选择的平台
     * @return {Boolean}
     */
    isEdge(): boolean {
        return navigator.userAgent.indexOf(' Edge/') >= 0;
    }

    /**
     * 返回手机系统
     * @return {String}
     */
    getMobileOS(): string {
        if (this.isAndroid()) {
            return 'android';
        }
        else if (this.isIOS()) {
            return 'ios';
        }
        else if (this.isWP()) {
            return 'wp';
        }
        else {
            return 'other';
        }
    }

    /**
     * 返回ios系统设备
     * @return {String}
     */
    getIOSDevice(): string {
        if (this.isIPhone()) {
            return 'iphone';
        }
        else if (this.isIPad()) {
            return 'ipad';
        }
        else if (this.isIPod()) {
            return 'ipod';
        }
        else {
            return 'na';
        }
    }

    /**
     * @method getWechat
     * @signature getWechat()
     * 返回true表示是微信浏览器
     * @return {Boolean}
     */
    getWechat(): boolean {
        let ua = navigator.userAgent;
        return /MicroMessenger/i.test(ua);
    }
    /**
     * @method getQqGuide
     * @signature getQqGuide()
     * 返回true表示是QQ内置浏览器
     * @return {Boolean}
     */
    getQqGuide(): boolean {
        let ua = navigator.userAgent.toLowerCase();
        return ua.indexOf(" qq/") > -1;
    }
}
export default new Platform();
