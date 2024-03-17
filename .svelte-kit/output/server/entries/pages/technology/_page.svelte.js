import { c as create_ssr_component, o as onDestroy, f as add_attribute } from "../../../chunks/ssr.js";
import "@tweenjs/tween.js";
const css = {
  code: "#container.svelte-1kowj8c{height:100vh}#menu.svelte-1kowj8c{position:absolute;bottom:20px;width:100%;text-align:center}button.svelte-1kowj8c{color:rgba(127, 255, 255, 0.75);background:transparent;outline:1px solid rgba(127, 255, 255, 0.75);border:0px;padding:5px 10px;cursor:pointer}button.svelte-1kowj8c:hover{background-color:rgba(0, 255, 255, 0.5)}button.svelte-1kowj8c:active{color:#000000;background-color:rgba(0, 255, 255, 0.75)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  let camera, scene, renderer;
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  }
  function render() {
    renderer.render(scene, camera);
  }
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", onWindowResize);
    }
  });
  $$result.css.add(css);
  return `<div id="container" class="svelte-1kowj8c"${add_attribute("this", container, 0)}></div> <div id="menu" class="svelte-1kowj8c"><button class="svelte-1kowj8c" data-svelte-h="svelte-1dq6i2n">TABLE</button> <button class="svelte-1kowj8c" data-svelte-h="svelte-13lekt1">SPHERE</button> <button class="svelte-1kowj8c" data-svelte-h="svelte-1esk18b">HELIX</button> <button class="svelte-1kowj8c" data-svelte-h="svelte-271vlb">GRID</button> </div>`;
});
export {
  Page as default
};
