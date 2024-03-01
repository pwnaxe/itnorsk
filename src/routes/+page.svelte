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
	import Contact from './components/contact.svelte'
	import Tech from './components/tech.svelte'
	import Price from './components/price.svelte'

  let topAppBar: TopAppBar;
  const isDropdownOpen = writable(false);
  function toggleDropdown() {
    isDropdownOpen.update(o => !o);
  }
  function closeDropdown() {
    isDropdownOpen.set(false);
  }
</script>

<TopAppBar class="navmenu" bind:this={topAppBar} variant="short">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Modern Solutions for Your Business with IT NORSK</Title>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
  <Top />
  <Tech />
  <Price />
  <Contact />
</AutoAdjust>


