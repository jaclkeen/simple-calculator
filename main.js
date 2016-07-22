function add(num1, num2){
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2){
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2){
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2){
  return parseInt(num1) / parseInt(num2);
}

function determineOperation(num1, num2, operation){
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  return operation(num1, num2);
}

function execute(){

  document.getElementById('add').addEventListener("click", function(){
    document.getElementById("result").value = determineOperation(num1, num2, add);
  });

  document.getElementById('subtract').addEventListener("click", function(){
    document.getElementById("result").value = determineOperation(num1, num2, subtract);
  });

  document.getElementById('multiply').addEventListener("click", function(){
    document.getElementById("result").value = determineOperation(num1, num2, multiply);
  });

  document.getElementById('divide').addEventListener("click", function(){
    document.getElementById("result").value = determineOperation(num1, num2, divide).toFixed(2);
  });
}
execute();

