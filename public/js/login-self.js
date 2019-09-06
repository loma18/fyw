$("header").load("header.html",function(){
    $("#login>a").click(function(e){
        e.preventDefault();
        history.go(0);
    })
});
$("footer").load("footer.html");
/*如果localStorage保存有用户名，则登录页面加载时自动补全用户名密码*/
$(window).load(function(){
    if(localStorage["uname_loc"]){
        $("#uname_lg").val(localStorage["uname_loc"]);
        $("#upwd_lg").val(localStorage["upwd_loc"]);
        $("#chkAuto").prop("checked",true);
    }
});
/*登录*/
 btn_lg.onclick=function(){
     var u=uname_lg.value;
     var p=upwd_lg.value;
     $.ajax({
        type:"post",
        url:"/login",
        data:{uname:u,upwd:p},
        success:function(data){
            //console.log(data.length);//?????为何{code:-1,msg:"用户名或密码错误！"}长度为underfined
            if(data.length>0){
                sessionStorage["uname"]=u;
                sessionStorage["nname"]=data[0].nname;
                if($("#chkAuto").prop("checked")){
                    localStorage["uname_loc"]=$("#uname_lg").val();
                    localStorage["upwd_loc"]=$("#upwd_lg").val();
                    $.ajax({
                        type:"GET",
                        url:"/sel_nname",
                        data:{uname:localStorage["uname_loc"]},
                        success:function(data) {
                            localStorage["nname_loc"]=data[0].nname;
                        },
                        error:function(){alert("网络出错，请重试");}
                    })
                }
                /*else{
                    localStorage["uname_loc"]="";
                }*/
                location.href="index.html";
            }else{
                $(".tips_lg").show();
                $(".tips_lg").html(data.msg+"！");
            }

        },
         error:function(){
             alert("网络错误，请稍后再试");
         }
     });
    //alert("登录成功 3s后跳转至之前页面");
    //history.go(-1);
};



















