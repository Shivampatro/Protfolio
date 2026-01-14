import adapter from '@sveltejs/adapter-vercel';
import preprocess from "svelte-preprocess";

const config = {
  preprocess: preprocess({
    scss: {
      prependData: `@import './src/app.scss';`
    }
  }),
  kit: {
    adapter: adapter()
  }
};

export default config;
