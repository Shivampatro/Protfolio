<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { getQuotes } from '$lib/utils.js';

  export let visible = false;
  const dispatch = createEventDispatcher();

  let inputVal = '';
  let output = [
    { text: 'SYSTEM INITIALIZED.', type: 'sys' },
    { text: 'Type "help" for a list of commands.', type: 'info' }
  ];
  let inputElement;

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      closeTerminal();
    } else if (e.key === 'Enter' && inputVal.trim() !== '') {
      processCommand(inputVal.trim());
      inputVal = '';
    }
  }

  function processCommand(cmd) {
    output = [...output, { text: `> ${cmd}`, type: 'cmd' }];
    
    const args = cmd.toLowerCase().split(' ');
    const command = args[0];

    setTimeout(() => {
      let response = '';
      if (command === 'help') {
        response = 'Available Commands:\n  whoami    - Identify User\n  contact   - Request communications channel\n  clear     - Clear terminal\n  quote     - Get a random quote';
      } else if (command === 'whoami') {
        response = 'GUEST_USER_09X. ACCESS LEVEL: VISITOR.';
      } else if (command === 'contact') {
        response = 'Transmission channel opened. (Close terminal to view form)';
        // Send a custom event up if needed
        dispatch('openContact');
      } else if (command === 'clear') {
        output = [];
        return;
      } else if (command === 'quote') {
        const quotes = getQuotes();
        response = quotes[Math.floor(Math.random() * quotes.length)];
      } else {
        response = `Command not found: ${command}. Type "help" for a list of commands.`;
      }

      output = [...output, { text: response, type: 'info' }];
      
      // Auto scroll
      setTimeout(() => {
        const termContent = document.querySelector('.terminal-content');
        if(termContent) termContent.scrollTop = termContent.scrollHeight;
      }, 50);

    }, 400); // Small artificial delay
  }

  function closeTerminal() {
    visible = false;
    dispatch('close');
  }

  $: if (visible && inputElement) {
    setTimeout(() => inputElement.focus(), 100);
  }
</script>

{#if visible}
  <div class="terminal-overlay" transition:fade={{duration: 200}}>
    <div class="terminal-window" transition:fly={{ y: 20, duration: 300 }}>
      <div class="terminal-header">
        <span class="title">CS-// TERMINAL ACCESS</span>
        <button on:click={closeTerminal}>X</button>
      </div>
      
      <div class="terminal-content">
        {#each output as line}
          <div class="line {line.type}">
            {#if line.type === 'info' || line.type === 'sys'}
              <pre>{line.text}</pre>
            {:else}
              {line.text}
            {/if}
          </div>
        {/each}
        
        <div class="input-line">
          <span class="prompt">&gt;</span>
          <input 
            bind:this={inputElement}
            bind:value={inputVal}
            on:keydown={handleKeydown}
            type="text" 
            autocomplete="off" 
            spellcheck="false" 
          />
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .terminal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(5px);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .terminal-window {
    width: 600px;
    max-width: 90vw;
    height: 400px;
    background: rgba(10, 15, 20, 0.95);
    border: 1px solid #00f2ff;
    box-shadow: 0 0 20px rgba(0, 242, 255, 0.2), inset 0 0 10px rgba(0, 242, 255, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Source Code Pro', monospace;
  }

  .terminal-header {
    background: rgba(0, 242, 255, 0.1);
    border-bottom: 1px solid #00f2ff;
    padding: 8px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      color: #00f2ff;
      font-size: 0.8rem;
      letter-spacing: 2px;
    }

    button {
      background: transparent;
      border: none;
      color: #00f2ff;
      font-size: 1rem;
      cursor: pointer;
      &:hover { color: #ff00c1; }
    }
  }

  .terminal-content {
    padding: 15px;
    flex-grow: 1;
    overflow-y: auto;
    color: #4FB8E6;
    font-size: 0.9rem;
  }

  .line {
    margin-bottom: 5px;
    &.cmd { color: #00ffaa; }
    &.sys { color: #ff00c1; }
    pre { margin: 0; font-family: inherit; white-space: pre-wrap; }
  }

  .input-line {
    display: flex;
    margin-top: 10px;

    .prompt {
      color: #00ffaa;
      margin-right: 10px;
    }

    input {
      flex-grow: 1;
      background: transparent;
      border: none;
      color: #00ffaa;
      font-family: inherit;
      font-size: inherit;
      outline: none;
    }
  }
</style>
