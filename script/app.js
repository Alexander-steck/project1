document.addEventListener("DOMContentLoaded",Slider_info());

class SliderInfo{
  constructor(left, step, stop){
    this.left=left;
    this.step=step;
    this.stop=stop;
  }
}
let STEP=document.querySelector('.container-slaider').offsetWidth;
let STOP=document.querySelector('.wrapper-slaider-img').offsetWidth-STEP;
let SLIDER_INFO = new SliderInfo(0,STEP,STOP);

function Slider_info() {
  let ITEM=document.querySelectorAll('.slider_item');
  ITEM[0].style.background='green';
  ITEM_length=ITEM.length;
  let INDEX=0;
  let INDEX2=-1;
  let INDEX3=ITEM_length;
  let Timer1;
  let Timer2;
  Timer1=setInterval(ShowLeft, 4000);
  function ShowLeft() {
    INDEX3=ITEM_length;
    SLIDER_INFO.left-=SLIDER_INFO.step;
    INDEX++;
    INDEX2++;
    document.querySelector('.wrapper-slaider-img').style.left=SLIDER_INFO.left+'px';
    console.log( SLIDER_INFO.left);
    if(SLIDER_INFO.left==-STOP) {
      clearInterval(Timer1);
      Timer2=setInterval(ShowLeft2, 4000);
    }
      ITEM[INDEX2].style.background='silver';
      ITEM[INDEX].style.background='green';
      console.log(INDEX2);
  }
  function ShowLeft2() {
    INDEX2=-1;
    SLIDER_INFO.left-=-SLIDER_INFO.step;
    INDEX--;
    INDEX3--;
    ITEM[3].style.background='silver';
    document.querySelector('.wrapper-slaider-img').style.left=SLIDER_INFO.left+'px';
    console.log(SLIDER_INFO.left);
    if (SLIDER_INFO.left==0) {
      clearInterval(Timer2);
      Timer1=setInterval(ShowLeft, 4000);
    }
    ITEM[INDEX].style.background='green';
    ITEM[INDEX3].style.background='silver';
  }
}