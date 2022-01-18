ymaps.ready(function () {
   var myMap = new ymaps.Map("map", {
       center: [56.379915, 43.800443],
       zoom: 16,
     }),
     myPlacemark = new ymaps.Placemark([56.379915, 43.800443], {
       hintContent: "Эллой",
     });

   myMap.geoObjects.add(myPlacemark);
      
});
