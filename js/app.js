function initMap() {
  var myLatLng = {
    lat: 40.631721,
    lng: 22.9356568
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng,
    scrollwheel: false
  });

  var photos = [
    ["1195608920039885690_832399353", "1456747711", "40.6500403", "22.933146273", "https://www.instagram.com/p/BCXp_ppRAt6/", "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12751068_162286417489199_92218901_n.jpg?ig_cache_key=MTE5NTYwODkyMDAzOTg4NTY5MA%3D%3D.2.l", "https://scontent.cdninstagram.com/t51.2885-19/s150x150/11849274_1045728065445038_1061065273_a.jpg", "2/29/2016", "anestiskasapis", "low", "0.9910975"],
    ["1189229125234941844_243862902", "1455987180", "40.60288384", "23.09027874", "https://www.instagram.com/p/BCA_ZauLV-U/", "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12747597_599625803522042_758306841_n.jpg?ig_cache_key=MTE4OTIyOTEyNTIzNDk0MTg0NA%3D%3D.2.l", "https://scontent.cdninstagram.com/t51.2885-19/s150x150/917018_540249019468772_535100836_a.jpg", "2/20/2016", "miss_elenita", "low", "0.9951769"],
    ["1233983676999387760_1353187929", "1461322339", "40.501", "22.909", "https://www.instagram.com/p/BEf_Z3GLcpw/", "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12918413_1550852508549167_1746183668_n.jpg?ig_cache_key=MTIzMzk4MzY3Njk5OTM4Nzc2MA%3D%3D.2", "https://scontent.cdninstagram.com/t51.2885-19/s150x150/11410728_970058689717016_1108111630_a.jpg", "4/22/2016", "irini_tsanaktsidou", "medium", "0.9907976"],
    ["1212464221790346154_1354628013", "1458757020", "40.602883841", "23.09027874", "https://www.instagram.com/p/BDTickqrxuq/", "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12724661_214558655567378_1919172894_n.jpg?ig_cache_key=MTIxMjQ2NDIyMTc5MDM0NjE1NA%3D%3D.2", "https://scontent.cdninstagram.com/t51.2885-19/10983593_413369238823437_1659955526_a.jpg", "3/23/2016", "xazoviolis", "low", "0.9442114"],
    ["1173682050381001821_1821898468", "1454133825", "40.519722222", "22.970833333", "https://www.instagram.com/p/BBJwZs8NjRd/", "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12393717_1100061013366900_560237926_n.jpg", "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12292889_880660865375175_1249670308_a.jpg", "1/30/2016", "tuenxxy", "medium", "0.9586355"],
    ["1198630943988987314_10399172", "1457107964", "40.5003", "22.925", "https://www.instagram.com/p/BCiZH4xQTWy/", "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12797719_834440300020018_170196187_n.jpg?ig_cache_key=MTE5ODYzMDk0Mzk4ODk4NzMxNA%3D%3D.2", "https://scontent.cdninstagram.com/t51.2885-19/s150x150/10986197_989243077807796_1408133571_a.jpg", "3/4/2016", "raphael_zoumis", "low", "0.9807465"],
    ["1239340819788019386_1419311740", "1461960960", "40.4969849743", "22.9119271971", "https://www.instagram.com/p/BEzBejHGza6/", "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12446288_258992514450143_352498549_n.jpg?ig_cache_key=MTIzOTM0MDgxOTc4ODAxOTM4Ng%3D%3D.2", "https://scontent.cdninstagram.com/t51.2885-19/10499048_255656284627978_353215587_a.jpg", "4/29/2016", "miodrag.dojcinovic", "low", "0.9809542"]
  ];

var markers = [];
var infowindows = [];

  for (var key in photos) {

    var photo = photos[key];

    var contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h4>Air pollution: ' + photo[9] + '</h4>' +
      '<div id="bodyContent">' +
      '<p>User: <a target="_blank" href="'+photo[4]+'">'+ photo[8] + '</p>'+
      '<a target="_blank" href="'+photo[4]+'"><img style="height:250px; width:250px;" src="'+photo[5]+'"></a>'+
      '</div>' +
      '</div>';
    infowindows[key] = new google.maps.InfoWindow({
            content: contentString
        });


    markers[key] = new google.maps.Marker({
      position: new google.maps.LatLng(photo[2], photo[3]),
      map: map,
      title: photo[7],
    });
    google.maps.event.addListener(markers[key],'click', function(innerKey) {
      return function(){
        infowindows[innerKey].open(map, markers[innerKey]);
      }
    }(key));

  }
}
