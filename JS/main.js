//Variables
const TableMaterias = document.getElementById('materias')
const TableCalificaciones = document.getElementById('input_calificaciones')
const form = document.getElementById('form')
const btn_promedio = document.getElementById('promedio')
const final = document.getElementById('final')
const input = form.children[0].children[1]
const submit = document.getElementById('submit')
const materias = form.children[2]
const name = document.getElementById('name')
const formulario = document.getElementById('formulario')

//Events
submit.addEventListener('click', (event) => {
    event.preventDefault()
    const nombre = name.value
    console.log(name)
    const Calificacion = new Califications(nombre)

    const value = input.value
    Calificacion.createCuest(value, materias)
    
    const btn_finished = getButton()
    btn_finished.addEventListener('click', (e) => {
        e.preventDefault()
        Calificacion.setNameTitle()
        formulario.classList.add('active-finished')
        const namesMaterias = Calificacion.getData(value)
        Calificacion.setMaterias(namesMaterias)
        Calificacion.setTableMaterias(TableMaterias)
        setTimeout(() => {
            formulario.remove()//OKEY
        }, 3000)
        btn_promedio.classList.remove('hidden')
    })

    btn_promedio.addEventListener('click', () => {
        const inputs = getInputs(value)
        const PromedioFinal = Calificacion.getCalification(inputs)
        final.textContent = PromedioFinal
    })
    submit.remove()
})
