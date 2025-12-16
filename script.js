let bar = document.querySelector(".barIcon")
let barOpt = document.querySelector(".toggle")
// barOpt.style.display = "none"
bar.addEventListener("click",()=>{
    console.log("cick")
    barOpt.classList.toggle("barOption")
    // barOpt.style.display = "block"

})


function eduF(){
    let eduB = document.querySelector(".educations")
    let sect1 = document.querySelector(".container")
    let sect2 = document.querySelector(".skillContainer")
    let sect3 = document.querySelector("section3")
    // eduB.style.display = "none"
    eduB.addEventListener("click",()=>{
        sect3.style.display="block"
        sect1.style.display="none"
        sect2.style.display="none"
    })
    
}eduF();
