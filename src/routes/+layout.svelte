<script lang="ts">
	import { writable } from 'svelte/store';
	import './styles.css';
	import github from '$lib/images/github.svg';
  import { onMount } from 'svelte';
	import { mdiFormatColorFill } from '@mdi/js';
  import IconButton, { Icon } from '@smui/icon-button';
	import { init, addMessages, locale } from 'svelte-i18n';

  let isPaymentPopupOpen = writable(false);

  function openPaymentPopup() {
    isPaymentPopupOpen.set(true);
  }
	

  let theme;
  const themes = ['default', 'dark', 'green', 'blue'];

  onMount(() => {
    theme = localStorage.getItem('theme') || 'default';
    applyTheme(theme);
  });

  function changeTheme() {
    const currentThemeIndex = themes.indexOf(theme);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    theme = themes[nextThemeIndex];
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }


init({
	fallbackLocale: 'en',
	initialLocale: 'en',
});

function changeLocale(lang) {
	locale.set(lang);
	localStorage.setItem('locale', lang);
}
</script>

<svelte:head>
	<title>NorskCode</title>
	<meta name="description" content="Lets ITNorsk This" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
  />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

<div class="app">
	<div class="corner">
		<button on:click={() => changeLocale()}></button>
		<IconButton class="material-icons" on:click={changeTheme}>
			<Icon tag="svg" viewBox="0 0 24 24">
				<path fill="currentColor" d={mdiFormatColorFill} />
			</Icon>
		</IconButton>
		<a href="https://github.com/pwnaxe">
			<img src={github} alt="GitHub" />
		</a>
	</div>
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.corner {
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		z-index: 10;
		width: 3em;
		height: 3em;
		position: absolute;
		top: 3px;
		right: 2%;
	}

	.corner a {
		display: block;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
</style>
