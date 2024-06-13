let inputslider=document.getElementById("inputslider");
let slidervalue=document.getElementById("sliderValue");
let passbox=document.getElementById("passbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let btn=document.getElementById("btn");
let copyicon=document.getElementById("copyicon");


//slidervalue.textContent=inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent=inputslider.value;

});
btn.addEventListener('click', ()=>{
    passbox.value=password();
})
let lowerchars="abcdefghijklmnopqrstuvwxyz"
let upperchars="ABCEDEFGHIJKLMNOPQRSTUVWXYZ";
let allnum="012456789";
let allsym="!@#$%^&*"

function password(){
    let genpassword="";
    let allchars="";

    allchars+=lowercase.checked ? lowerchars : "";
    allchars+=uppercase.checked ? upperchars : "";
    allchars+=numbers.checked ? allnum : "";
    allchars+=symbols.checked ? allsym: "";

    if(allchars=="" || allchars.length==0){
        return genpassword; 
    }

    let i=1;
    while(i<=inputslider.value){
        genpassword+=allchars.charAt(Math.floor(Math.random()*allchars.length));
        i++;
    }
    return genpassword;
}
copyicon.addEventListener('click',()=>{
    if(passbox.value !="" || passbox.value.length >=1){
    navigator.clipboard.writeText(passbox.value);
    copyicon.innerText="check"
    copyicon.title="password copied";

    setTimeout(()=>{
        copyicon.innerHTML="content_copy";
        copyicon.title="";
    },3000)
    } 
})