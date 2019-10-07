/*怎么实现一个响应式布局*/
(function (w, devFont) {
    // 动态改变html标签的字体大小
    // 375屏幕下设置了font-size == 100
    // 要响应的屏幕/要响应的屏幕的字体大小
    // 375屏幕下 / 100 = 要响应的屏幕/要响应的屏幕的字体大小
    // 要响应的屏幕的字体大小 = 要响应的屏幕*100 / 375屏幕
    function setRem() {
        var width = document.documentElement.clientWidth
        // devicePixelRatio 获取dpr 2
        var devFonts = width * 100 / (devFont / w.devicePixelRatio)
        // var devFont = width * 100 / 375
        document.querySelector('html').style.fontSize = devFonts + 'px'
    }

    window.onresize = function () {
        setRem()
    }
    setRem()
    /*
     *  参数1:window
     *  参数2:设计图的尺寸
     *
     * */
}(window, 750))