<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title as AppBarTitle,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Stormtrooper from './components/stormtrooper.svelte';
  import Menu from '@smui/menu';
  import List, { Item, Text } from '@smui/list';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import 'animate.css';

  let topAppBar: TopAppBar;
  let menu: Menu;
</script>

<div>
  <TopAppBar class="navmenu" bind:this={topAppBar} variant="short">
    <Row>
      <Section>
        <IconButton class="material-icons" on:click={() => menu.setOpen(true)}>menu</IconButton>
        <Menu bind:this={menu}>
          <List>
            <Item>
              <a href="/outsource"><Text>Outsource</Text></a>
            </Item>
            <Item>
              <a href="/development"><Text>Development</Text></a>
            </Item>
            <Item>
              <a href="/technologies"><Text>Our Technologies</Text></a>
            </Item>
            <Item>
              <a href="/support"><Text>Support</Text></a>
            </Item>
          </List>
        </Menu>
        <AppBarTitle>NorskCode</AppBarTitle>
      </Section>
    </Row>
  </TopAppBar>
    <AutoAdjust {topAppBar}>
      <div class="text-container">
        <h1>NORSK <br> HUB</h1>
      </div>
      <div class="stormtrooper">
        <Stormtrooper />
      </div>
      <LayoutGrid>
        <Cell>
          <div class="cellcard animate__headShake">
            <h2>Outsource Developers</h2>
            <p>Explore cutting-edge technology with our team of expert developers available for hire. <br><br> From advanced software solutions to innovative IT projects, we provide the skilled workforce you need to bring your vision to life.</p>
          </div>
        </Cell>
        <Cell>
          <div class="cellcard animate__headShake">
            <h2>Web, Mobile, Desktop App Development</h2>
            <p>Develop seamless, scalable, and robust applications across all platforms. Our expertise spans from creating engaging websites to building sophisticated mobile and desktop apps, integrating modern UI/UX designs with state-of-the-art functionalities to ensure an exceptional user experience.</p>
          </div>
        </Cell>
        <Cell>
          <div class="cellcard animate__headShake">
            <h2>Our Technologies</h2>
            <p>List and describe the key technologies and tools your team utilizes in development projects, such as React, Angular, Vue for front-end, Node.js, Python for back-end, Flutter, React Native for mobile apps, Docker for containerization, Kubernetes for orchestration, AWS, Azure for cloud services, and more.</p>
          </div>
        </Cell>
        <Cell>
          <div class="cellcard animate__headShake">
            <h2>IT Infrastructure Maintenance</h2>
            <p>Ensure the reliability and efficiency of your IT infrastructure with our comprehensive maintenance services. <br><br>From routine checks to emergency repairs, our team provides the support you need to keep your operations running smoothly.</p>
          </div>
        </Cell>
        <Cell>
          <div class="cellcard animate__headShake">
            <h2>Payment Wall</h2>
            <p>Fast and Secure payment wall to our clients. Pay for Our invoices with your favorite payment method. No added fees.</p>
          </div>
        </Cell>
    </LayoutGrid>
    </AutoAdjust>
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


.cellcard {
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.6);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .cellcard {
    width: 100%;
    margin: 10px 0;
  }
}

.stormtrooper {
  position: absolute;
  top: 5%;
  right: 0;
  width: 50%;
  height: 100%;
}

.animate__headShake {
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
</style>
