class Califications{
    constructor(name){
        this.name = name
    }
    setNameTitle() {
        const title = document.getElementById('titulo')
        title.textContent = `Calificaciones de ${this.name}`
        title.classList.remove('hidden')
        console.log(Califications)
    }
    createCuest = (num, materias) => {
    
        for(let i = 1; i <= num; i++) {
            const fragment = document.createDocumentFragment()

            const label = document.createElement('label')
            label.setAttribute('for', 'materia')
            label.classList.add('label')
            label.textContent = `¿Cual es el nombre de la ${i} materia?`
    
            const div = document.createElement('div')
            div.classList.add('cuestion')
    
            const input = document.createElement('input')
            input.classList.add('input')
            input.setAttribute('id', `materia${i}`)
    
            div.appendChild(label)
            div.appendChild(input)
            fragment.appendChild(div)
            materias.appendChild(fragment)
        }
        const div_btn = document.createElement('div')
        div_btn.classList.add('contenedor-btn')

        const button = document.createElement('button')
        button.setAttribute('id', `button_calificaciones`)
        button.classList.add('btn')
        button.textContent = 'Aceptar'
        div_btn.appendChild(button)
        materias.appendChild(div_btn)
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
    setTableMaterias(table) {
        const materias = this.materias
        let i = 1
        for(let materia of materias) {
            const fragment = document.createDocumentFragment()
            const div = document.createElement('div')
            div.classList.add('materiadiv')
            const p = document.createElement('label')
            const input = document.createElement('input')

            input.classList.add('input-calificacion')
            input.setAttribute('type', 'number')
            input.setAttribute('placeholder', 'Escriba su Calificacion Aqui')
            input.setAttribute('id', `promedio-${i}`)

            p.classList.add('label')
            p.textContent = materia

            div.appendChild(p)
            div.appendChild(input)
            fragment.appendChild(div)
            table.appendChild(fragment)
            i++
        }
    }
    getCalification(array) {
        const divisor = array.length 
        let totalDeTodo = 0
        for(const calificacion of array) {
            totalDeTodo = totalDeTodo +  calificacion
        }
        const promedio = totalDeTodo / divisor
        return promedio
    }
}