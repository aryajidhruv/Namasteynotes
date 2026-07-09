//code 1

let t1 = performance.now()
for (let i=1; i<=100;i++){
    let para = document.createElement('p')
    para.textContent = 'This is para' +i;
    document.body.appendChild(para)
}

let t2 = performance.now()
console.log(t2-t1)


//code2
let t3 = performance.now()
let mydiv = document.createElement('div')
for(let i=0; i<=100;i++){
    let para = document.createElement('p');
    para.textContent = 'This is para'+i;
    mydiv.appendChild(para)
}
document.body.appendChild(mydiv)

let t4 = performance.now()

console.log(t4-t3)


//best code

let t6= performance.now()
let fragment =  document.createDocumentFragment()

for (let i=0;i<=100;i++){
    let para  = document.createElement('p');
    para.textContent ='my para '+ i;
    fragment.appendChild(para)
}
document.body.appendChild(fragment)

let t7=performance.now()
console.log(t7-t6)