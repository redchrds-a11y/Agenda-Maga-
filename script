/*
=========================================
 MI AGENDA
=========================================
*/


/*
=========================================
 CLASES
=========================================
*/

const clases = [

  {
    dia: "lunes",
    inicio: "12:00",
    fin: "13:50",
    nombre: "Fundamentos de T. Electromagnética"
  },

  {
    dia: "lunes",
    inicio: "16:00",
    fin: "17:50",
    nombre: "Geología Estructural"
  },


  {
    dia: "martes",
    inicio: "07:00",
    fin: "08:50",
    nombre: "Física de las Ondas"
  },

  {
    dia: "martes",
    inicio: "09:00",
    fin: "10:50",
    nombre: "Análisis Espectral de Señales"
  },

  {
    dia: "martes",
    inicio: "17:00",
    fin: "18:50",
    nombre: "Variable Compleja Aplicada a la Geofísica"
  },


  {
    dia: "miercoles",
    inicio: "09:00",
    fin: "11:50",
    nombre: "G. Aplicada a la Ingeniería Civil"
  },

  {
    dia: "miercoles",
    inicio: "12:00",
    fin: "13:50",
    nombre: "Fundamentos de T. Electromagnética"
  },

  {
    dia: "miercoles",
    inicio: "16:00",
    fin: "17:50",
    nombre: "Geología Estructural"
  },


  {
    dia: "jueves",
    inicio: "07:00",
    fin: "08:50",
    nombre: "Física de las Ondas"
  },

  {
    dia: "jueves",
    inicio: "09:00",
    fin: "10:50",
    nombre: "Análisis Espectral de Señales"
  },

  {
    dia: "jueves",
    inicio: "17:00",
    fin: "18:50",
    nombre: "Variable Compleja Aplicada a la Geofísica"
  },


  {
    dia: "viernes",
    inicio: "09:00",
    fin: "11:50",
    nombre: "G. Aplicada a la Ingeniería Civil"
  },

  {
    dia: "viernes",
    inicio: "12:00",
    fin: "13:50",
    nombre: "Fundamentos de T. Electromagnética"
  },


  {
    dia: "sabado",
    inicio: "08:00",
    fin: "11:50",
    nombre: "Economía"
  }

];


/*
=========================================
 OBJETIVOS
=========================================
*/

const habitos = {

  ejercicio: {
    objetivo: 3,
    duracion: 60,
    realizados: 0
  },

  natacion: {
    objetivo: 3,
    duracion: 60,
    realizados: 0
  },

  lectura: {
    objetivo: 1,
    duracion: 30,
    realizados: 0
  },

  ingles: {
    objetivo: 2,
    duracion: 30,
    realizados: 0
  },

  polaco: {
    objetivo: 2,
    duracion: 30,
    realizados: 0
  },

  sagfi: {
    objetivo: 3,
    duracion: 60,
    realizados: 0
  }

};


/*
=========================================
 TAREAS
=========================================
*/

let tareas =
  JSON.parse(
    localStorage.getItem("misTareas")
  ) || [];


/*
=========================================
 GUARDAR
=========================================
*/

function guardarTareas() {

  localStorage.setItem(
    "misTareas",
    JSON.stringify(tareas)
  );

}


/*
=========================================
 FECHA
=========================================
*/

function mostrarFecha() {

  const fecha = new Date();

  document
    .getElementById("fecha")
    .textContent =

    fecha.toLocaleDateString(
      "es-MX",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );

}


/*
=========================================
 RESUMEN
=========================================
*/

function mostrarResumen() {

  document
    .getElementById("numeroClases")
    .textContent =
    clases.length;


  document
    .getElementById("pendientes")
    .textContent =

    tareas.filter(
      tarea => !tarea.completada
    ).length;


  document
    .getElementById("importantes")
    .textContent =

    tareas.filter(
      tarea =>
        !tarea.completada &&
        tarea.prioridad >= 4
    ).length;


  document
    .getElementById("sagfiHoras")
    .textContent =
    "3 h";

}


/*
=========================================
 HÁBITOS
=========================================
*/

function mostrarHabitos() {

  document
    .getElementById(
      "ejercicioProgreso"
    )
    .textContent =

    habitos.ejercicio.realizados +
    " / " +
    habitos.ejercicio.objetivo;


  document
    .getElementById(
      "natacionProgreso"
    )
    .textContent =

    habitos.natacion.realizados +
    " / " +
    habitos.natacion.objetivo;


  document
    .getElementById(
      "lecturaProgreso"
    )
    .textContent =

    habitos.lectura.realizados +
    " / " +
    habitos.lectura.objetivo;


  document
    .getElementById(
      "inglesProgreso"
    )
    .textContent =

    habitos.ingles.realizados +
    " / " +
    habitos.ingles.objetivo;


  document
    .getElementById(
      "polacoProgreso"
    )
    .textContent =

    habitos.polaco.realizados +
    " / " +
    habitos.polaco.objetivo;


  document
    .getElementById(
      "sagfiProgreso"
    )
    .textContent =

    habitos.sagfi.realizados +
    " / " +
    habitos.sagfi.objetivo;

}


/*
=========================================
 TAREAS
=========================================
*/

function mostrarTareas() {

  const lista =
    document.getElementById(
      "listaTareas"
    );


  lista.innerHTML = "";


  const pendientes =
    tareas.filter(
      tarea => !tarea.completada
    );


  if (
    pendientes.length === 0
  ) {

    lista.innerHTML = `

      <div class="tarea">

        <div class="tarea-info">

          <strong>
            No tienes tareas pendientes
          </strong>

          <span>
            Agrega una con
            "+ Nueva tarea".
          </span>

        </div>

      </div>

    `;


    document
      .getElementById(
        "mensajeTareas"
      )
      .textContent =
      "Todo limpio";


    return;

  }


  pendientes.sort(
    (a, b) =>
      b.prioridad -
      a.prioridad
  );


  pendientes.forEach(
    tarea => {

      const elemento =
        document.createElement(
          "div"
        );


      elemento.className =
        "tarea";


      let textoPrioridad =
        "BAJA";


      if (
        tarea.prioridad === 5
      ) {

        textoPrioridad =
          "CRÍTICA";

      }

      else if (
        tarea.prioridad === 4
      ) {

        textoPrioridad =
          "ALTA";

      }

      else if (
        tarea.prioridad === 3
      ) {

        textoPrioridad =
          "MEDIA";

      }


      elemento.innerHTML = `

        <input
          type="checkbox"
          class="completar-tarea"
          data-id="${tarea.id}"
        >

        <div
          class="prioridad p${tarea.prioridad}"
        ></div>

        <div class="tarea-info">

          <strong>
            ${tarea.nombre}
          </strong>

          <span>
            ${tarea.categoria}
            ·
            ${tarea.duracion}
            minutos
          </span>

        </div>

        <div class="importancia">
          ${textoPrioridad}
        </div>

      `;


      lista.appendChild(
        elemento
      );

    }
  );


  document
    .querySelectorAll(
      ".completar-tarea"
    )
    .forEach(
      checkbox => {

        checkbox.addEventListener(
          "change",
          function() {

            const id =
              Number(
                this.dataset.id
              );


            const tarea =
              tareas.find(
                t =>
                  t.id === id
              );


            if (tarea) {

              tarea.completada =
                true;


              guardarTareas();

              mostrarResumen();

              mostrarTareas();

            }

          }
        );

      }
    );


  document
    .getElementById(
      "mensajeTareas"
    )
    .textContent =

    pendientes.length +
    " pendientes";

}


