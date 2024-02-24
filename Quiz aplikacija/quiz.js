//KVIZ JAVA SCRIPT

//KVIZ DATA: Niz objekata iz kojih cemo povlaciti podatke
const quizData = [
  {
    question:
      "Koja je zaštićena azijska zvijer, latinskog naziva Panthera uncia, nacionalni simbol Afganistana i Kirgistana te je često zvana i “duhom Himalaje”?",
    a: "Bengalski tigar",
    b: "Snježni leopard",
    c: "Crna Pantera",
    d: "Karakal",
    correct: "b",
  },
  {
    question:
      "Ako znamo da je ovaj roman, uz Životinjsku farmu, najpoznatije djelo njegova tvorca, i ako se u njemu pojavljuju Winston Smith, Emmanuel Goldstein, te sve kontrolira Veliki Brat, o kojem je književnom klasiku riječ?",
    a: "1984",
    b: "2055",
    c: "1001",
    d: "1945",
    correct: "a",
  },
  {
    question:
      "U Louvru se nalazi kip Miloske Venere. Koji dio tijela joj nedostaje?",
    a: "Ruke",
    b: "Noge",
    c: "Glava",
    d: "Trup",
    correct: "a",
  },
  {
    question:
      "Mali princ je remekdjelo svjetske književnosti. U njemu se pojavljuje niz životinja. Jedna od njih moli Malog princa da ju pripitomi kako bi bili prijatelji i potrebni jedno drugom. O kojoj je to životinji riječ u ovom pitanju?",
    a: "Roda",
    b: "Lisica",
    c: "Zec",
    d: "Kornjaca",
    correct: "b",
  },
  {
    question:
      "Matija u Matija Gubec je samo nadimak. Navedite pravo ime vođe Seljačke bune, Matije Gubca.",
    a: "Ambroz",
    b: "Ilija",
    c: "Ivan",
    d: "Nikola",
    correct: "a",
  },
  {
    question:
      "Autor knjige “Kraj povijesti i posljednji čovjek”, u njoj je, gledajući poraze komunističkih sustava sa početka devedesetih, proglasio kraj povijesti i pobjedu liberalne demokracije. Kako se zove ovaj američki politički filozof japanskoga podrijetla?",
    a: "Henry Kissinger",
    b: "Samuel P. Huntington",
    c: "Francis Fukuyama",
    d: "Russell Kirk",
    correct: "c",
  },
  {
    question:
      "Kako se zove tehnologija koja se koristi za povecavanje ucinkovitosti i brzine web stranice. Da pitanje malo olaksamo. Znamo da tu tehnologiju koristi JavaScript, ali i da je pod tim imenom jedan klub davnih 70-ih osvojio Ligu prvaka tri godine za redom. O kojoj se tocno tehnologiji ili klubu radi?",
    a: "Benfica",
    b: "Ajax",
    c: "Inter",
    d: "Milan",
    correct: "b",
  },
  {
    question:
      "Za Messija mnogi kažu da izluđuje protivnike na terenu. Iz toga dolazi i jedan od njegovih životopisnijih nadimaka kojeg je dobio po stvoru iz životinjskog svijeta. Kojem?",
    a: "Komarac",
    b: "Buha",
    c: "Mrav",
    d: "Cvrcak",
    correct: "b",
  },
  {
    question:
      "Jedan od najpoznatijih poglavica svih vremena, na jeziku svog plemena zvao se Tatanka Iyotanka. Kako se on zove ako njegovo ime prevedemo na hrvatski?",
    a: "Geronimo",
    b: "Tupi noz",
    c: "Ludi konj",
    d: "Bik koji sjedi",
    correct: "d",
  },
  {
    question:
      "Pomiluje vlat trave, nježno, lijevim pa desnim obrazom: nikada se više nećemo… I tebe će zgaziti. A mravu reče – pod zemlju, nesretniče! I Zemlju poljubi još jednom, za oproštaj – zbogom – onda krene četveronoške za zovom uplašenih zvijeri – ne vičite, dolazim – i otplazi bratski u izbezumljeni grad Zoopolis. Ovo je kraj jednog hrvatskog romana. Kojeg?",
    a: "Na rubu pameti",
    b: "Proljeca Ivana Galeba",
    c: "Kiklop",
    d: "Povratak Filipa Latinovicza",
    correct: "c",
  },
  {
    question:
      "U Beču se tijekom 1814. i 1815. održao veliki politički skup koji je trebao odrediti smjernice postnapoleonske Europe. Taj događaj je u povijesti ostao zabilježen kao Bečki kongres. Organizator cijelog eventa bio je austrijski ministar vanjskih poslova. Kako se on zvao?",
    a: "Genscher",
    b: "Metternich",
    c: "Kurtz",
    d: "Merkel",
    correct: "b",
  },
  {
    question:
      "Najveća arena na US Openu nosi ime tenisača Arthura Ashea. Druga po veličini nosi ime legendarnog glazbenika. Kako se on zove?",
    a: "Frank Sinatra",
    b: "Louis Armstrong",
    c: "Chuck Berry",
    d: "Robert Johnson",
    correct: "b",
  },
  {
    question:
      "Ova hrvatska utvrda ulazi u priču o tvrđavama bez predavanja. Kako se zove ova utvrda, osvojena 1578. od strane Turaka, gdje su se svi branitelji navodno smrznuli?",
    a: "Siget",
    b: "Klis",
    c: "Gvozdansko",
    d: "Bribir",
    correct: "c",
  },
  {
    question:
      "Prvo spominjanje imena Šibenika datira se u 1066. godinu. U darovnici ga tada spominje ondašnji hrvatski vladar. Kako se on zove?",
    a: "Branimir",
    b: "Trpimir",
    c: "Dmitar Zvonimir",
    d: "Petar Kresimir IV",
    correct: "d",
  },

  {
    question:
      "Jedan od najvećih preokreta u povijesti nogometa, dogodio se 26. lipnja 1999. g., na Camp Nouu u Barceloni. U finalu Lige prvaka, MANu je sa dva pogotka u sudačkoj nadoknadi uspio preokrenuti utakmicu, i pobijediti 2:1. Koja je ekipa tragični gubitnik iz ovog finala? ",
    a: "Bayern Munchen",
    b: "Real Madrid",
    c: "Olympique Marseille",
    d: "Ajax Amsterdam",
    correct: "a",
  },
  {
    question:
      "Tko je bio svjetski prvak u Formuli 1 2007. godine iako je uoči zadnje utrke bio tek treći u ukupnom poretku? ",
    a: "Fernando Alonso",
    b: "Lewis Hamilton",
    c: "Felipe Massa",
    d: "Kimi Raikkonen",
    correct: "d",
  },
  {
    question:
      "Zdravko i Zoran Mamić su rijetko kontroverzna braća u Hrvata. Nećemo ulaziti u njihove trenutne probleme sa zakonom, i pozicije u hrvatskom nogometu, već ćemo se posvetiti njihovom porijeklu. U kojem gradu su rođeni Mamići?",
    a: "Velika Gorica",
    b: "Slavonski Brod",
    c: "Bjelovar",
    d: "Ogulin",
    correct: "c",
  },
  {
    question:
      "Jedan od najvećih mečeva svih vremena 1974. godine, omogućio je Aliu da ponovno postane svjetski prvak. Naime, u meču, poznatom kao Rumble in the Jungle, u 14. rundi pobjeđuje Georga Foremana. U kojem gradu se održala ova povijesna borba?",
    a: "Lusaka",
    b: "Brazzaville",
    c: "Luanda",
    d: "Kinshasa",
    correct: "d",
  },
  {
    question:
      "U Bibliji se pojavljuju dvije životinje koje imaju moć govora. O kojim je to životinjama riječ?",
    a: "Zmija i magarac",
    b: "Deva i konj",
    c: "Ovca i koza",
    d: "Krava i mrav",
    correct: "a",
  },
  {
    question:
      "Nelson Mandela dobar dio života proveo je u zatvoru. Taj zatvor bio je smješten na jedan otok. Ako znamo da ime dijeli s prezimenom jednog nizozemskog nogometasa, o kojem se otoku radi?",
    a: "Gakpo Island",
    b: "Cruyf Island",
    c: "Robben Island",
    d: "Van Persie Island",
    correct: "c",
  },
  {
    question:
      "Najstarije sveucilište u Europi osnovano je 1088. godine u Italiji. Recite nam u kojem gradu?",
    a: "Milano",
    b: "Bologna",
    c: "Napulj",
    d: "Firenza",
    correct: "b",
  },
  {
    question: "Što je proglašeno istrebljenim 9. prosinca 1979. godine?",
    a: "Sifilis",
    b: "Ebola",
    c: "Boginje",
    d: "Kuga",
    correct: "c",
  },
  {
    question:
      "Koji grad bio glavne grad Hrvatske sve do požara 1776. godine kada se centar vlasti seli u Zagreb?",
    a: "Varaždin",
    b: "Split",
    c: "Rijeka",
    d: "Osijek",
    correct: "a",
  },
  {
    question:
      "Kojem otoku ime otkriva da se radi o jednom od najvecih nalazišta bakra na svijetu?",
    a: "Malta",
    b: "Korzika",
    c: "Cipar",
    d: "Kreta",
    correct: "c",
  },
  {
    question:
      "Najveći hit ovog glazbenog sastava je o požaru u Švicarskoj, a pjevaju i o čudnim ženama. Jednoj iz Kentuckya, a bogami i o nekoj iz Japana. Tko su oni?",
    a: "Deep Purple",
    b: "Arctic Monkeeys",
    c: "Franz Ferdinand",
    d: "Led Zeppelin",
    correct: "a",
  },
  {
    question:
      "Jedan od najvećih rock glazbenika ikad zove se Robert Zimmerman. Iako ne zvuči najpoznatije, pravo je ime zvijezde koja se sakrila iza pseudonima. Kako se zvijezda zove?",
    a: "Jim Morrison",
    b: "Bob Dylan",
    c: "Elvis Presley",
    d: "Jimi Hendrix",
    correct: "b",
  },
  {
    question:
      "Od kad je Hrvatska neovisna, daleko najpoznatiji hrvatski boksač je Željko Mavrović. Najblistaviji trenutak njegove karijere desio se 1998. godine, kada je dobio priliku boriti se za svjetsku titulu u teškoj kategoriji. Nažalost, nije uspio. Kako se, imenom i prezimenom, zvao boksač od kojeg je izgubio?",
    a: "Vladimir Klitschko",
    b: "Evander Hollyfield",
    c: "Mike Tyson",
    d: "Lennox Lewis",
    correct: "d",
  },
  {
    question:
      "Ako je mjesto zbivanja Oran, a o svemu piše Albert Camus, što točno pogađa ovaj alžirski grad?",
    a: "Kuga",
    b: "Glad",
    c: "Rat",
    d: "Potres",
    correct: "a",
  },
  {
    question:
      "Koji roman počinje rečenicom: “Sve sretne obitelji nalik su jedna na drugu, svaka nesretna obitelj nesretna je na svoj način.”",
    a: "Majstor i Margarita",
    b: "Ana Karenjina",
    c: "Rat i mir",
    d: "Zločin i kazna",
    correct: "b",
  },
  {
    question:
      "Godine 1993. Hrvatska prvi put nastupa kao samostalna država na Eurosongu. Predstavljala ju je grupa iz Rijeke, koja je izvodila pjesmu Don’t ever cry, i koja je, na kraju, zauzela 15. mjesto. Kako se zvao ovaj riječki sastav?",
    a: "Laufer",
    b: "Let 3",
    c: "ENI",
    d: "Putokazi",
    correct: "d",
  },
  {
    question:
      "Popularna serija Igra Prijestolja zasnovana je na zbirci od sedam knjiga, pod imenom Pjesma leda i vatre. Tko je autor ovog književnog serijala?",
    a: "J.R.R. Tolkien",
    b: "J.K. Rowling",
    c: "G.R.R. Martin",
    d: "A. Huxley",
    correct: "c",
  },
  {
    question:
      "Tijekom Hladnog rata u mnogim istočnoeuropskim državama bile su na vlasti strahovlade. Najpoznatija je ona rumunjska sa Nicolaeom Causescuom na čelu. Kako se zvala tajna policija kojom je Causescu držao pod kontrolom Rumunjsku?",
    a: "STASI",
    b: "UDBA",
    c: "SECURITATE",
    d: "NKVD",
    correct: "c",
  },
  {
    question:
      "Koja je Konamijeva franšiza, u kojoj pratimo glavnog lika Solid Snakea, jedna od najdugovječnijih i najuspješnijih igara u povijesti?",
    a: "Final Fantasy",
    b: "Metal Gear Solid",
    c: "Grand Theft Auto",
    d: "Resident Evil",
    correct: "b",
  },
  {
    question:
      "Doslovni prijevod ove naprave je mračna soba .Ona je preteča svih fotoaparata, kamera i sličnih naprava. O kojoj spravi je riječ?",
    a: "Camera obscura",
    b: "Camera lucifera",
    c: "Camera verda",
    d: "Camera bianca",
    correct: "a",
  },
  {
    question:
      "Kako se zvao prvi film u kojem je zaigrao Elvis Presley, ako znamo da taj muzički vestern dijeli ime s jednim od njegovih najvećih hitova?",
    a: "Suspicious minf",
    b: "My way",
    c: "Love me tender",
    d: "Hound dog",
    correct: "c",
  },
  {
    question:
      "Najveći hit ovog glazbenog sastava je o požaru u Švicarskoj, a pjevaju i o čudnim ženama. Jednoj iz Kentuckya, a bogami i o nekoj iz Japana. Tko su oni?",
    a: "Deep Purple",
    b: "Arctic Monkeeys",
    c: "Franz Ferdinand",
    d: "Led Zeppelin",
    correct: "a",
  },
  {
    question:
      "Dva najpoznatija filmska psa su Lesi i Rin Tin Tin. Lesi je vjerni škotski ovčar. Koje je pasmine Rin Tin Tin?",
    a: "Njemački ovčar",
    b: "Belgijski ovčar",
    c: "Hrvatski ovčar",
    d: "Švicarski ovčar",
    correct: "a",
  },
  {
    question:
      "Kratko i jasno pitanje iz geografije. Koja je država najveća na afričkom kontinentu?",
    a: "Nigerija",
    b: "Alžir",
    c: "Demokratska Republika Kongo",
    d: "Mali",
    correct: "b",
  },
  {
    question:
      "Jednu od najsmrtonosnijih bolesti ikad znamo po imenu koje nam je došlo iz talijanskog. Kad se prevede na hrvatski, dobili bi pojam loš zrak. O kojoj je to bolesti riječ u ovome pitanju?",
    a: "Trihineloza",
    b: "Velike boginje",
    c: "Ospice",
    d: "Malarija",
    correct: "d",
  },
  {
    question:
      "Hrvatska je 2005., osvojila i najcijenjenije tenisko momčadsko natjecanje, Davis cup. Momčad u sastavu Ljubičić, Ančić, Ivanišević i Karlović, u finalnom meču pobjedila je u gostima, rezltatom 3:2. Koga?",
    a: "Veliku Britaniju",
    b: "Francusku",
    c: "SAD",
    d: "Slovačku",
    correct: "d",
  },
  {
    question:
      "Tijekom španjolskih osvajanja Amerika, glavna pokretačka snaga bila je nesmiljena žeđ za zlatom. Zato i ne čudi pomamna potraga za „zlatnim gradom”, i u Sjevernoj i u Južnoj Americi, koju započinju Španjolci, a potom se pridružuju i drugi. Koje je uvriježeno ime za ovaj legendarni zlatni grad?",
    a: "Quivira",
    b: "El Dorado",
    c: "Tordesillas",
    d: "Mexico City",
    correct: "b",
  },
  {
    question:
      "Koje godine je Vladimir Putin postao predsjednik Ruske Federacije?",
    a: "2000.",
    b: "1990.",
    c: "2010.",
    d: "2020.",
    correct: "a",
  },
  {
    question: "U kojem se oceanu smjestio Biskajski zaljev?",
    a: "Indijskom",
    b: "Atlantskom",
    c: "Tihom",
    d: "Arktičkom",
    correct: "c",
  },
  {
    question:
      "Poznat po velikom broju restorana i barova, distrikt Nyhavn jedna od najpoznatijih znamenitosti kojeg glavnog grada?",
    a: "Oslo",
    b: "Kopenhagen",
    c: "Helsinki",
    d: "Stockholm",
    correct: "b",
  },
  {
    question:
      "Finsku zovu “Zemljom tisuću jezera”, a koja američka savezna država ima nadimak “Zemlja 10.000 jezera”?",
    a: "Minnesota",
    b: "Nebraska",
    c: "Ohio",
    d: "Virginia",
    correct: "a",
  },
  {
    question:
      "Pored Rijeke nalazi se automoto staza svjetske klase. Kako se ona zove?",
    a: "Šoderica",
    b: "Monza",
    c: "Grobnik",
    d: "Malačka",
    correct: "c",
  },
  {
    question: "Koga je časopis Time godine 1938. izabrao kao osobu godine?",
    a: "Papu Pia XI.",
    b: "Staljina",
    c: "Hitlera",
    d: "Einsteina",
    correct: "c",
  },
  {
    question:
      "Koji pojam povezuje roman Miroslava Krleže i pjesmu Parnog valjka?",
    a: "Uhvati ritam",
    b: "Buđenje",
    c: "Na rubu pameti",
    d: "Zastave",
    correct: "c",
  },
  {
    question:
      "Kako se zove sprava koja pokazuje brzinu izvođenja nekoga glazbenog djela, a patentirao ju je Johann Mälzel 1816.?",
    a: "Mellotron",
    b: "Metronom",
    c: "Kontrabas",
    d: "Theremin",
    correct: "b",
  },
  {
    question:
      "Od starogrčkog za „snaga“, kako se u franšizi „God of War“ zove glavni lik, spartanski ratnik koji slučajno ubije vlastitu obitelj nakon što ga prevari bivši mentor Ares?",
    a: "Kratos",
    b: "Pan",
    c: "Sokrates",
    d: "Apolon",
    correct: "a",
  },
];

