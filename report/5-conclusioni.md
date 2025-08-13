# Conclusioni

I risultati ottenuti durante l'addestramento del modello si sono dimostrati **superiori** rispetto a quelli mediamente riportati su *Kaggle* per lo stesso dataset, dove le metriche si aggirano intorno a:
- **Precisione** ≈ `0.395`
- **mAP@0.5** ≈ `0.25`
- **mAP@0.95** ≈ `0.09`

Tali miglioramenti sono attribuibili principalmente a:
- **Normalizzazione delle immagini**
- **Tecniche di data augmentation**

Questi accorgimenti hanno contribuito a rendere il modello **più robusto**.

Tuttavia, le prestazioni complessive restano **limitate**: il modello, così com'è, **non sarebbe ancora in grado di affiancare efficacemente un operatore umano** nell’analisi o classificazione delle immagini.

---

## Sviluppi futuri

Per migliorare le performance del modello, un primo passo potrebbe essere:
- **Ottimizzazione del dataset**, garantendo maggiore uniformità nella **qualità** e nel **formato** delle immagini  
  → semplifica il *preprocessing* e fornisce dati più coerenti
- Sviluppo di **nuove funzioni di preprocessing** per uniformare meglio le immagini  
  → favorisce una migliore capacità di generalizzazione del modello  
  → riduce la variabilità **non informativa** nei dati di input