/*
=========================================
 NUEVA TAREA
=========================================
*/
/*
=========================================
 CONFIGURACIÓN DE EXAMEN
=========================================
*/

const tipoTarea =
  document.getElementById(
    "tipoTarea"
  );

const configuracionExamen =
  document.getElementById(
    "configuracionExamen"
  );


function actualizarFormularioExamen() {

  if (
    tipoTarea.value === "examen"
  ) {

    configuracionExamen.style.display =
      "block";

  }

  else {

    configuracionExamen.style.display =
      "none";

  }

}


if (tipoTarea) {

  tipoTarea.addEventListener(
    "change",
    actualizarFormularioExamen
  );

  actualizarFormularioExamen();

}

const botonNuevaTarea =
  document.getElementById(
    "nuevaTarea"
  );


const ventanaTarea =
  document.getElementById(
    "ventanaTarea"
  );


const botonGuardar =
  document.getElementById(
    "guardarTarea"
  );


const botonCancelar =
  document.getElementById(
    "cancelarTarea"
  );


botonNuevaTarea.addEventListener(
  "click",
  function() {

    ventanaTarea
      .classList
      .remove("oculto");

    document
      .getElementById(
        "nombreTarea"
      )
      .focus();

  }
);


botonCancelar.addEventListener(
  "click",
  function() {

    ventanaTarea
      .classList
      .add("oculto");

  }
);


botonGuardar.addEventListener(
  "click",
  function() {


    const nombre =
      document
        .getElementById(
          "nombreTarea"
        )
        .value
        .trim();


    const categoria =
      document
        .getElementById(
          "categoriaTarea"
        )
        .value;


    const duracion =
      Number(
        document
          .getElementById(
            "duracionTarea"
          )
          .value
      );


    const fechaLimite =
      document
        .getElementById(
          "fechaLimite"
        )
        .value;


    const prioridad =
      Number(
        document
          .getElementById(
            "prioridadTarea"
          )
          .value
      );


    if (
      nombre === ""
    ) {

      alert(
        "Escribe qué tienes que hacer."
      );

      return;

    }


    const tipo =
  document
    .getElementById("tipoTarea")
    .value;

    let horasPreparacion = 0;


if (
  tipo === "examen"
) {

  horasPreparacion =
    Number(
      document
        .getElementById(
          "horasPreparacion"
        )
        .value
    );

}
    


const nuevaTarea = {

  id: Date.now(),

  nombre: nombre,

  tipo: tipo,

  categoria: categoria,

  duracion: duracion,

  fechaLimite: fechaLimite,

  prioridad: prioridad,

  horasPreparacion:
  horasPreparacion,
  

  completada: false

};


    tareas.push(
      nuevaTarea
    );


    guardarTareas();


    mostrarResumen();

    mostrarTareas();


    ventanaTarea
      .classList
      .add("oculto");


    document
      .getElementById(
        "nombreTarea"
      )
      .value = "";


    document
      .getElementById(
        "fechaLimite"
      )
      .value = "";

  }
);


/*
=========================================
 PLAN DE HOY
=========================================
*/

function mostrarPlanHoy() {

  const plan =
    document.getElementById(
      "planHoy"
    );


  plan.innerHTML = `

    <div class="bloque-plan">

      <strong>
        Horario fijo protegido
      </strong>

      <span>
        Tus clases no se pueden mover.
      </span>

    </div>


    <div class="bloque-plan">

      <strong>
        Tiempo libre
      </strong>

      <span>
        Estos espacios serán utilizados
        posteriormente por el organizador.
      </span>

    </div>


    <div class="bloque-plan">

      <strong>
        Domingo
      </strong>

      <span>
        Principalmente descanso y ocio.
      </span>

    </div>

  `;

}


/*
=========================================
 INICIAR
=========================================
*/

mostrarFecha();

mostrarResumen();

mostrarHabitos();

mostrarTareas();

mostrarPlanHoy();


/*
=========================================
 ORGANIZADOR INTELIGENTE
=========================================
*/

/*
=========================================
 ORGANIZADOR DE SEMANA
=========================================
*/

const diasSemana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
];

const nombresDias = {
  lunes: "Lunes",
  martes: "Martes",
  miercoles: "Miércoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sabado: "Sábado"
};


/*
=========================================
 CONFIGURACIÓN
=========================================
*/

const configuracionAgenda = {

  horaInicio: 14 * 60,

  horaFin: 21 * 60,

  duracionMinima: 30

};


/*
=========================================
 CONVERTIR HORAS
=========================================
*/

function convertirMinutos(hora) {

  const partes = hora.split(":");

  return (
    Number(partes[0]) * 60 +
    Number(partes[1])
  );

}


function convertirHora(minutos) {

  const horas =
    Math.floor(minutos / 60);

  const mins =
    minutos % 60;

  return (
    String(horas).padStart(2, "0") +
    ":" +
    String(mins).padStart(2, "0")
  );

}


/*
=========================================
 CLASES DE CADA DÍA
=========================================
*/

function obtenerClasesDia(dia) {

  return clases

    .filter(
      clase => clase.dia === dia
    )

    .map(
      clase => ({

        inicio:
          convertirMinutos(
            clase.inicio
          ),

        fin:
          convertirMinutos(
            clase.fin
          ),

        nombre:
          clase.nombre

      })
    )

    .sort(
      (a, b) =>
        a.inicio - b.inicio
    );

}


