
import { db } from "./firebase.js";
import {
    collection,
    addDoc,
    onSnapshot,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const profiliuPavadinimai = [
    "Žemas STEAM – žema įtrauktis",
    "Žemas STEAM – aukšta įtrauktis",
    "Aukštas STEAM – žema įtrauktis",
    "Aukštas STEAM – aukšta įtrauktis",
    "Švietimo sistemai"
];

const lentosTurinys = document.getElementById("idejuLentosTurinys");

const profiliuTinklelis = document.createElement("div");
profiliuTinklelis.className = "profiliuTinklelis";

profiliuPavadinimai.forEach((pavadinimas, indeksas) => {
    const zona = document.createElement("div");
    zona.className = indeksas === 4
        ? "profilioZona sistemosZona"
        : "profilioZona";

    const antraste = document.createElement("h3");
    antraste.textContent = pavadinimas;

    const korteliuVieta = document.createElement("div");
    korteliuVieta.className = "profilioIdejos";
    korteliuVieta.id = "profilioIdejos" + (indeksas + 1);

    zona.appendChild(antraste);
    zona.appendChild(korteliuVieta);

    profiliuTinklelis.appendChild(zona);
});

lentosTurinys.appendChild(profiliuTinklelis);

let pasirinktaDimensija = null;

const dimensijuInformacija = {
    ivairove: {
        pavadinimas: "Įvairovės vertinimas",
        spalva: "#E5F3EB"
    },
    remimas: {
        pavadinimas: "Visų besimokančiųjų rėmimas",
        spalva: "#E6F0FA"
    },
    bendradarbiavimas: {
        pavadinimas: "Bendradarbiavimas",
        spalva: "#FFF3D9"
    },
    tobulejimas: {
        pavadinimas: "Profesinis tobulėjimas",
        spalva: "#FBEAE8"
    }
};

// Dimensijos pasirinkimas
document.querySelectorAll(".veikDimensija").forEach(mygtukas => {
    mygtukas.addEventListener("click", () => {
        document.querySelectorAll(".veikDimensija").forEach(k => {
            k.classList.remove("pasirinkta");
        });

        mygtukas.classList.add("pasirinkta");
        pasirinktaDimensija = mygtukas.dataset.dimensija;
    });
});

// Pasiūlymo priklijavimas
document.getElementById("priklijuotiIdeja").addEventListener("click", async () => {
    const profilis = document.getElementById("veikProfilis").value;
    const pasiulymas = document.getElementById("veikPasiulymas").value.trim();

    if (!profilis || !pasirinktaDimensija || !pasiulymas) {
        alert("Pasirinkite profilį, dimensiją ir įrašykite pasiūlymą.");
        return;
    }

    const dimensija = dimensijuInformacija[pasirinktaDimensija];
    try {
    await addDoc(collection(db, "pasiulymai"), {
        profilis: profilis,
        dimensija: pasirinktaDimensija,
        tekstas: pasiulymas,
        sukurta: serverTimestamp()
    });
} catch (klaida) {
    console.error("Nepavyko išsaugoti pasiūlymo:", klaida);
    alert("Pasiūlymo išsaugoti nepavyko. Bandykite dar kartą.");
    return;
}
    document.getElementById("veikPasiulymas").value = "";
});
function rodytiPasiulyma(profilis, pasirinktaDimensija, pasiulymas) {
    const dimensija = dimensijuInformacija[pasirinktaDimensija];
    const kortele = document.createElement("div");
    kortele.className = "pasiulymoKortele";
    kortele.dataset.dimensija = pasirinktaDimensija;
    kortele.style.backgroundColor = dimensija.spalva;

    const sritiesPavadinimas = document.createElement("strong");
    sritiesPavadinimas.textContent = dimensija.pavadinimas;

    const tekstas = document.createElement("p");
    tekstas.textContent = pasiulymas;

    const profilioZyma = document.createElement("small");
    profilioZyma.textContent = profiliuPavadinimai[Number(profilis) - 1];

    kortele.appendChild(sritiesPavadinimas);
    kortele.appendChild(tekstas);
    kortele.appendChild(profilioZyma);

    document.getElementById("profilioIdejos" + profilis).appendChild(kortele);
}

/* Pasiūlymų lentos filtravimas */

const filtrasProfilis = document.getElementById("filtrasProfilis");
const filtrasDimensija = document.getElementById("filtrasDimensija");

function filtruotiPasiulymus() {
    const pasirinktasProfilis = filtrasProfilis.value;
    const pasirinktaSritis = filtrasDimensija.value;

    document.querySelectorAll(".profilioZona").forEach((zona, indeksas) => {
        const profilioNumeris = String(indeksas + 1);

        // Rodome pasirinktą profilį
        zona.style.display =
            pasirinktasProfilis === "visi" ||
            pasirinktasProfilis === profilioNumeris
                ? ""
                : "none";

        // Rodome pasirinktos dimensijos korteles
        zona.querySelectorAll(".pasiulymoKortele").forEach(kortele => {
            const atitinka =
                pasirinktaSritis === "visos" ||
                kortele.dataset.dimensija === pasirinktaSritis;

            kortele.style.display = atitinka ? "" : "none";
        });
    });
}

filtrasProfilis.addEventListener("change", filtruotiPasiulymus);
filtrasDimensija.addEventListener("change", filtruotiPasiulymus);

// Pasiūlymų rodymas realiuoju laiku
onSnapshot(collection(db, "pasiulymai"), (snapshot) => {
    // Išvalome senas korteles
    document.querySelectorAll(".profilioIdejos").forEach(lenta => {
        lenta.innerHTML = "";
    });

    // Parodome visus duomenų bazėje esančius pasiūlymus
    snapshot.forEach((dokumentas) => {
        const duomenys = dokumentas.data();

        rodytiPasiulyma(
            duomenys.profilis,
            duomenys.dimensija,
            duomenys.tekstas
        );
    });

    // Pritaikome pasirinktus filtrus
    filtruotiPasiulymus();
});