//Dok uvjeti nisu ispunjeni JAVLJAJ KORISNIKU DA UNESE ISPRAVNO IME
/*let playerName;
do {
  playerName = prompt("Unesi svoje ime:");

  if (playerName.length > 10) {
    playerName = prompt("Unesite ime sa maksimalno 10 znakova:");
  } else if (playerName === "") {
    playerName = prompt("Ime ne može biti prazno. Unesite ispravno ime:");
  }
  document.getElementById("name").innerHTML = playerName;
} while (playerName.length > 10 || playerName === "");*/
//

function showName() {
  let inputName = document.getElementById("input");
  player = inputName.value; // Assign the value of the input field to the player variable
  let playerNameDisplay = document.getElementById("player"); // Get the element to display the player's name
  playerNameDisplay.innerHTML = player; // Display the player's name
  playerNameDisplay.style.fontSize = "45px";
}
//Stvaranje pocetnih varijabli i funkcija
const question = document.getElementById("question");
const answerA = document.getElementById("a-answer");
const answerB = document.getElementById("b-answer");
const answerC = document.getElementById("c-answer");
const answerD = document.getElementById("d-answer");
const nextQuestion = document.getElementById("next-que");

//Varijabla za COUNTER pitanja
//STAVLJENA JE NA RANDOM
let currentQuestion = 0;

