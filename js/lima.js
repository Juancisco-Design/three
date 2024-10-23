import * as THREE from './three.module.js';
export default function lima ({x, y, z}) 
{

    // FRUTA LIMA
    var geometriaFrutaLima = new THREE.SphereGeometry(0.8);
    var texturaFrutaLima = new THREE.TextureLoader().load("./assets/lima.jpg");
    var materialFrutaLima = new THREE.MeshLambertMaterial({ map: texturaFrutaLima });

    var frutaLima = new THREE.Mesh(geometriaFrutaLima, materialFrutaLima);
    //scene.add(frutaLima);
    frutaLima.position.set(0, 0, 0);

    // PUNTOS FRUTA
    var geometriaPuntoFruta = new THREE.SphereGeometry(0.2);
    var materialPuntoFruta = new THREE.MeshLambertMaterial({ map: texturaFrutaLima });

    // PUNTO FRUTA 1
    var puntoFruta1 = new THREE.Mesh(geometriaPuntoFruta, materialPuntoFruta);
    //scene.add(puntoFruta1);
    puntoFruta1.position.set(0, 0.7, 0);

    // PUNTO FRUTA 2
    var puntoFruta2 = new THREE.Mesh(geometriaPuntoFruta, materialPuntoFruta);
    //scene.add(puntoFruta2);
    puntoFruta2.position.set(0, -0.7, 0);

    // PUNTOS NEGROS
    var geometriaPuntoNegro = new THREE.SphereGeometry(0.08);
    var materialPuntoNegro = new THREE.MeshLambertMaterial({ color: 0x043e00 });

    // PUNTO NEGRO 1
    var puntoNegro1 = new THREE.Mesh(geometriaPuntoNegro, materialPuntoNegro);
    //scene.add(puntoNegro1);
    puntoNegro1.position.set(0, 0.84, 0);

    // PUNTO NEGRO 2
    var puntoNegro2 = new THREE.Mesh(geometriaPuntoNegro, materialPuntoNegro);
    //scene.add(puntoNegro2);
    puntoNegro2.position.set(0, -0.84, 0);

    // CREAR GRUPO
    var grupoFruta = new THREE.Group();
    grupoFruta.add(frutaLima, puntoFruta1, puntoFruta2, puntoNegro1, puntoNegro2);

    // AÑADIR GRUPO A LA ESCENA
    //scene.add(grupoFruta);
    //scene.remove(grupoFruta); //OCULTAR GRUPO

    //CLONAR
    var fruta1=grupoFruta.clone();
    //scene.add(fruta1);
    fruta1.position.set(0,2,0);

    var fruta2=grupoFruta.clone();
    //scene.add(fruta2);
    fruta2.position.set(-1.1,1,0);

    var fruta3 = grupoFruta.clone();
    //scene.add(fruta3);
    fruta3.position.set(1.1, 1, 0); 

    var fruta4 = grupoFruta.clone();
    //scene.add(fruta4);
    fruta4.position.set(0, 1, 1.1); 

    var fruta5 = grupoFruta.clone();
    //scene.add(fruta5);
    fruta5.position.set(0, 1, -1.1); 

var limita = new THREE.Group();
limita.add(fruta1, fruta2, fruta3, fruta4, fruta5);
limita.position.set(x, y, z);  
return limita;
}
