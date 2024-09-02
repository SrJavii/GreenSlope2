# Prueba React

## Objetivo
>Desarrollar una aplicación en React que consuma datos de un endpoint que proporciona información sobre resultados de competiciones, muestre estos datos en una tabla y utilice una funcionalidad de scroll infinito para cargar más datos conforme el usuario se desplaza hacia abajo.

## Requisitos
> - Componentes React: La aplicación debe estar dividida en componentes funcionales y reutilizables.
> - Estado y Efectos: Uso eficiente de useState y useEffect para gestionar el estado y los efectos secundarios.
> - Consumo de API: Realizar llamadas a un endpoint para obtener datos.
> - Scroll Infinito: Implementar scroll infinito para cargar más datos cuando el usuario llegue al final de la tabla.
> - Diseño Responsivo: La aplicación debe ser responsiva y visualmente atractiva.

## v2

> De primeras, he redistribuido la organización del proyecto, en componentes encontramos:
> - InfiniteScrollComponent.js: Maneja la lógica para cargar los datos desde la API y controla el scroll infinito.
> - DataTable.js: Estructura y muestra la tabla con los datos.
> - TableRow.js: Muestra cada fila de la tabla.


> Por otro lado, encontramos el App.js que es el componente principal que permite mostrar los resultados y el App.js que dispone de los estilos de la app.

> Además, se hace uso de:

> - Estados para el token de autenticación, los resultados obtenidos, la página actual de datos, y si hay más datos para cargar.
> - Efectos para hacer la autenticación al cargar la app y para cargar los primeros datos una vez que tenemos el token.
> - Funciones:
    > - - loadInitialData: Carga los primeros 30 resultados cuando la app se inicia.
    > - - fetchMoreData: Se activa cuando llegas al final de la tabla, pidiendo más datos a la API y agregándolos a la tabla.
    > - - login: Hace una llamada a la API para autenticar al usuario y obtener un token.
    > - - getResults: Usa el token para pedir a la API los resultados de las competiciones por páginas.

>Por ultimo, se ha aplicado un diseño responsive que permite su correcta visualización en cualquier dispositivo.


