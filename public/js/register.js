$("footer").load("footer.html");
$("#top").load("header.html",function(){
    /*头部登录*/
    $("#login").click(function(e){
        e.preventDefault();
        location.href="login.html";

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
})




$("input#chkb").next().children("a").click(function(){
   $(".modal").show();
});
$(".modal span.close").click(function(){
   $(this).parent().parent().hide();
});
var flag = {
    "uname":false,
    "password":false,
    "password1":false,
    "phno":false
};
$("#uname").blur(function(){
    var $that=$(this);
    var uname=$that.val();
    var uts=$("#uts")[0];
    var reg=/^[a-zA-Z0-9\u4e00-\u9fa5]{5,20}$/;
    if(!uname){
        uts.innerHTML="必输项！";
        uts.style.color="red";
        flag.uname=false;
        return;
    }else if(!vali(reg,uname)){
        uts.innerHTML="用户名格式错误！";
        uts.style.color="red";
        flag.uname=false;
        return;
    }else {
        $.ajax({
            url: "/reg_uname",
            data: {uname: uname},
            success: function (data) {
                if (data.code > 0) {
                    flag.uname = true;
                    uts.style.color = "green";
                    flag.uname = true;
                    uts.innerHTML = data.msg;
                    return true;
                } else {
                    uts.style.color = "red";
                    flag.uname = false;
                    uts.innerHTML = data.msg;
                }
            },
            error: function () {
                alert("网络错误，请稍后重试！");
            }
        });
    }
});
$("#upwd").blur(function(){
    var upwd=$(this).val();
    // var upwd1=$("#upwd1").val();
    var pts=$("#pts")[0];
    //var prts=$("#prts")[0];
    var reg=/^[a-zA-Z0-9\u4e00-\u9fa5.,\!\@\#\$\%\^\&\*\(\))]{6,20}$/;
    if(!upwd){
        pts.innerHTML="必输项！";
        pts.style.color="red";
        flag.password=false;
        return;
    }else if(!vali(reg,upwd)){
        pts.innerHTML="密码格式错误！";
        pts.style.color="red";
        flag.password=false;
        return;
    }
    /*else if(upwd1!==upwd){
     prts.innerHTML="密码输入不一致，请重新输入！";
     prts.style.color="red";
     flag.password=false;
     return;
     }*/
    else{
        pts.innerHTML="密码正确√";
        pts.style.color="green";
        flag.password=true;
    };
});
$("#upwd1").blur(function(){
    var upwd=$("#upwd").val();
    var reg=/^[a-zA-Z0-9\u4e00-\u9fa5.,\!\@\#\$\%\^\&\*\(\))]{6,20}$/;
    var upwd1=$(this).val();
    var prts=$("#prts")[0];
    if(!upwd1){
        prts.innerHTML="必输项！";
        prts.style.color="red";
        flag.password1=false;
        return;
    }else if(!vali(reg,upwd1)){
        prts.innerHTML="密码格式错误！";
        prts.style.color="red";
        flag.password1=false;
        return;
    }else if(upwd1!==upwd){
        prts.innerHTML="密码输入不一致，请重新输入！";
        prts.style.color="red";
        flag.password1=false;
        return;
    }else{
        prts.innerHTML="密码正确√";
        prts.style.color="green";
        flag.password1=true;
    }
});
$("#phno").blur(function(){
    var phno=$(this).val();
    var phnots=$("#phnots")[0];
    var reg=/^[1][3-9][0-9]{9}$/;
    if(!phno){
        phnots.innerHTML="必输项！";
        phnots.style.color="red";
        flag.phno=false;
        return;
    }else if(!vali(reg,phno)){
        phnots.innerHTML="手机号格式错误！";
        phnots.style.color="red";
        flag.phno=false;
        return;
    }else{
        phnots.innerHTML="输入正确√";
        phnots.style.color="green";
        flag.phno=true;
    };
});
$("#chkb").click(function(){
   if($(this).prop("checked")){
       $("#btn").css("cursor","pointer");
       $("#btn").prop("disabled",false);
   }else{
       $("#btn").css("cursor","not-allowed");
       $("#btn").prop("disabled",true);
   }
});
$("#btn").click(function(){
    var uname=$("#uname").val();
    var uts=$("#uts")[0];
    var upwd=$("#upwd").val();
    var phno=$("#phno").val();
    $("#upwd1").blur();
    $("#phno").blur();
    if(flag.uname==true){
         if($(this).prop("disabled")){
            return;
         }else {
             var ok=flag.uname&&flag.password&&flag.password1&&flag.phno;
             if(ok==false){return false;}
             $.ajax({
                 type:"POST",
                 url: "/add_user",
                 data: {uname: uname, upwd: upwd,phno:phno},
                 success: function (data) {
                     if (data.code > 0) {
                     //alert(data.msg);
                         $(".alert-box").show();
                         sessionStorage["uname"]=uname;
                         var lastT=3;
                         setInterval(function(){
                             lastT--;
                             $(".alert-box p b").html(lastT);
                             if(lastT<=1){
                             location.href="login.html";
                            }
                         },1000);
                  }
                 },
                 error: function () {
                     alert("网络错误，请稍后重试");
                 }
            });
         }
        flag.uname=false;
    };
    //uts.style.color = "red";
    //uts.innerHTML="此用户名已被注册，请重试";
});
function vali(reg,val){
    if(!reg.test(val)){
        return false;
    }else{
        return true;
    }
};





















