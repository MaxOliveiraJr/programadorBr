const config = {
    apiKey: "AIzaSyB3MCWuZTBrKnQm-RfZlpfoRrDI1RFNCE4",
    authDomain: "teste-c6e7d.firebaseapp.com",
    projectId: "teste-c6e7d",
    storageBucket: "teste-c6e7d.appspot.com",
    messagingSenderId: "859049823293",
    appId: "1:859049823293:web:c7506fe10d65df40406e54",
    measurementId: "G-86CX0TBZMD"
};


firebase.initializeApp(config);
var db = firebase.firestore();
let auth = firebase.auth();

function ler() {

    db.collection("lista").get().then(snapshot => {
        snapshot.forEach(item => {
            console.log(item.data());
        });
    }).catch(error => {
        console.log(error);
    })


    function escrever() {
        db.collection("lista")
            .add({ title: "Novo Objeto", numero: Math.random() })
            .then(doc => {
                console.log(doc)
            })
            .catch(error => {
                console.log(error)
            })
    }

}

function login() {
    let userEmail = 'max-oliveira@outlook.com.br';
    let userPassword = '123asd';

    auth.signInWithEmailAndPassword(userEmail, userPassword).then(
        loggerUser => {
            console.log(auth.currentUser)

            escrever();

        }).catch(error => {
            console.log(error)
        })

}
login();
ler();
escrever();



