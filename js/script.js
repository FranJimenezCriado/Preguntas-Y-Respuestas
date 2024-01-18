"use strict";

function preguntasYRespuestas() {

    fetch("https://gist.githubusercontent.com/bertez/2528edb2ab7857dae29c39d1fb669d31/raw/4891dde8eac038aa5719512adee4b4243a8063fd/quiz.json")
    
        .then((response) => { 
            return response.json(); 
        })

        .then((data) => {


            let c = 0;

            let puntuacion = 0;

            function mostrar() {

                if(c === data.length) {

                    const contenedor = document.getElementById("contenedor");

                    const contenedor2 = document.createElement("div");

                    contenedor2.className = "acabar";

                    contenedor2.innerHTML =
                `   
                    <div><p>Has terminado, tu puntuacion es ${puntuacion}</p></div>
                `
                contenedor.appendChild(contenedor2);

                }

                // Esta variable posiciona al dom en el div con id = "contenedor" de nuestro html
                const contenedor = document.getElementById("contenedor");
                // Esta variable crea un div nuevo para cada juego que vamos a mostrar usando el dom
                const contenedor2 = document.createElement("div");
                // Hacemos que todos los div (que seran las tarjetas de los juegos) tengan la misma clase: "juego"
                contenedor2.className = "preguntayrespuesta";
                // Ahora la variable que ya tiene el nuevo div la llenamos con el contenido deseado
                contenedor2.innerHTML =
                `   
                    <div class="pregunta">
                    <h2>${data[c].question}</h2>
                    </div>
                    <button id="respuesta1">
                    ${data[c].answers[0]}
                    </button>
                    <button id="respuesta2">
                    ${data[c].answers[1]}
                    </button>
                    <button id="respuesta3">
                    ${data[c].answers[2]}
                    </button>
                    <button id="respuesta4">
                    ${data[c].answers[3]}
                    </button>
                `
                // Finalmente metemos el contenido deseado dentro del div con id="contenedor" que ya obtuvimos usando la variable contenedor
                contenedor.appendChild(contenedor2);




                    const boton1 = document.getElementById("respuesta1");
    
                    const boton2 = document.getElementById("respuesta2");
        
                    const boton3 = document.getElementById("respuesta3");
        
                    const boton4 = document.getElementById("respuesta4");
        
                    const respuesta1 = data[c].answers[0];
        
                    const respuesta2 = data[c].answers[1];
        
                    const respuesta3 = data[c].answers[2];
        
                    const respuesta4 = data[c].answers[3];

                    console.log(respuesta1);

                    console.log(respuesta2);

                    console.log(respuesta3);

                    console.log(respuesta4);
    
                    boton1.addEventListener('click',(event) => {
    
                        while(c < data.length) {
        
        
                            if(respuesta1 === data[c].correct) {
        
                                c++;
        
                                console.log(c);

                                contenedor2.parentNode.removeChild(contenedor2);

                                puntuacion++;

                                console.log("Tienes estos puntos:", puntuacion);
    
                                mostrar();

                                break;
        
                            } else {

                                c++;

                                console.log(c);

                                contenedor2.parentNode.removeChild(contenedor2);

                                console.log("No has ganado puntos");

                                mostrar();

                                break;

                            }
                        };
        
                    });
        
                    boton2.addEventListener('click',(event) => {
        
                        while(c < data.length) {
        
                            if(respuesta2 === data[c].correct) {
        
                                c++;
        
                                console.log(c);

                                contenedor2.parentNode.removeChild(contenedor2);

                                puntuacion++;

                                console.log("Tienes estos puntos:", puntuacion);
    
                                mostrar();

                                break;

                            } else {

                                c++;

                                console.log(c);

                                contenedor2.parentNode.removeChild(contenedor2);

                                console.log("No has ganado puntos");

                                mostrar();
                                
                                break;

                            }
                        };
        
                    });
        
                    boton3.addEventListener('click',(event) => {
        
                        while(c < data.length) {
        
                            if(respuesta3 === data[c].correct) {
        
                                c++;
        
                                console.log(c);

                                contenedor2.parentNode.removeChild(contenedor2);

                                puntuacion++;

                                console.log("Tienes estos puntos:", puntuacion);
    
                                mostrar();

                                break;
        
                            } else {
                                
                                c++;

                                console.log(c);

                                contenedor2.parentNode.removeChild(contenedor2);

                                console.log("No has ganado puntos");

                                mostrar();
                                
                                break;

                            }
                        };
        
                    });
        
                    boton4.addEventListener('click',(event) => {
        
        
                        while(c < data.length) {
        
                            if(respuesta4 === data[c].correct) {
        
                                c++;
        
                                console.log(c);

                                contenedor2.parentNode.removeChild(contenedor2);

                                puntuacion++;

                                console.log("Tienes estos puntos:", puntuacion);
    
                                mostrar();

                                break;
        
                            } else {
                                
                                c++;

                                console.log(c);

                                contenedor2.parentNode.removeChild(contenedor2);

                                console.log("No has ganado puntos");

                                mostrar();
                                
                                break;

                            }
                        };

                    });

            };

            mostrar();
        });
}

preguntasYRespuestas();