import * as THREE from './three.module.js';
export default function jarro ({x, y, z}) 
{
   // ESFERA
    var esferaGeometria = new THREE.SphereGeometry(1.1);
    esferaGeometria.scale(1, 1, 1);
    var texturaEsfera = new THREE.TextureLoader().load("./assets/barro.jpg");
    var materialEsfera = new THREE.MeshLambertMaterial({ map: texturaEsfera });
    var esferaMesh = new THREE.Mesh(esferaGeometria, materialEsfera);
    //scene.add(esferaMesh);
    esferaMesh.position.set(0, 0.9, 0);

    // OREJA
    var orejaGeometria = new THREE.TorusGeometry(0.4, 0.15, 30, 30);
    var orejaMesh = new THREE.Mesh(orejaGeometria, materialEsfera);
    //scene.add(orejaMesh);
    orejaMesh.position.set(0.9, 1.2, 0);

    // BASE
    var baseGeometria = new THREE.CylinderGeometry(0.8, 0.5, 1.2, 32); 
    var baseMesh = new THREE.Mesh(baseGeometria, materialEsfera);
    //scene.add(baseMesh);
    baseMesh.position.set(0, 1.4, 0);

    // ATOLE
    var atoleGeometria = new THREE.CylinderGeometry(0.65, 0.65, 0.5, 32);
    var texturaAtole = new THREE.TextureLoader().load("./assets/atole.jpg");
    var materialAtole = new THREE.MeshLambertMaterial({ map: texturaAtole });
    var atoleMesh = new THREE.Mesh(atoleGeometria, materialAtole);
    //scene.add(atoleMesh);
    atoleMesh.position.set(0, 1.755, 0);

var jarrito = new THREE.Group();
jarrito.add(esferaMesh, orejaMesh, baseMesh, atoleMesh);
jarrito.position.set(x, y, z);  
return jarrito;
}
