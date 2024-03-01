<script>
  import Card, {PrimaryAction} from '@smui/card';
  let expanded = false;

  function toggle() {
    expanded = !expanded;
  }
</script>

<div class:expanded={expanded} on:mouseenter="{toggle}" on:mouseleave="{toggle}">
  <Card>
    <PrimaryAction>
      <div class="content">
        {#if expanded}
          <div class="details">
            Szczegółowe informacje na temat technologii...
          </div>
        {:else}
          <div class="summary">
            Nazwa technologii
          </div>
        {/if}
      </div>
    </PrimaryAction>
  </Card>
</div>

<style>
  div.expanded {
    width: 300px; /* Szerokość po rozszerzeniu */
  }
  div:not(.expanded) {
    width: 100px; /* Domyślna szerokość */
  }
  .content {
    padding: 16px;
  }
  /* Dodaj więcej stylów według potrzeb */
</style>