/*
=========================================
 ESPACIOS LIBRES
=========================================
*/

function obtenerEspaciosLibres(dia) {

  const espacios = [];

  let inicio =
    configuracionAgenda.horaInicio;

  const fin =
    configuracionAgenda.horaFin;

  const clasesDia =
    obtenerClasesDia(dia);


  clasesDia.forEach(
    clase => {

      /*
      La clase ya terminó antes
      de nuestro horario.
      */

      if (
        clase.fin <= inicio
      ) {

        return;

      }


      /*
      Hay un espacio antes
      de la clase.
      */

      if (
        clase.inicio > inicio
      ) {

        const final =
          Math.min(
            clase.inicio,
            fin
          );


        if (
          final - inicio >=
          configuracionAgenda.duracionMinima
        ) {

          espacios.push({

            inicio: inicio,

            fin: final

          });

        }

      }


      /*
      Avanzamos después
      de la clase.
      */

      inicio =
        Math.max(
          inicio,
          clase.fin
        );

    }
  );


  /*
  Espacio después de la
  última clase.
  */

  if (
    inicio < fin
  ) {

    espacios.push({

      inicio: inicio,

      fin: fin

    });

  }


  return espacios;

}


/*
=========================================
 PRIORIDAD DE TAREAS
=========================================
*/

function prioridadInteligente(tarea) {

  let puntuacion =
    tarea.prioridad * 100;


  /*
  Exámenes tienen prioridad
  muy alta.
  */

  if (
    tarea.tipo === "examen"
  ) {

    puntuacion += 1000;

  }


  /*
  Fecha límite.
  */

  if (
    tarea.fechaLimite
  ) {

    const hoy =
      new Date();


    const fecha =
      new Date(
        tarea.fechaLimite +
        "T00:00:00"
      );


    const diasRestantes =
      (
        fecha - hoy
      ) /
      (
        1000 *
        60 *
        60 *
        24
      );


    if (
      diasRestantes <= 0
    ) {

      puntuacion += 800;

    }

    else if (
      diasRestantes <= 1
    ) {

      puntuacion += 600;

    }

    else if (
      diasRestantes <= 3
    ) {

      puntuacion += 400;

    }

    else if (
      diasRestantes <= 7
    ) {

      puntuacion += 200;

    }

  }


  return puntuacion;

}


/*
=========================================
 ORDENAR TAREAS
=========================================
*/

function obtenerTareasOrdenadas() {

  return tareas

    .filter(
      tarea =>
        !tarea.completada
    )

    .sort(
      (a, b) =>
        prioridadInteligente(b) -
        prioridadInteligente(a)
    );

}


/*
=========================================
 CREAR PLAN
=========================================
*/

function crearPlan() {

  return {

    lunes: [],

    martes: [],

    miercoles: [],

    jueves: [],

    viernes: [],

    sabado: []

  };

}


/*
=========================================
 BUSCAR MEJOR ESPACIO
=========================================
*/

function buscarMejorEspacio(
  espacios,
  duracion
) {

  let mejor = null;


  espacios.forEach(
    (espacio, indice) => {

      const disponible =
        espacio.fin -
        espacio.inicio;


      if (
        disponible >= duracion
      ) {

        /*
        Preferimos el espacio
        que deje menos tiempo
        desperdiciado.
        */

        const desperdicio =
          disponible -
          duracion;


        if (
          mejor === null ||
          desperdicio <
          mejor.desperdicio
        ) {

          mejor = {

            indice: indice,

            inicio:
              espacio.inicio,

            fin:
              espacio.inicio +
              duracion,

            desperdicio:
              desperdicio

          };

        }

      }

    }
  );


  return mejor;

}


/*
=========================================
 OCUPAR ESPACIO
=========================================
*/

function ocuparEspacio(
  espacios,
  resultado
) {

  const espacio =
    espacios[
      resultado.indice
    ];


  espacio.inicio =
    resultado.fin;


  /*
  Si ya no queda espacio,
  eliminamos el bloque.
  */

  if (
    espacio.inicio >=
    espacio.fin
  ) {

    espacios.splice(
      resultado.indice,
      1
    );

  }

}


/*
=========================================
 COLOCAR TAREAS
=========================================
*/
function calcularCargaDia(plan, dia) {

  let minutos = 0;

  plan[dia].forEach(
    bloque => {

      minutos +=
        bloque.fin -
        bloque.inicio;

    }
  );

  return minutos;

}


/*
=========================================
 BUSCAR EL MEJOR DÍA PARA UNA TAREA
=========================================
*/

function buscarMejorDiaParaTarea(
  plan,
  espacios,
  tarea
) {

  const duracion =
    Number(tarea.duracion);

  const candidatos = [];


  diasSemana.forEach(
    dia => {

      const opciones =
        espacios[dia];


      opciones.forEach(
        (espacio, indice) => {

          const disponible =
            espacio.fin -
            espacio.inicio;


          if (
            disponible < duracion
          ) {

            return;

          }


          const carga =
            calcularCargaDia(
              plan,
              dia
            );


          /*
          Preferimos días menos cargados.
          */

          const desperdicio =
            disponible -
            duracion;


          /*
          Penalizamos demasiado espacio
          sobrante.
          */

          const puntuacion =
            carga * 2 +
            desperdicio;


          candidatos.push({

            dia: dia,

            indice: indice,

            inicio:
              espacio.inicio,

            fin:
              espacio.inicio +
              duracion,

            puntuacion:
              puntuacion

          });

        }
      );

    }
  );


  if (
    candidatos.length === 0
  ) {

    return null;

  }


  candidatos.sort(
    (a, b) =>
      a.puntuacion -
      b.puntuacion
  );


  return candidatos[0];

}


/*
=========================================
 COLOCAR TAREAS
=========================================
*/

function colocarTareas(
  plan,
  espacios
) {

  const tareasOrdenadas =
    obtenerTareasOrdenadas();


  const noColocadas = [];


  tareasOrdenadas.forEach(
    tarea => {


      const opcion =
        buscarMejorDiaParaTarea(
          plan,
          espacios,
          tarea
        );


      if (
        !opcion
      ) {

        noColocadas.push(
          tarea
        );

        return;

      }


      const dia =
        opcion.dia;


      plan[dia].push({

        tipo:
          tarea.tipo === "examen"
            ? "examen"
            : "tarea",

        nombre:
          tarea.nombre,

        categoria:
          tarea.categoria,

        prioridad:
          tarea.prioridad,

        tareaId:
          tarea.id,

        inicio:
          opcion.inicio,

        fin:
          opcion.fin

      });


      ocuparEspacio(
        espacios[dia],
        opcion
      );

    }
  );


  return noColocadas;

}


