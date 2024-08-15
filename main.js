// console.log("Hola mundo! desde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2 >Ingeniera Industrial | Desarrolladora Front-end Jr. | Programadora.</ha>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars()
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();
