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