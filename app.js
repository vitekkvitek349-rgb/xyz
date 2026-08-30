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

const exerciseDetails = {
  "Bench press": { summary: "Základní tlakový cvik na prsa, tricepsy a přední ramena.", steps: ["Lehni si tak, aby byly oči zhruba pod osou činky; chodidla pevně opři o zem.", "Stáhni lopatky k sobě a dolů, činku spouštěj kontrolovaně k dolní části hrudníku.", "Vytlač ji vzhůru plynule nad ramena; lokty nezamykej násilím."], cues: ["Zápěstí drž rovně nad lokty.", "Hýždě a ramena zůstávají na lavičce.", "Začni lehkou vahou nebo s dopomocí." ] },
  "Přítahy horní kladky": { summary: "Tahový cvik pro široký sval zádový a paže.", steps: ["Sedni si, stehna zajisti pod opěrkami a hrudník lehce zvedni.", "Uchop tyč o něco šíře než ramena.", "Táhni tyč k horní části hrudníku a lokty veď dolů k bokům."], cues: ["Nezakláněj se výrazně dozadu.", "Netahej tyč za hlavu.", "Nejdřív stáhni lopatky, potom zapoj lokty." ] },
  "Tlaky nad hlavu s jednoručkami": { summary: "Tlak nad hlavu pro ramena a tricepsy.", steps: ["Sedni si s oporou zad nebo stůj pevně s napnutým středem těla.", "Činky drž u ramen, dlaně zhruba vpřed.", "Tlač je vzhůru, dokud nejsou nad rameny, a pomalu vrať."], cues: ["Neprohýbej bedra; zatni břicho a hýždě.", "Netlač ramena k uším.", "Pohyb prováděj bez švihu." ] },
  "Veslování na kladce": { summary: "Tah na střed zad, lopatky a biceps.", steps: ["Sedni vzpřímeně, nohy opři o platformu a uchop madlo.", "Nejprve lehce stáhni lopatky dozadu.", "Přitáhni madlo k pupku a pak kontrolovaně propni paže."], cues: ["Nehoupej se trupem dopředu a dozadu.", "Lokty veď podél těla.", "V konci pohybu nemačkej ramena k uším." ] },
  "Bicepsový zdvih": { summary: "Izolovaný cvik pro přední stranu paže.", steps: ["Stůj rovně a činky drž podél těla dlaněmi vpřed.", "Zvedej činky ohybem v lokti.", "Pomalým pohybem je vrať, dokud nejsou paže téměř propnuté."], cues: ["Lokty nech u boků.", "Nevyhýbej se dozadu a nešvihej tělem.", "Kontroluj hlavně spouštění činky." ] },
  "Tricepsové stlačování kladky": { summary: "Izolovaný cvik pro zadní stranu paže.", steps: ["Postav se čelem ke kladce a lokty si zafixuj u boků.", "Stlač madlo dolů propnutím loktů.", "Vrať madlo jen tak vysoko, aby lokty zůstaly na místě."], cues: ["Nehýbej rameny ani trupem.", "Zápěstí drž pevně v prodloužení předloktí.", "Nepoužívej zbytečně velkou váhu." ] },
  "Dřep s činkou": { summary: "Komplexní cvik pro stehna, hýždě a střed těla.", steps: ["Činku polož bezpečně na horní část zad, chodidla dej zhruba na šířku ramen.", "Nadechni se do břicha, pošli boky a kolena dolů.", "Vstaň tlakem celého chodidla do země."], cues: ["Kolena směřují přibližně ve směru špiček.", "Záda drž neutrální, nehrb se.", "Pokud techniku neznáš, začni s trenérem nebo goblet dřepem." ] },
  "Rumunský mrtvý tah": { summary: "Předklonový tah pro zadní stehna a hýždě.", steps: ["Stůj s činkou u stehen, kolena mírně pokrč.", "Posouvej boky dozadu a činku veď těsně podél nohou.", "Jakmile ucítíš výrazné protažení zadních stehen, zatlač boky vpřed."], cues: ["Záda zůstávají rovná po celou dobu.", "Nejde o hluboký dřep; pohyb vychází z kyčlí.", "Činku nepouštěj daleko od těla." ] },
  "Leg press": { summary: "Tlak nohama na stroji pro stehna a hýždě.", steps: ["Nastav sedadlo a opři záda i pánev o opěrku.", "Chodidla dej zhruba na šířku ramen doprostřed platformy.", "Spouštěj plošinu, dokud zůstávají záda přilepená, a vytlač ji zpět."], cues: ["Kolena nezamykej v horní pozici.", "Nenech pánev podsadit a odlepit od opěrky.", "Kolena veď ve směru špiček." ] },
  "Zakopávání": { summary: "Cvik na zadní stranu stehen na stroji.", steps: ["Nastav válec těsně nad paty a osu kolen podle kloubu stroje.", "Přitáhni paty směrem k hýždím.", "Pomalým pohybem vrať nohy zpět."], cues: ["Pánev nech pevně opřenou.", "Nešvihej nohama.", "V horní pozici krátce zatni zadní stehna." ] },
  "Výpony lýtek": { summary: "Cvik pro lýtkové svaly.", steps: ["Postav se na hranu stupínku nebo stroje přední částí chodidel.", "Spusť paty níže s kontrolou.", "Vytlač se co nejvýš na špičky a krátce zatni lýtka."], cues: ["Neskákej a nezkracuj rozsah.", "Drž rovnováhu, neopírej se vahou do rukou.", "Prováděj pomaleji než ostatní cviky." ] },
  "Plank": { summary: "Statický cvik pro břicho, záda a stabilitu středu těla.", steps: ["Opři se o předloktí a špičky nohou.", "Vytvoř rovnou linii od hlavy po paty.", "Vydrž a klidně dýchej."], cues: ["Nenech propadnout bedra ani zvednout boky.", "Zatni břicho a hýždě.", "Dívej se do země, krk drž dlouhý." ] },
  "Goblet dřep": { summary: "Přístupný dřep s jednoručkou nebo kettlebellem před hrudníkem.", steps: ["Závaží drž oběma rukama u hrudníku.", "Klesej mezi kolena do pohodlné hloubky.", "Vrať se nahoru tlakem přes celé chodidlo."], cues: ["Hrudník drž otevřený, ale neprohýbej bedra.", "Kolena směřují za špičkami.", "Lokty mohou jemně mířit mezi kolena." ] },
  "Tlaky s jednoručkami na lavičce": { summary: "Tlak pro prsa a tricepsy s větší volností pohybu než osa.", steps: ["Lehni si, lopatky stáhni dolů a činky drž nad hrudníkem.", "Spouštěj je po stranách hrudníku s lokty mírně pod činkami.", "Vytlač činky zpět nahoru kontrolovaně."], cues: ["Nenech činky padat příliš nízko, pokud tahají ramena.", "Zápěstí drž rovně.", "Narážej činkami nahoře jen lehce nebo vůbec." ] },
  "Přítahy jednoručky v předklonu": { summary: "Jednoruční veslování pro záda a lopatky.", steps: ["Opři se jednou rukou a kolenem o lavičku, druhou nohu dej pevně na zem.", "Nech činku viset pod ramenem.", "Táhni loket směrem k boku a činku k oblasti kyčle."], cues: ["Neotáčej trup vzhůru.", "Rameno nenech v horní pozici vyjet k uchu.", "Drž rovná záda a stabilní břicho." ] },
  "Tlaky nad hlavu": { summary: "Tlakový cvik s jednoručkami pro ramena.", steps: ["Začni s činkami u ramen a pevným středem těla.", "Tlač je vzhůru nad ramena.", "S kontrolou se vrať do výchozí pozice."], cues: ["Neprohýbej se v bedrech.", "Pohyb vedeš rameny a pažemi, ne švihem nohou.", "Ramena drž dole od uší." ] },
  "Rozpažování v předklonu": { summary: "Lehčí izolovaný cvik pro zadní část ramen a lopatky.", steps: ["Předkloň se s rovnými zády a lehce pokrčenými koleny.", "S mírně pokrčenými lokty roztahuj paže do stran.", "Pomalu vrať činky pod ramena."], cues: ["Použij opravdu lehké činky.", "Nešvihej trupem.", "Mysli na pohyb loktů do stran, ne na ruce." ] },
  "Francouzský tlak": { summary: "Cvik pro triceps prováděný vleže nebo vsedě.", steps: ["Drž jednoručku či činky nad hlavou s lokty směřujícími vpřed.", "Ohýbej lokty a spouštěj zátěž za hlavu nebo k čelu podle varianty.", "Propnutím loktů vrať zátěž zpět."], cues: ["Lokty zbytečně nerozevírej do stran.", "Začni velmi lehkou vahou kvůli loktům.", "Hýbej hlavně předloktím, ne rameny." ] },
  "Rumunský mrtvý tah s jednoručkami": { summary: "Varianta rumunského tahu s jednoručkami pro zadní stehna a hýždě.", steps: ["Činky drž před stehny a kolena lehce pokrč.", "Posouvej boky dozadu, činky veď podél nohou.", "Zatlač boky vpřed a vrať se do stoje."], cues: ["Záda drž v neutrální poloze.", "Váhu nech na celých chodidlech.", "Zastav, když už nedokážeš držet rovná záda." ] },
  "Bulharský dřep": { summary: "Jednonožní dřep se zadní nohou na lavičce pro stehna a hýždě.", steps: ["Postav se asi krok před lavičku a nárt zadní nohy polož na lavičku.", "Klesej dolů hlavně přední nohou.", "Přes patu přední nohy se vrať nahoru."], cues: ["Začni bez zátěže, cvik je náročný na stabilitu.", "Přední koleno veď ve směru špičky.", "Netlač se od zadní nohy." ] },
  "Glute bridge": { summary: "Most pro hýžďové svaly.", steps: ["Lehni si na záda, pokrč nohy a chodidla dej na zem.", "Zatni hýždě a zvedni pánev, dokud jsou ramena, boky a kolena v linii.", "Pánev kontrolovaně spusť."], cues: ["Neprohýbej se v bedrech.", "Tlak veď přes celé chodidlo, zejména paty.", "V horní pozici zatni hýždě, ne bedra." ] },
  "Dead bug": { summary: "Stabilizační cvik pro hluboké břišní svaly.", steps: ["Lehni si na záda, ruce zvedni nad ramena a nohy pokrč do pravého úhlu.", "Pomalu spouštěj opačnou ruku a nohu směrem k zemi.", "Vrať se a vystřídej strany."], cues: ["Bedra drž jemně přitisknutá k podložce.", "Zpomal, když se bedra odlepují.", "Dýchej plynule." ] },
  "Kliky": { summary: "Základní tlak s vlastní vahou pro prsa, ramena a tricepsy.", steps: ["Dej dlaně pod nebo mírně před ramena a vytvoř pevné prkno.", "Spusť hrudník mezi ruce.", "Odtlač se zpět do výchozí pozice."], cues: ["Tělo zůstává rovné, boky nepropadají.", "Lokty míří šikmo dozadu, ne kolmo do stran.", "Pro lehčí variantu dej ruce na vyvýšenou oporu." ] },
  "Přítahy pod stolem / na hrazdě": { summary: "Tah s vlastní vahou pro záda; vyber bezpečnou a pevnou oporu.", steps: ["Pod pevnou hrazdou nebo stabilním stolem se chyť madla nadhmatem.", "Drž tělo zpevněné a táhni hrudník směrem k opoře.", "Pomalu se vrať do téměř propnutých paží."], cues: ["Nezkoušej nestabilní nábytek.", "Netlač ramena k uším.", "Čím vodorovnější tělo, tím je cvik těžší." ] },
  "Pike kliky": { summary: "Varianta kliků, která více zatěžuje ramena.", steps: ["Z pozice na rukou a nohou zvedni boky do tvaru obráceného V.", "Pokrčením loktů spouštěj temeno hlavy směrem k zemi před ruce.", "Odtlač se zpět nahoru."], cues: ["Začni s menším úhlem a krátkým rozsahem.", "Hlídej ruce, ať jsou pevně na zemi.", "Pokud bolí ramena, cvik vynech." ] },
  "Diamantové kliky": { summary: "Užší kliky s větším důrazem na tricepsy.", steps: ["Dlaně dej blíž k sobě pod hrudník.", "Spusť se dolů s lokty podél těla.", "Odtlač se zpět do pevného prkna."], cues: ["Je to těžší varianta; klidně začni z kolen nebo na vyvýšení.", "Nenech ramena padat dopředu.", "Zachovej zpevněné břicho." ] },
  "Superman": { summary: "Lehčí cvik na vzpřimovače zad a hýždě.", steps: ["Lehni si na břicho s pažemi před sebou.", "Lehce zvedni ruce a nohy nad zem.", "Chvíli vydrž a s kontrolou polož zpět."], cues: ["Nezakláněj prudce hlavu.", "Zvedej se jen do pohodlného rozsahu.", "Při bolesti beder cvik přeruš." ] },
  "Hollow hold": { summary: "Statický cvik na břicho a kontrolu pánve.", steps: ["Lehni si na záda a přitiskni bedra k podložce.", "Zvedni lopatky a nohy několik centimetrů nad zem.", "Vydrž v této pozici a klidně dýchej."], cues: ["Bedra se nesmí odlepit.", "Pro lehčí variantu pokrč nohy nebo nech ruce podél těla.", "Nedrž dech." ] },
  "Dřepy": { summary: "Dřep s vlastní vahou pro nohy a hýždě.", steps: ["Stůj na šířku ramen, špičky mírně ven.", "Klesej boky dolů a dozadu.", "Vrať se do stoje tlakem přes celé chodidlo."], cues: ["Kolena jdou ve směru špiček.", "Paty zůstávají na zemi.", "Drž neutrální záda a pohodlný rozsah." ] },
  "Výpady vzad": { summary: "Jednonožní cvik pro nohy a hýždě s dobrou kontrolou kolene.", steps: ["Udělej krok jednou nohou dozadu a klesej dolů.", "Obě kolena pokrč přibližně do pravého úhlu.", "Přes přední chodidlo se vrať do stoje."], cues: ["Trup drž vzpřímeně.", "Přední koleno veď ve směru špičky.", "Začni menším krokem a bez zátěže." ] },
  "Jednonožní glute bridge": { summary: "Těžší most pro jednu stranu hýždí.", steps: ["Lehni si jako pro glute bridge a jednu nohu zvedni.", "Tlakem přes patu opěrné nohy zvedni pánev.", "Pomalu se vrať dolů a vystřídej stranu."], cues: ["Pánev nenech rotovat do strany.", "Neprohýbej bedra.", "Pokud je varianta těžká, vrať se k mostu na obou nohách." ] }
};

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
        <ul>${workout.exercises.map(exercise => `<li><button class="exercise-button" type="button" data-exercise="${exercise.name}"><span>${exercise.name}<span class="help-mark" aria-hidden="true">?</span></span><span>${exercise.sets}</span></button></li>`).join("")}</ul>
      </article>`).join("")}
    </div>
    <p class="tip"><strong>Tip:</strong> Nech si 1–3 opakování v rezervě. Až zvládneš horní hranici opakování ve všech sériích čistou technikou, příště lehce přidej zátěž nebo opakování.</p>`;
}

document.querySelector("#plan-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  renderPlan(Object.fromEntries(form.entries()));
});

const dialog = document.querySelector("#exercise-dialog");
const detailTitle = document.querySelector("#dialog-title");
const detailSummary = document.querySelector("#dialog-summary");
const detailSteps = document.querySelector("#dialog-steps");
const detailCues = document.querySelector("#dialog-cues");
const detailVideo = document.querySelector("#dialog-video");

function showExerciseDetail(name) {
  const detail = exerciseDetails[name];
  if (!detail) return;
  detailTitle.textContent = name;
  detailSummary.textContent = detail.summary;
  detailSteps.innerHTML = detail.steps.map(step => `<li>${step}</li>`).join("");
  detailCues.innerHTML = detail.cues.map(cue => `<li>${cue}</li>`).join("");
  detailVideo.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} správná technika`)}`;
  dialog.showModal();
}

document.querySelector("#result").addEventListener("click", event => {
  const button = event.target.closest("[data-exercise]");
  if (button) showExerciseDetail(button.dataset.exercise);
});

document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
