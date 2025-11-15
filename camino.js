const questions = [
    {
        q: "Sientes ansiedad por el futuro, ¿qué haces?",
        options: [
            { text: "Me preocupo y pienso en todo lo que puede salir mal.", reflection: "Epicuro diría: la preocupación inútil solo daña tu tranquilidad, busca la ataraxia." },
            { text: "Respiro y me concentro en lo que puedo controlar.", reflection: "Correcto: disfrutar de lo controlable y el presente cultiva la serenidad." }
        ]
    },
    {
        q: "Te ofrecen un exceso de lujo, ¿lo aceptas?",
        options: [
            { text: "Sí, quiero todo lo mejor.", reflection: "Epicuro advertiría: el exceso de deseos trae sufrimiento, busca el placer natural." },
            { text: "No, me conformo con lo esencial.", reflection: "Bien: la simplicidad y la moderación son caminos hacia la aponía." }
        ]
    },
    {
        q: "Un amigo necesita tu ayuda, pero estás cansado, ¿qué haces?",
        options: [
            { text: "Ignoro la solicitud.", reflection: "Epicuro recordaría que la amistad es un placer seguro; ayudar fortalece vínculos y paz interior." },
            { text: "Lo ayudo aunque cueste esfuerzo.", reflection: "Correcto: cultivar la amistad contribuye a la felicidad y serenidad del alma." }
        ]
    },
    {
        q: "Sientes miedo a la muerte, ¿cómo reaccionas?",
        options: [
            { text: "Me angustio pensando en lo inevitable.", reflection: "Epicuro enseñaba que la muerte es ausencia de sensación; no debe temerse." },
            { text: "Acepto que es parte de la vida y continúo disfrutando.", reflection: "Bien: reconocer la muerte como natural ayuda a vivir sin miedo y con serenidad." }
        ]
    },
    {
        q: "Reflexión final: ¿cómo aplicas el Tetrapharmakos hoy?",
        options: [
            { text: "Intento eliminar miedos y deseos innecesarios.", reflection: "Excelente: aplicar los 4 principios te acerca a la paz y felicidad cotidiana." },
            { text: "Sigo como antes, sin cambios.", reflection: "Epicuro aconsejaría: la filosofía sirve para mejorar la vida; reflexiona y actúa." }
        ]
    }
];

let current = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const overlay = document.getElementById("overlay");
const reflectionText = document.getElementById("reflectionText");
const closeOverlay = document.getElementById("closeOverlay");

function loadQuestion() {
    if (current >= questions.length) {
        questionEl.textContent = "🎉 ¡Has completado el Camino del Filósofo!";
        optionsEl.innerHTML = "";
        return;
    }
    const q = questions[current];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.addEventListener("click", () => showReflection(opt.reflection));
        optionsEl.appendChild(btn);
    });
}

function showReflection(text) {
    reflectionText.textContent = text;
    overlay.style.display = "flex";
}

closeOverlay.addEventListener("click", () => {
    overlay.style.display = "none";
    current++;
    loadQuestion();
});

loadQuestion();
