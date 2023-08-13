function fibonacci(n){
    fibo=[0,1];
    n=n-2;
    for (var i=0; i<n;i++){
        var n1=fibo.pop();
        var n2=fibo.pop();
        fibo.push(n2);
        fibo.push(n1);
        fibo.push(n1+n2);
    }
    return fibo;
}

console.log(fibonacci(2));