# Stato dell'arte


# Stato dell'Arte: Riconoscimento e Localizzazione delle Fratture Ossee nelle Radiografie

## Introduzione

Il riconoscimento automatico delle fratture ossee nelle radiografie rappresenta uno dei campi più attivi nell'intelligenza artificiale medica. Le fratture non diagnosticate sono l'errore diagnostico più comune nei dipartimenti di emergenza e possono portare a ritardi nel trattamento e disabilità a lungo termine. Si stima che 1,71 miliardi di pazienti in tutto il mondo soffrano di problemi muscoloscheletrici, rendendo questo campo di ricerca particolarmente rilevante.

## Approcci Basati su Deep Learning

### Reti Neurali Convoluzionali (CNN)

Le CNN rappresentano l'approccio dominante per la rilevazione delle fratture ossee. Le reti di object detection basate su deep learning possono essere addestrate per rilevare e localizzare accuratamente le fratture nelle radiografie del polso. Diversi studi hanno dimostrato l'efficacia di queste tecniche in contesti clinici reali.

### Transfer Learning

Il transfer learning si è dimostrato un metodo di rete neurale efficiente per la rilevazione precoce e il trattamento tempestivo delle fratture. Questo approccio consente di utilizzare modelli pre-addestrati su grandi dataset per migliorare le prestazioni su dataset medici più piccoli.

## Architetture YOLO per la Localizzazione

### YOLOv8 e Miglioramenti

L'integrazione del meccanismo Hybrid-Attention (HA) nell'architettura YOLOv8 offre una soluzione robusta per migliorare accuratezza, affidabilità e velocità nelle applicazioni di imaging medico, con risultati sperimentali che dimostrano un aumento del 20% della Mean Average Precision.

Il modello FCE-YOLOv8 con Feature Context Excitation Modules è stato sviluppato specificamente per la rilevazione delle fratture nelle radiografie del polso pediatrico, dimostrando l'adattabilità dell'architettura YOLO per applicazioni mediche specializzate.

### YOLOv4 e Visualizzazione 3D

L'algoritmo YOLOv4 offre supporto prezioso nella rilevazione delle fratture e nel processo decisionale diagnostico, utilizzando CSPDarkNet-53 per diversificare i dati in ingresso e Spatial Pyramid Pooling con Path Aggregation Network per l'estrazione delle feature.

## Approcci Multi-Sito e Validazione Clinica

Attraverso uno studio multi-sito, è stato dimostrato che un sistema di deep learning può identificare accuratamente le fratture in tutto il sistema muscoloscheletrico adulto. Questa validazione su larga scala rappresenta un passo importante verso l'implementazione clinica.

## Ensemble Learning

I modelli ensemble hanno dimostrato di automatizzare efficacemente la rilevazione delle fratture ossee nelle radiografie dell'omero, mostrando prestazioni superiori rispetto ai modelli di deep learning modificati individualmente.

## Sfide e Limitazioni

L'accuratezza e la precisione dei modelli AI esistenti soffrono quando vengono utilizzati per oggetti piccoli e facilmente trascurabili come le fratture ossee, il che influisce sull'applicabilità e l'efficacia dei modelli in un ambiente clinico.

## Applicazioni Specifiche

### Fratture del Polso

La diagnosi e il trattamento delle anomalie del polso, in particolare le fratture del radio distale e dell'ulna, rappresentano una preoccupazione cruciale tra bambini e adolescenti, con diversi modelli YOLO sviluppati specificamente per questa applicazione.

### Supporto Remoto

La ricerca ha esplorato l'uso di modelli di deep learning per l'assistenza remota ai pazienti con fratture ossee, riducendo la necessità di frequenti esami e interventi professionali.

## Direzioni Future

L'intelligenza artificiale (AI) e, più specificamente, il deep learning (DL) stanno ricevendo un'attenzione significativa per assistere i radiologi nella rilevazione delle fratture ossee. Le ossa sono un componente fondamentale dell'anatomia umana, che consente il movimento e il supporto, e le fratture ossee sono prevalenti nel corpo umano, rendendo necessario lo sviluppo di sistemi automatizzati sempre più accurati.

