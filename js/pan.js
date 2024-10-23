import * as THREE from './three.module.js';
export default function pan ({x, y, z}) 
{
    // PLATO
    var geometriaPlato = new THREE.CylinderGeometry(3.5, 2, 1.5, 40);
    var texturaPlato = new THREE.TextureLoader().load("./assets/talavera.jpg");
    var materialPlato = new THREE.MeshLambertMaterial({ map: texturaPlato });
    var plato = new THREE.Mesh(geometriaPlato, materialPlato);
    plato.position.set(0, 1.7, 0);
    //scene.add(plato);

    // PAN 
    var geometriaPan = new THREE.SphereGeometry(3, 20, 20);
    var texturaPan = new THREE.TextureLoader().load("./assets/pan.jpg");
    var materialPan = new THREE.MeshLambertMaterial({ map: texturaPan });
    var pan = new THREE.Mesh(geometriaPan, materialPan);
    pan.position.set(0, 1.3, 0);  // Posición del pan sobre el plato
    //scene.add(pan);

    // DECORACIÓN DEL PAN

    // BOLITA PRINCIPAL
    var esferaPrincipal = new THREE.SphereGeometry(0.6);
    var texturaEsfera = new THREE.TextureLoader().load("./assets/azucar.jpg");
    var materialEsfera = new THREE.MeshLambertMaterial({ map: texturaEsfera });
    var esfera1 = new THREE.Mesh(esferaPrincipal, materialEsfera);
    esfera1.position.set(0, 4.1, 0);
    //scene.add(esfera1);

    // BOLITA ARRIBA
    var esferaPequeñaArriba = new THREE.SphereGeometry(0.3);
    var bolitaArriba = new THREE.Mesh(esferaPequeñaArriba, materialEsfera);
    bolitaArriba.position.set(0, 4.2, 0.8);
    //scene.add(bolitaArriba);

    // BOLITA MEDIO
    var esferaMediana = new THREE.SphereGeometry(0.5);
    var bolitaMedio = new THREE.Mesh(esferaMediana, materialEsfera);
    bolitaMedio.position.set(0, 3.6, 1.7);
    //scene.add(bolitaMedio);

    // BOLITA ABAJO
    var esferaPequeñaAbajo = new THREE.SphereGeometry(0.3);
    var bolitaAbajo = new THREE.Mesh(esferaPequeñaAbajo, materialEsfera);
    bolitaAbajo.position.set(0, 2.7, 2.6);
    //scene.add(bolitaAbajo);

    // CONO ARRIBA
    var conoArriba = new THREE.CylinderGeometry(0.15, 0.45, 1.1, 20);
    var conoSuperior = new THREE.Mesh(conoArriba, materialEsfera);
    conoSuperior.position.set(0, 3.9, 1.2);
    conoSuperior.rotation.set(5.4, 0, 0);
    //scene.add(conoSuperior);

    // CONO ABAJO
    var conoAbajo = new THREE.CylinderGeometry(0.45, 0.15, 1.1, 20);
    var conoInferior = new THREE.Mesh(conoAbajo, materialEsfera);
    conoInferior.position.set(0, 3.2, 2.1);
    conoInferior.rotation.set(5.4, 0, 0);
    //scene.add(conoInferior);

    // GRUPO HUESITO
    var grupoHuesito = new THREE.Group();
    grupoHuesito.add(bolitaArriba, bolitaMedio, bolitaAbajo, conoSuperior, conoInferior);
    //scene.add(grupoHuesito);

    // CLONACIÓN DEL GRUPO HUESO

    var huesito2 = grupoHuesito.clone();
    huesito2.position.set(0, 0, 0);
    huesito2.rotation.set(0, 5, 0);
    //scene.add(huesito2);

    var huesito3 = grupoHuesito.clone();
    huesito3.position.set(0, 0, 0);
    huesito3.rotation.set(0, -5, 0);
    //scene.add(huesito3);

    var huesito4 = grupoHuesito.clone();
    huesito4.position.set(0, 0, 0);
    huesito4.rotation.set(0, 3.7, 0);
    //scene.add(huesito4);

    var huesito5 = grupoHuesito.clone();
    huesito5.position.set(0, 0, 0);
    huesito5.rotation.set(0, 2.5, 0);
    //scene.add(huesito5);

var pancito = new THREE.Group();
pancito.add(plato, pan, esfera1, bolitaArriba, bolitaMedio, bolitaAbajo, conoSuperior, conoInferior, grupoHuesito, huesito2, huesito3, huesito4, huesito5);
pancito.position.set(x, y, z);  
return pancito;
}
