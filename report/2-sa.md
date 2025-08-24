# Stato dell'Arte: Riconoscimento e Localizzazione delle Fratture Ossee nelle Radiografie

## Introduzione

Il riconoscimento automatico delle fratture ossee nelle radiografie rappresenta uno dei campi più attivi nell'intelligenza artificiale medica ([Frontiers in Medicine, 2025](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2024.1506686/full)). Le fratture non diagnosticate sono l'errore diagnostico più comune nei dipartimenti di emergenza e possono portare a ritardi nel trattamento e disabilità a lungo termine ([npj Digital Medicine, 2020](https://www.nature.com/articles/s41746-020-00352-w)). Si stima che **1,71 miliardi** di pazienti in tutto il mondo soffrano di problemi muscoloscheletrici, rendendo questo campo di ricerca particolarmente rilevante.

## Approcci Basati su Deep Learning

### Reti Neurali Convoluzionali (CNN)

Le CNN rappresentano l'approccio dominante per la rilevazione delle fratture ossee, con architetture come **ResNet**, **VGG** e **DenseNet** ampiamente utilizzate ([PMC - Diagnostics, 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9600559/)). Chesneau et al. (2019) hanno sviluppato una rete CNN che raggiunge una precisione dell’**83,5%** nella rilevazione delle fratture del polso utilizzando un dataset di **14.614** radiografie. Il modello utilizza tecniche di **data augmentation** (rotazione, traslazione, zoom) per migliorare la robustezza e riduce l'overfitting attraverso **dropout layers** con coefficiente **0,5** ([Radiology: Artificial Intelligence, 2019](https://pubs.rsna.org/doi/full/10.1148/ryai.2019180001)).

## Architetture YOLO per la Localizzazione

### YOLOv8 e Miglioramenti

L'architettura **YOLOv8** con meccanismo **Hybrid-Attention (HA)** ha portato prestazioni con **mAP@0.5** compresa tra il **56,1%** e **77,1%** a seconda dell'ottimizzatore utilizzato per l'addestramento su dataset di fratture ossee. Il modulo HA integra attention spaziale e canale, riducendo i falsi positivi del **15%** rispetto al YOLOv8 standard ([MDPI Algorithms, 2024](https://www.mdpi.com/1999-4893/17/11/471)). Il modello con HA risulta più rapido nella risposta rispetto al modello tradizionale, rendendo il sistema adatto per applicazioni real-time.

Il modello **FCE-YOLOv8** incorpora Feature Context Excitation Modules che migliorano la rilevazione di fratture sottili nelle radiografie. Su un dataset di training di **14.204**, di validation di **4.094** e test di **2.029** immagini, raggiunge una **mAP@0.5** del **65,78%** ([arXiv, 2024](https://arxiv.org/html/2410.01031v1)).

## Importanza degli iperparametri

La ricerca [Exploring the impact of hyperparameter and data augmentation in YOLO V10 for accurate bone fracture detection from X-ray images](https://www.nature.com/articles/s41598-025-93505-4#Sec15) analizza l'efficacia del modello YOLO V10 per la detection automatica di fratture ossee nelle radiografie, con focus su ottimizzazione degli iperparametri e data augmentation.
Metodologia:
Il modello utilizza tecniche di image augmentation tramite unsharp masking e CLAHE prima dell'addestramento, analizzando sistematicamente l'influenza di iperparametri come numero di epoche e learning rate.

Il dataset era formato da **4.148** suddivise in **7** classi, hanno attenuto una accuratezza del **96,4%**, l'analisi statistica della precisione di classificazione tra le immagini aumentate e quelle grezze è risultata rispettivamente pari a **0,98** e **0,95**.



## Ensemble Learning

I modelli ensemble combinano multiple architetture CNN per migliorare l'accuratezza diagnostica. Un recente studio utilizza un ensemble di **4 modelli** (**ResNet-50**, **VGG-16**, **Inception-v3**, **Inception-v2**) con tecnica di voting pesato per la rilevazione di fratture dell'omero ([ScienceDirect, 2024](https://www.sciencedirect.com/science/article/pii/S0009926024004197)). Il modello ensemble raggiunge una accuracy del **92%**, precisione del **92%**, recall del **91%** e F1-score del **92%** su un dataset di **6.542** radiografie.

## Applicazioni Specifiche

### Fratture del Polso

Le fratture del polso rappresentano il **17%** di tutte le fratture in età pediatrica. Kim et al. (2024) hanno sviluppato un sistema basato su **YOLOv8** specificamente ottimizzato per radiografie del polso, utilizzando un dataset di **20.327** immagini annotate. Il modello raggiunge **mAP@0.5** del **77%** nella localizzazione di fratture del radio distale e dell'ulna ([ScienceDirect, 2024](https://www.sciencedirect.com/science/article/pii/S1746809424002027)).

