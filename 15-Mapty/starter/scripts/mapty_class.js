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
    #mapZoom = 13;

    constructor()
    {
        const proMap = new Promise(this.#funcCreateMap);

        // Once map has loaded, add event listeners to map to handle clicks.
        proMap
            .then((map) => 
            {
                this.#map = map;
                console.log(this.#map);
                this.#funcAddMapClickEvent();
                this.#funcAddWorkoutClickEvent();
                this.#arrWorkouts.push(...this.#funcLoadWorkouts());
                this.#arrWorkouts.forEach(this.#funcRenderWorkout)
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
            const numId = this.#arrWorkouts.length;
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

            this.#funcRenderWorkout(workout);
    
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

        this.#arrWorkouts.push(workout);
        this.#funcSaveWorkouts();
    }

    #funcRenderWorkout(workout)
    {
        if (!workout instanceof Workout) return null;

        let strTemplate;

        if (workout instanceof WorkoutRun)
        {
            strTemplate = `<li class="workout workout--running" data-id="1234567890">
            <h2 class="workout__title">Running on ${months[workout.date.getMonth()]} ${workout.date.getDate()}</h2>
            <div class="workout__details">
              <span class="workout__icon">🏃‍♂️</span>
              <span class="workout__value">${workout.numDistance}</span>
              <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⏱</span>
              <span class="workout__value">${workout.numDuration}</span>
              <span class="workout__unit">min</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">${workout.numPace}</span>
              <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">🦶🏼</span>
              <span class="workout__value">${workout.numCadence}</span>
              <span class="workout__unit">spm</span>
            </div> 
          </li>`;
        }
        else if (workout instanceof WorkoutCycle)
        {
            strTemplate = `<li class="workout workout--cycling" data-id="1234567891">
            <h2 class="workout__title">Cycling on ${months[workout.date.getMonth()]} ${workout.date.getDate()}</h2>
            <div class="workout__details">
              <span class="workout__icon">🚴‍♀️</span>
              <span class="workout__value">${workout.numDistance}</span>
              <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⏱</span>
              <span class="workout__value">${workout.numDuration}</span>
              <span class="workout__unit">min</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">${workout.numSpeed}</span>
              <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⛰</span>
              <span class="workout__value">${workout.numElevation}</span>
              <span class="workout__unit">m</span>
            </div>
          </li>`;
        }

        containerWorkouts.insertAdjacentHTML("beforeEnd", strTemplate);
    }

    #funcAddWorkoutClickEvent()
    {
        containerWorkouts.addEventListener("click", 
            this.#funcHandleWorkoutClick.bind(this));
    }

    #funcHandleWorkoutClick(clickEvent)
    {
        if (!clickEvent.target.closest(".workout")) return null 

        const numWorkoutIndex = [...containerWorkouts.querySelectorAll(".workout")]
            .findIndex((divWorkout) => 
            {
                return divWorkout === clickEvent.target.closest(".workout")
            });
        console.log(this.#arrWorkouts[numWorkoutIndex]);
        this.#funcScrollToCoords(this.#arrWorkouts[numWorkoutIndex].coords);
    }

    #funcScrollToCoords(coords)
    {
        const scrollOptions = 
        {
            animate: true, 
            pan: 
            {
                duration: 1
            }
        };

        this.#map.setView(coords, this.#mapZoom, scrollOptions);
    }

    #funcSaveWorkouts()
    {
        localStorage.setItem("workouts", JSON.stringify(this.#arrWorkouts));
    }

    #funcLoadWorkouts()
    {
        let arrWorkouts = JSON.parse(localStorage.getItem("workouts"));
        
        arrWorkouts.forEach((workout) => 
        {
            console.log(workout.date);
            workout.date = new Date(workout.date);

            workout.numElevation 
                ? workout.__proto__ = WorkoutCycle.prototype 
                : workout.__proto__ = WorkoutRun.prototype;
        }, []);

        return arrWorkouts;
    }
    
}

const mapty = new MaptyClass();
console.log(mapty.arrWorkouts);