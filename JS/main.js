//Variables
const form = document.getElementById('form')
const input = form.children[1]
const submit = form.children[2]
const materias = form.children[3]

//Events
submit.addEventListener('click', (event) => {
    const Calificacion = new Califications('Jose Ricardo')

    const value = input.value
    event.preventDefault()
    Calificacion.createCuest(value, materias)
    
    const btn_finished = getButton()
    btn_finished.addEventListener('click', (e) => {
        e.preventDefault()
        const namesMaterias = Calificacion.getData(value)
        Calificacion.setMaterias(namesMaterias)
    })
})