window.onload=function(){

    /*轮播广告栏部分*/
    var bannerBox=document.querySelector("#banner>.banner-box");
    var imgList=bannerBox.children[0];
    var buttons=bannerBox.children[1].children;
    var prev=bannerBox.children[2];
    var next=bannerBox.children[3];
    var index=1;
    var timer;

    function animate(offset){
        var newLeft=parseInt(imgList.style.left)+offset;
        imgList.style.left=newLeft+"px";
        if(newLeft<-2720){
            imgList.style.left=-680+"px";
        }
        if(newLeft>-680){
            imgList.style.left=-2720+"px";
        }
    }
    function play(){
        timer=setInterval(function(){
            next.onclick();
        },2000)
    }
    function stop(){
        clearInterval(timer);
    }
    function buttonsShow(){
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className="on"){
                buttons[i].className="";
            }
        }
        buttons[index-1].className="on";
    }
    prev.onclick=function(){
        index-=1;
        if(index<1){
            index=4;
        }
        buttonsShow();
        animate(680);
    };
    next.onclick=function(){
        index+=1;
        if(index>4){
            index=1;
        }
        buttonsShow();
        animate(-680);
    };
    for(var i=0;i<buttons.length;i++){
        (function(i){
            buttons[i].onclick=function(){
                var clickIndex=parseInt(this.getAttribute("index"));
                var offset=680*(index-clickIndex);
                animate(offset);
                index=clickIndex;
                buttonsShow();
            }
        })(i)
    }
    bannerBox.onmouseover = stop;
    bannerBox.onmouseout = play;
    play();
    /*右下角广告部分*/
    var brAd=document.getElementsByClassName("br-ad")[0];
    brAd.style.bottom=0;
    brAd.firstElementChild.onclick=function(){
        brAd.style.bottom="-150px";
        setTimeout(function(){
            brAd.style.bottom=0;
        },6000)
    };
};




















