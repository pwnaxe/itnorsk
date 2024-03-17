<script>
  let email = '';
  let message = '';
  let error = '';

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const res = await fetch('contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (!res.ok) throw new Error('Błąd serwera');
      email = '';
      message = '';
      alert('Wiadomość wysłana!');
    } catch (error) {
      console.error(error);
    }
  }
</script>

<div class="contactform">
  <form on:submit={handleSubmit}>
    <input type="email" bind:value={email} required placeholder="Twój email" class="email-input">
    <textarea bind:value={message} required placeholder="Twoja wiadomość" class="message-textarea"></textarea>
    <button type="submit" class="submit-button">Wyślij</button>
    {#if error}
      <p class="error-message">{error}</p>
    {/if}
  </form>
</div>

<style>
  .contactform {
    padding: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .email-input, .message-textarea {
    width: 100%;
    padding: 0.5rem;
  }
  .message-textarea {
    height: 200px;
  }
  .submit-button {
    padding: 10px 20px;
    cursor: pointer;
  }
  .error-message {
    color: red;
  }
</style>