import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function tequila ({x, y, z}) 
{

     // TAPA
     var tapaGeometria = new RoundedBoxGeometry(1.3, 0.9, 1.3, 10, 0.4);
     var tapaTextura = new THREE.TextureLoader().load("./assets/cruz.jpg");
     var tapaMaterial = new THREE.MeshLambertMaterial({ map: tapaTextura });
     var tapaMesh = new THREE.Mesh(tapaGeometria, tapaMaterial);
     //scene.add(tapaMesh);
     tapaMesh.position.set(0, 6.7, 0);
 
     // BASE1
     var base1Geometria = new RoundedBoxGeometry(0.8, 1, 0.8, 10);
     var base1Material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.8 });
     var base1Mesh = new THREE.Mesh(base1Geometria, base1Material);
     //scene.add(base1Mesh);
     base1Mesh.position.set(0, 6, 0);
 
     // BASE2
     var base2Geometria = new RoundedBoxGeometry(1.5, 0.8, 1.5, 10, 0.3);
     var base2Material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.7 });
     var base2Mesh = new THREE.Mesh(base2Geometria, base2Material);
     //scene.add(base2Mesh);
     base2Mesh.position.set(0, 5.5, 0);
 
     // BASE3
     var base3Geometria = new RoundedBoxGeometry(2, 1, 2, 10, 0.3);
     var base3Material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.6 });
     var base3Mesh = new THREE.Mesh(base3Geometria, base3Material);
     //scene.add(base3Mesh);
     base3Mesh.position.set(0, 5, 0);
 
     // BASE4 BOTELLA
     var base4Geometria = new RoundedBoxGeometry(2.5, 5, 2.5, 10, 0.3);
     var base4Material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.4 });
     var base4Mesh = new THREE.Mesh(base4Geometria, base4Material);
     //scene.add(base4Mesh);
     base4Mesh.position.set(0, 2.5, 0);
 
     // ETIQUETA
     var etiquetaGeometria = new RoundedBoxGeometry(2.11, 2.7, 2.11, 10, 0.4);
     var etiquetaTextura = new THREE.TextureLoader().load("./assets/logotequila.jpg");
     var etiquetaMaterial = new THREE.MeshLambertMaterial({ map: etiquetaTextura });
     var etiquetaMesh = new THREE.Mesh(etiquetaGeometria, etiquetaMaterial);
     //scene.add(etiquetaMesh);
     etiquetaMesh.position.set(0, 2.6, 0);
 
     // TEQUILA BOTELLA
     var tequilaGeometria = new RoundedBoxGeometry(2.1, 4.7, 2.1, 10, 0.4);
     var tequilaTextura = new THREE.TextureLoader().load("./assets/tequila.jpg");
     var tequilaMaterial = new THREE.MeshLambertMaterial({ map: tequilaTextura });
     var tequilaMesh = new THREE.Mesh(tequilaGeometria, tequilaMaterial);
     //scene.add(tequilaMesh);
     tequilaMesh.position.set(0, 2.5, 0);

var tequilita = new THREE.Group();
tequilita.add(tapaMesh, base1Mesh, base2Mesh, base3Mesh, base4Mesh, etiquetaMesh, tequilaMesh);
tequilita.position.set(x, y, z);  
return tequilita;
}
