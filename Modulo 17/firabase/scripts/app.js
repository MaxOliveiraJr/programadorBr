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


// let docRef = db.collection('turmaA').doc("nojN2sGyvEsKT3ltW2dW")

// docRef.get()
//     .then((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome)
//     })



db.collection("turmaA").where("nome", ">", "B")
    .where("nome", "<", "Zuleide")
    .get()
    .then(snapshot => {

        snapshot.forEach((doc) => {

            let aluno = doc.data();
            console.log(aluno);
        })

    })




db.collection("turmaA").where("notas.nota1", ">", 5)
    .get()
    .then(snapshot => {

        snapshot.forEach((doc) => {

            let aluno = doc.data();
            console.log(aluno);
        })

    })


const TURMA = "turmaA";
/*
db.collection(TURMA).add({
    nome: "Marcos",
    sobrenome: "Santos",
    notas: {
        nota1: 9.6,
        nota2: 7.5
    },
    advertencias: [

        {desc: "fugiu", data: "21.02.2019"},
        {desc: "Não veio", data: "21.02.2019"}

    ]


}).then(doc => {
    console.log('Documento iserido com sucesso');
}).catch(error => {
    console.log(error)
})


*/

/*
db.collection(TURMA).doc("Alunonovo").set(
    {
        nome: "Mariana",
        sobrenome: "Olivera",
        notas: { nota1: 9.6, nota2: 7.5 }
    }
).then(doc => {
    console.log('Documennto')
})*/



db.collection(TURMA).doc("Alunonovo").set(
    {

        sobrenome: "Oliveira",

    }, { merge: true }
).then(doc => {
    console.log('Documennto')
})




db.collection(TURMA).doc("sAw2AzJj3jfdIZVGMayt").update(
    {

        sobrenome: "Oliveira Santos",

    }
).then(doc => {
    console.log('Documento')
})



db.collection(TURMA).doc("Alunonovo").update(
    {

        cidades:['Minas Gerais']

    }
).then(doc => {
    console.log('Documennto')
})




db.collection(TURMA).doc("Alunonovo").update(
    {

        cidades: firebase.firestore.FieldValue.arrayUnion("Vitoria","Pernanbuco")

    }
).then(doc => {
    console.log('Documennto')
})



db.collection(TURMA).doc("Alunonovo").update(
    {

        cidades: firebase.firestore.FieldValue.arrayRemove("Vitoria")

    }
).then(doc => {
    console.log('Documennto')
})



db.collection(TURMA).doc("Alunonovo").update(
    {

        faltas: firebase.firestore.FieldValue.increment(1)

    }
).then(doc => {
    console.log('Documennto')
})