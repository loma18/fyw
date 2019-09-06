/*楼盘图像*/
var as=document.querySelectorAll("#detail div.show>h1>a");
const LIWIDTH=134;
var moved=0;
var ul=document.querySelector("#detail div.show>h1 ul");
as[0].onclick=function(){
    if(this.className=="prev use"){
        moved--;
        ul.style.left=-LIWIDTH*moved+"px";
        checkA();
    };
};
as[1].onclick=function(){
    if(this.className=="next use"){
        moved++;
        ul.style.left=-LIWIDTH*moved+"px";
        checkA();
    };
};
lis=ul.children;
if(lis.length<=4){
    as[0].className="prev no-use";
    as[1].className="next no-use";
}
function checkA(){
    if(moved==0){
        as[0].className="prev no-use";
    }else{
        as[0].className="prev use";
    }
    if(lis.length-moved==4){
        as[1].className="next no-use";
    }else{
        as[1].className="next use";
    }
}
var Img=document.querySelector("Img");
ul.onmouseover=function(e){
    if(e.target.nodeName=="IMG"){
        var src=e.target.src;
        var i=src.lastIndexOf(".");
        Img.src=src.slice(0,i-1)+src.slice(i);
        $(e.target).parent().addClass("hover").siblings().removeClass("hover");
    }
};









































































