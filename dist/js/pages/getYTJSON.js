function getYTJSON( itime ) {

  'use strict';
  var mapmarkersjson = 
      [ 
        { latLng: [41.90, 12.45], name: 'Vatican City', viewers: 0 },
        { latLng: [43.73, 7.41], name: 'Monaco : 100', viewers: 100 } ,
        { latLng: [35.88, 14.5], name: 'Malta', viewers: 0 },
        { latLng: [13.16, -59.55], name: 'Barbados', viewers: 0 },
        { latLng: [36.77, -119.41], name: 'US : 200', viewers: 200 }
      ]; 

  var mapmarkersjsonlist = [
        { latLng: [41.90, 12.45], name: 'Vatican City', viewers: 0 },
        { latLng: [43.73, 7.41], name: 'Monaco', viewers: 0 },
        { latLng: [-0.52, 166.93], name: 'Nauru', viewers: 0 },
        { latLng: [-8.51, 179.21], name: 'Tuvalu', viewers: 0 },
        { latLng: [43.93, 12.46], name: 'San Marino', viewers: 0 },
        { latLng: [47.14, 9.52], name: 'Liechtenstein', viewers: 0 },
        { latLng: [7.11, 171.06], name: 'Marshall Islands', viewers: 0 },
        { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis', viewers: 0 },
        { latLng: [3.2, 73.22], name: 'Maldives', viewers: 0 },
        { latLng: [35.88, 14.5], name: 'Malta', viewers: 0 },
        { latLng: [12.05, -61.75], name: 'Grenada', viewers: 0 },
        { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines', viewers: 0 },
        { latLng: [13.16, -59.55], name: 'Barbados', viewers: 0 },
        { latLng: [17.11, -61.85], name: 'Antigua and Barbuda', viewers: 0 },
        { latLng: [-4.61, 55.45], name: 'Seychelles', viewers: 0 },
        { latLng: [7.35, 134.46], name: 'Palau', viewers: 0 },
        { latLng: [42.5, 1.51], name: 'Andorra', viewers: 0 },
        { latLng: [14.01, -60.98], name: 'Saint Lucia', viewers: 0 },
        { latLng: [6.91, 158.18], name: 'Federated States of Micronesia', viewers: 0 },
        { latLng: [1.3, 103.8], name: 'Singapore', viewers: 0 },
        { latLng: [1.46, 173.03], name: 'Kiribati', viewers: 0 },
        { latLng: [-21.13, -175.2], name: 'Tonga', viewers: 0 },
        { latLng: [15.3, -61.38], name: 'Dominica', viewers: 0 },
        { latLng: [-20.2, 57.5], name: 'Mauritius', viewers: 0 },
        { latLng: [26.02, 50.55], name: 'Bahrain', viewers: 0 },
        { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe', viewers: 0 }
      ];

/*      
  var min=0; 
  var max=20;  
  var i =Math.floor(Math.random() * (+max - +min)) + +min; 
  var j =Math.floor(Math.random() * (+max - +min)) + +min; 

  var mapmarkersjson = mapmarkersjsonlist.getByIndex(i);

      var obj1 = {
        "set1": [1, 2, 3],
        "set2": [4, 5, 6, 7, 8],
        "set3": [9, 10, 11, 12]
      };
      
      var obj2 = {
        "set2": [4, 5, 6, 7, 8],
        "set1": [1, 2, 3],
        "set3": [9, 10, 11, 12]
      };

      log('-- Obj1 --');
      log(obj1);
      log(Object.keys(obj1));
      log(obj1.getByIndex(0));
*/


  var min=50000; 
  var max=55000;  
  var i1 =Math.floor(Math.random() * (+max - +min)) + +min; 
  var min=100000; 
  var max=550000;  
  var i2 =Math.floor(Math.random() * (+max - +min)) + +min; 
  var min=200000; 
  var max=255000;  
  var i3 =Math.floor(Math.random() * (+max - +min)) + +min; 
  var min=40000; 
  var max=45000;  
  var i4 =Math.floor(Math.random() * (+max - +min)) + +min; 
  var min=800000; 
  var max=850000;  
  var i5 =Math.floor(Math.random() * (+max - +min)) + +min; 
  //var marker1 = 'Monaco : ' + i.toString();
  //var marker2 = 'US : ' + j.toString();
  mapmarkersjson = 
  [ 
    { latLng: [41.90, 12.45], name: 'Vatican City', viewers: i1.toString() },
    { latLng: [43.73, 7.41], name: 'Monaco', viewers: i2.toString() } ,
    { latLng: [35.88, 14.5], name: 'Malta', viewers: i3.toString() },
    { latLng: [13.16, -59.55], name: 'Barbados', viewers: i4.toString() },
    { latLng: [36.77, -119.41], name: 'US', viewers: i5.toString() }
  ]; 




  return mapmarkersjson;
  //addMapMarkers(mapmarkersjson);

};


