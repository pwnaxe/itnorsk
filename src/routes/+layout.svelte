<script>
	import './styles.css';
	import github from '$lib/images/github.svg';
  import { onMount } from 'svelte';
	let theme;
	onMount(() => {
    theme = localStorage.getItem('theme') || 'default';
    applyTheme(theme);
  });

  function changeTheme(newTheme) {
    theme = newTheme;
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  }

  function applyTheme(theme) {
    const root = document.documentElement;

    switch (theme) {
      case 'dark':
        root.style.setProperty('--color-bg-0', '#333');
        root.style.setProperty('--color-text', '#fff');
        // ... set other dark theme properties
        break;
      case 'gtrr':
        root.style.setProperty('--color-bg-0', '#fff');
        root.style.setProperty('--color-text', '#333');
        // ... set other light theme properties
        break;
      // ... handle other themes
      default:
        // Reset to default styles or set a default theme
        root.style.removeProperty('--color-bg-0');
        root.style.removeProperty('--color-text');
        // ... reset other properties
    }
  }
</script>

<svelte:head>
	<title>ITNorsk</title>
	<meta name="description" content="Lets ITNorsk This" />
  <!-- Fonts -->
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
		<button on:click={() => applyTheme('default')}>Domyślny</button>
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
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.corner {
		display: flex;
		justify-content: flex-end;
		flex-direction: row;
		align-items: end;
		z-index: 10;
		width: 3em;
		height: 3em;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
</style>
