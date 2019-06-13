
//$(function parameter_object(strjson) {
function  addMapMarkers(mjson) {

  'use strict';

  var mapObject = $('#world-map-markers').vectorMap('get', 'mapObject');
  mapObject.addMarkers(mjson, []);

};
