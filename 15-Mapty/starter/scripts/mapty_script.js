'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// LOAD MAP WITH GEOLOCATION API AND LEAFLET

const currentLocation =
{
    latitude: null, 
    longitude: null
};

function funcGetInitialCoordinates(funcResolve)
{
    function funcSuccess(objPosition)
    {
        currentLocation.latitude = objPosition.coords["latitude"];
        currentLocation.longitude = objPosition.coords["longitude"];

        const map = L.map('map').setView([currentLocation.latitude, 
            currentLocation.longitude], 13);

        L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

        L.marker([currentLocation.latitude, currentLocation.longitude]).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
        funcResolve(map);
    }

    function funcFailure(...args)
    {
        console.log("Failure!");
        args.forEach(arg => console.log(arg));
        funcReject();
    }

    // Geolocation object for getting current position (check if exists first)
    // Will use success function if able to retrieve and failure function if not.
    if (!navigator.geolocation) return null; 
    navigator.geolocation.getCurrentPosition(funcSuccess, funcFailure);
};

// DISPLAY MARKER ON MAP WHEN CLICKED 

new Promise(funcGetInitialCoordinates).then(function(map) 
{
    function funcEventMapClicked(mapEvent)
    {
        function funcDisplayWorkout(formEvent, mapEvent)
        {
            console.log(formEvent);
            // Change default options for marker
            const markerOptions = 
            {
                maxWidth: 250,
                minWidth: 200, 
                autoClose: false,
                closeOnClick: false,
                className: `${inputType.value}-popup`
            };

            console.log(inputType.value);
            const strWorkout = inputType.value === "running" 
                ? `Cadence: ${inputCadence.value}`
                : `Elevation: ${inputElevation.value}`;

            console.log(strWorkout);

            const strContent = `Distance: ${inputDistance.value}\nDuration:`
                + ` ${inputDuration.value}\n${strWorkout}`;

            inputCadence.value = inputDistance.value = inputDuration.value = 
                inputElevation.value = "";

            // Create new marker with marker options at click coordinates
            L.marker([mapEvent.latlng.lat, mapEvent.latlng.lng]).addTo(map)
                .bindPopup(L.popup(markerOptions))
                .setPopupContent(strContent)
                .openPopup();

            inputType.removeEventListener("change", funcSwitchWorkout);
            form.removeEventListener("submit", funcSubmitForm);
            form.classList.add("hidden");
        }

        form.classList.remove("hidden");
        inputDistance.focus();

        function funcSwitchWorkout()
        {
            inputCadence.parentElement.classList.toggle("form__row--hidden");
            inputElevation.parentElement.classList.toggle("form__row--hidden");
        }

        function funcSubmitForm(formEvent)
        {
            formEvent.preventDefault();
            funcDisplayWorkout(formEvent, mapEvent);
        }

        inputType.addEventListener("change", funcSwitchWorkout);
        form.addEventListener("submit", funcSubmitForm);
    }

    map.on("click", funcEventMapClicked);
});

console.dir(inputCadence);
