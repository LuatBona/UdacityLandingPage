
// intialing the variables 

const sec1 = document.querySelector("#sec-one");
const sec2 = document.querySelector("#sec-two");
const sec3 = document.querySelector("#sec-three");
const sec4 = document.querySelector("#sec-four");
const sects = document.querySelectorAll("#secBtn");

const sections = document.querySelectorAll("section")

// active funtion 
window.addEventListener("scroll", () => {
sections.forEach((section) =>{

    // Selecting the values that are going to indicate which section is on display + the currentviewpoint value
    var currentViewport = window.scrollY 
    var secTop = section.getBoundingClientRect().top
    var secBottom = section.getBoundingClientRect().bottom

    // choosing the section on the viewport based on which range the currentViewport is on 
    if ( currentViewport >= secTop && currentViewport <= secBottom ){ 

        section.classList.add("active")

    }
    else{ 

        section.classList.remove("active")


    }
    


    });
});


// scrolling on click function 

sects.forEach(sec =>{

    sec.addEventListener("click",()=>{ 
        var currentSec = sec.className;
    
        switch(currentSec){ 

            case "1": window.scrollTo({
            
            top:sec1.getBoundingClientRect().top + window.scrollY ,
            left:sec1.getBoundingClientRect().left + window.scrollX,
            behavior:"smooth"
        
        })

        console.log(sec.getBoundingClientRect())

        break;

        
        case "2": window.scrollTo({
            
            top:sec2.getBoundingClientRect().top + window.scrollY ,
            left:sec2.getBoundingClientRect().left + window.scrollX,
            behavior:"smooth"
    
    
            
    
        
        })

        console.log(sec.getBoundingClientRect())


        break;
        
        case "3": window.scrollTo({
            
            top:sec3.getBoundingClientRect().top + window.scrollY ,
            left:sec3.getBoundingClientRect().left + window.scrollX,
            behavior:"smooth"
    
    
            
    
        
        })

        console.log(sec.getBoundingClientRect())

        break;
        
        case "4": window.scrollTo({
            
            top:sec4.getBoundingClientRect().top + window.scrollY ,
            left:sec4.getBoundingClientRect().left + window.scrollX,
            behavior:"smooth"
    
    
            
    
        
        })
        console.log(sec.getBoundingClientRect())



        break;

        default:
         break;

    }




 })

})
