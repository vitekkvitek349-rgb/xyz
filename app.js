const exerciseBanks = {
  gym: {
    upper: ["Bench press", "Přítahy horní kladky", "Tlaky nad hlavu s jednoručkami", "Veslování na kladce", "Bicepsový zdvih", "Tricepsové stlačování kladky"],
    lower: ["Dřep s činkou", "Rumunský mrtvý tah", "Leg press", "Zakopávání", "Výpony lýtek", "Plank"],
    full: ["Goblet dřep", "Bench press", "Přítahy horní kladky", "Rumunský mrtvý tah", "Tlaky s jednoručkami", "Plank"]
  },
  basic: {
    upper: ["Tlaky s jednoručkami na lavičce", "Přítahy jednoručky v předklonu", "Tlaky nad hlavu", "Rozpažování v předklonu", "Bicepsový zdvih", "Francouzský tlak"],
    lower: ["Goblet dřep", "Rumunský mrtvý tah s jednoručkami", "Bulharský dřep", "Glute bridge", "Výpony lýtek", "Dead bug"],
    full: ["Goblet dřep", "Tlaky s jednoručkami na lavičce", "Přítahy jednoručky", "Rumunský mrtvý tah", "Tlaky nad hlavu", "Plank"]
  },
  bodyweight: {
    upper: ["Kliky", "Přítahy pod stolem / na hrazdě", "Pike kliky", "Diamantové kliky", "Superman", "Hollow hold"],
    lower: ["Dřepy", "Výpady vzad", "Jednonožní glute bridge", "Bulharský dřep", "Výpony lýtek", "Plank"],
    full: ["Dřepy", "Kliky", "Výpady vzad", "Přítahy pod stolem / na hrazdě", "Glute bridge", "Plank"]
  }
};

const labels = { strength: "sílu", muscle: "svaly", fitness: "kondici a spalování", beginner: "začátečník", intermediate: "pokročilý" };

function prescription(goal, level, duration) {
  if (goal === "strength") return { main: level === "beginner" ? "3 × 5–8" : "4 × 4–6", accessory: "3 × 8–10" };
  if (goal === "fitness") return { main: duration === "short" ? "3 × 10–12" : "3 × 12–15", accessory: "2–3 × 12–15" };
  return { main: level === "beginner" ? "3 × 8–12" : "4 × 6–12", accessory: "3 × 10–15" };
}

function makeWorkout(title, exercises, settings) {
  const reps = prescription(settings.goal, settings.level, settings.duration);
  const amount = settings.duration === "short" ? 4 : settings.duration === "long" ? 6 : 5;
  return { title, exercises: exercises.slice(0, amount).map((name, index) => ({ name, sets: index < 2 ? reps.main : reps.accessory })) };
}

function generateWorkouts(settings) {
  const bank = exerciseBanks[settings.equipment];
  const days = Number(settings.days);
  if (days === 2) return [makeWorkout("Trénink A – celé tělo", bank.full, settings), makeWorkout("Trénink B – celé tělo", [...bank.lower, ...bank.upper], settings)];
  if (days === 3) return [makeWorkout("Pondělí – celé tělo", bank.full, settings), makeWorkout("Středa – horní část", bank.upper, settings), makeWorkout("Pátek – spodní část", bank.lower, settings)];
  return [makeWorkout("Den 1 – horní část", bank.upper, settings), makeWorkout("Den 2 – spodní část", bank.lower, settings), makeWorkout("Den 3 – horní část", [...bank.upper.slice(2), ...bank.upper.slice(0, 2)], settings), makeWorkout("Den 4 – spodní část", [...bank.lower.slice(2), ...bank.lower.slice(0, 2)], settings)];
}

function renderPlan(settings) {
  const workouts = generateWorkouts(settings);
  const result = document.querySelector("#result");
  result.innerHTML = `
    <p class="result-kicker">TVŮJ TÝDENNÍ PLÁN</p>
    <h2>${settings.days} tréninky pro ${labels[settings.goal]}</h2>
    <p class="plan-summary">${labels[settings.level][0].toUpperCase() + labels[settings.level].slice(1)} · ${settings.duration === "short" ? "rychlý" : settings.duration === "long" ? "delší" : "vyvážený"} trénink · ${document.querySelector("#equipment").selectedOptions[0].text}</p>
    <div class="workout-list">${workouts.map(workout => `
      <article class="workout">
        <h3>${workout.title}</h3>
        <ul>${workout.exercises.map(exercise => `<li><span>${exercise.name}</span><span>${exercise.sets}</span></li>`).join("")}</ul>
      </article>`).join("")}
    </div>
    <p class="tip"><strong>Tip:</strong> Nech si 1–3 opakování v rezervě. Až zvládneš horní hranici opakování ve všech sériích čistou technikou, příště lehce přidej zátěž nebo opakování.</p>`;
}

document.querySelector("#plan-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  renderPlan(Object.fromEntries(form.entries()));
});
