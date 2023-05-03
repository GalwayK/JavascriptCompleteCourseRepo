'use strict';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Mapty Application Class (With Function Constructor)
function MaptyApplication()
{
    function funcCreateMap(funcResolve, funcReject)
    {
        const methLoadMap = (objPosition) =>
        {
            const numLat = objPosition.coords["latitude"];
            const numLong = objPosition.coords["longitude"];

            const map = L.map('map').setView([numLat, 
                numLong], 13);

            L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

            funcResolve(map);
        }

        !navigator.geolocation 
            ? funcReject("An error occured while obtaining coordinates.")
            : navigator.geolocation.getCurrentPosition(methLoadMap,
                funcReject);
    }

    this.arrWorkouts = [];
    this.proMap = new Promise(funcCreateMap);
}

MaptyApplication.prototype.methRunApplication = function(map)
{
    this.map = map;
    console.log(this.map);
    this.map.on("click", this.methHandleMapClick.bind(this));
};

MaptyApplication.prototype.methHandleError = function(error)
{
    console.error(`Error: ${error.message}`);
};

MaptyApplication.prototype.methHandleMapClick = function(mapEvent)
{
    

    this.methShowForm(mapEvent);
};

MaptyApplication.prototype.methHideForm = function()
{
    inputType.removeEventListener("change", this.methSwitchWorkout);
    form.removeEventListener("submit", this.methSubmitForm);
    form.classList.add("hidden");
};

MaptyApplication.prototype.methShowForm = function(mapEvent)
{
    form.classList.remove("hidden");
    inputDistance.focus();
    inputType.addEventListener("change", this.methSwitchWorkout);

    form.addEventListener("submit", (formEvent) => 
        this.methSubmitForm(formEvent, mapEvent));
};

MaptyApplication.prototype.methSwitchWorkout = function()
{
    inputCadence.parentElement.classList.toggle("form__row--hidden");
    inputElevation.parentElement.classList.toggle("form__row--hidden");
};

MaptyApplication.prototype.methSubmitForm = function(formEvent, mapEvent)
{
    formEvent.preventDefault();

    console.log(formEvent);
    console.log(mapEvent);

    const workout = this.methCreateWorkout(mapEvent);
    this.methCreateMarker(workout, mapEvent);

    inputCadence.value = inputDistance.value = inputDuration.value = 
            inputElevation.value = "";

    this.methHideForm();
};

MaptyApplication.prototype.methCreateWorkout = function(mapEvent)
{
    const numId = this.arrWorkouts.length;
    const numDistance = inputDistance.value;
    const numDuration = inputDuration.value;
    const coords = mapEvent.latlng;
    const date = new Date();

    const workout = inputType.value === "running"
        ? new WorkoutRun(numId, numDistance, numDuration, coords, date, 
            inputCadence.value)
        : new WorkoutCycle(numId, numDistance, numDuration, coords, date, 
            inputElevation.value);
    return workout;
};

MaptyApplication.prototype.methCreateMarker = function(workout, mapEvent)
{
    const markerOptions = 
    {
        maxWidth: 250,
        minWidth: 200, 
        autoClose: false,
        closeOnClick: false,
        className: `${inputType.value}-popup`
    };

    let strContent = `${workout.getStrWorkout()} on`
        + ` ${workout.date.toUTCString()}`;
    
    console.log(mapEvent.latlng);

    L.marker([mapEvent.latlng.lat, mapEvent.latlng.lng]).addTo(this.map)
        .bindPopup(L.popup(markerOptions))
        .setPopupContent(strContent)
        .openPopup();
};

// Application run.

const maptyApplication = new MaptyApplication();
maptyApplication.proMap
    .then(maptyApplication.methRunApplication.bind(maptyApplication))
    .catch(maptyApplication.methHandleError.bind(maptyApplication));