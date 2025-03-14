
function challange_template(id, assigment, code) {
    return `
        <div class="challenge-container padding1" id="challenge-${id}">
            <p class="title">Reto ${id}</p>
            <div class="content">
               <div class="content-section content assignment-container">
                    <div class="assignment">${assigment}</div>
                </div>
        
                <div class="content-section content">
                    <p class="subtitle">Entrada</p>
                    <div class="flex-center input-container">
                        <input id="input-${id}" placeholder="Ingrese un dato">
                        <button onclick="challenge${id}()">Enviar</button>            
                    </div>    
                </div>
                
                <div class="content-section content">
                    <p class="subtitle">Salida</p>
                    <div class="result" id="result-${id}">Salida del Reto</div>
                <div>
                
                <div class="content-section code">
                    <p class="subtitle">Code</p>
                    <pre><code>${code}</code></pre>
                <div>
            </div>
        </div>
    `
}

function challenge1() {
    let name = prompt("Inserte tu Nombre");
    result = `Hola ${name}, Bienvenido/a`;
    console.log(name);
    document.getElementById("result-1").innerHTML = result;
}

function challenge2() {
    let inputElement = document.getElementById(`input-2`);
    let resultElement = document.getElementById(`result-2`);
    
    let celsius = parseFloat(inputElement.value);
    
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = `Resultado: ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultElement.textContent = "Ingrese un número válido";
    }
}

function challenge3() {
    let inputElement = document.getElementById(`input-3`);

    if (!isNaN(inputElement.value)) {
        number = parseInt(inputElement.value);
        let result = (number % 2 === 0) ? "El número es Par." : "El número es Impar.";

        document.getElementById("result-3").textContent = result;    
    } else {
        document.getElementById("result-3").textContent = `
        Por favor, ingresa un número válido.`;
    }
}

function challenge4() {
    let inputElement = document.getElementById("input-4");

    if (inputElement.value.trim() !== "") {
        let word = inputElement.value;
        let length = word.length;

        document.getElementById("result-4").textContent = `
        La Palabra tiene ${length} Caracteres.`;
    } else {
        document.getElementById("result-4").textContent = `
        Por favor, ingresa una palabra válida.`;
    }
}

function challenge5() {
    let inputElement = document.getElementById("input-5");

    if (inputElement.value.trim() !== "") {
        let word = inputElement.value;
        let reversedWord = word.split("").reverse().join("");

        document.getElementById("result-5").textContent = `
        La palabra invertida es: ${reversedWord}`;
    } else {
        document.getElementById("result-5").textContent = `
        Por favor, ingresa una palabra válida.`;
    }
}


function challenge6() {
    let inputElement = document.getElementById("input-6");

    if (!isNaN(inputElement.value) && inputElement.value > 0) {
        let N = parseInt(inputElement.value); 
        let sum = 0;

        for (let i = 1; i <= N; i++) {
            sum += i;
        }

        document.getElementById("result-6").textContent = `
        La suma de los números desde 1 hasta ${N} es: ${sum}`;
    } else {
        document.getElementById("result-6").textContent = `
        Por favor, ingresa un número positivo válido.`;
    }
}


function challenge7() {
    let inputElement = document.getElementById("input-7");
    let word = inputElement.value.trim();

    if (word) {
        let upperCase = word.toUpperCase();
        let lowerCase = word.toLowerCase();

        document.getElementById("result-7").innerHTML = `<p>Mayúsculas: ${upperCase} <br> Minúsculas: ${lowerCase}</p>`;
    
    } else {
        document.getElementById("result-7").innerHTML = `
        Por favor, ingresa una palabra.
        `;
    }
}


function challenge8() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("result-8").textContent = `
    Número aleatorio generado: ${randomNumber}`;
}


function challenge9() {
    let inputElement = document.getElementById(`input-9`);
    let word = inputElement.value.trim().toLowerCase();
    let reversedWord = word.split('').reverse().join(''); 

    if (word === reversedWord) {
        document.getElementById("result-9").textContent = `
        "${word}" es un palíndromo.`;
    } else {
        document.getElementById("result-9").textContent = `
        "${word}" no es un palíndromo.`;
    }
}

function challenge10() {
    let inputElement = document.getElementById(`input-10`);
    let word = inputElement.value.trim().toLowerCase(); 

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelCount++;
        }
    }

    document.getElementById("result-10").textContent = `
    La palabra "${word}" tiene ${vowelCount} vocales.`;
}


document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("challenges-container");
    if (container) {
        const challenges = [
            "Escribe una función que convierta grados Celsius a Fahrenheit usando la fórmula: F = (C × 9/5) + 32",
            "Solicita un número al usuario y determina si es par o impar.",
            "Escribe un programa que pida una palabra y muestre cuántos caracteres tiene.",
            "Pide una palabra al usuario y muestra la palabra invertida.",
            "Escribe un programa que pida un número N y sume todos los números desde 1 hasta N.",
            "Solicita una palabra y muestra el resultado en mayúsculas y en minúsculas.",
            "Crea un programa que genere un número aleatorio entre 1 y 100 y lo muestre en pantalla.",
            "Pide una palabra y determina si es un palíndromo (se lee igual al derecho y al revés).",
            "Solicita una palabra y muestra cuántas vocales tiene.",
        ];

        container.innerHTML = "";

        let functionCode = window[`challenge1`]?.toString() || "Función no definida";
        container.innerHTML += `                
            <div class="challenge-container padding1" id="challenge-1">
                <p class="title">Reto 1</p>
                <div class="content">
                   <div class="content-section content assignment-container">
                        <div class="assignment">Crea un programa que solicite el nombre del usuario mediante prompt() y luego muestre un mensaje de saludo en console.log().</div>
                    </div>
                
                    <div class="content-section content">
                        <p class="subtitle">Salida</p>
                        <div class="flex-center input-container">
                            <button onclick="challenge1()">Ejecutar</button>            
                            <div class="result" id="result-1">Salida del Reto</div>
                        </div>    
                    </div>                        
                        
                    <div class="content-section code">
                        <p class="subtitle">Code</p>
                        <pre><code>${functionCode}</code></pre>
                    <div>
                </div>
            </div>`;
        challenges.forEach((assigment, index) => {
            let functionCode = window[`challenge${index + 2}`]?.toString() || "Función no definida";
            container.innerHTML += challange_template(index + 2, assigment, functionCode);
        });

    } else {
        console.error("Elemento #challenges-container no encontrado");
    }

});
