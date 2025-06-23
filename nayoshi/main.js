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
        name: "000. けもケット８頒布の本サンプル",
        id: "001",
        thumbnail: "https://images2.imgbox.com/25/81/pEYRoTkU_o.png",
        panels: ["https://images2.imgbox.com/25/81/pEYRoTkU_o.png",
            "https://images2.imgbox.com/38/2d/Ei1JgAe3_o.png",
            "https://images2.imgbox.com/71/00/nj8Eump5_o.png"
        ]
    },
    {
        name: "001.ヒートアップ",
        id: "002",
        thumbnail: "https://images2.imgbox.com/10/3c/fv4pawIm_o.jpg",
        panels: ["https://images2.imgbox.com/e5/34/72YRCRTK_o.jpg",
            "https://images2.imgbox.com/1d/c3/k5IwGRoX_o.jpg"
        ]
    },
    {
        name: "002. 関けも7で頒布した無配モノクロイラスト",
        id: "003",
        thumbnail: "https://images2.imgbox.com/7c/01/1Caogj7J_o.jpg",
        panels: ["https://images2.imgbox.com/23/c4/2ZL3wUeE_o.jpg",
            "https://images2.imgbox.com/9b/05/faDI49l0_o.jpg",
            "https://images2.imgbox.com/52/31/iXmNpMoE_o.jpg"
        ]
    },
    {
        name: "003. ラフイラスト2枚",
        id: "004",
        thumbnail: "https://images2.imgbox.com/80/2e/IlrdmGqP_o.jpg",
        panels: ["https://images2.imgbox.com/bf/ff/jqzZvU4a_o.jpg"]
    },
    {
        name: "004. 謹賀新年",
        id: "005",
        thumbnail: "https://images2.imgbox.com/2f/23/sNEnfeCv_o.jpg",
        panels: ["https://images2.imgbox.com/aa/84/0uaYjunA_o.jpg"]
    },
    {
        name: "005. あっ…!",
        id: "006",
        thumbnail: "https://images2.imgbox.com/f3/4e/cVleVXBw_o.jpg",
        panels: ["https://images2.imgbox.com/9e/d8/GJrgwOnp_o.jpg"]
    },
    {
        name: "006. 脱ぎ差分",
        id: "007",
        thumbnail: "https://images2.imgbox.com/29/7a/mTadrtbH_o.png",
        panels: ["https://images2.imgbox.com/ad/94/JTZ3GtIo_o.png"]
    },
    {
        name: "007. ケモノ本進捗",
        id: "008",
        thumbnail: "https://images2.imgbox.com/20/a6/jpvw0XS8_o.jpg",
        panels: ["https://images2.imgbox.com/20/a6/jpvw0XS8_o.jpg"]
    },
    {
        name: "008.けもけ本表紙",
        id: "009",
        thumbnail: "https://images2.imgbox.com/23/1f/W0ZXUlpq_o.jpg",
        panels: ["https://images2.imgbox.com/23/1f/W0ZXUlpq_o.jpg"]
    },
    {
        name: "009. 表紙",
        id: "010",
        thumbnail: "https://images2.imgbox.com/54/02/HmscTuxu_o.jpg",
        panels: ["https://images2.imgbox.com/54/02/HmscTuxu_o.jpg"]
    },
    {
        name: "010. おにショタ",
        id: "011",
        thumbnail: "https://images2.imgbox.com/83/32/dzIK4dxd_o.jpg",
        panels: ["https://images2.imgbox.com/83/32/dzIK4dxd_o.jpg"]
    },
    {
        name: "011. アンケートの子",
        id: "012",
        thumbnail: "https://images2.imgbox.com/ad/82/BNpLUSZG_o.jpg",
        panels: ["https://images2.imgbox.com/ad/82/BNpLUSZG_o.jpg"]
    },
    {
        name: "012. メガトン級支援者向け",
        id: "013",
        thumbnail: "https://images2.imgbox.com/a2/41/SGp2Y4D8_o.jpg",
        panels: ["https://images2.imgbox.com/a2/41/SGp2Y4D8_o.jpg"]
    },
    {
        name: "013. 冬コミ表紙",
        id: "014",
        thumbnail: "https://images2.imgbox.com/b0/5c/2a4C7RWe_o.jpg",
        panels: ["https://images2.imgbox.com/b0/5c/2a4C7RWe_o.jpg"]
    },
    {
        name: "014. サウナ差分",
        id: "015",
        thumbnail: "https://images2.imgbox.com/fb/91/iCnCxzsd_o.jpg",
        panels: ["https://images2.imgbox.com/d9/f0/k28OCbGg_o.jpg",
            "https://images2.imgbox.com/24/56/3IjSt7Gj_o.jpg"
        ]
    },
    {
        name: "015. サウナその後",
        id: "016",
        thumbnail: "https://images2.imgbox.com/b2/6f/ZHPdmHk6_o.jpg",
        panels: ["https://images2.imgbox.com/b2/6f/ZHPdmHk6_o.jpg"]
    },
    {
        name: "016. 生理現象",
        id: "017",
        thumbnail: "https://images2.imgbox.com/e3/4a/sBLc74nC_o.jpg",
        panels: ["https://images2.imgbox.com/5a/b9/BdN2y8i8_o.jpg"]
    },
    {
        name: "017. 合わせ",
        id: "018",
        thumbnail: "https://images2.imgbox.com/fe/2d/6kz6zKJT_o.jpg",
        panels: ["https://images2.imgbox.com/fe/2d/6kz6zKJT_o.jpg",
            "https://images2.imgbox.com/11/c6/oPRgJOoJ_o.jpg",
            "https://images2.imgbox.com/20/b5/MRfUgXH5_o.jpg"
        ]
    },
    {
        name: "018. 同人進捗",
        id: "019",
        thumbnail: "https://images2.imgbox.com/0e/51/LHGuupK2_o.jpg",
        panels: ["https://images2.imgbox.com/0e/51/LHGuupK2_o.jpg",
            "https://images2.imgbox.com/5e/b3/O1noDbqT_o.jpg"
        ]
    },
    {
        name: "019. スパッツ差分",
        id: "020",
        thumbnail: "https://images2.imgbox.com/a3/a4/75FiW1Ny_o.jpg",
        panels: ["https://images2.imgbox.com/a3/a4/75FiW1Ny_o.jpg",
            "https://images2.imgbox.com/67/1c/RNY4jvyZ_o.jpg",
            "https://images2.imgbox.com/99/61/4Rg9fjLh_o.jpg"
        ]
    },
    {
        name: "020. 陽太と差分",
        id: "021",
        thumbnail: "https://images2.imgbox.com/9b/a0/KAI8aLGc_o.png",
        panels: ["https://images2.imgbox.com/9b/a0/KAI8aLGc_o.png",
            "https://images2.imgbox.com/a1/a0/EG5Lbrtx_o.png"
        ]
    },
    {
        name: "021. 放課後",
        id: "022",
        thumbnail: "https://images2.imgbox.com/00/59/zKv5jqk0_o.png",
        panels: ["https://images2.imgbox.com/00/59/zKv5jqk0_o.png",
            "https://images2.imgbox.com/fc/ed/fPufEQ4s_o.png"
        ]
    },
    {
        name: "022. 放課後",
        id: "023",
        thumbnail: "https://images2.imgbox.com/4e/86/mSk4euUo_o.jpg",
        panels: ["https://images2.imgbox.com/4e/86/mSk4euUo_o.jpg",
            "https://images2.imgbox.com/d6/16/K13UqvMp_o.jpg"
        ]
    },
    {
        name: "023. ノーパン＋α⤴️差分",
        id: "024",
        thumbnail: "https://images2.imgbox.com/6b/35/UA88Nahu_o.jpeg",
        panels: ["https://images2.imgbox.com/6b/35/UA88Nahu_o.jpeg",
            "https://images2.imgbox.com/f2/11/b6OP3pZx_o.jpeg"
        ]
    },
    {
        name: "024. 見せびらかし",
        id: "025",
        thumbnail: "https://images2.imgbox.com/c2/e8/59b5alqG_o.jpg",
        panels: ["https://images2.imgbox.com/c2/e8/59b5alqG_o.jpg",
            "https://images2.imgbox.com/02/15/D8WVltnH_o.jpg",
            "https://images2.imgbox.com/1b/2d/6rrdOAH7_o.jpg",
            "https://images2.imgbox.com/d4/38/L5Sl1gri_o.jpg",
            "https://images2.imgbox.com/f7/47/cEs7WNI6_o.jpg"
        ]
    },
    {
        name: "025. 緊縛",
        id: "026",
        thumbnail: "https://images2.imgbox.com/84/fe/dDgq3sDf_o.jpg",
        panels: ["https://images2.imgbox.com/84/fe/dDgq3sDf_o.jpg",
            "https://images2.imgbox.com/e2/a2/SJkCnhxI_o.jpg",
            "https://images2.imgbox.com/fe/20/sGin11i1_o.jpg"
        ]
    },
    {
        name: "026. 脱ぎ差分",
        id: "027",
        thumbnail: "https://images2.imgbox.com/d7/0a/J1lPyOdN_o.jpg",
        panels: ["https://images2.imgbox.com/d7/0a/J1lPyOdN_o.jpg",
            "https://images2.imgbox.com/14/67/AM7lMSYC_o.jpg",
            "https://images2.imgbox.com/4c/27/mPnvosyA_o.jpg"
        ]
    },
    {
        name: "027. 本番",
        id: "028",
        thumbnail: "https://images2.imgbox.com/c0/24/q1mGYOJL_o.jpg",
        panels: ["https://images2.imgbox.com/c0/24/q1mGYOJL_o.jpg",
            "https://images2.imgbox.com/02/59/JPBHutuw_o.jpg",
            "https://images2.imgbox.com/e6/cd/XV7P0axJ_o.jpg",
            "https://images2.imgbox.com/f1/67/S8yti5Sr_o.jpg",
            "https://images2.imgbox.com/7c/8e/7DhmeorU_o.jpg",
            "https://images2.imgbox.com/5b/51/7zEa272m_o.jpg",
            "https://images2.imgbox.com/5b/a2/vYjGE2kc_o.jpg",
            "https://images2.imgbox.com/89/42/UEiaDnxT_o.jpg",
            "https://images2.imgbox.com/3f/c2/u73BwSwk_o.jpg"
        ]
    },
    {
        name: "028. 自撮りその後",
        id: "029",
        thumbnail: "https://images2.imgbox.com/69/34/bClqdME0_o.jpg",
        panels: ["https://images2.imgbox.com/69/34/bClqdME0_o.jpg",
            "https://images2.imgbox.com/bb/f7/PinqYQxZ_o.jpg",
            "https://images2.imgbox.com/14/09/pN3E0Yjr_o.jpg",
            "https://images2.imgbox.com/ad/4a/eyS59FMH_o.jpg"
        ]
    },
    {
        name: "029. 本番その2",
        id: "030",
        thumbnail: "https://images2.imgbox.com/21/b8/DYnUmh9p_o.jpg",
        panels: ["https://images2.imgbox.com/21/b8/DYnUmh9p_o.jpg",
            "https://images2.imgbox.com/64/27/GXlaTU9g_o.jpg",
            "https://images2.imgbox.com/8d/cd/Fc2QcO3Q_o.jpg"
        ]
    },
    {
        name: "030. 高画質+脱ぎ差分2枚",
        id: "031",
        thumbnail: "https://images2.imgbox.com/08/fc/DNQAmlHX_o.jpg",
        panels: ["https://images2.imgbox.com/08/fc/DNQAmlHX_o.jpg",
            "https://images2.imgbox.com/94/c9/A2rQiHZn_o.jpg",
            "https://images2.imgbox.com/00/98/8zHW4KVM_o.jpg"
        ]
    },
    {
        "name": "031. 小遣い稼ぎ",
        "id": "032",
        "thumbnail": "https://images2.imgbox.com/20/d6/sXGudZ66_o.jpg",
        "panels": [
            "https://images2.imgbox.com/20/d6/sXGudZ66_o.jpg",
            "https://images2.imgbox.com/fa/53/U4kpb7NI_o.jpg",
            "https://images2.imgbox.com/13/d0/Wc6pGQwV_o.jpg",
            "https://images2.imgbox.com/dc/e7/lWekJD42_o.jpg"
        ]
    },
    {
        "name": "032. 高画質＋脱ぎ差分",
        "id": "033",
        "thumbnail": "https://images2.imgbox.com/2c/5f/XeUDtDiT_o.jpg",
        "panels": [
            "https://images2.imgbox.com/2c/5f/XeUDtDiT_o.jpg",
            "https://images2.imgbox.com/d0/d8/ALdGSLpX_o.jpg",
            "https://images2.imgbox.com/94/2a/fZs4OmMH_o.jpg",
            "https://images2.imgbox.com/a8/4d/0yVYAAY0_o.jpg",
            "https://images2.imgbox.com/72/36/jSDUsGCA_o.jpg"
        ]
    },
    {
        "name": "033. 高画質＋差分3枚",
        "id": "034",
        "thumbnail": "https://images2.imgbox.com/d0/e1/CBWgJQ88_o.jpg",
        "panels": [
            "https://images2.imgbox.com/d0/e1/CBWgJQ88_o.jpg",
            "https://images2.imgbox.com/7b/d2/UTy6svqN_o.jpg",
            "https://images2.imgbox.com/0b/b2/JipjK1la_o.jpg",
            "https://images2.imgbox.com/72/dd/1PPPiBz8_o.jpg",
            "https://images2.imgbox.com/d0/8e/bv9qZl5V_o.jpg"
        ]
    },
    {
        "name": "034. ダボピチ差分色々",
        "id": "035",
        "thumbnail": "https://images2.imgbox.com/46/c6/8CDuJOIX_o.jpg",
        "panels": [
            "https://images2.imgbox.com/46/c6/8CDuJOIX_o.jpg",
            "https://images2.imgbox.com/f8/f1/dNMb9jWg_o.jpg",
            "https://images2.imgbox.com/dc/83/f9oi96kw_o.jpg",
            "https://images2.imgbox.com/eb/3d/8iwTUMzP_o.jpg",
            "https://images2.imgbox.com/cc/f1/xbaIlw2u_o.jpg",
            "https://images2.imgbox.com/52/c5/iPf08tfU_o.jpg",
            "https://images2.imgbox.com/16/5c/XLD47ely_o.jpg"
        ]
    },
    {
        "name": "035. 開発済み差分",
        "id": "036",
        "thumbnail": "https://images2.imgbox.com/98/c0/hHU0mWfJ_o.jpg",
        "panels": [
            "https://images2.imgbox.com/98/c0/hHU0mWfJ_o.jpg",
            "https://images2.imgbox.com/05/d6/Zef1POE2_o.jpg",
            "https://images2.imgbox.com/81/f8/KL9KD7rx_o.jpg",
            "https://images2.imgbox.com/49/07/TVg1rK53_o.jpg",
            "https://images2.imgbox.com/ac/7b/5vWT9exq_o.jpg",
            "https://images2.imgbox.com/fa/34/NWbNxwzY_o.jpg"
        ]
    },
    {
        "name": "036. 軽さ差分色々",
        "id": "037",
        "thumbnail": "https://images2.imgbox.com/77/22/Jysq9Kkh_o.jpg",
        "panels": [
            "https://images2.imgbox.com/77/22/Jysq9Kkh_o.jpg",
            "https://images2.imgbox.com/e9/f8/hCD5CjN4_o.jpg",
            "https://images2.imgbox.com/82/8c/w50mA3rA_o.jpg",
            "https://images2.imgbox.com/5a/7c/5u9cZmkz_o.jpg",
            "https://images2.imgbox.com/31/0b/5rvS60sB_o.jpg",
            "https://images2.imgbox.com/a6/86/72fUCtjp_o.jpg",
            "https://images2.imgbox.com/63/9b/NLwH4bMk_o.jpg"
        ]
    },
    {
        "name": "037. 寝起き差分",
        "id": "038",
        "thumbnail": "https://images2.imgbox.com/38/b4/ZxczrVBH_o.jpg",
        "panels": [
            "https://images2.imgbox.com/38/b4/ZxczrVBH_o.jpg",
            "https://images2.imgbox.com/db/60/CR37yYch_o.jpg",
            "https://images2.imgbox.com/cc/cd/2EQgByhF_o.jpg",
            "https://images2.imgbox.com/f5/e1/QipJa61Q_o.jpg",
            "https://images2.imgbox.com/5d/37/llpreBkO_o.jpg",
            "https://images2.imgbox.com/64/ff/VfkGJ3ac_o.jpg",
            "https://images2.imgbox.com/31/26/N69n4Ac6_o.jpg"
        ]
    },
    {
        "name": "038. 着ながらプレイ差分",
        "id": "039",
        "thumbnail": "https://images2.imgbox.com/68/aa/Yz9Rz346_o.jpg",
        "panels": [
            "https://images2.imgbox.com/68/aa/Yz9Rz346_o.jpg",
            "https://images2.imgbox.com/bb/69/CqniHfGI_o.jpg",
            "https://images2.imgbox.com/a3/cf/DGphZEy4_o.jpg",
            "https://images2.imgbox.com/85/2d/QudmVkIp_o.jpg",
            "https://images2.imgbox.com/ad/32/qRgVjeCn_o.jpg",
            "https://images2.imgbox.com/71/bc/08aJlXoA_o.jpg",
            "https://images2.imgbox.com/9b/a0/25974pqM_o.jpg",
            "https://images2.imgbox.com/29/9d/0iboAA6o_o.jpg",
            "https://images2.imgbox.com/9b/a0/25974pqM_o.jpg"
        ]
    },
    {
        "name": "039. シャツ脱ぎ差分",
        "id": "040",
        "thumbnail": "https://images2.imgbox.com/25/98/W4FOK0fN_o.jpg",
        "panels": [
            "https://images2.imgbox.com/25/98/W4FOK0fN_o.jpg"
        ]
    },
    {
        "name": "040. ぺろり差分",
        "id": "041",
        "thumbnail": "https://images2.imgbox.com/fa/23/oEVUCy3p_o.jpg",
        "panels": [
            "https://images2.imgbox.com/fa/23/oEVUCy3p_o.jpg",
            "https://images2.imgbox.com/41/18/EIIfFxA5_o.jpg",
            "https://images2.imgbox.com/95/2b/94EmdjXd_o.jpg",
            "https://images2.imgbox.com/1f/84/wXLgvVyG_o.jpg",
            "https://images2.imgbox.com/92/35/7ZUDk2h4_o.jpg",
            "https://images2.imgbox.com/74/00/9jDB8yuH_o.jpg"
        ]
    },
    {
        "name": "041. 褌追加差分＋文字無し",
        "id": "042",
        "thumbnail": "https://images2.imgbox.com/da/a3/sBN6v3eJ_o.jpg",
        "panels": [
            "https://images2.imgbox.com/da/a3/sBN6v3eJ_o.jpg",
            "https://images2.imgbox.com/b4/8d/xa81Yvkd_o.jpg",
            "https://images2.imgbox.com/7f/f2/7RpFGs8z_o.jpg",
            "https://images2.imgbox.com/f7/b9/wd9DHqx4_o.jpg",
            "https://images2.imgbox.com/b4/12/ZrKrZ2X5_o.jpg",
            "https://images2.imgbox.com/23/fc/Xw7h3z1m_o.jpg",
            "https://images2.imgbox.com/25/e5/Al36T4sN_o.jpg",
            "https://images2.imgbox.com/28/33/H9P1ZKzn_o.jpg"
        ]
    },
    {
        "name": "042. 褌その後",
        "id": "043",
        "thumbnail": "https://images2.imgbox.com/6a/ee/t5ocAVN5_o.jpg",
        "panels": [
            "https://images2.imgbox.com/6a/ee/t5ocAVN5_o.jpg",
            "https://images2.imgbox.com/08/7e/WHLUfTKs_o.jpg",
            "https://images2.imgbox.com/44/e2/cnjyAeO3_o.jpg",
            "https://images2.imgbox.com/cd/9f/NWSaSKxw_o.jpg",
            "https://images2.imgbox.com/aa/cf/OuyiBGJe_o.jpg"
        ]
    },
    {
        "name": "043. 陽キャ君差分",
        "id": "044",
        "thumbnail": "https://images2.imgbox.com/f1/b9/YhMDskGr_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/f1/b9/YhMDskGr_o.jpeg",
            "https://images2.imgbox.com/61/62/vra7qSXE_o.jpeg",
            "https://images2.imgbox.com/22/9d/pFxnigY4_o.jpeg",
            "https://images2.imgbox.com/5c/07/cXW9si6m_o.jpeg",
            "https://images2.imgbox.com/36/ce/S4Xq55yV_o.jpeg",
            "https://images2.imgbox.com/30/de/5Rqm4ZEj_o.jpeg",
            "https://images2.imgbox.com/8a/31/RRisBzY7_o.jpeg"
        ]
    },
    {
        "name": "044. バックから差分",
        "id": "045",
        "thumbnail": "https://images2.imgbox.com/9d/a4/HaHthICk_o.jpg",
        "panels": [
            "https://images2.imgbox.com/9d/a4/HaHthICk_o.jpg",
            "https://images2.imgbox.com/d4/5c/Hsg0SXDP_o.jpg",
            "https://images2.imgbox.com/68/a8/6HfSQkLS_o.jpg",
            "https://images2.imgbox.com/12/d9/DDFmSOBr_o.jpg",
            "https://images2.imgbox.com/51/80/6tIB5dQT_o.jpg",
            "https://images2.imgbox.com/5f/cd/cT81K8jC_o.jpg",
            "https://images2.imgbox.com/ec/45/cHx9C37x_o.jpg",
            "https://images2.imgbox.com/34/0e/KMzGuGfg_o.jpg",
            "https://images2.imgbox.com/67/7f/pCMQ9c6q_o.jpg",
            "https://images2.imgbox.com/ba/24/fUEj8F61_o.jpg"
        ]
    },
    {
        "name": "045. 続着ながらプレイ差分",
        "id": "046",
        "thumbnail": "https://images2.imgbox.com/90/de/ED8cMZ47_o.jpg",
        "panels": [
            "https://images2.imgbox.com/90/de/ED8cMZ47_o.jpg",
            "https://images2.imgbox.com/e1/da/wllN08ak_o.jpg",
            "https://images2.imgbox.com/7a/69/8k1lOxZ8_o.jpg",
            "https://images2.imgbox.com/03/a2/ZnI0F4Yl_o.jpg",
            "https://images2.imgbox.com/61/a7/aHZlTYOy_o.jpg",
            "https://images2.imgbox.com/93/16/T7EceaOs_o.jpg",
            "https://images2.imgbox.com/df/4b/mPygap8u_o.jpg",
            "https://images2.imgbox.com/d9/3e/9ay4w0uU_o.jpg",
            "https://images2.imgbox.com/6b/09/51kjTrNR_o.jpg"
        ]
    },
    {
        "name": "046. 体育倉庫にて…（差分）",
        "id": "047",
        "thumbnail": "https://images2.imgbox.com/43/22/21IQ3ZJE_o.jpg",
        "panels": [
            "https://images2.imgbox.com/43/22/21IQ3ZJE_o.jpg",
            "https://images2.imgbox.com/2b/02/LnPwjlW3_o.jpg",
            "https://images2.imgbox.com/53/03/2q3PDMCN_o.jpg",
            "https://images2.imgbox.com/d5/06/ueaEF2dl_o.jpg",
            "https://images2.imgbox.com/19/2e/44Z7gDiw_o.jpg"
        ]
    },
    {
        "name": "047 丸見え差分",
        "id": "048",
        "thumbnail": "https://images2.imgbox.com/1d/2d/DO3ACkf7_o.jpg",
        "panels": [
            "https://images2.imgbox.com/1d/2d/DO3ACkf7_o.jpg",
            "https://images2.imgbox.com/c3/91/PLOh2GJM_o.jpg",
            "https://images2.imgbox.com/a0/c9/wRhkOKFM_o.jpg",
            "https://images2.imgbox.com/fa/04/SIJsCqXz_o.jpg",
            "https://images2.imgbox.com/c3/40/8lpip1G2_o.jpg",
            "https://images2.imgbox.com/88/a8/iTHzrYQi_o.jpg",
            "https://images2.imgbox.com/fc/0a/6DMXbXfC_o.jpg",
            "https://images2.imgbox.com/50/6e/uM4vwHAS_o.jpg"
        ]
    },
    {
        "name": "048. 暑中見舞い差分",
        "id": "049",
        "thumbnail": "https://images2.imgbox.com/cf/d5/9asvIcBR_o.jpg",
        "panels": [
            "https://images2.imgbox.com/cf/d5/9asvIcBR_o.jpg",
            "https://images2.imgbox.com/89/87/NJ2xJg21_o.jpg",
            "https://images2.imgbox.com/2a/15/EmZxXrzr_o.jpg",
            "https://images2.imgbox.com/38/2a/7XAZLnAU_o.jpg"
        ]
    },
    {
        "name": "049. 拘束責め",
        "id": "050",
        "thumbnail": "https://images2.imgbox.com/16/42/C9OSqk4E_o.jpg",
        "panels": [
            "https://images2.imgbox.com/16/42/C9OSqk4E_o.jpg",
            "https://images2.imgbox.com/3b/59/08m4ZI2r_o.jpg",
            "https://images2.imgbox.com/73/77/G3nE3whd_o.jpg",
            "https://images2.imgbox.com/18/6f/6r8RCeoF_o.jpg",
            "https://images2.imgbox.com/2e/f0/2RgWnXnz_o.jpg",
            "https://images2.imgbox.com/ad/3d/5991fA1u_o.jpg",
            "https://images2.imgbox.com/63/54/robg677s_o.jpg",
            "https://images2.imgbox.com/24/6f/9nU5MuAL_o.jpg",
            "https://images2.imgbox.com/23/0f/kpMu42D0_o.jpg",
            "https://images2.imgbox.com/49/e6/xKHpYsWM_o.jpg",
            "https://images2.imgbox.com/32/ab/FbIPiWej_o.jpg",
            "https://images2.imgbox.com/22/d4/QcIA7P4k_o.jpg",
            "https://images2.imgbox.com/a8/39/LAkJohZB_o.jpg",
            "https://images2.imgbox.com/8f/8f/6kqzth3g_o.jpg",
            "https://images2.imgbox.com/45/10/mOTfMr9L_o.jpg"
        ]
    },
    {
        "name": "050. 脚癖差分",
        "id": "051",
        "thumbnail": "https://images2.imgbox.com/74/98/vB3xNbqB_o.jpg",
        "panels": [
            "https://images2.imgbox.com/74/98/vB3xNbqB_o.jpg",
            "https://images2.imgbox.com/20/a6/rxs8vMyj_o.jpg",
            "https://images2.imgbox.com/20/a6/rxs8vMyj_o.jpg",
            "https://images2.imgbox.com/12/59/hGJ03Dk0_o.jpg",
            "https://images2.imgbox.com/0e/f1/j3YCbBJs_o.jpg",
            "https://images2.imgbox.com/5a/a4/uGMfhPrW_o.jpg",
            "https://images2.imgbox.com/ad/73/VFMkLyY0_o.jpg",
            "https://images2.imgbox.com/f8/8d/uI2Tq1RO_o.jpg",
            "https://images2.imgbox.com/04/ca/DkA3PTmG_o.jpg",
            "https://images2.imgbox.com/52/ed/rQdfYFYA_o.jpg"
        ]
    },
    {
        "name": "051. トレ終差分",
        "id": "052",
        "thumbnail": "https://images2.imgbox.com/84/cb/0mNev4Wc_o.jpg",
        "panels": [
            "https://images2.imgbox.com/84/cb/0mNev4Wc_o.jpg",
            "https://images2.imgbox.com/a4/91/bSd1tPao_o.jpg",
            "https://images2.imgbox.com/70/79/reJfyJiv_o.jpg",
            "https://images2.imgbox.com/7a/7a/jYu1DyHD_o.jpg",
            "https://images2.imgbox.com/d1/a7/h60wiFeb_o.jpg",
            "https://images2.imgbox.com/1f/8a/Kv0iBAak_o.jpg"
        ]
    },
    {
        "name": "052. シャワールーム続き＋差分",
        "id": "053",
        "thumbnail": "https://images2.imgbox.com/d6/34/oJ9Zm75p_o.jpg",
        "panels": [
            "https://images2.imgbox.com/d6/34/oJ9Zm75p_o.jpg",
            "https://images2.imgbox.com/29/54/nIrutwAV_o.jpg",
            "https://images2.imgbox.com/d8/fc/Wgv5UaZG_o.jpg",
            "https://images2.imgbox.com/b7/f7/iI11BhM6_o.jpg",
            "https://images2.imgbox.com/8e/83/4Twwir3R_o.jpg",
            "https://images2.imgbox.com/0d/47/qtSnstQe_o.jpg",
            "https://images2.imgbox.com/e2/58/E3T2gbYS_o.jpg",
            "https://images2.imgbox.com/4c/69/aW1FdZJm_o.jpg",
            "https://images2.imgbox.com/dd/9b/PlNlqnah_o.jpg",
            "https://images2.imgbox.com/66/02/808pj21h_o.jpg",
            "https://images2.imgbox.com/f8/b0/75Z6ROec_o.jpg",
            "https://images2.imgbox.com/7a/c0/N64v9d06_o.jpg",
            "https://images2.imgbox.com/7e/13/RW23UV5y_o.jpg",
            "https://images2.imgbox.com/fd/94/HfkNM6QT_o.jpg",
            "https://images2.imgbox.com/8d/67/P3TXufP5_o.jpg",
            "https://images2.imgbox.com/8d/5f/BbEOOMas_o.jpg",
            "https://images2.imgbox.com/fa/fe/qLfPa0mH_o.jpg",
            "https://images2.imgbox.com/c3/58/fCbU9UWK_o.jpg"
        ]
    },
    {
        "name": "053.  一人遊び差分",
        "id": "054",
        "thumbnail": "https://images2.imgbox.com/04/00/IL7xEY2l_o.jpg",
        "panels": [
            "https://images2.imgbox.com/04/00/IL7xEY2l_o.jpg",
            "https://images2.imgbox.com/b9/f7/MA4DPcCv_o.jpg",
            "https://images2.imgbox.com/3d/05/8qaU5MBK_o.jpg",
            "https://images2.imgbox.com/4e/9f/VykdSicb_o.jpg",
            "https://images2.imgbox.com/e7/d4/sDhgepyT_o.jpg",
            "https://images2.imgbox.com/f0/59/v7OvXSfW_o.jpg",
            "https://images2.imgbox.com/8f/b6/fkhqk7YH_o.jpg",
            "https://images2.imgbox.com/20/71/z6NPMTMj_o.jpg",
            "https://images2.imgbox.com/2a/87/2ZktkiKE_o.jpg",
            "https://images2.imgbox.com/e3/e4/jkJpr8Wz_o.jpg",
            "https://images2.imgbox.com/1e/89/XiJMV68W_o.jpg",
            "https://images2.imgbox.com/d9/ab/0LhDiREw_o.jpg"
        ]
    },
    {
        "name": "054. ぴーす差分",
        "id": "055",
        "thumbnail": "https://images2.imgbox.com/78/88/VbwkxCgt_o.jpg",
        "panels": [
            "https://images2.imgbox.com/78/88/VbwkxCgt_o.jpg",
            "https://images2.imgbox.com/88/19/MhocyRAh_o.jpg",
            "https://images2.imgbox.com/a8/0d/FGWwkmX6_o.jpg",
            "https://images2.imgbox.com/e6/b5/dtW08UFl_o.jpg",
            "https://images2.imgbox.com/38/e0/ZDA3mmeJ_o.jpg",
            "https://images2.imgbox.com/54/f8/VvZyiR34_o.jpg",
            "https://images2.imgbox.com/3b/48/1Sq7LINZ_o.jpg",
            "https://images2.imgbox.com/2e/63/5OiHs6Df_o.jpg",
            "https://images2.imgbox.com/07/ef/Xxg7rGRd_o.jpg",
            "https://images2.imgbox.com/8e/bf/lUszEyzV_o.jpg"
        ]
    },
    {
        "name": "055. 合わせっこ差分",
        "id": "056",
        "thumbnail": "https://images2.imgbox.com/6f/5e/alLVI7I5_o.jpg",
        "panels": [
            "https://images2.imgbox.com/6f/5e/alLVI7I5_o.jpg",
            "https://images2.imgbox.com/f1/0c/EWO9xtUp_o.jpg",
            "https://images2.imgbox.com/48/73/0UPfAeoI_o.jpg",
            "https://images2.imgbox.com/0a/c7/MIYwfzNb_o.jpg",
            "https://images2.imgbox.com/b1/46/JOccqBiu_o.jpg",
            "https://images2.imgbox.com/1d/7c/QjeuAuGF_o.jpg",
            "https://images2.imgbox.com/a5/e6/XADJcI7j_o.jpg"
        ]
    },
    {
        "name": "056. 座位差分＋",
        "id": "057",
        "thumbnail": "https://images2.imgbox.com/1b/5c/Vyes4OHv_o.jpg",
        "panels": [
            "https://images2.imgbox.com/1b/5c/Vyes4OHv_o.jpg",
            "https://images2.imgbox.com/13/d3/IqDRu4uj_o.jpg",
            "https://images2.imgbox.com/06/b8/Go1rzVao_o.jpg",
            "https://images2.imgbox.com/1f/b8/1b74bY7f_o.jpg",
            "https://images2.imgbox.com/92/bf/Qj29FSpM_o.jpg",
            "https://images2.imgbox.com/25/9c/aEPlaslc_o.jpg",
            "https://images2.imgbox.com/bf/12/RA0E4D6M_o.jpg",
            "https://images2.imgbox.com/f2/ff/O8PC6tCr_o.jpg",
            "https://images2.imgbox.com/e5/f4/Ief8MAXE_o.jpg",
            "https://images2.imgbox.com/d8/0d/8rwjUMgh_o.jpg",
            "https://images2.imgbox.com/0c/44/waZdBmKO_o.jpg"
        ]
    },
    {
        "name": "057. 個室でふたり差分",
        "id": "058",
        "thumbnail": "https://images2.imgbox.com/69/ab/9d9hxjhN_o.jpg",
        "panels": [
            "https://images2.imgbox.com/69/ab/9d9hxjhN_o.jpg",
            "https://images2.imgbox.com/65/04/SPMknYUL_o.jpg",
            "https://images2.imgbox.com/b0/72/fb0iotwd_o.jpg",
            "https://images2.imgbox.com/30/35/9gD5o6fd_o.jpg",
            "https://images2.imgbox.com/fc/b2/mcigz5fc_o.jpg",
            "https://images2.imgbox.com/d0/45/Pz8G3Jo8_o.jpg",
            "https://images2.imgbox.com/3c/40/MUNVeBTG_o.jpg",
            "https://images2.imgbox.com/79/0c/9Q6QLtE0_o.jpg",
            "https://images2.imgbox.com/39/c9/ekkrpbp6_o.jpg",
            "https://images2.imgbox.com/3c/59/CTI3Usm1_o.jpg",
            "https://images2.imgbox.com/5c/6b/lgIpZP3K_o.jpg",
            "https://images2.imgbox.com/97/3e/qsMGxVTd_o.jpg",
            "https://images2.imgbox.com/72/da/McfMwWYC_o.jpg",
            "https://images2.imgbox.com/c1/29/72SZFnPK_o.jpg",
            "https://images2.imgbox.com/3d/4d/DQvetuoZ_o.jpg"
        ]
    },
    {
        "name": "058. ゲームオーバー差分",
        "id": "059",
        "thumbnail": "https://images2.imgbox.com/25/53/fkrdbrbc_o.jpg",
        "panels": [
            "https://images2.imgbox.com/25/53/fkrdbrbc_o.jpg",
            "https://images2.imgbox.com/c7/eb/U7aGdG5F_o.jpg",
            "https://images2.imgbox.com/00/3f/mEt0ftzY_o.jpg",
            "https://images2.imgbox.com/e3/a6/n3lsyGEs_o.jpg",
            "https://images2.imgbox.com/4d/2f/YiJ3iKtg_o.jpg",
            "https://images2.imgbox.com/09/c9/2SPGXF71_o.jpg"
        ]
    },
    {
        "name": "059. 卯と寅差分",
        "id": "060",
        "thumbnail": "https://images2.imgbox.com/59/ab/J6pGOUyZ_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/59/ab/J6pGOUyZ_o.jpeg",
            "https://images2.imgbox.com/c7/e4/STCTM8T1_o.jpeg",
            "https://images2.imgbox.com/a3/9b/wcCN4P8K_o.jpeg",
            "https://images2.imgbox.com/7c/01/9TxPpfpK_o.jpeg",
            "https://images2.imgbox.com/0d/3e/8GUPEkub_o.jpeg"
        ]
    },
    {
        "name": "060. 陸上部くんの日常",
        "id": "061",
        "thumbnail": "https://images2.imgbox.com/1d/6e/pavdbXcJ_o.jpg",
        "panels": [
            "https://images2.imgbox.com/1d/6e/pavdbXcJ_o.jpg",
            "https://images2.imgbox.com/54/0b/c8IYbxQv_o.jpg",
            "https://images2.imgbox.com/0b/b5/MUz4KZr1_o.jpg",
            "https://images2.imgbox.com/be/fb/tACCAcoc_o.jpg",
            "https://images2.imgbox.com/76/83/qCAL4Sm3_o.jpg",
            "https://images2.imgbox.com/c0/b8/UvVcB2gQ_o.jpg",
            "https://images2.imgbox.com/5e/32/WucfcX0p_o.jpg",
            "https://images2.imgbox.com/a7/a2/llAO0fSm_o.jpg",
            "https://images2.imgbox.com/99/22/664uym0f_o.jpg",
            "https://images2.imgbox.com/53/c8/qZD5ab5f_o.jpg",
            "https://images2.imgbox.com/3f/c3/tKGn4VwB_o.jpg",
            "https://images2.imgbox.com/e4/2d/wQ7XeXbW_o.jpg",
            "https://images2.imgbox.com/66/c4/PC9V3mRQ_o.jpg",
            "https://images2.imgbox.com/cb/62/Nahqm9I0_o.jpg"
        ]
    },
    {
        "name": "061. ショ○おに差分",
        "id": "062",
        "thumbnail": "https://images2.imgbox.com/af/31/LwuSETKR_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/af/31/LwuSETKR_o.jpeg",
            "https://images2.imgbox.com/59/e9/uNN88p3E_o.jpeg",
            "https://images2.imgbox.com/6e/33/Ci8lgnGy_o.jpeg",
            "https://images2.imgbox.com/75/5f/kUiudL4J_o.jpeg"
        ]
    },
    {
        "name": "062. 陸上部くんの日常その２",
        "id": "063",
        "thumbnail": "https://images2.imgbox.com/0c/8b/73K8cnOk_o.jpg",
        "panels": [
            "https://images2.imgbox.com/0c/8b/73K8cnOk_o.jpg",
            "https://images2.imgbox.com/c8/83/82BL076B_o.jpg",
            "https://images2.imgbox.com/db/ed/T1UVikMG_o.jpg",
            "https://images2.imgbox.com/5f/4f/QTdu5uEe_o.jpg",
            "https://images2.imgbox.com/ae/5f/H9roD5bE_o.jpg",
            "https://images2.imgbox.com/ba/e6/UsO5xeS9_o.jpg",
            "https://images2.imgbox.com/7a/4d/pNmXIx3e_o.jpg",
            "https://images2.imgbox.com/e0/2b/cmP3Fsih_o.jpg",
            "https://images2.imgbox.com/05/09/2dDa6Kw0_o.jpg",
            "https://images2.imgbox.com/db/7d/HUAXVASi_o.jpg",
            "https://images2.imgbox.com/5b/c2/0xSLbCW6_o.jpg",
            "https://images2.imgbox.com/7e/c9/6XzBJzZz_o.jpg",
            "https://images2.imgbox.com/f7/3b/Jby7zZEZ_o.jpg",
            "https://images2.imgbox.com/41/42/mUqrhOwG_o.jpg",
            "https://images2.imgbox.com/5d/5e/5hUhqtZi_o.jpg",
            "https://images2.imgbox.com/ae/00/Ibn50b1g_o.jpg",
            "https://images2.imgbox.com/ef/8d/aqYTOILr_o.jpg",
            "https://images2.imgbox.com/16/ba/QenjkwGG_o.jpg",
            "https://images2.imgbox.com/38/e6/Ray0aEQH_o.jpg",
            "https://images2.imgbox.com/b8/93/Ojb8lpIt_o.jpg",
            "https://images2.imgbox.com/ba/90/B4rshtED_o.jpg",
            "https://images2.imgbox.com/ec/ec/rerAP6VM_o.jpg",
            "https://images2.imgbox.com/9a/a5/WgPN2vY0_o.jpg",
            "https://images2.imgbox.com/a2/ed/xt9VNBI7_o.jpg",
            "https://images2.imgbox.com/d1/f0/eQjwbn8K_o.jpg"
        ]
    },
    {
        "name": "063. 野球少年差分",
        "id": "064",
        "thumbnail": "https://images2.imgbox.com/01/f6/czE321z2_o.jpg",
        "panels": [
            "https://images2.imgbox.com/01/f6/czE321z2_o.jpg",
            "https://images2.imgbox.com/2b/a8/OaCcQnL7_o.jpg",
            "https://images2.imgbox.com/99/7b/9EodTp9e_o.jpg",
            "https://images2.imgbox.com/ea/fe/HH25KwW9_o.jpg",
            "https://images2.imgbox.com/62/5d/UUGepO0t_o.jpg",
            "https://images2.imgbox.com/aa/1e/OBPKXoSB_o.jpg",
            "https://images2.imgbox.com/96/98/Y8kZtCx2_o.jpg",
            "https://images2.imgbox.com/19/bd/FbgAYQRu_o.jpg"
        ]
    },
    {
        "name": "064. 寝起き差分",
        "id": "065",
        "thumbnail": "https://images2.imgbox.com/4a/e3/jHXS4j1W_o.jpg",
        "panels": [
            "https://images2.imgbox.com/4a/e3/jHXS4j1W_o.jpg",
            "https://images2.imgbox.com/8d/5c/UJNwJGiG_o.jpg",
            "https://images2.imgbox.com/6f/48/PLo2XUIi_o.jpg",
            "https://images2.imgbox.com/f3/8e/E8B99Srj_o.jpg",
            "https://images2.imgbox.com/da/4f/F4h9Vzfk_o.jpg",
            "https://images2.imgbox.com/b5/9f/L3K8WyKX_o.jpg"
        ]
    },
    {
        "name": "065. 後ろから弄り差分",
        "id": "066",
        "thumbnail": "https://images2.imgbox.com/cd/5a/X1zFWg1o_o.jpg",
        "panels": [
            "https://images2.imgbox.com/cd/5a/X1zFWg1o_o.jpg",
            "https://images2.imgbox.com/35/46/LRFrGEQ8_o.jpg",
            "https://images2.imgbox.com/da/29/oaqRUNOS_o.jpg",
            "https://images2.imgbox.com/21/9d/ytUhLICG_o.jpg",
            "https://images2.imgbox.com/a1/db/aEGswGAQ_o.jpg",
            "https://images2.imgbox.com/3d/ca/OCLvnICd_o.jpg",
            "https://images2.imgbox.com/ea/dc/KncXKjYa_o.jpg",
            "https://images2.imgbox.com/ea/6d/cI5XmTM4_o.jpg",
            "https://images2.imgbox.com/e2/eb/TntFu2jk_o.jpg",
            "https://images2.imgbox.com/3f/3c/5sTTh4Hl_o.jpg",
            "https://images2.imgbox.com/28/ba/EgH1DTOU_o.jpg",
            "https://images2.imgbox.com/9c/90/yTu9LhHd_o.jpg",
            "https://images2.imgbox.com/e8/b1/MsLdwhB3_o.jpg"
        ]
    },
    {
        "name": "066. 陸上部くんの日常その３",
        "id": "067",
        "thumbnail": "https://images2.imgbox.com/e1/2d/dQuqopNx_o.jpg",
        "panels": [
            "https://images2.imgbox.com/e1/2d/dQuqopNx_o.jpg",
            "https://images2.imgbox.com/5e/fa/siT9DdXc_o.jpg",
            "https://images2.imgbox.com/09/25/ARRiuNK6_o.jpg",
            "https://images2.imgbox.com/7b/5b/6r1AsH7U_o.jpg",
            "https://images2.imgbox.com/bc/2b/sAHYB6gf_o.jpg",
            "https://images2.imgbox.com/e3/66/88ZeVXc0_o.jpg",
            "https://images2.imgbox.com/f3/42/sxCUdxU7_o.jpg",
            "https://images2.imgbox.com/cf/d4/77j5pOoa_o.jpg",
            "https://images2.imgbox.com/e5/51/gBHFtTBV_o.jpg",
            "https://images2.imgbox.com/a6/e6/VGjIzpKS_o.jpg",
            "https://images2.imgbox.com/a5/1d/Y3pcX72d_o.jpg",
            "https://images2.imgbox.com/df/05/xzJuiVYJ_o.jpg",
            "https://images2.imgbox.com/e1/8e/u1yo1NWj_o.jpg",
            "https://images2.imgbox.com/b9/10/wRZB4szQ_o.jpg",
            "https://images2.imgbox.com/be/d6/5G4H35v7_o.jpg",
            "https://images2.imgbox.com/d5/c0/Hrd4A9Hs_o.jpg",
            "https://images2.imgbox.com/b1/dc/LOQLFDps_o.jpg",
            "https://images2.imgbox.com/ca/d2/d92yc0wX_o.jpg"
        ]
    },
    {
        "name": "067. ロード男子",
        "id": "068",
        "thumbnail": "https://images2.imgbox.com/eb/8c/WppSeiAY_o.jpg",
        "panels": [
            "https://images2.imgbox.com/eb/8c/WppSeiAY_o.jpg",
            "https://images2.imgbox.com/b8/6a/91PCUVde_o.jpg",
            "https://images2.imgbox.com/00/95/o73mnEuj_o.jpg",
            "https://images2.imgbox.com/64/ff/8pK3QtYS_o.jpg",
            "https://images2.imgbox.com/62/6d/wJzgZ7XE_o.jpg",
            "https://images2.imgbox.com/a0/8d/OBVeLd9u_o.jpg",
            "https://images2.imgbox.com/19/17/j5mUo3QK_o.jpg"
        ]
    },
    {
        "name": "068. おにシ◯タ",
        "id": "069",
        "thumbnail": "https://images2.imgbox.com/eb/49/IvXwMeLX_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/eb/49/IvXwMeLX_o.jpeg",
            "https://images2.imgbox.com/db/90/WTYoeOdV_o.jpeg",
            "https://images2.imgbox.com/d1/d2/OXMVqUsB_o.jpeg",
            "https://images2.imgbox.com/a1/71/qWXEeJ0F_o.jpeg",
            "https://images2.imgbox.com/fa/4d/SL4ruTQ8_o.jpeg",
            "https://images2.imgbox.com/5b/4f/U82c8koO_o.jpeg",
            "https://images2.imgbox.com/36/f1/rPbdAl0e_o.jpeg"
        ]
    },
    {
        "name": "069. 冒険の末路差分",
        "id": "070",
        "thumbnail": "https://images2.imgbox.com/06/fd/DPnDhbke_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/06/fd/DPnDhbke_o.jpeg",
            "https://images2.imgbox.com/ce/c5/IyyYEX4Y_o.jpeg",
            "https://images2.imgbox.com/a0/15/HDlmFaUp_o.jpeg",
            "https://images2.imgbox.com/36/8e/pAxpKvE2_o.jpeg",
            "https://images2.imgbox.com/5e/7d/hrdkONZT_o.jpeg",
            "https://images2.imgbox.com/7f/77/iGaS9c5A_o.jpeg",
            "https://images2.imgbox.com/d7/ef/kbp1PokR_o.jpeg",
            "https://images2.imgbox.com/66/02/X1VKaAAr_o.jpeg",
            "https://images2.imgbox.com/02/5d/NP9T6xgb_o.jpeg",
            "https://images2.imgbox.com/91/aa/dUVXwUll_o.jpeg",
            "https://images2.imgbox.com/49/55/XIElAalK_o.jpeg",
            "https://images2.imgbox.com/e4/d7/9D1x67De_o.jpeg",
            "https://images2.imgbox.com/8a/d9/iXUIyFUi_o.jpeg"
        ]
    },
    {
        "name": "070. 暑中見舞い",
        "id": "071",
        "thumbnail": "https://images2.imgbox.com/a1/9e/SPunbx4K_o.jpg",
        "panels": [
            "https://images2.imgbox.com/a1/9e/SPunbx4K_o.jpg",
            "https://images2.imgbox.com/71/df/eVPqkE8w_o.jpg",
            "https://images2.imgbox.com/33/5f/mq8wgFsl_o.jpg",
            "https://images2.imgbox.com/82/6a/5IiclGdT_o.jpg"
        ]
    },
    {
        "name": "071. 避暑差分",
        "id": "072",
        "thumbnail": "https://images2.imgbox.com/16/ba/D7VBguoq_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/16/ba/D7VBguoq_o.jpeg",
            "https://images2.imgbox.com/bf/da/gmp7OTnt_o.jpeg",
            "https://images2.imgbox.com/32/ce/pwxF51h7_o.jpeg",
            "https://images2.imgbox.com/d1/b4/zE2Udwrx_o.jpeg",
            "https://images2.imgbox.com/27/d7/o7Zu1mhm_o.jpeg",
            "https://images2.imgbox.com/a4/de/XnLMDvFJ_o.jpeg",
            "https://images2.imgbox.com/db/c0/klxNe75F_o.jpeg",
            "https://images2.imgbox.com/59/d8/ck57Z9vu_o.jpeg",
            "https://images2.imgbox.com/30/aa/7EjlHjHl_o.jpeg",
            "https://images2.imgbox.com/e9/c0/R8WZRwa4_o.jpeg",
            "https://images2.imgbox.com/e9/c0/R8WZRwa4_o.jpeg",
            "https://images2.imgbox.com/98/98/GvnEyHrI_o.jpeg",
            "https://images2.imgbox.com/91/37/mCjaWvcj_o.jpeg",
            "https://images2.imgbox.com/40/e9/wUGOyPPe_o.jpeg",
            "https://images2.imgbox.com/14/8e/0dOWKiMg_o.jpeg"
        ]
    },
    {
        "name": "072. トロピカル差分",
        "id": "073",
        "thumbnail": "https://images2.imgbox.com/90/e7/eFQ0bmAO_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/90/e7/eFQ0bmAO_o.jpeg",
            "https://images2.imgbox.com/92/60/orv73Uxs_o.jpeg",
            "https://images2.imgbox.com/1c/c6/drfNkSt3_o.jpeg",
            "https://images2.imgbox.com/ae/95/2M8DZpUD_o.jpeg",
            "https://images2.imgbox.com/06/7d/Gxae2B3V_o.jpeg",
            "https://images2.imgbox.com/1a/e3/PudxlsRn_o.jpeg",
            "https://images2.imgbox.com/21/47/ITurJ58f_o.jpeg",
            "https://images2.imgbox.com/fe/9c/Vh15zMe0_o.jpeg",
            "https://images2.imgbox.com/45/eb/3167dZFU_o.jpeg",
            "https://images2.imgbox.com/c3/77/LIgFRRdU_o.jpeg",
            "https://images2.imgbox.com/94/6e/H9OKo1TA_o.jpeg",
            "https://images2.imgbox.com/a2/5b/9EHp1sib_o.jpeg"
        ]
    },
    {
        "name": "073. 祭りの後差分",
        "id": "074",
        "thumbnail": "https://images2.imgbox.com/fe/b4/hgTAn2GB_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/fe/b4/hgTAn2GB_o.jpeg",
            "https://images2.imgbox.com/cc/31/T3WnqIqa_o.jpeg",
            "https://images2.imgbox.com/f6/f6/ERswp3Iw_o.jpeg",
            "https://images2.imgbox.com/66/55/J4g4cUpe_o.jpeg",
            "https://images2.imgbox.com/01/85/wXQwfWyG_o.jpeg",
            "https://images2.imgbox.com/42/f1/kHWjMLCU_o.jpeg",
            "https://images2.imgbox.com/48/5e/2ZB61pWd_o.jpeg",
            "https://images2.imgbox.com/08/80/4h3snk91_o.jpeg",
            "https://images2.imgbox.com/27/92/WFUSCdk9_o.jpeg",
            "https://images2.imgbox.com/73/f5/OS43VM04_o.jpeg",
            "https://images2.imgbox.com/4f/44/ZpRn3Ors_o.jpeg",
            "https://images2.imgbox.com/7f/71/yFcajovb_o.jpeg"
        ]
    },
    {
        "name": "074. 逆転差分",
        "id": "075",
        "thumbnail": "https://images2.imgbox.com/ae/8e/goraEdwP_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/ae/8e/goraEdwP_o.jpeg",
            "https://images2.imgbox.com/e5/15/QAh2NzCP_o.jpeg",
            "https://images2.imgbox.com/41/c7/f7GF7wQH_o.jpeg",
            "https://images2.imgbox.com/43/c6/E39p2vVz_o.jpeg",
            "https://images2.imgbox.com/06/85/l9BKH6bE_o.jpeg",
            "https://images2.imgbox.com/5c/61/qETpHaNJ_o.jpeg",
            "https://images2.imgbox.com/b9/c8/ObUtWUTS_o.jpeg"
        ]
    },
    {
        "name": "075. 陸上部くんの日常ストレッチ編差分",
        "id": "076",
        "thumbnail": "https://images2.imgbox.com/53/13/Og4pjUj3_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/53/13/Og4pjUj3_o.jpeg",
            "https://images2.imgbox.com/5b/0f/5d5oNpwA_o.jpeg",
            "https://images2.imgbox.com/cd/ad/zy521AmD_o.jpeg",
            "https://images2.imgbox.com/a5/17/rPmeXq8T_o.jpeg",
            "https://images2.imgbox.com/8e/b6/YlvKAhVe_o.jpeg",
            "https://images2.imgbox.com/ea/d1/MX1omx7g_o.jpeg",
            "https://images2.imgbox.com/ba/aa/5QS32ism_o.jpeg",
            "https://images2.imgbox.com/8f/1e/sOgxJ4oR_o.jpeg",
            "https://images2.imgbox.com/3f/fc/fTma4LyI_o.jpeg",
            "https://images2.imgbox.com/72/91/WTQrc8vK_o.jpeg"
        ]
    },
    {
        "name": "076. 縛り責め差分",
        "id": "077",
        "thumbnail": "https://images2.imgbox.com/7a/a3/BnE3PaX8_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/7a/a3/BnE3PaX8_o.jpeg",
            "https://images2.imgbox.com/2c/30/KJigjmXi_o.jpeg",
            "https://images2.imgbox.com/91/3a/HSLMNTrB_o.jpeg",
            "https://images2.imgbox.com/8a/76/8sMSOV4M_o.jpeg",
            "https://images2.imgbox.com/e4/a0/ja3C0In4_o.jpeg",
            "https://images2.imgbox.com/a2/6a/GROExEWx_o.jpeg",
            "https://images2.imgbox.com/87/ba/TPSZTR2g_o.jpeg",
            "https://images2.imgbox.com/3a/2d/YqDmCfNQ_o.jpeg",
            "https://images2.imgbox.com/90/33/S7y5vx7X_o.jpeg",
            "https://images2.imgbox.com/80/4e/DT9rche0_o.jpeg",
            "https://images2.imgbox.com/d8/f0/t7AdqQAW_o.jpeg",
            "https://images2.imgbox.com/72/21/T0edIosS_o.jpeg",
            "https://images2.imgbox.com/af/1b/0WZQiUPQ_o.jpeg",
            "https://images2.imgbox.com/05/3a/jA2RJGm8_o.jpeg",
            "https://images2.imgbox.com/b3/e0/XVAAVwlv_o.jpeg",
            "https://images2.imgbox.com/81/ec/9HOtvBe0_o.jpeg"
        ]
    },
    {
        "name": "077. 魅せつけ差分",
        "id": "078",
        "thumbnail": "https://images2.imgbox.com/0a/68/jPdrNQhX_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/0a/68/jPdrNQhX_o.jpeg",
            "https://images2.imgbox.com/aa/49/qRZHtSMI_o.jpeg",
            "https://images2.imgbox.com/c8/7c/LoxrGPp5_o.jpeg",
            "https://images2.imgbox.com/37/77/RjODzQTu_o.jpeg",
            "https://images2.imgbox.com/b5/75/nOUFmXzA_o.jpeg",
            "https://images2.imgbox.com/52/4e/7PlNdsPc_o.jpeg",
            "https://images2.imgbox.com/e9/3d/3vckjUga_o.jpeg"
        ]
    },
    {
        "name": "078. 責め合い勝負",
        "id": "079",
        "thumbnail": "https://images2.imgbox.com/e1/87/C106jOaQ_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/e1/87/C106jOaQ_o.jpeg",
            "https://images2.imgbox.com/6e/bf/6nZgL8zz_o.jpeg",
            "https://images2.imgbox.com/42/d9/clOWe1LQ_o.jpeg",
            "https://images2.imgbox.com/c6/69/3qq4Dvi7_o.jpeg",
            "https://images2.imgbox.com/57/25/1L4jqjjz_o.jpeg",
            "https://images2.imgbox.com/29/a3/OvMb7dGa_o.jpeg"
        ]
    },
    {
        "name": "079. メリクリ差分",
        "id": "080",
        "thumbnail": "https://images2.imgbox.com/3a/f1/u0fvWi0V_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/3a/f1/u0fvWi0V_o.jpeg",
            "https://images2.imgbox.com/77/2d/zc0ywEsy_o.jpeg",
            "https://images2.imgbox.com/10/4d/H746ITxj_o.jpeg",
            "https://images2.imgbox.com/d1/18/zlDGfnJQ_o.jpeg",
            "https://images2.imgbox.com/0e/c0/dw1oor55_o.jpeg",
            "https://images2.imgbox.com/61/d2/2Rgm4etg_o.jpeg",
            "https://images2.imgbox.com/78/ff/qNgMeUjy_o.jpeg",
            "https://images2.imgbox.com/9c/25/gSsby6xO_o.jpeg",
            "https://images2.imgbox.com/a4/17/iKpPxrwf_o.jpeg",
            "https://images2.imgbox.com/c3/55/OW1LrkVa_o.jpeg",
            "https://images2.imgbox.com/a4/21/PWwvwFt9_o.png",
            "https://images2.imgbox.com/76/79/HTljtUrl_o.png",
            "https://images2.imgbox.com/52/af/4nCB1W6G_o.jpeg",
            "https://images2.imgbox.com/a6/90/7WuUedAz_o.jpeg",
            "https://images2.imgbox.com/68/1b/z51D25lF_o.jpeg",
            "https://images2.imgbox.com/7d/6f/Gi9nd5tI_o.jpeg"
        ]
    },
    {
        "name": "080. 辰続き",
        "id": "081",
        "thumbnail": "https://images2.imgbox.com/02/aa/xOcpNGsN_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/02/aa/xOcpNGsN_o.jpeg",
            "https://images2.imgbox.com/c6/41/Il5WE6E2_o.jpeg",
            "https://images2.imgbox.com/af/f6/GyEr3j9n_o.jpeg",
            "https://images2.imgbox.com/00/31/7bTSFOpq_o.jpeg",
            "https://images2.imgbox.com/25/32/zH8Kvolc_o.jpeg",
            "https://images2.imgbox.com/e3/b7/wfbyybWW_o.jpeg",
            "https://images2.imgbox.com/80/1e/v0fZPjA4_o.jpeg",
            "https://images2.imgbox.com/c2/ed/wMSkQNep_o.jpeg",
            "https://images2.imgbox.com/a8/a9/9cIUiqfg_o.jpeg",
            "https://images2.imgbox.com/64/bc/gkZOrdWN_o.jpeg",
            "https://images2.imgbox.com/17/b9/SROX9ADa_o.jpeg",
            "https://images2.imgbox.com/7e/12/GOUAJvjL_o.jpeg"
        ]
    },
    {
        "name": "081. シャワー差分",
        "id": "082",
        "thumbnail": "https://images2.imgbox.com/0f/5e/IG77my91_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/0f/5e/IG77my91_o.jpeg",
            "https://images2.imgbox.com/9e/53/Iv6aC9lk_o.jpeg",
            "https://images2.imgbox.com/63/e6/gkPvOODB_o.jpeg",
            "https://images2.imgbox.com/99/37/U9Ir8OZn_o.jpeg",
            "https://images2.imgbox.com/d4/02/zqSSvmc0_o.jpeg",
            "https://images2.imgbox.com/ab/60/FDfezZW1_o.jpeg",
            "https://images2.imgbox.com/37/98/dUeQqDrJ_o.jpeg",
            "https://images2.imgbox.com/86/57/UuMS76Q8_o.jpeg",
            "https://images2.imgbox.com/2e/9c/eUEKcbyU_o.jpeg",
            "https://images2.imgbox.com/bd/44/zfZngzQX_o.jpeg",
            "https://images2.imgbox.com/76/33/42xNahen_o.jpeg",
            "https://images2.imgbox.com/9f/d6/F1mWINGF_o.jpeg"
        ]
    },
    {
        "name": "082. 陸上部くんの日常休憩編差分",
        "id": "083",
        "thumbnail": "https://images2.imgbox.com/f1/d4/fko9puNg_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/f1/d4/fko9puNg_o.jpeg",
            "https://images2.imgbox.com/e1/bc/Qq80pUsc_o.jpeg",
            "https://images2.imgbox.com/a1/2e/Ae7afAv6_o.jpeg",
            "https://images2.imgbox.com/50/b0/gf2WdGN9_o.jpeg",
            "https://images2.imgbox.com/7f/59/toUQlcJV_o.jpeg",
            "https://images2.imgbox.com/30/ad/50cTMKG5_o.jpeg",
            "https://images2.imgbox.com/7d/75/F9xkLMx7_o.jpeg",
            "https://images2.imgbox.com/09/c6/BeceFwLF_o.jpeg",
            "https://images2.imgbox.com/16/45/mhHXgg0L_o.jpeg",
            "https://images2.imgbox.com/b1/ca/9KNhEuYY_o.jpeg",
            "https://images2.imgbox.com/a8/9c/fPcWOgpy_o.jpeg",
            "https://images2.imgbox.com/22/7a/NT2D7fyB_o.jpeg",
            "https://images2.imgbox.com/a6/bb/KBpiEqSS_o.jpeg",
            "https://images2.imgbox.com/95/3f/H4f7ZLdy_o.jpeg",
            "https://images2.imgbox.com/37/6a/mV3PtOvo_o.jpeg",
            "https://images2.imgbox.com/ba/ec/OQ2skuGh_o.jpeg",
            "https://images2.imgbox.com/fc/18/yEhTgPND_o.jpeg",
            "https://images2.imgbox.com/12/16/MA7W5UNl_o.jpeg",
            "https://images2.imgbox.com/3e/b2/HgcCpvop_o.jpeg",
            "https://images2.imgbox.com/da/27/i8melMLh_o.jpeg",
            "https://images2.imgbox.com/9d/98/tuvZI2Ri_o.jpeg",
            "https://images2.imgbox.com/04/c8/8gImlx1u_o.jpeg",
            "https://images2.imgbox.com/d3/13/EgjGSPpD_o.jpeg"
        ]
    },
    {
        "name": "083. 嘉明脱ぎ差分",
        "id": "084",
        "thumbnail": "https://images2.imgbox.com/49/9a/VpCEpE85_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/49/9a/VpCEpE85_o.jpeg",
            "https://images2.imgbox.com/b0/92/5IOxAwDa_o.jpeg",
            "https://images2.imgbox.com/35/19/Yx8Rjchf_o.jpeg",
            "https://images2.imgbox.com/61/0e/VOVZHfto_o.jpeg",
            "https://images2.imgbox.com/e6/d8/CbHDoC3u_o.jpeg",
            "https://images2.imgbox.com/8f/b8/d2MZbs4w_o.jpeg",
            "https://images2.imgbox.com/8b/3d/l3Y7oYEi_o.jpeg",
            "https://images2.imgbox.com/aa/e6/Z8lnA573_o.jpeg",
            "https://images2.imgbox.com/80/c3/RLuQHgr4_o.jpeg",
            "https://images2.imgbox.com/03/97/mpMqKl6n_o.jpeg",
            "https://images2.imgbox.com/00/4f/0qCPXp2Q_o.jpeg",
            "https://images2.imgbox.com/ea/b5/t4A3fLaT_o.jpeg",
            "https://images2.imgbox.com/c3/2f/6LXsdIpp_o.jpeg",
            "https://images2.imgbox.com/13/cf/7C3dpoOa_o.jpeg"
        ]
    },
    {
        "name": "084. 片足上げ差分",
        "id": "085",
        "thumbnail": "https://images2.imgbox.com/90/7b/AHaxPm1I_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/90/7b/AHaxPm1I_o.jpeg",
            "https://images2.imgbox.com/58/12/w60vDFon_o.jpeg",
            "https://images2.imgbox.com/78/69/P2FSCXy3_o.jpeg",
            "https://images2.imgbox.com/d6/2e/ZkBbYlnZ_o.jpeg",
            "https://images2.imgbox.com/7a/8c/9fvhHGG0_o.jpeg",
            "https://images2.imgbox.com/ff/f1/sNT41pD4_o.jpeg",
            "https://images2.imgbox.com/9f/9f/a43FPorD_o.jpeg",
            "https://images2.imgbox.com/43/69/EnQgOZEv_o.jpeg",
            "https://images2.imgbox.com/0c/1d/fOG9zHyo_o.jpeg",
            "https://images2.imgbox.com/6f/b1/x7E9mZMW_o.jpeg",
            "https://images2.imgbox.com/56/35/v08oqnmb_o.jpeg",
            "https://images2.imgbox.com/16/c9/qvA9wwPl_o.jpeg"
        ]
    },
    {
        "name": "085. 陽キャ君差分",
        "id": "086",
        "thumbnail": "https://images2.imgbox.com/0e/65/OetsrxNp_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/0e/65/OetsrxNp_o.jpeg",
            "https://images2.imgbox.com/0d/46/Bdf3QpsJ_o.jpeg",
            "https://images2.imgbox.com/bd/a0/Reb2kU69_o.jpeg",
            "https://images2.imgbox.com/28/31/qO94GwGa_o.jpeg",
            "https://images2.imgbox.com/d6/0d/zXoVsQls_o.jpeg",
            "https://images2.imgbox.com/40/aa/g1H8Wcls_o.jpeg",
            "https://images2.imgbox.com/f4/7d/UUE4BaRD_o.jpeg",
            "https://images2.imgbox.com/95/5b/gnYjqsBf_o.jpeg",
            "https://images2.imgbox.com/cb/ce/4QJzoou0_o.jpeg",
            "https://images2.imgbox.com/08/c5/0wycxUiE_o.jpeg",
            "https://images2.imgbox.com/da/81/kvIWMKr0_o.jpeg",
            "https://images2.imgbox.com/08/67/zec7JriK_o.jpeg",
            "https://images2.imgbox.com/9a/05/uSGkGALz_o.jpeg",
            "https://images2.imgbox.com/ae/7d/VbRZtU7Y_o.jpeg",
            "https://images2.imgbox.com/74/58/UCyYAeml_o.jpeg",
            "https://images2.imgbox.com/b7/d4/0o9VInDW_o.jpeg",
            "https://images2.imgbox.com/8e/4a/ufUhacg6_o.jpeg",
            "https://images2.imgbox.com/c0/4a/sulBULd1_o.jpeg",
            "https://images2.imgbox.com/98/aa/q4ajIqbG_o.jpeg",
            "https://images2.imgbox.com/22/e7/FNpZgS2v_o.jpeg",
            "https://images2.imgbox.com/10/dc/4n0SPJgV_o.jpeg",
            "https://images2.imgbox.com/6f/b4/3Zm603pU_o.jpeg",
            "https://images2.imgbox.com/cc/78/xvGaMKb1_o.jpeg"
        ]
    },
    {
        "name": "086. 同時責め差分",
        "id": "087",
        "thumbnail": "https://images2.imgbox.com/3f/ef/kFOzNnRR_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/3f/ef/kFOzNnRR_o.jpeg",
            "https://images2.imgbox.com/53/f9/DRcIXHPw_o.jpeg",
            "https://images2.imgbox.com/08/8e/z7FSrxAa_o.jpeg",
            "https://images2.imgbox.com/6b/6f/hT81PBad_o.jpeg",
            "https://images2.imgbox.com/c6/f4/HeKAkvJy_o.jpeg",
            "https://images2.imgbox.com/bf/84/weWNR27m_o.jpeg",
            "https://images2.imgbox.com/2f/5e/yLAJQmtg_o.jpeg",
            "https://images2.imgbox.com/8b/6c/crBaZmad_o.jpeg",
            "https://images2.imgbox.com/55/92/gSejtwQJ_o.jpeg",
            "https://images2.imgbox.com/ba/07/VZxisZOK_o.jpeg",
            "https://images2.imgbox.com/86/85/UQDxJb1y_o.jpeg"
        ]
    },
    {
        "name": "087. 昼寝起き差分",
        "id": "088",
        "thumbnail": "https://images2.imgbox.com/1d/a2/WvzTFbHX_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/1d/a2/WvzTFbHX_o.jpeg",
            "https://images2.imgbox.com/68/90/crsh5pKm_o.jpeg",
            "https://images2.imgbox.com/35/6d/oAXtnn7r_o.jpeg",
            "https://images2.imgbox.com/66/d8/wNstu43B_o.jpeg",
            "https://images2.imgbox.com/92/2e/E9IZe7DP_o.jpeg",
            "https://images2.imgbox.com/b0/5b/tEmcxywI_o.jpeg",
            "https://images2.imgbox.com/8d/1b/HZHD8FNg_o.jpeg",
            "https://images2.imgbox.com/63/6d/ByzCEfqP_o.jpeg",
            "https://images2.imgbox.com/ec/b3/GhcJaxkQ_o.jpeg",
            "https://images2.imgbox.com/14/a0/EexC5sF6_o.jpeg",
            "https://images2.imgbox.com/16/f5/lX0EjlBb_o.jpeg",
            "https://images2.imgbox.com/e0/2a/78fhc7pa_o.jpeg",
            "https://images2.imgbox.com/5a/a4/dYIPkCIz_o.jpeg",
            "https://images2.imgbox.com/2f/31/GYKq5FY3_o.jpeg"
        ]
    },
    {
        "name": "088. Odda差分",
        "id": "089",
        "thumbnail": "https://images2.imgbox.com/ea/9d/nyA2SCwO_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/ea/9d/nyA2SCwO_o.jpeg",
            "https://images2.imgbox.com/30/f6/7ucIYdmb_o.jpeg",
            "https://images2.imgbox.com/7c/ca/MSnfUwcC_o.jpeg",
            "https://images2.imgbox.com/af/9c/pUlSrYni_o.jpeg",
            "https://images2.imgbox.com/6b/38/Ps5wjTLh_o.jpeg",
            "https://images2.imgbox.com/25/31/8rj0Gv5b_o.jpeg",
            "https://images2.imgbox.com/ed/0c/WtQ862jR_o.jpeg",
            "https://images2.imgbox.com/db/98/M95qtFti_o.jpeg"
        ]
    },
    {
        "name": "089. 陸上部くんの日常補給編差分",
        "id": "090",
        "thumbnail": "https://images2.imgbox.com/e4/39/y8I7enMY_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/e4/39/y8I7enMY_o.jpeg",
            "https://images2.imgbox.com/bd/a7/ipJAyc05_o.jpeg",
            "https://images2.imgbox.com/aa/3d/zmwKZ6A5_o.jpeg",
            "https://images2.imgbox.com/34/ec/tDyEKhRc_o.jpeg",
            "https://images2.imgbox.com/92/61/2r19pn8O_o.jpeg",
            "https://images2.imgbox.com/94/b8/778EKcJP_o.jpeg",
            "https://images2.imgbox.com/29/d5/LsSjS7xg_o.jpeg",
            "https://images2.imgbox.com/f7/bf/p5LzUFUp_o.jpeg",
            "https://images2.imgbox.com/01/3e/5vhvjtqo_o.jpeg",
            "https://images2.imgbox.com/c7/6f/Tuq3Qqf2_o.jpeg",
            "https://images2.imgbox.com/0d/3c/DbD08uwE_o.jpeg",
            "https://images2.imgbox.com/86/68/R5d75waK_o.jpeg",
            "https://images2.imgbox.com/e1/97/6Z89yJUf_o.jpeg",
            "https://images2.imgbox.com/55/cc/cxLxfEWz_o.jpeg",
            "https://images2.imgbox.com/7d/63/YCd2ZniM_o.jpeg",
            "https://images2.imgbox.com/d7/c2/vlbtsWdk_o.jpeg",
            "https://images2.imgbox.com/77/71/CPstDtoz_o.jpeg",
            "https://images2.imgbox.com/d1/f4/nG6OHEY9_o.jpeg"
        ]
    },
    {
        "name": "090. 因習村の成人の儀差分",
        "id": "091",
        "thumbnail": "https://images2.imgbox.com/27/e3/xyJXto8C_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/27/e3/xyJXto8C_o.jpeg",
            "https://images2.imgbox.com/96/2d/YNHWuXXQ_o.jpeg",
            "https://images2.imgbox.com/97/eb/ezyt4NMw_o.jpeg",
            "https://images2.imgbox.com/75/5b/P7Zd9Lqr_o.jpeg",
            "https://images2.imgbox.com/f3/e5/HBDpemzg_o.jpeg",
            "https://images2.imgbox.com/ed/92/8IhWzLZR_o.jpeg",
            "https://images2.imgbox.com/5b/24/lkQIADph_o.jpeg",
            "https://images2.imgbox.com/aa/bc/pqvpRGVg_o.jpeg",
            "https://images2.imgbox.com/7b/69/ptfSqT0t_o.jpeg",
            "https://images2.imgbox.com/ca/c9/Hf7bFsmV_o.jpeg",
            "https://images2.imgbox.com/cc/5e/6HpYQscx_o.jpeg",
            "https://images2.imgbox.com/30/29/zGXiEzqb_o.jpeg",
            "https://images2.imgbox.com/c1/f8/LoITRg6u_o.jpeg",
            "https://images2.imgbox.com/e6/4e/Qerdj0qW_o.jpeg",
            "https://images2.imgbox.com/dd/10/ByBOwMbt_o.jpeg"
        ]
    },
    {
        "name": "091. 誰も居ない銭湯差分",
        "id": "092",
        "thumbnail": "https://images2.imgbox.com/72/01/uU86DlUn_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/72/01/uU86DlUn_o.jpeg",
            "https://images2.imgbox.com/84/2c/BoeF7Qju_o.jpeg",
            "https://images2.imgbox.com/f7/af/Jqx2U8eQ_o.jpeg",
            "https://images2.imgbox.com/94/ed/bQ3kxrOU_o.jpeg",
            "https://images2.imgbox.com/21/fd/hmZrEWuN_o.jpeg",
            "https://images2.imgbox.com/e3/59/DDc1lzvN_o.jpeg",
            "https://images2.imgbox.com/67/d9/7DbIgAL9_o.jpeg",
            "https://images2.imgbox.com/b2/f1/cljVNjau_o.jpeg",
            "https://images2.imgbox.com/f0/d7/o0JrERJU_o.jpeg",
            "https://images2.imgbox.com/8d/78/7rCFbetg_o.jpeg",
            "https://images2.imgbox.com/88/94/uOVC7mHA_o.jpeg",
            "https://images2.imgbox.com/c7/c1/ZQo8xXnW_o.jpeg",
            "https://images2.imgbox.com/4a/2b/4mNiWioE_o.jpeg",
            "https://images2.imgbox.com/22/03/MDhauTQD_o.jpeg"
        ]
    },
    {
        "name": "092. インターバル差分",
        "id": "093",
        "thumbnail": "https://images2.imgbox.com/61/10/Sxhhtr0c_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/61/10/Sxhhtr0c_o.jpeg",
            "https://images2.imgbox.com/f5/49/9Bq9hY35_o.jpeg",
            "https://images2.imgbox.com/e0/d0/ioXlAyXV_o.jpeg",
            "https://images2.imgbox.com/2f/83/CoiBmEVn_o.jpeg",
            "https://images2.imgbox.com/fa/65/9Qc1elA4_o.jpeg",
            "https://images2.imgbox.com/d1/a8/kmQ71bi5_o.jpeg",
            "https://images2.imgbox.com/ce/8c/CEeSm8bI_o.jpeg",
            "https://images2.imgbox.com/66/9b/oksqUUoy_o.jpeg",
            "https://images2.imgbox.com/2c/fe/LdpDBSlh_o.jpeg",
            "https://images2.imgbox.com/80/82/8VQjFoDK_o.jpeg",
            "https://images2.imgbox.com/6e/03/tJjXciD3_o.jpeg"
        ]
    },
    {
        "name": "093. 露天風呂差分",
        "id": "094",
        "thumbnail": "https://images2.imgbox.com/6f/94/b0MPqm8M_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/6f/94/b0MPqm8M_o.jpeg",
            "https://images2.imgbox.com/4a/65/2rN8aQxM_o.jpeg",
            "https://images2.imgbox.com/d7/77/meuu2YI4_o.jpeg",
            "https://images2.imgbox.com/33/0e/0pSMOOge_o.jpeg",
            "https://images2.imgbox.com/91/62/K2rRxOit_o.jpeg",
            "https://images2.imgbox.com/bd/e6/dDIVGvwX_o.jpeg",
            "https://images2.imgbox.com/7f/66/OU9MOh5M_o.jpeg",
            "https://images2.imgbox.com/1f/f6/hNNEgX2X_o.jpeg",
            "https://images2.imgbox.com/f5/82/rM8FigHv_o.jpeg",
            "https://images2.imgbox.com/a7/9b/vYabAi7z_o.jpeg"
        ]
    },
    {
        "name": "094. 暑中見舞い差分",
        "id": "095",
        "thumbnail": "https://images2.imgbox.com/eb/c6/j87RmgAX_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/eb/c6/j87RmgAX_o.jpeg",
            "https://images2.imgbox.com/0e/c3/kcPbfxmf_o.jpeg",
            "https://images2.imgbox.com/d2/39/HIEzC2AX_o.jpeg",
            "https://images2.imgbox.com/88/a4/NOeQGCJ4_o.jpeg",
            "https://images2.imgbox.com/bc/6d/HWiuhJ5I_o.jpeg",
            "https://images2.imgbox.com/e9/12/ckKlMju5_o.jpeg",
            "https://images2.imgbox.com/fa/c2/32uyOznZ_o.jpeg"
        ]
    },
    {
        "name": "095. 高強度トレーニング差分",
        "id": "096",
        "thumbnail": "https://images2.imgbox.com/01/ac/sYQgD3bj_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/01/ac/sYQgD3bj_o.jpeg",
            "https://images2.imgbox.com/d4/65/37phpZmX_o.jpeg",
            "https://images2.imgbox.com/7d/09/VmxUQiHl_o.jpeg",
            "https://images2.imgbox.com/c7/9f/A2AzL7a5_o.jpeg",
            "https://images2.imgbox.com/d6/49/pjVb0vIi_o.jpeg",
            "https://images2.imgbox.com/f1/2b/89VVegHy_o.jpeg",
            "https://images2.imgbox.com/45/25/qt26g6m0_o.jpeg",
            "https://images2.imgbox.com/25/62/w7aqYSAy_o.jpeg",
            "https://images2.imgbox.com/a7/3d/HNCOfTny_o.jpeg",
            "https://images2.imgbox.com/d8/56/UJSO3GvM_o.jpeg",
            "https://images2.imgbox.com/a8/35/N8DLQAdM_o.jpeg",
            "https://images2.imgbox.com/06/d4/U43TIYxh_o.jpeg"
        ]
    },
    {
        "name": "096. 大将の慰問差分",
        "id": "097",
        "thumbnail": "https://images2.imgbox.com/e0/0e/YLO3SyNH_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/e0/0e/YLO3SyNH_o.jpeg",
            "https://images2.imgbox.com/e4/e5/ZWVxUeJ6_o.jpeg",
            "https://images2.imgbox.com/e7/3f/aqw6ov81_o.jpeg",
            "https://images2.imgbox.com/54/57/DdBNKOry_o.jpeg",
            "https://images2.imgbox.com/38/0c/kI6PVAvV_o.jpeg",
            "https://images2.imgbox.com/84/90/XI7VGeRj_o.jpeg",
            "https://images2.imgbox.com/4b/e0/5sfdfoQU_o.jpeg",
            "https://images2.imgbox.com/7e/51/S6CAsdGZ_o.jpeg",
            "https://images2.imgbox.com/de/d6/qw3xYSL7_o.jpeg",
            "https://images2.imgbox.com/95/dd/yJl5HyYw_o.jpeg",
            "https://images2.imgbox.com/51/55/7lWT4k3X_o.jpeg",
            "https://images2.imgbox.com/2e/f5/PPTO8MnO_o.jpeg",
            "https://images2.imgbox.com/06/14/kWG2xSgG_o.jpeg",
            "https://images2.imgbox.com/f5/56/dBhumQeo_o.jpeg",
            "https://images2.imgbox.com/a7/0a/nXyzlIDQ_o.jpeg",
            "https://images2.imgbox.com/56/4a/IwBf2Zzs_o.jpeg",
            "https://images2.imgbox.com/7f/27/iBtFQGHU_o.jpeg",
            "https://images2.imgbox.com/b0/f6/vSaFqlyF_o.jpeg",
            "https://images2.imgbox.com/32/4c/iJ6BBzhD_o.jpeg",
            "https://images2.imgbox.com/7b/44/Fe5IwOsX_o.jpeg",
            "https://images2.imgbox.com/a3/75/vvCbDdS4_o.jpeg"
        ]
    },
    {
        "name": "097. 残暑見舞い差分",
        "id": "098",
        "thumbnail": "https://images2.imgbox.com/fe/9f/CLB83GO3_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/fe/9f/CLB83GO3_o.jpeg",
            "https://images2.imgbox.com/4e/c9/JsZDdTto_o.jpeg",
            "https://images2.imgbox.com/4a/9d/a91v0a2V_o.jpeg",
            "https://images2.imgbox.com/04/8d/FgJPc6zr_o.jpeg",
            "https://images2.imgbox.com/fa/73/iOQDhP8x_o.png",
            "https://images2.imgbox.com/1d/8d/QQ9hnOpz_o.jpeg",
            "https://images2.imgbox.com/24/26/vpZSuBrR_o.jpeg"
        ]
    },
    {
        "name": "098. リョーくんの日常自主練編差分",
        "id": "099",
        "thumbnail": "https://images2.imgbox.com/47/b7/vKU6c87S_o.png",
        "panels": [
            "https://images2.imgbox.com/47/b7/vKU6c87S_o.png",
            "https://images2.imgbox.com/0b/0c/F8xf1w98_o.png",
            "https://images2.imgbox.com/43/38/oE9P1Mge_o.png",
            "https://images2.imgbox.com/72/b3/9pK7r8Me_o.png",
            "https://images2.imgbox.com/44/e6/jopDMx4h_o.png",
            "https://images2.imgbox.com/8e/7e/sJ26zO0K_o.png",
            "https://images2.imgbox.com/21/25/U0zYig7S_o.png",
            "https://images2.imgbox.com/6c/33/67L5A3CR_o.png",
            "https://images2.imgbox.com/a0/25/ZMKeIX5j_o.png",
            "https://images2.imgbox.com/1b/10/ZcwQFjKC_o.png",
            "https://images2.imgbox.com/bd/1f/BVLyA27N_o.png",
            "https://images2.imgbox.com/2a/a4/BQV8vFWT_o.png",
            "https://images2.imgbox.com/e4/6d/wAxGWjXf_o.png",
            "https://images2.imgbox.com/ad/74/Cu7Vf5ac_o.png",
            "https://images2.imgbox.com/66/3f/hKobqbEW_o.png",
            "https://images2.imgbox.com/be/c7/yYFSAjGJ_o.png",
            "https://images2.imgbox.com/c3/a5/TzQqxxIZ_o.png",
            "https://images2.imgbox.com/5d/83/VT895OdV_o.png",
            "https://images2.imgbox.com/a9/f7/W3ksaBx1_o.png",
            "https://images2.imgbox.com/1c/67/R4H8IqqD_o.png",
            "https://images2.imgbox.com/91/e9/9xRoraCC_o.png"
        ]
    },
    {
        "name": "099. りょーくんの日常後輩編その１差分",
        "id": "100",
        "thumbnail": "",
        "panels": [
             "https://images2.imgbox.com/f5/af/kpveqJ6B_o.jpeg",
            "https://images2.imgbox.com/12/df/JADMhNdL_o.jpeg",
            "https://images2.imgbox.com/28/98/p1jqwddw_o.jpeg",
            "https://images2.imgbox.com/60/6b/bNkPZmPS_o.jpeg",
            "https://images2.imgbox.com/82/1d/ly3Ytnqr_o.jpeg",
            "https://images2.imgbox.com/0e/2b/0XzIm3bt_o.jpeg",
            "https://images2.imgbox.com/d9/05/bKlGnzTy_o.jpeg",
            "https://images2.imgbox.com/7c/b9/Rzw2iRfz_o.jpeg",
            "https://images2.imgbox.com/d3/9c/yeKCgGcI_o.jpeg",
            "https://images2.imgbox.com/ca/50/eBHK4WwY_o.jpeg",
            "https://images2.imgbox.com/03/1a/trx1tdvD_o.jpeg",
            "https://images2.imgbox.com/6c/23/qk7RN2xV_o.jpeg",
            "https://images2.imgbox.com/9c/cb/fwQEX9r0_o.jpeg",
            "https://images2.imgbox.com/a3/1b/uQMsLLii_o.jpeg",
            "https://images2.imgbox.com/14/af/EXkzkG1u_o.jpeg",
            "https://images2.imgbox.com/4a/77/ttmTsSAy_o.jpeg",
            "https://images2.imgbox.com/1e/4f/6ymnZwmR_o.jpeg",
            "https://images2.imgbox.com/cf/f2/4mThvvl5_o.jpeg",
            "https://images2.imgbox.com/0a/08/RXjbfM2X_o.jpeg",
            "https://images2.imgbox.com/a6/20/EN8i9rBV_o.jpeg"
        ]
    },
    {
        "name": "100. りょーくんの日常後輩編その２差分",
        "id": "101",
        "thumbnail": "https://images2.imgbox.com/c9/56/QsR9wlhE_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/c9/56/QsR9wlhE_o.jpeg",
            "https://images2.imgbox.com/8d/0b/Sgfq2ANm_o.jpeg",
            "https://images2.imgbox.com/ea/35/XeFmi8s3_o.jpeg",
            "https://images2.imgbox.com/ea/c3/g4MLRBHf_o.jpeg",
            "https://images2.imgbox.com/11/f2/1SviIflN_o.jpeg",
            "https://images2.imgbox.com/c0/08/CeU4fBan_o.jpeg",
            "https://images2.imgbox.com/56/19/tK0Syb0C_o.jpeg",
            "https://images2.imgbox.com/fc/81/JwgL8Wew_o.jpeg",
            "https://images2.imgbox.com/31/49/sbdCwHeR_o.jpeg",
            "https://images2.imgbox.com/d7/aa/SzGxhvBU_o.jpeg",
            "https://images2.imgbox.com/09/8f/vzyQgpTB_o.jpeg",
            "https://images2.imgbox.com/4a/ea/bo9T3CKJ_o.jpeg",
            "https://images2.imgbox.com/a5/eb/zDet8DAT_o.jpeg",
            "https://images2.imgbox.com/7a/6c/1LthPTgu_o.jpeg",
            "https://images2.imgbox.com/7d/5e/Lt30ZXBp_o.jpeg",
            "https://images2.imgbox.com/0e/cc/WUmsZb7Q_o.jpeg",
            "https://images2.imgbox.com/71/d0/b95PTNPE_o.jpeg",
            "https://images2.imgbox.com/1f/7f/TdRPyKQj_o.jpeg",
            "https://images2.imgbox.com/91/5a/YUb4EAvD_o.jpeg",
            "https://images2.imgbox.com/6e/b9/fyfV8Tom_o.jpeg",
            "https://images2.imgbox.com/f2/5e/MqpneRYK_o.jpeg",
            "https://images2.imgbox.com/b2/53/z1enEmfn_o.jpeg",
            "https://images2.imgbox.com/ca/29/cKwPNsDR_o.jpeg"
        ]
    },
    {
        "name": "101. トレーニング自撮り差分",
        "id": "102",
        "thumbnail": "https://images2.imgbox.com/dd/79/ZOf8ZmCG_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/dd/79/ZOf8ZmCG_o.jpeg",
            "https://images2.imgbox.com/86/27/ZvgQ1ceH_o.jpeg",
            "https://images2.imgbox.com/d3/52/iFnkVcBf_o.jpeg",
            "https://images2.imgbox.com/bf/b6/pY2BFlnj_o.jpeg",
            "https://images2.imgbox.com/df/a5/niXGoeLg_o.jpeg",
            "https://images2.imgbox.com/f6/bf/1No6AMhf_o.jpeg",
            "https://images2.imgbox.com/9c/85/VhWLHA5a_o.jpeg",
            "https://images2.imgbox.com/fc/11/omw74uiO_o.jpeg"
        ]
    },
    {
        "name": "102. 身体洗いの手伝い差分",
        "id": "103",
        "thumbnail": "https://images2.imgbox.com/48/21/Q10Ed1N3_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/48/21/Q10Ed1N3_o.jpeg",
            "https://images2.imgbox.com/54/8b/BCCccZTX_o.jpeg",
            "https://images2.imgbox.com/e8/a8/BifZ9Ku5_o.jpeg",
            "https://images2.imgbox.com/56/e6/9XOreMsy_o.jpeg",
            "https://images2.imgbox.com/1f/d0/iy2ckT7T_o.jpeg",
            "https://images2.imgbox.com/b6/00/rwT7kx5q_o.jpeg",
            "https://images2.imgbox.com/79/3c/zc4lfyvb_o.jpeg",
            "https://images2.imgbox.com/c5/d5/GXZNwasO_o.jpeg",
            "https://images2.imgbox.com/0e/9a/bQWf5ZMQ_o.jpeg",
            "https://images2.imgbox.com/cc/f7/uHaTuUZl_o.jpeg",
            "https://images2.imgbox.com/ac/0c/CR8KLoN5_o.jpeg",
            "https://images2.imgbox.com/d5/77/5dNCVb64_o.jpeg"
        ]
    },
    {
        "name": "103. りょーくんの日常後輩編その３続き差分",
        "id": "104",
        "thumbnail": "https://images2.imgbox.com/29/fa/I2LBR0Si_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/29/fa/I2LBR0Si_o.jpeg",
            "https://images2.imgbox.com/ef/09/Bn8wy3KM_o.jpeg",
            "https://images2.imgbox.com/a2/f4/oaUy8beX_o.jpeg",
            "https://images2.imgbox.com/04/d3/bfKlyGgL_o.jpeg",
            "https://images2.imgbox.com/1d/e7/L01yVFO9_o.jpeg",
            "https://images2.imgbox.com/7d/05/Z0zDbxuQ_o.jpeg",
            "https://images2.imgbox.com/00/ec/0Byk58Rv_o.jpeg",
            "https://images2.imgbox.com/c2/51/mjX1EU0j_o.jpeg",
            "https://images2.imgbox.com/f0/93/VdZvhHOi_o.jpeg",
            "https://images2.imgbox.com/ed/90/rsnq8JdH_o.jpeg",
            "https://images2.imgbox.com/49/7a/9ofPRUx9_o.jpeg",
            "https://images2.imgbox.com/7d/d4/wokr3mwm_o.jpeg"
        ]
    },
    {
        "name": "104. あけおめ差分",
        "id": "105",
        "thumbnail": "https://images2.imgbox.com/bc/ab/BhdLGN1l_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/bc/ab/BhdLGN1l_o.jpeg",
            "https://images2.imgbox.com/47/dc/jIOihCTh_o.jpeg",
            "https://images2.imgbox.com/60/83/qkEsl4d8_o.jpeg",
            "https://images2.imgbox.com/37/5c/J3hrcvn7_o.jpeg",
            "https://images2.imgbox.com/9e/e9/D2mufq4D_o.jpeg",
            "https://images2.imgbox.com/62/5f/68MvNv3L_o.jpeg",
            "https://images2.imgbox.com/e5/32/uCynobeA_o.jpeg",
            "https://images2.imgbox.com/12/f1/AGc8r8yf_o.jpeg",
            "https://images2.imgbox.com/3a/73/faZaX2V9_o.jpeg",
            "https://images2.imgbox.com/0d/ef/ThjiHfFx_o.jpeg",
            "https://images2.imgbox.com/4d/77/2rXZ2P6s_o.jpeg",
            "https://images2.imgbox.com/4b/db/nKj4eyK0_o.jpeg",
            "https://images2.imgbox.com/e4/ba/RTu8yx1N_o.jpeg",
            "https://images2.imgbox.com/48/cb/04S51q1U_o.jpeg"
        ]
    },
    {
        "name": "105. 目覚まし差分",
        "id": "106",
        "thumbnail": "https://images2.imgbox.com/d2/eb/lW6D8ulk_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/d2/eb/lW6D8ulk_o.jpeg",
            "https://images2.imgbox.com/b2/36/kPMAoOl6_o.jpeg",
            "https://images2.imgbox.com/46/e2/qISzmoIC_o.jpeg",
            "https://images2.imgbox.com/b2/f6/hjpszI6V_o.jpeg",
            "https://images2.imgbox.com/c4/11/o39Hpf3Z_o.jpeg",
            "https://images2.imgbox.com/f3/d5/2xfhjEU4_o.jpeg"
        ]
    },
    {
        "name": "106. 嘉空差分",
        "id": "107",
        "thumbnail": "https://images2.imgbox.com/04/d1/C3hZwGAV_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/04/d1/C3hZwGAV_o.jpeg",
            "https://images2.imgbox.com/6a/25/1VmnJv5t_o.jpeg",
            "https://images2.imgbox.com/bd/6e/vL2c8gSD_o.jpeg",
            "https://images2.imgbox.com/bb/9f/eoEEYGv3_o.jpeg",
            "https://images2.imgbox.com/2c/cc/wj7gGckL_o.jpeg",
            "https://images2.imgbox.com/1d/c5/4amVE3Bm_o.jpeg",
            "https://images2.imgbox.com/35/5a/fsXOynmc_o.jpeg",
            "https://images2.imgbox.com/2a/70/pEtrnN5M_o.jpeg",
            "https://images2.imgbox.com/db/40/Ck9Jis8n_o.jpeg",
            "https://images2.imgbox.com/7c/60/ZMcENMTK_o.jpeg",
            "https://images2.imgbox.com/e9/fa/JRxJa122_o.jpeg"
        ]
    },
    {
        "name": "107. オフの日差分",
        "id": "108",
        "thumbnail": "https://images2.imgbox.com/91/ff/mlnQNkwN_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/91/ff/mlnQNkwN_o.jpeg",
            "https://images2.imgbox.com/20/d2/PgfCkhKK_o.jpeg",
            "https://images2.imgbox.com/2d/57/QcN5VEFJ_o.jpeg",
            "https://images2.imgbox.com/e8/9f/tGBY0lhZ_o.jpeg",
            "https://images2.imgbox.com/ff/9f/CSxjL2de_o.jpeg",
            "https://images2.imgbox.com/a1/3c/5jCsPgu8_o.jpeg",
            "https://images2.imgbox.com/4b/bd/5WCZ8V7U_o.jpeg",
            "https://images2.imgbox.com/2f/6e/X4qKwsPB_o.jpeg",
            "https://images2.imgbox.com/04/26/wErPPLAl_o.jpeg",
            "https://images2.imgbox.com/f8/22/JXv1tkl0_o.jpeg",
            "https://images2.imgbox.com/be/24/KncWXxlP_o.jpeg"
        ]
    },
    {
        "name": "108. 我慢比べ差分",
        "id": "109",
        "thumbnail": "https://images2.imgbox.com/71/bc/zPcvQJ1b_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/71/bc/zPcvQJ1b_o.jpeg",
            "https://images2.imgbox.com/69/ef/0Gtimt8c_o.jpeg",
            "https://images2.imgbox.com/3c/9a/n0C8S23j_o.jpeg",
            "https://images2.imgbox.com/58/b5/cGrW2HYO_o.jpeg",
            "https://images2.imgbox.com/f2/8a/gcYlHt8b_o.jpeg",
            "https://images2.imgbox.com/80/41/E1yXWMhd_o.jpeg",
            "https://images2.imgbox.com/29/81/MqMLZP4j_o.jpeg"
        ]
    },
    {
        "name": "109. お仕置き差分",
        "id": "110",
        "thumbnail": "https://images2.imgbox.com/74/2b/hg34ECwa_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/74/2b/hg34ECwa_o.jpeg",
            "https://images2.imgbox.com/cd/68/ACsOjuz9_o.jpeg",
            "https://images2.imgbox.com/57/44/sriRdJEH_o.jpeg",
            "https://images2.imgbox.com/66/33/soXDAkMn_o.jpeg",
            "https://images2.imgbox.com/a1/3d/CuHU7Dq3_o.jpeg",
            "https://images2.imgbox.com/51/bf/uElqpH0j_o.jpeg",
            "https://images2.imgbox.com/f4/fa/7CXkr5sV_o.jpeg",
            "https://images2.imgbox.com/ff/06/B1V2UKWa_o.jpeg"
        ]
    },
    {
        "name": "110. いたずら差分",
        "id": "111",
        "thumbnail": "https://images2.imgbox.com/56/42/8kDVjA8N_o.jpeg",
        "panels": [
            "https://images2.imgbox.com/56/42/8kDVjA8N_o.jpeg",
            "https://images2.imgbox.com/d1/dd/A38ylFM2_o.jpeg",
            "https://images2.imgbox.com/13/22/7WhflLoW_o.jpeg",
            "https://images2.imgbox.com/8f/b0/KirqTbvG_o.jpeg",
            "https://images2.imgbox.com/c2/2c/wBileQKk_o.jpeg",
            "https://images2.imgbox.com/4f/6b/7J6E3jRJ_o.jpeg",
            "https://images2.imgbox.com/d3/08/L4l3FzXR_o.jpeg",
            "https://images2.imgbox.com/ed/9a/up0XGVjM_o.jpeg",
            "https://images2.imgbox.com/55/85/R05V9FvX_o.jpeg",
            "https://images2.imgbox.com/1b/47/r90KNUiS_o.jpeg",
            "https://images2.imgbox.com/fc/84/3WqCiBOK_o.jpeg",
            "https://images2.imgbox.com/f8/bf/umK53H0H_o.jpeg",
            "https://images2.imgbox.com/c7/7c/ZT8TJZxb_o.jpeg",
            "https://images2.imgbox.com/36/aa/oQX1KC27_o.jpeg",
            "https://images2.imgbox.com/9c/c9/AoVhWjQa_o.jpeg"
        ]
    },
    {
        "name": "111. トラップ",
        "id": "112",
        "thumbnail": "https://images2.imgbox.com/ab/de/DymxXB6T_o.png",
        "panels": [
            "https://images2.imgbox.com/ab/de/DymxXB6T_o.png",
            "https://images2.imgbox.com/8e/36/nDgjhSWn_o.png",
            "https://images2.imgbox.com/c0/d9/dtcAV2JF_o.png",
            "https://images2.imgbox.com/93/21/PxK9C4cH_o.png",
            "https://images2.imgbox.com/df/41/NzYbo0AW_o.png",
            "https://images2.imgbox.com/e6/d1/YhFclSwb_o.png",
            "https://images2.imgbox.com/01/58/7bDgOAQ7_o.png",
            "https://images2.imgbox.com/44/f2/dgSXlSNo_o.png",
            "https://images2.imgbox.com/92/e8/o2Ec3JxF_o.png"
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
        // Preload thumbnail
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