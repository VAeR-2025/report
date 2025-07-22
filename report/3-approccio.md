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