const config = {
    apiKey: "AIzaSyDOrp9lRyCSFicNVeiLdrMTI5M03nLs94c",
    authDomain: "colegio-41d22.firebaseapp.com",
    projectId: "colegio-41d22",
    storageBucket: "colegio-41d22.appspot.com",
    messagingSenderId: "521062037267",
    appId: "1:521062037267:web:0ed0a30d93e5c0c5c50ce6",
    measurementId: "G-85EH5TR4C0"
};

const TURMA = "turmaA";
firebase.initializeApp(config);
let db = firebase.firestore();
// Ler todos os dados de uma coleção
//   db.collection("turmaA").get()
//         .then((snapshot) => {
//             snapshot.forEach((doc) => {

//                 let aluno = doc.data();
//                 console.log(aluno.nome);
//             })
//         })


//SnapShot

// db.collection("turmaA").onSnapshot((snapshot) => {
//     snapshot.forEach((doc) => {

//         let aluno = doc.data();
//         console.log(aluno);
//     })
// })


//onSnap pra um dado

// let docRef = db.collection('turmaA').doc("Alunonovo")

// docRef.onSnapshot((doc) => {
//     let aluno = doc.data();
//     console.log(aluno)
// })

//Snap funciona com where

// db.collection("turmaA").where("notas.nota1", ">", 9).onSnapshot(snapshot => {

//         snapshot.forEach((doc) => {

//             let aluno = doc.data();
//             console.log(aluno);
//         })

//     })


// let docRef = db.collection('turmaA').doc("nojN2sGyvEsKT3ltW2dW")

// docRef.get()
//     .then((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome)
//     })



// db.collection("turmaA").where("nome", ">", "B")
//     .where("nome", "<", "Zuleide")
//     .get()
//     .then(snapshot => {

//         snapshot.forEach((doc) => {

//             let aluno = doc.data();
//             console.log(aluno);
//         })

//     })




// db.collection("turmaA").where("notas.nota1", ">", 5)
//     .get()
//     .then(snapshot => {

//         snapshot.forEach((doc) => {

//             let aluno = doc.data();
//             console.log(aluno);
//         })

//     })



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



// db.collection(TURMA).doc("Alunonovo").set(
//     {

//         sobrenome: "Oliveira",

//     }, { merge: true }
// ).then(doc => {
//     console.log('Documennto')
// })




// db.collection(TURMA).doc("sAw2AzJj3jfdIZVGMayt").update(
//     {

//         sobrenome: "Oliveira Santos",

//     }
// ).then(doc => {
//     console.log('Documento')
// })



// db.collection(TURMA).doc("Alunonovo").update(
//     {

//         cidades:['Minas Gerais']

//     }
// ).then(doc => {
//     console.log('Documennto')
// })




// db.collection(TURMA).doc("Alunonovo").update(
//     {

//         cidades: firebase.firestore.FieldValue.arrayUnion("Vitoria","Pernanbuco")

//     }
// ).then(doc => {
//     console.log('Documennto')
// })



// db.collection(TURMA).doc("Alunonovo").update(
//     {

//         cidades: firebase.firestore.FieldValue.arrayRemove("Vitoria")

//     }
// ).then(doc => {
//     console.log('Documennto')
// })



// db.collection(TURMA).doc("Alunonovo").update(
//     {

//         faltas: firebase.firestore.FieldValue.increment(1)

//     }
// ).then(doc => {
//     console.log('Documennto')
// })


// Deletando um campo
// db.collection(TURMA).doc("sAw2AzJj3jfdIZVGMayt").update(
//     {

//         notas: firebase.firestore.FieldValue.delete()

//     }
// ).then(doc => {
//     console.log('Documento')
// }).catch(error => {
//     console.log(error)
// })



// db.collection(TURMA).doc("sAw2AzJj3jfdIZVGMayt").delete().then(doc => {
//     console.log('Documento')
// }).catch(error => {
//     console.log(error)
// })

// CRIANDO UM USUÁRIO


// let newUserEmail = 'max-oliveira@outlook.com.br';
// let nweUserSenha = '123asd';

let auth = firebase.auth();




//// Criar um usuário

// auth.createUserWithEmailAndPassword(newUserEmail, nweUserSenha)
//     .then(user => {
//         console.log(user)
//     }).catch(error => {
//         console.log(error)
//     })


//Realizar login do usuário

// function login() {
//     let userEmail = 'max-oliveira@outlook.com.br';
//     let userPassword = '123asd';

//     auth.signInWithEmailAndPassword(userEmail, userPassword).then(
//         loggerUser => {
//             console.log(auth.currentUser)
//         }).catch(error => {
//             console.log(error)
//         })

// }
// login();


// Persistência de dados do usuário 



// Tipos LOCAL, SESSION, NONE

function login() {

    let userEmail = 'max-oliveira@outlook.com.br';
    let userPassword = '123asd';
    
    auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(resp => {

        auth.signInWithEmailAndPassword(userEmail, userPassword).then(
            loggerUser => {
                console.log(auth.currentUser)
            }).catch(error => {
                console.log(error)
            })

    }).catch(error => {
        console.log(error)
    })
}

// Fica análise se usuário está logando 
let user = auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.email)
    } else[
        console.log("Ninguém logado")
    ]
});



// // Deslogar o Usuário

function logout() {
    auth.signOut().then(
        console.log('O usuário foi deslogado')
    ).catch(error => {
        console.log(error)
    })
}

setTimeout(logout, 2000)


