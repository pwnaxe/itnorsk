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

<TopAppBar class=navmenu bind:this={topAppBar} variant="short">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>LETS IT IT NORSK</Title>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
  <div class="top"></div>
  <div class="tech"></div>
  <div class="price"></div>
  <div class="contact"></div>
</AutoAdjust>


