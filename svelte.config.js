import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess({
    scss: {
      prependData: `@use "src/app.scss" as *;`
    }
  }),

  kit: {
    adapter: adapter()
  }
};

export default config;
