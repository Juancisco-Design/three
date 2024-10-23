import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function caballo ({x, y, z}) 
{

    // VASO CABALLITO
    var caballitoVasoGeometria = new THREE.CylinderGeometry(0.6, 0.3, 1.3, 40);
    var caballitoVasoMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.4 });
    var caballitoVasoMesh = new THREE.Mesh(caballitoVasoGeometria, caballitoVasoMaterial);
    caballitoVasoMesh.position.set(0, 0.6, 0);
    //scene.add(caballitoVasoMesh);

    // TEQUILA CABALLITO
    var caballitoTequilaGeometria = new THREE.CylinderGeometry(0.45, 0.25, 1.1, 40);
    var caballitoTequilaTextura = new THREE.TextureLoader().load("./assets/tequila.jpg");
    var caballitoTequilaMaterial = new THREE.MeshLambertMaterial({ map: caballitoTequilaTextura });
    var caballitoTequilaMesh = new THREE.Mesh(caballitoTequilaGeometria, caballitoTequilaMaterial);
    caballitoTequilaMesh.position.set(0, 0.6, 0);
    //scene.add(caballitoTequilaMesh);


var caballito = new THREE.Group();
caballito.add(caballitoVasoMesh, caballitoTequilaMesh);
caballito.position.set(x, y, z);  
return caballito;
}