/*
=========================================
 HÁBITOS
=========================================
*/


/*
=========================================
 HÁBITOS
=========================================
*/

function obtenerObjetivos() {

  return [

    {
      nombre: "Ejercicio",
      icono: "🏃",
      cantidad:
        habitos.ejercicio.objetivo,
      duracion:
        habitos.ejercicio.duracion
    },

    {
      nombre: "Natación",
      icono: "🏊",
      cantidad:
        habitos.natacion.objetivo,
      duracion:
        habitos.natacion.duracion
    },

    {
      nombre: "Practicar inglés",
      icono: "🇬🇧",
      cantidad:
        habitos.ingles.objetivo,
      duracion:
        habitos.ingles.duracion
    },

    {
      nombre: "Practicar polaco",
      icono: "🇵🇱",
      cantidad:
        habitos.polaco.objetivo,
      duracion:
        habitos.polaco.duracion
    },

    {
      nombre: "Lectura",
      icono: "📖",
      cantidad:
        habitos.lectura.objetivo,
      duracion:
        habitos.lectura.duracion
    },

    {
      nombre: "Trabajo SAGFI",
      icono: "👥",
      cantidad:
        habitos.sagfi.objetivo,
      duracion:
        habitos.sagfi.duracion
    }

  ];

}


/*
=========================================
 COLOCAR HÁBITOS
=========================================
*/

function colocarObjetivos(
  plan,
  espacios
) {

  const objetivos =
    obtenerObjetivos();


  const noColocados = [];


  /*
  Para cada hábito intentamos
  repartir sus sesiones.
  */

  objetivos.forEach(
    objetivo => {


      for (
        let numero = 0;
        numero < objetivo.cantidad;
        numero++
      ) {


        const candidatos = [];


        /*
        Revisamos todos los días.
        */

        diasSemana.forEach(
          dia => {

            /*
            Si ya existe este hábito
            ese día, intentamos evitar
            repetirlo.
            */

            const yaExiste =
              plan[dia].some(
                bloque =>
                  bloque.nombre ===
                  objetivo.nombre
              );


            /*
            Si ya está ese hábito,
            le damos una penalización.
            */

            const penalizacion =
              yaExiste
                ? 10000
                : 0;


            espacios[dia].forEach(
              (
                espacio,
                indice
              ) => {


                const disponible =
                  espacio.fin -
                  espacio.inicio;


                if (
                  disponible <
                  objetivo.duracion
                ) {

                  return;

                }


                const carga =
                  calcularCargaDia(
                    plan,
                    dia
                  );


                /*
                Menor carga = mejor.
                */

                const puntuacion =
                  carga +
                  penalizacion;


                candidatos.push({

                  dia: dia,

                  indice: indice,

                  inicio:
                    espacio.inicio,

                  fin:
                    espacio.inicio +
                    objetivo.duracion,

                  puntuacion:
                    puntuacion

                });

              }
            );

          }
        );


        if (
          candidatos.length === 0
        ) {

          noColocados.push(
            objetivo
          );

          continue;

        }


        candidatos.sort(
          (a, b) =>
            a.puntuacion -
            b.puntuacion
        );


        const mejor =
          candidatos[0];


        plan[mejor.dia].push({

          tipo:
            "habito",

          nombre:
            objetivo.nombre,

          icono:
            objetivo.icono,

          inicio:
            mejor.inicio,

          fin:
            mejor.fin

        });


        ocuparEspacio(

          espacios[mejor.dia],

          mejor

        );

      }

    }
  );


  return noColocados;

}


/*
=========================================
 OCIO
=========================================
*/

/*
=========================================
 AGREGAR OCIO
=========================================
*/

function colocarOcio(
  plan,
  espacios
) {


  diasSemana.forEach(
    dia => {


      if (
        espacios[dia].length === 0
      ) {

        return;

      }


      /*
      Buscamos el hueco más grande.
      */

      let mejor =
        espacios[dia][0];


      espacios[dia].forEach(
        espacio => {

          if (
            espacio.fin -
            espacio.inicio
            >
            mejor.fin -
            mejor.inicio
          ) {

            mejor = espacio;

          }

        }
      );


      const disponible =
        mejor.fin -
        mejor.inicio;


      /*
      Reservamos una hora
      de ocio si existe.
      */

      if (
        disponible >= 60
      ) {

        const inicio =
          mejor.fin - 60;


        plan[dia].push({

          tipo: "ocio",

          nombre:
            "Ocio / tiempo libre",

          inicio:
            inicio,

          fin:
            mejor.fin

        });


        mejor.fin =
          inicio;

      }

    }
  );

}


/*
=========================================
 ORDENAR PLAN
=========================================
*/

function ordenarPlan(plan) {

  diasSemana.forEach(
    dia => {

      plan[dia].sort(
        (a, b) =>
          a.inicio -
          b.inicio
      );

    }
  );

}


/*
=========================================
 MOSTRAR RESULTADO
=========================================
*/

