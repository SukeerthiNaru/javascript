//ques1//
function processNumber(num1,num2,funone){
    return result=funone(num1,num2)
    }
    processNumber(2,5,function(x,y){return x+y})
    console.log("sum:" +result)

    //ques2//
    function greet(callback){
        return callback("alice")
        }
        console.log((greet(function(name){return "Hello,"+" "+ name+"!"})))

        //ques3//
        function calculate(n1,n2,operation){
            return res = operation(n1,n2)
        }
        calculate(10,5,function(a,b){return a - b})
        console.log("Difference :"+" "+res)
