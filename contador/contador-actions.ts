import { Action } from "../ngrx-fake/ngrx";

export const incrementadorAccion: Action = {
    type: 'INCREMENTAR',
};

export const decrementarodAccion: Action = {
    type: 'DECREMENTAR',
};

export const multiplicarAccion: Action = {
    type: 'MULTIPLICAR',
    payload: 5,
};

export const dividirAccion: Action = {
    type: 'DIVIDIR',
    payload: 5,
};

export const resetAccion: Action = {
    type: 'RESET',
    payload: 5,
};