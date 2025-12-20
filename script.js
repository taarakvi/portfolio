let bar = document.querySelector(".barIcon")
let barOpt = document.querySelector(".toggle")
// barOpt.style.display = "none"
bar.addEventListener("click",()=>{
    console.log("cick")
    barOpt.classList.toggle("barOption")
    // barOpt.style.display = "block"

})
   
    let sect1 = document.querySelector(".container")
    let sect2 = document.querySelector(".skillContainer")
    let sect3 = document.querySelector("section3")
    let sect4 = document.querySelector("section4")
    let sect5 = document.querySelector("section5")
// homeButton
    let homeB = document.querySelector(".home")
    let BarHomeB = document.querySelector(".H-home")
// educationButton
    let eduB = document.querySelector(".educations")
    let BarEduB = document.querySelector(".H-educations")
// projectsB
    let proB = document.querySelector(".projects")
    let BarProB = document.querySelector(".H-projects")
// CONTACT
    let contact = document.querySelector(".H-contact")
    let BarContact = document.querySelector(".HBr-contact")
// homeButtun
function homeF(){
    homeB.addEventListener("click",()=>{
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="block"
        sect2.style.display="block"
    })
    BarHomeB.addEventListener("click",()=>{
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="block"
        sect2.style.display="block"
        barOpt.classList.toggle("barOption")
    }) 
}homeF()

// educationsButtun
function eduF(){
    eduB.addEventListener("click",()=>{
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="block"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarEduB.addEventListener("click",()=>{
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="block"
        sect1.style.display="none"
        sect2.style.display="none"
        barOpt.classList.toggle("barOption")
    }) 
}eduF();

// projectsButton
function projectB(){
    proB.addEventListener("click",()=>{
        sect5.style.display="none"
        sect4.style.display="block"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarProB.addEventListener("click",()=>{
        sect5.style.display="none"
        sect4.style.display="block"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
        barOpt.classList.toggle("barOption")
    })   
}projectB()

// contact
function contactB(){
    contact.addEventListener("click",()=>{
        sect5.style.display="block"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarContact.addEventListener("click",()=>{
        sect5.style.display="block"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
        barOpt.classList.toggle("barOption")
    })   
}contactB()

// contact input form
function inputForm(){
    let name = document.getElementById("inptName")
    let gmail = document.getElementById("inptGmail")
    let number = document.getElementById("number")
    let address = document.getElementById("inptAdd")  
    let textArea = document.getElementById("textArea")  
    let buttun = document.querySelector(".cButton")

    let nameError = document.querySelector(".nameError")
    let gmailError = document.querySelector(".gmailError")
    let addError = document.querySelector(".addError")
    let numberError= document.querySelector(".numberError")

    buttun.addEventListener("click",()=>{
        function check(){
             let pattern = /^[a-zA-Z0-9.+_-]+@gmail\.com$/;
        let x = pattern.test(gmail.value)

        let patternA = /^[A-Za-z .-]{2,40}$/
        let y = patternA.test(name.value)

        let patternB = /^\d{10}$/;
        let z = patternB.test(number.value)

        let patternC = /^[A-Za-z0-9\s,.-]{5,150}$/;
        let j = patternC.test(address.value)

        // console.log(gmail.value)
        if(x == true){
            console.log("gmail true")
            gmailError.textContent = ""
        } else{
            gmailError.textContent = "invalid"
            console.log(gmailError.value)
        }

        if(y === true){
            console.log("name true")
            nameError.textContent = ""
        } else{
            nameError.textContent = "invalid"
        }

         if(z === true){
            console.log("number true")
            numberError.textContent = ""
        } else{
            numberError.textContent = "invalid"
        }
        if(j === true){
            console.log("address true")
            addError.textContent = ""
        }
        else{
            addError.textContent = "invalid"
        }

        if(name.value===""||gmail.value==""||address.value==""||textArea.value==""||number.value===""){
                    alert("fill full details")
                    
                }
                else{
                    if(x === true && y==true&&z===true&&j===true){
                     alert("message sent")   
                    name.value = "";
                    gmail.value = "";
                    address.value = "";
                    textArea.value = "";
                    number.value = "";   
                    }
                    else{
                        alert("something wrong")
                    }
                }    

        }check()
       
        // function verify(){
        
        // }verify();
        
    })
}inputForm()