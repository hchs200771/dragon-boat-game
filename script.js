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
      <g transform="translate(60,0)"><line x1="8" y1="42" x2="20" y2="74" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/><path d="M20 70 l5 9 l-9 -3z" fill="#8a5a2b"/><path d="M-4 50 Q-7 38 3 36 Q11 38 8 50Z" fill="#2f8f8a"/><path d="M4 41 Q9 41 12 45" stroke="#f0caa0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="2" cy="31" r="5" fill="#f0caa0"/><path d="M6 32 l4 2 l-4 2z" fill="#f0caa0" stroke="#d9ad82" stroke-width=".7"/><circle cx="5" cy="30" r=".8" fill="#241a14"/><path d="M-3 29 Q2 25 7 29" stroke="#d8412f" stroke-width="3" fill="none"/></g>
      <g transform="translate(84,1)"><line x1="8" y1="42" x2="20" y2="74" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/><path d="M20 70 l5 9 l-9 -3z" fill="#8a5a2b"/><path d="M-4 50 Q-7 38 3 36 Q11 38 8 50Z" fill="#d8412f"/><path d="M4 41 Q9 41 12 45" stroke="#f0caa0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="2" cy="31" r="5" fill="#f0caa0"/><path d="M6 32 l4 2 l-4 2z" fill="#f0caa0" stroke="#d9ad82" stroke-width=".7"/><circle cx="5" cy="30" r=".8" fill="#241a14"/><path d="M-3 29 Q2 25 7 29" stroke="#e7b53c" stroke-width="3" fill="none"/></g>
      <g transform="translate(108,0)"><line x1="8" y1="42" x2="20" y2="74" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/><path d="M20 70 l5 9 l-9 -3z" fill="#8a5a2b"/><path d="M-4 50 Q-7 38 3 36 Q11 38 8 50Z" fill="#e7b53c"/><path d="M4 41 Q9 41 12 45" stroke="#f0caa0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="2" cy="31" r="5" fill="#f0caa0"/><path d="M6 32 l4 2 l-4 2z" fill="#f0caa0" stroke="#d9ad82" stroke-width=".7"/><circle cx="5" cy="30" r=".8" fill="#241a14"/><path d="M-3 29 Q2 25 7 29" stroke="#2f8f8a" stroke-width="3" fill="none"/></g>
      <g transform="translate(132,0)"><line x1="8" y1="42" x2="20" y2="74" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/><path d="M20 70 l5 9 l-9 -3z" fill="#8a5a2b"/><path d="M-4 50 Q-7 38 3 36 Q11 38 8 50Z" fill="#d8412f"/><path d="M4 41 Q9 41 12 45" stroke="#f0caa0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="2" cy="31" r="5" fill="#f0caa0"/><path d="M6 32 l4 2 l-4 2z" fill="#f0caa0" stroke="#d9ad82" stroke-width=".7"/><circle cx="5" cy="30" r=".8" fill="#241a14"/><path d="M-3 29 Q2 25 7 29" stroke="#e7b53c" stroke-width="3" fill="none"/></g>
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
    <path d="M16 82 Q11 64 28 60 Q44 58 47 74 Q47 88 30 91 Q19 91 16 82Z" fill="#24282c" stroke="#111417" stroke-width="2"/>
    <path d="M25 68 l9 4 l-3 10 l-9 -4z" fill="#3a4045"/><path d="M37 73 l6 3 l-2 7 l-6 -3z" fill="#171a1d"/>
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

  // 海龍王（側面）：龍首、冕旒冠、長白鬚、紅藍金官袍、玉圭與海浪
  SVG.dragonKing = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M16 90 q10 -9 20 0 q10 9 20 0 q10 -9 20 0 q8 7 18 1" fill="none" stroke="#d7f2f4" stroke-width="4" opacity=".72"/>
    <path d="M52 96 Q46 74 58 60 Q72 52 88 62 Q96 76 91 96Z" fill="#1f5f9a" stroke="#123f5e" stroke-width="2"/>
    <path d="M60 64 Q70 70 84 64 L86 96 L58 96Z" fill="#8f2630" stroke="#561019" stroke-width="1.5"/>
    <path d="M64 66 L80 66 L76 96 L58 96Z" fill="#245aa0" opacity=".9"/>
    <path d="M61 66 q8 6 18 0 q5 12 3 30" fill="none" stroke="#e7b53c" stroke-width="3"/>
    <path d="M72 62 l7 0 l-3 9z" fill="#e7b53c"/>
    <path d="M50 52 Q55 84 84 84 Q73 70 70 52 Q61 58 50 52Z" fill="#eef2f4" stroke="#cdd6da" stroke-width="1"/>
    <path d="M57 64 Q45 68 43 81" stroke="#f0caa0" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M38 78 L51 57" stroke="#bfe6e3" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M36 81 L51 58" stroke="#dff9f6" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M18 49 Q7 43 16 34 Q26 27 45 30 Q62 34 64 48 Q64 60 50 63 Q30 63 18 49Z" fill="#477f55" stroke="#245a34" stroke-width="2.5"/>
    <path d="M18 39 Q7 36 5 43 Q10 49 19 48Z" fill="#69a86b" stroke="#245a34" stroke-width="1.5"/>
    <path d="M7 46 Q21 53 34 49 L29 58 Q16 58 7 50Z" fill="#1f3f2a"/>
    <path d="M12 49 l2 6 l3 -5z" fill="#fff"/><path d="M22 50 l2 6 l3 -5z" fill="#fff"/>
    <path d="M9 50 q9 3 17 2" stroke="#d8412f" stroke-width="2" fill="none"/>
    <circle cx="41" cy="42" r="4.7" fill="#fff"/><circle cx="40" cy="42" r="2.4" fill="#101010"/>
    <path d="M33 36 q8 -4 14 2" stroke="#143b27" stroke-width="3.5" fill="none"/>
    <path d="M42 53 Q46 70 58 76" stroke="#eef2f4" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M37 53 Q36 70 43 84" stroke="#eef2f4" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M12 36 Q-1 28 1 15" stroke="#eef2f4" stroke-width="2.2" fill="none"/>
    <path d="M9 53 Q-2 61 0 74" stroke="#eef2f4" stroke-width="2.2" fill="none"/>
    <path d="M49 31 Q58 17 72 15" stroke="#caa23a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M44 31 Q51 21 62 17" stroke="#b9912e" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <rect x="37" y="22" width="34" height="6" fill="#1d1a17"/>
    <path d="M38 18 L70 18 L73 24 L35 24Z" fill="#e7b53c" stroke="#9c7a1d" stroke-width="1.5"/>
    <path d="M40 18 L44 9 L50 17 L56 7 L62 17 L68 9 L70 18Z" fill="#e7b53c" stroke="#9c7a1d" stroke-width="1.2"/>
    <circle cx="56" cy="14" r="3" fill="#d8412f"/><circle cx="45" cy="20" r="2" fill="#2f8fae"/><circle cx="67" cy="20" r="2" fill="#2f8fae"/>
    <g stroke="#e7b53c" stroke-width="1.2"><line x1="39" y1="24" x2="37" y2="38"/><line x1="43" y1="24" x2="41" y2="40"/><line x1="47" y1="24" x2="45" y2="38"/></g>
    <g fill="#f3e1a0"><circle cx="37" cy="38" r="1.7"/><circle cx="41" cy="40" r="1.7"/><circle cx="45" cy="38" r="1.7"/></g>
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

  // 五毒與水患（端午驅邪題材）：小尺寸優先用清楚輪廓
  SVG.poisonSnake = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="89" rx="28" ry="5" fill="#072a31" opacity=".35"/>
    <path d="M23 76 Q12 60 25 47 Q40 32 30 18 Q27 11 35 8 Q49 18 45 35 Q42 48 56 49 Q76 50 79 66 Q82 84 62 87 Q49 90 41 82" fill="none" stroke="#5bb84f" stroke-width="13" stroke-linecap="round"/>
    <path d="M34 12 Q45 20 39 35 Q35 48 52 55" fill="none" stroke="#275f2b" stroke-width="3" opacity=".5"/>
    <path d="M71 64 Q85 63 89 73 Q84 82 70 81 Q61 78 61 70 Q62 65 71 64Z" fill="#5bb84f" stroke="#275f2b" stroke-width="2"/>
    <circle cx="79" cy="70" r="2" fill="#101010"/>
    <path d="M87 74 l8 -3 M87 75 l8 3" stroke="#d8412f" stroke-width="1.5" stroke-linecap="round"/>
    <g fill="#f3d44b"><circle cx="31" cy="63" r="3"/><circle cx="42" cy="52" r="3"/><circle cx="33" cy="23" r="2.5"/></g>
  </svg>`;

  SVG.gecko = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="91" rx="27" ry="5" fill="#072a31" opacity=".35"/>
    <path d="M45 73 Q34 58 39 39 Q44 20 60 25 Q73 30 66 50 Q61 68 50 77 Q48 78 45 73Z" fill="#33a852" stroke="#14632f" stroke-width="2"/>
    <path d="M54 27 Q64 13 78 17 Q87 22 82 33 Q72 38 62 34Z" fill="#46bf62" stroke="#14632f" stroke-width="2"/>
    <path d="M45 74 Q35 86 22 90 Q14 92 12 87 Q24 80 36 66" fill="#2a8f45" stroke="#14632f" stroke-width="2"/>
    <path d="M43 39 L24 23 M40 53 L18 57 M60 40 L80 31 M58 57 L76 72" stroke="#33a852" stroke-width="7" stroke-linecap="round"/>
    <g fill="#46bf62" stroke="#14632f" stroke-width="1.5">
      <circle cx="20" cy="20" r="4"/><circle cx="15" cy="25" r="3.5"/><circle cx="22" cy="29" r="3.5"/>
      <circle cx="14" cy="57" r="4"/><circle cx="18" cy="63" r="3.5"/><circle cx="21" cy="54" r="3.5"/>
      <circle cx="83" cy="28" r="4"/><circle cx="88" cy="33" r="3.5"/><circle cx="80" cy="36" r="3.5"/>
      <circle cx="79" cy="74" r="4"/><circle cx="86" cy="75" r="3.5"/><circle cx="76" cy="81" r="3.5"/>
    </g>
    <g fill="#b4d238"><circle cx="48" cy="39" r="2.5"/><circle cx="55" cy="45" r="2.5"/><circle cx="47" cy="53" r="2.5"/><circle cx="55" cy="60" r="2.5"/><circle cx="43" cy="64" r="2.2"/></g>
    <circle cx="65" cy="26" r="2.4" fill="#101010"/>
    <circle cx="75" cy="28" r="2.4" fill="#101010"/>
  </svg>`;

  SVG.scorpion = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="89" rx="27" ry="5" fill="#072a31" opacity=".35"/>
    <path d="M45 40 Q62 31 72 43 Q79 53 70 65 Q58 77 41 68 Q30 61 32 49 Q34 43 45 40Z" fill="#9b3529" stroke="#561019" stroke-width="2"/>
    <path d="M67 42 Q76 28 66 18 Q57 12 51 20 Q58 20 60 27 Q61 34 55 39" fill="none" stroke="#9b3529" stroke-width="7" stroke-linecap="round"/>
    <path d="M66 18 l-1 -10 l8 7z" fill="#d8412f" stroke="#561019" stroke-width="1.5"/>
    <path d="M34 49 L17 39 M35 58 L16 62 M66 50 L84 42 M65 60 L82 70" stroke="#9b3529" stroke-width="5" stroke-linecap="round"/>
    <path d="M20 39 q-9 -4 -12 4 M18 62 q-8 1 -11 8 M82 42 q9 -4 12 4 M82 70 q8 1 11 8" stroke="#561019" stroke-width="2" fill="none"/>
    <circle cx="43" cy="47" r="2" fill="#101010"/>
    <path d="M28 42 Q15 28 8 39 Q13 45 25 47 M70 43 Q88 29 94 42 Q88 49 75 48" fill="#b84938" stroke="#561019" stroke-width="2"/>
  </svg>`;

  SVG.toad = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="89" rx="29" ry="5" fill="#072a31" opacity=".35"/>
    <path d="M20 66 Q23 39 50 35 Q78 39 82 66 Q72 84 50 82 Q28 84 20 66Z" fill="#7b8f45" stroke="#46552a" stroke-width="2"/>
    <circle cx="36" cy="38" r="8" fill="#8fa653" stroke="#46552a" stroke-width="2"/>
    <circle cx="64" cy="38" r="8" fill="#8fa653" stroke="#46552a" stroke-width="2"/>
    <circle cx="36" cy="38" r="3" fill="#101010"/><circle cx="64" cy="38" r="3" fill="#101010"/>
    <path d="M34 63 Q50 72 66 63" stroke="#46552a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <g fill="#536433" opacity=".7"><circle cx="28" cy="57" r="3"/><circle cx="45" cy="50" r="2.5"/><circle cx="58" cy="56" r="3"/><circle cx="72" cy="62" r="2.5"/></g>
    <path d="M24 71 L10 82 M76 71 L90 82" stroke="#7b8f45" stroke-width="7" stroke-linecap="round"/>
  </svg>`;

  SVG.centipede = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="89" rx="30" ry="5" fill="#072a31" opacity=".35"/>
    <path d="M15 58 Q30 38 52 46 Q72 53 86 35" fill="none" stroke="#8a4a2a" stroke-width="14" stroke-linecap="round"/>
    <path d="M15 58 Q30 38 52 46 Q72 53 86 35" fill="none" stroke="#c36b36" stroke-width="8" stroke-linecap="round"/>
    <g stroke="#3d2115" stroke-width="2" stroke-linecap="round">
      <path d="M24 51 l-10 -9 M30 47 l-4 -13 M38 45 l2 -13 M46 46 l8 -11 M54 48 l10 -8 M63 47 l12 -4 M71 43 l13 3"/>
      <path d="M24 58 l-11 7 M34 54 l-5 13 M43 53 l2 13 M52 54 l8 11 M60 54 l12 7 M68 50 l13 3"/>
    </g>
    <circle cx="84" cy="34" r="5" fill="#c36b36" stroke="#3d2115" stroke-width="2"/>
    <circle cx="86" cy="32" r="1.4" fill="#101010"/>
  </svg>`;

  SVG.badWave = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="92" rx="30" ry="5" fill="#072a31" opacity=".35"/>
    <path d="M25 21 Q49 8 78 19 Q70 34 64 51 Q58 69 48 88 Q38 70 33 53 Q28 37 25 21Z" fill="#9aa8ad" stroke="#2f3d42" stroke-width="2.5"/>
    <path d="M28 22 Q50 15 75 20" stroke="#dfe8ea" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M22 36 Q48 29 77 34" stroke="#2f3d42" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M20 52 Q43 44 68 48" stroke="#dfe8ea" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M31 67 Q47 60 61 62" stroke="#2f3d42" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M18 42 q-12 4 -14 14 M78 41 q13 0 18 11 M25 70 q-13 3 -17 11 M66 64 q13 -2 22 7" stroke="#dfe8ea" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M30 88 q9 5 20 0 q10 -5 21 0" stroke="#d7f2f4" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`;

  SVG.whirlpool = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="50" rx="39" ry="31" fill="#174f6c" stroke="#0f3548" stroke-width="2"/>
    <path d="M17 49 Q31 19 63 22 Q87 27 86 51 Q84 76 55 79 Q28 81 25 61 Q23 44 45 42 Q65 41 67 53 Q67 64 53 65 Q45 66 43 59" fill="none" stroke="#66c5db" stroke-width="7" stroke-linecap="round"/>
    <path d="M25 43 Q42 29 61 32 M33 67 Q50 76 69 66 M43 54 Q51 47 60 52" stroke="#d7f2f4" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="52" cy="56" r="6" fill="#0f3548"/>
  </svg>`;

  SVG.poisonFog = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="89" rx="28" ry="5" fill="#072a31" opacity=".35"/>
    <path d="M24 65 Q13 59 19 47 Q24 37 38 40 Q43 25 59 30 Q70 33 70 46 Q84 45 87 58 Q90 74 72 76 L33 76 Q25 75 24 65Z" fill="#8a64b8" stroke="#4d3470" stroke-width="2"/>
    <path d="M31 56 q8 -7 17 0 q8 7 17 0 q8 -7 17 0" stroke="#d8c3ef" stroke-width="3" fill="none" opacity=".75"/>
    <path d="M35 45 q7 -5 14 0 M51 67 q8 5 16 0" stroke="#4d3470" stroke-width="2" fill="none"/>
    <circle cx="37" cy="63" r="3" fill="#4d3470"/><circle cx="64" cy="48" r="3" fill="#4d3470"/>
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
    poisonSnake:{cat:"bad", label:"毒蛇",     heal:-22, weight:10, minLv:2},
    gecko:     {cat:"bad",  label:"壁虎",     score:-45, weight:8, minLv:2},
    badWave:   {cat:"bad",  label:"龍捲風",   heal:-16, weight:10, minLv:2},
    scorpion:  {cat:"bad",  label:"蠍子",     heal:-28, weight:8, minLv:3},
    toad:      {cat:"bad",  label:"蟾蜍",     score:-70, weight:7, minLv:3},
    centipede: {cat:"bad",  label:"蜈蚣",     heal:-18, score:-20, weight:7, minLv:3},
    whirlpool: {cat:"bad",  label:"漩渦",     heal:-24, weight:8, minLv:3},
    poisonFog: {cat:"bad",  label:"毒霧",     heal:-18, score:-20, weight:6, minLv:3},
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
  function effWeight(k){
    const it=ITEMS[k];
    let w=it.dyn==="dragonW"?levelCfg(levelIndex).dragonW:it.weight;
    if(it.cat==="good")w*=Math.max(0.42,1-levelIndex*0.13);
    if(it.cat==="power")w*=Math.max(0.28,1-levelIndex*0.18);
    if(it.cat==="bad")w*=1+levelIndex*0.16;
    return w;
  }
  function availableKeys(){return Object.keys(ITEMS).filter(k=>ITEMS[k].minLv<=levelIndex+1);}
  function pickType(){const keys=availableKeys();let t=keys.reduce((s,k)=>s+effWeight(k),0),r=Math.random()*t;for(const k of keys){r-=effWeight(k);if(r<=0)return k;}return keys[0];}
  function sizeMult(key){return key==="dragonKing"||key==="chuWang"?1+Math.min(levelIndex,4)*0.12:1;}
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

    const rx=boat.x-boat.bw*0.32,ry=boat.y-boat.bh*0.33,rw=boat.bw*0.91,rh=boat.bh*0.66;
    for(let i=entities.length-1;i>=0;i--){
      const e=entities[i],it=ITEMS[e.key];
      const m=sizeMult(e.key);
      e.x-=speed*dt;e.wob+=dt*3;
      const chaos=it.cat==="bad"?cfg.chaos:0;
      e.y=clamp(e.y+Math.sin(e.wob)*chaos*dt,26,H-26);
      if(circleRect(e.x,e.y,e.r*1.05*m,rx,ry,rw,rh)){applyHit(e.key);entities.splice(i,1);continue;}
      if(e.x+e.r*m<0)entities.splice(i,1);
    }
    score+=CFG.timeScore*dt;
    if(score>=cfg.cumTarget)levelUp();
    for(let i=floaters.length-1;i>=0;i--){const f=floaters[i];f.y-=40*dt;f.life-=dt*1.3;if(f.life<=0)floaters.splice(i,1);}
    if(hp<=0)gameOver();
  }
  function applyHit(key){
    const it=ITEMS[key];
    if(it.cat==="bad"){
      if(shield>0){addFloater("避邪!","#bff0a0");buzz(15);return;}
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
    const m=sizeMult(e.key);
    const S=e.r*2.5*m;
    if(ready(img))ctx.drawImage(img,e.x-S/2,e.y-S/2,S,S);
    ctx.restore();
    ctx.font="bold 11px sans-serif";ctx.textAlign="center";ctx.textBaseline="top";
    ctx.lineWidth=3;ctx.strokeStyle="rgba(0,0,0,.6)";ctx.strokeText(it.label,e.x,e.y+e.r*m-2);
    ctx.fillStyle="#fff";ctx.fillText(it.label,e.x,e.y+e.r*m-2);
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
      ["dragonKing","海龍王 −35血"],["poisonSnake","毒蛇 −22血"],["badWave","龍捲風 −16血"],["whirlpool","漩渦 −24血"],
      ["scorpion","蠍子 −28血"],["toad","蟾蜍 扣分 −70"],["centipede","蜈蚣 扣分/血"],["poisonFog","毒霧 扣分/血"],
      ["boat","你的龍舟"]];
    document.getElementById("legend").innerHTML=rows.map(([k,t])=>`<div><img src="${IMG[k].src}" alt=""><span>${t}</span></div>`).join("");
  })();

  resize();
  requestAnimationFrame(loop);
})();
