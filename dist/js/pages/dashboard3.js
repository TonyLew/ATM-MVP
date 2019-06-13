



$(function calling_object() {

  'use strict';

  var delayTime = 3000;
  var timeInterval = 3000;
  var now = new Date().getTime();
  var millisecondsTimeout = 5000; /* i.e. 5 second */
  var promise;
  var YTJSON;
  var objJSON;

  var url = 'https://streamdata.motwin.net/http://stockmarket.streamdata.io/prices?X-Sd-Token=ZjRlZmI1NGQtYjY4OS00NTJkLWIzMDItNmNmYjg0NDEyM2Q1';




  //addMapMarkers( getYTJSON() );
  //homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  //jsonData.sort((a, b) => parseFloat(a.viewers) - parseFloat(b.viewers));


  
  fetch(url).then((response) => {
    const reader = response.body.getReader();
    const stream = new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          YTJSON = getYTJSON();
          //objJSON = JSON.parse(YTJSON);

          YTJSON.sort((b, a) => parseFloat(a.viewers) - parseFloat(b.viewers));

          // Calculate and fill the map bars correspondingly
          fillMapBar( YTJSON );

          // Place the markers for the countries in the JSON from YouTube
          addMapMarkers( YTJSON );

          reader.read().then(({ done, value }) => {
            // Is there no more data to read?
            if (done) {
              // Tell the browser that we have finished sending data
              controller.close();
              return;
            }
  
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            push();
          });
        };
        
        push();
      }
    });
  
    return new Response(stream, { headers: { "Content-Type": "text/html" } });
  });




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
