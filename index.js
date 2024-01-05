let h=document.createElement("h1")
h.textContent="COUNT DOWN START"
h.style.textAlign="center"
h.style.textShadow="2px 2px blue"
document.body.appendChild(h)

let p =document.createElement("div")
p.id="content"
p.textContent="0:00"
p.style.fontSize="50px"
p.style.height="100px"
p.style.width="200px"
p.style.marginLeft="45%"
p.style.marginTop="10px"
p.style.textAlign="center"
document.body.appendChild(p)

// 1.button creation
let b=document.createElement("button")
b.id="start"
b.textContent="start"
b.style.margin="20px"
b.style.marginLeft="45%"
b.style.marginTop="20px"
b.style.width="100px"
b.style.height="50px"
b.style.borderRadius="10px"
b.style.backgroundColor="pink"
document.body.appendChild(b)

 async function  start(){
    let increment=0
let p=document.getElementById("content");
let progInterval= setInterval(function(){
    if(increment===30){
        clearInterval(progInterval)
        alert("count down successfully  completed")
    }else{
        increment=increment+1
        p.textContent=increment
    }
},2000)
 } 
 addEventListener("click",start)
 addEventListener("click",reset)

// 2.button creation
let r=document.createElement("button")
r.textContent="reset"
r.id="reset"
r.style.width="100px"
r.style.height="50px"
r.style.borderRadius="10px"
r.style.backgroundColor="red"
document.body.appendChild(r)

function reset(){
let increment1=0
let q=document.getElementById("reset")
if(q){
    p.textContent=0;
}
else{

    p.textContent=increment1
} 

}

