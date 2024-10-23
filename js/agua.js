import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function agua ({x, y, z}) 
{

    // ESFERA 
    var esferaGeometria = new THREE.SphereGeometry(0.9);
    esferaGeometria.scale(1, 1, 1);
    var texturaTalavera = new THREE.TextureLoader().load("./assets/talavera2.jpg");
    var Material = new THREE.MeshLambertMaterial({ map: texturaTalavera });
    var esferaMesh = new THREE.Mesh(esferaGeometria, Material);
    //scene.add(esferaMesh);
    esferaMesh.position.set(0, 0.9, 0);

    // OREJA
    var orejaGeometria = new THREE.TorusGeometry(0.4, 0.1, 30, 30);
    var orejaMesh = new THREE.Mesh(orejaGeometria, Material);
    //scene.add(orejaMesh);
    orejaMesh.position.set(0.7, 1.4, 0);

    // BASE
    var baseGeometria = new THREE.CylinderGeometry(0.35, 0.35, 0.5, 32);
    var baseMesh = new THREE.Mesh(baseGeometria, Material);
    //scene.add(baseMesh);
    baseMesh.position.set(0, 1.9, 0);

    // PUNTA JARRA
    var puntaJarraGeometria = new THREE.CylinderGeometry(0.6, 0.35, 0.3, 32);
    var puntaJarraMesh = new THREE.Mesh(puntaJarraGeometria, Material);
    //scene.add(puntaJarraMesh);
    puntaJarraMesh.position.set(0, 2.2, 0);

    // AGUA JARRA
    var aguaJarraGeometria = new THREE.CylinderGeometry(0.5, 0.2, 0.3, 32);
    var texturaAgua = new THREE.TextureLoader().load("./assets/agua.jpg");
    var aguaMaterial = new THREE.MeshLambertMaterial({ map: texturaAgua });
    var aguaJarraMesh = new THREE.Mesh(aguaJarraGeometria, aguaMaterial);
    //scene.add(aguaJarraMesh);
    aguaJarraMesh.position.set(0, 2.204, 0);


var aguita = new THREE.Group();
aguita.add(esferaMesh, orejaMesh, baseMesh, puntaJarraMesh, aguaJarraMesh);
aguita.position.set(x, y, z);  
return aguita;
}
