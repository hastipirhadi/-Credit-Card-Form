const FormEl = document.getElementById("paymentform");
const Paybtn = document.getElementById("btnPay");
const doneBtn = document.getElementById("btnDone");
const showEl = document.getElementById("show-modal");

Paybtn.addEventListener("click", ()=>{
showEl.classList.toggle("!flex");
showEl.classList.remove("!hidden");
})
document.addEventListener("keydown",(event)=>{
    if (event.key==="Escape"){
        showEl.classList.add("!hidden");
    }

})