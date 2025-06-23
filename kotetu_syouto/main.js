document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};

const cgs = [{
        name: "FANBOX#1",
        id: "001",
        thumbnail: "https://images2.imgbox.com/15/97/AAycyWC8_o.jpeg",
        panels: ["https://images2.imgbox.com/15/97/AAycyWC8_o.jpeg",
            "https://images2.imgbox.com/12/c8/djqseKlI_o.png",
            "https://images2.imgbox.com/cc/97/qDY1RSfx_o.png",
            "https://images2.imgbox.com/37/42/jBQr8q9Q_o.png",
            "https://images2.imgbox.com/7b/b0/bbbEzEEP_o.png",
            "https://images2.imgbox.com/a5/7f/71pIqNC3_o.png",
            "https://images2.imgbox.com/14/67/9Xh6kbsQ_o.png",
            "https://images2.imgbox.com/2a/51/wfboK6ng_o.png",
            "https://images2.imgbox.com/53/46/UdWSegCD_o.png",
            "https://images2.imgbox.com/92/62/gd29BHuR_o.png",
            "https://images2.imgbox.com/be/af/YhgbkJ1C_o.png",
            "https://images2.imgbox.com/d6/d9/JsgUSgFF_o.png",
            "https://images2.imgbox.com/3d/fd/KVdSsFzk_o.png",
            "https://images2.imgbox.com/f5/37/lj6Uu1h0_o.png",
            "https://images2.imgbox.com/ac/fa/ZHi93Gyb_o.png",
            "https://images2.imgbox.com/88/de/7S6YBuq4_o.png",
            "https://images2.imgbox.com/3f/f2/JCwRCeNO_o.png",
            "https://images2.imgbox.com/94/f3/CF68Vpu6_o.png",
            "https://images2.imgbox.com/a5/de/Ejj28Odz_o.png",
            "https://images2.imgbox.com/09/66/AdAuAfI4_o.png",
            "https://images2.imgbox.com/be/94/i1R6y2OT_o.png",
            "https://images2.imgbox.com/31/f1/3WCcUOOg_o.png",
            "https://images2.imgbox.com/83/2a/tx967N0R_o.png",
            "https://images2.imgbox.com/93/2a/rXse8SBy_o.png",
            "https://images2.imgbox.com/b4/1b/usIQAANF_o.png"
        ]
    },
    {
        name: "FANBOX#2",
        id: "002",
        thumbnail: "https://images2.imgbox.com/f6/26/dEwuJhyX_o.jpeg",
        panels: ["https://images2.imgbox.com/f6/26/dEwuJhyX_o.jpeg",
            "https://images2.imgbox.com/0b/fd/P4UbU1Y9_o.png",
            "https://images2.imgbox.com/b0/f1/Le8vIENa_o.png",
            "https://images2.imgbox.com/cb/da/Kkj3iZsh_o.png",
            "https://images2.imgbox.com/c1/50/DgKWW9SF_o.png",
            "https://images2.imgbox.com/06/55/hnbxbVkH_o.png",
            "https://images2.imgbox.com/a7/cf/Y1W7PbBo_o.png",
            "https://images2.imgbox.com/1b/ee/oi6uLvY0_o.png",
            "https://images2.imgbox.com/87/78/AJCWRn7K_o.png",
            "https://images2.imgbox.com/a5/99/iqMMlZmX_o.png"
        ]
    },
    {
        name: "FANBOX#3",
        id: "003",
        thumbnail: "https://images2.imgbox.com/78/60/gzAtcImz_o.jpeg",
        panels: ["https://images2.imgbox.com/78/60/gzAtcImz_o.jpeg",
            "https://images2.imgbox.com/4b/53/wUsIPcso_o.png",
            "https://images2.imgbox.com/cd/b9/xWDJLQL5_o.png",
            "https://images2.imgbox.com/f8/a6/el4CeG4P_o.png",
            "https://images2.imgbox.com/31/12/XhY1vN6l_o.png",
            "https://images2.imgbox.com/d2/f5/TJjh6bZL_o.png",
            "https://images2.imgbox.com/62/81/Its4PUsP_o.png"
        ]
    },
    {
        name: "FANBOX#4",
        id: "004",
        thumbnail: "https://images2.imgbox.com/30/92/dRlTHBsB_o.png",
        panels: ["https://images2.imgbox.com/30/92/dRlTHBsB_o.png",
            "https://images2.imgbox.com/30/92/dRlTHBsB_o.png",
            "https://images2.imgbox.com/c5/89/pQrDdCwc_o.png",
            "https://images2.imgbox.com/6c/4d/eqACJBoE_o.png"
        ]
    },
    {
        name: "FANBOX#5",
        id: "005",
        thumbnail: "https://images2.imgbox.com/de/97/4Evrsg50_o.png",
        panels: ["https://images2.imgbox.com/de/97/4Evrsg50_o.png",
            "https://images2.imgbox.com/9a/92/Rs4UHCOu_o.png",
            "https://images2.imgbox.com/6c/f7/a77Cylw7_o.png",
            "https://images2.imgbox.com/57/b6/KhZzSn5C_o.png",
            "https://images2.imgbox.com/c1/d7/ciBHCpR6_o.png",
            "https://images2.imgbox.com/75/25/2x5dFXeK_o.png",
            "https://images2.imgbox.com/66/fe/5eWdSr1u_o.png",
            "https://images2.imgbox.com/d2/84/WV74eCK4_o.png",
            "https://images2.imgbox.com/88/e3/a5fNh6Vc_o.png",
            "https://images2.imgbox.com/ed/6a/3zJNZPr4_o.png",
            "https://images2.imgbox.com/f6/8d/6jyewOlQ_o.png",
            "https://images2.imgbox.com/a9/f6/2pThGB3I_o.png",
            "https://images2.imgbox.com/77/8e/bA32hX22_o.png",
            "https://images2.imgbox.com/78/f8/vSrEA4Hj_o.png",
            "https://images2.imgbox.com/3d/6b/rjYnOy52_o.png",
            "https://images2.imgbox.com/86/41/tNfvUPMy_o.png",
            "https://images2.imgbox.com/00/6c/UzjgTxcW_o.png",
            "https://images2.imgbox.com/29/a6/cljW9lqg_o.png",
            "https://images2.imgbox.com/22/50/bq2QqhbL_o.png",
            "https://images2.imgbox.com/16/96/P4fAiRPv_o.png",
            "https://images2.imgbox.com/28/d5/w3DRxDNA_o.png",
            "https://images2.imgbox.com/16/29/FpTVDmGL_o.png",
            "https://images2.imgbox.com/9a/d5/dZ5TD8Zp_o.png",
            "https://images2.imgbox.com/e4/e8/E0sMzJiV_o.png",
            "https://images2.imgbox.com/e1/b5/wtZZ5Usn_o.png",
            "https://images2.imgbox.com/28/7a/jlDMN9cj_o.png",
            "https://images2.imgbox.com/3f/e1/bB4WrZ8J_o.png",
            "https://images2.imgbox.com/c2/d7/6MZmgj90_o.png",
            "https://images2.imgbox.com/32/3d/VcPh3TBY_o.png",
            "https://images2.imgbox.com/3e/d8/iDPmLhwu_o.png",
            "https://images2.imgbox.com/f9/e1/J3iLn8Lb_o.png",
            "https://images2.imgbox.com/d9/74/pNFTzJlF_o.png",
            "https://images2.imgbox.com/cd/54/olIrnyDi_o.png",
            "https://images2.imgbox.com/15/9f/hWW33WcL_o.png",
            "https://images2.imgbox.com/f6/63/mtwfkNQK_o.png",
            "https://images2.imgbox.com/50/85/KrznMgTn_o.png",
            "https://images2.imgbox.com/e9/62/aIjw4XAz_o.png",
            "https://images2.imgbox.com/ee/8f/WzqSZ0Vc_o.png",
            "https://images2.imgbox.com/04/fe/L4SWZEG7_o.png",
            "https://images2.imgbox.com/9c/cb/TBOwtEG5_o.png",
            "https://images2.imgbox.com/5b/1c/EqXUspXM_o.png",
            "https://images2.imgbox.com/26/61/ZvP5kWds_o.png"
        ]
    },
    {
        name: "Teacher",
        id: "006",
        thumbnail: "https://images2.imgbox.com/58/a4/I168emlN_o.png",
        panels: ["https://images2.imgbox.com/58/a4/I168emlN_o.png",
            "https://images2.imgbox.com/89/af/bqddQ50D_o.png"
        ]
    }
]
const imageCache = new Map();

