//function poll(fn, timeout, interval) {
//function getYTJSON(fn, timeout, interval) {
//function getYTJSON( itime = 0 ) {
function getYTJSON( itime ) {

  'use strict';
  var mapmarkersjson = 
      [ 
        { latLng: [43.73, 7.41], name: 'Monaco : 100' } ,
        { latLng: [36.77, -119.41], name: 'US : 200' }
      ]; 

  var min=100; 
  var max=500;  
  var i =Math.floor(Math.random() * (+max - +min)) + +min; 
  var j =Math.floor(Math.random() * (+max - +min)) + +min; 
  var marker1 = 'Monaco : ' + i.toString();
  var marker2 = 'US : ' + j.toString();
  mapmarkersjson = 
  [ 
    { latLng: [43.73, 7.41], name: marker1 } ,
    { latLng: [36.77, -119.41], name: marker2 }
  ]; 

/*  
    if (i == 1 && 0==1) {    
      mapmarkersjson = 
      [ 
        { latLng: [43.73, 7.41], name: 'Monaco : 251' } ,
        { latLng: [36.77, -119.41], name: 'US : 248' }
      ]; 
    } else if (i == 2) {    
      mapmarkersjson = 
      [ 
        { latLng: [43.73, 7.41], name: 'Monaco : 252' } ,
        { latLng: [36.77, -119.41], name: 'US : 258' }
      ]; 
    } else if (i == 3) {    
      mapmarkersjson = 
      [ 
        { latLng: [43.73, 7.41], name: 'Monaco : 253' } ,
        { latLng: [36.77, -119.41], name: 'US : 268' }
      ]; 
    } else if (i == 4) {    
      mapmarkersjson = 
      [ 
        { latLng: [43.73, 7.41], name: 'Monaco : 254' } ,
        { latLng: [36.77, -119.41], name: 'US : 278' }
      ]; 
    } else if (i == 5) {    
      mapmarkersjson = 
      [ 
        { latLng: [43.73, 7.41], name: 'Monaco : 255' } ,
        { latLng: [36.77, -119.41], name: 'US : 298' }
      ]; 
    }
*/

// The polling function
//function poll(fn, timeout, interval) {
//  var endTime = Number(new Date()) + (timeout || 2000);
//  interval = interval || 100;
//
//  var checkCondition = function(resolve, reject) { 
//      var ajax = fn();
//      // dive into the ajax promise
//      ajax.then( function(response){
//          // If the condition is met, we're done!
//          addMapMarkers(mapmarkersjson);
//          if(response.data.var == true) {
//              resolve(response.data.var);
//          }
//          // If the condition isn't met but the timeout hasn't elapsed, go again
//          else if (Number(new Date()) < endTime) {
//              setTimeout(checkCondition, interval, resolve, reject);
//          }
//          // Didn't match and too much time, reject!
//          else {
//              reject(new Error('timed out for ' + fn + ': ' + arguments));
//          }
//      });
//  };
//
//  return new Promise(checkCondition);
//}


  return mapmarkersjson;
  //addMapMarkers(mapmarkersjson);

};


