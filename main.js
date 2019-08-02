var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://magicseaweed.com/api/0491dd8a14784887e8e150d44fea9953/forecast/?spot_id=867&fields=timestamp,localTimestamp,swell.*,wind.*,condition.temperature'
    fetch(proxyUrl + targetUrl)
    .then(blob => blob.json())
    .then(data => {

    	$.each(data, function(index, value) {
    		console.log(value);



  	       var temperature = value.condition.temperature;
  	       console.log(temperature);
  	       var swell = value.swell.absMaxBreakingHeight; 

  	       // these commands will put data into browser
  	      // $('.temperature').text(temperature);
  	      // $('.swell').text(swell);

  	       // loops back through data to append all of it
  	       $('.output').append('<h1 class="temperature">' + temperature + '</h1><h2 class="swell">' + swell + '</h2>');

    	})

    })
