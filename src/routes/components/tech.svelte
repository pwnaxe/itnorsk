<script>
  import UnleashYourIT from '$lib/images/UnleashYourIT.mp4';
  import TechDrawer from './TechDrawer.svelte';
</script>

<div class="tech">
  <div class="UnleashYourIT-video">
    <video src="{UnleashYourIT}" controls>
      <track src="./vidtxt.vtt" kind="captions" srclang="en" label="English" default />
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="video-text">
    <h1>Welcome to Our Landing Page</h1>
    <p>Here is some description text for your product or service.</p>
  </div>
  <TechDrawer/>
  <TechDrawer/>
  <TechDrawer/>
  <TechDrawer/>
</div>

<style>
  .tech {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .UnleashYourIT-video video {
    max-width: 100%;
    height: auto;
  }

  .video-text {
    margin-top: 20px;
  }
</style>
