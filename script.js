// ====== PERSONALIZA AQUÍ ======
const CONFIG = {
  nombres: "Ismael & Nuria",
  desde: "2026-10-19T00:00:00",            // fecha en que empezó todo
  fotoPortada: "foto1.jpeg",
  texto: [
    "Debo confesarte algo mi amor. Algo que llevo guardado durante un tiempo mi pequeña Nunu, algo que significa mucho para ambos.",
    "Pasamos por muchas cosas. Pasamos por una etapa y yo estoy dispuesto a dar el siguiente paso contigo de la mano.",
    "Hoy con total sinceridad deseo sabaer si..."
  ],
  firma: "— Un jóven que solo desea un futuro a tu lado.",
  pregunta: "¿Quieres ser mi Novia?",
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

function corazones(n = 60) {
  const box = $("hearts");
  for (let i = 0; i < n; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = "❤️";
    h.style.left = Math.random() * 100 + "%";
    h.style.fontSize = 20 + Math.random() * 26 + "px";
    h.style.animationDuration = 3 + Math.random() * 3 + "s";
    h.style.animationDelay = Math.random() * 3.2 + "s";
    box.appendChild(h);
    setTimeout(() => h.remove(), 7000);
  }
}

function contador() {
  const inicio = new Date(CONFIG.desde).getTime();
  const tick = () => {
    let t = Math.max(0, Math.floor((Date.now() - inicio) / 1000));
    $("d").textContent = Math.floor(t / 86400);
    $("h").textContent = Math.floor((t % 86400) / 3600);
    $("m").textContent = Math.floor((t % 3600) / 60);
    $("s").textContent = t % 60;
  };
  tick();
  setInterval(tick, 1000);
}

// Rellenar contenido
$("foto-portada").src = CONFIG.fotoPortada;
$("nombres").textContent = CONFIG.nombres;
$("texto").innerHTML = CONFIG.texto.map(p => `<p>${p}</p>`).join("");
$("firma").textContent = CONFIG.firma;
$("pregunta").textContent = CONFIG.pregunta;
$("final").textContent = CONFIG.final;
$("desde").textContent = "Nuestros hijos sabrán que inició el " + new Date(CONFIG.desde).toLocaleDateString("es", {
  day: "numeric", month: "long", year: "numeric"
});
$("galeria").innerHTML = CONFIG.galeria
  .map(g => `<figure><img src="${g.img}" alt="" loading="lazy"><figcaption>${g.pie}</figcaption></figure>`)
  .join("");

// Eventos
$("sello").addEventListener("click", () => { corazones(10); mostrar("carta"); });
$("si").addEventListener("click", () => {
  corazones(45);
  contador();
  setTimeout(() => mostrar("juntos"), 900);
});
