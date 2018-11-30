# **Data Dashboard**

## **Proceso de UX**

Nuestro primer acercamiento lo haremos a través del proceso de diseño, donde pasamos por diferentes etapas como:

### **1. Descubrimiento e investigación**
En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la mayor cantidad de datos posibles respecto al progreso de las estudiantes para apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance completando los proyectos de la Ruta de Aprendizaje y su desempeño en función a la Rúbrica de Niveles Esperados.

Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que llamamos LMS (Learning Management System). El LMS acumula data sobre quién leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios completados, nota en quizzes, etc.) no impacta directamente en la evaluación de una estudiante, sí es una pieza de información relevante que las TMs quisieran visualizar para tener un mejor entendimiento de cómo va cada estudiante en su proceso de aprendizaje.

Así, el reto de este proyecto es crear una interfaz donde las TMs puedan ver y usar la data de progreso del LMS. Para ello, proponemos crear un data dashboard (tablero de visualización de datos).

__Usuarixs:__  Por medio de entrevistas e investigaciones enfocadas al usuario, pudimos  descubrir que aparato tecnológico utilizan más, si usan alguna base de datos, cuánto tiempo invierten revisando esa data y cuáles han sido sus experiencias con ese método de análisis. En respuesta, hemos creado dos arquetipos o proto-personas:

Nombre : María-Teresa
Edad: 27 años.
Género: Femenina.
Ocupación: TM de Laboratoria
Aparato tecnológico más usado: Computadora y Celular
Aplicaciones del Data-Dashboard: Apoyo a las estudiantes, seguimiento del progreso de la generación.
Tiempo invertido en revisión de la Data: 2 a 3 horas
Pensamiento Laboral: Agile
Contexto: Invierte demasiado tiempo revisando data, y al mismo tiempo debe auxiliar a las chicas de la generación de laboratoria en caso de existir alguna situación que requiera de su intervención,(ya sea problemas familiares, económicos, personales y demás). Además se asegura de tener los proyectos listos una vez concluido el tiempo estipulado por entrega.


Nombre : José-Chuy
Edad: 32 años.
Género: Masculino.
Ocupación: Couche de Laboratoria
Aparato tecnológico más usado: Computadora y Celular
Aplicaciones del Data-Dashboard: Apoyo a las estudiantes, seguimiento del progreso de la generación.
Tiempo invertido en revisión de la Data: 2 a 3 horas
Pensamiento Laboral: Agile
Contexto: Invierte demasiado tiempo revisando data, y al mismo tiempo debe auxiliar a las chicas de la generación de laboratoria durante los proyectos y la ruta de aprendizaje.



__Necesidades de las usuarias:__ El personal de Laboratoria, no cuenta con una aplicación, y/o pagina web que procese de manera clara y eficiente los datos necesario para realizar un seguimiento oportuno del desarrollo del bootcamp, así como tampoco existe una base de datos que facilite el trato con las egresadas, de tal suerte que se tenga un seguimiento oportuno de su colocación y progreso de pagos.

Por ello creemos que es de suma importancia, la implementación de un data dashboard que les permita a los integrantes de cada una de las áreas, dedicar un menor tiempo posible al análisis y procesamiento de data, para enfocarse en otras actividades de índole laboral o personal.

__Objetivos de las usuarias:__
Acceder de forma rapida a la información que necesiten
Dedicar menos tiempo al procesamiento manual de la data
Obtener porcentajes generales que les permiitan hacer una comparación entre sedes, generaciones y alumnas.

__Pain points:__ Dedican demasiado tiempo en el análisis y procesamiento de la data.


__Sentimientos:__ Las TMs en general experimentan cansancio por la busqueda interminable de la data que necesitan, y frustracion al siempre volver a la misma rutina para encontrar la información que necesita.

__Técnicas usadas en esta fase:__ Encuestas a TM de Laboratoria en Sedes, CDMX, GUADALAJARA Y PERU asi como la prueba de usabilidad aplicada a usuarios y público externo a laboratoria.

__5. Objetivos del negocio:__
Labpratoria es una empresa que esta en constante cambio, dia a dia sus procesos se someten a cambio y evaluaciones por la metodología que utilizan: Agile, entre sus objetivos estan:
_El convertirse en la principal fuente de talento femenino en el mundo tech_ por lo que el manejo y evaluación continua de su información es primordial para encaminar de manera efectiva el desarrollo del programa asi como el desarrollo de las areas dependientes del bootcamp.
_Capacitar de manera efectiva y rápida al nuevo talento, de acuerdo a las necesidades laborales y el entorno en general__ de donde se desprende la necesidad latente de llevar un registro detallado del progreso de las estudiantes, para de esa forma orientarlas a la mejor día con día.  

