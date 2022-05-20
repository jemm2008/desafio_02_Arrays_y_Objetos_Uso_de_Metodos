let pacientes = [...dental]
//  ***  FILTRAR  LOS  PACIENTES  CON  ISAPRE  -  SERVICIO  DENTAL  ***  //
let pacientes_ISAPRE  = pacientes.filter(function(paciente){
    return paciente.prevision == "ISAPRE"
});
//  ***  FUNCION  INSERTAR  (los  datos)  ***  //
let insertar = () =>{
    let Id = 1
    for(cada_paciente of pacientes_ISAPRE){
        let parrafo = document.createElement("p")
        parrafo.innerHTML = `${Id}.-  ${cada_paciente.paciente} - ${cada_paciente.prevision}`
        let target = document.getElementById("Insert_ISAPRE_Data")
        target.appendChild(parrafo)
        Id++
    }
}
//
insertar()
DrawTable("Tabla_Dental_ISAPRE",pacientes_ISAPRE)