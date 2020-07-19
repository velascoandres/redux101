import { Action } from "../ngrx-fake/ngrx";

export function contadorReducer(oldState: any = 10, action: Action) {
    switch (action.type) {

        case 'INCREMENTAR':
            return oldState += 1;

        case 'DECREMENTAR':
            return oldState -= 1;

        case 'MULTIPLICAR':
            return oldState *= action.payload;

        case 'DIVIDIR':
            return oldState /= action.payload;

        case 'RESET':
            return oldState = 0;

        default:
            return oldState;
    }
}