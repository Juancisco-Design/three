import * as THREE from './three.module.js';
export default function mandarina ({x, y, z}) 
{
    // FRUTA MANDARINA
    var geometriaFrutaMandarina = new THREE.SphereGeometry(0.8);
    var texturaFrutaMandarina = new THREE.TextureLoader().load("./assets/mandarina.jpg");
    var materialFrutaMandarina = new THREE.MeshLambertMaterial({ map: texturaFrutaMandarina });

    var frutaMandarina = new THREE.Mesh(geometriaFrutaMandarina, materialFrutaMandarina);
    //scene.add(frutaMandarina);
    frutaMandarina.position.set(0, 0, 0);

    // PUNTOS NEGROS
    var geometriaPuntoNegro = new THREE.SphereGeometry(0.13);
    var materialPuntoNegro = new THREE.MeshLambertMaterial({ color: 0xcb6213 });

    // PUNTO NEGRO 1
    var puntoNegro1 = new THREE.Mesh(geometriaPuntoNegro, materialPuntoNegro);
    //scene.add(puntoNegro1);
    puntoNegro1.position.set(0, 0.70, 0);

    // PUNTO NEGRO 2
    var puntoNegro2 = new THREE.Mesh(geometriaPuntoNegro, materialPuntoNegro);
    //scene.add(puntoNegro2);
    puntoNegro2.position.set(0, -0.70, 0);

    // CREAR GRUPO
    var grupoFruta = new THREE.Group();
    grupoFruta.add(frutaMandarina, puntoNegro1, puntoNegro2);

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

var mandarinita = new THREE.Group();
mandarinita.add(fruta1, fruta2, fruta3, fruta4, fruta5);
mandarinita.position.set(x, y, z);  
return mandarinita;
}
