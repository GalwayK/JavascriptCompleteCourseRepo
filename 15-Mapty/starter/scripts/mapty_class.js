"use strict";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class MaptyClass
{
    // Private fields.
    #arrWorkouts = [];
    #map;

    constructor()
    {
        console.log(this);
        const proMap = new Promise(this.#funcCreateMap);

        // Once map has loaded, add event listeners to map to handle clicks.
        proMap
            .then((map) => 
            {
                this.#map = map;
                console.log(this.#map);
                this.#funcAddMapClickEvent();
            })
            .catch((error) =>
            {
                console.error(`Error creating map: ${error}`);
            });
    }

    // Static method for creating map
    #funcCreateMap(funcResolve, funcReject)
    {
        const funcLoadMap = (objPosition) =>
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
            : navigator.geolocation.getCurrentPosition(funcLoadMap,
                funcReject);
    }
    
    get arrWorkouts()
    {
        return this.#arrWorkouts;
    }    

    #funcAddMapClickEvent()
    {
        this.#map.on("click", this.#funcHandleMapClick.bind(this))
    }

    #funcHandleMapClick(mapEvent)
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

        const funcCreateWorkout = (mapEvent) =>
        {
            const numId = this.arrWorkouts.length;
            const numDistance = inputDistance.value;
            const numDuration = inputDuration.value;
            const coords = mapEvent.latlng;
            const date = new Date();
            const numExtra = inputType.value === "running"
                ? inputCadence.value : inputElevation.value;
            

            this.#funcCreateWorkout(numId, numDistance, numDuration, coords, 
                date, numExtra, inputType.value);
        };
    
        const funcHandleFormSubmit = (formEvent) => 
        {
            formEvent.preventDefault();
    
            funcCreateWorkout(mapEvent);

            const workout = this.#arrWorkouts.slice(-1)[0];

            funcCreateMarker(workout, mapEvent);
    
            inputCadence.value = inputDistance.value = inputDuration.value = 
                    inputElevation.value = "";
    
            funcHideForm();
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
    
            L.marker([mapEvent.latlng.lat, mapEvent.latlng.lng]).addTo(this.#map)
                .bindPopup(L.popup(markerOptions))
                .setPopupContent(strContent)
                .openPopup();
        };
    
        funcShowForm();
    };

    #funcCreateWorkout(numId, numDistance, numDuration, coords, date, numExtra, 
        strType)
    {
        const workout = strType === "running"
            ? new WorkoutRun(numId, numDistance, numDuration, coords, date, 
                numExtra)
            : new WorkoutCycle(numId, numDistance, numDuration, coords, date, 
                numExtra);

        this.arrWorkouts.push(workout);
    }
}

const mapty = new MaptyClass();
console.log(mapty.arrWorkouts);