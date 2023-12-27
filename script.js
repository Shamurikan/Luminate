// Defining a new variable in Date classes.
const d = new Date();

// Check if the keys exist.
if (localStorage.getItem("dailyChange") == null) {

	// Defining the important keys.
	localStorage.setItem("dailyChange", d.getDay());
	localStorage.setItem("dayProgress", 0);
	localStorage.setItem("weekProgress", 0);

	// Defining the workout keys.
	localStorage.setItem("workoutProgress", "[]");
	localStorage.setItem("isWorkoutDone", "No");
}

// Defining the important variables.
var dailyChange = localStorage.getItem("dailyChange"),
	dayProgress = localStorage.getItem("dayProgress"),
	weekProgress = localStorage.getItem("weekProgress"),

	// Defining the workout variables.
	workoutProgress = JSON.parse(localStorage.getItem("workoutProgress")),
	isWorkoutDone = localStorage.getItem("isWorkoutDone");

// Inputs to change the daily change.
var dayInput = document.getElementById("day-input"),
	weekInput = document.getElementById("week-input");

// Check if the day changed.
if (dailyChange != d.getDay()) {
	localStorage.setItem("dailyChange", d.getDay());

	localStorage.setItem("dayProgress", Number(dayProgress) + 1);
	dayProgress = localStorage.getItem("dayProgress");

	localStorage.setItem("isWorkoutDone", "No");
	isWorkoutDone = localStorage.getItem("isWorkoutDone");

	// Check if the week progress changed.
	if (dayProgress >= 7) {
		localStorage.setItem("dayProgress", 0);
		dayProgress = localStorage.getItem("dayProgress");

		localStorage.setItem("weekProgress", Number(weekProgress) + 1);
		weekProgress = localStorage.getItem("weekProgress");

		// Check if the three stages over.
		if (weekProgress >= 18) {
			localStorage.setItem("weekProgress", 0);
			weekProgress = localStorage.getItem("weekProgress");
		}
	}
} else {
	// Alert that the day doesn't changed.
	console.log("The day doesn't change!")
}

// Defining the workout section
const workoutSection = document.getElementById("workout-section");

// Change the "dayProgress" value by input.
dayInput.value = dayProgress;

dayInput.onkeyup = () => {
	localStorage.setItem('dayProgress', dayInput.value)
};

// Change the "weekProgress" value by input.
weekInput.value = weekProgress;

weekInput.onkeyup = () => {
	localStorage.setItem("weekProgress", weekInput.value)
};

// Divide the weeks into three stages.

if (weekProgress >= 0 && weekProgress <= 5) { weekProgress = 0 }
if (weekProgress >= 6 && weekProgress <= 11) { weekProgress = 1 }
if (weekProgress >= 12 && weekProgress <= 17) { weekProgress = 2 }

