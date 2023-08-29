Al usar async y await me di cuenta que debe existir una promesa dondé await debe hacer la espera para devolver el valor ya sea de exito
ó de error usando try-cacth, también async es para declarar que la funcion es asincronica y de esta manera poder usar el await ya que sin la declaracion de async no funciona.

Con el metodo .then(), pude evidenciar que puedo anidar funciones que devuelvan una promesa para de esta forma tener un control de cuando la promesa se cumpla con exito o arroje un error al momento de cumplirse.