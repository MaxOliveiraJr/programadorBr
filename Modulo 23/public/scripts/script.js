document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {
    fetch("http://10.0.0.103:3000/api/all").then(res => {
        return res.json();
    }).then(json => {

        let = postElements = '';
        let posts = JSON.parse(json);
        posts.forEach(element => {
            let postElement = `
            <div id=${element.id} class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${element.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">
                        ${element.description}
                    </div>
                </div>
            </div>`
            postElements += postElement;
        });
        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPosts() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    if (title && description) {
        let post = { title, description };

        const options = {
            method: "POST",
            headers: new Headers({
                'content-Type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch("http://10.0.0.103:3000/api/new", options).then(res => {
            updatePosts();
            document.getElementById("title").value = '';
            document.getElementById("desc").value = '';
        })
    }else{
        alert("Preencha os campos")
    }
}