function mostrarResultadoPlan(
  plan,
  noColocadas
) {

  const resultado =
    document.getElementById(
      "resultadoOrganizacion"
    );


  let html = "";


  diasSemana.forEach(
    dia => {


      const bloques =
        plan[dia];


      if (
        bloques.length === 0
      ) {

        return;

      }


      html += `

        <div class="plan-dia">

          <div class="plan-dia-titulo">

            ${nombresDias[dia]}

          </div>

      `;


      bloques.forEach(
        bloque => {


          let etiqueta = "";


          if (
            bloque.tipo ===
            "tarea"
          ) {

            if (
              bloque.prioridad === 5
            ) {

              etiqueta =
                "CRÍTICA";

            }

            else if (
              bloque.prioridad === 4
            ) {

              etiqueta =
                "ALTA";

            }

            else if (
              bloque.prioridad === 3
            ) {

              etiqueta =
                "MEDIA";

            }

            else {

              etiqueta =
                "BAJA";

            }

          }


          if (
            bloque.tipo ===
            "ocio"
          ) {

            etiqueta =
              "DESCANSO";

          }


          const nombre =
            bloque.icono
              ? bloque.icono +
                " " +
                bloque.nombre
              : bloque.nombre;


          html += `

            <div class="plan-bloque">

              <div class="plan-hora">

                ${convertirHora(
                  bloque.inicio
                )}

                –

                ${convertirHora(
                  bloque.fin
                )}

              </div>


              <div class="plan-tarea">

                <strong>

                  ${nombre}

                </strong>

                ${
                  bloque.categoria
                    ? `
                      <br>
                      <small>
                        ${bloque.categoria}
                      </small>
                    `
                    : ""
                }

              </div>


              <div class="plan-prioridad">

                ${etiqueta}

              </div>

            </div>

          `;

        }
      );


      html += `

        </div>

      `;

    }
  );


  /*
  Actividades que no cupieron.
  */

  if (
    noColocadas.length > 0
  ) {

    html += `

      <div class="sin-espacio">

        <strong>
          ⚠️ No se pudieron acomodar:
        </strong>

        <br><br>

    `;


    noColocadas.forEach(
      actividad => {

        html += `

          • ${actividad.nombre}

          ${
            actividad.duracion
              ? ` — ${actividad.duracion} min`
              : ""
          }

          <br>

        `;

      }
    );


    html += `

      </div>

    `;

  }


  resultado.innerHTML =
    html;

}


/*
=========================================
 FUNCIÓN PRINCIPAL
=========================================
*/

/*
=========================================
 PLANIFICADOR FINAL
=========================================
*/

function obtenerFechaActual() {

  const hoy =
    new Date();

  hoy.setHours(
    0,
    0,
    0,
    0
  );

  return hoy;

}


/*
=========================================
 FECHA DE TAREA
=========================================
*/

function obtenerFechaLimite(
  tarea
) {

  if (
    !tarea.fechaLimite
  ) {

    return null;

  }


  return new Date(
    tarea.fechaLimite +
    "T00:00:00"
  );

}


/*
=========================================
 DÍAS ANTES DEL EXAMEN
=========================================
*/

function calcularDiasPreparacion(
  tarea
) {

  const fecha =
    obtenerFechaLimite(
      tarea
    );


  if (
    !fecha
  ) {

    return diasSemana.length;

  }


  const hoy =
    obtenerFechaActual();


  const diferencia =
    Math.ceil(
      (
        fecha - hoy
      ) /
      (
        1000 *
        60 *
        60 *
        24
      )
    );


  return Math.max(
    1,
    diferencia
  );

}


/*
=========================================
 CREAR SESIONES DE EXAMEN
=========================================
*/

function crearSesionesDeExamen() {

  const sesiones = [];


  tareas

    .filter(
      tarea =>
        !tarea.completada &&
        tarea.tipo === "examen"
    )

    .forEach(
      examen => {


        const horas =
          Number(
            examen.horasPreparacion ||
            0
          );


        const sesionesNecesarias =
          Math.ceil(
            horas
          );


        const diasDisponibles =
          calcularDiasPreparacion(
            examen
          );


        const cantidad =
          Math.min(
            sesionesNecesarias,
            diasDisponibles
          );


        for (
          let i = 0;
          i < cantidad;
          i++
        ) {

          sesiones.push({

            nombre:
              "Preparación: " +
              examen.nombre,

            icono:
              "📚",

            tipo:
              "preparacion",

            duracion:
              60,

            examenId:
              examen.id,

            prioridad:
              10

          });

        }

      }
    );


  return sesiones;

}


/*
=========================================
 OBTENER ACTIVIDADES
=========================================
*/

function obtenerActividades() {

  const actividades = [];


  /*
  PREPARACIÓN DE EXÁMENES
  */

  const sesionesExamen =
    crearSesionesDeExamen();


  actividades.push(
    ...sesionesExamen
  );


  /*
  TAREAS NORMALES
  */

  tareas

    .filter(
      tarea =>
        !tarea.completada &&
        tarea.tipo !== "examen"
    )

    .forEach(
      tarea => {

        actividades.push({

          nombre:
            tarea.nombre,

          tipo:
            "tarea",

          categoria:
            tarea.categoria,

          duracion:
            Number(
              tarea.duracion
            ),

          prioridad:
            tarea.prioridad,

          fechaLimite:
            tarea.fechaLimite,

          tareaId:
            tarea.id

        });

      }
    );


  return actividades;

}


/*
=========================================
 PRIORIDAD
=========================================
*/

function calcularPrioridadActividad(
  actividad
) {

  let puntuacion = 0;


  /*
  Preparación de examen.
  */

  if (
    actividad.tipo ===
    "preparacion"
  ) {

    puntuacion += 10000;

  }


  /*
  Tarea normal.
  */

  else {

    puntuacion +=
      (
        actividad.prioridad ||
        1
      ) * 100;

  }


  /*
  Fecha límite.
  */

  if (
    actividad.fechaLimite
  ) {

    const fecha =
      new Date(
        actividad.fechaLimite +
        "T00:00:00"
      );


    const hoy =
      obtenerFechaActual();


    const dias =
      (
        fecha - hoy
      ) /
      (
        1000 *
        60 *
        60 *
        24
      );


    if (
      dias <= 0
    ) {

      puntuacion += 1000;

    }

    else if (
      dias <= 1
    ) {

      puntuacion += 800;

    }

    else if (
      dias <= 3
    ) {

      puntuacion += 600;

    }

    else if (
      dias <= 7
    ) {

      puntuacion += 300;

    }

  }


  return puntuacion;

}


/*
=========================================
 ORDENAR ACTIVIDADES
=========================================
*/

function ordenarActividades(
  actividades
) {

  return actividades.sort(
    (a, b) => {

      return (
        calcularPrioridadActividad(b) -
        calcularPrioridadActividad(a)
      );

    }
  );

}


/*
=========================================
 CARGA DEL DÍA
=========================================
*/

function obtenerCargaDia(
  plan,
  dia
) {

  return plan[dia].reduce(
    (
      total,
      bloque
    ) => {

      return (
        total +
        (
          bloque.fin -
          bloque.inicio
        )
      );

    },
    0
  );

}


/*
=========================================
 BUSCAR HUECO
=========================================
*/

