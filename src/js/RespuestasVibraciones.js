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
    let url = `http://127.0.0.1:443/api/Vibraciones?pag=${pag}`
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
                
                table.innerHTML += `<tr>
                <td class="Answers-table">${element.name}</td>
                <td class="Answers-table">
                <table class="vibrations" id="vibrations" style="display: flex; justify-content: center; margin: 8%">
                <tr>
                <th class="th-TableForm" colspan="9" style="background-color: #ffff; color:#110f30; border:1px solid #110f30;"><b>${element.machine}</b></th>
                </tr>
                <tr>
                    <th style="border: 0px;"></th>
                    <th class="th-TableForm" colspan="4">Lado Libre</th>
                    <th class="th-TableForm" colspan="4">Lado Carga</th>
                </tr>
                <tr>
                    <td class="td-TableForm">COMPONENTE</td>
                    <td style="border: 0px;"></td>
                    <td class="td-TableForm">MV</td>
                    <td class="td-TableForm">GE</td>
                    <td class="td-TableForm">TEMP</td>
                    <td style="border: 0px;"></td>
                    <td class="td-TableForm">MV</td>
                    <td class="td-TableForm">GE</td>
                    <td class="td-TableForm">TEMP</td>
                </tr>
                <tr>
                    <td class="td-TableForm" rowspan="3" style="background-color: #222225;">LL</td>
                    <td class="td-TableForm">CV</td>
                    <td class="Answers-Inputs">${element.llmvllcv || ""}</td>
                    <td class="Answers-Inputs">${element.llgellcv || ""}</td>                    
                    <td class="Answers-Inputs">${element.lltempllcv || ""}</td>
                    <td class="td-TableForm">CV</td>
                    <td class="Answers-Inputs">${element.lcmvllcv || ""}</td>
                    <td class="Answers-Inputs">${element.lcgellcv || ""}</td>                    
                    <td class="Answers-Inputs">${element.lctempllcv || ""}</td>
                </tr>
                <tr>
                    <td class="td-TableForm">CH</td>
                    <td class="Answers-Inputs">${element.llmvllch || ""}</td>
                    <td class="Answers-Inputs">${element.llgellch || ""}</td>
                    <td class="Answers-Inputs">${element.lltempllch || ""}</td>
                    <td class="td-TableForm">CH</td>
                    <td class="Answers-Inputs">${element.lcmvllch || ""}</td>
                    <td class="Answers-Inputs">${element.lcgellch || ""}</td>
                    <td class="Answers-Inputs">${element.lctempllch || ""}</td>
                </tr>
                <tr>
                    <td class="td-TableForm">CA</td>
                    <td class="Answers-Inputs">${element.llmvllca || ""}</td>
                    <td class="Answers-Inputs">${element.llgellca || ""}</td>
                    <td class="Answers-Inputs">${element.lltempllca || ""}</td>
                    <td class="td-TableForm">CA</td>
                    <td class="Answers-Inputs">${element.lcmvllca || ""}</td>
                    <td class="Answers-Inputs">${element.lcgellca || ""}</td>
                    <td class="Answers-Inputs">${element.lctempllca || ""}</td>
                </tr>
                <tr>
                    <td class="td-TableForm" rowspan="3" style="background-color: #222225;">LC</td>
                    <td class="td-TableForm">CV</td>
                    <td class="Answers-Inputs">${element.llmvlccv || ""}</td>
                    <td class="Answers-Inputs">${element.llgelccv || ""}</td>
                    <td class="Answers-Inputs">${element.lltemplccv || ""}</td>
                    <td class="td-TableForm">CV</td>
                    <td class="Answers-Inputs">${element.lcmvlccv || ""}</td>
                    <td class="Answers-Inputs">${element.lcgelccv || ""}</td>
                    <td class="Answers-Inputs">${element.lctemplccv || ""}</td>
                </tr>
                <tr>
                    <td class="td-TableForm">CH</td>
                    <td class="Answers-Inputs">${element.llmvlcch || ""}</td>
                    <td class="Answers-Inputs">${element.llgelcch || ""}</td>
                    <td class="Answers-Inputs">${element.lltemplcch || ""}</td>
                    <td class="td-TableForm">CH</td>
                    <td class="Answers-Inputs">${element.lcmvlcch || ""}</td>
                    <td class="Answers-Inputs">${element.lcgelcch || ""}</td>
                    <td class="Answers-Inputs">${element.lctemplcch || ""}</td>
                </tr>
                <tr>
                    <td class="td-TableForm">CA</td>
                    <td class="Answers-Inputs">${element.llmvlcca || ""}</td>
                    <td class="Answers-Inputs">${element.llgelcca || ""}</td>
                    <td class="Answers-Inputs">${element.lltemplcca || ""}</td>
                    <td class="td-TableForm">CA</td>
                    <td class="Answers-Inputs">${element.lcmvlcca || ""}</td>
                    <td class="Answers-Inputs">${element.lcgelcca || ""}</td>
                    <td class="Answers-Inputs">${element.lctemplcca || ""}</td>
                </tr>
            </table>
            </td>
            <td class="Answers-table">${new Date(element.datelocal).toLocaleString()}</td>
            </tr>`
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


