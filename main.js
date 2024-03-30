//############################################################
//ASS1

/*
let q1tag =document.querySelector("div")
let q2id =document.querySelector("#elzero")
let q3class =document.querySelector(".element")
let q4name =document.querySelector("[name='js']")

console.log(q1tag);
console.log(q2id);
console.log(q3class);
console.log(q4name);

let q1taga =document.querySelectorAll("div")
let q2ida =document.querySelectorAll("#elzero")
let q3classa =document.querySelectorAll(".element")
let q4namea =document.querySelectorAll("[name='js']")

console.log(q1taga);
console.log(q2ida);
console.log(q3classa);
console.log(q4namea);


let ass1id =document.getElementById("elzero")
let ass1class=document.getElementsByClassName("element")
let ass1tag=document.getElementsByTagName("div")

let select13 = document.body.children[0];
let select14 = document.body.childNodes[1];
let select15 = document.body.firstElementChild;

console.log(ass1id);
console.log(ass1class);
console.log(ass1tag);
console.log(select13);
console.log(select14);
console.log(select15);
console.log("#######################################################")

//############################################################
//ASS2
for(let i=0;i<10;i++){
document.images[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
document.images[i].alt="elzeo log "
}/*CHANGE IN DIV HTML CONSOLE */



//############################################################
//ASS2
/*
console.log("#######################################################")
for(let i=0;i<10;i++){
 document.querySelector("[alt='Elzero Logo']");
    }

    console.log("#######################################################")


//############################################################
//ASS3

/*onipute pour entrer qlq chose donc impoertant et apres 
pour arriver a mon val je dois mettre la var qui jai deja a al premier declarer
apres .value  nhathm f innerHTML*/
/*
let usinput =document.querySelector("[type='number']")
let rdiv=document.querySelector(".result")
usinput.oninput=function(){
rdiv.innerHTML =`{${usinput.value}} 
    USD Dollar = {${(usinput.value * 15.6).toFixed(2)}} Egyptian Pound`
}/*tofixed bach nfixier 2 nmbrs brk float 
/
*document.forms[0].onsubmit = function(e){
  
    let usvalid=false;
if(usinput.value !== ""){
    usvalid=true;
    let res=usinput*10;
}
}
console.log(e);*/
console.log("#######################################################")

//############################################################
//ASSS4

let one= document.querySelector(".one")
let two= document.querySelector(".two")
one.innerHTML=two.innerHTML
one.title =two.title

two.title="two"
two.innerHTML="two"


//############################################################
/*ASS5*/
for (let i=0;i<5;i++){
    if(document.images[i].hasAttributes("alt")){
document.images[i].alt="old"
    }else{
document.images[i].alt="newww"
}
}
//############################################################
/*ASS6*/
let inputNbr =document.querySelector("[type='number']")
let inputText =document.querySelector("[name='texts']")
let select =document.querySelector("[name='type']")
let sub =document.querySelector("[type='submit']")
let r =document.querySelector(".results")


/*pour pas envoyer des donnees apres not refrech de page */
sub.onclick = function(e){
     e.preventDefault()

document.querySelectorAll(".box").forEach((e) => e.remove())

    for(let i=0;i<inputNbr.value;i++){
    let myelm=document.createElement(`${select.value}`)
   //et myelmtext=document.createTextNode(inputText.value)  
   // myelm.appendChild(inputText.value)
   myelm.className = "box";
   /*
   element.title = "Element";
   element.id = `id-${i + 1}`;*/
    myelm.innerHTML=inputText.value
    r.append(myelm)
}

}
//styles css
document.querySelector("[name='create']").style.backgroundColor="green"





//############################################################