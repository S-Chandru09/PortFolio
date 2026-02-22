function square(x){
    return function(y){
        return x*y;
    };
}
let sq=square(2)
console.log(sq(2))