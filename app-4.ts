import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador-reducer';
import { incrementadorAccion, decrementarodAccion, dividirAccion, multiplicarAccion } from './contador/contador-actions';

const store: Store = createStore(contadorReducer);


store.subscribe(
    () => {
        console.log(store.getState());
    },
);

store.dispatch(incrementadorAccion);
store.dispatch(decrementarodAccion);
store.dispatch(dividirAccion);
store.dispatch(multiplicarAccion);

