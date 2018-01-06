var keyData = {
    q: {
        color: '#f45',
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        })
    },

    w: {
        color: '#145',
        sound: new Howl({
            src: ['sounds/clay.mp3']
        })
    },

    e: {
        color: '#567',
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        })
    },

    r: {
        color: '#123',
        sound: new Howl({
            src: ['sounds/corona.mp3']
        })
    },

    t: {
        color: '#856',
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        })
    },

    y: {
        color: '#de4',
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        })
    },

    u: {
        color: '#eda',
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        })
    },

    i: {
        color: '#b5d',
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        })
    },

    o: {
        color: '#5df',
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        })
    },

    p: {
        color: '#8ca',
        sound: new Howl({
            src: ['sounds/moon.mp3']
        })
    },

    a: {
        color: '#5c9',
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        })
    },

    s: {
        color: '#abc',
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        })
    },

    d: {
        color: '#def',
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        })
    },

    f: {
        color: '#f458',
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        })
    },

    g: {
        color: '#56e',
        sound: new Howl({
            src: ['sounds/piston-3.mp3']
        })
    },

    h: {
        color: '#b48',
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        })
    },


    j: {
        color: '#cd5',
        sound: new Howl({
            src: ['sounds/strike.mp3']
        })
    },


    k: {
        color: '#dce',
        sound: new Howl({
            src: ['sounds/suspense.mp3']
        })
    },


    l: {
        color: '#bd8',
        sound: new Howl({
            src: ['sounds/timer.mp3']
        })
    },


    z: {
        color: '#8ba',
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        })
    },


    x: {
        color: '#21f',
        sound: new Howl({
            src: ['sounds/veil.mp3']
        })
    },


    c: {
        color: '#2ff',
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        })
    },


    v: {
        color: '#f7f',
        sound: new Howl({
            src: ['sounds/splits.mp3']
        })
    },


    b: {
        color: '#f454',
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        })
    },


    n: {
        color: '#22f',
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        })
    },


    m: {
        color: '#777',
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        })
    }
}

var circles = [];
function onKeyDown(event) {

    if (keyData[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = randomPoint * maxPoint;
        var myCircle = new Path.Circle(point, 500);
        myCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();

        circles.push(myCircle);
    }
}

function onFrame(event) {
    for(var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
    }
}

