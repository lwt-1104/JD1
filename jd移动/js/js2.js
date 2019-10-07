$(function () {
    $(".top").on("click",function () {
        var  times = setInterval(function () {
            var  toTop = document.documentElement.scrollTop ||document.body.scrollTop
            toTop = toTop/1.2
            if (toTop > 0.01){
                document.documentElement.scrollTop ? document.documentElement.scrollTop = toTop : document.body.scrollTop = toTop
                return true
            }else {
                clearInterval(times)
            }
        },10)
    })
})