let bar = document.querySelector(".barIcon")
let barOpt = document.querySelector(".toggle")
// barOpt.style.display = "none"
bar.addEventListener("click",()=>{
    console.log("cick")
    barOpt.classList.toggle("barOption")
    // barOpt.style.display = "block"

})
    let homeB = document.querySelector(".home")
    let BarHomeB = document.querySelector(".H-home")
    let sect1 = document.querySelector(".container")
    let sect2 = document.querySelector(".skillContainer")
    let sect3 = document.querySelector("section3")
    let sect4 = document.querySelector("section4")

    let eduB = document.querySelector(".educations")
    let BarEduB = document.querySelector(".H-educations")

    let proB = document.querySelector(".projects")
    let BarProB = document.querySelector(".H-projects")
// homeButtun
function homeF(){
    homeB.addEventListener("click",()=>{
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="block"
        sect2.style.display="block"
    })
    BarHomeB.addEventListener("click",()=>{
        sect4.style.display="none"
        sect3.style.display="none"
        sect1.style.display="block"
        sect2.style.display="block"
    }) 
}homeF()

// educationsButtun
function eduF(){
    eduB.addEventListener("click",()=>{
        sect4.style.display="none"
        sect3.style.display="block"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarEduB.addEventListener("click",()=>{
        sect4.style.display="none"
        sect3.style.display="block"
        sect1.style.display="none"
        sect2.style.display="none"
    }) 
}eduF();

// projectsButton
function projectB(){
    proB.addEventListener("click",()=>{
        sect4.style.display="block"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    BarProB.addEventListener("click",()=>{
        sect4.style.display="block"
        sect3.style.display="none"
        sect1.style.display="none"
        sect2.style.display="none"
    })   
}projectB()