let pagine = 1;
let searchInput = '';
let dateFilterInput = '';

function nextAndPrevious(step) {
    if(step === -1 && pagine === 1){
        return
    }
    if(step === 1) {
        pagine += 1;
    }else{
        pagine -= 1;
    }
    getData(pagine, searchInput, dateFilterInput);
}
 
function search() {
    let searchInputDOM = document.getElementById('searchInput')
    if (searchInputDOM.value) {
        searchInput = searchInputDOM.value;
    } else {
        searchInput = '' 
    }
    pagine = 1;
    const dateInput = document.getElementById('Calendar');
    dateFilterInput= dateInput.value;
    getData(pagine, searchInput, dateInput.value);
    
    console.log('->', dateInput.value)
}



function getData(pag, search, dateFilter) {
    let url = `http://10.15.20.16:3000/api/rutero?pag=${pag}`
    if (search) {
        url += `&search=${search}`
    } 
    if(dateFilter) {
        url += `&dateFilter=${dateFilter}`
    }
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            const table = document.getElementById('data-router');
            table.innerHTML = '';
            console.log(result)
            result = JSON.parse(result)
            result.forEach(element => {
                table.innerHTML += `<tr><td>${element.area}</td><td>${element.name}</td>
                <td>${element.observations}</td><td>${new Date(element.datelocal).toLocaleString()}</td></tr>`
            });
        })
        .catch(error => console.log('error', error));
}

getData(1, '');

/*Button con Enter*/

function submit(e) {
    if (e.code === 'Enter') {
        document.getElementById('submit').click();
    }
}

document.getElementById("submit").onclick = function() {
    search();
}

