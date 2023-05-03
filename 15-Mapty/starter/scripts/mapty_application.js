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
    this.map.on("click", (mapEvent) => this.methHandleMapClick(mapEvent));
};

MaptyApplication.prototype.methHandleError = function(error)
{
    console.error(`Error: ${error.message}`);
};

MaptyApplication.prototype.methHandleMapClick = function(mapEvent)
{
    const funcHideForm = () =>
    {
        inputType.removeEventListener("change", funcSwitchWorkout);
        form.removeEventListener("submit", funcHandleFormSubmit);
        form.classList.add("hidden");
    };

    const funcShowForm = () =>
    {
        console.log("Who?");
        form.classList.remove("hidden");
        inputDistance.focus();

        inputType.addEventListener("change", funcSwitchWorkout);
        form.addEventListener("submit", funcHandleFormSubmit);
    };

    const funcSwitchWorkout = () =>
    {
        inputCadence.parentElement.classList.toggle("form__row--hidden");
        inputElevation.parentElement.classList.toggle("form__row--hidden");
    };

    const funcHandleFormSubmit = (formEvent) => 
    {
        formEvent.preventDefault();

        const workout = funcCreateWorkout(mapEvent);
        funcCreateMarker(workout, mapEvent);

        inputCadence.value = inputDistance.value = inputDuration.value = 
                inputElevation.value = "";

        funcHideForm();
    };

    const funcCreateWorkout = () =>
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

        this.arrWorkouts.push(workout);
        return workout;
    };

    const funcCreateMarker = (workout) =>
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

    funcShowForm();
};

// Application run.

const maptyApplication = new MaptyApplication();
maptyApplication.proMap
    .then(maptyApplication.methRunApplication.bind(maptyApplication))
    .catch(maptyApplication.methHandleError.bind(maptyApplication));