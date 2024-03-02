// index.js

const partituras = [
    {
        numero: 1,
        titulo: "Corazones Siempre Alegres",
        audio: {
            soprano: "Sopranos/soprano1.mp3",
            contraAlto: "ContraAltos/contraAlto1.mp3",
            tenor: "Tenor/tenor1.mp3",
            bajo: "Bajos/bajo1.mp3",
            cuarteto: "4T/cuarteto1.mp3"
        },
        pdf: "pdf/1.-Corazones Siempre Alegres.pdf"
    },
    {
        numero: 2,
        titulo: "Nos hemos Reunido",
        audio: {
            soprano: "Sopranos/soprano2.mp3",
            contraAlto: "ContraAltos/contraAlto2.mp3",
            tenor: "Tenor/tenor2.mp3",
            bajo: "Bajos/bajo2.mp3",
            cuarteto: "4T/cuarteto2.mp3"
        },
        pdf: "pdf/2.-Nos Hemos Reunido - Partitura completa.pdf"
    },
    {
        numero: 3,
        titulo: "El Vendrá",
        audio: {
            soprano: "Sopranos/soprano3.mp3",
            contraAlto: "ContraAltos/contraAlto3.mp3",
            tenor: "Tenor/tenor3.mp3",
            bajo: "Bajos/bajo3.mp3",
            cuarteto: "4T/cuarteto3.mp3"
        },
        pdf: "pdf/3.-El Vendrá.pdf"
    },
    {
        numero: 4,
        titulo: "Me Guía Él",
        audio: {
            soprano: "Sopranos/soprano4.mp3",
            contraAlto: "ContraAltos/contraAlto4.mp3",
            tenor: "Tenor/tenor4.mp3",
            bajo: "Bajos/bajo4.mp3",
            cuarteto: "4T/cuarteto4.mp3"
        },
        pdf: "pdf/4.-Me Guía Él - Partitura completa.pdf"
    },
    {
        numero: 5,
        titulo: "Bella Sion",
        audio: {
            soprano: "Sopranos/soprano4.mp3",
            contraAlto: "ContraAltos/contraAlto4.mp3",
            tenor: "Tenor/tenor4.mp3",
            bajo: "Bajos/bajo4.mp3",
            cuarteto: "4T/cuarteto4.mp3"
        },
        pdf: "pdf/5.-Bella Sión.pdf"
    },
    {
        numero: 6,
        titulo: "Señor Jesús la luz del sol se fue",
        audio: {
            soprano: "Sopranos/soprano4.mp3",
            contraAlto: "ContraAltos/contraAlto4.mp3",
            tenor: "Tenor/tenor4.mp3",
            bajo: "Bajos/bajo4.mp3",
            cuarteto: "4T/cuarteto4.mp3"
        },
        pdf: "pdf/6.-Señor jesus la luz del sol se fue.pdf"
    },
    {
        numero: 7,
        titulo: "Aquel Rosal Lejano",
        audio: {
            soprano: "Sopranos/soprano4.mp3",
            contraAlto: "ContraAltos/contraAlto4.mp3",
            tenor: "Tenor/tenor4.mp3",
            bajo: "Bajos/bajo4.mp3",
            cuarteto: "4T/cuarteto4.mp3"
        },
        pdf: "pdf/7.-Aquel Rosal Lejano - Partitura completa.pdf"
    },
    {
        numero: 8,
        titulo: "Quedate Junto a Nosotros",
        audio: {
            soprano: "Sopranos/soprano4.mp3",
            contraAlto: "ContraAltos/contraAlto4.mp3",
            tenor: "Tenor/tenor4.mp3",
            bajo: "Bajos/bajo4.mp3",
            cuarteto: "4T/cuarteto4.mp3"
        },
        pdf: "pdf/8.-Quedate junto a nosotros.pdf"
    },
    {
        numero: 9,
        titulo: "Alcancé Salvación",
        audio: {
            soprano: "Sopranos/soprano4.mp3",
            contraAlto: "ContraAltos/contraAlto4.mp3",
            tenor: "Tenor/tenor4.mp3",
            bajo: "Bajos/bajo4.mp3",
            cuarteto: "4T/cuarteto4.mp3"
        },
        pdf: "pdf/9.-Alcance Salvacion.pdf"
    },
    {
        numero: 10,
        titulo: "Dios Está presente",
        audio: {
            soprano: "Sopranos/soprano4.mp3",
            contraAlto: "ContraAltos/contraAlto4.mp3",
            tenor: "Tenor/tenor4.mp3",
            bajo: "Bajos/bajo4.mp3",
            cuarteto: "4T/cuarteto4.mp3"
        },
        pdf: "pdf/10.-Dios esta presente .pdf"
    },
    {
        numero: 11,
        titulo: "Al mundo Paz",
        audio: {
            soprano: "Sopranos/soprano4.mp3",
            contraAlto: "ContraAltos/contraAlto4.mp3",
            tenor: "Tenor/tenor4.mp3",
            bajo: "Bajos/bajo4.mp3",
            cuarteto: "4T/cuarteto4.mp3"
        },
        pdf: "pdf/11.-Al mundo Paz nació Jesús.pdf"
    },
    {
        numero: 12,
        titulo: "Oh Glorioso Mensaje",
        audio: {
            soprano: "Sopranos/soprano4.mp3",
            contraAlto: "ContraAltos/contraAlto4.mp3",
            tenor: "Tenor/tenor4.mp3",
            bajo: "Bajos/bajo4.mp3",
            cuarteto: "4T/cuarteto4.mp3"
        },
        pdf: "pdf/12.-Oh glorioso mensaje.pdf"
    },
    // Resto de los datos de las partituras...
];

