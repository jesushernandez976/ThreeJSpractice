import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(3,3,3);
const material = new THREE.MeshLambertMaterial( { 
   color : 0xffffff,

});
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


const directionalLight = new THREE.DirectionalLight(0xffffff,20);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);



function animate() {

	cube.rotation.x += 0.001;
	cube.rotation.y += 0.001;

	renderer.render( scene, camera );

}