//Funkcija za pokretanje kviza
loadQuiz();
function loadQuiz() {
  //NOva varijabla za spremanje RANDOM pitanja iz QUIZDATA ARRAYA
  const currentQuizData = quizData[currentQuestion];
  question.innerHTML = currentQuizData.question;

  answerA.innerHTML = `<strong>A:</strong>  ${currentQuizData.a}`;
  answerB.innerHTML = `<strong>B:</strong> ${currentQuizData.b}`;
  answerC.innerHTML = `<strong>C:</strong>  ${currentQuizData.c}`;
  answerD.innerHTML = `<strong>D:</strong> ${currentQuizData.d}`;
  document.body.style.backgroundColor = "white";
}

//Klikom na NEXT QUESTION BUTTON kviz se ponovno LOADA i s njim nasumicno pitanje
nextQuestion.addEventListener("click", function () {
  currentQuestion++;
  document.getElementById("counter").innerHTML = `${currentQuestion + 1}/${
    quizData.length
  }`;
  if (currentQuestion === quizData.length) {
    currentQuestion = quizData.length;
    nextQuestion.innerHTML = `End Game`;
    document.getElementById("counter").innerHTML = `The end`;
    nextQuestion.removeEventListener("click", arguments.callee);
    nextQuestion.addEventListener("click", showResult);
  }
  loadQuiz();
});

