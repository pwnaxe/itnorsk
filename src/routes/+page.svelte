<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title as AppBarTitle,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
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
              <a href="/contact"><Text>Outsource</Text></a>
            </Item>
            <Item>
              <a href="/contact"><Text>Development</Text></a>
            </Item>
            <Item>
              <a href="/contact"><Text>Our Technologies</Text></a>
            </Item>
            <Item>
              <a href="/contact"><Text>Support</Text></a>
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
      <LayoutGrid>
        <Cell>
          <a href="/contact" class="cell-link">
            <div class="cellcard animate__bounceInUp">
              <h2>Outsource Developers</h2>
              <p>Explore cutting-edge technology with our team of expert developers available for hire. <br><br> From advanced software solutions to innovative IT projects, we provide the skilled workforce you need to bring your vision to life.</p>            
            </div>
          </a>
        </Cell>
        <Cell>
          <a href="/contact" class="cell-link">
            <div class="cellcard animate__bounceInUp">
              <h2>Web, Mobile, Desktop App Development</h2>
              <p>Develop seamless, scalable, and robust applications across all platforms. Our expertise spans from creating engaging websites to building sophisticated mobile and desktop apps, integrating modern UI/UX designs with state-of-the-art functionalities to ensure an exceptional user experience.</p>
            </div>
          </a>
        </Cell>
        <Cell>
          <a href="/contact" class="cell-link">
            <div class="cellcard animate__bounceInUp">
              <h2>Our Technologies</h2>
              <p>List and describe the key technologies and tools your team utilizes in development projects, such as React, Angular, Vue for front-end, Node.js, Python for back-end, Flutter, React Native for mobile apps, Docker for containerization, Kubernetes for orchestration, AWS, Azure for cloud services, and more.</p>
            </div>
          </a>
        </Cell>
        <Cell>
          <a href="/contact" class="cell-link">
            <div class="cellcard animate__bounceInUp">
              <h2>IT Infrastructure Maintenance</h2>
              <p>Ensure the reliability and efficiency of your IT infrastructure with our comprehensive maintenance services. <br><br>From routine checks to emergency repairs, our team provides the support you need to keep your operations running smoothly.</p>
            </div>
          </a>
        </Cell>
        <Cell>
          <a href="/contact" class="cell-link">
            <div class="cellcard animate__bounceInUp">
              <h2>Payment Wall</h2>
              <p>Fast and Secure payment wall to our clients. Pay for Our invoices with your favorite payment method. No added fees.</p>
            </div>
          </a>
        </Cell>
        <Cell>
          <a href="/contact" class="cell-link">
            <div class="cellcard animate__bounceInUp">
              <h2>Contact Us</h2>
              <p>Dont want to waste Your time anymore?<br> You had our curiosity, now You have our attention.</p>
            </div>
          </a>
        </Cell>
    </LayoutGrid>
    </AutoAdjust>
</div>

<style>  
 .text-container {
  width: 80vw;
  text-align: center;
  padding-top: 10vh;
  display: block;
  margin: auto;
}

.text-container h1 {
  font-size: 4rem;
  margin: 0;
}


.cellcard {
  padding: 1vh;
  margin: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.6);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
}

.cell-link {
  text-decoration: none;
  color: inherit;
}

.cellcard:hover {
  box-shadow: 0 8px 14px rgba(0,0,0,0.9);
}

@media (max-width: 600px) {
  .cellcard {
    width: 100%;
    margin: 10px 0;
  }
}

.animate__bounceInUp {
  animation-duration: 1s;
}
</style>
