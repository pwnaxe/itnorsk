<script lang="ts">
  import Button, { Label } from '@smui/button';
  export let className = "";
  import Card, { Content } from '@smui/card';
  import { goto } from '$app/navigation';
  function navigateToProjects() {
    goto('../projects');
  }
  function navigateToContact() {
    goto('../contact');
  }
</script>

<style>
  .norskit-top {
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    height: 100vh;
    background: linear-gradient(-45deg, #295270, #295270, #524175, #524175);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
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
}
</style>

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
      <Button class="{className}" variant="raised" on:click={navigateToContact}>
        <Label>Poproś o wycenę</Label>
      </Button>
      <Button class="{className}" variant="raised" on:click={navigateToProjects}>
        <Label>Nasze projekty</Label>
      </Button>      
    </div>
  </div>
  <div class="card-display">
    <Card>
      <Content>
        <h2>Przebudowa w toku!</h2>
        <p>Jesteśmy w trakcie aktualizacji naszej strony do Svelte,<br> aby zapewnić jeszcze szybsze i bardziej efektywne doświadczenie.<br> Odwiedź nas wkrótce, aby zobaczyć nowości!</p>
        <p>Masz pytania? <a href="mailto:biuro.norsk@gmail.com">Napisz do nas</a>.</p>
      </Content>
    </Card>
  </div>
</div>