function buscarHuecoInteligente(
  plan,
  espacios,
  actividad
) {

  const candidatos = [];


  diasSemana.forEach(
    dia => {


      espacios[dia].forEach(
        (
          espacio,
          indice
        ) => {


          const disponible =
            espacio.fin -
            espacio.inicio;


          if (
            disponible <
            actividad.duracion
          ) {

            return;

          }


          const carga =
            obtenerCargaDia(
              plan,
              dia
            );


          /*
          Penalización si el día
          ya tiene mucha actividad.
          */

          const penalizacionCarga =
            carga * 2;


          /*
          Penalización si el bloque
          queda demasiado aislado.
          */

          let penalizacion =
            0;


          if (
            actividad.tipo ===
            "habito"
          ) {

            penalizacion +=
              carga;

          }


          candidatos.push({

            dia:
              dia,

            indice:
              indice,

            inicio:
              espacio.inicio,

            fin:
              espacio.inicio +
              actividad.duracion,

            puntuacion:
              penalizacionCarga +
              penalizacion

          });

        }
      );

    }
  );


  if (
    candidatos.length === 0
  ) {

    return null;

  }


  candidatos.sort(
    (a, b) =>
      a.puntuacion -
      b.puntuacion
  );


  return candidatos[0];

}


/*
=========================================
 COLOCAR ACTIVIDADES IMPORTANTES
=========================================
*/

function colocarActividades(
  plan,
  espacios,
  actividades
) {

  const noColocadas = [];


  actividades.forEach(
    actividad => {


      const opcion =
        buscarHuecoInteligente(
          plan,
          espacios,
          actividad
        );


      if (
        !opcion
      ) {

        noColocadas.push(
          actividad
        );

        return;

      }


      const dia =
        opcion.dia;


      plan[dia].push({

        tipo:
          actividad.tipo,

        nombre:
          actividad.nombre,

        icono:
          actividad.icono,

        categoria:
          actividad.categoria,

        prioridad:
          actividad.prioridad,

        tareaId:
          actividad.tareaId,

        inicio:
          opcion.inicio,

        fin:
          opcion.fin

      });


      ocuparEspacio(
        espacios[dia],
        opcion
      );

    }
  );


  return noColocadas;

}


/*
=========================================
 HÁBITOS
=========================================
*/

function obtenerHabitosPlan() {

  return [

    {
      nombre:
        "Ejercicio",

      icono:
        "🏃",

      cantidad:
        3,

      duracion:
        60,

      tipo:
        "habito"

    },

    {
      nombre:
        "Natación",

      icono:
        "🏊",

      cantidad:
        3,

      duracion:
        60,

      tipo:
        "habito"

    },

    {
      nombre:
        "Practicar inglés",

      icono:
        "🇬🇧",

      cantidad:
        2,

      duracion:
        30,

      tipo:
        "habito"

    },

    {
      nombre:
        "Practicar polaco",

      icono:
        "🇵🇱",

      cantidad:
        2,

      duracion:
        30,

      tipo:
        "habito"

    },

    {
      nombre:
        "Lectura",

      icono:
        "📖",

      cantidad:
        1,

      duracion:
        30,

      tipo:
        "habito"

    },

    {
      nombre:
        "Trabajo SAGFI",

      icono:
        "👥",

      cantidad:
        3,

      duracion:
        60,

      tipo:
        "habito"

    }

  ];

}


/*
=========================================
 COLOCAR HÁBITOS
=========================================
*/

function colocarHabitosPlan(
  plan,
  espacios
) {

  const noColocados = [];


  const habitosPlan =
    obtenerHabitosPlan();


  habitosPlan.forEach(
    habito => {


      for (
        let i = 0;
        i < habito.cantidad;
        i++
      ) {


        const candidatos = [];


        diasSemana.forEach(
          dia => {


            /*
            No repetir demasiado
            el mismo hábito en un día.
            */

            const yaExiste =
              plan[dia].some(
                bloque =>
                  bloque.nombre ===
                  habito.nombre
              );


            if (
              yaExiste
            ) {

              return;

            }


            espacios[dia].forEach(
              (
                espacio,
                indice
              ) => {


                const disponible =
                  espacio.fin -
                  espacio.inicio;


                if (
                  disponible <
                  habito.duracion
                ) {

                  return;

                }


                const carga =
                  obtenerCargaDia(
                    plan,
                    dia
                  );


                candidatos.push({

                  dia:
                    dia,

                  indice:
                    indice,

                  inicio:
                    espacio.inicio,

                  fin:
                    espacio.inicio +
                    habito.duracion,

                  puntuacion:
                    carga

                });

              }
            );

          }
        );


        if (
          candidatos.length === 0
        ) {

          noColocados.push(
            habito
          );

          continue;

        }


        candidatos.sort(
          (a, b) =>
            a.puntuacion -
            b.puntuacion
        );


        const mejor =
          candidatos[0];


        plan[mejor.dia].push({

          tipo:
            "habito",

          nombre:
            habito.nombre,

          icono:
            habito.icono,

          inicio:
            mejor.inicio,

          fin:
            mejor.fin

        });


        ocuparEspacio(

          espacios[mejor.dia],

          mejor

        );

      }

    }
  );


  return noColocados;

}


/*
=========================================
 OCIO
=========================================
*/

function colocarOcioPlan(
  plan,
  espacios
) {


  diasSemana.forEach(
    dia => {


      /*
      Buscamos el hueco más grande.
      */

      let mejor =
        null;


      espacios[dia].forEach(
        espacio => {


          if (
            mejor === null ||
            (
              espacio.fin -
              espacio.inicio
            ) >

            (
              mejor.fin -
              mejor.inicio
            )
          ) {

            mejor =
              espacio;

          }

        }
      );


      if (
        !mejor
      ) {

        return;

      }


      const disponible =
        mejor.fin -
        mejor.inicio;


      if (
        disponible >= 60
      ) {


        const inicio =
          mejor.fin - 60;


        plan[dia].push({

          tipo:
            "ocio",

          nombre:
            "Ocio / tiempo libre",

          icono:
            "🛋️",

          inicio:
            inicio,

          fin:
            mejor.fin

        });


        mejor.fin =
          inicio;

      }

    }
  );

}


/*
=========================================
 ORDENAR PLAN
=========================================
*/

function ordenarPlanFinal(
  plan
) {

  diasSemana.forEach(
    dia => {

      plan[dia].sort(
        (a, b) =>
          a.inicio -
          b.inicio
      );

    }
  );

}


