<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

  let container;
  let mixer; 
  let controls;
  const clock = new THREE.Clock();

  onMount(() => {
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(1, 1, 1);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);

    const loader = new ColladaLoader();
    loader.load('/stormtrooper.dae', function (collada) {
      const dae = collada.scene;
      dae.scale.set(0.1, 0.1, 0.1);
      dae.rotation.z = Math.PI;
      scene.add(dae);
      mixer = new THREE.AnimationMixer(dae);
      if (collada.animations && collada.animations.length) {
        mixer.clipAction(collada.animations[0]).play();
      }
      animate();
    });

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      controls.update();
      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    return () => {
      container.removeChild(renderer.domElement);
    };
  });
</script>

<div bind:this={container} id="container"></div>

<style>
  #container {
    width: 50vw;
    height: 25vw;
  }
</style>
