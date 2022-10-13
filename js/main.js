
let slider=document.querySelector(".slider"),
carinner=document.querySelector(".slider .carousel-one"),
carrinner=document.querySelector(".slider .carousel-two"),
carrrinner=document.querySelector(".slider .carousel-three"),
upper=document.querySelector(".upper-navbar")
, nav=document.querySelector(".navbar")
, winHi=window.innerHeight;
let heigth=(winHi-(upper.offsetHeight+nav.offsetHeight));

slider.style.height=`${heigth}px`;
carinner.style.height=`${heigth}px`;
carrinner.style.height=`${heigth}px`;
carrrinner.style.height=`${heigth}px`;


// Shuffling Images 
let shuffle=document.querySelectorAll(" .buttons .btn");
let allImages=document.querySelectorAll('.shuffle-images img ');
console.log(allImages)
console.log(document.querySelector(".shuffle-images"))
shuffle.forEach(element => {
    element.onclick=function(e){
       
        console.log(element.getAttribute("data-class"))
       

            allImages.forEach(el => {

                if(element.getAttribute('data-class')=='all'){
                    el.style.cssText="display:block,opacity:none";
                  
                }else{
                
                    if(element.getAttribute('data-class')=="website"){
                        (el.className==="website")? el.style.cssText=" opacity:1": el.style.cssText="opacity:0.5";

                    }else if(element.getAttribute('data-class')=="logos"){
                       (el.className==="logo")?el.style.opacity="1":el.style.opacity="0.5";
                      
                    }else if(element.getAttribute('data-class')=='graphics'){
                        (el.className==="graphics")?el.style.opacity="1":el.style.opacity="0.5"

                    }
                    else if(element.getAttribute('data-class')=='markiting'){
                        (el.className==="markiting")?el.style.opacity="1":el.style.opacity="0.5"

                    }
                    else if(element.getAttribute('data-class')=='videos'){
                        (el.className==="videos")?el.style.opacity="1":el.style.opacity="0.5"

                    }
                    
                    
                    }
             
                  
                })
            }
              
                
            });
          
            
    
        
            
    
       
        

  



