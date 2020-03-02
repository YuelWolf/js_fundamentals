var andres = {
    nombre: 'Andrés',
    apellido: 'Rodríguez',
    edad: 28
}

var diego = {
    nombre: 'Diego',
    apellido: 'Guerra',
    edad: 29
}

function imprimirNombreEnMayusculas(persona) {
    var {nombre} = persona
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad({nombre, edad}) {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
    
}

imprimirNombreYEdad(andres)
imprimirNombreYEdad(diego)