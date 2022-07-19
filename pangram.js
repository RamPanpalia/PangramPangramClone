let width = screen.width
const slider = document.querySelector('.carousal-background');
const matter = document.querySelector('.carousal-matter-box');

matter.style.scrollBehaviour = "auto";
slider.style.scrollBehaviour = "auto";
let isDown = false;
let startX
// let scrollLeft
matter.scrollLeft = width;
slider.scrollLeft = width;
// alert(width)

// slider.style.height=matter.style.height;

function markActive() {
    let sl = slider.scrollLeft
    var a = Math.floor(sl / width);
    document.querySelectorAll('.dots div').forEach(element => {
        element.classList.remove("dotActive");
    });
    // document.querySelector('.sc').innerHTML=(a%6!=0?a%6:(sl<width?5:1));
    let ans = (a % 6 != 0 ? a % 6 : (sl < width ? 5 : 1));
    document.querySelector(`.dot${ans}`).classList.add("dotActive");
    return ans;
}

matter.addEventListener('scroll', () => {
    let ans = markActive();
    document.querySelector('.textBox p').addClassList
    //     // let sl=slider.scrollLeft
    //     // var a=Math.floor(sl/width);
    //     if(ans=5){
    //         slider.scrollLeft=width*5
    //         matter.scrollLeft=width*5
    //         document.querySelector('.sc').innerHTML="ans=5";
    //     }
    //     if(ans=1){
    //         slider.scrollLeft=width
    //         matter.scrollLeft=width
    //         document.querySelector('.sc').innerHTML="ans=1"
    //     }
})

matter.addEventListener('mousedown', (e) => {
    isDown = true;
    matter.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
})

matter.addEventListener('mouseleave', (e) => {
    isDown = false;
    matter.classList.remove('active');
})

matter.addEventListener('mouseup', (e) => {
    isDown = false;
    matter.classList.remove('active');
})

matter.addEventListener('mousemove', (e) => {
    if (!isDown) {
        return;
    }
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
    matter.scrollLeft = scrollLeft - walk;
})

// slider.addEventListener('mousedown',(e)=>{
//     isDown=true;
//     slider.classList.add('active');
//     startX=e.pageX-slider.offsetLeft;
//     scrollLeft=slider.scrollLeft;
// })

// slider.addEventListener('mouseleave',(e)=>{
//     isDown=false;
//     slider.classList.remove('active');
// })

// slider.addEventListener('mouseup',(e)=>{
//     isDown=false;
//     slider.classList.remove('active');
// })

// slider.addEventListener('mousemove',(e)=>{
//     if(!isDown){
//         return;
//     }
//     e.preventDefault();
//     const x=e.pageX-slider.offsetLeft;
//     const walk=(x-startX)*3;
//     slider.scrollLeft=scrollLeft-walk;
//     matter.scrollLeft=scrollLeft-walk;
// })
function setSlide(x) {

    slider.scrollLeft = x * width;
    matter.scrollLeft = x * width;
    document.querySelectorAll('.dots div').forEach(element => {
        element.classList.remove("dotActive");
    });
    document.querySelector(`.dot${x}`).classList.add("dotActive");
}

//Scroll Effect for Cards
window.addEventListener('scroll', () => {
    let val = window.scrollY
    // document.querySelector('.sc').innerHTML = val
    if (val > 1104) {
        //1104-2090
        let slope1 = (180 - 0) / (1104 - 2090);
        let slope2 = (60 - 0) / (1104 - 2090);
        let slope3 = (150 - 0) / (1104 - 2090);
        /*
        y-y1
        ----  =  slope(val-y1)+x1
        x-x1
        */
       document.querySelector('.Cards-row-2').style.marginTop = `${slope1 * (val - 1104) * 1.6 + 180}px`;
       document.querySelector('.Cards-row-3').style.marginTop = `${slope2 * (val - 1104) * 1.6 + 60}px`;
       document.querySelector('.Cards-row-4').style.marginTop = `${slope3 * (val - 1104) * 1.6 + 150}px`;
    }
    else {
        document.querySelector('.Cards-row-2').style.marginTop = `${180}px`;
        document.querySelector('.Cards-row-3').style.marginTop = `${60}px`;
        document.querySelector('.Cards-row-4').style.marginTop = `${150}px`;
    }
})
window.addEventListener('scroll', () => {
    // var one="to bottom"
    // var two="rgba(31, 31, 31, 0.880)"
    // var three="rgba(31, 31, 31,1)"
    // matter.style.backgroundColor='linear-gradient('+two+','+three+')';
})
var isClosed=true
function toggleBurger(){
    let burger1=document.querySelector('.burger1')
    let burger2=document.querySelector('.burger2')


    if(isClosed){
        burger2.style.transitionDelay="0s";
        burger1.style.transitionDelay="0.25s";
        burger1.style.padding="30px";
        burger1.style.height="68vh";
        burger2.style.height="92vh";
        // alert("opened")
        isClosed=false
    }
    else{
        burger1.style.transitionDelay="0s";
        burger2.style.transitionDelay="0.25s";
        burger1.style.padding="0px";
        burger1.style.height="0px";
        burger2.style.height="0vh";
        // alert("closed")
        isClosed=true
    }
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square1 = entry.target.querySelector('.textBox1 p');
      const square2 = entry.target.querySelector('.textBox2 p');
      const square3 = entry.target.querySelector('.textBox3 p');
      const square4 = entry.target.querySelector('.textBox4 p');
  
      if (entry.isIntersecting) {
        square1.classList.add('animated-textBox');
        square2.classList.add('animated-textBox');
        square3.classList.add('animated-textBox');
        square4.classList.add('animated-textBox');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square1.classList.remove('animated-textBox');
      square2.classList.remove('animated-textBox');
      square3.classList.remove('animated-textBox');
      square4.classList.remove('animated-textBox');
    });
  });
  
  observer.observe(document.querySelector('.Box-1-dup'));
  observer.observe(document.querySelector('.Box-1'));
  observer.observe(document.querySelector('.Box-2'));
  observer.observe(document.querySelector('.Box-3'));
  observer.observe(document.querySelector('.Box-4'));
  observer.observe(document.querySelector('.Box-5'));
  observer.observe(document.querySelector('.Box-5-dup'));