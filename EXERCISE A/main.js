

// Usando un bucle for, escribe una función que acepte un número y muestre por consola la lista de números desde el 0 al valor introducido en al función.

function counter(num) {
    if (typeof(num) === "number") {
        for (let i = 0; i <= num; i++) {
            console.log(i);
        }
    } else {
        console.log("Ingresa un numero");
    }
}

counter(20)

