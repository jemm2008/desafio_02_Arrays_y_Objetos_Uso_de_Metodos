//  ***  JUNTAR  PACIENTES  ANTIGUOS  y  NUEVOS  EN  UN  NUEVO  ARREGLO  ***  //
let pacientes_Antiguos = [...traumatologia]
let pacientes_Nuevos = [...traumatologia_add_Data]
let Todos_pacientes_Trauma = pacientes_Nuevos.concat(pacientes_Antiguos)

//  ***  FILTRAR  LOS  PACIENTES  CON  PREVISION  FONASA  DE  TRAUMATOLOGIA  ***  //
let pacientes_FONASA  = Todos_pacientes_Trauma.filter(function(paciente){
    return paciente.prevision == "FONASA"
});
//  ***  FUNCION  INSERTAR  (los  datos)  ***  //
let insertar = () =>{
    let Id = 1
    for(cada_paciente of pacientes_FONASA){
        let parrafo = document.createElement("p")
        parrafo.innerHTML = `${Id}.-  ${cada_paciente.paciente} - ${cada_paciente.prevision}`
        let target = document.getElementById("Insert_FONASA_Data")
        target.appendChild(parrafo)
        Id++
    }
}
// Ejecución.-
insertar()
DrawTable("Tabla_Traumatologia_FONASA",pacientes_FONASA)