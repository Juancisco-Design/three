import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function vaso ({x, y, z}) 
{

 // VASO
 var vasoGeometria = new THREE.CylinderGeometry(0.45, 0.25, 1.4, 40);
 var texturaTalavera = new THREE.TextureLoader().load("./assets/talavera2.jpg");
 var Material = new THREE.MeshLambertMaterial({ map: texturaTalavera });
 var vasoMesh = new THREE.Mesh(vasoGeometria, Material);
 vasoMesh.position.set(0, 0.6, 0);
 //scene.add(vasoMesh);

 // AGUA VASO
 var aguaVasoGeometria = new THREE.CylinderGeometry(0.35, 0.15, 1.4, 40);
 var texturaAgua = new THREE.TextureLoader().load("./assets/agua.jpg");
 var aguaMaterial = new THREE.MeshLambertMaterial({ map: texturaAgua });
 var aguaVasoMesh = new THREE.Mesh(aguaVasoGeometria, aguaMaterial);
 aguaVasoMesh.position.set(0, 0.604, 0);
 //scene.add(aguaVasoMesh);

var vasito = new THREE.Group();
vasito.add(vasoMesh, aguaVasoMesh);
vasito.position.set(x, y, z);  
return vasito;
}
