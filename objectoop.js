/*class App {
  #map;
  #mapEvent;
  //constructor function is a executed as soon as app object is created (as the page loaded)
  constructor() {
    this._getPosition();

    //event listeners

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', function () {
      inputElevation
        .closest('.form__row')
        .classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    });
  }

  _getPosition() {
    //geolocation api(browsers api)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), //regular function call have this keyword set to undefine in _loadMap.bind(this) this points to current object (bind returns a new function)
        function () {
          alert("couldn't get the location");
        }
      );
    }
  }
  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    // console.log(longitude, latitude);
    const coords = [latitude, longitude];

    // Initialize the map with Google Maps
    this.#map = L.map('map').setView(coords, 17);

    // Replace the tile layer with Google Maps
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(this.#map);

    // Add marker to the map

    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _toggleElevationField() {}

  _newWorkout(e) {
    e.preventDefault();
    inputDuration.value =
      inputDistance.value =
      inputCadence.value =
      inputElevation.value =
        '';
    //display marker
    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxHeight: 250,
          minHeight: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('running')
      .openPopup();
  }
}
//app object is created in the beginning as the page loads (constructor function is also executed as the page loads)
const app = new App();

*/
