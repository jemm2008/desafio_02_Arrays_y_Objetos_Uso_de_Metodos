//  ***  AÑADIR  TODOS  LOS  PACIENTES  A  UN  NUEVO  ARREGLO  ***  //
let pacientes = []
pacientes = pacientes.concat(radiologia)
pacientes = pacientes.concat(traumatologia)
pacientes = pacientes.concat(dental)
pacientes = pacientes.concat(traumatologia_add_Data)
//
//  ***  RECORRER  Y  EXTRAER  LOS  PACIENTES  DEL  ARREGLO  ***  //
pacientes.forEach((element, Index) => {
    let target = document.getElementById("Insert_Actual_Data")
    let parrafo = document.createElement("p")
    parrafo.classList.add("mb-1")
    parrafo.innerHTML = `${Index + 1}.- ${element.paciente}`
    target.appendChild(parrafo)
});