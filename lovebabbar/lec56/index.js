
// // let firstPromise = new Promise((resolve, reject) => {
// //     function sayMyName(){
// //         console.log("dhruv arya")
// //     }
// //     setTimeout(sayMyName,10000)
// //     resolve(1)
// // })


// let promise1 = new Promise((resolve, reject)=>{
//     let success = true;
    
//     if (success){
//         resolve("promise fullfiled")
//     }
//     else{
//         reject("promise failed")
//     }
// })

// promise1.then((message)=>{
//     console.log("Then ka messaga "+message)
// }).catch((error)=>{
//     console.log("error " +error)
// })

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'first')
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'second')
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject,1000,'third')
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
}).catch((error)=>{
    console.log("error "+error  )
})