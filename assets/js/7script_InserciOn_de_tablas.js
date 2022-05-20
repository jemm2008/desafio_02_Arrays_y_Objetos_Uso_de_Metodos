//
function DrawTable(Target_ID_Element,my_Array_of_Objects) {
    let my_Object_Keys = ["#"]
    my_Object_Keys = my_Object_Keys.concat(Object.keys(my_Array_of_Objects[0]))
    let table = CreateTable()
table.appendChild(CreateTableHeader(my_Object_Keys))
table.appendChild(CreateTableBody(my_Array_of_Objects))
let target = document.getElementById(Target_ID_Element)
target.appendChild(table)
}

function CreateTable() {
    let table = document.createElement("table")
    table.classList.add("table", "table-striped", "table-hover")
    table.setAttribute("style","border: 2px solid lightgray;")
    return table
}

function CreateTableHeader(columns) {
    let THead = document.createElement("thead")
    let Tr = document.createElement("tr")
    for (let column of columns){
        let Th = document.createElement("th")
        Th.setAttribute("scope", "col")
        Th.innerHTML = column
        Tr.appendChild(Th)
    }
    THead.appendChild(Tr)
    return THead 
}

function CreateTableBody (my_Array_of_Objects) {
    let TBody = document.createElement("tbody")
    my_Array_of_Objects.forEach((My_Object, My_Object_id) => {
        let Tr = document.createElement("tr")
        let Th = document.createElement("th")
        Th.innerHTML = My_Object_id + 1
        Th.setAttribute("scope", "row")
        Tr.appendChild(Th)
            for(key in My_Object){
                let Td = document.createElement("td")
                Td.innerHTML = My_Object[key]
                Tr.appendChild(Td)
            }
        TBody.appendChild(Tr)
    });
    return TBody
}