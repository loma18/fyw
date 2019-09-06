/*主体左侧*/
(function(){
    var lis=document.querySelectorAll(".main-box>li");
    for(var i=0;i<lis.length;i++){
        (function(n) {
            lis[n].onmouseover = function (e) {
                var li=document.querySelector(".main-box>li.hover");
                if(li){li.className="";};
                this.className="hover";
            };
        })(i);
    };
    /*头部筛选部分*/
    $("#search>ul:nth-child(2)>li>a").click(function(e){
        e.preventDefault();
        $(this).parent().addClass("hover").siblings().removeClass("hover");
        $(this).parent().siblings().children("ul").hide();
        const W=$(this).parent().width()+1;
        if($(this).parent().hasClass("hx")){
            $(this).parent().children("ul").css("left",-W)};
        $(this).parent().children("ul").show();
    });
    $("#search>ul>li li>a").click(function(e){
        e.preventDefault();
        $(this).addClass("hover").siblings().removeClass("hover");
    });
    /*列表导航部分*/
    $("#main-lf .main-nav>a").click(function(e){
        e.preventDefault();
        $(this).addClass("current").siblings().removeClass("current");
    });
    $("#main-lf .main-nav ul a").click(function(e){
        e.preventDefault();
        $(this).parent().addClass("current").siblings().removeClass("current");
    });

})();
/*列表主体部分*/
$("#main-lf .main-box li div.rt>p a").click(function(e){e.preventDefault();});
$("#main-lf .main-box li div.rt>p a:nth-child(2)").click(function(e){
    e.preventDefault();
    var u=sessionStorage.getItem("uname");
    if(u){
        if(!$(this).children("span").hasClass("hover")) {
            $("i.alert").css("opacity",1);
            $("i.alert").html("收藏成功");
            $(this).children("span").addClass("hover");
            var timer=setTimeout(function () {
                $("i.alert").css("opacity",0);
                clearTimeout(timer);
                timer=null;
            }, 1000);
        }else{
           // $("i.alert").show();
            $(this).children("span").removeClass("hover");
        }
    }else{
        $(".login-box").show();
    }
});
/*右侧热门榜*/
(function(){
    var lis=document.querySelectorAll(".hot-comment ul>li");
    for(var i=0;i<lis.length;i++){
        (function(n) {
            lis[n].onmouseover = function () {
                var li=document.querySelector(".hot-comment ul>li.hover");
                if(li){li.className="";};
                this.className="hover";
            };
        })(i);
    };

})();
/*页码*/
(function(){
    var as=document.querySelectorAll("div.page-box li.pages>a");
    for(var i=0;i<as.length;i++){
        (function(n){
            as[n].onclick=function(){
                var a=document.querySelector("div.page-box li.pages>a.hover");
                if(a){a.className="";};
                switch(this){
                    case as[0]:
                        this.style.display="none";
                        as[1].style.display="none";
                        as[2].className="hover";
                        break;
                    case as[1]:
                        a.previousElementSibling.className="hover";
                        if(a.previousElementSibling==as[2]){
                            this.style.display="none";
                            as[0].style.display="none";
                        }
                       /* this.removeAttribute("href");*/
                        as[as.length-1].style.display="block";
                        as[as.length-2].style.display="block";
                        break;
                    case as[2]:
                        as[0].style.display="none";
                        as[1].style.display="none";
                        as[as.length-1].style.display="block";
                        as[as.length-2].style.display="block";
                        this.className="hover";
                        /*this.removeAttribute("href");*/
                        break;
                    case as[as.length-3]:
                        as[as.length-1].style.display="none";
                        as[as.length-2].style.display="none";
                        as[0].style.display="block";
                        as[1].style.display="block";
                        this.className="hover";
                        break;
                    case as[as.length-2]:
                        a.nextElementSibling.className="hover";
                        if(a.nextElementSibling==as[as.length-3]){
                            this.style.display="none";
                            as[as.length-1].style.display="none";
                        };
                        break;
                    case as[as.length-1]:
                        this.style.display="none";
                        as[as.length-2].style.display="none";
                        as[as.length-3].className="hover";
                        break;
                    default:
                        as[0].style.display="block";
                        as[1].style.display="block";
                        as[as.length-1].style.display="block";
                        as[as.length-2].style.display="block";
                        this.className="hover";
                        as[1].setAttribute("href","#");
                        as[2].setAttribute("href","#");
                }
               /* var a1=document.querySelector("div.page-box li.pages>a.hover");
                a1.removeAttribute("href");
                console.log(this);
                var a1s=document.querySelectorAll(":not(this)");
                for(var i=0;i<a1s.length;i++){a1s[i].setAttribute("href","#1");}*/
            }
        })(i)

    }
})();