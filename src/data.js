// variable para la liga de la data en gitHub
let url = 'https://raw.githubusercontent.com/BrisiaCastrejon/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
// vaariables para impresion
let contenido = document.getElementById('contenido');
let screens = document.getElementById('screens');
let tBody = document.getElementById('tBody');
let table = document.getElementById('table');
let talk = ' ';
// funcion para cargar la data desde un inicio
window.onload = () => {
  // metodo FETCH para la obtención de la data
  fetch(url)
  // se asigna la obtencion en formato JSON
    .then(data => data.json())
    // se le asigna nombre a la data
    .then(laboratoria => {
      // se verifica que si aparezca en consola
      // se llaman las variables a ocupar con ese parametro
      computeStudentsStats(laboratoria);
      computeGenerationsStats(laboratoria);
    })
    .catch(error => {
      // console.log('Este es un mensaje para reportar error');
    });
};
// variables para sacar la nueva data
const student = [];
let arregloEstudiantes = [];
let name = '';
let email = '';
let students = {};
let completedPercentage;
let completedPercentageT;
let topics = {};
let percentageDuration;
let subtopics = {};
let type = '';
let duration;
const computeStudentsStats = (laboratoria) => {
  // se itera el objeto para sacar campus
  for (sedes in laboratoria) {
    let campus = sedes;
    // se itera el objeto para sacar generaciones
    for (generaciones in laboratoria[sedes]) {
      let posicionGeneracion = generaciones;
      // se itera el objeto para sacar generacion
      for (generacion in laboratoria[sedes][generaciones]) {
        let generation = generacion;
        // se llama el arreglo para declarar la ruta hasta estudiantes
        arregloEstudiantes = laboratoria[campus].generacion[generacion].estudiantes;
        arregloEstudiantes.forEach((estudiante)=>{
          name = estudiante.nombre;
          email = estudiante.correo;
          completedPercentage = estudiante.progreso.porcentajeCompletado;
          let prueba = estudiante.progreso.temas;
          for (item in prueba) {
            topics = item;
            completedPercentageT = estudiante.progreso.temas[item].porcentajeCompletado;
            percentageDuration = estudiante.progreso.temas[item].duracionTemaCompletado;
            let prueba2 = estudiante.progreso.temas[item].subtemas;
            for (elementos in prueba2) {
              subtopics = elementos;
              type = estudiante.progreso.temas[item].subtemas[elementos].tipo;
              duration = estudiante.progreso.temas[item].subtemas[elementos].duracionSubtema;
            }
          }
          student.push({
            'name': name,
            'email': email,
            'campus': campus,
            'generation': generation,
            stats: {
              'completedPercentage': completedPercentage,
              topics: {
                'completePercentage': completedPercentageT,
                'percentageDuration': percentageDuration,
                subtopics: {
                  'type': type,
                  'duration': duration
                }
              }
            }
          });
        });
      }
    }
  }
  impresionStudents(student);
  filterStudentsLima(student);
  filterStudentsMexico(student);
  filterStudentsSantiago(student);
  promedioGeneracionesS(student);
  promedioGeneracionesM(student);
  promedioGeneracionesL(student);
  pantallaGeneral(student);
};
const impresionStudents = (student) => {
  document.getElementById('pruebas').addEventListener('click', (event) => {
    let result = '';
    const info = Object.values(student);
    screens.style.display = 'none';
    table.style.display = 'none';
    generalPantalla.style.display = 'none';
    contenido.style.display = 'block';
    for (let i = 0; i < info.length; i++) {
      result += `<div class="card text-center float-left pt-2" style="width: 18rem;">
         <i class="far fa-grin card-img-top smile"></i>
         <div class="card-body txto">
          <p>
         <b class="boldi">${info[i].name}</b> <br>
         ${info[i].email} <br>
         Sede: ${info[i].campus} <br>
         Generación: ${info[i].generation} <br>
         </p>
         </div>
          </div> `;
    } contenido.innerHTML = result;
  });
};

const filterStudentsLima = (student) => {
  document.getElementById('lima').addEventListener('click', (event) => {
    const info = Object.values(student);
    screens.style.display = 'none';
    contenido.style.display = 'none';
    generalPantalla.style.display = 'none';
    table.style.display = 'block';
    for (item of info) {
      let allCampus = item.campus;
      let allGenerations = item.generation;
      if (allCampus === 'lima') {
        tBody.innerHTML += `<tr>
        <th scope="row">${item.name}</th>
        <td>${item.generation}</td>
        <td>${item.stats.completedPercentage}</td>
      </tr>`;
      }
    }
  });
};

