const tableWeight = [
        { name : "Libras a Kilogramos", unitTo : "lb-kg", multiplier: 0.4535924 },
        { name : "Kilogramos a Libras", unitTo : "kg-lb", multiplier: 2.2046224 }
    ]
export function converTo(unit1, unit2, quantity) {
    
    let parameter = `${unit1}-${unit2}`
    let resultado
    switch (parameter) {
        case 'lb-kg':
            resultado = quantity * tableWeight[0].multiplier
            break
        case 'kg-lb':
            resultado = quantity * tableWeight[1].multiplier
            break
        default:
            resultado = 0
    }
    return parseFloat(resultado.toFixed(2))
}
