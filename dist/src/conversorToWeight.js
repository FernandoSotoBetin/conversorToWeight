"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = converTo;
function converTo(unit1, unit2, quantity) {

    var tableWeight = [{ name: "Libras a Kilogramos", unitTo: "lb-kg", multiplier: 0.4535924 }, { name: "Kilogramos a Libras", unitTo: "kg-lb", multiplier: 2.2046224 }];

    var parameter = unit1 + "-" + unit2;
    var resultado = void 0;
    switch (parameter) {
        case 'lb-kg':
            resultado = quantity * tableWeight[0].multiplier;
            break;
        case 'kg-lb':
            resultado = quantity * tableWeight[1].multiplier;
            break;
        default:
            resultado = 0;
    }
    return parseFloat(resultado.toFixed(2));
}