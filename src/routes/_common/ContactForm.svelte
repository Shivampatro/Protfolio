<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let email = '';
  let message = '';
  let status = '';

  async function handleSubmit() {
    status = 'Sending...';
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, message })
      });

      if (response.ok) {
        status = 'Message sent! I will get back to you soon.';
        email = '';
        message = '';
        setTimeout(() => dispatch('close'), 3000);
      } else {
        status = 'Something went wrong. Please try again later.';
      }
    } catch (error) {
      status = 'Error sending message.';
    }
  }
</script>

<div class="overlay" on:click={() => dispatch('close')}>
  <div class="modal" on:click|stopPropagation>
    <h2>Connect with me</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="field">
        <label for="email">Your Email</label>
        <input type="email" id="email" bind:value={email} required placeholder="email@example.com" />
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" bind:value={message} required placeholder="Hello! I'd like to reach out regarding..."></textarea>
      </div>
      <button type="submit" disabled={status === 'Sending...'}>Send Message</button>
      {#if status}
        <p class="status">{status}</p>
      {/if}
    </form>
    <button class="close-btn" on:click={() => dispatch('close')}>×</button>
  </div>
</div>

<style lang="scss">
  .overlay {
    @include fixed(0, 0);
    @include fullscreen;
    @include flex-center;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 1000;
  }

  .modal {
    @include mono;
    @include shadow;
    background: $sec;
    padding: 2rem;
    border-radius: 12px;
    width: 90%;
    max-width: 450px;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  h2 {
    margin-top: 0;
    color: $light;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .field {
    margin-bottom: 1rem;
    text-align: left;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #bbb;
    }

    input, textarea {
      width: 100%;
      padding: 0.8rem;
      border-radius: 6px;
      border: 1px solid #444;
      background: #222;
      color: $light;
      @include mono;

      &:focus {
        outline: none;
        border-color: $tri;
      }
    }

    textarea {
      height: 120px;
      resize: none;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    background: $tri;
    color: $light;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s, background 0.2s;

    &:hover {
      background: lighten($tri, 10%);
      transform: translateY(-2px);
    }

    &:disabled {
      background: #555;
      cursor: not-allowed;
    }
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    color: #bbb;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: $light;
    }
  }

  .status {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: $tri;
  }
</style>