## Fonti Bibliografiche

1. **Frontiers in Medicine (2025)** - "Diagnosis and detection of bone fracture in radiographic images using deep learning approaches"  
   URL: https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2024.1506686/full

2. **PMC - Diagnostics (2022)** - "Bone Fracture Detection Using Deep Supervised Learning from Radiological Images: A Paradigm Shift"  
   URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC9600559/

3. **BMC Medical Imaging (2024)** - "Novel transfer learning based bone fracture detection using radiographic images"  
   URL: https://bmcmedimaging.biomedcentral.com/articles/10.1186/s12880-024-01546-4

4. **Radiology: Artificial Intelligence (2019)** - "Convolutional Neural Networks for Automated Fracture Detection and Localization on Wrist Radiographs"  
   URL: https://pubs.rsna.org/doi/full/10.1148/ryai.2019180001

5. **npj Digital Medicine (2020)** - "Assessment of a deep-learning system for fracture detection in musculoskeletal radiographs"  
   URL: https://www.nature.com/articles/s41746-020-00352-w

6. **ScienceDirect (2023)** - "Detection of bone fracture based on machine learning techniques"  
   URL: https://www.sciencedirect.com/science/article/pii/S2665917423000594

7. **MDPI Diagnostics (2022)** - "Bone Fracture Detection Using Deep Supervised Learning from Radiological Images: A Paradigm Shift"  
   URL: https://www.mdpi.com/2075-4418/12/10/2420

8. **SICOT-J (2023)** - "Artificial intelligence for fracture diagnosis in orthopedic X-rays: current developments and future potential"  
   URL: https://www.sicot-j.org/articles/sicotj/full_html/2023/01/sicotj230041/sicotj230041.html

9. **Taylor & Francis (2024)** - "Remote Assistance for Bone-Fractured Patients using Deep Learning Models"  
   URL: https://www.tandfonline.com/doi/full/10.1080/08839514.2024.2423326

10. **ScienceDirect (2024)** - "Enhancing diagnosis: ensemble deep-learning model for fracture detection using X-ray images"  
    URL: https://www.sciencedirect.com/science/article/pii/S0009926024004197

11. **MDPI Algorithms (2024)** - "Deep Learning Approach for Arm Fracture Detection Based on an Improved YOLOv8 Algorithm"  
    URL: https://www.mdpi.com/1999-4893/17/11/471

12. **MDPI Diagnostics (2024)** - "Deep Learning Model Based on You Only Look Once Algorithm for Detection and Visualization of Fracture Areas in Three-Dimensional Skeletal Images"  
    URL: https://www.mdpi.com/2075-4418/14/1/11

13. **Kaggle Dataset (2024)** - "Bone Fracture Detection: Computer Vision Project"  
    URL: https://www.kaggle.com/datasets/pkdarabi/bone-fracture-detection-computer-vision-project

14. **PMC (2024)** - "Deep Learning Model Based on You Only Look Once Algorithm for Detection and Visualization of Fracture Areas in Three-Dimensional Skeletal Images"  
    URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC10802847/

15. **arXiv (2024)** - "FCE-YOLOv8: YOLOv8 with Feature Context Excitation Modules for Fracture Detection in Pediatric Wrist X-ray Images"  
    URL: https://arxiv.org/html/2410.01031v1

16. **Medium (2023)** - "Building a Bone Fracture Detection Model with YOLOv8: An End-to-End Machine Learning Project"  
    URL: https://medium.com/@malikmuhammadkashif414/building-a-bone-fracture-detection-model-with-yolov8-an-end-to-end-machine-learning-project-b71879b17846

17. **ScienceDirect (2024)** - "Enhancing wrist abnormality detection with YOLO: Analysis of state-of-the-art single-stage detection models"  
    URL: https://www.sciencedirect.com/science/article/pii/S1746809424002027

18. **ResearchGate (2024)** - "Deep Learning Approach for Arm Fracture Detection Based on an Improved YOLOv8 Algorithm"  
    URL: https://www.researchgate.net/publication/385132936_Deep_Learning_Approach_for_Arm_Fracture_Detection_Based_on_an_Improved_YOLOv8_Algorithm