if (isWorkoutDone == "No") {

	var progressBarNumber = 0;

	workoutSection.innerHTML += `
	<section class="content-section">
		<h1 class="content-title">Walking on a treadmill</h1>
		<div class="content-stages">15 Minutes</div>
		<div class="content-progress-bar">
				<div id="${progressBarNumber}" onclick="this.classList.toggle('isDone'); saveChanges(${progressBarNumber})">|</div>
		</div>
	</section>`

	// add a space between the exercises.
	workoutSection.innerHTML += `<div style="margin: 70px;"></div>`

	// Defining a schedule for warm up.
	var warmUp = [
		{
			name: "Neck circles",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Shoulder rotation",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Arm circles",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Arm circles opposite directions",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Elbow circles",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Wrist rotations",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Hip rotation",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Body circles",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Inner tie and oblique",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Lower back and hammer strings",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Lounge tap",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Side static luge",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Front static lunge",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Squat cross arms",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Standing crunch",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Butterflyes",
			rounds: "4",
			counts: "10"
		},
		{
			name: "Jumping jacks",
			rounds: "6",
			counts: "10"
		}
	]

	progressBarNumber++
	// Add the exercises section.
	for (let i = 0; i < warmUp.length; i++) {

		// Defining a variable for progress.
		var progressBar = ``;

		for (let j = 0; j < warmUp[i].rounds; j++) {
			progressBar += `<div id="${progressBarNumber}" onclick="this.classList.toggle('isDone'); saveChanges(${progressBarNumber})">|</div>`;
			progressBarNumber++
		}
		workoutSection.innerHTML += `
<section class="content-section">
	<h1 class="content-title">${warmUp[i].name}<a target="_blank" href="https://m.youtube.com/results?sp=mAEA&search_query=${warmUp[i].name}"><img class="content-share-icon" src="https://cdn-icons-png.flaticon.com/512/2901/2901214.png"/></h1></a>
	<div class="content-stages">${warmUp[i].counts} Counts</div>
	<div class="content-progress-bar">${progressBar}</div>
</section>`
	}

	workoutSection.innerHTML += `<div style="marign: 1000px;></div>"`

	// add a space between the exercises.
	workoutSection.innerHTML += `<div style="margin: 70px;"></div>`

	// Defining a schedule for workout.
	var stages = [

		// The first stage.
		[

			// The first day.
			[
				{
					name: "Barbell back squats",
					rounds: "6",
					counts: "10"
				},
				{
					name: "Leg extensions",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Dumbbell walking lunges",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Lying leg curl",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Dumbbell step up",
					rounds: "5",
					counts: "12"
				},
				{
					name: "Seated calf raises",
					rounds: "5",
					counts: "25"
				}
			],

			// The second day.
			[
				{
					name: "Lat pulldown",
					rounds: "5",
					counts: "15"
				},
				{
					name: "One arm dumbbell row",
					rounds: "5",
					counts: "10"
				},
				{
					name: "Seated cable row",
					rounds: "5",
					counts: "20"
				},
				{
					name: "Barbell deadlift",
					rounds: "4",
					counts: "10"
				},
				{
					name: "Back hyperextensions",
					rounds: "7",
					counts: "10"
				}
			],

			// The third day.
			[
				{
					name: "Barbell incline chest press",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Machine pec deck",
					rounds: "4",
					counts: "20"
				},
				{
					name: "Decline dumbbell press",
					rounds: "5",
					counts: "10"
				},
				{
					name: "Smith machine incline chest press",
					rounds: "4",
					counts: "12"
				},
				{
					name: "Dumbbell pullover",
					rounds: "4",
					counts: "12"
				}
			],

			// The fourth day,
			[
				"Rest"
			],

			// The fiveth day.
			[
				{
					name: "Standing barbell curl",
					rounds: "5",
					counts: "10"
				},
				{
					name: "Triceps rope pushdown",
					rounds: "6",
					counts: "10"
				},
				{
					name: "Dumbbell alternating curl",
					rounds: "4",
					counts: "12"
				},
				{
					name: "Ez bar skullcrusher",
					rounds: "5",
					counts: "10"
				},
				{
					name: "Dumbbell one arm preacher curl",
					rounds: "5",
					counts: "12"
				},
				{
					name: "Dumbbell triceps kickback",
					rounds: "4",
					counts: "15"
				},
				{
					name: "One arm cable curl",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Dumbbell hammer curl",
					rounds: "7",
					counts: "10"
				}
			],

			// The sixth day.
			[
				{
					name: "Seated dumbbell side lateral raises",
					rounds: "6",
					counts: "10"
				},
				{
					name: "Standing barbell front raises",
					rounds: "7",
					counts: "10"
				},
				{
					name: "Bent overdumbbell rear delts raises",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Seated dumbbell shoulder press",
					rounds: "4",
					counts: "12"
				},
				{
					name: "Rope crunches",
					rounds: "5",
					counts: "20"
				},
				{
					name: "Leg raises",
					rounds: "7",
					counts: "25"
				}
			]
		],

		// The second stage.
		[

			// The first day.
			[
				{
					name: "Leg extensions",
					rounds: "10",
					counts: "10"
				},
				{
					name: "Leg press",
					rounds: "6",
					counts: "12"
				},
				{
					name: "Dumbbell step up",
					rounds: "5",
					counts: "12"
				},
				{
					name: "Sumo squats",
					rounds: "6",
					counts: "10"
				},
				{
					name: "Walking Dumbbell lunges",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Dumbbell squats",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Seated calf raises",
					rounds: "5",
					counts: "20"
				}
			],

			// The second day.
			[
				{
					name: "Bent over barbell row",
					rounds: "5",
					counts: "12"
				},
				{
					name: "One arm dumbbell row",
					rounds: "4",
					counts: "10"
				},
				{
					name: "Wide grip seated cable row",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Lat pulldown",
					rounds: "7",
					counts: "10"
				},
				{
					name: "Seated close grip row",
					rounds: "3",
					counts: "20"
				}
			],

			// The third day.
			[
				{
					name: "Dumbbell incline chest press",
					rounds: "5",
					counts: "10"
				},
				{
					name: "Standing cable chest fly",
					rounds: "4",
					counts: "20"
				},
				{
					name: "Decline barbell press",
					rounds: "4",
					counts: "12"
				},
				{
					name: "Incline barbellchest press",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Cable crossover",
					rounds: "4",
					counts: "12"
				}
			],

			// The fourth day.
			[
				"Rest"
			],

			// The fiveth day.
			[
				{
					name: "Dumbbell contraction curl",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Dumbbell preacher curl",
					rounds: "5",
					counts: "10"
				},
				{
					name: "Seated two arm dumbbell triceps extensions",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Straight bar triceps pressdwon",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Standing barbell curl",
					rounds: "4",
					counts: "10"
				},
				{
					name: "Two arm dumbbell curl",
					rounds: "4",
					counts: "12"
				},
				{
					name: "One arm cable triceps extensions",
					rounds: "3",
					counts: "20"
				},
				{
					name: "Reverse grip barbell curl",
					rounds: "7",
					counts: "10"
				}
			],

			// The sixth day.
			[
				{
					name: "Plate front raises",
					rounds: "7",
					counts: "10"
				},
				{
					name: "Reverse pec deck",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Dumbbell side lateral raises",
					rounds: "5",
					counts: "20"
				},
				{
					name: "Arnold press",
					rounds: "5",
					counts: "12"
				},
				{
					name: "Cable side lateral raises",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Behind the neck barbell press",
					rounds: "3",
					counts: "12"
				},
				{
					name: "Rope crunches",
					rounds: "5",
					counts: "20"
				},
				{
					name: "Leg raises",
					rounds: "7",
					counts: "25"
				}
			]
		],

		// The third stage.
		[

			// The first day.
			[
				{
					name: "Front squats",
					rounds: "6",
					counts: "10"
				},
				{
					name: "Dumbbell squats",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Lying leg curl",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Barbell walking lunges",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Leg extensions",
					rounds: "6",
					counts: "15"
				},
				{
					name: "Back squats",
					rounds: "4",
					counts: "10"
				},
				{
					name: "Seated calf raises",
					rounds: "5",
					counts: "25"
				}
			],

			// The second day.
			[
				{
					name: "Dumbbell two arm row",
					rounds: "7",
					counts: "10"
				},
				{
					name: "Underhand barbell row",
					rounds: "5",
					counts: "12"
				},
				{
					name: "V-bar pulldowns",
					rounds: "5",
					counts: "12"
				},
				{
					name: "Underhand close grip cable row",
					rounds: "4",
					counts: "10"
				},
				{
					name: "Barbell deadlift",
					rounds: "7",
					counts: "10"
				},
				{
					name: "Close grip seated row",
					rounds: "3",
					counts: "20"
				}
			],

			// The third day.
			[
				{
					name: "Incline barbell press",
					rounds: "6",
					counts: "10"
				},
				{
					name: "Decline dumbbell press",
					rounds: "5",
					counts: "12"
				},
				{
					name: "Incline bench dumbbell fly",
					rounds: "6",
					counts: "15"
				},
				{
					name: "Pec deck",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Incline dumbbell press",
					rounds: "4",
					counts: "20"
				}
			],

			// The fourth day.
			[
				"Rest"
			],

			// The fiveth day.
			[
				{
					name: "Dumbbell hammer curl",
					rounds: "7",
					counts: "10"
				},
				{
					name: "One arm triceps cable pushdown",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Dumbbell kickbacks",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Standing cable curl",
					rounds: "5",
					counts: "12"
				},
				{
					name: "Dumbbell alternating curl",
					rounds: "5",
					counts: "12"
				},
				{
					name: "Rope pushdown",
					rounds: "5",
					counts: "15"
				},
				{
					name: "Barbell preacher curl",
					rounds: "4",
					counts: "15"
				},
				{
					name: "Reverse ez bar curl",
					rounds: "5",
					counts: "10"
				}
			],

			// The sixth day.
			[
				{
					name: "One arm dumbbell side lateral raises",
					rounds: "7",
					counts: "10"
				},
				{
					name: "Dumbbell front raises",
					rounds: "6",
					counts: "10"
				},
				{
					name: "Cable rear delts raises",
					rounds: "7",
					counts: "10"
				},
				{
					name: "Barbell shoulder press",
					rounds: "6",
					counts: "10"
				},
				{
					name: "Cable side lateral raises",
					rounds: "4",
					counts: "20"
				},
				{
					name: "Rope crunches",
					rounds: "5",
					counts: "20"
				},
				{
					name: "Leg raises",
					rounds: "7",
					counts: "25"
				}
			]
		]
	]

	// Add the exercises section.
	for (let i = 0; i < stages[weekProgress][dayProgress].length; i++) {

		// Defining a variable for progress.
		var progressBar = ``;

		for (let j = 0; j < stages[weekProgress][dayProgress][i].rounds; j++) {
			progressBar += `<div id="${progressBarNumber}" onclick="this.classList.toggle('isDone'); saveChanges(${progressBarNumber})">|</div>`;
			progressBarNumber++
		}
		workoutSection.innerHTML += `
<section class="content-section">
	<h1 class="content-title">${stages[weekProgress][dayProgress][i].name}<a target="_blank" href="https://m.youtube.com/results?sp=mAEA&search_query=${stages[weekProgress][dayProgress][i].name}"><img class="content-share-icon" src="https://cdn-icons-png.flaticon.com/512/2901/2901214.png"/></h1></a>
	<div class="content-stages">${stages[weekProgress][dayProgress][i].counts} Counts</div>
	<div class="content-progress-bar">${progressBar}</div>
</section>`
	}

	// add a space between the exercises.
	workoutSection.innerHTML += `<div style="margin: 70px;"></div>`

	
	// The cardio duration in the stages.
	switch (weekProgress) {
		case 0:
			cardioDuration = "30 Minutes";
			break;
		case 1:
			cardioDuration = "45 Minutes";
			break;
		case 2:
			cardioDuration = "60 Minutes";
			break;
	}

	// Add the cardio section content.
	workoutSection.innerHTML += `
<section class="content-section">
	<h1 class="content-title">The Cardio</h1>
	<div class="content-stages">${cardioDuration}</div>
	<div class="content-progress-bar"><div id="${progressBarNumber}" onclick="this.classList.toggle('isDone'); saveChanges(${progressBarNumber++})">|</div></div>
</section>`

	if (workoutProgress.includes("true")) {
		for (let i = 0; i < progressBarNumber; i++) {
			var x = document.getElementById(`${i}`);
			if (workoutProgress[i] === "true") {
				x.classList.toggle("isDone");
			}
		}
	} else {
		workoutProgress = []
		for (let i = 0; i < progressBarNumber; i++) {
			workoutProgress.push("false");
		}
		localStorage.setItem("workoutProgress", JSON.stringify(workoutProgress));
	}



	localStorage.setItem("workoutProgress", JSON.stringify(workoutProgress))

	window.location = "#workout-section"

} else {
	document.getElementById("main-phrase").innerHTML += `<span style="color: red;">Done</span>.`
	workoutSection.style.display = "none";
	workoutSection.innerHTML = `<h1 id="finish_phrase">Exercises <span style="color: red;">Done</span></h1>`;
}

function saveChanges(params) {
	if (workoutProgress[params] == "false") {
		workoutProgress[params] = "true";
		localStorage.setItem("workoutProgress", JSON.stringify(workoutProgress));
	} else if (workoutProgress[params] == "true") {
		workoutProgress[params] = "false";
		localStorage.setItem("workoutProgress", JSON.stringify(workoutProgress));
	}

	// Check if all values in workoutProgress are "true"
	if (workoutProgress.every(value => value === "true")) {
		// Execute your function here
		document.getElementById("finish-button").style.backgroundColor = "#ACF220";
	}
}

document.getElementById("finish-button").onclick = () => {
	if (workoutProgress.every(value => value === "true")) {
		window.location = "#dashboard";
		localStorage.setItem("isWorkoutDone", "Yes");
		isWorkoutDone = localStorage.getItem("isWorkoutDone");

	}
}
