const config = {
    apiKey: "AIzaSyDOrp9lRyCSFicNVeiLdrMTI5M03nLs94c",
    authDomain: "colegio-41d22.firebaseapp.com",
    projectId: "colegio-41d22",
    storageBucket: "colegio-41d22.appspot.com",
    messagingSenderId: "521062037267",
    appId: "1:521062037267:web:0ed0a30d93e5c0c5c50ce6",
    measurementId: "G-85EH5TR4C0"
};

firebase.initializeApp(config);

let db = firebase.firestore();
// Ler todos os dados de uma coleção
/*  db.collection("turmaA").get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {

                let aluno = doc.data();
                console.log(aluno.nome);
            })
        })

    */


let docRef = db.collection('turmaA').doc("nojN2sGyvEsKT3ltW2dW")

docRef.get()
    .then((doc) => {
        let aluno = doc.data();
        console.log(aluno.nome)
    })