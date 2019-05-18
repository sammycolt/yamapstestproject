var myMap;

ymaps.ready(function () {
    myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 10,
        controls: ['smallMapDefaultSet']
    });

    clearMap()

    function loadJSON(callback) {   
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', chrome.extension.getURL('addrs.json'), true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);  
    }

    
    loadJSON(function(response) {
        console.log(response);
    })

    addVertex("Армянский переулок, д. 4, стр. 2", 
        55.75937, 37.636392, "#ff0000");
});