__6. Motivaciones del negocio para el data dashboard:__
_Tener un seguimiento en general del progreso de todas las sedes_
_Tener un seguimiento profundo del desempeño de las estudiantes_
_Poder comparar lo anterior para encaminar los esfuerzos a la mejora continua del bootcamp_

### **2. Síntesis y definición**
El producto debe contener en su mayoría los siguientes aspectos:
Su diseño se apegara a las reglas de responsive web desing, de modo que el producto sea compatible con cualquier dispositivo móvil.
Tener una forma grafica y sencilla de mostrar estadísticas, tanto generales como especificas de cada generación, en cada sede y por cada alumna.
Deberá proporcionar al usuario una interfaz amigable que favorezca el entendimiento sin necesidad de explicaciones de terceros.
Deberá contar con un LOGIN que asegure la protección de los datos almacenados por cada bootcamp
Deberá implementar el menor número de pasos para acceder a la información deseada por el usuario.
__1. Cuáles crees que son los datos más importantes a tener en cuenta para el Data Dashboard:__

_Será una interfaz personalizada_ Eso quiere decir que esta pensada sola y exclusivamente para el personal de laboratoria
_Deberá realmente ofrecer un plus_ Significa que se espera que cumpla funciones basicas que eviten la Innecesaria buqueda de  informacion carpeta por carpeta.
_Deberá contener una interfaz amigable:_ Lo que resulta en la navegacion nativa e intuitiva dentro de la interfaz.

__2. Lo que los usuarios esperan obtener:__
-_1: Interfaz que les permita visualizar la informacion sin necesidad de entrar a carpetas_
_2: Seguridad de le interfaz, es decir que se tenga un LOGIN de incio_
_3: Que muestre primordialmente la sede y generacion en las que se interesa nuestro usuario_ en este caso, una vista general de las estudiantes en la generación activa y su progreso
_4: Que la interfaz sea visible en cualquier dispositivo para fines prácticos_
__4. Data proporcionada:__

     -_Data relacionada a los cursos:_ progreso de las estudiantes en relacion al LMS, tiempo de completitud y porcentage general de completitud
     -_Data relacionada a las sedes_  en donde se encuentran algunas de las sedes y sus generaciones pasadas

### **3. Ideación**
Nuestras principales usuarias son las TMs de Laboratoria, quiénes externaron la importancia de contar siempre con el dato necesario sin tener que invertir tanto tiempo buscandolo, por lo que la interfaz debia obedecer esa regla de oro: _menor cantidad de clicks, lo que resulta en menor cantidad de carpetas_ asi como la visualización en distintos dispositivos.

Nos enfocaremos en formularios ya conocidos como el de gmail o facebook, para la realizacion del LOGIN.
[Login](http://www.quicktechbook.com/blog/wp-content/uploads/2017/01/gmail-login.jpg)

Así como en menus laterales para la implementación de la interfaz dinamica.
[Menu_Movil](https://i.stack.imgur.com/K5zKz.png)
[Menu_Escritorio](https://www.webempresa.com/media/kunena/attachments/6276/TemaMiPortal-CMS.png)

Por otro lado en tema de colores, utilizaremos 3 de los cuatro colores usados por laboratoria:
 _1: El amarillo #FFE521_
 _2: El rosa #FF009E_
 _3: El negro #000000_

[Laboratoria](https://cdn-images-1.medium.com/max/1001/1*vU9Q-EPezXvWtSkcH4sfsw.png)

 ### **4. Prototipado**
(Esta es la fase creativa, donde se comienza a construir el Data dashboard con la información obtenida de las fases anteriores. Se reafirma crear la experiencia de usuario, donde la solución resuelve necesidades y facilita la vida)

Sketch: [Digital](https://github.com/BrisiaCastrejon/cdmx-2018-06-bc-core-am-data-dashboard/tree/readmeimg/ux/IMGREADUX)

Prototipo: [Visión general del producto esperado](https://projects.invisionapp.com/share/K2LSR5WY8U6#/screens)

### **5. User testing**
Al someter el prototipo a pruebas de usabilidad, concretamos lo siguiente:
_Se necesitaba un LOGIN_
_Se necesitaba un punto medio entre el porcentage de las esrudiantes_ es decir que estuviera fuera del rango que iba del 0 al 50% completado y del 90 al  100% completado, lo que resulto en un rango equivalente del 51 al 89% completado.
_Se necesitaba mostrar en primer lugar, la sede a la que pertenecia nuestra usuaria_
