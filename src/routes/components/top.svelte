<script>
  import itpres from '$lib/images/itpres.webp';
</script>

<div class="landing">
  <div class="norskit-image">
    <img src='{itpres}' alt="NorskIT" />
  </div>
  <div class="norskit-text">
    <h1>Welcome to Our Landing Page</h1>
    <p>Here is some description text for your product or service.</p>
  </div>
</div>

<style>
  .landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .norskit-image img {
    max-width: 100%;
    height: auto; 
  }

  .norskit-text {
    margin-top: 20px;
  }
</style>