/*
=========================================
 MOSTRAR PLAN
=========================================
*/

function mostrarPlanFinal(
  plan,
  noColocadas
) {

  const resultado =
    document.getElementById(
      "resultadoOrganizacion"
    );


  let html = "";


  diasSemana.forEach(
    dia => {


      if (
        plan[dia].length === 0
      ) {

        return;

      }


      html += `

        <div class="plan-dia">

          <div class="plan-dia-titulo">

            ${nombresDias[dia]}

          </div>

      `;


      plan[dia].forEach(
        bloque => {


          let etiqueta = "";


          if (
            bloque.tipo ===
            "tarea"
          ) {

            if (
              bloque.prioridad === 5
            ) {

              etiqueta =
                "CRÍTICA";

            }

            else if (
              bloque.prioridad === 4
            ) {

              etiqueta =
                "ALTA";

            }

            else if (
              bloque.prioridad === 3
            ) {

              etiqueta =
                "MEDIA";

            }

            else {

              etiqueta =
                "BAJA";

            }

          }


          if (
            bloque.tipo ===
            "examen"
          ) {

            etiqueta =
              "EXAMEN";

          }


          if (
            bloque.tipo ===
            "preparacion"
          ) {

            etiqueta =
              "PREPARACIÓN";

          }


          if (
            bloque.tipo ===
            "ocio"
          ) {

            etiqueta =
              "DESCANSO";

          }


          const nombre =
            bloque.icono
              ? bloque.icono +
                " " +
                bloque.nombre
              : bloque.nombre;


          html += `

            <div class="plan-bloque">

              <div class="plan-hora">

                ${convertirHora(
                  bloque.inicio
                )}

                –

                ${convertirHora(
                  bloque.fin
                )}

              </div>


              <div class="plan-tarea">

                <strong>

                  ${nombre}

                </strong>


                ${
                  bloque.categoria
                    ? `
                      <br>
                      <small>
                        ${bloque.categoria}
                      </small>
                    `
                    : ""
                }

              </div>


              <div class="plan-prioridad">

                ${etiqueta}

              </div>

            </div>

          `;

        }
      );


      html += `

        </div>

      `;

    }
  );


  /*
  No colocadas.
  */

  if (
    noColocadas.length > 0
  ) {

    html += `

      <div class="sin-espacio">

        <strong>
          ⚠️ No se pudieron acomodar:
        </strong>

        <br><br>

    `;


    noColocadas.forEach(
      actividad => {

        html += `

          • ${actividad.nombre}

          ${
            actividad.duracion
              ? ` — ${actividad.duracion} min`
              : ""
          }

          <br>

        `;

      }
    );


    html += `

      </div>

    `;

  }


  resultado.innerHTML =
    html;

}


/*
=========================================
 ORGANIZAR SEMANA
=========================================
*/

function organizarSemana() {


  /*
  ESPACIOS LIBRES
  */

  const espacios = {};


  diasSemana.forEach(
    dia => {

      espacios[dia] =
        obtenerEspaciosLibres(
          dia
        );

    }
  );


  /*
  PLAN VACÍO
  */

  const plan =
    crearPlan();


  /*
  ACTIVIDADES IMPORTANTES
  */

  const actividades =
    obtenerActividades();


  const actividadesOrdenadas =
    ordenarActividades(
      actividades
    );


  const noColocadasTareas =
    colocarActividades(

      plan,

      espacios,

      actividadesOrdenadas

    );


  /*
  HÁBITOS
  */

  const noColocadosHabitos =
    colocarHabitosPlan(

      plan,

      espacios

    );


  /*
  OCIO
  */

  colocarOcioPlan(

    plan,

    espacios

  );


  /*
  ORDENAR
  */

  ordenarPlanFinal(
    plan
  );


  /*
  UNIR LO QUE NO CUPÓ
  */

  const noColocadas = [

    ...noColocadasTareas,

    ...noColocadosHabitos

  ];


  /*
  MOSTRAR
  */

  mostrarPlanFinal(

    plan,

    noColocadas

  );

}


/*
=========================================
 ACTIVAR BOTÓN
=========================================
*/



/*
=========================================
 CALENDARIO DINÁMICO
=========================================
*/


const diasCalendario = [

  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"

];


const nombresCalendario = {

  lunes: "Lunes",

  martes: "Martes",

  miercoles: "Miércoles",

  jueves: "Jueves",

  viernes: "Viernes",

  sabado: "Sábado",

  domingo: "Domingo"

};


/*
=========================================
 HORAS DEL CALENDARIO
=========================================
*/

const horaCalendarioInicio = 7 * 60;

const horaCalendarioFin = 22 * 60;

const intervaloCalendario = 30;


/*
=========================================
 CONVERTIR HORA
=========================================
*/

function minutosAHora(minutos) {

  const horas =
    Math.floor(minutos / 60);

  const mins =
    minutos % 60;


  return (

    String(horas).padStart(2, "0") +

    ":" +

    String(mins).padStart(2, "0")

  );

}


/*
=========================================
 OBTENER PLAN GUARDADO
=========================================
*/

let planGenerado = null;


/*
=========================================
 CREAR CALENDARIO
=========================================
*/

function construirCalendario() {

  const calendario =
    document.getElementById(
      "calendarioDinamico"
    );


  if (!calendario) {

    return;

  }


  calendario.innerHTML = "";


  /*
  PRIMERA FILA
  */

  const esquina =
    document.createElement(
      "div"
    );


  esquina.className =
    "celda-dia";


  esquina.textContent =
    "Horas";


  calendario.appendChild(
    esquina
  );


  diasCalendario.forEach(
    dia => {

      const encabezado =
        document.createElement(
          "div"
        );


      encabezado.className =
        "celda-dia";


      encabezado.textContent =
        nombresCalendario[dia];


      if (
        dia === "domingo"
      ) {

        encabezado.style.color =
          "#dc2626";

      }


      calendario.appendChild(
        encabezado
      );

    }
  );


  /*
  CREAR FILAS DE 30 MINUTOS
  */

  for (
    let hora =
      horaCalendarioInicio;

    hora <
      horaCalendarioFin;

    hora +=
      intervaloCalendario
  ) {


    /*
    CELDA DE HORA
    */

    const celdaHora =
      document.createElement(
        "div"
      );


    celdaHora.className =
      "celda-calendario celda-hora";


    celdaHora.textContent =
      minutosAHora(hora);


    calendario.appendChild(
      celdaHora
    );


    /*
    CELDAS DE CADA DÍA
    */

    diasCalendario.forEach(
      dia => {


        const celda =
          document.createElement(
            "div"
          );


        celda.className =
          "celda-calendario";


        celda.dataset.dia =
          dia;


        celda.dataset.hora =
          hora;


        if (
          dia === "domingo"
        ) {

          celda.classList.add(
            "domingo-calendario"
          );

        }


        calendario.appendChild(
          celda
        );

      }
    );

  }


  /*
  DIBUJAR CLASES
  */

  clases.forEach(
    clase => {

      dibujarActividadCalendario({

        dia:
          clase.dia,

        inicio:
          convertirMinutos(
            clase.inicio
          ),

        fin:
          convertirMinutos(
            clase.fin
          ),

        nombre:
          clase.nombre,

        tipo:
          "clase"

      });

    }
  );


  /*
  DIBUJAR PLAN GENERADO
  */

  if (
    planGenerado
  ) {

    diasCalendario.forEach(
      dia => {

        if (
          !planGenerado[dia]
        ) {

          return;

        }


        planGenerado[dia].forEach(
          bloque => {

            dibujarActividadCalendario(
              bloque
            );

          }
        );

      }
    );

  }

}


