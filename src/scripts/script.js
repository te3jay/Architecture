console.log('%c Hello from /scripts/script.js ', 'background: lemonchiffon; border: 1px solid #fff');
console.log('%c Welcome to tris-webpack-boilerplate! ', 'background: lavenderblush; border: 1px solid #fff');

// add custom js below

//map
$(document).ready(function() {

    var platform = new H.service.Platform({
        'app_id': 'fKEC7OAHBP6lBqaE85xZ',
        'app_code': 'sDmZ1ti4EQ1uH4QmTrPtgQ'
      });

      var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map,
  {
    zoom: 17,
    center: { lat: 51.219448, lng: 4.402464 }
  });

  var ui = H.ui.UI.createDefault(map, defaultLayers);

  //grid

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 19,

    });

    // projects menu
  

});  




  