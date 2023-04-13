armar proyecto de 0 en next.js

inicializar en repositorio git

1. crear un router:

- home
- shop
- product

2. crear products/1

3. crear repositorio git, crear repositorio en github

4. usar la info de products bajada desde un servidor. 
usar axios.

5. Agregar una página nueva en `/products/new` que sirva para crear nuevos productos. 
La página deberá tener un formulario con los inputs: title (el título del producto), img (un string que contenga la url de la imágen), subTitle (un subtitulo o descripción del producto) y price (el precio del producto). 
También deberá tener un botón para submitear el producto nuevo. Al submitear el producto nuevo deberá hacer un http POST a la api local a la ruta /products para crear un nuevo producto (ver axios.post), enviando en el body del request los valores de los inputs antes mencionados. Para los inputs usar TextField de MaterialUI.


# firstapp

1. cuando el handle submit se ejecuta correctamente, implementar https://www.npmjs.com/package/react-toastify 
	1. enviar mensaje de success
	2. que redireccione a la pagina de productos para ver el producto nuevo automaticamente. (usar navigate the next.js
2. implementar para el formulario usar https://formik.org/
que todos los campos sean requeridos
3. cuando haya algun error notificar con tostify que hubo un error
 

