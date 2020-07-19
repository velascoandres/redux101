import {
    incrementadorAccion,
    decrementarodAccion,
    multiplicarAccion,
    dividirAccion,
    resetAccion
} from "./contador/contador-actions";

import { contadorReducer } from "./contador/contador-reducer";


console.log(contadorReducer(10, incrementadorAccion));
console.log(contadorReducer(10, decrementarodAccion));
console.log(contadorReducer(10, multiplicarAccion));
console.log(contadorReducer(10, dividirAccion));
console.log(contadorReducer(10, resetAccion));