let currentComic = null,
    currentPanelIndex = 0;

const box = document.getElementById("comic-holder"),
    home = document.getElementById("home"),
    viewer = document.getElementById("viewer-holder"),
    viewerTitle = document.getElementById("viewer-title"),
    panelImg = document.getElementById("viewer-panel"),
    prevBtn = document.getElementById("prev-button"),
    nextBtn = document.getElementById("next-button"),
    backBtn = document.getElementById("back-button"),
    viewerPanelContainer = document.getElementById("viewer-panel-container");

function updateIcons() {
    if (!box) return;
    box.innerHTML = "";
    cgs.forEach(comic => {
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
            startViewing(comic.id);
        });
        box.appendChild(a);
        cacheImage(comic.thumbnail);
    });
}

function startViewing(id) {
    currentComic = cgs.find(c => c.id === id);
    if (!currentComic) return alert("Comic not found!");
    currentPanelIndex = 0;
    viewerTitle.textContent = currentComic.name;
    home.classList.add("hidden");
    viewer.classList.remove("hidden");
    showPanel(currentPanelIndex);
}

function showPanel(i) {
    if (!currentComic || !panelImg || !viewerPanelContainer) return;
    if (i < 0 || i >= currentComic.panels.length) return;
    prevBtn.disabled = nextBtn.disabled = true;
    viewerPanelContainer.setAttribute("data-loading", "true");
    const url = currentComic.panels[i];

    if (imageCache.has(url)) {
        panelImg.src = url;
        panelImg.alt = `${currentComic.name} - Panel ${i+1}`;
        viewerPanelContainer.removeAttribute("data-loading");
        prevBtn.disabled = i === 0;
        nextBtn.disabled = i === currentComic.panels.length - 1;
    } else {
        const tempImg = new Image();
        tempImg.src = url;
        tempImg.onload = () => {
            imageCache.set(url, tempImg);
            panelImg.src = url;
            panelImg.alt = `${currentComic.name} - Panel ${i+1}`;
            viewerPanelContainer.removeAttribute("data-loading");
            prevBtn.disabled = i === 0;
            nextBtn.disabled = i === currentComic.panels.length - 1;
        };
        tempImg.onerror = () => {
            viewerPanelContainer.removeAttribute("data-loading");
            alert("Failed to load image.");
            prevBtn.disabled = i === 0;
            nextBtn.disabled = i === currentComic.panels.length - 1;
        };
    }

    if (currentComic.panels[i + 1]) cacheImage(currentComic.panels[i + 1]);
    if (currentComic.panels[i - 1]) cacheImage(currentComic.panels[i - 1]);
}

function cacheImage(url) {
    if (!imageCache.has(url)) {
        const img = new Image();
        img.src = url;
        img.onload = () => imageCache.set(url, img);
    }
}

function backToHome() {
    home.classList.remove("hidden");
    viewer.classList.add("hidden");
    currentComic = null;
    currentPanelIndex = 0;
    panelImg.src = "";
    viewerTitle.textContent = "";
}

function prevPanel() {
    if (currentPanelIndex > 0) showPanel(--currentPanelIndex);
}

function nextPanel() {
    if (currentComic && currentPanelIndex < currentComic.panels.length - 1) showPanel(++currentPanelIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    updateIcons();
    if (panelImg) panelImg.loading = "lazy";
    backBtn?.addEventListener("click", backToHome);
    prevBtn?.addEventListener("click", prevPanel);
    nextBtn?.addEventListener("click", nextPanel);
});