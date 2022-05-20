//  *******  DATOS  INICIALES  *******  //  
DrawTable("Insert_Table_Here", dental)
//
//
//  *******  MANIPULACION  DE  LOS  DATOS  PARA  CUMPLIR  REQUERIMIENTO  *******
//
dental.forEach((element,id) => {
    // STRING contentivo de los valores que contienen las llaves de un Elemento
    let texto = ""
        for (key in element) {
            texto += `${element[key]} - ` 
        }
    let parrafo = document.createElement("p")
    parrafo.classList.add("mb-2")
    parrafo.innerHTML = texto.slice(0, -3)
    document.getElementById("insertar_pArrafos").appendChild(parrafo)
});