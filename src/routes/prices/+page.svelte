<script lang="ts">
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';
  import Icon from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text';

  let name = '';
  let email = '';
  let message = '';
  let focused = false;
  let dirty = false;
  let invalid = false;

  $: disabled = !name || !email || !message || invalid;

  async function handleSubmit() {
    if (disabled) return;

    const response = await fetch('/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Wiadomość została wysłana.');
      name = '';
      email = '';
      message = '';
    } else {
      alert('Nie udało się wysłać wiadomości.');
    }
  }
</script>

<div class="margins">
  <Textfield bind:value={name} label="Imię" />
  <Textfield
    type="email"
    bind:value={email}
    label="Email"
    invalid={invalid}
    on:invalid={() => (invalid = true)}
    on:valid={() => (invalid = false)}
    helper="To nie jest prawidłowy adres e-mail."
  />
  <Textfield bind:value={message} label="Wiadomość" textarea />
  
  <Button on:click={handleSubmit} disabled={disabled}>
    Wyślij
  </Button>
</div>
