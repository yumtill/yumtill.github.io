const home = document.getElementById("home");
const viewerHolder = document.getElementById("viewer-holder");
const artistList = document.getElementById("artist-list");
const comicHolder = document.getElementById("comic-holder");
const viewerTitle = document.getElementById("viewer-title");
const viewerPanelContainer = document.getElementById("viewer-panel-container");
const viewerPanel = document.getElementById("viewer-panel");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");
const backBtn = document.getElementById("back-button");

let currentArtist = null;
let currentComic = null;
let currentPanelIndex = 0;
const imageCache = new Map();

function cacheImage(url) {
    if (!imageCache.has(url)) {
        const img = new Image();
        img.src = url;
        img.onload = () => imageCache.set(url, img);
    }
}

function showHome() {
    home.classList.remove("hidden");
    viewerHolder.classList.add("hidden");
    comicHolder.classList.add("hidden");
    viewerPanelContainer.classList.add("hidden");
    currentComic = null;
    currentPanelIndex = 0;
    viewerPanel.src = "";
    viewerTitle.textContent = "";
}

function showComicList() {
    comicHolder.classList.remove("hidden");
    viewerPanelContainer.classList.add("hidden");
    viewerHolder.classList.remove("hidden");
    home.classList.add("hidden");
}

function showComicViewer() {
    comicHolder.classList.add("hidden");
    viewerPanelContainer.classList.remove("hidden");
    viewerHolder.classList.remove("hidden");
    home.classList.add("hidden");
}

function loadArtistComics(artistId) {
    currentArtist = window.ARTISTS.find(a => a.id === artistId);
    if (!currentArtist) {
        alert("Artist not found");
        return;
    }
    viewerTitle.textContent = currentArtist.name;
    comicHolder.innerHTML = "";
    currentArtist.comics.forEach(comic => {
        const a = document.createElement("a");
        a.href = "#";
        a.className = "grid-thing";
        const img = document.createElement("img");
        img.loading = "lazy";
        img.src = comic.thumbnail;
        img.alt = comic.name;
        const p = document.createElement("p");
        p.textContent = comic.name;
        a.append(img, p);
        a.addEventListener("click", e => {
            e.preventDefault();
            startViewing(comic);
        });
        comicHolder.appendChild(a);
        cacheImage(comic.thumbnail);
    });
    showComicList();
}

function startViewing(comic) {
    currentComic = comic;
    currentPanelIndex = 0;
    showComicViewer();
    showPanel(currentPanelIndex);
}

function showPanel(i) {
    if (!currentComic) return;
    if (i < 0 || i >= currentComic.panels.length) return;
    prevBtn.disabled = nextBtn.disabled = true;
    viewerPanel.src = "";
    const url = currentComic.panels[i];
    if (imageCache.has(url)) {
        viewerPanel.src = url;
        viewerPanel.alt = `${currentComic.name} - Panel ${i + 1}`;
        prevBtn.disabled = i === 0;
        nextBtn.disabled = i === currentComic.panels.length - 1;
    } else {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            imageCache.set(url, img);
            viewerPanel.src = url;
            viewerPanel.alt = `${currentComic.name} - Panel ${i + 1}`;
            prevBtn.disabled = i === 0;
            nextBtn.disabled = i === currentComic.panels.length - 1;
        };
        img.onerror = () => alert("Failed to load image.");
    }
}

prevBtn.addEventListener("click", () => {
    if (currentPanelIndex > 0) {
        currentPanelIndex--;
        showPanel(currentPanelIndex);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentComic && currentPanelIndex < currentComic.panels.length - 1) {
        currentPanelIndex++;
        showPanel(currentPanelIndex);
    }
});

backBtn.addEventListener("click", () => {
    if (!viewerPanelContainer.classList.contains("hidden")) {
        // If viewing comic panel, go back to comic list
        viewerPanelContainer.classList.add("hidden");
        comicHolder.classList.remove("hidden");
    } else {
        // If on comic list, go back to home (artist list)
        showHome();
    }
});

artistList.addEventListener("click", e => {
    const artistDiv = e.target.closest(".grid-thing");
    if (!artistDiv) return;
    const artistId = artistDiv.getAttribute("data-artist-id");
    if (!artistId) return;
    loadArtistComics(artistId);
});

// Arrow key navigation for comic panels
window.addEventListener("keydown", e => {
    if (viewerPanelContainer.classList.contains("hidden")) return; // Only if viewing panel
    if (e.key === "ArrowLeft") {
        prevBtn.click();
    } else if (e.key === "ArrowRight") {
        nextBtn.click();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    showHome();
});