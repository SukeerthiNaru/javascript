function findLarger(num1, num2, callback){
    return callback(num1,num2)
    }
    console.log(findLarger(10,20,(num1,num2)=>{
        if (num1>num2){
        return num1+5
         }
            return num2+5
        }))
        
   //ques2
    function calculate(num1, num2, callback){
        return callback(num1,num2)
    }
    console.log(calculate(10,5,(num1,num2)=>{
        if(num1> num2){
            return (num1 + num2)*3
    }
    if(num2>num1){
        return (num2-num1)*3
    }
        return 0
    }))
    
    //ques3
    function checkEvenOdd(num, callback){
        if(callback(num) =='even'){
            return "even number"
        }else{
            return "odd number"
        }
        
    }
    console.log(checkEvenOdd(4, num =>{
        if(num%2 == 0){
            return "even"
        }else{
            return "odd"
        }
            }))
    
    //ques4
    function checkSign(num, callback){
        return callback(num)+  "value"
    }
   console.log(checkSign(-10,num =>{
       if(num>0){
            return "positive"
        }
            if(num<0){
                return "negative"
            }
                return "zero"
            }))
           
           
   //ques5
   function multiplyConditionally(num1, num2, callback){
     console.log(callback(num1,num2))
   }
   multiplyConditionally(4,6,(num1,num2) =>{
       if(num1 > num2){
           return (num1*num2)*4
       }
       if(num2 > num1){
           return (num1+num2)*4
       }
       return num1 *4
   })
    