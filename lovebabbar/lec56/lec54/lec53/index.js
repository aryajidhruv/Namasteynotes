

// function changeText(){
//     let fpara = document.getElementById('fpara')
//     fpara.textContent = "dhruv arya"

// }

// let fpara = document.getElementById('fpara')
// fpara.addEventListener('click',changeText)



let paras = document.querySelectorAll('p')

function alertPara(event){
    alert("you have clicked on para " + event.target.textContent)
}

for(let i=0; i<paras.length; i++){
    let para = paras[i];
    para.addEventListener('click',alertPara)

}