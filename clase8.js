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

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(andres)
imprimirNombreEnMayusculas(diego)

function cumpleanos(persona) {
    return{
        ...persona,
        edad: persona.edad + 1
    }
}