import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function vela ({x, y, z}) 
{

   // VELA
   var geometriavela = new THREE.CylinderGeometry(0.8, 0.5, 2, 32);
   var texturavela = new THREE.TextureLoader().load("./assets/cera.jpg");
   var materialvela = new THREE.MeshLambertMaterial({ map: texturavela}); 
   var vela = new THREE.Mesh(geometriavela, materialvela);
   //scene.add(vela);
   vela.position.set(0, 1, 0);

    // PAVILO
    var pavilo = new THREE.CylinderGeometry(0.01, 0.01, 1);
    var materialpavilo = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false });
    var mesh2 = new THREE.Mesh(pavilo, materialpavilo);
    //scene.add(mesh2); 
    mesh2.position.set(0, 1.85, 0);

    // FUEGO
    var fuegogeometria = new RoundedBoxGeometry(0.3, 0.3, 0.3, 1, 5);
    var fuegotextura = new THREE.TextureLoader().load("./assets/fuego.jpg");
    var fuegomaterial = new THREE.MeshLambertMaterial({ map: fuegotextura, transparent: true, opacity: 0.8 });
    var fuego = new THREE.Mesh(fuegogeometria, fuegomaterial);
    fuego.scale.set(1, 3, 1);
    //scene.add(fuego); 
    fuego.position.set(0, 2.3, 0);

var velita = new THREE.Group();
velita.add(vela, mesh2, fuego);
velita.position.set(x, y, z);  
return velita;
}
