<script>
  import UnleashYourIT from '$lib/images/UnleashYourIT.mp4';
  import TechDrawer from './TechDrawer.svelte';
</script>

<div class="tech">
  <div class="drawer-container">
    <TechDrawer class="left"/>
    <TechDrawer class="left"/>
    <TechDrawer class="right"/>
    <TechDrawer class="right"/>
  </div>
</div>

<style>
  .tech {
    display: block;
    align-items: center;
    justify-items: center;
    text-align: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .drawer-container {
    grid-column: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 20px;
  }

  .left {
    justify-self: end;
  }

  .right {
    justify-self: start;
  }
</style>
