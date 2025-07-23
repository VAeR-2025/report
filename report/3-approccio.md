# Approccio sviluppato

## Dataset

Per la realizzazione di questo progetto è stato utilizzato il dataset "Bone Fracture Detection: Computer Vision Project" disponibile sulla piattaforma Kaggle (https://www.kaggle.com/datasets/pkdarabi/bone-fracture-detection-computer-vision-project). La collezione comprende immagini radiografiche rappresentanti vari tipi di fratture ossee, etichettate e annotate. Una caratteristica distintiva di questo dataset è la presenza, per ogni immagine radiografica, di un file di testo corrispondente contenente le coordinate della bounding box che delimita l'area della frattura. Questa annotazione granulare permette non solo di classificare la presenza di fratture, ma anche di localizzarle spazialmente all'interno dell'immagine, abilitando lo sviluppo di modelli sia di object detection che di classification. 

Le tipologie di fratture presenti nel dataset sono le seguenti:
- Elbow Positive
- Fingers Positive
- Forearm Fracture
- Humerus Fracture
- Shoulder Fracture
- Wrist Positive

Il dataset è gia suddiviso in 3 parti: una cartella di training, una di validazione e una di test. La cartella di training contiene 3631 immagini, quella di validazione 348 immagini e quella di test 169 immagini. Anche se la suddivisione del dataset non è ottimale si è deciso di utilizzarla per poter mantenere una metrica di misura rispetto alle altre soluzioni caricate su Kaggle che sfruttano questo dataset.

Le immagini sono in formato JPG e hanno dimenzioni varialbili, per questo motivo successivamente verra spiegato che e' stato necessario effettuare un resize delle immagini per poterle utilizzare per l'addestramento del modello.

![Immagine del dataset](../diagram/dataset.png)

nell'immagine sopra è possibile vedere un esempio di come sono strutturate le immagini del dataset, con le relative bounding box che delimitano le fratture ossee.

## Problematiche delle Bounding Box Standard

Vista la particolare conformazione delle bounding box presenti nel dataset, inizialmente si era considerata la possibilità di trasformarle in una versione standard, ovvero utilizzando le coordinate di un singolo punto di riferimento accompagnate da larghezza e altezza del rettangolo contenitore. Tuttavia, questo approccio presentava significative limitazioni: le bounding box risultanti erano eccessivamente grandi e spesso includevano ampie porzioni di sfondo non rilevante, creando un rapporto sfavorevole tra l'area dell'oggetto di interesse e l'area totale della bounding box. Questa sproporzione impediva alle reti neurali di convergere efficacemente durante il processo di addestramento, compromettendo le prestazioni del modello nella fase di detection degli oggetti target.

## Il Modello YOLOv8m-OBB

Per superare queste limitazioni, si è optato per l'adozione del modello YOLOv8m-OBB (Oriented Bounding Box), una variante specializzata della famiglia YOLO che supporta nativamente bounding box orientate e composte da un numero variabile di punti. YOLOv8m-OBB è specificamente progettato per gestire oggetti con forme irregolari o orientamenti arbitrari, utilizzando bounding box definite da poligoni che si adattano meglio alla geometria reale degli oggetti da rilevare. Questo modello permette di ottenere una localizzazione più precisa degli oggetti target, riducendo significativamente l'inclusione di background non rilevante e migliorando di conseguenza l'efficienza computazionale e l'accuratezza del processo di detection. La capacità di elaborare bounding box non orientate secondo gli assi cartesiani standard consente al modello di adattarsi ottimalmente alle caratteristiche geometriche specifiche del dataset, garantendo una convergenza più stabile durante l'addestramento.


## Indicatori di Prestazione Utilizzati

Per valutare in modo rigoroso e completo le performance del modello di rete neurale sviluppato per il riconoscimento di fratture ossee, sono stati impiegati diversi indicatori di prestazione standard nel campo del machine learning e della computer vision. La selezione di queste metriche è stata guidata dalla necessità di ottenere una valutazione multidimensionale che consideri sia gli aspetti di classificazione che quelli di localizzazione spaziale, elementi entrambi cruciali per un sistema di diagnostica medica. Gli indicatori principali utilizzati comprendono Precision, Recall, mAP50 e mAP50-95, ciascuno dei quali fornisce informazioni specifiche e complementari sulle capacità del modello.

### Precision
La Precision rappresenta la frazione di predizioni positive che risultano effettivamente corrette, calcolata come il rapporto tra i veri positivi e la somma di veri positivi e falsi positivi (TP/(TP+FP)). Nel contesto del riconoscimento di fratture ossee, questa metrica indica la capacità del modello di evitare falsi allarmi, misurando quanto spesso una regione identificata dal sistema come contenente una frattura sia effettivamente fratturata. Una alta precision è fondamentale in applicazioni mediche per evitare diagnosi errate che potrebbero portare a trattamenti non necessari, stress del paziente e spreco di risorse sanitarie. Nei modelli di classificazione, la precision valuta l'accuratezza delle predizioni positive, mentre nei modelli di object detection come quelli utilizzati per la localizzazione di fratture, considera anche la corretta identificazione spaziale delle bounding box.

### Recall
Il Recall, anche noto come sensibilità, misura la frazione di casi positivi reali che vengono correttamente identificati dal modello, calcolato come il rapporto tra veri positivi e la somma di veri positivi e falsi negativi (TP/(TP+FN)). In termini clinici, questa metrica quantifica la capacità del sistema di non "perdere" fratture effettivamente presenti, rappresentando un indicatore critico per la sicurezza del paziente. Un recall elevato è particolarmente importante nella diagnostica medica poiché una frattura non diagnosticata può comportare gravi conseguenze per il paziente, inclusi dolore prolungato, complicazioni e danni permanenti. Nei modelli di classificazione, il recall valuta la completezza del riconoscimento, mentre nei sistemi di detection considera la capacità di individuare tutte le istanze di fratture presenti nell'immagine, indipendentemente dalla loro posizione o dimensione.

### mAP50 
La metrica mAP50 rappresenta la media delle Average Precision calcolate per tutte le classi del modello, utilizzando una soglia di Intersection over Union (IoU) pari a 0.5. L'IoU misura la sovrapposizione tra la bounding box predetta dal modello e quella reale annotata nei dati di ground truth, con 0.5 che rappresenta una soglia relativamente permissiva che considera corretta una predizione con almeno il 50% di sovrapposizione. Questa metrica è particolarmente rilevante per i modelli di object detection poiché valuta simultaneamente la capacità di classificazione e localizzazione spaziale. Nel contesto del riconoscimento di fratture, mAP50 fornisce un indicatore bilanciato delle performance del modello, considerando sia l'accuratezza nell'identificazione delle fratture che la precisione nella loro localizzazione anatomica. Questa soglia relativamente conservativa è clinicamente significativa poiché una localizzazione approssimativa ma corretta della frattura può comunque fornire informazioni diagnostiche utili per il clinico.

### mAP50-95 

La metrica mAP50-95 estende il concetto di mAP calcolando la media delle Average Precision su un range di soglie IoU che va da 0.5 a 0.95 con incrementi di 0.05. Questa metrica più rigorosa fornisce una valutazione più stringente della qualità della localizzazione spaziale, penalizzando le predizioni che, pur essendo sostanzialmente corrette, presentano imprecisioni nella delimitazione delle bounding box. Nel contesto medico, mAP50-95 è particolarmente prezioso per valutare la precisione geometrica del modello, aspetto fondamentale per applicazioni dove la localizzazione esatta della frattura può influenzare decisioni terapeutiche specifiche, come la pianificazione di interventi chirurgici o la valutazione dell'estensione del danno. Nei modelli di regressione applicati alla localizzazione, questa metrica valuta la capacità di predire con alta precisione le coordinate delle bounding box, mentre nei sistemi di classificazione con componenti di localizzazione, misura l'accuratezza complessiva del sistema nel fornire informazioni spaziali dettagliate e clinicamente rilevanti