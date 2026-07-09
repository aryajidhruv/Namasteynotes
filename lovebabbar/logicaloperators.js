 /*The main working of logical operators is to evaluate multiple conditions and return a single Boolean value (true or false).*/

/* AND-(&&)->sab true hai  ->true
         ->ek bhi false hai ->false */

let ans = (true && true && true)
console.log(ans)

let ans1 = (true&&true&&false)
console.log(ans1)



// or-(||)->ek bhi true hai ->true
//        ->saare false hai ->false

let ans3 = (true||true||false)
console.log(ans3)

// not-(!) -> true ->false
//         -> false->true

let ans4 = !(true)
console.log(ans4)

//Falsy: false, 0, "", null, undefined, NaN.


