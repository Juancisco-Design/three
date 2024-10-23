import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function flor ({x, y, z}) 
{
    //CUBO REDONDEADO
    var geometry = new RoundedBoxGeometry (5,5,5,3,2);
    var textura = new THREE.TextureLoader().load("./assets/flor.png");
    var material1 = new THREE.MeshLambertMaterial({ map: textura });

    var mesh1 = new THREE.Mesh(geometry,material1);
    var mesh2 = new THREE.Mesh(geometry,material1);
    var mesh3 = new THREE.Mesh(geometry,material1);
    var mesh4 = new THREE.Mesh(geometry,material1);

    //ROTACION DE PETALOS
    mesh1.scale.set(1,5,1);
    mesh2.scale.set(1,5,1);
    mesh3.scale.set(1,5,1);
    mesh4.scale.set(1,5,1);

    //AÑADIR A ESCENA 
    //scene.add(mesh1);  
    //scene.add(mesh2);
    //scene.add(mesh3);
    //scene.add(mesh4);

    //ROTAR
    mesh2.rotation.z = 0.785;
    mesh3.rotation.z = 1.57;
    mesh4.rotation.z = 2.355;

var floresita = new THREE.Group();
floresita.add(mesh1, mesh2, mesh3, mesh4);
floresita.position.set(x, y, z);  
return floresita;
}
