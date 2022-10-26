const cep = document.querySelector("#cep");

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")

    fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then(res => res.json())
    .then(data => {
        for(const campo in data) {
            if(document.querySelector("#" + campo)) {
                document.querySelector("#" + campo).value = data[campo]
            }
        }
    })
    .catch(e => console.log("Erro: " + e.message))
})