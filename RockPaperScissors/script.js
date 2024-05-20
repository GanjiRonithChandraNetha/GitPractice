let val1 = document.querySelector(".class1");
let val2 = document.querySelector(".class2");
let val3 = document.querySelector(".class3");
let img1 = document.querySelector("#img1")
//val1.style.visibility = "hidden";
val1.addEventListener("mouseenter",(evt)=>{
    //let img1 = document.querySelector("#img1")
    let img2 = document.querySelector("#img2")
    //console.dir(img1)
    img2.style.visibility = "hidden"
})
val1.addEventListener("mouseleave",(evt)=>{
    //let img1 = document.querySelector("#img1")
    let img2 = document.querySelector("#img2")
    //console.dir(img1)
    img2.style.visibility="visible"
})
val2.addEventListener("mouseenter",(evt)=>{
    //let img1 = document.querySelector("#img1")
    let img4 = document.querySelector("#img4")
    //console.dir(img1)
    img4.style.visibility = "hidden"
})
val2.addEventListener("mouseleave",(evt)=>{
    //let img1 = document.querySelector("#img1")
    let img4 = document.querySelector("#img4")
    //console.dir(img1)
    img4.style.visibility="visible"
})
val3.addEventListener("mouseenter",(evt)=>{
    //let img1 = document.querySelector("#img1")
    let img6 = document.querySelector("#img6")
    //console.dir(img1)
    img6.style.visibility = "hidden"
})
val3.addEventListener("mouseleave",(evt)=>{
    //let img1 = document.querySelector("#img1")
    let img6 = document.querySelector("#img6")
    //console.dir(img1)
    img6.style.visibility="visible"
})