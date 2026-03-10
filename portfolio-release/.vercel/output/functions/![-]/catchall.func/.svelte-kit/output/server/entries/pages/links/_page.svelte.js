import { c as create_ssr_component, f as add_attribute, v as validate_component, d as each, e as escape } from "../../../chunks/ssr.js";
const css$1 = {
  code: "svg.svelte-q3i2vm{height:35px;width:35px;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);cursor:pointer;position:fixed;right:20px;bottom:20px;z-index:10;border-radius:50%}",
  map: '{"version":3,"file":"backbutton.svelte","sources":["backbutton.svelte"],"sourcesContent":["<script>\\n  export let url;\\n<\/script>\\n\\n<a href={url}>\\n<svg fill=\\"#bbb\\" stroke=\\"#202020\\" viewBox=\\"0 0 300.003 300.003\\" >\\n<g>\\n\\t<g>\\n\\t\\t<path d=\\"M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150\\n\\t\\t\\tC300.002,67.159,232.839,0,150,0z M189.226,218.202c-2.736,2.734-6.321,4.101-9.902,4.101c-3.582,0-7.169-1.367-9.902-4.103\\n\\t\\t\\tl-56.295-56.292c-0.838-0.537-1.639-1.154-2.368-1.886c-2.796-2.799-4.145-6.479-4.077-10.144\\n\\t\\t\\tc-0.065-3.667,1.281-7.35,4.077-10.146c0.734-0.731,1.53-1.349,2.368-1.886l56.043-56.043c5.47-5.465,14.34-5.467,19.808,0.003\\n\\t\\t\\tc5.47,5.467,5.47,14.335,0,19.808l-48.265,48.265l48.514,48.516C194.695,203.864,194.695,212.732,189.226,218.202z\\"/>\\n\\t</g>\\n</g>\\n</svg>\\n</a>\\n\\n<style lang=\\"scss\\">svg {\\n  height: 35px;\\n  width: 35px;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);\\n  cursor: pointer;\\n  position: fixed;\\n  right: 20px;\\n  bottom: 20px;\\n  z-index: 10;\\n  border-radius: 50%;\\n}</style>\\n"],"names":[],"mappings":"AAkBmB,iBAAI,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC/C,MAAM,CAAE,OAAO,CACf,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,EAAE,CACX,aAAa,CAAE,GACjB"}'
};
const Backbutton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", url, 0)}><svg fill="#bbb" stroke="#202020" viewBox="0 0 300.003 300.003" class="svelte-q3i2vm"><g><g><path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150
			C300.002,67.159,232.839,0,150,0z M189.226,218.202c-2.736,2.734-6.321,4.101-9.902,4.101c-3.582,0-7.169-1.367-9.902-4.103
			l-56.295-56.292c-0.838-0.537-1.639-1.154-2.368-1.886c-2.796-2.799-4.145-6.479-4.077-10.144
			c-0.065-3.667,1.281-7.35,4.077-10.146c0.734-0.731,1.53-1.349,2.368-1.886l56.043-56.043c5.47-5.465,14.34-5.467,19.808,0.003
			c5.47,5.467,5.47,14.335,0,19.808l-48.265,48.265l48.514,48.516C194.695,203.864,194.695,212.732,189.226,218.202z"></path></g></g></svg> </a>`;
});
const css = {
  code: 'main.svelte-e6nid2{height:fit-content;width:100vw;position:absolute;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;min-height:95vh;background-color:#202020;color:#fff;padding-bottom:5vh}h1.svelte-e6nid2{border-bottom:1px solid rgba(4, 125, 255, 0.7960784314)}p.svelte-e6nid2{width:80vw;max-width:800px;text-align:center}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import BackButton from \\"../_common/backbutton.svelte\\";\\n  import load from \\"$lib/loader.js\\";\\n  import { onMount } from \\"svelte\\";\\n\\n  let headings = [], names = [], links = [];\\n  onMount(async () => {\\n    const arr = await load(\\"links.txt\\");\\n    const tmpNames = [], tmpLinks = [];\\n    for (let i = 0; i < arr[0].length; i++) {\\n      tmpNames[i] = [];\\n      tmpLinks[i] = [];\\n      for (let x = 0; x < arr[1][i].length; x += 2) {\\n        tmpNames[i].push(arr[1][i][x + 1]);\\n        tmpLinks[i].push(arr[1][i][x]);\\n      }\\n    }\\n    headings = arr[0];\\n    names = tmpNames;\\n    links = tmpLinks;\\n  })\\n<\/script>\\n\\n<BackButton url=\\"/\\"/>\\n<main>\\n  <h1>My Links</h1>\\n  <p>Explore some good corners of internet.</p>\\n\\n  {#each headings as heading,i}\\n    <p><strong>{heading}</strong></p>\\n    {#each links[i] as link,x}\\n      <a href=\\"{link}\\">{names[i][x]}</a>\\n    {/each}\\n  {/each}\\n</main>\\n\\n<style lang=\\"scss\\">main {\\n  height: fit-content;\\n  width: 100vw;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: \\"Source Code Pro\\", monospace;\\n  min-height: 95vh;\\n  background-color: #202020;\\n  color: #fff;\\n  padding-bottom: 5vh;\\n}\\n\\nh1 {\\n  border-bottom: 1px solid rgba(4, 125, 255, 0.7960784314);\\n}\\n\\np {\\n  width: 80vw;\\n  max-width: 800px;\\n  text-align: center;\\n}</style>\\n"],"names":[],"mappings":"AAoCmB,kBAAK,CACtB,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,iBAAiB,CAAC,CAAC,SAAS,CACzC,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,GAClB,CAEA,gBAAG,CACD,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CACzD,CAEA,eAAE,CACA,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headings = [], names = [], links = [];
  $$result.css.add(css);
  return `${validate_component(Backbutton, "BackButton").$$render($$result, { url: "/" }, {}, {})} <main class="svelte-e6nid2"><h1 class="svelte-e6nid2" data-svelte-h="svelte-1b4qqpr">My Links</h1> <p class="svelte-e6nid2" data-svelte-h="svelte-16qtls8">Explore some good corners of internet.</p> ${each(headings, (heading, i) => {
    return `<p class="svelte-e6nid2"><strong>${escape(heading)}</strong></p> ${each(links[i], (link, x) => {
      return `<a${add_attribute("href", link, 0)}>${escape(names[i][x])}</a>`;
    })}`;
  })} </main>`;
});
export {
  Page as default
};
