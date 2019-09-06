$("#foot-box").load("foot-box.html");
$("#footer").load("footer.html");

/*头部地址栏*/
(function(){
$("#top-box .address-box a").click(function(){
    $("#top-box .address>a>span:first-child").html($(this).html());
})
})();
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

/*移动广告*/
(function(){
    var moveAd=document.getElementsByClassName("move-ad")[0];
    var x=0,y=0,xin=true,yin=true,step= 1;
    function floatAD(){
        const L= 0;
        var  T=document.body.scrollTop;
        const R=document.body.clientWidth-moveAd.offsetWidth;//此处moveAd.offsetWidth为常量250px;
        /*var B=document.body.clientHeight-moveAd.offsetHeight;*///此处moveAd.offsetHeight为常量150px;
        var B=650+document.body.scrollTop;
        /*    var R=window.innerWidth-250;
         var B=window.innerHeight-150;*/
        moveAd.style.left=x+document.body.scrollLeft;
        moveAd.style.top=y+document.body.scrollTop;
        //moveAd.style.top=y;

        x+=step*(xin?1:-1);
        if(x<L){xin=true;x=L};
        if(x>R){xin=false;x=R};
        y+=step*(yin?1:-1);
        if(y<T){yin=true;y=T};
        if(y>B){yin=false;y=B};
        moveAd.style.left=x+"px";
        moveAd.style.top=y+"px";
    };
    var timer=setInterval(floatAD,20);
    moveAd.onmouseover=function(){
        clearInterval(timer);
        timer=null;
    };
    moveAd.onmouseout=function(){
        timer=setInterval(floatAD,20);
    };})();
/*热销楼盘*/
(function() {
    var lis=document.querySelectorAll("ul.hot-sell-box>li");
    var as=document.querySelectorAll("ul.hot-sell-box>li>a");
    const X=403;
    /*热销楼盘ajax*/
    for(var i=0;i<as.length;i++){
        (function(n){
            as[n].onmouseover=function(){
               gethot_house(n+1)
            }
        })(i)
    }
    for(var i=0;i<lis.length;i++){
        (function(n) {
            lis[n].onmouseover = function () {
                var choice=document.querySelector("ul.hot-sell-box>li.current");
                if(choice){choice.className="";}
                this.className = "current";
                offset(n);
            };
            function offset(n){
                var ul=document.querySelector("li.current>ul");
                var lf=-X*n;
                ul.style.left=lf+"px";
            }
        })(i);
    };
})();
/*新房*/
(function() {
    var lis=document.querySelectorAll("#new-home .aside-mid-box>li");
    const X=226;
    var bs=document.querySelectorAll("div#new-home>ul.aside-mid-box>li>b");
    /*热销楼盘ajax*/
    for(var i=0;i<bs.length;i++){
        (function(n){
            bs[n].onmouseover=function(){
                getnew_house(n+4);
            }
        })(i)
    }
    for(var i=0;i<lis.length;i++){
        (function(n){
            lis[n].onmouseover=function(){
                var li=document.querySelector("#new-home .aside-mid-box>li.hover");
                if(li){li.className="";}
                this.className="hover";
                offset(n);
            };
            function offset(n){
                var ul=document.querySelector("#new-home li.hover>ul");
                var lf=-X*n;
                ul.style.left=lf+"px";
            }
        })(i)
    }
})();
/*二手房*/
(function() {
    var lis=document.querySelectorAll("#resold-home .aside-mid-box>li");
    const X=226;
    var bs=document.querySelectorAll("div#resold-home>ul.aside-mid-box>li>b");
    /*热销楼盘ajax*/
    for(var i=0;i<bs.length;i++){
        (function(n){
            bs[n].onmouseover=function(){
                getresold_house(n+7);
            }
        })(i)
    }

    for(var i=0;i<lis.length;i++){
        (function(n){
            lis[n].onmouseover=function(){
                var li=document.querySelector("#resold-home .aside-mid-box>li.hover");
                if(li){li.className="";}
                this.className="hover";
                offset(n);
            };
        })(i)
    }
    function offset(n){
        var ul=document.querySelector("#resold-home li.hover>ul");
        var lf=-X*n;
        ul.style.left=lf+"px";
    }
})();

