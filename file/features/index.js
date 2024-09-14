$(document).ready(function(){
    $('#Search').click(function(){
        $('.input').toggle();
    });
    $(window).on('scroll',function(){
      if($(this).scrollTop() > 5){
        $('#header').css('background','white');
      }else{
        $('#header').css('background','none');
      }
    });
   
let numElement1 = document.querySelector("#num1");
let numElement2 = document.querySelector("#num2");
let totalElement1 = document.querySelector("#total1");
let totalElement2 = document.querySelector("#total2");

// box1

let num = parseInt(numElement1.textContent) || 0;
let total = parseInt(totalElement1.textContent) || 655; 


// incerse

document.querySelectorAll('#increse1','#increse2').forEach(button => {
    button.addEventListener('click', function() {

        num++;
        c_total = total*num;

        numElement1.textContent = num;
        totalElement1.textContent = c_total;
    });
});

// decerse

document.querySelectorAll('#decerse1').forEach(button => {
    button.addEventListener('click', function() {

        num--;
        c_total = total*num;

        numElement1.textContent = num;
        totalElement1.textContent = c_total;
    });
});

// box2

let num2 = parseInt(numElement2.textContent) || 0;
let total2 = parseInt(totalElement2.textContent) || 499; 

// incerse

document.querySelectorAll('#increse2').forEach(button => {
    button.addEventListener('click', function() {

      num2++;
        d_total = total2*num2;

        numElement2.textContent = num2;
        totalElement2.textContent = d_total;
    });
});

// decerse

document.querySelectorAll('#decerse2').forEach(button => {
  button.addEventListener('click', function() {

      num2--;
      d_total = total2*num2;

      numElement2.textContent = num2;
      totalElement2.textContent = d_total;
  });
});

    

});