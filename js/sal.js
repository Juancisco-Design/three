import * as THREE from './three.module.js';
export default function sal ({x, y, z}) 
{

    // PLATO
    var geometriaplato = new THREE.CylinderGeometry(2, 1.3, 1.5, 50);
    var texturaplato = new THREE.TextureLoader().load("./assets/talavera2.jpg");
    var materialplato = new THREE.MeshLambertMaterial({ map: texturaplato });
    var plato = new THREE.Mesh(geometriaplato, materialplato);
    //scene.add(plato);
    plato.position.set(0, 1.3, 0);

    // SAL
    var geometriaarroz = new THREE.CylinderGeometry(1.7, 1.5, 1, 50);
    var texturaarroz = new THREE.TextureLoader().load("./assets/sal.jpg");
    var materialarroz = new THREE.MeshLambertMaterial({ map: texturaarroz });
    var arroz = new THREE.Mesh(geometriaarroz, materialarroz);
    //scene.add(arroz);
    arroz.position.set(0, 1.57, 0);

    // GRANOS
    var geometria1 = new THREE.SphereGeometry(0.13);
    var material = new THREE.MeshLambertMaterial({ color: 0xffffff });

    var esfera0 = new THREE.Mesh(geometria1, material);
    var esfera1 = new THREE.Mesh(geometria1, material);
    var esfera2 = new THREE.Mesh(geometria1, material);
    var esfera3 = new THREE.Mesh(geometria1, material);
    var esfera4 = new THREE.Mesh(geometria1, material);
    var esfera5 = new THREE.Mesh(geometria1, material);
    var esfera6 = new THREE.Mesh(geometria1, material);
    var esfera7 = new THREE.Mesh(geometria1, material);
    var esfera8 = new THREE.Mesh(geometria1, material);
    var esfera9 = new THREE.Mesh(geometria1, material);
    var esfera10 = new THREE.Mesh(geometria1, material);
    var esfera11 = new THREE.Mesh(geometria1, material);
    var esfera12 = new THREE.Mesh(geometria1, material);
    var esfera13 = new THREE.Mesh(geometria1, material);
    var esfera14 = new THREE.Mesh(geometria1, material);
    var esfera15 = new THREE.Mesh(geometria1, material);
    var esfera16 = new THREE.Mesh(geometria1, material);
    var esfera17 = new THREE.Mesh(geometria1, material);
    var esfera18 = new THREE.Mesh(geometria1, material);

    /*scene.add(esfera0);
    scene.add(esfera1);
    scene.add(esfera2);
    scene.add(esfera3);
    scene.add(esfera4);
    scene.add(esfera5);
    scene.add(esfera6);
    scene.add(esfera7);
    scene.add(esfera8);
    scene.add(esfera9);
    scene.add(esfera10);
    scene.add(esfera11);
    scene.add(esfera12);
    scene.add(esfera13);
    scene.add(esfera14);
    scene.add(esfera15);
    scene.add(esfera16);
    scene.add(esfera17);
    scene.add(esfera18);*/
    
    esfera0.position.set(0, 2, 0); 
    esfera1.position.set(1.2, 2, 0); 
    esfera2.position.set(-1.3, 2, 0.2); 
    esfera3.position.set(-0.6, 2, -1); 
    esfera4.position.set(0.7, 2, 1); 
    esfera5.position.set(-0.7, 2, 1); 
    esfera6.position.set(0.7, 2, -1); 
    esfera7.position.set(0.8, 2, 0.4);
    esfera8.position.set(-1, 2, -0.5);
    esfera9.position.set(0.2, 2, 0.5);
    esfera10.position.set(-0.5, 2, 0.7);
    esfera11.position.set(0.2, 2, -1.2);
    esfera12.position.set(1.1, 2, 0.7);
    esfera13.position.set(-0.8, 2, 0.3);
    esfera14.position.set(0.9, 2, -0.4);
    esfera15.position.set(-0.4, 2, -0.3);
    esfera16.position.set(-0, 2, 1.3);
    esfera17.position.set(0.4, 2, -0.5);
    esfera18.position.set(0, 2, -0.7); 

var salesita = new THREE.Group();
salesita.add(plato, arroz, esfera0, esfera1, esfera2, esfera3, esfera4, esfera5, esfera6, esfera7, esfera8, esfera9, esfera10, esfera11, esfera12, esfera13, esfera14, esfera15, esfera16, esfera17, esfera18);
salesita.position.set(x, y, z);  
return salesita;
}