//STVARANJE TIMERA ZA PITANJE
/*let timer = 15;
let interval;
function countDown() {
  document.getElementById("timer").innerHTML = timer;
  timer--;
  if (timer <= 0) {
    document.body.style.backgroundColor = "red";
  }
}
function startTimer() {
  setInterval(countDown, 1000);
}*/

//PROVJERA TOCNIH ODGOVORA
answerA.addEventListener("click", function () {
  checkAnswer("a");
});
answerB.addEventListener("click", function () {
  checkAnswer("b");
});
answerC.addEventListener("click", function () {
  checkAnswer("c");
});
answerD.addEventListener("click", function () {
  checkAnswer("d");
});

//

let correctAnswers = 0;
let wrongAnswers = 0;
function checkAnswer(option) {
  const currentQuizData = quizData[currentQuestion];
  const correctAnswer = currentQuizData.correct;

  if (option === correctAnswer) {
    document.body.style.backgroundColor = "green";
    correctAnswers++;
    document.getElementById("name").innerHTML = ` ${correctAnswers}`;
  } else {
    document.body.style.backgroundColor = "red";
    wrongAnswers++;
  }
}

//Funkcija za prikaz rezultata
function showResult() {
  document.getElementById("quizDisplay").style.display = "none";
  document.body.backgroundColor = "white";
  document.body.innerHTML = `<div><h3>ČESTITAM ${player} ZAVRŠILI STE IGRU:</h3>
  <h1>Točnih odgovora: ${correctAnswers}</h1><h1>Netočnih odgovora: ${wrongAnswers}</h1></div>`;
}
