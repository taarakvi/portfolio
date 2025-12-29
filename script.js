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
    let sect6 = document.querySelector("section6")
    let sect7 = document.querySelector("section7")
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
// about
    let aboutMe = document.querySelector(".H-about")
    let BarAboutMe = document.querySelector(".H-about-me")
// hire me
    let hireMe = document.querySelector(".hire")
    let BarHireMe = document.querySelector(".H-hire")

// homeButtun
function homeF(){
    homeB.addEventListener("click",()=>{
        sect7.style.display="none"
        sect6.style.display="none"
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="block"
        sect2.style.display="block"
    })
    BarHomeB.addEventListener("click",()=>{
        sect7.style.display="none"
        sect6.style.display="none"
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
        sect7.style.display="none"
        sect6.style.display="none"
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="block"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarEduB.addEventListener("click",()=>{
        sect7.style.display="none"
        sect6.style.display="none"
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
        sect7.style.display="none"
        sect6.style.display="none"
        sect5.style.display="none"
        sect4.style.display="block"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarProB.addEventListener("click",()=>{
        sect7.style.display="none"
        sect6.style.display="none"
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
        sect7.style.display="none"
        sect6.style.display="none"
        sect5.style.display="block"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarContact.addEventListener("click",()=>{
        sect7.style.display="none"
        sect6.style.display="none"
        sect5.style.display="block"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
        barOpt.classList.toggle("barOption")
    })   
}contactB();
// about
function aboutMeB(){
    aboutMe.addEventListener("click",()=>{
        sect7.style.display="none"
        sect6.style.display="block"
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarAboutMe.addEventListener("click",()=>{
        sect7.style.display="none"
        sect6.style.display="block"
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
        barOpt.classList.toggle("barOption")
    })   
}aboutMeB();
// hire me
    function hireMeB(){
    hireMe.addEventListener("click",()=>{
        sect7.style.display="block"
        sect6.style.display="none"
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarHireMe.addEventListener("click",()=>{
        sect7.style.display="block"
        sect6.style.display="none"
        sect5.style.display="none"
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
        barOpt.classList.toggle("barOption")
    })   
}hireMeB();




// CONTACT FORM
// browser script from gmailjs
        (function(){
        emailjs.init( "wRIBvlc6NkkcrRmi1");
        })();
//  mainFunction      
    function sendMail(){
        var forms = {
        name: document.getElementById("inptName").value,
        email: document.getElementById("inptGmail").value,
        title: document.getElementById("inptSubject").value,
        address: document.getElementById("inptAdd").value,
        message: document.getElementById("textArea").value
        };
// access ID
        let srvID = 'service_0y0wlle'
        let tempID = 'template_husnajl'

    function check(){
        let nameError = document.querySelector(".nameError")
        let gmailError = document.querySelector(".gmailError")
        let addError = document.querySelector(".addError")
        let numberError= document.querySelector(".numberError")
        let textArea = document.getElementById("textArea") 
// access regex
        let pattern = /^[a-zA-Z0-9.+_-]+@gmail\.com$/;
        let x = pattern.test(forms.email)

        let patternA = /^[A-Za-z .-]{2,40}$/
        let y = patternA.test(forms.name)

        let patternB = /^[A-Za-z0-9 .,_@!?#$%&()-]{3,100}$/;
        let z = patternB.test(forms.title)

        let patternC = /^[A-Za-z0-9\s,.-]{5,150}$/;
        let j = patternC.test(forms.address)

// CHECK CONDITIONS
        if(x == true){
            console.log("gmail true")
            gmailError.textContent = ""
        } else{
            gmailError.textContent = "invalid user@gmail.com"
            console.log(gmailError.value)
        }

        if(y === true){
            console.log("name true")
            nameError.textContent = ""
        } else{
            nameError.textContent = "invalid"
        }

         if(z === true){
            console.log("subject true")
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
// check input is empety or not 
        if(forms.name===""||forms.email==""||forms.title===""||forms.address==""||textArea.value==""){
                    alert("Fill Full Details")
                    
                }
// check input ofter fillup is true or not (match from regex)
                else{
                    if(x === true && z === true && y === true && j === true){
                     alert("Message Sent")   
                      emailjs.send(srvID,tempID,forms)                 
                        document.getElementById("inptName").value = "";
                        document.getElementById("inptGmail").value = "";
                        document.getElementById("inptSubject").value = "";
                        document.getElementById("inptAdd").value = "";
                        document.getElementById("textArea").value = "";
                    }
                    else{
                        alert("Something Went Wrong")
                    }
                }    

        }check()
    }  

    let cbutton = document.querySelector(".cButton")
    cbutton.addEventListener("click",()=>{
        sendMail();
    })

// hireCbutton
function hireSMSb(){
    let hireCbutton = document.querySelector(".hireCbutton")
    hireCbutton.addEventListener("click",()=>{
    sect7.style.display="none"
    sect5.style.display="block"
    console.log("hello")
})
}hireSMSb()
