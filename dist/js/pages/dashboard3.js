
var isPaused = false;
function sleep(milliseconds) {
  var start = new Date().getTime();
  isPaused = true;
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      isPaused = false;
      break;
    }
  }
}


// The polling function
function poll(fn, timeout, interval) {
  var endTime = Number(new Date()) + (timeout || 2000);
  interval = interval || 100;
  
  //addMapMarkers( getYTJSON() );

  var checkCondition = function(resolve, reject) { 
      addMapMarkers( getYTJSON() );
      var ajax = fn();
      // dive into the ajax promise
      ajax.then( function(response){
          // If the condition is met, we're done!
          //addMapMarkers( getYTJSON() );
          //if (response.data.var == true) {
          //    resolve(response.data.var);
          //}
          // If the condition isn't met but the timeout hasn't elapsed, go again
          //else if (Number(new Date()) < endTime) {
          if (Number(new Date()) < endTime) {
              //addMapMarkers( getYTJSON() );
              setTimeout(checkCondition, interval, resolve, reject);
          }
          // Didn't match and too much time, reject!
          else {
              reject(new Error('timed out for ' + fn + ': ' + arguments));
          }
          //addMapMarkers( getYTJSON() );

      });
  };
  return new Promise(checkCondition);

} // poll


$(function calling_object() {

  'use strict';

  var delayTime = 3000;
  var timeInterval = 3000;
  var now = new Date().getTime();
  var millisecondsTimeout = 5000; /* i.e. 5 second */

  var mapmarkersjson;
  var promise;
  mapmarkersjson = 
  [ 
    { latLng: [36.77, -119.41], name: "US : 198" }
  ]; 


  //addMapMarkers( getYTJSON() );

  //$.ajax({
  //  url: url,
  //  data: data,
  //  success: success,
  //  dataType: dataType
  //});

    // Usage: get something via ajax
    poll(function() {
      addMapMarkers( getYTJSON() );
      alert("start poll");
      return axios.get( 'something.json' );
      }, millisecondsTimeout, timeInterval).then(function() {
        alert("then poll");
        // Polling done, now do something else!
        //poll(function() { return axios.get( getYTJSON() ) }, millisecondsTimeout, timeInterval);
        //addMapMarkers( getYTJSON() );
      }).catch(function() {
        addMapMarkers( getYTJSON() );
        alert("catch poll");
        // Polling timed out, handle the error!
    });

  //Promise.all([
  //    poll(function() { return axios.get('something1.json'); 
  //    alert("catch poll1");
//
  //  }, 2000, 150),
  //    poll(function() { return axios.get('something2.json'); 
  //    alert("catch poll2");
//
  //  }, 2000, 150),
  //    poll(function() { return axios.get('something3.json'); 
  //    alert("catch poll3");
  //  }, 2000, 150)
  //]);

  //const continuousPromise = (promiseFactory, interval)  => {
  //    const execute = () => promiseFactory().finally(waitAndExecute);
  //    const waitAndExecute = () => window.setTimeout(execute, interval);
  //    execute();
  //}
  //Usage
  //continuousPromise(() => axios.get("something.json"), 150);    

  //const continuousPromise = (promiseFactory, interval)  => {
  //  const execute = () => promiseFactory().finally(waitAndExecute);
  //  const waitAndExecute = () => window.setTimeout(execute, interval);
  //  execute( addMapMarkers(promiseFactory) );
  //}
  //continuousPromise(() => axios.get( getYTJSON(0) ), timeInterval);    



  //parameter_object(mapmarkersjson);
  //$.getScript( "dashboard2.js", function(mapmarkersjson) {
  //  this.parameter_object(mapmarkersjson);
  //  //$('#world-map-markers').vectorMap( mapmarkersjson );
  //});


  /* SPARKLINE CHARTS
   * ----------------
   * Create a inline charts with spark line
   */
/*
  // -----------------
  // - SPARKLINE BAR -
  // -----------------
  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type    : 'bar',
      height  : $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });

  // -----------------
  // - SPARKLINE PIE -
  // -----------------
  $('.sparkpie').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type       : 'pie',
      height     : $this.data('height') ? $this.data('height') : '90',
      sliceColors: $this.data('color')
    });
  });

  // ------------------
  // - SPARKLINE LINE -
  // ------------------
  $('.sparkline').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type     : 'line',
      height   : $this.data('height') ? $this.data('height') : '90',
      width    : '100%',
      lineColor: $this.data('linecolor'),
      fillColor: $this.data('fillcolor'),
      spotColor: $this.data('spotcolor')
    });
  });
*/

});
