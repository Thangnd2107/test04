const form=document.querySelector("#form");
const inputName=document.querySelector("#name-id");
const inputPass=document.querySelector("#pass-id");
const inputCf=document.querySelector("#confirm-id");
const body =document.querySelector("body");

form.addEventListener("submit", (e)=>{
e.preventDefault();
const valueName= inputName.value;
const valuePass=inputPass.value;
const valueCf=inputCf.value;

if(valuePass!==valueCf){
alert("Your password does not match with each other, please try again.");


}if (valuePass==valueCf) {
    const ppp = document.createElement("p")
    ppp.innerHTML= `Hello ${valueName}, how are you doing today?`;
    body.appendChild(ppp);
    // document.querySelector("body").appendChild(p)
    inputCf.value="";
    inputPass.value="";
    // inputName.value="";

}
});


