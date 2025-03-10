console.log("customer ordered food.....");
function orderReceive(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order Received successfully");
    }, 1000)
  })
}
function prepareFood(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("preparing food");
    }, 3000)
  })
}
function packFood(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve("food packed successfully");
    }, 2000)
  })
}
function assignDelivery(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve("assigned a person to delivery the package");
    },2000)
  })
}
function deliveryFood(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("Delivered food successfully");
    }, 4000)
  })
}
orderReceive()
.then(res => {console.log(res); return prepareFood();})
.then(res => {console.log(res); return packFood();})
.then(res => {console.log(res); return assignDelivery();})
.then(res => {console.log(res);return deliveryFood();})
.then(res => {console.log(res);})
.catch(err => console.error(err));


// booking ticket
console.log("customer booking a ticket .....");
function selectSeat(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("customer selected seats")
    }, 2000)
  })
}
function processPayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve("payment success")
    }, 3000)
  })
}
function generateTicket(){
  return new Promise((resolve, reject)=>{
  setTimeout(()=>{
  resolve("ticket generated")
  }, 1000)
})  
}
function confirmmail(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("confirmation mail sent")
    }, 2000)
  })
}
selectSeat()
.then(res => {console.log(res); return processPayment();})
.then(res => {console.log(res); return generateTicket();})
.then(res => {console.log(res); return confirmmail();})
.then(res => {console.log(res);})
.catch(err => console.error(err));


//car service center
console.log("service token recieved");
function carCheckin(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("car check-in completed");
    }, 1000)
  })
}
function oilChange(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Oil changed successfully");
    }, 2000)
  })
}
function enginecheck(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve("Engine checked");
    }, 3000)
  })
}
function carWash(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve("Car washed over");
    },2000)
  })
}
function finalCheck(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("Final quality checked");
    }, 2000)
  })
}
carCheckin()
.then(res => {console.log(res); return oilChange();})
.then(res => {console.log(res); return enginecheck();})
.then(res => {console.log(res); return carWash();})
.then(res => {console.log(res);return finalCheck();})
.then(res => {console.log(res);})
.catch(err => console.error(err));

//laptop service center
console.log("service token recieved");
function dignoseIssue (){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dignosed the issue");
    }, 3000)
  })
}
function replace(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Replaced the faulty parts");
    }, 4000)
  })
}
function update(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve("updated the software");
    }, 2000)
  })
}
function finalTest(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve("Final test completed");
    },2000)
  })
}
function returning(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("returned to the customer successfully");
    }, 1000)
  })
}
dignoseIssue()
.then(res => {console.log(res); return replace();})
.then(res => {console.log(res); return update();})
.then(res => {console.log(res); return finalTest();})
.then(res => {console.log(res);return returning();})
.then(res => {console.log(res);})
.catch(err => console.error(err));

//online course enrollment
console.log("student enroll the course");
function checkCourse(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Available course checked");
    }, 1000)
  })
}
function processPay(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("payment proccessed successfully");
    }, 3000)
  })
}
function generateId(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve("generated enrollment ID");
    }, 1000)
  })
}
function courseMaterial(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve("Sent course material");
    },2000)
  })
}
function grant(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("granted access to live classes");
    }, 1000)
  })
}
checkCourse()
.then(res => {console.log(res); return processPay();})
.then(res => {console.log(res); return generateId();})
.then(res => {console.log(res); return courseMaterial();})
.then(res => {console.log(res);return grant();})
.then(res => {console.log(res);})
.catch(err => console.error(err));