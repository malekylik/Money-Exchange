// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency <= 0) return {};
    if(currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    let temp = currency;

    let H = Math.floor(temp / 50); 
    temp -= H * 50;
    let Q = Math.floor(temp / 25); 
    temp -= Q * 25;
    let D = Math.floor(temp / 10); 
    temp -= D * 10;
    let N = Math.floor(temp / 5); 
    temp -= N * 5;
    let P = Math.floor(temp / 1); 

    let exchange = {};
    if(H > 0) exchange["H"] = H;
    if(Q > 0) exchange["Q"] = Q;
    if(D > 0) exchange["D"] = D;
    if(N > 0) exchange["N"] = N;
    if(P > 0) exchange["P"] = P;

    return exchange;
}


// function makeExchange(currency) {
//     if(currency <= 0) return {};
//     if(currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

//     let temp = currency;

//     let H = Math.floor(temp / 50); 
//     temp -= H * 50;
//     let Q = Math.floor(temp / 25); 
//     temp -= Q * 25;
//     let D = Math.floor(temp / 10); 
//     temp -= D * 10;
//     let N = Math.floor(temp / 5); 
//     temp -= N * 5;
//     let P = Math.floor(temp / 1); 

//     let exchange = {};
//     if(H > 0) exchange["H"] = H;
//     if(Q > 0) exchange["Q"] = Q;
//     if(D > 0) exchange["D"] = D;
//     if(N > 0) exchange["N"] = N;
//     if(P > 0) exchange["P"] = P;

//     return exchange;
// };

// console.log(makeExchange(0));
// console.log(makeExchange(1));
// console.log(makeExchange(43));
// console.log(makeExchange(91));
// console.log(makeExchange(9999999));