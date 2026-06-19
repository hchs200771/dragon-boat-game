(() => {
  "use strict";

  /* ===== 側面角色美術（原創 SVG，依端午題材參考重畫）===== */
  const SVG = {};

  // 龍舟（側面，船頭朝右）：放大龍頭、平直舷邊、四名持槳划手、龍尾、裝飾盾
  SVG.boat = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 104">
    <ellipse cx="108" cy="93" rx="88" ry="7" fill="#072a31" opacity=".45"/>
    <path d="M30 56 Q12 54 8 38 Q6 28 17 29 Q14 41 27 45 Q22 31 35 31 Q34 47 46 53Z" fill="#3f9e63" stroke="#2c7847" stroke-width="2"/>
    <path d="M17 31 Q12 24 17 17 M24 32 Q22 24 28 19" stroke="#caa23a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M32 55 Q42 50 62 50 L150 50 Q172 50 184 57 Q190 65 179 71 Q120 81 60 77 Q37 73 29 63 Q27 57 32 55Z" fill="#b8331f" stroke="#7e2118" stroke-width="3"/>
    <path d="M34 54 Q42 50 62 50 L152 50 Q174 51 185 58" fill="none" stroke="#e7b53c" stroke-width="3.5"/>
    <g fill="#e7b53c" stroke="#9c7a1d" stroke-width="1"><circle cx="60" cy="64" r="3.6"/><circle cx="80" cy="65" r="3.6"/><circle cx="100" cy="65" r="3.6"/><circle cx="120" cy="65" r="3.6"/><circle cx="140" cy="64" r="3.6"/></g>
    <!-- 划手 ×4 -->
    <g>
      <g transform="translate(60,0)"><line x1="3" y1="42" x2="-9" y2="74" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/><path d="M-9 70 l-5 9 l9 -3z" fill="#8a5a2b"/><path d="M-4 50 Q-7 38 3 36 Q11 38 8 50Z" fill="#2f8f8a"/><path d="M3 41 Q-2 41 -5 45" stroke="#f0caa0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="2" cy="31" r="5" fill="#f0caa0"/><path d="M-3 29 Q2 25 7 29" stroke="#d8412f" stroke-width="3" fill="none"/></g>
      <g transform="translate(84,1)"><line x1="3" y1="42" x2="-9" y2="74" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/><path d="M-9 70 l-5 9 l9 -3z" fill="#8a5a2b"/><path d="M-4 50 Q-7 38 3 36 Q11 38 8 50Z" fill="#d8412f"/><path d="M3 41 Q-2 41 -5 45" stroke="#f0caa0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="2" cy="31" r="5" fill="#f0caa0"/><path d="M-3 29 Q2 25 7 29" stroke="#e7b53c" stroke-width="3" fill="none"/></g>
      <g transform="translate(108,0)"><line x1="3" y1="42" x2="-9" y2="74" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/><path d="M-9 70 l-5 9 l9 -3z" fill="#8a5a2b"/><path d="M-4 50 Q-7 38 3 36 Q11 38 8 50Z" fill="#e7b53c"/><path d="M3 41 Q-2 41 -5 45" stroke="#f0caa0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="2" cy="31" r="5" fill="#f0caa0"/><path d="M-3 29 Q2 25 7 29" stroke="#2f8f8a" stroke-width="3" fill="none"/></g>
      <g transform="translate(132,0)"><line x1="3" y1="42" x2="-9" y2="74" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/><path d="M-9 70 l-5 9 l9 -3z" fill="#8a5a2b"/><path d="M-4 50 Q-7 38 3 36 Q11 38 8 50Z" fill="#d8412f"/><path d="M3 41 Q-2 41 -5 45" stroke="#f0caa0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="2" cy="31" r="5" fill="#f0caa0"/><path d="M-3 29 Q2 25 7 29" stroke="#e7b53c" stroke-width="3" fill="none"/></g>
    </g>
    <!-- 龍頭（放大） -->
    <path d="M158 48 Q150 38 152 26 Q160 36 169 40Z" fill="#d8412f"/>
    <path d="M157 56 Q147 56 143 46 Q153 52 161 52Z" fill="#d8412f" opacity=".9"/>
    <path d="M156 42 Q156 29 173 29 Q199 31 203 50 Q205 63 190 65 L172 65 Q158 63 156 50Z" fill="#3f9e63" stroke="#2c7847" stroke-width="2.5"/>
    <path d="M173 31 Q171 16 158 12" fill="none" stroke="#e7b53c" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M179 31 Q179 18 168 13" fill="none" stroke="#b9912e" stroke-width="3" stroke-linecap="round"/>
    <path d="M190 46 Q207 44 207 54 L191 56Z" fill="#56b87a" stroke="#2c7847" stroke-width="1.5"/>
    <path d="M188 58 Q203 60 207 58 L190 67 Q181 65 188 58Z" fill="#2c7847"/>
    <path d="M192 58 q6 1 10 0" stroke="#d8412f" stroke-width="2" fill="none"/>
    <path d="M191 56 l2 5 l3 -4z" fill="#fff"/><path d="M198 55 l2 5 l3 -4z" fill="#fff"/>
    <circle cx="176" cy="46" r="4.6" fill="#fff"/><circle cx="177" cy="46" r="2.3" fill="#0a2026"/>
    <path d="M170 40 q6 -2 11 1" stroke="#143b27" stroke-width="3" fill="none"/>
    <path d="M205 52 q12 2 16 12" stroke="#e7b53c" stroke-width="1.8" fill="none"/>
    <path d="M184 73 q10 3 18 -2 M188 79 q8 3 16 -1" stroke="#eaf6f7" stroke-width="2.5" fill="none" opacity=".85"/>
  </svg>`;

  // 屈原（側面）：高冠、寬袖長袍、長鬚、哀戚，懷抱灰石
  SVG.quYuan = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M38 96 Q26 70 40 52 Q52 42 68 50 Q82 60 80 96Z" fill="#34758f" stroke="#1f4f60" stroke-width="2"/>
    <path d="M50 60 Q52 78 50 92 M63 58 Q67 76 67 92" stroke="#1f4f60" stroke-width="1" fill="none" opacity=".5"/>
    <path d="M44 58 Q26 60 22 80 Q33 76 46 72Z" fill="#2c6b82" stroke="#1f4f60" stroke-width="1.5"/>
    <path d="M16 82 Q11 64 28 60 Q44 58 47 74 Q47 88 30 91 Q19 91 16 82Z" fill="#9aa1a7" stroke="#5f6a72" stroke-width="2"/>
    <path d="M25 68 l9 4 l-3 10 l-9 -4z" fill="#838c93"/><path d="M37 73 l6 3 l-2 7 l-6 -3z" fill="#7a838a"/>
    <path d="M47 62 Q40 74 31 84" fill="none" stroke="#2c6b82" stroke-width="8" stroke-linecap="round"/>
    <circle cx="59" cy="34" r="11" fill="#f0caa0"/>
    <path d="M48 33 q-3 2 0 5 q2 0 3 -1z" fill="#f0caa0" stroke="#d9ad82" stroke-width="1"/>
    <path d="M51 25 Q50 9 62 8 Q72 9 71 23 Q64 18 58 20 Q53 20 51 27Z" fill="#27211d"/>
    <path d="M60 8 Q62 -1 70 1 L67 11Z" fill="#27211d"/>
    <path d="M51 34 q3 -2 6 0" stroke="#3a2a20" stroke-width="1.4" fill="none"/>
    <path d="M49 40 Q51 60 61 54 Q56 48 56 40Z" fill="#e7e1d6"/>
  </svg>`;

  // 楚襄王（側面）：冕旒冠（綖板＋前垂珠旒）、蓄鬚、紅袍
  SVG.chuWang = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M30 96 Q28 70 50 64 Q72 68 74 96Z" fill="#7b1f2b" stroke="#561019" stroke-width="2"/>
    <path d="M45 68 l10 0 l-3 10z" fill="#e7b53c"/>
    <path d="M58 70 Q60 82 58 94 M44 70 Q42 82 44 94" stroke="#561019" stroke-width="1" fill="none" opacity=".5"/>
    <path d="M40 46 Q40 30 57 30 Q71 30 71 46 Q71 60 56 62 Q44 62 40 52 Q35 52 35 48 Q35 43 40 46Z" fill="#f0caa0" stroke="#d9ad82" stroke-width="1"/>
    <circle cx="63" cy="48" r="3" fill="#e7bb90"/>
    <circle cx="47" cy="44" r="1.8" fill="#241a14"/>
    <path d="M43 41 q4 -2 8 0" stroke="#241a14" stroke-width="2" fill="none"/>
    <path d="M37 50 q-5 1 -6 5 q6 -1 9 -1Z" fill="#3a2a22"/>
    <path d="M41 54 Q43 70 55 64 Q49 58 49 52Z" fill="#3a2a22"/>
    <rect x="47" y="22" width="14" height="11" rx="2" fill="#caa23a"/>
    <path d="M34 18 L74 18 L71 25 L37 25Z" fill="#1d1a17"/>
    <path d="M33 15 L75 15 L75 20 L33 20Z" fill="#e7b53c" stroke="#9c7a1d" stroke-width="1"/>
    <circle cx="54" cy="17" r="2.4" fill="#d8412f"/>
    <g stroke="#e7b53c" stroke-width="1.5"><line x1="37" y1="24" x2="35" y2="40"/><line x1="41" y1="25" x2="39" y2="42"/><line x1="45" y1="25" x2="43" y2="40"/></g>
    <g fill="#f3e1a0"><circle cx="35" cy="40" r="2.1"/><circle cx="39" cy="42" r="2.1"/><circle cx="43" cy="40" r="2.1"/></g>
  </svg>`;

  // 海龍王（側面）：龍首、暴突眼、飄垂長白鬚＋龍鬚、後掠龍角、華麗大冠、鱗甲
  SVG.dragonKing = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M54 96 Q48 74 60 62 Q74 54 88 62 Q94 74 90 96Z" fill="#1f6f8a" stroke="#123f5e" stroke-width="2"/>
    <path d="M58 64 q6 5 12 0 q6 5 12 0 l0 6 q-6 5 -12 0 q-6 5 -12 0z" fill="#2f8fae" opacity=".9"/>
    <path d="M52 52 Q60 92 86 84 Q74 70 70 52 Q62 58 52 52Z" fill="#eef2f4" stroke="#cdd6da" stroke-width="1"/>
    <path d="M18 48 Q8 42 18 33 Q28 28 44 31 Q60 34 62 48 Q62 60 48 62 Q30 62 18 48Z" fill="#3f9e63" stroke="#2c7847" stroke-width="2.5"/>
    <path d="M18 39 Q7 37 5 43 Q10 48 18 47Z" fill="#56b87a" stroke="#2c7847" stroke-width="1.5"/>
    <circle cx="11" cy="42" r="1.6" fill="#143b27"/>
    <path d="M7 46 Q20 52 33 49 L28 57 Q15 57 7 50Z" fill="#173d27"/>
    <path d="M13 49 l2 6 l3 -5z" fill="#fff"/><path d="M22 50 l2 6 l3 -5z" fill="#fff"/>
    <path d="M10 50 q8 3 15 2" stroke="#d8412f" stroke-width="2" fill="none"/>
    <circle cx="40" cy="42" r="4.2" fill="#fff"/><circle cx="39" cy="42" r="2.2" fill="#101010"/>
    <path d="M33 36 q7 -3 12 2" stroke="#143b27" stroke-width="3.5" fill="none"/>
    <path d="M10 36 Q-2 30 -2 16" stroke="#eef2f4" stroke-width="2.2" fill="none"/>
    <path d="M8 52 Q0 58 -1 70" stroke="#eef2f4" stroke-width="2.2" fill="none"/>
    <path d="M50 33 Q60 20 74 18" stroke="#caa23a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M45 33 Q53 23 62 19" stroke="#b9912e" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M36 28 L40 12 L48 20 L55 10 L62 20 L70 12 L73 28Z" fill="#e7b53c" stroke="#9c7a1d" stroke-width="1.5"/>
    <circle cx="55" cy="16" r="3" fill="#d8412f"/><circle cx="44" cy="20" r="2" fill="#2f8fae"/><circle cx="66" cy="20" r="2" fill="#2f8fae"/>
  </svg>`;

  // 艾草束（避邪盾）
  SVG.aiCao = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <g stroke="#2f7d3a" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M50 90 L50 22"/><path d="M50 62 Q34 52 30 36"/><path d="M50 62 Q66 52 70 36"/><path d="M50 46 Q38 40 34 28"/><path d="M50 46 Q62 40 66 28"/></g>
    <g fill="#4f9d52" stroke="#2f7d3a" stroke-width="1">
      <path d="M50 20 Q43 11 50 4 Q57 11 50 20Z"/><path d="M30 34 Q21 30 21 21 Q30 25 30 34Z"/><path d="M70 34 Q79 30 79 21 Q70 25 70 34Z"/>
      <path d="M34 26 Q27 20 29 12 Q36 19 34 26Z"/><path d="M66 26 Q73 20 71 12 Q64 19 66 26Z"/></g>
    <rect x="42" y="82" width="16" height="9" rx="3" fill="#d8412f"/>
  </svg>`;

  // 粽子（立體三角＋竹葉脈＋折角＋綁繩；肉/蛋黃露出切面：米＋豬肉＋鹹蛋黃）
  function svgZongzi(leaf,dark,str,fill){
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <ellipse cx="50" cy="90" rx="26" ry="5" fill="#072a31" opacity=".35"/>
      <path d="M50 12 L22 78 L50 86Z" fill="${dark}" stroke="#0d3d22" stroke-width="2"/>
      <path d="M50 12 L78 78 L50 86Z" fill="${leaf}" stroke="#0d3d22" stroke-width="2"/>
      <path d="M50 12 L50 86" stroke="#0d3d22" stroke-width="1.4" opacity=".55"/>
      <g stroke="#0d3d22" stroke-width="1" opacity=".35" fill="none"><path d="M50 22 L28 74"/><path d="M50 36 L34 72"/><path d="M50 22 L72 74"/><path d="M50 36 L66 72"/></g>
      <path d="M50 12 Q43 4 52 2 Q57 8 54 13Z" fill="${dark}" stroke="#0d3d22" stroke-width="1.2"/>
      <path d="M28 44 Q50 38 72 44" stroke="${str}" stroke-width="2.8" fill="none"/>
      <path d="M33 62 Q50 56 67 62" stroke="${str}" stroke-width="2.8" fill="none"/>
      ${fill==='meat'?`<path d="M50 68 L39 86 L61 86Z" fill="#efe2c4" stroke="#caa23a" stroke-width="1"/><circle cx="50" cy="80" r="4.2" fill="#9a5a32"/>`:''}
      ${fill==='egg'?`<path d="M50 66 L37 86 L63 86Z" fill="#efe2c4" stroke="#caa23a" stroke-width="1"/><circle cx="45" cy="80" r="3.4" fill="#9a5a32"/><circle cx="55" cy="79" r="4.2" fill="#ffb733" stroke="#e08a10" stroke-width="0.8"/>`:''}
      <path d="M50 12 Q47 5 55 3" stroke="${str}" stroke-width="2.2" fill="none"/>
    </svg>`;
  }
  SVG.caiZong = svgZongzi("#5aa861","#2f7d3a","#d8d0be",null);
  SVG.rouZong = svgZongzi("#4f9a57","#2c7237","#e7b53c","meat");
  SVG.eggZong = svgZongzi("#4f9a57","#2c7237","#e7b53c","egg");

  function loadSvg(s){const i=new Image();i.src="data:image/svg+xml,"+encodeURIComponent(s);return i;}
  const IMG={};for(const k in SVG)IMG[k]=loadSvg(SVG[k]);
  const ready=img=>img&&img.complete&&img.naturalWidth>0;

  /* ===== 參數 / 物件 / 關卡 ===== */
  const CFG={ boat:{speed:600}, hpMax:100, timeScore:5, shieldSecs:5, maxCombo:20, comboStep:0.1, levelClearHeal:25, graceSecs:1.4 };
  const ITEMS={
    quYuan:    {cat:"good", label:"屈原",     score:100, weight:22, minLv:1},
    caiZong:   {cat:"good", label:"菜粽",     score:20,  heal:10, weight:20, minLv:1},
    rouZong:   {cat:"good", label:"肉粽",     score:50,  heal:18, weight:16, minLv:1},
    eggZong:   {cat:"good", label:"蛋黃肉粽", score:120, heal:26, weight:8,  minLv:2},
    aiCao:     {cat:"power",label:"艾草",     power:"shield", weight:7, minLv:2},
    chuWang:   {cat:"bad",  label:"楚王",     score:-80, weight:18, minLv:1},
    dragonKing:{cat:"bad",  label:"海龍王",   heal:-35, weight:0,  minLv:1, dyn:"dragonW"},
  };
  const LEVELS=[
    {name:"第一關・江上初航", cumTarget:500,  base:185, gap:0.95, chaos:0,  dragonW:13},
    {name:"第二關・險灘暗湧", cumTarget:1400, base:235, gap:0.78, chaos:38, dragonW:20},
    {name:"第三關・龍王震怒", cumTarget:3000, base:290, gap:0.62, chaos:70, dragonW:26},
  ];
  function levelCfg(i){
    if(i<LEVELS.length)return LEVELS[i];
    const last=LEVELS[LEVELS.length-1],k=i-(LEVELS.length-1);
    return {name:"狂濤・第"+(i+1)+"關",cumTarget:last.cumTarget+1600*k+200*k*k,base:last.base+35*k,gap:Math.max(0.40,last.gap-0.04*k),chaos:last.chaos+18*k,dragonW:last.dragonW+4*k};
  }
  const prevTarget=i=>i<=0?0:levelCfg(i-1).cumTarget;

  /* ===== 畫布 ===== */
  const canvas=document.getElementById("game"),ctx=canvas.getContext("2d");
  let W=0,H=0,dpr=1,minY=0,maxY=0;
  const boat={x:0,y:0,targetY:0,bw:0,bh:0};
  let foam=[];
  function initFoam(){foam=[];for(let i=0;i<16;i++)foam.push({x:Math.random()*W,y:18+Math.random()*(H-36),len:10+Math.random()*22,sp:60+Math.random()*90});}
  function resize(){
    const r=canvas.getBoundingClientRect();
    W=r.width;H=r.height;dpr=Math.min(window.devicePixelRatio||1,2.5);
    canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    boat.bw=Math.min(160,W*0.44);boat.bh=Math.round(boat.bw*104/210);
    boat.x=Math.max(boat.bw*0.46,W*0.26);
    minY=boat.bh*0.45+12;maxY=H-boat.bh*0.45-12;
    boat.y=clamp(boat.y||H/2,minY,maxY);boat.targetY=boat.y;
    initFoam();
  }
  window.addEventListener("resize",resize);
  const clamp=(v,a,b)=>v<a?a:(v>b?b:v);
  const buzz=ms=>{try{navigator.vibrate&&navigator.vibrate(ms);}catch(e){}};
  function circleRect(cx,cy,r,rx,ry,rw,rh){const nx=clamp(cx,rx,rx+rw),ny=clamp(cy,ry,ry+rh),dx=cx-nx,dy=cy-ny;return dx*dx+dy*dy<r*r;}

  /* ===== 狀態 ===== */
  let entities=[],floaters=[],state="start";
  let score=0,hp=CFG.hpMax,best=0,bestLevel=1;
  let levelIndex=0,combo=0,shield=0;
  let elapsed=0,spawnTimer=0,grace=0,banner=null;
  let keyUp=false,keyDown=false,last=0;

  /* ===== 輸入（上下）===== */
  function pointerToTarget(cy){const r=canvas.getBoundingClientRect();boat.targetY=clamp(cy-r.top,minY,maxY);}
  let pActive=false;
  canvas.addEventListener("pointerdown",e=>{if(state!=="playing")return;pActive=true;pointerToTarget(e.clientY);});
  canvas.addEventListener("pointermove",e=>{if(pActive)pointerToTarget(e.clientY);});
  window.addEventListener("pointerup",()=>{pActive=false;});
  window.addEventListener("keydown",e=>{if(["ArrowUp","w","W"].includes(e.key))keyUp=true;if(["ArrowDown","s","S"].includes(e.key))keyDown=true;});
  window.addEventListener("keyup",e=>{if(["ArrowUp","w","W"].includes(e.key))keyUp=false;if(["ArrowDown","s","S"].includes(e.key))keyDown=false;});

  /* ===== 生成 ===== */
  function effWeight(k){const it=ITEMS[k];return it.dyn==="dragonW"?levelCfg(levelIndex).dragonW:it.weight;}
  function availableKeys(){return Object.keys(ITEMS).filter(k=>ITEMS[k].minLv<=levelIndex+1);}
  function pickType(){const keys=availableKeys();let t=keys.reduce((s,k)=>s+effWeight(k),0),r=Math.random()*t;for(const k of keys){r-=effWeight(k);if(r<=0)return k;}return keys[0];}
  function spawn(){const radius=27;entities.push({key:pickType(),x:W+radius,y:34+Math.random()*(H-68),r:radius,wob:Math.random()*6.28});}
  function addFloater(text,color){floaters.push({x:boat.x+boat.bw*0.18,y:boat.y-boat.bh*0.5-4,text,color,life:1});}

  /* ===== 更新 ===== */
  function update(dt){
    elapsed+=dt;
    for(const f of foam){f.x-=f.sp*dt;if(f.x<-f.len){f.x=W+f.len;f.y=18+Math.random()*(H-36);}}
    if(shield>0)shield-=dt;
    if(banner){banner.time-=dt;if(banner.time<=0)banner=null;}
    const cfg=levelCfg(levelIndex),p0=prevTarget(levelIndex);
    const speed=cfg.base*(1+0.15*clamp((score-p0)/Math.max(1,cfg.cumTarget-p0),0,1));

    if(keyUp)boat.targetY-=CFG.boat.speed*dt;
    if(keyDown)boat.targetY+=CFG.boat.speed*dt;
    boat.targetY=clamp(boat.targetY,minY,maxY);
    boat.y+=(boat.targetY-boat.y)*Math.min(1,dt*14);

    if(grace>0){grace-=dt;}else{spawnTimer-=dt;if(spawnTimer<=0){spawn();spawnTimer=cfg.gap;}}

    const rx=boat.x-boat.bw*0.30,ry=boat.y-boat.bh*0.30,rw=boat.bw*0.86,rh=boat.bh*0.60;
    for(let i=entities.length-1;i>=0;i--){
      const e=entities[i],it=ITEMS[e.key];
      e.x-=speed*dt;e.wob+=dt*3;
      const chaos=it.cat==="bad"?cfg.chaos:0;
      e.y=clamp(e.y+Math.sin(e.wob)*chaos*dt,26,H-26);
      if(circleRect(e.x,e.y,e.r*0.82,rx,ry,rw,rh)){applyHit(e.key);entities.splice(i,1);continue;}
      if(e.x+e.r<0)entities.splice(i,1);
    }
    score+=CFG.timeScore*dt;
    if(score>=cfg.cumTarget)levelUp();
    for(let i=floaters.length-1;i>=0;i--){const f=floaters[i];f.y-=40*dt;f.life-=dt*1.3;if(f.life<=0)floaters.splice(i,1);}
    if(hp<=0)gameOver();
  }
  function applyHit(key){
    const it=ITEMS[key];
    if(it.cat==="bad"){
      if(key==="dragonKing"&&shield>0){addFloater("避邪!","#bff0a0");buzz(15);return;}
      if(it.score)score=Math.max(0,score+it.score);
      if(it.heal)hp=clamp(hp+it.heal,0,CFG.hpMax);
      combo=0;addFloater(it.heal?it.heal+"血":it.score+"分","#ff9a8a");buzz(40);
    }else{
      const mult=1+Math.min(combo,CFG.maxCombo)*CFG.comboStep;combo++;
      if(it.power==="shield"){shield=CFG.shieldSecs;addFloater("艾草避邪 "+CFG.shieldSecs+"s","#bff0a0");buzz(20);return;}
      if(it.score)score+=Math.round(it.score*mult);
      if(it.heal)hp=clamp(hp+it.heal,0,CFG.hpMax);
      addFloater("+"+Math.round((it.score||0)*mult)+(it.heal?" +"+it.heal+"血":""),"#bff0a0");buzz(12);
    }
  }
  function levelUp(){
    const cleared=levelIndex+1;levelIndex++;
    hp=clamp(hp+CFG.levelClearHeal,0,CFG.hpMax);grace=CFG.graceSecs;combo=0;
    banner={title:"第"+cleared+"關 過關！",sub:levelCfg(levelIndex).name+"　補 +"+CFG.levelClearHeal+"血",time:1.8};
    buzz([20,40,20]);
  }

  /* ===== 繪製 ===== */
  function drawRiver(){
    const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,"#136472");g.addColorStop(1,"#0b3a44");
    ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.fillStyle="rgba(63,111,58,.5)";ctx.fillRect(0,0,W,12);ctx.fillRect(0,H-12,W,12);
    ctx.strokeStyle="rgba(255,255,255,.13)";ctx.lineWidth=3;ctx.lineCap="round";
    for(const f of foam){ctx.beginPath();ctx.moveTo(f.x,f.y);ctx.lineTo(f.x+f.len,f.y);ctx.stroke();}
    ctx.lineCap="butt";
  }
  function drawToken(e){
    const it=ITEMS[e.key],img=IMG[e.key];
    ctx.save();
    ctx.shadowColor=it.cat==="bad"?"rgba(216,65,47,.95)":"rgba(120,235,150,.85)";
    ctx.shadowBlur=13;
    const S=e.r*2.5;
    if(ready(img))ctx.drawImage(img,e.x-S/2,e.y-S/2,S,S);
    ctx.restore();
    ctx.font="bold 11px sans-serif";ctx.textAlign="center";ctx.textBaseline="top";
    ctx.lineWidth=3;ctx.strokeStyle="rgba(0,0,0,.6)";ctx.strokeText(it.label,e.x,e.y+e.r-2);
    ctx.fillStyle="#fff";ctx.fillText(it.label,e.x,e.y+e.r-2);
  }
  function drawBoat(){
    const bob=Math.sin(elapsed*2.2)*3;
    if(shield>0){ctx.save();ctx.globalAlpha=0.35+0.25*Math.sin(elapsed*8);ctx.strokeStyle="#bff0a0";ctx.lineWidth=3;ctx.shadowColor="#bff0a0";ctx.shadowBlur=16;ctx.beginPath();ctx.ellipse(boat.x+boat.bw*0.08,boat.y,boat.bw*0.56,boat.bh*0.74,0,0,Math.PI*2);ctx.stroke();ctx.restore();}
    if(ready(IMG.boat))ctx.drawImage(IMG.boat,boat.x-boat.bw/2,boat.y-boat.bh/2+bob,boat.bw,boat.bh);
  }
  function drawBanner(){
    if(!banner)return;const a=clamp(banner.time,0,1);
    ctx.save();ctx.globalAlpha=Math.min(1,a*1.5);ctx.textAlign="center";
    ctx.fillStyle="#e7b53c";ctx.font="bold 30px sans-serif";ctx.shadowColor="#d8412f";ctx.shadowBlur=8;ctx.fillText(banner.title,W/2,H*0.4);
    ctx.shadowBlur=0;ctx.fillStyle="#f3ead6";ctx.font="bold 15px sans-serif";ctx.fillText(banner.sub,W/2,H*0.4+30);ctx.restore();
  }
  function draw(){
    drawRiver();
    for(const e of entities)drawToken(e);
    drawBoat();
    for(const f of floaters){ctx.globalAlpha=clamp(f.life,0,1);ctx.font="bold 18px sans-serif";ctx.fillStyle=f.color;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(f.text,f.x,f.y);ctx.globalAlpha=1;}
    drawBanner();
  }

  /* ===== HUD ===== */
  const $score=document.getElementById("score"),$combo=document.getElementById("combo");
  const $hpfill=document.getElementById("hpfill"),$hpNum=document.getElementById("hpNum");
  const $lvName=document.getElementById("lvName"),$lvBar=document.getElementById("lvBar"),$lvNum=document.getElementById("lvNum");
  const $restart=document.getElementById("restartBtn");
  function syncHud(){
    $score.textContent=Math.floor(score);
    $hpfill.style.width=(hp/CFG.hpMax*100)+"%";
    $hpNum.textContent=Math.ceil(hp);
    const cfg=levelCfg(levelIndex),p0=prevTarget(levelIndex);
    $lvName.textContent=cfg.name.split("・")[0];
    $lvBar.style.width=clamp((score-p0)/(cfg.cumTarget-p0)*100,0,100)+"%";
    $lvNum.textContent=Math.floor(score)+" / "+cfg.cumTarget;
    if(combo>=2){$combo.classList.add("on");$combo.textContent="連擊 ×"+(1+Math.min(combo,CFG.maxCombo)*CFG.comboStep).toFixed(1)+(shield>0?"　🌿"+Math.ceil(shield)+"s":"");}
    else{$combo.classList.toggle("on",shield>0);$combo.textContent=shield>0?"🌿避邪 "+Math.ceil(shield)+"s":"";}
  }

  function loop(now){
    requestAnimationFrame(loop);
    if(!last)last=now;
    let dt=(now-last)/1000;last=now;if(dt>0.05)dt=0.05;
    if(state==="playing"){update(dt);syncHud();}
    draw();
  }

  /* ===== 流程 ===== */
  function startGame(){
    entities=[];floaters=[];score=0;hp=CFG.hpMax;levelIndex=0;combo=0;shield=0;
    elapsed=0;spawnTimer=0;grace=0;last=0;banner=null;
    boat.y=H/2;boat.targetY=H/2;state="playing";
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("overScreen").classList.add("hidden");
    $restart.style.display="flex";syncHud();
  }
  // 回到「開始遊戲 / 規則說明」頁
  function goToStart(){
    state="start";entities=[];floaters=[];banner=null;pActive=false;
    document.getElementById("overScreen").classList.add("hidden");
    document.getElementById("startScreen").classList.remove("hidden");
    $restart.style.display="none";
  }
  function gameOver(){
    state="over";const s=Math.floor(score),lv=levelIndex+1;
    best=Math.max(best,s);bestLevel=Math.max(bestLevel,lv); // 註：artifact 無 localStorage，僅存本工作階段
    document.getElementById("reached").textContent="闖到 "+levelCfg(levelIndex).name.split("・")[0];
    document.getElementById("finalScore").textContent=s;
    document.getElementById("bestScore").textContent="最高分 "+best+"　最遠 第"+bestLevel+"關";
    document.getElementById("overScreen").classList.remove("hidden");$restart.style.display="none";
  }
  document.getElementById("startBtn").addEventListener("click",startGame);
  document.getElementById("retryBtn").addEventListener("click",startGame);
  $restart.addEventListener("click",e=>{e.stopPropagation();goToStart();});

  (function buildLegend(){
    const rows=[["quYuan","屈原 救起 +100"],["caiZong","菜粽 +20/+10血"],["rouZong","肉粽 +50/+18血"],
      ["eggZong","蛋黃肉粽 +120/+26"],["aiCao","艾草 5秒避邪盾"],["chuWang","楚王 扣分 −80"],
      ["dragonKing","海龍王 重創 −35血"],["boat","你的龍舟"]];
    document.getElementById("legend").innerHTML=rows.map(([k,t])=>`<div><img src="${IMG[k].src}" alt=""><span>${t}</span></div>`).join("");
  })();

  resize();
  requestAnimationFrame(loop);
})();