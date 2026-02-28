// script.js - all routes integrated, directions panel bottom-left
// Added green jeepney icon and Show All Routes button

document.addEventListener('DOMContentLoaded', function () {
  // ----- Route GeoJSON definitions -----

  // 1) Sta. Rita – Downtown (YELLOW) – GPX-accurate
  const yellowCoordinates = [
    [120.282585, 14.826712],
    [120.282587, 14.826759],
    [120.282592, 14.826897],
    [120.282600, 14.826996],
    [120.282605, 14.827255],
    [120.282589, 14.827490],
    [120.282545, 14.827645],
    [120.281923, 14.828753],
    [120.281837, 14.828891],
    [120.281816, 14.828931],
    [120.281534, 14.829471],
    [120.281232, 14.829999],
    [120.280852, 14.830667],
    [120.280703, 14.830842],
    [120.280594, 14.830992],
    [120.280609, 14.831015],
    [120.280616, 14.831042],
    [120.280614, 14.831070],
    [120.280604, 14.831096],
    [120.280587, 14.831118],
    [120.280563, 14.831134],
    [120.280536, 14.831143],
    [120.280557, 14.831298],
    [120.280589, 14.831443],
    [120.280644, 14.831685],
    [120.280686, 14.831933],
    [120.280700, 14.832027],
    [120.280713, 14.832104],
    [120.280734, 14.832280],
    [120.280687, 14.833056],
    [120.280696, 14.833127],
    [120.280742, 14.833250],
    [120.280847, 14.833444],
    [120.280940, 14.833574],
    [120.280963, 14.833604],
    [120.281029, 14.833689],
    [120.281107, 14.833835],
    [120.281163, 14.834003],
    [120.281179, 14.834375],
    [120.281183, 14.834494],
    [120.281224, 14.835134],
    [120.281229, 14.835271],
    [120.281260, 14.836220],
    [120.281255, 14.836274],
    [120.281259, 14.836380],
    [120.281281, 14.836911],
    [120.281313, 14.837067],
    [120.281367, 14.837212],
    [120.281448, 14.837341],
    [120.281555, 14.837461],
    [120.281668, 14.837538],
    [120.281789, 14.837606],
    [120.281807, 14.837616],
    [120.281989, 14.837668],
    [120.282177, 14.837704],
    [120.282369, 14.837711],
    [120.282638, 14.837736],
    [120.282742, 14.837751],
    [120.282821, 14.837771],
    [120.282884, 14.837787],
    [120.283040, 14.837863],
    [120.283303, 14.838061],
    [120.283673, 14.838336],
    [120.284149, 14.838702],
    [120.284335, 14.838796],
    [120.284342, 14.838796],
    [120.284389, 14.838813],
    [120.284424, 14.838854],
    [120.284431, 14.838907],
    [120.284563, 14.839102],
    [120.284952, 14.839472],
    [120.285779, 14.840226],
    [120.286005, 14.840418],
    [120.286057, 14.840473],
    [120.286137, 14.840552],
    [120.286468, 14.840887],
    [120.286501, 14.840915],
    [120.286810, 14.841216],
    [120.287544, 14.841882],
    [120.287787, 14.842113],
    [120.287986, 14.842294],
    [120.288022, 14.842327],
    [120.288236, 14.842534],
    [120.288472, 14.842763],
    [120.288808, 14.843087],
    [120.289424, 14.843681],
    [120.289912, 14.844160],
    [120.290168, 14.844395],
    [120.290829, 14.844999],
    [120.290847, 14.845016],
    [120.290829, 14.844999],
    [120.290612, 14.845226],
    [120.290469, 14.845394],
    [120.290419, 14.845456],
    [120.290230, 14.845910],
    [120.290193, 14.846010],
    [120.290580, 14.846139],
    [120.290773, 14.846241],
    [120.290874, 14.846330],
    [120.291176, 14.846948],
    [120.291259, 14.847104],
    [120.291378, 14.847331],
    [120.291511, 14.847577],
    [120.291595, 14.847699],
    [120.291670, 14.847797],
    [120.291733, 14.847845],
    [120.291977, 14.848010],
    [120.292346, 14.848163],
    [120.292606, 14.848264],
    [120.293236, 14.848530],
    [120.293497, 14.848653],
    [120.293630, 14.848746],
    [120.293854, 14.848980],
    [120.293990, 14.849176],
    [120.294048, 14.849264],
    [120.294101, 14.849345],
    [120.294199, 14.849554],
    [120.294282, 14.849809],
    [120.294345, 14.850089],
    [120.294368, 14.850251],
    [120.294383, 14.850329],
    [120.294616, 14.850857],
    [120.294625, 14.850896],
    [120.294675, 14.851117],
    [120.294687, 14.851327],
    [120.294696, 14.851490],
    [120.294730, 14.851650],
    [120.294793, 14.851833],
    [120.294905, 14.852059],
    [120.295212, 14.852481],
    [120.295270, 14.852562],
    [120.295466, 14.852790],
    [120.295356, 14.852936],
    [120.295225, 14.853078],
    [120.295036, 14.853250],
    [120.294672, 14.853517],
    [120.294526, 14.853663],
    [120.294375, 14.853791],
    [120.294191, 14.853916],
    [120.293647, 14.854244],
    [120.293578, 14.854301],
    [120.293474, 14.854420],
    [120.293390, 14.854554],
    [120.293345, 14.854642],
    [120.293278, 14.854906],
    [120.293225, 14.855285],
    [120.293162, 14.855560],
    [120.293044, 14.855883],
    [120.292972, 14.856498],
    [120.292924, 14.856787],
    [120.292874, 14.856964],
    [120.292816, 14.857165],
    [120.292800, 14.857266],
    [120.292773, 14.857467],
    [120.292748, 14.857833],
    [120.292744, 14.857920],
    [120.292721, 14.858094],
    [120.292703, 14.858186],
    [120.292627, 14.858474],
    [120.292600, 14.858642],
    [120.292591, 14.858780],
    [120.292604, 14.859213],
    [120.292613, 14.859411],
    [120.292607, 14.859827],
    [120.292589, 14.859942],
    [120.292572, 14.859976],
    [120.292511, 14.860044],
    [120.292306, 14.860233],
    [120.292263, 14.860275]
  ];

  const yellowGeojson = {
    type: "Feature",
    properties: {},
    geometry: { type: "LineString", coordinates: yellowCoordinates }
  };

  // 2) Gordon Heights – Downtown (RED) – GPX-accurate
  const redCoordinates = [
    [120.282192, 14.827107],
    [120.282208, 14.826894],
    [120.282592, 14.826897],
    [120.282600, 14.826996],
    [120.282605, 14.827255],
    [120.282589, 14.827490],
    [120.282545, 14.827645],
    [120.281923, 14.828753],
    [120.281837, 14.828891],
    [120.281816, 14.828931],
    [120.281534, 14.829471],
    [120.281232, 14.829999],
    [120.280852, 14.830667],
    [120.280703, 14.830842],
    [120.280594, 14.830992],
    [120.280609, 14.831015],
    [120.280616, 14.831042],
    [120.280614, 14.831070],
    [120.280604, 14.831096],
    [120.280587, 14.831118],
    [120.280563, 14.831134],
    [120.280536, 14.831143],
    [120.280557, 14.831298],
    [120.280644, 14.831685],
    [120.280686, 14.831933],
    [120.280700, 14.832027],
    [120.280713, 14.832104],
    [120.280734, 14.832280],
    [120.280687, 14.833056],
    [120.280696, 14.833127],
    [120.280742, 14.833250],
    [120.280847, 14.833444],
    [120.280940, 14.833574],
    [120.280963, 14.833604],
    [120.281029, 14.833689],
    [120.281107, 14.833835],
    [120.281163, 14.834003],
    [120.281179, 14.834375],
    [120.281183, 14.834494],
    [120.281224, 14.835134],
    [120.281229, 14.835271],
    [120.281260, 14.836220],
    [120.281255, 14.836274],
    [120.281259, 14.836380],
    [120.281281, 14.836911],
    [120.281313, 14.837067],
    [120.281367, 14.837212],
    [120.281448, 14.837341],
    [120.281555, 14.837461],
    [120.281668, 14.837538],
    [120.281789, 14.837606],
    [120.281807, 14.837616],
    [120.281989, 14.837668],
    [120.282177, 14.837704],
    [120.282369, 14.837711],
    [120.282638, 14.837736],
    [120.282742, 14.837751],
    [120.282821, 14.837771],
    [120.282884, 14.837787],
    [120.283040, 14.837863],
    [120.283303, 14.838061],
    [120.283673, 14.838336],
    [120.284149, 14.838702],
    [120.284335, 14.838796],
    [120.284342, 14.838796],
    [120.284389, 14.838813],
    [120.284424, 14.838854],
    [120.284431, 14.838907],
    [120.284423, 14.838934],
    [120.284407, 14.838958],
    [120.284385, 14.838976],
    [120.284358, 14.838987],
    [120.284326, 14.838991],
    [120.284095, 14.838992],
    [120.284019, 14.839003],
    [120.283770, 14.839039],
    [120.283555, 14.839085],
    [120.283056, 14.839223],
    [120.282898, 14.839267],
    [120.282215, 14.839463],
    [120.281967, 14.839534],
    [120.281203, 14.839745],
    [120.281102, 14.839762],
    [120.280965, 14.839764],
    [120.280823, 14.839751],
    [120.280863, 14.839924],
    [120.280934, 14.840097],
    [120.281008, 14.840237],
    [120.281120, 14.840386],
    [120.281313, 14.840701],
    [120.281356, 14.840826],
    [120.281414, 14.841026],
    [120.281432, 14.841155],
    [120.281415, 14.841695],
    [120.281446, 14.841847],
    [120.281626, 14.842165],
    [120.281667, 14.842235],
    [120.281739, 14.842359],
    [120.282400, 14.843702],
    [120.282550, 14.844005],
    [120.282847, 14.844589],
    [120.283144, 14.845193],
    [120.283197, 14.845339],
    [120.283332, 14.845887],
    [120.283466, 14.846385],
    [120.283643, 14.847030],
    [120.283692, 14.847170],
    [120.283713, 14.847220],
    [120.283865, 14.847530],
    [120.284132, 14.847785],
    [120.284345, 14.847953],
    [120.284827, 14.848385],
    [120.284911, 14.848459],
    [120.285314, 14.848818],
    [120.285779, 14.849242],
    [120.286284, 14.849647],
    [120.286596, 14.849911],
    [120.286776, 14.850040],
    [120.287257, 14.850456],
    [120.288530, 14.851494],
    [120.288817, 14.851792],
    [120.289123, 14.852401],
    [120.289242, 14.852636],
    [120.289404, 14.853086],
    [120.289593, 14.853612],
    [120.289620, 14.853684],
    [120.289680, 14.854109],
    [120.289777, 14.854477],
    [120.289786, 14.854511],
    [120.289059, 14.854917],
    [120.289383, 14.855469],
    [120.289574, 14.855878],
    [120.289587, 14.855980],
    [120.289585, 14.856087],
    [120.289565, 14.856306],
    [120.289541, 14.856845],
    [120.289541, 14.856851],
    [120.289480, 14.857379],
    [120.289425, 14.857931],
    [120.289275, 14.858435],
    [120.289271, 14.858622],
    [120.289277, 14.858723],
    [120.289307, 14.858843],
    [120.289314, 14.858869],
    [120.289910, 14.858715],
    [120.289912, 14.858715],
    [120.290074, 14.859345],
    [120.290216, 14.859944],
    [120.290363, 14.860540],
    [120.290401, 14.860650],
    [120.290457, 14.860810],
    [120.290583, 14.861144],
    [120.290594, 14.861171],
    [120.290583, 14.861144],
    [120.291172, 14.860927],
    [120.292269, 14.860532],
    [120.292269, 14.860533],
    [120.292269, 14.860532],
    [120.292206, 14.860335],
    [120.291908, 14.859962],
    [120.291905, 14.859957]
  ];

  const redGeojson = {
    type: "Feature",
    properties: {},
    geometry: { type: "LineString", coordinates: redCoordinates }
  };

  // 3) Mabayuan – Public Market (GREEN) – GPX-accurate
  const greenCoordinates = [
    [120.288202, 14.851227],
    [120.287257, 14.850456],
    [120.286776, 14.850040],
    [120.286596, 14.849911],
    [120.286284, 14.849647],
    [120.285779, 14.849242],
    [120.285314, 14.848818],
    [120.284827, 14.848385],
    [120.284345, 14.847953],
    [120.284132, 14.847785],
    [120.283865, 14.847530],
    [120.283713, 14.847220],
    [120.283692, 14.847170],
    [120.283643, 14.847030],
    [120.283466, 14.846385],
    [120.283332, 14.845887],
    [120.283197, 14.845339],
    [120.283144, 14.845193],
    [120.282847, 14.844589],
    [120.282550, 14.844005],
    [120.282400, 14.843702],
    [120.281739, 14.842359],
    [120.281626, 14.842165],
    [120.281446, 14.841847],
    [120.281415, 14.841695],
    [120.281432, 14.841155],
    [120.281414, 14.841026],
    [120.281356, 14.840826],
    [120.281313, 14.840701],
    [120.281120, 14.840386],
    [120.281008, 14.840237],
    [120.280934, 14.840097],
    [120.280863, 14.839924],
    [120.280823, 14.839751],
    [120.280965, 14.839764],
    [120.281102, 14.839762],
    [120.281203, 14.839745],
    [120.281967, 14.839534],
    [120.282215, 14.839463],
    [120.282898, 14.839267],
    [120.283056, 14.839223],
    [120.283555, 14.839085],
    [120.283770, 14.839039],
    [120.284019, 14.839003],
    [120.284040, 14.838999],
    [120.284095, 14.838992],
    [120.284230, 14.838895],
    [120.284234, 14.838867],
    [120.284246, 14.838841],
    [120.284284, 14.838807],
    [120.284335, 14.838796],
    [120.284342, 14.838796],
    [120.284389, 14.838813],
    [120.284481, 14.838803],
    [120.284575, 14.838811],
    [120.284710, 14.838904],
    [120.285571, 14.839406],
    [120.286365, 14.839882]
  ];

  const greenGeojson = {
    type: "Feature",
    properties: {},
    geometry: { type: "LineString", coordinates: greenCoordinates }
  };

  // ----- Map initialization -----
  const map = L.map('map', {
    center: [14.83, 120.282],
    zoom: 14,
    zoomControl: false,
    fadeAnimation: true,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; CartoDB'
  }).addTo(map);

  // State variables
  let currentRouteLayer = null;
  let currentMarkers = [];
  let currentRoutingControl = null;
  let currentStartCoords = null; // [lat, lng] for start point
  let currentEndCoords = null;

  // Store all route layers for "Show All" functionality
  let allRoutesLayers = [];
  let allRoutesMarkers = [];

  function clearRoute() {
    if (currentRouteLayer) map.removeLayer(currentRouteLayer);
    currentMarkers.forEach(m => map.removeLayer(m));
    currentMarkers = [];
    if (currentRoutingControl) {
      map.removeControl(currentRoutingControl);
      currentRoutingControl = null;
    }
  }

  function clearAllRoutes() {
    allRoutesLayers.forEach(layer => map.removeLayer(layer));
    allRoutesLayers = [];
    allRoutesMarkers.forEach(m => map.removeLayer(m));
    allRoutesMarkers = [];
  }

  // Create jeep icon with color option (yellow, red, green)
  function createJeepIcon(color = 'yellow') {
    let className = 'jeep-marker-yellow';
    if (color === 'red') className = 'jeep-marker-red';
    if (color === 'green') className = 'jeep-marker-green';
    return L.divIcon({
      className: className,
      html: '<span class="material-symbols-outlined">directions_bus</span>',
      iconSize: [36, 48],
      iconAnchor: [18, 42],
      popupAnchor: [0, -36]
    });
  }

  // Floating window elements
  const routeWindow = document.getElementById('route-info-window');
  const routeNameEl = document.getElementById('route-name');
  const routeDescEl = document.getElementById('route-desc');
  const closeWindowBtn = document.getElementById('close-window-btn');
  const windowRouteStartBtn = document.getElementById('window-route-start-btn');
  const windowDirectionsBtn = document.getElementById('window-directions-btn');

  closeWindowBtn.addEventListener('click', () => { routeWindow.style.display = 'none'; });

  // Show route function (single route)
  function showRoute(routeId, routeName, routeColor, routeFreq) {
    clearRoute();
    clearAllRoutes(); // also clear all routes if any
    currentStartCoords = null;
    currentEndCoords = null;

    routeNameEl.textContent = routeName;
    routeDescEl.textContent = `${routeId.charAt(0).toUpperCase() + routeId.slice(1)} Jeepney • ${routeFreq}`;
    routeWindow.style.display = 'block';

    let geojson = null;
    if (routeId === 'yellow') geojson = yellowGeojson;
    else if (routeId === 'red') geojson = redGeojson;
    else if (routeId === 'green') geojson = greenGeojson;
    // blue remains simulated

    if (geojson) {
      const routeStyle = { color: routeColor, weight: 6, opacity: 0.95, lineJoin: 'round' };
      currentRouteLayer = L.geoJSON(geojson, { style: routeStyle }).addTo(map);
      map.fitBounds(currentRouteLayer.getBounds(), { padding: [50, 50] });

      const coords = geojson.geometry.coordinates;
      if (coords && coords.length > 0) {
        const start = coords[0];
        const end = coords[coords.length - 1];
        currentStartCoords = [start[1], start[0]];
        currentEndCoords = [end[1], end[0]];

        // Add jeep markers for all routes (yellow, red, green)
        if (routeId === 'yellow') {
          const startMarker = L.marker(currentStartCoords, { icon: createJeepIcon('yellow') })
            .bindPopup(`🚏 <b>Sta. Rita</b><br>Start of Yellow Line`);
          startMarker.addTo(map);
          currentMarkers.push(startMarker);

          const endMarker = L.marker(currentEndCoords, { icon: createJeepIcon('yellow') })
            .bindPopup(`🚏 <b>Downtown</b><br>Terminal of Yellow Line`);
          endMarker.addTo(map);
          currentMarkers.push(endMarker);
        } else if (routeId === 'red') {
          const startMarker = L.marker(currentStartCoords, { icon: createJeepIcon('red') })
            .bindPopup(`🚏 <b>Gordon Heights</b><br>Start of Red Line`);
          startMarker.addTo(map);
          currentMarkers.push(startMarker);

          const endMarker = L.marker(currentEndCoords, { icon: createJeepIcon('red') })
            .bindPopup(`🚏 <b>Downtown</b><br>Terminal of Red Line`);
          endMarker.addTo(map);
          currentMarkers.push(endMarker);
        } else if (routeId === 'green') {
          const startMarker = L.marker(currentStartCoords, { icon: createJeepIcon('green') })
            .bindPopup(`🚏 <b>Mabayuan</b><br>Start of Green Line`);
          startMarker.addTo(map);
          currentMarkers.push(startMarker);

          const endMarker = L.marker(currentEndCoords, { icon: createJeepIcon('green') })
            .bindPopup(`🚏 <b>Public Market</b><br>Terminal of Green Line`);
          endMarker.addTo(map);
          currentMarkers.push(endMarker);
        }
      }
    } else {
      // Simulate blue route with straight line
      const bounds = map.getBounds();
      const center = bounds.getCenter();
      const startPoint = [center.lat - 0.01, center.lng - 0.01];
      const endPoint = [center.lat + 0.01, center.lng + 0.01];
      const latlngs = [startPoint, endPoint];
      currentRouteLayer = L.polyline(latlngs, { color: routeColor, weight: 6 }).addTo(map);
      map.fitBounds(currentRouteLayer.getBounds(), { padding: [50, 50] });
      currentStartCoords = startPoint;
      currentEndCoords = endPoint;
    }
  }

  // Show all routes function
  function showAllRoutes() {
    clearRoute();
    clearAllRoutes();
    routeWindow.style.display = 'none'; // hide floating window

    // Add yellow route
    const yellowStyle = { color: '#fbbf24', weight: 5, opacity: 0.8, lineJoin: 'round' };
    const yellowLayer = L.geoJSON(yellowGeojson, { style: yellowStyle }).addTo(map);
    allRoutesLayers.push(yellowLayer);

    // Add red route
    const redStyle = { color: '#dc2626', weight: 5, opacity: 0.8, lineJoin: 'round' };
    const redLayer = L.geoJSON(redGeojson, { style: redStyle }).addTo(map);
    allRoutesLayers.push(redLayer);

    // Add green route
    const greenStyle = { color: '#16a34a', weight: 5, opacity: 0.8, lineJoin: 'round' };
    const greenLayer = L.geoJSON(greenGeojson, { style: greenStyle }).addTo(map);
    allRoutesLayers.push(greenLayer);

    // Add markers for all routes
    // Yellow markers
    const yellowStart = L.marker([yellowGeojson.geometry.coordinates[0][1], yellowGeojson.geometry.coordinates[0][0]], { icon: createJeepIcon('yellow') })
      .bindPopup('🚏 Sta. Rita (Yellow Line Start)');
    yellowStart.addTo(map);
    allRoutesMarkers.push(yellowStart);
    const yellowEnd = L.marker([yellowGeojson.geometry.coordinates[yellowGeojson.geometry.coordinates.length-1][1], yellowGeojson.geometry.coordinates[yellowGeojson.geometry.coordinates.length-1][0]], { icon: createJeepIcon('yellow') })
      .bindPopup('🚏 Downtown (Yellow Line Terminal)');
    yellowEnd.addTo(map);
    allRoutesMarkers.push(yellowEnd);

    // Red markers
    const redStart = L.marker([redGeojson.geometry.coordinates[0][1], redGeojson.geometry.coordinates[0][0]], { icon: createJeepIcon('red') })
      .bindPopup('🚏 Gordon Heights (Red Line Start)');
    redStart.addTo(map);
    allRoutesMarkers.push(redStart);
    const redEnd = L.marker([redGeojson.geometry.coordinates[redGeojson.geometry.coordinates.length-1][1], redGeojson.geometry.coordinates[redGeojson.geometry.coordinates.length-1][0]], { icon: createJeepIcon('red') })
      .bindPopup('🚏 Downtown (Red Line Terminal)');
    redEnd.addTo(map);
    allRoutesMarkers.push(redEnd);

    // Green markers
    const greenStart = L.marker([greenGeojson.geometry.coordinates[0][1], greenGeojson.geometry.coordinates[0][0]], { icon: createJeepIcon('green') })
      .bindPopup('🚏 Mabayuan (Green Line Start)');
    greenStart.addTo(map);
    allRoutesMarkers.push(greenStart);
    const greenEnd = L.marker([greenGeojson.geometry.coordinates[greenGeojson.geometry.coordinates.length-1][1], greenGeojson.geometry.coordinates[greenGeojson.geometry.coordinates.length-1][0]], { icon: createJeepIcon('green') })
      .bindPopup('🚏 Public Market (Green Line Terminal)');
    greenEnd.addTo(map);
    allRoutesMarkers.push(greenEnd);

    // Fit bounds to show all routes
    const allBounds = L.latLngBounds([
      [yellowGeojson.geometry.coordinates[0][1], yellowGeojson.geometry.coordinates[0][0]],
      [yellowGeojson.geometry.coordinates[yellowGeojson.geometry.coordinates.length-1][1], yellowGeojson.geometry.coordinates[yellowGeojson.geometry.coordinates.length-1][0]],
      [redGeojson.geometry.coordinates[0][1], redGeojson.geometry.coordinates[0][0]],
      [redGeojson.geometry.coordinates[redGeojson.geometry.coordinates.length-1][1], redGeojson.geometry.coordinates[redGeojson.geometry.coordinates.length-1][0]],
      [greenGeojson.geometry.coordinates[0][1], greenGeojson.geometry.coordinates[0][0]],
      [greenGeojson.geometry.coordinates[greenGeojson.geometry.coordinates.length-1][1], greenGeojson.geometry.coordinates[greenGeojson.geometry.coordinates.length-1][0]]
    ]);
    map.fitBounds(allBounds, { padding: [50, 50] });
  }

  // Attach click handlers to cards
  const routeCards = document.querySelectorAll('.route-card');
  routeCards.forEach(card => {
    card.addEventListener('click', () => {
      routeCards.forEach(c => c.classList.remove('route-card-active'));
      card.classList.add('route-card-active');
      const routeId = card.dataset.route;
      const name = card.dataset.name;
      const color = card.dataset.color;
      const freq = card.dataset.frequency;
      showRoute(routeId, name, color, freq);
    });
  });

  // Show All Routes button
  document.getElementById('show-all-routes-btn').addEventListener('click', showAllRoutes);

  // Route Start button
  windowRouteStartBtn.addEventListener('click', () => {
    if (currentStartCoords) {
      map.flyTo(currentStartCoords, 17, { duration: 1.5 });
    } else {
      alert('No start point available.');
    }
  });

  // Directions button
  windowDirectionsBtn.addEventListener('click', () => {
    if (!currentStartCoords) {
      alert('Please select a route first.');
      return;
    }
    if (currentRoutingControl) map.removeControl(currentRoutingControl);

    map.locate({ setView: false, enableHighAccuracy: true });
    map.once('locationfound', (e) => {
      const userLatLng = e.latlng;
      currentRoutingControl = L.Routing.control({
        waypoints: [
          L.latLng(userLatLng.lat, userLatLng.lng),
          L.latLng(currentStartCoords[0], currentStartCoords[1])
        ],
        router: L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1' }),
        lineOptions: { styles: [{ color: '#137fec', weight: 6 }] },
        showAlternatives: false,
        fitSelectedRoutes: true,
        show: true,
        collapsible: true,
        position: 'bottomleft'
      }).addTo(map);
    });
    map.once('locationerror', () => alert('Could not get your location.'));
  });

  // Zoom controls
  document.getElementById('zoom-in-btn')?.addEventListener('click', () => map.zoomIn());
  document.getElementById('zoom-out-btn')?.addEventListener('click', () => map.zoomOut());
  document.getElementById('locate-btn')?.addEventListener('click', () => {
    map.locate({ setView: true, maxZoom: 16 });
  });
  map.on('locationerror', () => alert('Location access denied.'));
  document.getElementById('layers-btn')?.addEventListener('click', () => {
    alert('All routes: Yellow, Red, Green (GPX). Blue is simulated.');
  });

  routeWindow.style.display = 'none';
});