$("#footer").load("footer.html");
/*右侧固定定位*/
(function(){
    var rtFixed=document.getElementById("rt-fixed");
    window.onscroll=function(){
        if(document.body.scrollTop>650){
            rtFixed.style.display="block";
        }else{
            rtFixed.style.display="none";
        }
    }
})();
$("#top").load("header.html",function(){
    var nname=sessionStorage.getItem("nname")!=0?sessionStorage.getItem("nname"):sessionStorage.getItem("uname");
    var log=document.getElementById("login");
        log.innerHTML = `欢迎回来 ${nname} <a href="#">退出登录</a>`;
        $(".register").hide();
        $("li.login").hover(function(){$("li.login>p").show();},function(){$("li.login>p").hide();});
    var a1=document.querySelector("#login>a");
    if(a1.innerHTML=="退出登录") {
        a1.onclick = function (e) {
            e.preventDefault();
            sessionStorage.removeItem("uname");
            location.href="login.html";
        };
    }
    $("a.nickname").html(nname);
});

///////页面主体
//左侧栏
$("a.money-manage").click(function(){
    if($(this).children("span").hasClass("close")){
        $(this).next().css({"height":0,"transition":"height .5s"});
        $(this).children("span").removeClass("close");
    }else{
        $(this).next().css({"height":"120px","transition":"height .5s"});
        $(this).children("span").addClass("close");
    }
});
$("a.my-loan").click(function(){
    if($(this).children("span").hasClass("close")){
        $(this).next().css({"height":0,"transition":"height .5s"});
        $(this).children("span").removeClass("close");
    }else{
        $(this).next().css({"height":"40px","transition":"height .5s"});
        $(this).children("span").addClass("close");
    }
});

//页面加载时初始化页面
$("#main-box").load("tpl/default-index.html",defaultIndex);
//$("#main-box").load("tpl/personal-data.html",personalData);
$("#main div.aside-lf>ul a").click(function(e){
    e.preventDefault();
    if($(this).attr("class")){
        var path=this.getAttribute("class");
        var i=path.indexOf("-");
        var kw=path.slice(i+1,i+2).toUpperCase();
        var funName=path.slice(0,i)+kw+path.slice(i+2);
        switch(funName){
            case "personalData":
            $("#main-box").load(`tpl/${path}.html`,personalData);
                break;
            case "defaultIndex":
            $("#main-box").load(`tpl/${path}.html`,defaultIndex);
                break;
        }
    }
});


/*主体右侧部分*/
//////////////////////////////首页部分
function defaultIndex(){
    var spans=document.querySelectorAll("div.fast-server span,div.tool span");
    rtact(spans);
    var as=document.querySelectorAll("div.fast-server a,div.tool a");
    rtact(as);

    //右侧日期
    var week=new Date().getDay();
    wk=getWeek(week);
    var dt=new Date().getDate();
    var mt=new Date().getMonth();
    var yr=new Date().getFullYear();
    $(".my-calendar .date").html(dt);
    $(".my-calendar .week").html(wk);
    $(".my-calendar .month").html(mt+1);
    $(".my-calendar .year").html(yr);
    setInterval(function(){
        $(".my-calendar .date").html(dt);
        $(".my-calendar .week").html(wk);
        $(".my-calendar .month").html(mt+1);
        $(".my-calendar .year").html(yr);
    },1000);
}
//右侧悬停事件
function rtact(elems){
    for(var i=0;i<elems.length;i++){
        var elem=elems[i];
        elem.onmouseover=function(){
            $(this).parents("li").addClass("active");
        };
        elem.onmouseout=function(){
            $(this).parents("li").removeClass("active");
        };
    }
}
//获得星期
function getWeek(num){
    if(num==0){
        return '星期日';
    }else if(num==1){
        return '星期一';
    }else if(num==2){
        return '星期二';
    }else if(num==3){
        return '星期三';
    }else if(num==4){
        return '星期四';
    }else if(num==5){
        return '星期五';
    }else if(num==6){
        return '星期六';
    }
}


//////////////////////////////个人信息部分
function personalData(){
    $("h3.nav").on("click","a",function(e){
        e.preventDefault();
        var left=$("h3.nav b").css("left");
        $(this).addClass("current").siblings().removeClass("current");
        switch($(this).html()){
            case "基本信息":left="0%";$("h3.nav b").css("left",left);break;
            case "联系方式":left="30%";$("h3.nav b").css("left",left);break;
            case "绑定设置":left="60%";$("h3.nav b").css("left",left)
        }
    })
}
















