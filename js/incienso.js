import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function incienso ({x, y, z}) 
{
 
    // PUNTA 
    var puntaSomerio = new THREE.CylinderGeometry(0.5, 0.1, 0.3, 32);
    var texturaSomerio = new THREE.TextureLoader().load("./assets/somerio.jpg");
    var materialSomerio = new THREE.MeshLambertMaterial({ map: texturaSomerio });
    var puntaSomerio = new THREE.Mesh(puntaSomerio, materialSomerio);
    //scene.add(puntaSomerio);
    puntaSomerio.position.set(0, 0.2, 0);

    // BASE
    var baseGeometria = new THREE.CylinderGeometry(0.1, 0.3, 0.7, 32);
    var baseMesh = new THREE.Mesh(baseGeometria, materialSomerio);
    //scene.add(baseMesh);
    baseMesh.position.set(0, -0.1, 0);

    // OREJA
    var orejaGeometria = new THREE.TorusGeometry(0.13, 0.06, 30, 30);
    var orejaMesh = new THREE.Mesh(orejaGeometria, materialSomerio);
    //scene.add(orejaMesh);
    orejaMesh.position.set(-0.2, 0, 0);
    var oreja1 = orejaMesh.clone();
    //scene.add(oreja1);
    oreja1.position.set(0.2, 0, 0);

    var oreja2 = orejaMesh.clone();
    //scene.add(oreja2);
    oreja2.position.set(0, 0, 0.2);
    oreja2.rotation.y = (3 * Math.PI) / 2;

    var oreja3 = orejaMesh.clone();
    //scene.add(oreja3);
    oreja3.position.set(0, 0, -0.2);
    oreja3.rotation.y = (3 * Math.PI) / 2; 

    var oreja4 = orejaMesh.clone();
    //scene.add(oreja4);
    oreja4.position.set(0, 0.1, 0);
    oreja4.rotation.x = (3 * Math.PI) / 2; 

    // CILINDRO 1
    var cilindroGeometria1 = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 32);
    var cilindroMesh1 = new THREE.Mesh(cilindroGeometria1, materialSomerio);
    //scene.add(cilindroMesh1);
    cilindroMesh1.position.set(0, 0.5, 0);

    // CILINDRO 2
    var cilindroGeometria2 = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 32);
    var cilindroMesh2 = new THREE.Mesh(cilindroGeometria2, materialSomerio);
    //scene.add(cilindroMesh2);
    cilindroMesh2.position.set(0, -0.55, 0);

    // CILINDRO 3
    var cilindroGeometria3 = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 32);
    var texturaCarbon = new THREE.TextureLoader().load("./assets/carbon.jpg");
    var materialCarbon = new THREE.MeshLambertMaterial({ map: texturaCarbon });
    var cilindroMesh3 = new THREE.Mesh(cilindroGeometria3, materialCarbon);
    //scene.add(cilindroMesh3);
    cilindroMesh3.position.set(0, 0.505, 0);

var inciensito = new THREE.Group();
inciensito.add(puntaSomerio, baseMesh, orejaMesh, oreja1, oreja2, oreja3, oreja4, cilindroMesh1, cilindroMesh2, cilindroMesh3);
inciensito.position.set(x, y, z);  
return inciensito;
}
