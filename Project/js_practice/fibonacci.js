function fibonacci(n){
    fibo=[0,1];
    n=n-2;
    for (var i=0; i<n;i++){
        var n1=fibo.pop();
        var n2=fibo.pop();
        fibo.push(n2);
        fibo.push(n1);function add(num1, num2) {
            return num1 + num2;
            }
             
            function subtract(num1, num2) {
            return num1 - num2;
            }
             
            function multiply(num1, num2) {
            return num1 * num2;
            }
             
            function divide(num1, num2) {
            return num1 / num2;
            }
             
            function calculator(num1, num2, operator) {
            return operator(num1, num2);
            }
        fibo.push(n1+n2);
    }
    return fibo;
}

console.log(fibonacci(2));