// Función para cargar el índice de partituras
function cargarIndice() {
    const indiceSection = document.getElementById("indice");
    partituras.forEach(partitura => {
        const enlace = document.createElement("a");
        enlace.href = "#";
        enlace.textContent = `${partitura.numero}: ${partitura.titulo}`;
        enlace.addEventListener("click", () => mostrarPartitura(partitura));
        indiceSection.appendChild(enlace);
        indiceSection.appendChild(document.createElement("br"));
    });
}

// Función para mostrar la partitura seleccionada
function mostrarPartitura(partitura) {
    const tituloDiv = document.getElementById("titulo");
    tituloDiv.innerHTML = `<h2>${partitura.titulo}</h2>`;

    const audioSection = document.getElementById("audio");
    audioSection.innerHTML = `<h2>Audios</h2>
        <div class="grupo-audio">
            <div class="audio">
                <h4>Soprano</h4>
                <audio controls><source src="${partitura.audio.soprano}" type="audio/mpeg"></audio>
            </div>
            <div class="audio">
                <h4>Contra Alto</h4>
                <audio controls><source src="${partitura.audio.contraAlto}" type="audio/mpeg"></audio>
            </div>
        </div>
        <div class="grupo-audio">
            <div class="audio">
                <h4>Tenor</h4>
                <audio controls><source src="${partitura.audio.tenor}" type="audio/mpeg"></audio>
            </div>
            <div class="audio">
                <h4>Bajo</h4>
                <audio controls><source src="${partitura.audio.bajo}" type="audio/mpeg"></audio>
            </div>
        </div>
        <div class="grupo-audio">
            <div class="audio">
                <h4>Cuarteto</h4>
                <audio controls><source src="${partitura.audio.cuarteto}" type="audio/mpeg"></audio>
            </div>
        </div>`;

    const pdfDiv = document.getElementById("pdf");
    pdfDiv.innerHTML = `<h2>PDF</h2><iframe src="${partitura.pdf}" width="100%" height="500px"></iframe>`;
}

// Llamar a la función para cargar el índice al cargar la página
window.onload = cargarIndice;