/*
=========================================
 DIBUJAR ACTIVIDAD
=========================================
*/

function dibujarActividadCalendario(
  actividad
) {

  const inicio =
    actividad.inicio;


  const fin =
    actividad.fin;


  /*
  Domingo solo sirve para ocio.
  */

  if (
    actividad.dia ===
    "domingo" &&
    actividad.tipo !==
    "ocio"
  ) {

    return;

  }


  const celdas =
    document.querySelectorAll(
      ".celda-calendario"
    );


  let primeraCelda =
    null;


  celdas.forEach(
    celda => {

      if (
        celda.dataset.dia ===
        actividad.dia &&

        Number(
          celda.dataset.hora
        ) === inicio
      ) {

        primeraCelda =
          celda;

      }

    }
  );


  if (
    !primeraCelda
  ) {

    return;

  }


  const bloque =
    document.createElement(
      "div"
    );


  bloque.className =
    "bloque-calendario";


  if (
    actividad.tipo ===
    "clase"
  ) {

    bloque.classList.add(
      "bloque-clase"
    );

  }

  else if (
    actividad.tipo ===
    "tarea"
  ) {

    bloque.classList.add(
      "bloque-tarea"
    );

  }

  else if (
    actividad.tipo ===
    "examen"
  ) {

    bloque.classList.add(
      "bloque-examen"
    );

  }

  else if (
    actividad.tipo ===
    "preparacion"
  ) {

    bloque.classList.add(
      "bloque-preparacion"
    );

  }

  else if (
    actividad.tipo ===
    "ocio"
  ) {

    bloque.classList.add(
      "bloque-ocio"
    );

  }

  else if (
    actividad.tipo ===
    "habito"
  ) {

    if (
      actividad.nombre ===
      "Trabajo SAGFI"
    ) {

      bloque.classList.add(
        "bloque-sagfi"
      );

    }

    else {

      bloque.classList.add(
        "bloque-habito"
      );

    }

  }


  let nombre =
    actividad.nombre;


  if (
    actividad.icono
  ) {

    nombre =
      actividad.icono +
      " " +
      nombre;

  }


  bloque.innerHTML = `

    <strong>
      ${nombre}
    </strong>

    <small>

      ${minutosAHora(inicio)}
      –
      ${minutosAHora(fin)}

    </small>

  `;


  /*
  Las tareas pueden marcarse
  como completadas.
  */

  if (
    actividad.tareaId
  ) {

    const boton =
      document.createElement(
        "button"
      );


    boton.className =
      "boton-completar";


    boton.textContent =
      "✓ Hecho";


    boton.addEventListener(
      "click",
      function(event) {

        event.stopPropagation();


        const tarea =
          tareas.find(
            t =>
              t.id ===
              actividad.tareaId
          );


        if (
          tarea
        ) {

          tarea.completada =
            true;


          guardarTareas();

          mostrarResumen();

          mostrarTareas();

          construirCalendario();

          organizarSemana();

        }

      }
    );


    bloque.appendChild(
      boton
    );

  }


  /*
  Altura aproximada según
  duración.
  */

  const duracion =
    fin - inicio;


  bloque.style.minHeight =
    Math.max(
      42,
      (
        duracion /
        intervaloCalendario
      ) * 55 - 6
    ) +
    "px";


  primeraCelda.appendChild(
    bloque
  );

}


/*
=========================================
 REEMPLAZAR PLAN
=========================================
*/

const organizarOriginal =
  organizarSemana;


/*
=========================================
 ORGANIZAR Y ACTUALIZAR CALENDARIO
=========================================
*/

function organizarSemanaCompleta() {

  /*
  Ejecutamos el organizador
  que ya construimos.
  */

  organizarOriginal();


  /*
  Esperamos a que termine
  y recuperamos el resultado.
  */

  /*
  El plan visual se reconstruirá
  usando la información que
  generemos aquí.
  */

  generarPlanCalendario();

}


/*
=========================================
 GENERAR PLAN PARA CALENDARIO
=========================================
*/

function generarPlanCalendario() {

  const espacios = {};


  diasSemana.forEach(
    dia => {

      espacios[dia] =
        obtenerEspaciosLibres(
          dia
        );

    }
  );


  const plan =
    crearPlan();


  /*
  TAREAS
  */

  const actividades =
    ordenarActividades(
      obtenerActividades()
    );


  colocarActividades(

    plan,

    espacios,

    actividades

  );


  /*
  HÁBITOS
  */

  colocarHabitosPlan(

    plan,

    espacios

  );


  /*
  OCIO
  */

  colocarOcioPlan(

    plan,

    espacios

  );


  /*
  GUARDAR PLAN EN MEMORIA
  */

  planGenerado =
    plan;


  /*
  REDIBUJAR
  */

  construirCalendario();

}


/*
=========================================
 BOTÓN FINAL
=========================================
*/

const botonFinalOrganizar =
  document.getElementById(
    "organizarSemana"
  );


if (
  botonFinalOrganizar
) {

  botonFinalOrganizar.onclick =
    organizarSemanaCompleta;

}


/*
=========================================
 CONSTRUIR AL CARGAR
=========================================
*/

construirCalendario();

