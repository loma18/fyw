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
    /*头部地址栏*/
        $("#top-box .address-box a").click(function(){
            $("#top-box .address>a>span:first-child").html($(this).html());
        });

    /*头部登录*/
    /*登录模态框*/
    $("#login").click(function(e){
        e.preventDefault();
        $(".login-box").show();

    });
    $("span.close").click(function(){
        $(".login-box").hide();
    });
    $("#btn_new").click(function(){
        var u=uname_new.value;
        var p=upwd_new.value;
        $.ajax({
            type:"post",
            url:"/login",
            data:{uname:u,upwd:p},
            success:function(data){
                if(data.length>0){
                    sessionStorage["uname"]=u;
                    sessionStorage["nname"]=data[0].nname;
                    // location.href="index.html";
                    history.go(0);
                }else{
                    $(".tips_new").show();
                    $(".tips_new").html(data.msg+"！");
                }

            },
            error:function(){
                alert("网络错误，请稍后再试");
            }
        });
    });

    var u=sessionStorage.getItem("uname");
    //var localu=localStorage.getItem("uname_loc");
    var nname=sessionStorage.getItem("nname")!=0?sessionStorage.getItem("nname"):sessionStorage.getItem("uname");
    var log=document.getElementById("login");
    //var log=document.getElementsByClassName("register");
    if(u){
        log.innerHTML = `欢迎回来 ${nname} <a href="#">退出登录</a>`;
        $(".register").hide();
        $("li.login").hover(function(){$("li.login>p").show();},function(){$("li.login>p").hide();});
    }else{
        log.innerHTML="<a href='#'>登录</a>";
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
})

























