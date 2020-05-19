
function myFunction() {
  var x = document.getElementById("navbars");
  if (x.style.left === "0%") {
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("navbars").style.left = "50%";
  } else {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("navbars").style.left= "0%";
  }
}



$(document).ready(function() {
        
  var $badge1 = $('#badge1'); // cache 
      
    setInterval(function () {
      var value1 = parseInt($badge1.html());
          
        if(value1<25){
          value1++;
          $badge1.html(value1);
        };
      }, 20);
  
  var $badge2 = $('#badge2'); // cache 
          
  setInterval(function () {
  var value2 = parseInt($badge2.html());
              
    if(value2<100){
      value2++;
      $badge2.html(value2);
    };
  }, 20);
          
  var $badge3 = $('#badge3'); // cache 
      
  setInterval(function () {
      var value3 = parseInt($badge3.html());
      
      if(value3<98){
          value3++;
          $badge3.html(value3);
      };
  }, 20);
  
  var $badge4 = $('#badge4'); // cache 
      
    setInterval(function () {
      var value4 = parseInt($badge4.html());
          
         if(value4<30){
          value4++;
          $badge4.html(value4);
        };
  }, 20);
      
})