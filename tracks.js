// ===== ENCORE — CATALOGUE (noms + actions récompensées) =====
// Une ligne par musique, dans l'ordre. La ligne N correspond au fichier music/N.mp3.
// Format :  "Artiste - Titre | TICKER"   (le | TICKER est optionnel)
// Tu peux en ajouter AUTANT QUE TU VEUX (illimité) : ajoute des lignes + les mp3 correspondants.
// Laisse "" pour garder le nom/ticker par défaut d'une des 6 pistes de base.
window.ENCORE_TRACKS = [
  "",   // 1  ->  music/1.mp3   (défaut: AAPL)
  "",   // 2  ->  music/2.mp3   (défaut: MSFT)
  "",   // 3  ->  music/3.mp3   (défaut: NVDA)
  "",   // 4  ->  music/4.mp3   (défaut: GOOGL)
  "",   // 5  ->  music/5.mp3   (défaut: AMZN)
  ""    // 6  ->  music/6.mp3   (défaut: META)
  // , "Lofi Girl - Snowy Nights | TSLA"   // 7  -> music/7.mp3  (exemple d'ajout)
  // , "Chillpeach - Golden Hour | SPY"    // 8  -> music/8.mp3
];
