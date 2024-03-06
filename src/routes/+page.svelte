<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import { writable } from 'svelte/store';
  import IconButton from '@smui/icon-button';
  import Top from './components/top.svelte'

  let topAppBar: TopAppBar;
  const isDropdownOpen = writable(false);
  function toggleDropdown() {
    isDropdownOpen.update(o => !o);
  }
  function closeDropdown() {
    isDropdownOpen.set(false);
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
  <Top className="layout"/>
</AutoAdjust>
</div>

<style>
</style>
