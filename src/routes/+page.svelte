<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title as AppBarTitle,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Card, { Content as CardContent } from '@smui/card';
  import Stormtrooper from './components/stormtrooper.svelte';
  import Drawer, {
    AppContent,
    Header,
    Title as DrawerTitle,
    Subtitle,
    Content as DrawerContent,
  } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';

  let topAppBar: TopAppBar;
  let open = false;
  let active = 'menumobile';


  function toggleDrawer() {
    open = !open;
  }

  function setActive(value: string) {
    active = value;
  }
</script>

<div>
  <TopAppBar class="navmenu" bind:this={topAppBar} variant="short">
    <Row>
      <Section>
        <IconButton class="material-icons" on:click={toggleDrawer}>menu</IconButton>
        <AppBarTitle>NorskCode</AppBarTitle>
      </Section>
    </Row>
  </TopAppBar>
  <Drawer class="drawer" bind:open={open}>
    <Header>
      <DrawerTitle>Nazwa Drawer</DrawerTitle>
      <Subtitle>Podtytuł Drawer</Subtitle>
    </Header>
    <DrawerContent>
      <List>
        <Item on:click={() => setActive('item1')}>
          <Text>Element 1</Text>
        </Item>
        <Item on:click={() => setActive('item2')}>
          <Text>Element 2</Text>
        </Item>
      </List>
    </DrawerContent>
  </Drawer>
  <AppContent>
    <AutoAdjust {topAppBar}>
      <div class="text-container">
        <h1>NORSK <br> HUB</h1>
      </div>
      <div class="stormtrooper">
        <Stormtrooper />
      </div>
      <div class="cards-container">
        <Card>
          <CardContent>
            <h2>Outsource Developers</h2>
            <p>Explore cutting-edge technology with our team of expert developers available for hire. <br><br> From advanced software solutions to innovative IT projects, we provide the skilled workforce you need to bring your vision to life.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2>Web, Mobile, Desktop App Development</h2>
            <p>Develop seamless, scalable, and robust applications across all platforms. Our expertise spans from creating engaging websites to building sophisticated mobile and desktop apps, integrating modern UI/UX designs with state-of-the-art functionalities to ensure an exceptional user experience.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2>Our Technologies</h2>
            <p>List and describe the key technologies and tools your team utilizes in development projects, such as React, Angular, Vue for front-end, Node.js, Python for back-end, Flutter, React Native for mobile apps, Docker for containerization, Kubernetes for orchestration, AWS, Azure for cloud services, and more.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2>IT Infrastructure Maintenance</h2>
            <p>Ensure the reliability and efficiency of your IT infrastructure with our comprehensive maintenance services. <br><br>From routine checks to emergency repairs, our team provides the support you need to keep your operations running smoothly.</p>
          </CardContent>
        </Card>
      </div>
    </AutoAdjust>
  </AppContent>
</div>

<style>  
  .text-container {
    padding-left: 15vw;
    padding-top: 15vh;
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
    padding-top: 25vh;
  }

  .stormtrooper {
    position: absolute;
    top: 5%;
    right: 0;
    width: 50%;
    height: 100
  }
</style>
