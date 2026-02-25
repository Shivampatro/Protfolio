import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess({
    scss: {
      prependData: `@use './src/app.scss' as *;`
    }
  }),

  kit: {
    adapter: adapter()
  }
};

export default config;
