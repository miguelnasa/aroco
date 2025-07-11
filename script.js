const escenarios = [
  // 1. Dolor de estómago
  "María es una joven de 23 años, alegre y trabajadora. Después de un almuerzo familiar, siente el estómago hinchado y un dolor punzante debajo de las costillas. Se queja de pesadez y hasta tiene ganas de vomitar. Su abuela la mira con preocupación, notando cómo se sujeta el abdomen.",
  // 2. Gripe y fiebre
  "Juan es un muchacho de 17 años, estudiante de bachillerato. Amanece con dolor de cabeza, fiebre y la nariz completamente tapada. Se siente débil, con escalofríos y sin ganas de levantarse de la cama. Su mamá lo ve sudoroso y cabizbajo, arropado hasta la cabeza.",
  // 3. Tos persistente
  "Ana es una señora de 45 años, madre de dos hijos pequeños. Lleva varios días con una tos seca que no la deja dormir en las noches. Siente la garganta irritada y le cuesta respirar profundo sin toser. Cada vez que intenta hablar, la tos la interrumpe y le cambia la voz.",
  // 4. Dolor menstrual
  "Laura es una estudiante universitaria de 20 años. Cada mes sufre de cólicos menstruales tan fuertes que a veces no puede ir a clase. Se ve pálida, doblada en la cama y con ganas de llorar del dolor. Sus amigas la acompañan, notando su incomodidad y el malestar que la deja sin energía.",
  // 5. Parásitos intestinales
  "Pedro es un niño de 9 años, inquieto y juguetón. Últimamente se queja de dolor de barriga, tiene poco apetito y a veces le duele la cabeza. Su mamá nota que está más pálido y con ojeras. El niño se queja cada vez que come y le cuesta concentrarse en sus juegos.",
  // 6. Ansiedad y nerviosismo
  "Isabel es una joven de 28 años, profesora de primaria. Hace días no logra dormir bien, se siente ansiosa y cualquier cosa la pone nerviosa. Anda con insomnio y los pensamientos no la dejan en paz en la noche. Al despertar, se le nota el cansancio y la mirada inquieta.",
  // 7. Infección urinaria
  "Carlos es un hombre de 32 años, trabajador del campo. Empieza a sentir ardor al orinar y un dolorcito molesto en la parte baja del abdomen. Cada vez que va al baño, siente más incomodidad y hasta fiebre le da en la tarde. Camina con dificultad y se nota preocupado por su malestar.",
  // 8. Dolor de cabeza
  "Sofía es una mujer de 38 años, secretaria en una oficina. Llega a la casa con un dolor de cabeza insoportable después de un día estresante y lleno de trabajo. Se siente mareada y con los ojos pesados, sin ganas de hacer nada. Se recuesta en el sofá, cierra los ojos y se frota las sienes.",
  // 9. Resfriado común
  "Miguel es un niño de 12 años, le encanta jugar fútbol con sus amigos. Desde ayer está congestionado, estornuda a cada rato y se queja de dolor de garganta. Su mamá nota que tiene los ojos llorosos y la voz gangosa. El niño se tapa la nariz y le cuesta respirar bien.",
  // 10. Inflamación y heridas leves
  "Paula es una joven de 25 años, deportista aficionada. Durante un partido de voleibol, se golpea la pierna y le sale un moretón grande e inflamado. Siente la zona caliente y un poco dolorida al caminar. Al llegar a casa, se sienta para revisar el golpe, notando la hinchazón y el color morado en su piel.",
  // 11. Estrés por trabajo acumulado
  "Andrés es un hombre de 35 años, empleado en una oficina. Lleva varios días sintiéndose abrumado por la cantidad de tareas que debe entregar. Se siente cansado, con la mente dispersa y con dificultad para concentrarse. En las noches, se queda despierto pensando en todo lo que tiene pendiente.",
  // 12. Tristeza por pérdida cercana
  "María es una mujer de 42 años, madre y ama de casa. Hace poco pierde a un familiar muy querido y desde entonces se siente muy triste. Llora con facilidad y se le dificulta encontrar ganas para hacer sus actividades diarias. Sus amigos notan que está más callada y apagada que antes.",
  // 13. Ansiedad antes de un evento importante
  "Juan es un joven de 22 años, estudiante universitario. Está nervioso porque mañana tiene una presentación que considera decisiva para su carrera. Siente el corazón acelerado, le cuesta dormir y tiene pensamientos negativos sobre su desempeño. Se preocupa mucho por lo que podrían pensar los demás.",
  // 14. Sensación de soledad
  "Isabel es una mujer de 30 años, que vive en una ciudad nueva. Aunque tiene trabajo, se siente sola y extraña a su familia y amigos. Pasa mucho tiempo en casa y evita salir porque no conoce a muchas personas. Se siente desconectada y con ganas de tener compañía.",
  // 15. Irritabilidad constante
  "Carlos es un hombre de 40 años, padre de familia. Últimamente se siente irritable y se enoja con facilidad por cosas pequeñas. Sus compañeros de trabajo y su familia le han comentado que está más tenso y menos paciente. Él mismo reconoce que se siente frustrado y cansado.",
  // 16. Falta de motivación
  "Laura es una joven de 25 años, recién graduada. Desde hace semanas no tiene ganas de buscar empleo ni de hacer cosas que antes disfrutaba. Se siente desanimada, sin energía y piensa que nada va a salir bien. Sus amigos la invitan a salir, pero ella prefiere quedarse en casa.",
  // 17. Dificultad para manejar conflictos
  "Pedro es un hombre de 33 años, casado y con dos hijos. Cuando tiene desacuerdos con su pareja, siente que pierde el control y se cierra en sí mismo. Le cuesta expresar lo que siente y prefiere evitar la conversación. Esto genera tensiones y distancia en la relación.",
  // 18. Preocupación excesiva por el futuro
  "Sofía es una mujer de 28 años, que trabaja en ventas. Constantemente se preocupa por lo que puede pasar con su trabajo, la economía y su salud. Tiene dificultad para relajarse y siente que no puede dejar de pensar en problemas. Esto le genera insomnio y cansancio durante el día.",
  // 19. Baja autoestima
  "Miguel es un adolescente de 16 años, estudiante de colegio. Se siente inseguro sobre su apariencia y sus habilidades. Evita participar en clase y no se siente cómodo con sus compañeros. A menudo se compara con otros y se siente menos valioso.",
  // 20. Dificultad para dormir por preocupaciones
  "Paula es una mujer de 29 años, profesional independiente. Tiene muchas responsabilidades y siente que no puede desconectarse al final del día. Se acuesta temprano, pero tarda horas en conciliar el sueño porque su mente no para de pensar en sus problemas. Se despierta cansada y con poca energía."
];

document.getElementById('randomBtn').addEventListener('click', () => {
    const index = Math.floor(Math.random() * escenarios.length);
    document.getElementById('output').textContent = escenarios[index];
});