/*****登录处*/
$(window).load(function(){
    var u=sessionStorage.getItem("uname");
    //var localu=localStorage.getItem("uname_loc");
    var nname=sessionStorage.getItem("nname")!=0?sessionStorage.getItem("nname"):sessionStorage.getItem("uname");
    var log=document.getElementById("login");
    //var log=document.getElementsByClassName("register");
    if(u){
        log.innerHTML = `欢迎回来 ${nname} <a href="#">退出登录</a>`;
        $(".register").hide();
        $("li.login").hover(function(){$("li.login>p").show();},function(){$("li.login>p").hide();})
    }else{
        log.innerHTML="<a href='login.html'>登录</a>";
        $(".register").show();
    }
    var a1=document.querySelector("#login>a");
    if(a1.innerHTML=="退出登录") {
        a1.onclick = function (e) {
            e.preventDefault();
            sessionStorage.removeItem("uname");
            history.go(0);
        };
    }

    /*页面加载时，初始化热门楼盘*/
        gethot_house(1);
        getnew_house(4);
        getresold_house(7)

});
/*搜索框*/
$("#top-main .search .nav li").click(function(){
    $(this).addClass("current").siblings().removeClass("current");
});
function gethot_house(num){
    $.ajax({
        type:'GET',
        url:'/hot_house',
        data:{ftype:num},
        success:function(data){
            var html='';
            for(var i=0;i<data.length;i++){
                var obj=data[i];
                html+=`
                 <li>
                 <div>
                 <a href="details.html"><img src="images/${obj.picture}" alt=""/></a>
                 <h2>
                 <a href="details.html">${obj.fname}</a>
                 <span>${obj.applyct}人报名</span>
                 </h2>
                 </div>
                 <p>${obj.price}元/m <sup>2</sup>  <span>${obj.aname}</span></p>
                 </li>`
            }
            $("ul.hot-sell-box li.current ul").html(html);
        },
        error:function(){
            alert("网络出错，请重试");
        }
    })
}
function getnew_house(num){
    $.ajax({
        type:'GET',
        url:'/new_house',
        data:{ftype:num},
        success:function(data){
            var html='';
            html+=`<li>
                    <a href="details.html"><img src="images/${data[0].picture}" alt=""/></a>
                   </li>`;
            //console.log(data);
            for(var i=1;i<data.length;i++){//除去第一个的影响
                var obj=data[i];
                html+=`
                      <li>
                          <div>
                              <a href="details.html"><img src="images/${obj.picture}" alt=""/></a>
                              <p><a href="details.html">${obj.fname}[${obj.aname}]</a> <br/><br/>恒大棕榈岛已获得预售证 <br/>预计7月2日开盘</p>
                          </div>
                          <h4>价格待定 <span><b>${obj.applyct}</b>人报名</span></h4>
                          <h6><a href="details.html">深惠山海 阔郎舒居</a></h6>
                      </li>`;
            }
            $("#new-home ul.aside-mid-box>li.hover>ul").html(html);
        },
        error:function(){
            alert("网络出错，请重试");
        }
    })
}
function getresold_house(num){
    $.ajax({
        type:'GET',
        url:'/resold_house',
        data:{ftype:num},
        success:function(data){
            var html='';
            //console.log(data);
            for(var i=0;i<data.length;i++){//除去第一个的影响
                var obj=data[i];
                html+=`
                      <li>
                           <div>
                               <a href="details.html"><img src="images/${obj.picture}" alt=""/></a>
                               <p><a href="details.html">${obj.intr1}</a> <span>${obj.intr2}</span></p>
                           </div>
                           <h4><a href="details.html">${obj.advantage1}</a><span>${obj.advantage2}</span></h4>
                       </li>`;
            }
            $("#resold-home ul.aside-mid-box>li.hover>ul").html(html);
        },
        error:function(){
            alert("网络出错，请重试");
        }
    })
}






























