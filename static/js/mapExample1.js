var mapExample1 = () => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="../../static/css/style.css" />
  <!--加载leaflet引擎必要文件(leaflet.css和leaflet.js)-->
  <link rel="stylesheet" href="../../static/lib/leaflet/leaflet.css" />
  <script src="../../static/lib/leaflet/leaflet.js"></script>
</head>
<body>
<div id="map"></div>
<!--加载地图投影算法插件-->
<script src="../../static/lib/proj4-compressed.js"></script>
<script src="../../static/src/proj4leaflet.js"></script>
<!--转换为百度地图投影(EPSG:900913）-->
<script src="../../static/src/convert.js"></script>
<script>
new L.TileLayer('http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20150518', {
  maxZoom: 18,
  minZoom: 3,
  subdomains: [0,1,2],
  attribution: 'ⓒ 2012 Daum',
  tms: true
}).addTo(map);

//Gunsan Airport

//new L.marker([39.915052,116.403954]).addTo(map);
map.setView([39.915052,116.403954], 15);
</script>
</body>
</html>
`
}

export {
  mapExample1
}
