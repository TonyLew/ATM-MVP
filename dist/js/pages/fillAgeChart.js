function fillAgeChart( itime ) {

  'use strict';


    
    // AREA CHART
    var area = new Morris.Area({
      element: 'age-chart',
      resize: true,
      data: [
        {y: '2019-01-06', Range1: 100123, Range2: 100044, Range3: 106540, Range4: 132200},
        {y: '2019-01-07', Range1: 100345, Range2: 100055, Range3: 107890, Range4: 159300},
        {y: '2019-01-08', Range1: 100678, Range2: 100066, Range3: 112300, Range4: 144000},
        {y: '2019-01-09', Range1: 100789, Range2: 100077, Range3: 145600, Range4: 155000},
        {y: '2019-01-10', Range1: 104560, Range2: 100088, Range3: 178900, Range4: 165000},
        {y: '2019-01-11', Range1: 107890, Range2: 100099, Range3: 189000, Range4: 145000},
        {y: '2019-01-12', Range1: 178900, Range2: 100990, Range3: 198000, Range4: 132000}
      ],
      xkey: 'y',
      ykeys: ['Range1', 'Range2', 'Range3', 'Range4'],
      labels: ['Range 18-20', 'Range 21-23', 'Range 24-26', 'Range 27-30'],
      lineColors: ['#f56954', '#00a65a', '#f39c12', '#00c0ef'],
      hideHover: 'auto'
    });


/*

                      <li><i class="fa fa-circle-o text-red"></i> 18-20</li>
                      <li><i class="fa fa-circle-o text-green"></i> 21-23</li>
                      <li><i class="fa fa-circle-o text-yellow"></i> 24-26</li>
                      <li><i class="fa fa-circle-o text-aqua"></i> 27-30</li>

      labels: ['Range 27-30', 'Range 24-26', 'Range 21-23', 'Range 18-20'],
      lineColors: ['#00c0ef', '#f39c12', '#00a65a', '#f56954'],

      labels: ['Range 18-20', 'Range 21-23', 'Range 24-26', 'Range 27-30'],
      lineColors: ['#f56954', '#00a65a', '#f39c12', '#00c0ef'],


    //Hex Colors
    //green 	data-color="#00a65a"
    //gold 	data-color="#f39c12"
    //red 	data-color="#f56954" 
    //blue	data-color="#00c0ef"


        {Day: '2019-01-06'     , Range1: 100123, Range2: 100044, Range3: 106540, Range4: 132200},
        {Day: '2019-01-07'     , Range1: 100345, Range2: 100055, Range3: 107890, Range4: 159300},
        {Day: '2019-01-08'     , Range1: 100678, Range2: 100066, Range3: 112300, Range4: 144000},
        {Day: '2019-01-09'     , Range1: 100789, Range2: 100077, Range3: 145600, Range4: 155000},
        {Day: '2019-01-10'     , Range1: 104560, Range2: 100088, Range3: 178900, Range4: 165000},
        {Day: '2019-01-11'     , Range1: 107890, Range2: 100099, Range3: 189000, Range4: 145000},
        {Day: '2019-01-12'     , Range1: 178900, Range2: 100990, Range3: 198000, Range4: 132000}
    // AREA CHART
    var area = new Morris.Area({
      element: 'age-chart',
      resize: true,
      data: [
        {y: 'Sunday'    ,  Range1: 2666, Range2: 2666} , //Range3: 2666, Range4: 2666},
        {y: 'Monday'    ,  Range1: 2778, Range2: 2294} , //Range3: 2294, Range4: 2294},
        {y: 'Tuesday'   ,  Range1: 4912, Range2: 1969} , //Range3: 1969, Range4: 1969},
        {y: 'Wednesday' ,  Range1: 3767, Range2: 3597} , //Range3: 3597, Range4: 3597},
        {y: 'Thursday'  ,  Range1: 6810, Range2: 1914} , //Range3: 1914, Range4: 1914},
        {y: 'Friday'    ,  Range1: 5670, Range2: 4293} , //Range3: 4293, Range4: 4293},
        {y: 'Saturday'  ,  Range1: 4820, Range2: 3795}  //Range3: 3795, Range4: 3795}
      ],//
      xkey: 'y',
      ykeys: ['Range1', 'Range2'], //'Range3', 'Range4'],
      labels: ['Range 1', 'Range 2'], //'Range 3', 'Range 4'],
      lineColors: ['#00a65a', '#f39c12'], //'#f56954', '#00c0ef'],
      hideHover: 'auto'
    });

    <li><i class="fa fa-circle-o text-red"></i> Under 18</li>
    <li><i class="fa fa-circle-o text-green"></i> 19-35</li>
    <li><i class="fa fa-circle-o text-yellow"></i> 36-56</li>
    <li><i class="fa fa-circle-o text-aqua"></i> Over 56</li>

    //Hex Colors
    //green 	data-color="#00a65a"
    //gold 	data-color="#f39c12"
    //red 	data-color="#f56954" 
    //blue	data-color="#00c0ef"
    
*/



};


