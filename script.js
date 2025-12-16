let bar = document.querySelector(".barIcon")
let barOpt = document.querySelector(".toggle")
// barOpt.style.display = "none"
bar.addEventListener("click",()=>{
    console.log("cick")
    barOpt.classList.toggle("barOption")
    // barOpt.style.display = "block"

})
