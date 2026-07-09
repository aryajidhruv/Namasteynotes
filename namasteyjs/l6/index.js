// setTimeout(function(){
//     console.log("dhurv")
// },5000);
// function x(y){
//     console.log('x');
//     y();

// }
// x(function y(){
//     console.log('y')
// })

function attachEventListener(){
    let count =0;
    document.getElementById('click').addEventListener("click",function(){
        console.log("button clicked",++count)
    })
}
attachEventListener();