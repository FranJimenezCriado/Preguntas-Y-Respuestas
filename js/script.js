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

                    const contenedorFinal = document.createElement("div");

                    contenedorFinal.className = "acabar";

                    contenedorFinal.innerHTML =
                `   
                    <div><p>Has terminado, tu puntuacion es ${puntuacion}</p></div>
                `
                contenedor.appendChild(contenedorFinal);

                }


                const contenedor = document.getElementById("contenedor");

                const contenedor2 = document.createElement("div");

                if(c < data.length) {
                    contenedor2.className = "preguntayrespuesta";

                contenedor2.innerHTML =
                `   
                    <div class="pregunta">
                    <h2>Pregunta ${c + 1}: ${data[c].question}</h2>
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

                contenedor.appendChild(contenedor2);
                }

                    const boton1 = document.getElementById("respuesta1");
    
                    const boton2 = document.getElementById("respuesta2");
        
                    const boton3 = document.getElementById("respuesta3");
        
                    const boton4 = document.getElementById("respuesta4");
        
                    let respuesta1;
        
                    let respuesta2;
        
                    let respuesta3;
        
                    let respuesta4;

                    if (c < data.length) {

                        respuesta1 = data[c].answers[0];

                        respuesta2 = data[c].answers[1];

                        respuesta3 = data[c].answers[2];

                        respuesta4 = data[c].answers[3];

                    }
    
                    if (c < data.length) {
                        boton1.addEventListener('click',(event) => {
    
                            while(c < data.length) {
            
            
                                if(respuesta1 === data[c].correct) {
            
                                    c++;
    
                                    contenedor2.parentNode.removeChild(contenedor2);
    
                                    puntuacion++;
        
                                    mostrar();
    
                                    break;
            
                                } else {
    
                                    c++;
    
                                    contenedor2.parentNode.removeChild(contenedor2);
    
                                    mostrar();
    
                                    break;
    
                                }
                            };
            
                        });
            
                        boton2.addEventListener('click',(event) => {
            
                            while(c < data.length) {
            
                                if(respuesta2 === data[c].correct) {
            
                                    c++;
    
                                    contenedor2.parentNode.removeChild(contenedor2);
    
                                    puntuacion++;
        
                                    mostrar();
    
                                    break;
    
                                } else {
    
                                    c++;
    
                                    contenedor2.parentNode.removeChild(contenedor2);
    
                                    mostrar();
                                    
                                    break;
    
                                }
                            };
            
                        });
            
                        boton3.addEventListener('click',(event) => {
            
                            while(c < data.length) {
            
                                if(respuesta3 === data[c].correct) {
            
                                    c++;
    
                                    contenedor2.parentNode.removeChild(contenedor2);
    
                                    puntuacion++;
        
                                    mostrar();
    
                                    break;
            
                                } else {
                                    
                                    c++;
    
                                    contenedor2.parentNode.removeChild(contenedor2);
    
                                    mostrar();
                                    
                                    break;
    
                                }
                            };
            
                        });
            
                        boton4.addEventListener('click',(event) => {
            
            
                            while(c < data.length) {
            
                                if(respuesta4 === data[c].correct) {
            
                                    c++;
    
                                    contenedor2.parentNode.removeChild(contenedor2);
    
                                    puntuacion++;
        
                                    mostrar();
    
                                    break;
            
                                } else {
                                    
                                    c++;
    
                                    contenedor2.parentNode.removeChild(contenedor2);
    
                                    mostrar();
                                    
                                    break;
    
                                }
                            };
    
                        });
                    }

            };

            mostrar();
        });
}

preguntasYRespuestas();