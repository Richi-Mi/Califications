class Califications{
    constructor(name){
        this.name = name
    }
    createCuest = (num, materias) => {
    
        for(let i = 1; i <= num; i++) {
            const fragment = document.createDocumentFragment()
    
            const div = document.createElement('div')
            div.classList.add('materia')
            div.textContent = '¿Cual es el nombre de la materia?'
    
            const input = document.createElement('input')
            input.classList.add('input_materias')
            input.setAttribute('id', `materia${i}`)
    
            div.appendChild(input)
            fragment.appendChild(div)
            materias.appendChild(fragment)
        }
        const button = document.createElement('button')
        button.setAttribute('id', `button_calificaciones`)
        button.classList.add('button')
        button.textContent = 'Aceptar'
        materias.appendChild(button)
    }
    getData(valor){
        const names = []
        for(let i = 1; i <= valor; i++) {
            const value = document.getElementById(`materia${i}`).value
            names.push(value)
        }
        return names
    }
    setMaterias(array) {
        this.materias = array
    }
}