

function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function navbaranimation(){

    gsap.to(".navpart1 svg",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
           
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })
    gsap.to(".navpart1 .show",{
        
        transform:"translateY(0%)",
       
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
           
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })
    
    gsap.to(".navpart2 .links",{
       opacity:0,
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
          
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })

}
function vidoeconanimation(){
    let playcursor = document.querySelector(".play")

let vidcon = document.querySelector(".videocontainer")
vidcon.addEventListener("mouseenter",(dets)=>{
    
   

    gsap.to(playcursor,{
       scale:1,
       opacity:1

    })
})
vidcon.addEventListener("mouseleave",(dets)=>{
    
   

    gsap.to(playcursor,{
       scale:0,
       opacity:0

    })
})
vidcon.addEventListener("mousemove",(dets)=>{
    
   

    gsap.to(playcursor,{
      left:dets.clientX,
      top:dets.clientY,
      marginTop:"30vw"

    })
})
}
function loadinganimation(){
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay:.5,
        duration:.8,
        stagger:.2
    })
    gsap.from(".page1 video",{
        scale:.9,
        opacity:0,
        delay:1.5,
        duration:.5,
        stagger:.2
    })
}

function hoverdata(){
    document.querySelector("#dets1").addEventListener("mouseenter",()=>{
        gsap.to(document.querySelector(".hovercon"),{
         height:"310px",
         duration:.5
        })
        document.querySelector(".hovercon  .hovercontent1 h2").style.display="block"
        document.querySelector(".hovercon  .hovercontent2 h2").style.display="block"
     })
    document.querySelector("#dets1").addEventListener("mouseleave",()=>{
        gsap.to(document.querySelector(".hovercon"),{
         height:"0px",
         duration:.5
        })
          document.querySelector(".hovercon  .hovercontent1 h2").style.display="none"
        document.querySelector(".hovercon  .hovercontent2 h2").style.display="none"
     })
    

     document.querySelector("#dets2").addEventListener("mouseenter",()=>{
        gsap.to(document.querySelector(".hovercon2"),{
         height:"310px",
         duration:.5
        })
          document.querySelector(".hovercon2  .hovercontent1 h2").style.display="block"
        document.querySelector(".hovercon2 .hovercontent2 h2").style.display="block"
     })
     document.querySelector("#dets2").addEventListener("mouseleave",()=>{
        gsap.to(document.querySelector(".hovercon2"),{
         height:"0px",
         duration:.5
        })
        document.querySelector(".hovercon2  .hovercontent1 h2").style.display="none"
        document.querySelector(".hovercon2  .hovercontent2 h2").style.display="none"
     })
    
    
     document.querySelector("#dets3").addEventListener("mouseenter",()=>{
        gsap.to(document.querySelector(".hovercon3"),{
         height:"310px",
         duration:.5
        })
         document.querySelector(".hovercon3  .hovercontent1 h2").style.display="block"
        document.querySelector(".hovercon3 .hovercontent2 h2").style.display="block"


     })
     document.querySelector("#dets3").addEventListener("mouseleave",()=>{
        gsap.to(document.querySelector(".hovercon3"),{
         height:"0px",
         duration:.5
        })
               document.querySelector(".hovercon3  .hovercontent1 h2").style.display="none"
        document.querySelector(".hovercon3 .hovercontent2 h2").style.display="none"
     })
}
function cursoranimation(){

    document.addEventListener("mousemove",(dets)=>{
        gsap.to(document.querySelector(".cursor"),{
        top:dets.clientY,
        left:dets.clientX
        })
        })
        
        
        
        let a = document.querySelectorAll(".child")
        a.forEach((elem)=>{
            elem.addEventListener("mouseenter",()=>{
                gsap.to(document.querySelector(".cursor"),{
                    transform: "translate(-50%,-50%) scale(1)",
                  
                })
            })
        
        elem.addEventListener("mouseleave",()=>{
            gsap.to(document.querySelector(".cursor"),{
                        transform: "translate(-50%,-50%) scale(0)",
                        
                    })
        })
        
        })
}
function pageanimation(){

    gsap.from(".page2 .elem img",{
        opacity:0,
      stagger:.2,
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
           
            start:"top 80%",
            end:"top 40%",
            scrub:4,
            
        }
    })

    document.querySelector(".shopsupport").addEventListener("mouseenter",()=>{
        gsap.from(".shopsupport",{
          opacity:0,
          duration:.4,
          borderBottom: "0px solid white",
          
        })
      })
      
      
      gsap.from(".products .child",{
          opacity:0,
          stagger:.2,
          scrollTrigger:{
              trigger:".products",
              scroller:".main",
             
              start:"top 40%",
             
          }
      })
      


}
function lastpageanimation(){
    gsap.from(".image1",{
        opacity:0,
        duration:1,
       
        scrollTrigger:{
          
            trigger:".ourimpact",
            scroller:".main"
        }
        
       
        
      
    })
    gsap.from(".image2",{
        opacity:0,
        duration:1,
        delay:.2,
        scrollTrigger:{
          
            trigger:".ourimpact",
            scroller:".main"
        }
    
    })
    
    gsap.from(".getemail",{
        opacity:0,
        duration:1,
       
       
        scrollTrigger:{
           
            start:"top 40%",
            trigger:".getemail",
            scroller:".main"
        }
    
    })
    
    gsap.from(".getemail i",{
        opacity:0,
        duration:1,
        delay:.2,
       
        scrollTrigger:{
           
            start:"top 40%",
            trigger:".getemail",
            scroller:".main"
        }
    
    })
    gsap.from(".footermiddle svg",{
        opacity:0,
        duration:1,
       
       
        scrollTrigger:{
           
            start:"top 40%",
            trigger:".footerdata",
            scroller:".main"
        }
    
    })
    
    gsap.from(".lastmsg",{
        opacity:0,
        y:100,
        duration:1,
       
       
        scrollTrigger:{
           
            start:"top 10%",
            trigger:".footerright",
            scroller:".main",
            scrub:3
        }
    
    })
    gsap.from(".privacy h3",{
        opacity:0,
        y:10,
        duration:.3,
       stagger:.2,
       
        scrollTrigger:{
            // markers:true,
            start:"top 10%",
            trigger:".footerright",
            scroller:".main",
            scrub:3
        }
    
    })
}
function hamburger(){
    document.querySelector("#ham").addEventListener("click",()=>{
        gsap.to(".nav ",{
            color:"white"
        })
        gsap.to(".links a ",{
            color:"white"
        })
        gsap.to(".icons i ",{
            color:"black"
        })
        gsap.to(".hamburger",{
            y:"100vh",
            color:"white"
        })
    

    
        
        
    })

  
    
    document.querySelector(".close").addEventListener("click",()=>{
        gsap.to(".hamburger",{
            y:"-100vh",
            duration:1
            })
            gsap.to(".nav ",{
                color:"black"
            })
            gsap.to(".links a ",{
                color:"black"
            })
            gsap.to(".icons i ",{
                color:"black"
            })
    
    
    })
}


locomotiveanimation()
navbaranimation()
vidoeconanimation()
loadinganimation()
hoverdata()
cursoranimation()
pageanimation()
lastpageanimation()
hamburger()

