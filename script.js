    const timelineData = [
        { date: '1/1/1950', title: 'Turing Test', description: 'El matemático británico Alan Turing propone un test para determinar si una máquina puede exhibir comportamiento inteligente. Este test se convierte en una referencia fundamental para la definición de la IA.' },
        { date: '1/1/1951', title: 'Ferranti Mark I: Innovación en Computación', description: 'La primera computadora comercialmente disponible, Ferranti Mark I, realiza cálculos complejos, sentando las bases para futuras investigaciones en IA.' },
        { date: '1/1/1956', title: 'Dartmouth Workshop: El nacimiento de un campo', description: 'En este taller, se acuña el término «Inteligencia Artificial» y se reconoce como un campo académico legítimo.' },
        { date: '1/1/1961', title: 'Unimate: La robótica toma forma', description: 'El primer robot industrial, Unimate, comienza a trabajar en una línea de montaje en General Motors, marcando el inicio de la era de la robótica industrial.' },
        { date: '1/1/1965', title: 'ELIZA: Conversaciones con máquinas', description: 'Desarrollada en el MIT, ELIZA es una de las primeras IA en intentar simular una conversación humana.' },
        { date: '1/1/1969', title: 'Shakey the Robot: Explorando el mundo', description: 'Shakey, desarrollado en Stanford, se convierte en el primer robot móvil controlado por IA capaz de razonar sobre su entorno para moverse.' },
        { date: '1/1/1972', title: 'PROLOG: Programando la inteligencia', description: 'Se introduce el lenguaje de programación PROLOG, que se convierte en uno de los principales lenguajes para la programación en IA.' },
        { date: '1/1/1973', title: 'Invierno de la IA', description: 'Este periodo, conocido como el "Invierno de la IA", es marcado por la publicación del informe de la Comisión de la Inteligencia Artificial del gobierno del Reino Unido, que critica el progreso limitado de la IA y la falta de avances en la solución de problemas complejos. Este informe subraya las dificultades inherentes a la IA en ese momento y provoca una disminución en la financiación y el interés en la investigación de IA durante los años siguientes.' },
        { date: '1/1/1980', title: 'IA como industria con aplicaciones prácticas', description: 'La aparición de sistemas expertos, como MYCIN y XCON, marca el inicio de una era en la que la IA comienza a ser utilizada en entornos comerciales para resolver problemas específicos en áreas como la medicina y la gestión de inventarios.' },
        { date: '1/1/1986', title: 'Algoritmo de retropropagación', description: 'El regreso de las redes neuronales en la década de 1980 se debió en gran parte al desarrollo del algoritmo de retropropagación por Geoffrey Hinton, David Rumelhart y Ronald Williams. Este algoritmo permite el entrenamiento eficiente de redes neuronales profundas, reviviendo el interés en estas técnicas y sentando las bases para el aprendizaje profundo que dominará las décadas siguientes.' },
        { date: '1/1/1987', title: 'IA se establece como una disciplina científica seria y rigurosa', description: 'La organización de conferencias internacionales como el Congreso Internacional sobre Inteligencia Artificial y la publicación de investigaciones clave contribuyen a la formalización de la IA como una ciencia, con un enfoque en la teoría y la investigación de métodos y algoritmos.' },
        { date: '1/1/1979', title: 'Stanford Cart: Movilidad autónoma', description: 'El Stanford Cart logra navegar autónomamente a través de una habitación llena de obstáculos, sentando las bases para los futuros vehículos autónomos.' },
        { date: '1/1/2004', title: 'DARPA Grand Challenge: Vehículos que piensan', description: 'El primer vehículo autónomo recorre un trayecto de 131 millas en el desierto, demostrando el potencial de la IA en la industria automotriz.' },
        { date: '1/1/2011', title: 'Watson en Jeopardy: Compitiendo con la mente humana', description: 'IBM Watson, una supercomputadora con capacidades de IA, compite y gana contra campeones humanos en el programa de televisión «Jeopardy», demostrando la capacidad de la IA para procesar y responder preguntas en lenguaje natural.' },
        { date: '1/1/2015', title: 'AlphaGo: Estrategia a nivel maestro', description: 'Desarrollado por DeepMind, AlphaGo sorprende al mundo al vencer al campeón mundial de Go, un juego milenario conocido por su complejidad estratégica.' },
        { date: '1/1/2018', title: 'GPT-2: La nueva era de la generación de texto', description: 'OpenAI presenta GPT-2, un modelo generativo que puede escribir ensayos, responder preguntas y generar contenido que es prácticamente indistinguible del escrito por humanos.' },
        { date: '1/1/2020', title: 'DeepSpeed y T-NLG: Avances en generación de lenguaje', description: 'Microsoft presenta DeepSpeed, una biblioteca de optimización para deep learning, y T-NLG, un modelo de generación de lenguaje con 17 mil millones de parámetros.' },
        { date: '1/1/2020', title: 'GPT-3 de OpenAI', description: 'OpenAI lanza GPT-3, un modelo autoregresivo que produce texto, código y poesía con una calidad excepcionalmente similar a la humana.' },
        { date: '1/1/2021', title: 'OpenAI Codex: Asistencia en programación', description: 'OpenAI presenta Codex, una herramienta que asiste a los programadores generando código automáticamente. Basado en GPT-3, se convierte en una herramienta esencial para desarrolladores.' },
        { date: '1/1/2022', title: 'ChatGPT: Cambiando la forma en que comunicamos', description: 'OpenAI lanza ChatGPT, un chatbot de IA que se basa inicialmente en GPT-3.5. A pesar de sus elogios por su fluidez, también enfrenta críticas por algunas respuestas incorrectas.' },
        { date: '1/1/2023', title: 'GPT-4 y Google Bard: La vanguardia de la IA', description: 'OpenAI presenta GPT-4, una versión mejorada y multimodal que permite la entrada de imágenes además de texto. Google lanza Google Bard, una nueva alternativa en chatbots.' },
        { date: '1/1/2023', title: 'Expansión y adopción de ChatGPT', description: 'Para enero de 2023, ChatGPT alcanza más de 100 millones de usuarios. Con su integración con GPT-4, amplía aún más sus capacidades y atractivo.' },
        { date: '1/1/2023', title: 'Reconocimientos y logros de GPT-4', description: 'GPT-4 logra puntajes impresionantes en pruebas estandarizadas como el SAT, LSAT y Uniform Bar Exam, demostrando capacidades comparables a las de humanos en diversas áreas.' }
    ];


    const milestones = [
        { date: '1/1/1943', title: 'Genesis de la IA' },
        { date: '1/1/1956', title: 'Nacimiento de la IA' },
        { date: '1/1/1969', title: 'Entusiasmo Inicial, grandes esperanzas' },
        { date: '1/1/1973', title: 'Una dosis de Realidad' },
        { date: '1/1/1979', title: 'Sistemas basados en el conocimiento: ¿Clave de Poder?' },
        { date: '1/1/1980', title: 'La IA se convierte en Industria' },
        { date: '1/1/1986', title: 'Regreso de las Redes Neuronales' },
        { date: '1/1/1987', title: 'La IA se convierte en Ciencia' },
        { date: '1/1/1995', title: 'Emergencia de los sistemas Inteligentes' } ];


        document.addEventListener('DOMContentLoaded', function () {
            const timelineContainer = document.querySelector('.timeline');
        
            if (!timelineContainer) {
                console.error('No se encontró el contenedor de la línea del tiempo.');
                return;
            }
        
            // Agrupar eventos por año
            const groupedEvents = timelineData.reduce((acc, event) => {
                const year = event.date.split('/')[2];
                if (!acc[year]) {
                    acc[year] = [];
                }
                acc[year].push(event);
                return acc;
            }, {});
        
            // Ordenar milestones por año
            milestones.sort((a, b) => new Date(a.date) - new Date(b.date));
        
            // Crear un mapa de rangos de años
            const ranges = milestones.map((milestone, index) => {
                const startYear = parseInt(milestone.date.split('/')[2]);
                const endYear = milestones[index + 1] ? parseInt(milestones[index + 1].date.split('/')[2]) : new Date().getFullYear();
                return { title: milestone.title, startYear, endYear };
            });
        
            // Añadir hitos y eventos
            ranges.forEach(range => {
                // Crear el encabezado del hito
                const milestoneHeader = document.createElement('h2');
                milestoneHeader.className = 'year-header milestone-header'; // Estilo de los hitos
                milestoneHeader.textContent = `${range.title} (${range.startYear})`;
                timelineContainer.appendChild(milestoneHeader);
        
                // Añadir eventos que están dentro del rango de años del hito
                Object.keys(groupedEvents).forEach(year => {
                    const yearNumber = parseInt(year);
                    if (yearNumber >= range.startYear && yearNumber < range.endYear) {
                        groupedEvents[year].forEach((event, index) => {
                            const timelineItem = document.createElement('li');
                            timelineItem.className = `relative mb-12 ${index % 2 === 0 ? 'ml-12' : 'ml-12'}`;
        
                            const dateElement = document.createElement('div');
                            dateElement.className = `absolute w-8 h-8 flex items-center justify-center rounded-full ${index % 2 === 0 ? 'bg-blue-500' : 'bg-blue-500'} text-white -left-4`;
                            dateElement.textContent = new Date(event.date).getFullYear();
        
                            const contentElement = document.createElement('div');
                            contentElement.className = 'bg-white p-6 rounded-lg shadow-md border-l-4 ' + (index % 2 === 0 ? 'border-blue-500' : 'border-blue-500');
        
                            const titleElement = document.createElement('h3');
                            titleElement.className = 'text-xl font-semibold text-gray-900';
                            titleElement.textContent = event.title;
        
                            const descriptionElement = document.createElement('p');
                            descriptionElement.className = 'text-gray-700';
                            descriptionElement.textContent = event.description;
        
                            contentElement.appendChild(titleElement);
                            contentElement.appendChild(descriptionElement);
        
                            timelineItem.appendChild(dateElement);
                            timelineItem.appendChild(contentElement);
        
                            timelineContainer.appendChild(timelineItem);
                        });
                    }
                });
            });
        });
        