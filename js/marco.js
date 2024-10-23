import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function marco ({x, y, z}) 
{
  // MARCO
  var geometriaMarco = new RoundedBoxGeometry(3, 4, 0.7, 2, 1);
  var textura = new THREE.TextureLoader().load("./assets/cruz.jpg");
  var material = new THREE.MeshLambertMaterial({ map: textura });
  
  var mesh1 = new THREE.Mesh(geometriaMarco, material);
  //scene.add(mesh1);
  mesh1.position.set(0, 2, 0);

  // FOTO
  var foto = new RoundedBoxGeometry(2.8, 3.8, 0.7, 2, 1);
  var textura1 = new THREE.TextureLoader().load("./assets/foto.jpg");
  var material1 = new THREE.MeshLambertMaterial({ map: textura1 });
  var mesh2 = new THREE.Mesh(foto, material1);
  //scene.add(mesh2);
  mesh2.position.set(0, 2, 0.01);

  textura1.wrapS = THREE.RepeatWrapping;
  textura1.wrapT = THREE.RepeatWrapping;
  textura1.repeat.set(0.8, 1.14);
  textura1.offset.set(0.01, -0.07);

  // CRUZ 1
  var cruzver1 = new RoundedBoxGeometry(0.7, 3, 0.8, 2, 1);
  var mesh3 = new THREE.Mesh(cruzver1, material);
  //scene.add(mesh3);
  mesh3.position.set(0, 5.2, 0);

  var cruzhor1 = new RoundedBoxGeometry(2, 0.7, 0.8, 2, 1);
  var mesh4 = new THREE.Mesh(cruzhor1, material);
  //scene.add(mesh4);
  mesh4.position.set(0, 5.6, 0);

  // CRUZ 2
  var cruzver2 = new RoundedBoxGeometry(0.7, 5, 0.8, 2, 1);
  var mesh5 = new THREE.Mesh(cruzver2, material);
  //scene.add(mesh5);
  mesh5.position.set(-4, 2.3, -2);

  var cruzhor2 = new RoundedBoxGeometry(2, 0.7, 0.8, 2, 1);
  var mesh6 = new THREE.Mesh(cruzhor2, material);
  //scene.add(mesh6);
  mesh6.position.set(-4, 3.5, -2);

  // CRUZ 3
  var cruzver3 = new RoundedBoxGeometry(0.7, 5, 0.8, 2, 1);
  var mesh7 = new THREE.Mesh(cruzver3, material);
  //scene.add(mesh7);
  mesh7.position.set(4, 2.3, -2);

  var cruzhor3 = new RoundedBoxGeometry(2, 0.7, 0.8, 2, 1);
  var mesh8 = new THREE.Mesh(cruzhor3, material);
  //scene.add(mesh8);
  mesh8.position.set(4, 3.5, -2);

var marquito = new THREE.Group();
marquito.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8);
marquito.position.set(x, y, z);  
return marquito;
}
