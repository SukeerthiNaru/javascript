//1. print numbers 1 to 10
for( var i=1;i<=10;i++){
    console.log(i)
}

//2. sum of all num 1 to 100
var sum=0
for(var j=1;j<=100;j++){
    sum+=j
}
console.log(sum)

//3.multiply 7 table upto 10
for(var i=1; i<=10;i++){
    console.log(`7 * ${i} = ${i*7}`)
}

//4.to print all even numbers between 1 and 20.
for(var i=2;i<=20;i=i+2){
    console.log(i)
}

//5.factorial of 5!
var num=5
var mul=1
for (var i=2;i<=num;i++){
    mul*=i
}
console.log(mul)

//6.power of a number (e.g., 2^5).

  var base=2
var power=5
var res=1
for (var i=1; i<=power;i++){
    res*=base
}
console.log(res)


// 7. print odd in reverse

for(var i=20; i>=1;i--){
    console.log(i)
}
