//Variables
const TableMaterias = document.getElementById('materias')
const TableCalificaciones = document.getElementById('input_calificaciones')
const form = document.getElementById('form')
const btn_promedio = document.getElementById('promedio')
const final = document.getElementById('final')
const input = form.children[1]
const submit = form.children[2]
const materias = form.children[3]

//Events
submit.addEventListener('click', (event) => {
    const Calificacion = new Califications('Jose Ricardo Mendoza Castañeda')

    const value = input.value
    event.preventDefault()
    Calificacion.createCuest(value, materias)
    
    const btn_finished = getButton()
    btn_finished.addEventListener('click', (e) => {
        e.preventDefault()
        const namesMaterias = Calificacion.getData(value)
        Calificacion.setMaterias(namesMaterias)
        Calificacion.setTableMaterias(TableMaterias)
    })

    btn_promedio.addEventListener('click', () => {
        const inputs = getInputs(value)
        const PromedioFinal = Calificacion.getCalification(inputs)
        final.textContent = PromedioFinal
    })
})
