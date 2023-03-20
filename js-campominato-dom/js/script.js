const rator = document.getElementById("genere");
const pre = document.getElementById("tru");
const difi = document.getElementById("level");
let arr = []

function incre(){
    arr = [];
    pre.innerHTML = "";
    let i = 0 ;
    vro = difi.value;
    dipen = 0;

    
    if(vro == "easy"){
        dipen = 100
    } else if(vro == "medium"){
        dipen = 81
    }else{
        dipen=49
    }
    
    while(i<=16){
        let bomb = Math.ceil(Math.random()*dipen)
        if(bomb !== arr[i]){
            arr.push(bomb)
        }
        i++
}
console.log(arr);
    

    for(let i = 1; i <= dipen; i++){
        let bomb = Math.ceil(Math.random()*dipen)
        let divi = grid(i);
        console.log(divi);
        pre.append(divi);
        divi.classList.add(vro)
        if(arr.includes(parseInt(divi.innerText))){
            divi.classList.add("bomb")
        }
    }
    
}
function grid(i){
    const hect = document.createElement("div");
    hect.classList.add("ms-container");
    hect.innerHTML = `<span>${i}</span>`;
    let boms = document.getElementsByClassName("bomb")
    console.log(boms);
    hect.addEventListener("click", function(){
        const bra = parseInt(this.querySelector("span").textContent);
        
        if( arr.includes(parseInt(this.innerText))){
            for(let i = 0; i < 16; i++){
                boms[i].style.backgroundColor = "red";
            }
        } else {
            this.classList.add("blue");
            
        }
        
    });
    return hect
}
rator.addEventListener("click", incre)