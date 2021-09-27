//fatorial de forma recursiva
function fatorial(n){
    if (n==1){
        return 1
    } else {
        return n*fatorial(n-1)

    }

}
for (let q = 1; q< 12; q++){
console.log(fatorial(q))
}