const loadingTexts = [
    "⏳ Lagi mikir...",
    "💭 Nge-load otak...",
    "🤯 Menghitung usia...",
    "😎 Santai bentar...",
    "🌀 Sedang memproses...",
    "📃 Sedang mencari data...",
    "🌌 Melihat masa lalumu..."
];

let loadingInterval;

function Tebak() {
    let Lahir = parseInt(document.getElementById('angka1').value);
    let Sekarang = parseInt(document.getElementById('angka2').value);
    let bl = document.getElementById('hasil');
    let btn = document.getElementById('btn');
    if (isNaN(Lahir) || isNaN(Sekarang)) {
        alert("Isi dua-duanya dulu woy!");
        return;
    }
    if (Lahir < 1000) {
        alert("Minimal 1000 WOY!");
        return;
    }
    if (Lahir > Sekarang) {
        alert("jangan ngaco beb");
        return;
    }
    btn.disabled = true;
    const audio = new Audio("assets/Music.mp3");
    audio.play();
    let idx = 0;
        bl.innerText = loadingTexts[idx];
        loadingInterval = setInterval(() => {
            idx = (idx + 1) % loadingTexts.length;
            bl.innerText = loadingTexts[idx];
        }, 1000);
        setTimeout(() => {
            clearInterval(loadingInterval);
            let umur = Sekarang - Lahir;
            bl.innerText = `Umur kamu: ${umur} tahun 😎`;
            btn.disabled = false;
        }, 6000);
}

const videos = [
    "assets/Video.mp4",
    "assets/Video1.mp4",
    "assets/Video2.mp4",
    "assets/Video3.mp4",
];

const randomVideo = videos[Math.floor(Math.random() * videos.length)];
document.querySelector("video source").src = randomVideo;
document.querySelector("video").load();
