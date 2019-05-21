
//$(function parameter_object(strjson) {
function  addMapMarkers(mjson) {

  'use strict';

  var deferred = $.Deferred();
  var mapObject = $('#world-map-markers').vectorMap('get', 'mapObject');
  mapObject.addMarkers(mjson, []);

  //deferred.resolve;
  //return deferred.promise();

};
