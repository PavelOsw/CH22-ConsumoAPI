const url = 'https://reqres.in/api/users?delay=3';
let tbody = document.querySelector('tbody');
let botonMostrar = document.getElementById('botonMostrar');

botonMostrar.addEventListener("click",() =>{
    let data = JSON.parse(localStorage.getItem("data"));
    let fechaCaducidad = localStorage.getItem("fechaCaducidad");
    

    if (Object.is(null, fechaCaducidad) || new Date().getTime() > fechaCaducidad) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("data", JSON.stringify(data));
                localStorage.setItem("fechaCaducidad", (new Date().getTime()) + 60_000); // 1 minuto
                let filas = '';
                for(let item of data.data) {
                    filas +=  `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.email}</td>
                        <td>${item.first_name}</td>
                        <td>${item.last_name}</td>
                        <td class="d-sm-block"><img src="${item.avatar}" class=" rounded-circle" alt="avatar"></td>
                    </tr>
                    `;
                };
                tbody.innerHTML = filas;
            })
            .catch(error => console.log(error));
    } else {
        let filas = '';
        for(let item of data.data){
            filas +=  `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.email}</td>
                        <td>${item.first_name}</td>
                        <td>${item.last_name}</td>
                        <td class="d-sm-block"><img src="${item.avatar}" class=" rounded-circle" alt="avatar"></td>
                    </tr>
                    `;
        }
        tbody.innerHTML = filas;
        console.log("Datos locales");
    }
});