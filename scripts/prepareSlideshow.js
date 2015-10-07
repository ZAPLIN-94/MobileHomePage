function prepareSlidershow(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    //确保浏览器支持DOM方法
    var QR = document.getElementById("QR");
    QR.style.position ="absolute";
    QR.style.left="0px";
    QR.style.top="0px";
    //为图片应用样式
    var list1 = document.getElementById("line1");
    var links1 = list1.getElementsByTagName("a");
    var list2 = document.getElementById("line2");
    var links2 = list2.getElementsByTagName("a");
    //取得连接
    links1[0].onmouseover = function(){
        moveElement("QR",0,0,0.5);
    }
    links1[1].onmouseover = function(){
        moveElement("QR",-160,0,0.5);
    }
    links2[0].onmouseover = function(){
        moveElement("QR",-320,0,0.5);
    }
    //调用moveElement函数

}

