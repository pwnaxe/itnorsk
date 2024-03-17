<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Card, { Content } from '@smui/card';

  let topAppBar: TopAppBar;
</script>

<div>
<TopAppBar class="navmenu" bind:this={topAppBar} variant="short">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>NorskCode</Title>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
  <div class="text-container">
    <h1>NORSK <br> HUB</h1>
  </div>
  <div class="cards-container">
      <Card>
        <Content>
          <h2>Outsource Developers</h2>
          <p>Explore cutting-edge technology with our team of expert developers available for hire. <br><br> From advanced software solutions to innovative IT projects, we provide the skilled workforce you need to bring your vision to life.</p>
        </Content>
      </Card>
      <Card>
        <Content>
          <h2>Web Development</h2>
          <p>Build your online presence with custom-designed websites, e-commerce platforms with integrated databases, and AI-enhanced features such as facial recognition from video input.<br><br> Elevate your digital experience to the next level.</p>
        </Content>
      </Card>
      <Card>
        <Content>
          <h2>Mobile and Desktop Applications</h2>
          <p>Develop applications using the finest technologies and AI integration.<br><br> Utilize AI to create user behavior filters, enhancing both functionality and user engagement in your software solutions.</p>
        </Content>
      </Card>
      <Card>
        <Content>
          <h2>IT Infrastructure Maintenance</h2>
          <p>Ensure the reliability and efficiency of your IT infrastructure with our comprehensive maintenance services. <br><br>From routine checks to emergency repairs, our team provides the support you need to keep your operations running smoothly.</p>
        </Content>
      </Card>
  </div>
</AutoAdjust>
</div>

<style>  
  .text-container {
    padding-left: 15vw;
    padding-top: 25vh;
  }
  
  .text-container h1 {
    font-size: 3.5em;
    margin: 0;
  }

  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    padding-top: 10vh;
  }

</style>
