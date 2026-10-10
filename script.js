const profilis = document.getElementById("profilis");
const dimensijos = document.getElementById("dimensijos");

profilis.addEventListener("change", function() {
    dimensijos.hidden = profilis.value === "";
});
lucide.createIcons();
// Šoninės navigacijos dimensijos
const navigacijosDimensijos = [
    { pavadinimas: "Įvairovės vertinimas", ikona: "users", spalva: "#399C63" },
    { pavadinimas: "Visų besimokančiųjų rėmimas", ikona: "hand-heart", spalva: "#377FC3" },
    { pavadinimas: "Bendradarbiavimas", ikona: "handshake", spalva: "#D2A027" },
    { pavadinimas: "Profesinis tobulėjimas", ikona: "graduation-cap", spalva: "#CC6760" }
];

const sonineNavigacija = document.getElementById("sonineNavigacija");

// Sukuriame keturis mygtukus
navigacijosDimensijos.forEach(function(dimensija, indeksas) {
    const mygtukas = document.createElement("button");

    mygtukas.type = "button";
    mygtukas.className = "soninisMygtukas";
    mygtukas.dataset.dimensija = indeksas;
    mygtukas.style.setProperty("--dimensijos-spalva", dimensija.spalva);

    mygtukas.innerHTML = `
        <i data-lucide="${dimensija.ikona}"></i>
        <span>${dimensija.pavadinimas}</span>
    `;

    sonineNavigacija.appendChild(mygtukas);
});

// Paverčiame ikonų žymėjimą piktogramomis
lucide.createIcons();
// Išplėsto vaizdo elementai
const isplestasVaizdas = document.getElementById("isplestasVaizdas");
const uzdarytiVaizda = document.getElementById("uzdarytiVaizda");
const pasirinktasProfilis = document.getElementById("pasirinktasProfilis");
const dimensijosPavadinimas = document.getElementById("dimensijosPavadinimas");

// Atidarome pasirinktą dimensiją
function atidarytiDimensija(indeksas) {
    const dimensija = navigacijosDimensijos[indeksas];
    // Pakeičiame didžiosios kortelės spalvą
document.querySelector(".dimensijosTurinys").style.borderTopColor =
    dimensija.spalva;

    pasirinktasProfilis.textContent =
        profilis.options[profilis.selectedIndex].text;

    dimensijosPavadinimas.textContent = dimensija.pavadinimas;
    // Parodome pirmojo profilio pirmosios dimensijos turinį
const tyrimoIzvalga = document.getElementById("tyrimoIzvalga");
const mokytojoCitata = document.getElementById("mokytojoCitata");

const garsoIrasas = document.getElementById("garsoIrasas");
const garsoGrotuvas = garsoIrasas.querySelector("audio");
const garsoSaltinis = garsoGrotuvas.querySelector("source");

const profiliuDuomenys = {
    "1": pirmoProfilioDuomenys,
    "2": antroProfilioDuomenys,
    "3": trecioProfilioDuomenys,
    "4": ketvirtoProfilioDuomenys
};

const pasirinktoProfilioDuomenys = profiliuDuomenys[profilis.value];

if (pasirinktoProfilioDuomenys && pasirinktoProfilioDuomenys[indeksas]) {
    const duomenys = pasirinktoProfilioDuomenys[indeksas];

    tyrimoIzvalga.textContent = duomenys.izvalga;
    mokytojoCitata.textContent = duomenys.citata;

    garsoGrotuvas.pause();
    garsoSaltinis.src = duomenys.garsas;
    garsoGrotuvas.load();

    garsoIrasas.hidden = false;
} else {
    tyrimoIzvalga.textContent = "";
    mokytojoCitata.textContent = "";

    garsoGrotuvas.pause();
    garsoIrasas.hidden = true;
}

    // Paslepiame pradines keturias korteles
    dimensijos.hidden = true;

    // Parodome išplėstą vaizdą
    isplestasVaizdas.hidden = false;

    // Pažymime aktyvią šoninę kortelę
    document.querySelectorAll(".soninisMygtukas").forEach(function(mygtukas) {
        mygtukas.classList.toggle(
            "aktyvus",
            Number(mygtukas.dataset.dimensija) === indeksas
        );
    });
}

// Pagrindinių keturių kortelių paspaudimai
document.querySelectorAll("#dimensijos > button").forEach(function(mygtukas, indeksas) {
    mygtukas.addEventListener("click", function() {
        atidarytiDimensija(indeksas);
    });
});

