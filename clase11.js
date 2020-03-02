var andres = {
    nombre: 'Andrés',
    apellido: 'Rodríguez',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero){
        console.log('Ingeniero')        
    }

    if(persona.cocinero){
        console.log('Cocinero')        
    }

    if (persona.cantante) {
        console.log('Cantante')        
    }

    if (persona.dj) {
        console.log('Dj')        
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')        
    }

    if (persona.drone) {
        console.log('Vuela drone')        
    }
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
        
    } else {
        console.log(`${persona.nombre} es meno de edad`);
        
    }
}

imprimirSiEsMayorDeEdad(andres)

