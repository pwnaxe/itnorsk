<script>
   import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import TWEEN from '@tweenjs/tween.js';
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
  import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
  import { tableOfObjects } from '../components/data';

  let container;
  const targets = { table: [], sphere: [], helix: [], grid: [] };
  const objects = [];
  let controls;
  let camera, scene, renderer;

  onMount(() => {
    if (typeof window !== 'undefined') {
    init();
    animate();

    function init() {
      camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 3000;
      scene = new THREE.Scene();

      tableOfObjects.forEach((item) => {
        const element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = `rgba(0,127,127,${Math.random() * 0.5 + 0.25})`;

        const number = document.createElement('div');
        number.className = 'number';
        number.textContent = item.stat;
        element.appendChild(number);

        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = item.title;
        element.appendChild(symbol);

        const details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = `${item.description}<br>${item.stat}`;
        element.appendChild(details);

        const objectCSS = new CSS3DObject(element);
        objectCSS.position.x = Math.random() * 4000 - 2000;
        objectCSS.position.y = Math.random() * 4000 - 2000;
        objectCSS.position.z = Math.random() * 4000 - 2000;
        scene.add(objectCSS);

        objects.push(objectCSS);

        const object = new THREE.Object3D();
        object.position.x = (item.gridCoord[0] * 140) - 1330;
        object.position.y = -((item.gridCoord[1] * 180) + 990);
        targets.table.push(object);
      });

      renderer = new CSS3DRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      controls = new TrackballControls(camera, renderer.domElement);
      controls.minDistance = 500;
      controls.maxDistance = 6000;

      transform(targets.table, 2000); // Start with the table layout

      window.addEventListener('resize', onWindowResize);
    }}})

    function transform(targets, duration) {
      TWEEN.removeAll();

      for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const target = targets[i];

        new TWEEN.Tween(object.position)
          .to({ x: target.position.x, y: target.position.y, z: target.position.z }, duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();

        new TWEEN.Tween(object.rotation)
          .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();
      }
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    }

    function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
      controls.update();
      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    onDestroy(() => {
  if (controls) {
    controls.dispose();
  }
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', onWindowResize);
  }
});
</script>

<div bind:this={container} id="container"></div>
<div id="menu">
  <button on:click={() => transform(targets.table, 2000)}>TABLE</button>
  <button on:click={() => transform(targets.sphere, 2000)}>SPHERE</button>
  <button on:click={() => transform(targets.helix, 2000)}>HELIX</button>
  <button on:click={() => transform(targets.grid, 2000)}>GRID</button>
</div>

<style>
 #container {
    height: 100vh;
  }

#menu {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

.element {
  width: 120px;
  height: 160px;
  box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.5);
  border: 1px solid rgba(127, 255, 255, 0.25);
  font-family: Helvetica, sans-serif;
  text-align: center;
  line-height: normal;
  cursor: default;
}

.element:hover {
  box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.75);
  border: 1px solid rgba(127, 255, 255, 0.75);
}

.element .number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 12px;
  color: rgba(127, 255, 255, 0.75);
}

.element .symbol {
  position: absolute;
  top: 40px;
  left: 0px;
  right: 0px;
  font-size: 60px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);
}

.element .details {
  position: absolute;
  bottom: 15px;
  left: 0px;
  right: 0px;
  font-size: 12px;
  color: rgba(127, 255, 255, 0.75);
}

button {
  color: rgba(127, 255, 255, 0.75);
  background: transparent;
  outline: 1px solid rgba(127, 255, 255, 0.75);
  border: 0px;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: rgba(0, 255, 255, 0.5);
}

button:active {
  color: #000000;
  background-color: rgba(0, 255, 255, 0.75);
}
</style>