// Šoninių kortelių paspaudimai
document.querySelectorAll(".soninisMygtukas").forEach(function(mygtukas) {
    mygtukas.addEventListener("click", function() {
        atidarytiDimensija(Number(mygtukas.dataset.dimensija));
    });
});

// X mygtukas grąžina į keturių kortelių pasirinkimą
uzdarytiVaizda.addEventListener("click", function() {
    isplestasVaizdas.hidden = true;
    dimensijos.hidden = false;
});
// Pirmasis profilis: Žemas STEAM – žema įtrauktis
const pirmoProfilioDuomenys = [
    {
        izvalga: "Mokinių įvairovę suvokia kaip kliūtį. Veiklas individualizuoja tik iškilus sunkumams, nenuosekliai, todėl pamokos eiga išlieka nepastovi.",
        citata: "„planuoji vieną dalyką, o pamatai, kad daliai vaikų per sudėtinga, tada tenka vietoj koreguoti.“ (M6)",
        garsas: "1profilisįvair.m4a"
    },
    {
        izvalga: "Mokytojas taiko paprastas diferencijavimo strategijas, o ugdymo veiklas pritaiko pagal situaciją, reaguodamas į mokinių poreikius.",
        citata: "„Instrukcijas stengiuosi pateikti keliais būdais – pasakau žodžiu, parodau pavyzdį, kartais užrašau trumpai ant lentos ar pateikiu skaidrėj“ (M6)",
        garsas: "1profilremimas.m4a"
    },
        // 3. Bendradarbiavimas
    {
        izvalga: "Mokytojas bendradarbiauja nenuosekliai, susiduria su ribota specialistų pagalba ir administracinėmis kliūtimis, todėl dažniau dirba savarankiškai.",
        citata: "„Šiaip, tokio bendradarbiavimo daug, kaip nėra. Ne tai, kad jie nepadeda, bet tiesiog jie dirba kaip ir savo darbus“ (M1)",
               garsas: "1profilisbendradarb.m4a"
    },

    // 4. Profesinis tobulėjimas
    {
        izvalga: "Mokytojas savo pasirengimą vertina kaip nepakankamą. Jaučia praktinės patirties, metodinių žinių ir laiko trūkumą.",
        citata: "„Norėčiau turėt galimybę stebėti kitų mokytojų pamokas ar dirbti kartu, matyti, kaip jie sprendžia panašias situacijas“ (M6)",
        garsas: "1profiltobulejimas.m4a"
    }
];
lucide.createIcons();
// Antrasis profilis: Žemas STEAM – aukšta įtrauktis
const antroProfilioDuomenys = [
    // 1. Įvairovės vertinimas
    {
        izvalga: "Mokytojas įvairovę suvokia plačiai ir taiko vieną pamokos tikslą, jį pateikdamas skirtingais būdais, sudėtingesnių veiklų įgyvendinimas išlieka iššūkiu.",
        citata: "„veikla būna viena visiems <…> rezultatų norime panašių, kad visi pasiektų tą patį tikslą. Skirtumas yra ne veikloje, o tame, kaip ji pateikiama.“ (M4)",
                garsas: "2profilįvairov.m4a"
    },

    // 2. Visų besimokančiųjų rėmimas
    {
        izvalga: "Mokytojas nuosekliai struktūruoja ir individualizuoja veiklas, atsižvelgdamas į mokinių poreikius, tačiau rečiau taiko inovatyvius STEAM metodus.",
        citata: "„labai aiškiai struktūruojam veiklą – sakom: „pirmas žingsnis – šitas, antras – šitas“ (M4)",
               garsas: "2profilremimas.m4a"
    },

    // 3. Bendradarbiavimas
    {
        izvalga: "Mokytojas lanksčiai bendradarbiauja su kolegomis ir administracija, tačiau bendradarbiavimas nėra sistemingai organizuojamas.",
        citata: "„Su kitais mokytojais bendradarbiaujame pagal poreikį – priklauso, kokią veiklą sugalvojame ir ko jai reikia.“ (M4)",
                garsas: "2profbendradarb.m4a"
    },

    // 4. Profesinis tobulėjimas
    {
        izvalga: "Mokytojas aktyviai mokosi savarankiškai, ieško idėjų ir dalijasi patirtimi, tačiau STEAM kompetencijų tobulinimas išlieka nenuoseklus.",
        citata: "“Tikrai tobulėju <…> Mokymai, seminarai <…> mokytojai tikrai negaili – nei pasidalyti, nei parodyti. <…>. Facebook grupės, bendruomenės – viskas yra“ (M4)",
        garsas: "2proftobulej.m4a"
    }
];
// Trečiasis profilis: Aukštas STEAM – žema įtrauktis
const trecioProfilioDuomenys = [
    // 1. Įvairovės vertinimas
    {
        izvalga: "Mokytojas įvairovę sieja su specialiaisiais poreikiais, organizuoja grupines ir komandines veiklas bei padeda įveikti bendravimo sunkumus.",
        citata: "„Labai individualiai, nuo sutrikimo priklauso“ (M3)",
                garsas: "3profivair.m4a"
    },

    // 2. Visų besimokančiųjų rėmimas
    {
        izvalga: "Mokytojas struktūruoja komandinį darbą, paskirstydamas mokiniams vaidmenis, tačiau veiklų pritaikymą mažiau sieja su specialiųjų ugdymosi poreikių turinčių mokinių poreikiais.",
        citata: "„yra koordinatorius, <…> informacijos ieškotojas, <…> žmogus, orientuotas į veiksmą <…> užbaigėjas, apibendrintojas <…> vaidmenims yra atskiri vertinimo kriterijai“ (M3)",
                garsas: "3profremim.m4a"
    },

    // 3. Bendradarbiavimas
    {
        izvalga: "Mokytojas susiduria su bendradarbiavimo sunkumais dėl nepakankamo administracijos palaikymo, riboto kolegų įsitraukimo ir individualaus darbo dominavimo.",
        citata: "“nėra <…> realaus palaikymo iš administracijos. <…> Administracija nenori jungti pamokų.” (M3)",
                garsas: "3prof. bendradarb.m4a"
    },

    // 4. Profesinis tobulėjimas
    {
        izvalga: "Mokytojas kompetencijas tobulina savarankiškai, tačiau jaučia metodinių žinių, praktinio pasirengimo ir sistemingos profesinės pagalbos trūkumą.",
        citata: "„norėtųsi, kad daugiau mokytojų dalintųsi savo realia patirtimi. Ne tik apie tai, kaip vaikas „išsėdi“ pamoką <...>, bet apie tai, kaip jis realiai įsitraukia <....>.“ (M3)",
        garsas: "3prfilprofesinis.m4a"
    }
];
// Ketvirtasis profilis: Aukštas STEAM – aukšta įtrauktis
const ketvirtoProfilioDuomenys = [
    // 1. Įvairovės vertinimas
    {
        izvalga: "Mokytojas įvairovę suvokia kaip natūralų reiškinį ir diferencijuoja bei struktūruoja veiklas, siekdamas balanso tarp sudėtingumo ir pasiekiamumo.",
        citata: "„vienoje užduotyje pateikiamos trijų lygių mokiniams skirtos užduotys, ir mokiniai gali pasirinkti, kurią nori daryti.“ (M2)",
                garsas: "4profivair.m4a"
    },

    // 2. Visų besimokančiųjų rėmimas
    {
        izvalga: "Mokytojas diferencijuoja ir vizualizuoja užduotis, skatina mokinių bendradarbiavimą bei pritaiko veiklų sudėtingumą pagal mokinių poreikius ir klasės dydį.",
        citata: "„<...> ten, kur yra daugiau specialiųjų ugdymosi poreikių mokinių <...> tai aš tą pačią informaciją pateikiu lakoniškiau“ (M2)",
                garsas: "4profremim.m4a"
    },

    // 3. Bendradarbiavimas
    {
        izvalga: "Mokytojas aktyviai bendradarbiauja su kolegomis ir specialistais, jaučia administracijos palaikymą, tačiau susiduria su žmogiškųjų išteklių trūkumu.",
        citata: "„<....> visada jaučiu administracijos palaikymą. <...> Man atrodo, kad vienas iš pagrindinių iššūkių įtraukties srityje yra būtent mokytojai.“ (M2)",
               garsas: "4profbendr.m4a"
    },

    // 4. Profesinis tobulėjimas
    {
        izvalga: "Mokytojas pasižymi stipriu formaliu pasirengimu, tačiau pasigenda praktinių profesinio tobulėjimo galimybių, ypač kolegų pamokų stebėjimo ir dalijimosi patirtimi.",
        citata: "„Ne bendrų kursų apie STEAM ar įtrauktį, <...> kad galėtum pamatyti, kaip kiti sprendžia panašias problemas, o ne tik išgirsti, kaip „turėtų būti““ (M5)",
        garsas: "4profprofesin.m4a"
    }
];