const filterStudentsMexico = (student) => {
  document.getElementById('mexico').addEventListener('click', (event) => {
    const info = Object.values(student);
    screens.style.display = 'none';
    contenido.style.display = 'none';
    generalPantalla.style.display = 'none';
    table.style.display = 'block';
    for (item of info) {
      let allCampus = item.campus;
      let allGenerations = item.generation;
      if (allCampus === 'mexico') {
        tBody.innerHTML += `<tr>
        <th scope="row">${item.name}</th>
        <td>${item.generation}</td>
        <td>${item.stats.completedPercentage}</td>
      </tr>`;
      }
    }
  });
};

const filterStudentsSantiago = (student) => {
  document.getElementById('santiago').addEventListener('click', (event) => {
    const info = Object.values(student);
    screens.style.display = 'none';
    contenido.style.display = 'none';
    generalPantalla.style.display = 'none';
    table.style.display = 'block';
    for (item of info) {
      let allCampus = item.campus;
      let allGenerations = item.generation;
      if (allCampus === 'santiago') {
        tBody.innerHTML += `<tr>
        <th scope="row">${item.name}</th>
        <td>${item.generation}</td>
        <td>${item.stats.completedPercentage}</td>
      </tr>`;
      }
    }
  });
};

// variables para sacar el arreglo con propiedades: porcentaje, sede, numero de estudiantes y generacion
let generation = [];
let generacion = '';
let campus = '';
let average = 0;
let count = 0;
const computeGenerationsStats = (laboratoria) => {
  // se itera el objeto para sacar campus
  for (items in laboratoria) {
    // se declara una variable que guarde el campus
    campus = items;
    // convierte generacion en array para poder iterarla
    generacion = Object.keys(laboratoria[campus].generacion);
    generacion.forEach(item => {
      // se declara el contador para guardar la data
      let cont = 0;
      // se obtiene cada generacion
      generacion = item;
      // se declara una variable para ruta del objeto hasta estudiantes
      const chicas = laboratoria[campus].generacion[generacion].estudiantes;
      // se itera el objeto para sacar de cada chica el porcentajeCompletado
      for (chica in chicas) {
        // se declara una variable que guarde a las estudiante, si se declara fuera de la funcion itera 2 veces
        let estudiantes = chica;
        // se declara el contador para sumar la data
        cont += chicas[estudiantes].progreso.porcentajeCompletado;
        // se utiliza Math.roud para redondear la cifra final, y se hace la operacion
        average = Math.round(cont / chicas.length);
        //  se declara una variable para obtener el numero de chicas que estan poro generacion
        count = chicas.length;
      }
      // se manda la info al array con llaves para indicar que es objeto
      generation.push({
        'generation': generacion,
        'campus': campus,
        'average': average,
        'count': count
      });
    });
  }
  // console.log(generation);
  return generation;
};

// falta por vicular promedio santiago
const promedioGeneracionesS = (student) => {
  let resultado = 0;
  const data = Object.values(student);
  for (item of data) {
    let allCampus = item.campus;
    let allPorcen = item.stats.completedPercentage;
    if (allCampus === 'santiago') {
      resultado += allPorcen;
    }
  }
  let operacion = Math.round(resultado / 45);
  document.getElementById('promS').innerHTML = `${operacion}%`;
  // contenido.innerHTML = operacion;

};
// falta por vicular promedio mexico
const promedioGeneracionesM = (student) =>{
  let resultado = 0;
  const data = Object.values(student);
  for (item of data) {
    let allCampus = item.campus;
    let allPorcen = item.stats.completedPercentage;
    if (allCampus === 'mexico') {
      resultado += allPorcen;
    }
  }
  let operacion = Math.round(resultado / 45);
  document.getElementById('promM').innerHTML = `${operacion}%`;
  // contenido.innerHTML = operacion;

};
// falta por vicular promedio santiago
const promedioGeneracionesL = (student) =>{
  let resultado = 0;
  const data = Object.values(student);
  for (item of data) {
    let allCampus = item.campus;
    let allPorcen = item.stats.completedPercentage;
    if (allCampus === 'lima') {
      resultado += allPorcen;
    }
  }
  let operacion = Math.round(resultado / 44);
  document.getElementById('promL').innerHTML = `${operacion}%`;
};


const pantallaGeneral = (student) => {
  document.getElementById('general').addEventListener('click', (event) => {
    screens.style.display = 'none';
    contenido.style.display = 'none';
    generalPantalla.style.display = 'block';
    table.style.display = 'none';
    let count = 0;
    for (key in student) {
      count ++
    }
    
    document.getElementById('contador').innerHTML = count;
  });
  // contenido.innerHTML = operacion;
};
