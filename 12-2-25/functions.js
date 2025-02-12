//task-1//
function sayhello(){
    console.log("hello world");
}
sayhello();
//task-2//
function displayWarning(){
    console.log("Warning! System Overload");
}
displayWarning();
//task-3//
function printStatus(){
    console.log("system status :Active");
}
printStatus();
//task-4//
function initialize(){
    console.log("Initialization Completed");
     shutDown();
}
function shutDown(){
    console.log("System Shutting Down");
}
initialize();
//task-5//
function startProcess(){
    console.log("Process Started");
    endProcess();
}
function endProcess(){
    console.log("Process Ended");
}
startProcess();
//task-6//
function greetUser(name){
    console.log("Hello {name}!");
}
greetUser("keerthi");
greetUser("Asritha");
//task-7//
 function sum(num1,num2){
    console.log(num1+num2);
}
sum(2,3)
sum(3,5)
//task-8//
function countDown(){
    for(var i=5;i>=1,i--){
        console.log(i)
    }
}
countDown();
//task-9//
function checkEvenOdd(num){
  if(num%2==0){
    console.log("even");
  }
  else{
    console.log("odd");
  }
}
checkEvenOdd(5);
checkEvenOdd(4);
//task-10//
function beginSession(){
    console.log("Session Started");
    endSession();
}
function endSession(){
    console.log("Session Ended");
}
beginSession();




