let pagine = 1;
let searchInput = '';
let dateFilterInput = '';
let canvas = null;

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
            // console.log(result)
            result = JSON.parse(result)
            let llmvllcv = 0;
            let llgellcv = 0;
            let lltempllcv = 0;
            let lcmvllcv = 0;
            let lcgellcv = 0;
            let lctempllcv = 0;
            let llmvllch = 0;
            let llgellch = 0;
            let lltempllch = 0;
            let lcmvllch = 0;
            let lcgellch = 0;
            let lctempllch = 0;
            let llmvllca = 0;
            let llgellca = 0;
            let lltempllca = 0;
            let lcmvllca = 0;
            let lcgellca = 0;
            let lctempllca = 0;
            let llmvlccv = 0;
            let llgelccv = 0;
            let lltemplccv = 0;
            let lcmvlccv = 0;
            let lcgelccv = 0;
            let lctemplccv = 0;
            let llmvlcch = 0;
            let llgelcch = 0;
            let lltemplcch = 0;
            let lcmvlcch = 0;
            let lcgelcch = 0;
            let lctemplcch = 0;
            let llmvlcca = 0;
            let llgelcca = 0;
            let lltemplcca = 0;
            let lcmvlcca = 0;
            let lcgelcca = 0;
            let lctemplcca = 0;
            result.forEach(element => {
                llmvllcv += element.llmvllcv || 0;
                llgellcv += element.llgellcv || 0;
                lltempllcv += element.lltempllcv || 0;
                lcmvllcv += element.lcmvllcv || 0;
                lcgellcv += element.lcgellcv || 0;
                lctempllcv += element.lctempllcv || 0;
                llmvllch += element.llmvllch || 0;
                llgellch += element.llgellch || 0;
                lltempllch += element.lltempllch || 0;
                lcmvllch += element.lcmvllch || 0;
                lcgellch += element.lcgellch || 0;
                lctempllch += element.lctempllch || 0;
                llmvllca += element.llmvllca || 0;
                llgellca += element.llgellca || 0;
                lltempllca += element.lltempllca || 0;
                lcmvllca += element.lcmvllca || 0;
                lcgellca += element.lcgellca || 0;
                lctempllca += element.lctempllca || 0;
                llmvlccv += element.llmvlccv || 0;
                llgelccv += element.llgelccv || 0;
                lltemplccv += element.lltemplccv || 0;
                lcmvlccv += element.lcmvlccv || 0;
                lcgelccv += element.lcgelccv || 0;
                lctemplccv += element.lctemplccv || 0;
                llmvlcch += element.llmvlcch || 0;
                llgelcch += element.llgelcch || 0;
                lltemplcch += element.lltemplcch || 0;
                lcmvlcch += element.lcmvlcch || 0;
                lcgelcch += element.lcgelcch || 0;
                lctemplcch += element.lctemplcch || 0;
                llmvlcca += element.llmvlcca || 0;
                llgelcca += element.llgelcca || 0;
                lltemplcca += element.lltemplcca || 0;
                lcmvlcca += element.lcmvlcca || 0;
                lcgelcca += element.lcgelcca || 0;
                lctemplcca += element.lctemplcca || 0;
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
            const valueMeasure = measure.value;
            if(valueMeasure === 'Molino y Turbinas'){
                console.log('Ejecutando If')
                function color(data){
                    if (data > 0 && data < 1.5){
                        return 'rgba(75, 192, 192, 0.4)'
                    }else if(data > 1.4 && data < 4.5){
                        return 'rgba(255, 205, 86, 0.4)'
                    }else if(data > 4.4){
                        return 'rgba(255, 99, 132, 0.4)'
                    }else{
                        return 'rgba(201, 203, 207, 0.4)'
                    }
                }
                
                function border(data){
                    if (data > 0 && data < 1.5){
                        return 'rgb(75, 192, 192)'
                    }else if(data > 1.4 && data < 4.5){
                        return 'rgb(255, 205, 86)'
                    }else if(data > 4.4){
                        return 'rgb(255, 99, 132)'
                    }else{
                        return 'rgb(201, 203, 207)'
                    }
                }
            }else if(valueMeasure === 'Sopladores'){
                    console.log('Ejecutando Else')
                    function color(data){
                    if (data > 0 && data < 1.5){
                        return 'black'
                    }else if(data > 1.4 && data < 4.5){
                        return 'black'
                    }else if(data > 4.4){
                        return 'black'
                    }else{
                        return 'black'
                    }
                }
                
                function border(data){
                    if (data > 0 && data < 1.5){
                        return 'black'
                    }else if(data > 1.4 && data < 4.5){
                        return 'black'
                    }else if(data > 4.4){
                        return 'black'
                    }else{
                        return 'black'
                    }
                }
            }else{
                function color(data){
                    if (data > 0 && data < 1.5){
                        return 'black'
                    }else if(data > 1.4 && data < 4.5){
                        return 'black'
                    }else if(data > 4.4){
                        return 'black'
                    }else{
                        return 'black'
                    }
                }
            
                function border(data){
                    if (data > 0 && data < 1.5){
                        return 'black'
                    }else if(data > 1.4 && data < 4.5){
                        return 'black'
                    }else if(data > 4.4){
                        return 'black'
                    }else{
                        return 'black'
                    }
                }
            }
            const ctx = document.getElementById('myChart');
            if(canvas){
                canvas.clear();
                canvas.destroy();
            }
            canvas = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['llmvllcv', 'llgellcv', 'lltempllcv', 'lcmvllcv', 'lcgellcv', 'lctempllcv', 'llmvllch', 'llgellch', 'lltempllch', 'lcmvllch', 'lcgellch', 'lctempllch', 'llmvllca', 'llgellca', 'lltempllca', 'lcmvllca', 'lcgellca', 'lctempllca', 'llmvlccv', 'llgelccv', 'lltemplccv', 'lcmvlccv', 'lcgelccv', 'lctemplccv', 'llmvlcch', 'llgelcch', 'lltemplcch', 'lcmvlcch', 'lcgelcch', 'lctemplcch', 'llmvlcca', 'llgelcca', 'lltemplcca', 'lcmvlcca', 'lcgelcca', 'lctemplcca'],
                    datasets: [{
                    data: [llmvllcv, llgellcv, lltempllcv, lcmvllcv, lcgellcv, lctempllcv, llmvllch, llgellch, lltempllch, lcmvllch, lcgellch, lctempllch, llmvllca, llgellca, lltempllca, lcmvllca, lcgellca, lctempllca, llmvlccv, llgelccv, lltemplccv, lcmvlccv, lcgelccv, lctemplccv, llmvlcch, llgelcch, lltemplcch, lcmvlcch, lcgelcch, lctemplcch, llmvlcca, llgelcca, lltemplcca, lcmvlcca, lcgelcca, lctemplcca],
                    backgroundColor: [color(llmvllcv), color(llgellcv), color(lltempllcv), color(lcmvllcv), color(lcgellcv), color(lctempllcv), color(llmvllch), color(llgellch), color(lltempllch), color(lcmvllch), color(lcgellch), color(lctempllch), color(llmvllca), color(llgellca), color(lltempllca), color(lcmvllca), color(lcgellca), color(lctempllca), color(llmvlccv), color(llgelccv), color(lltemplccv), color(lcmvlccv), color(lcgelccv), color(lctemplccv), color(llmvlcch), color(llgelcch), color(lltemplcch), color(lcmvlcch), color(lcgelcch), color(lctemplcch), color(llmvlcca), color(llgelcca), color(lltemplcca), color(lcmvlcca), color(lcgelcca), color(lctemplcca)],
                    borderColor: [border(llmvllcv), border(llgellcv), border(lltempllcv), border(lcmvllcv), border(lcgellcv), border(lctempllcv), border(llmvllch), border(llgellch), border(lltempllch), border(lcmvllch), border(lcgellch), border(lctempllch), border(llmvllca), border(llgellca), border(lltempllca), border(lcmvllca), border(lcgellca), border(lctempllca), border(llmvlccv), border(llgelccv), border(lltemplccv), border(lcmvlccv), border(lcgelccv), border(lctemplccv), border(llmvlcch), border(llgelcch), border(lltemplcch), border(lcmvlcch), border(lcgelcch), border(lctemplcch), border(llmvlcca), border(llgelcca), border(lltemplcca), border(lcmvlcca), border(lcgelcca), border(lctemplcca)],
                    animations: {
                        borderWidth: {
                            duration: 2000,
                            easing: 'linear',
                            from: 10,
                            to: 1,
                            loop: true
                        }
                    },
                    borderRadius: 5,
                    borderSkipped: false,
                    }]
                },
                options: {
                    scales: {
                    y: {
                        beginAtZero: true
                    }
                    },
                    plugins: {
                        legend: {
                        display: false
                        }
                    },
                    animations: {
                        duration: 1000,
                        loop: true
                    }
                }
            })
        })
        .catch(error => console.log('error', error));
}

getData(1, '');

function getGraphic(){
    if(searchInput != ''){
        getData();
        search();
    }else{
        getData();
    }
}

let measure = document.getElementById('measure');
measure.addEventListener('click', getGraphic);
console.log(measure);


/*Button con Enter*/

function submit(e) {
    if (e.code === 'Enter') {
        document.getElementById('submit').click();
    }
}

document.getElementById("submit").onclick = function() {
    search();
}
