// ====== PERSONALIZA AQUÍ ======
const CONFIG = {
  nombres: "Ismael & Nuria",
  fotoPortada: "foto1.jpeg",
  texto: [
    "Hay algo que todavía no te he confesado. Algo que mis ojos llevan tiempo intentando decirte cada vez que te miran.",
    "Porque contigo pasé algo diferente: fuiste colándote en mis pensamientos y en mis mejores días.",
    "Y hoy, por fin, quiero hacértelo saber."
  ],
  firma: "— Tu mejor amigo",
  pregunta: "¿Quieres ser mi novia?",
  galeria: [
    { img: "foto2.jpeg", pie: "El primer día de nuestra vida" },
    { img: "foto3.jpeg", pie: "Cada momento contigo cuenta" }
  ],
  final: "Te amo con todo lo que soy ♥"
};
// ==============================

const $ = id => document.getElementById(id);
const mostrar = id => {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function corazones(n = 30) {
  const box = $("hearts");
  for (let i = 0; i < n; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = "♥";
    h.style.left = Math.random() * 100 + "%";
    h.style.fontSize = 14 + Math.random() * 26 + "px";
    h.style.animationDuration = 3 + Math.random() * 3 + "s";
    h.style.animationDelay = Math.random() * 1.2 + "s";
    box.appendChild(h);
    setTimeout(() => h.remove(), 7000);
  }
}

// Reloj: empieza en 00:00:00 al aceptar y corre desde 0
const pad = n => String(n).padStart(2, "0");
let relojActivo = false;

function iniciarReloj() {
  if (relojActivo) return;          // evita duplicar el reloj
  relojActivo = true;
  const inicio = Date.now();        // momento exacto del "Sí, quiero"
  $("reloj").textContent = "00:00:00";
  setInterval(() => {
    const t = Math.floor((Date.now() - inicio) / 1000);
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;
    $("reloj").textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
  }, 1000);
}

// Rellenar contenido
$("foto-portada").src = CONFIG.fotoPortada;
$("nombres").textContent = CONFIG.nombres;
$("texto").innerHTML = CONFIG.texto.map(p => `<p>${p}</p>`).join("");
$("firma").textContent = CONFIG.firma;
$("pregunta").textContent = CONFIG.pregunta;
$("final").textContent = CONFIG.final;
$("galeria").innerHTML = CONFIG.galeria
  .map(g => `<figure><img src="${g.img}" alt="" loading="lazy"><figcaption>${g.pie}</figcaption></figure>`)
  .join("");

// Eventos
$("sello").addEventListener("click", () => { corazones(10); mostrar("carta"); });
$("si").addEventListener("click", () => {
  corazones(45);
  iniciarReloj();
  setTimeout(() => mostrar("juntos"), 900);
});