

function fillMapBar( objJSON ) {

  'use strict';


          //document.getElementById("Country5").style.visibility='visible';
          //document.getElementById("Country5").style.visibility='hidden';

          //document.getElementById("demo").innerHTML = objJSON.firstName;

          //var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
          //document.getElementById("demo").innerHTML = obj.firstName;          

          
  var Key1 = Object.keys(objJSON)[0]; 
  var Key2 = Object.keys(objJSON)[1]; 
  var Key3 = Object.keys(objJSON)[2]; 
  var Key4 = Object.keys(objJSON)[3]; 
  var Key5 = Object.keys(objJSON)[4]; 
  var TotalViewers =  parseFloat(objJSON[Key1].viewers) + 
                      parseFloat(objJSON[Key2].viewers) +
                      parseFloat(objJSON[Key3].viewers) +
                      parseFloat(objJSON[Key4].viewers) +
                      parseFloat(objJSON[Key5].viewers);
  var percent1 = (parseFloat(objJSON[Key1].viewers)/TotalViewers)*100.00;
  var percent2 = (parseFloat(objJSON[Key2].viewers)/TotalViewers)*100.00;
  var percent3 = (parseFloat(objJSON[Key3].viewers)/TotalViewers)*100.00;
  var percent4 = (parseFloat(objJSON[Key4].viewers)/TotalViewers)*100.00;
  var percent5 = (parseFloat(objJSON[Key5].viewers)/TotalViewers)*100.00;

  //document.getElementById("CountryBar1").style.width = (parseFloat(objJSON[Key1].viewers)/TotalViewers)*100.00;
  document.getElementById("CountryBar1").style = "width: " + String(percent1) + "%";
  document.getElementById("CountryBar2").style = "width: " + String(percent2) + "%";
  document.getElementById("CountryBar3").style = "width: " + String(percent3) + "%";
  document.getElementById("CountryBar4").style = "width: " + String(percent4) + "%";
  document.getElementById("CountryBar5").style = "width: " + String(percent5) + "%";


  document.getElementById("CountryName1").innerHTML = objJSON[Key1].name;
  document.getElementById("CountryNumber1").innerHTML = objJSON[Key1].viewers;

  document.getElementById("CountryName2").innerHTML = objJSON[Key2].name;
  document.getElementById("CountryNumber2").innerHTML = objJSON[Key2].viewers;

  document.getElementById("CountryName3").innerHTML = objJSON[Key3].name;
  document.getElementById("CountryNumber3").innerHTML = objJSON[Key3].viewers;

  document.getElementById("CountryName4").innerHTML = objJSON[Key4].name;
  document.getElementById("CountryNumber4").innerHTML = objJSON[Key4].viewers;

  document.getElementById("CountryName5").innerHTML = objJSON[Key5].name;
  document.getElementById("CountryNumber5").innerHTML = objJSON[Key5].viewers;


};
