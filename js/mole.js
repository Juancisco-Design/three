import * as THREE from './three.module.js';
export default function pollomole ({x, y, z}) 
{

    // PLATO
    var geometriaplato = new THREE.CylinderGeometry(2, 1.3, 1.5, 50);
    var texturaplato = new THREE.TextureLoader().load("./assets/plato.jpg");
    var materialplato = new THREE.MeshLambertMaterial({ map: texturaplato });
    var plato = new THREE.Mesh(geometriaplato, materialplato);
    //scene.add(plato);
    plato.position.set(0, 1.2, 0);

    // MOLE
    var geometriamole = new THREE.CylinderGeometry(1.7, 1.5, 1, 50);
    var texturamole = new THREE.TextureLoader().load("./assets/mole.jpg");
    var materialmole = new THREE.MeshLambertMaterial({ map: texturamole });
    var mole = new THREE.Mesh(geometriamole, materialmole);
    //scene.add(mole);
    mole.position.set(0, 1.5, 0);

    // POLLO
    var geometriapollo = new THREE.SphereGeometry(0.5);
    var texturapollo = new THREE.TextureLoader().load("./assets/pollo.jpg");
    var materialpollo = new THREE.MeshLambertMaterial({ map: texturapollo });
    var pollo = new THREE.Mesh(geometriapollo, materialpollo);
    pollo.scale.set(1.5, 1, 1);
    //scene.add(pollo);
    pollo.position.set(-0.6, 2, 0);
    pollo.rotation.y = 0.2;

    // HUESO
    var geometriahueso = new THREE.CylinderGeometry(0.17, 0.17, 2, 32);
    var texturahueso = new THREE.TextureLoader().load("./assets/hueso.jpg");
    var materialhueso = new THREE.MeshLambertMaterial({ map: texturahueso });
    var hueso = new THREE.Mesh(geometriahueso, materialhueso);
    //scene.add(hueso);
    hueso.position.set(0, 2.1, -0.1);
    hueso.rotation.z = 4.7;
    hueso.rotation.y = 0.2;

    // UNION HUESO POLLO
    var geometriaUnion = new THREE.SphereGeometry(0.2);
    var union1 = new THREE.Mesh(geometriaUnion, materialhueso);
    var union2 = new THREE.Mesh(geometriaUnion, materialhueso);
    //scene.add(union1);
    //scene.add(union2);
    union1.position.set(1, 2.1, -0.15); 
    union2.position.set(0.95, 2.1, -0.4);

var molito = new THREE.Group();
molito.add(plato, mole, pollo, hueso, union1, union2);
molito.position.set(x, y, z);  
return molito;
}
