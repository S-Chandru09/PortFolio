function calculate(a,b,calback){
    let Result=a+b;
    calback(Result)
}
calculate(10,20,function(output){
    console.log("Result is :",output)
})