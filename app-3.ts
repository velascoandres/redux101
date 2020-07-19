import { Reducer, Action } from "./ngrx-fake/ngrx";
import { contadorReducer } from "./contador/contador-reducer";
import { incrementadorAccion, decrementarodAccion } from "./contador/contador-actions";

class Store<T>{
    constructor(
        private _reducer: Reducer<T>,
        private _state: T,
    ) {

    }

    get state() {
        return this._state;
    }

    dispatch(action: Action) {
        this._state = this._reducer(this._state, action);
    }
}

const store = new Store(contadorReducer, 10);

console.log(store.state);

store.dispatch(
    incrementadorAccion,
);

console.log(store.state);

store.dispatch(
    decrementarodAccion,
);

console.log(store.state);
