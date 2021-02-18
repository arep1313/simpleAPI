# simpleAPI
Un pequeño API que hice para una prueba de Realize. No es la gran cosa, solamente tiene funciones de suma de dos numeros, suma de multiples numeros y promedio. 

Para inicializarlo se necesita nodejs

1. npm install
2. npm start

Adicionalmente también cree una imagen de docker que se puede obtener en:
https://hub.docker.com/repository/docker/arestradapa/simpleapi

La api tiene 3 posibles llamadas GET

/api/addtwo
Esta función es para sumar DOS numeros
En este caso se tienen que mandar en el cuerpo un json con esta estrectura:

{
    "number1":3,
    "number2":4
}

/api/add
Esta función es para sumar multiples numeros.
En este caso se tienen que mandar en el cuerpo un json con esta estrectura:

{
    "numbers":[ 1, 2, 3 ,5,67],
    "x":3
}

/api/avrg
Esta función es para obtener el promedio de multiples numeros. 
En este caso se tienen que mandar en el cuerpo un json con esta estrectura:

{
    "numbers":[ 1, 2, 3 ,5,6,7]
}
