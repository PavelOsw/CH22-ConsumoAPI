fetch ('https://reqres.in/api/users?delay=3')

    .then(response => response.json())
    .then(data => showData(data))
    .catch(err => console.log('Error', err));

const showData = (data) => {
    console.log(data.results[5].name);
}
