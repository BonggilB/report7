// 메뉴바
$(function(){
    $(".menu4>ul>li").mouseover(function(){
        $(".submenu",this).stop().slideDown(300);
    });
    $(".menu4>ul").mouseout(function(){
        $(".submenu",this).stop().slideUp(300);
    });
});
// 액티브 추가/삭제
function addactive(target){
    target.style.display="flex"
}
function removeclass(target){
    target.style.display="none"
}
// 투명도 조정
function opa0(target){
    target.style.opacity="0"
}
function opa1(target){
    target.style.opacity="1"
}
// 슬라이드
let sli01 = document.querySelector('.slide01');
let sli02 = document.querySelector('.slide02')
let sli03 = document.querySelector('.slide03')
let slivar = 0
function slide1(){
    slivar=0
    opa0(sli02);
    opa0(sli03);
    opa1(sli01);
    document.querySelector('.btn-1').style.backgroundColor ="aqua"
    document.querySelector('.btn-2').style.backgroundColor ="#aaa"
    document.querySelector('.btn-3').style.backgroundColor ="#aaa"
}
function slide2(){
    slivar=1
    opa0(sli01);
    opa0(sli03);
    opa1(sli02);
    document.querySelector('.btn-2').style.backgroundColor ="aqua"
    document.querySelector('.btn-1').style.backgroundColor ="#aaa"
    document.querySelector('.btn-3').style.backgroundColor ="#aaa"
}
function slide3(){
    slivar=2
    opa0(sli02);
    opa0(sli01);
    opa1(sli03);
    document.querySelector('.btn-3').style.backgroundColor ="aqua"
    document.querySelector('.btn-2').style.backgroundColor ="#aaa"
    document.querySelector('.btn-1').style.backgroundColor ="#aaa"
}
function go1(){
    slivar++
    if(slivar==0){
        slide1()
    }else if(slivar ==1){
        slide2()
    }else if(slivar ==2){
        slide3()
    }else if(slivar ==3){
        slide1()
        slivar=0}
}
setInterval(go1, 3000);
// ㅜㅜ와 드디어
// 갤러리,공지사항
let notice = document.querySelector('.notice');
let gallery = document.querySelector('.gallery');
let notpo = document.querySelector('.not-po');

let noticeBtn = document.querySelector('.btn-not');
let galleryBtn = document.querySelector('.btn-gal');
noticeBtn.addEventListener('click',function(){
    addactive(notice);
    addactive(notpo);
    removeclass(gallery);
})
galleryBtn.addEventListener('click',function(){
    addactive(gallery);
    removeclass(notice);
    removeclass(notpo);
})
// 공지사항 팝업
let notPop = document.querySelector('.notice').getElementsByTagName('li');
let notPopUp = document.querySelectorAll('.modal-popup')
console.log(notPop);
console.log(notPopUp);

notPop[0].addEventListener('click',function(){
    removeclass(notPopUp[1]);
    removeclass(notPopUp[2]);
    removeclass(notPopUp[3]);
    removeclass(notPopUp[4]);
    addactive(notPopUp[0]);
})
notPop[1].addEventListener('click',function(){
    removeclass(notPopUp[0]);
    removeclass(notPopUp[2]);
    removeclass(notPopUp[3]);
    removeclass(notPopUp[4]);
    addactive(notPopUp[1]);
})
notPop[2].addEventListener('click',function(){
    removeclass(notPopUp[1]);
    removeclass(notPopUp[0]);
    removeclass(notPopUp[3]);
    removeclass(notPopUp[4]);
    addactive(notPopUp[2]);
})
notPop[3].addEventListener('click',function(){
    removeclass(notPopUp[1]);
    removeclass(notPopUp[2]);
    removeclass(notPopUp[0]);
    removeclass(notPopUp[4]);
    addactive(notPopUp[3]);
})
function resetPop(){
    removeclass(notPopUp[0]);
    removeclass(notPopUp[1]);
    removeclass(notPopUp[2]);
    removeclass(notPopUp[3]);
}