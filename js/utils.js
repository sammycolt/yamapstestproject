function addVertex(name, lon, lat, color) {
    var obj = new ymaps.Placemark([lon, lat], {
        hintContent: name
    }, {
        preset: 'islands#circleDotIcon',
        iconColor: color,
    });
    myMap.geoObjects.add(obj);
}

function clearMap() {
    myMap.geoObjects.removeAll();
}
