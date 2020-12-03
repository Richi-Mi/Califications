const getButton = () => {
    const button = document.getElementById('button_calificaciones')
    return button
}
const getInputs = (value) => {
    const inputs = []
    for(let i = 1; i <= value; i++) {
        const input = document.getElementById(`promedio-${i}`)
        inputs.push(parseInt(input.value))
    }
    return inputs
}
