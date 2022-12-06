console.log(window.location)

const params = new URLSearchParams(window.location.search)

function sendRequest(form) {
    const request = {
        name: form.name.value, 
        machine: form.machine.value,
        llmvllcv: form.llmvllcv.value, 
        llgellcv: form.llgellcv.value, 
        lltempllcv: form.lltempllcv.value, 
        lcmvllcv: form.lcmvllcv.value, 
        lcgellcv: form.lcgellcv.value, 
        lctempllcv: form.lctempllcv.value, 
        llmvllch: form.llmvllch.value, 
        llgellch: form.llgellch.value, 
        lltempllch: form.lltempllch.value, 
        lcmvllch: form.lcmvllch.value, 
        lcgellch: form.lcgellch.value, 
        lctempllch: form.lctempllch.value, 
        llmvllca: form.llmvllca.value, 
        llgellca: form.llgellca.value, 
        lltempllca: form.lltempllca.value, 
        lcmvllca: form.lcmvllca.value, 
        lcgellca: form.lcgellca.value, 
        lctempllca: form.lctempllca.value, 
        llmvlccv: form.llmvlccv.value, 
        llgelccv: form.llgelccv.value, 
        lltemplccv: form.lltemplccv.value, 
        lcmvlccv: form.lcmvlccv.value, 
        lcgelccv: form.lcgelccv.value, 
        lctemplccv: form.lctemplccv.value, 
        llmvlcch: form.llmvlcch.value, 
        llgelcch: form.llgelcch.value, 
        lltemplcch: form.lltemplcch.value, 
        lcmvlcch: form.lcmvlcch.value, 
        lcgelcch: form.lcgelcch.value, 
        lctemplcch: form.lctemplcch.value, 
        llmvlcca: form.llmvlcca.value, 
        llgelcca: form.llgelcca.value, 
        lltemplcca: form.lltemplcca.value, 
        lcmvlcca: form.lcmvlcca.value, 
        lcgelcca: form.lcgelcca.value, 
        lctemplcca: form.lctemplcca.value, 
        datelocal: new Date().toLocaleString()
    }
    console.log(request)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(request),
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:443/api/Vibraciones", requestOptions)
        .then(response => response.text())
        .then(result => {
            const formRouter =  document.getElementById('form-vibrations');
            formRouter.style.display='none';
            const messageGood =  document.getElementById('message-good');
            messageGood.style.display='block';
        })
        .catch(error => {
            const messageBad =  document.getElementById('message-bad');
            messageBad.style.display='flex';
        }); 
}

