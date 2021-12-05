const divELEM = $('#container');
const btn = $('#btn');

btn.on('click', async (e) => {
    var resp = await getResponse()
    divELEM.html(resp);
})

function getResponse(){
    return new Promise(resolve => {
        fetch('http://localhost:5000/items', {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(data => {
            resolve(JSON.stringify(data))
        })
        .catch(err => {
            resolve(err)
        })
    })
}