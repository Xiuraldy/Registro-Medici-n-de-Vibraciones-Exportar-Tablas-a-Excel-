console.log(window.location)

const params = new URLSearchParams(window.location.search)

console.log(params.get('area'))

const title = document.getElementById('Title')
title.innerHTML = `Rutero Técnico <br> Área: ${params.get('area')}`

const requirements = document.getElementById('Requirements')
if(`${params.get('area')}` === 'Agua de Amasado - Tanque 4') {
    requirements.innerHTML = `<h4><o><li>Nivel de tanque.</li><li>Electro válvula - Entrada de agua.</li><li>Presión de descarga.</li><li>Presión de carga.</li><li>Temperatura de agua amasado (salida).</li><li>Tren de filtración.</li></o>`
}else if(`${params.get('area')}` === 'AA (Zona 1)' || `${params.get('area')}` === 'AA (Zona 2)' || `${params.get('area')}` === 'AA (Zona 3)'){
    requirements.innerHTML = `<h4><o><li>Nivel de agua de tina y estado de aguas.</li><li>Estados de dumpers.</li><li>Encendido de turbinas.</li><li>Estado de guatas.</li></o>`
}else if(`${params.get('area')}` === 'Calderas - Colectores (Línea A)' || `${params.get('area')}` === 'Calderas - Colectores (Línea B)' || `${params.get('area')}` === 'Calderas - Colectores (Línea C)'){
    requirements.innerHTML = `<h4><o><li>Temperaturas.</li><li>Realizar purga, tiempo 3 minutos.</li></o>`
}else if(`${params.get('area')}` === 'Calderas'){
    requirements.innerHTML = `<h4><o><li>Temperaturas.</li><li>Realizar purga, tiempo 3 minutos.</li><li>Temperatura modulación.</li><li>Presiones.</li><li>Bombas de agua sobrecalentada.</li><li>Especificar que caldera está encendida.</li></o>`
}else if(`${params.get('area')}` === 'Torre de Enfriamiento'){
    requirements.innerHTML = `<h4><o><li>Temperatura de entrada.</li><li>Estado dosificación de producto químico.</li><li>Temperatura de salida.</li><li>Presiones.</li><li>Funcionamiento de ventilador.</li><li>Nivel de la tina.</li><li>Revisión de aguas suministro.</li></o>`
}else if(`${params.get('area')}` === 'Filtros de Vacío (Prensa A)' || `${params.get('area')}` === 'Filtros de Vacío (Prensa B)' || `${params.get('area')}` === 'Filtros de Vacío (Prensa C)' || `${params.get('area')}` === 'Filtros de Vacío (Prensa D)'){
    requirements.innerHTML = `<h4><o><li>PV (valor de vacío).</li><li>Estado de filtros.</li></o>`
}else if(`${params.get('area')}` === 'Bombas de Vacío 1' || `${params.get('area')}` === 'Bombas de Vacío 2' || `${params.get('area')}` === 'Bombas de Vacío 3' || `${params.get('area')}` === 'Bombas de Vacío 4' || `${params.get('area')}` === 'Bombas de Vacío 5'){
    requirements.innerHTML = `<h4><o><li>Temperaturas.</li><li>Estado de encendido.</li><li>Estado (manual o automático).</li><li>Limpieza.</li></o>`
}else if(`${params.get('area')}` === 'SDM'){
    requirements.innerHTML = `<h4><o><li>Temperatura de los sopladores.</li><li>Revisión de filtros de aspiración.</li><li>Revisión - Presiones de trabajo.</li></o>`
}else if(`${params.get('area')}` === 'Tanque agualluvias - portería'){
    requirements.innerHTML = `<h4><o><li>Revisar nivel de llenado.</li><li>Estado de operación de la bomba.</li></o>`
}

function sendRequest(form) {
    const observations = form.observations.value;

    if (observations === '') {
        const messageRequired =  document.getElementById('message-required');
            messageRequired.style.display='block';
    }else{
    const request = {
        name: form.name.value, 
        observations: form.observations.value, 
        area: params.get('area'),
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
      
      fetch("http://10.15.20.16:3000/api/rutero", requestOptions)
        .then(response => response.text())
        .then(result => {
            const formRouter =  document.getElementById('form-router');
            formRouter.style.display='none';
            const messageGood =  document.getElementById('message-good');
            messageGood.style.display='block';
        })
        .catch(error => {
            const messageBad =  document.getElementById('message-bad');
            messageBad.style.display='flex';
        }); 
    }
}

