<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import { writable } from 'svelte/store';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
  import Card, { Content } from '@smui/card';

  let topAppBar: TopAppBar;
  const isDropdownOpen = writable(false);
  function toggleDropdown() {
    isDropdownOpen.update(o => !o);
  }
  function closeDropdown() {
    isDropdownOpen.set(false);
  }

  
  let isVisible = true;
  function closewin() {
    isVisible = false;
  }
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
  <div class="norskit-top">
    <div class="text-container">
      <h1>Odkryj przyszłość programowania z nami</h1>
      <p>Z nami programowanie to nie tylko kod, to realizacja wizji nowoczesnej technologii. Dlaczego warto nas wybrać?</p>
      <ul>
        <li><strong>Innowacyjne rozwiązania AI:</strong> Stawiamy na sztuczną inteligencję, by dostarczać rozwiązania wyprzedzające czas.</li>
        <li><strong>Efektywność kosztowa:</strong> Wysoka jakość w konkurencyjnej cenie. Dostajesz więcej, płacąc mniej.</li>
        <li><strong>Ekspresowa realizacja:</strong> Twoje projekty są dla nas priorytetem. Realizacja w rekordowym tempie bez utraty na jakości.</li>
      </ul>
      <p>Nie pozwól, by ograniczenia tradycyjnego programowania hamowały Twój rozwój. <strong>Z nami osiągniesz więcej</strong>.</p>
      <div class="button-container"> 
        <Button href="/prices" variant="raised" class="layout layout-priority">
          <Label>Poproś o wycenę</Label>
        </Button>
        <Button href="/projects" variant="raised" class="layout layout-priority">
          <Label>Nasze projekty</Label>
        </Button>      
      </div>
    </div>
    <div class="card-display" class:isHidden={!isVisible}>
      <Card>
        <Content>
          <h2>Przebudowa w toku!</h2>
          <p>Jesteśmy w trakcie aktualizacji naszej strony do Svelte,<br> aby zapewnić jeszcze szybsze i bardziej efektywne doświadczenie.<br> Odwiedź nas wkrótce, aby zobaczyć nowości!</p>
          <p>Masz pytania? <a href="mailto:biuro.norsk@gmail.com">Napisz do nas</a>.</p>
          <Button class="layout layout-priority" variant="raised" on:click={closewin}>
            <Label>Zamknij okno</Label>
          </Button>
        </Content>
      </Card>
    </div>
  </div>
  <Button href="/contact" class="buttoncontact">
    <Label>Skontaktuj się z nami!</Label>
  </Button>    
</AutoAdjust>
</div>

<style>
  .buttoncontact {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  
  .norskit-top {
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    height: 100vh;
}

  .text-container {
    max-width: 50vw;
    padding-left: 5vw;
  }
  .button-container {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 20px;
}

.card-display {
  display: flex;
  position: absolute;
  right: 0;
  color: black; 
}
.isHidden {
    display: none;
  }
</style>
