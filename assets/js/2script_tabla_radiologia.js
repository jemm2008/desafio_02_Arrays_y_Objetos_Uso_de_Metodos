//  *******  MODIFICACIONES:  shift()  y  pop()  *******
let radiologia_New = [...radiologia]
radiologia_New.shift()
radiologia_New.pop()
//
DrawTable("Insert_radiologia_Actual", radiologia_New)
//
//  *******  Datos  Iniciales  RADIOLOGIA  *******
DrawTable("Insert_radiologia_Old", radiologia)
//
// let radiologia_New = radiologia.map(e => e)
// let radiologia_New = radiologia.forEach(e => radiologia_New.push(e))
// let radiologia_New = [...radiologia]