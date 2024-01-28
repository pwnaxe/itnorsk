<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';

  let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="short">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>LETS IT IT NORSK</Title>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
</AutoAdjust>

<style>
  .topAppBar {
    background-color: #ffffff; /* Zmień #yourColor na wybrany kolor */
  }

  .mdc-top-app-bar .mdc-top-app-bar__row {}
</style>
