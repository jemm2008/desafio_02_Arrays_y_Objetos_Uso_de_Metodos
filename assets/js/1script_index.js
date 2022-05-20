/*
document.write(`
<div class="container">
<div class="row">
<div class="col">`)
//
let objeto = radiologia
document.write(`<h3 class="mt-4">Radiología:</h3>
<p class="mt-2"><span class="fw-bold">Primera Atención:</span> ${objeto[0].paciente} - ${objeto[0].prevision} <span class="fw-bold">|| Última Atención:</span> ${objeto[objeto.length - 1].paciente} - ${objeto[objeto.length - 1].prevision}.</p>`)
//
objeto = traumatologia
document.write(`<h3 class="mt-4">Traumatología:</h3>
<p class="mt-2"><span class="fw-bold">Primera Atención:</span> ${objeto[0].paciente} - ${objeto[0].prevision} <span class="fw-bold">|| Última Atención:</span> ${objeto[objeto.length - 1].paciente} - ${objeto[objeto.length - 1].prevision}.</p>`)
//
objeto = dental
document.write(`
<h3 class="mt-4">Dental:</h3>
<p class="mt-2"><span class="fw-bold">Primera Atención:</span> ${objeto[0].paciente} - ${objeto[0].prevision} <span class="fw-bold">|| Última Atención:</span> ${objeto[objeto.length - 1].paciente} - ${objeto[objeto.length - 1].prevision}.</p>`)
//
document.write(`
</div>
</div>
</div>
`)
*/