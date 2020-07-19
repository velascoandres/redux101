### Redux

* Toda la data de la aplicacion se encuentra en una  estructura previamente definida

* Toda la informacion se encontrara almacenada en un unico lugar llamado `STORE`

* El valor actual de la informacion de la apliacion se llama `STATE`

* El `STATE` jamas se modifica de forma directa

* Interaccion del usuario o codigo dispara acciones que describen que sucedio

* Un nuevo estado estado es creado, en base a la combinacion del viejo estado y una accion, todo 
ese flujo se hace a traves de una accion llamada `reducer`

### ACTION
Es la unica fuente de informacion que se envia por interacciones de usuario o programa. Se busca que 
las acciones sean lo mas simples posibles.
Una accion tiene dos propiedades
* type: Que es lo que quiere hacer,
* payload: Es la menor cantidad posible de informacion para realizar la accion (opcional)

### REDUCER
Es una funcion que recibe unicamente dos argumentos y siempre retorna un estado.
* oldState: Es el estado actual de la aplicacion.
* accion: Objeto plano que indica que hay que hacer.
```text
{
 type: COMPLETAR_TAREA,
 index: 1,
}
```
### STATE
Es el estado de la aplicacion, el cual esta almacenado en una estructura de datos. 
El `state` tiene las siguentes reglas: 

#### Reglas
* El state es de solo lectura
* Estan prohibidas funciones de manipulacion de objetos y arreglos como `push`.
* Esta prohibida la manipulacion directa del objeto `oldState`.

### STORE
Es un objeto que tiene las siguientes responsabilidades:
* Contiene el estado actual de la aplicacion.
* Permite la lectura del estado via: `getState()`.
* Permite crear un nuevo estado via: `dispach(ACTION)`.
* Permite notificar cambios de estado via: `subscribe()`.
