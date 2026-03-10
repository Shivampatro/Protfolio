import { c as create_ssr_component, e as escape, v as validate_component, d as each, f as add_attribute, h as null_to_empty } from "../../chunks/ssr.js";
const quotes = [
  "Not all those who wander are lost.",
  "In the middle of difficulty lies opportunity.",
  "We are all stories in the end. Just make it a good one.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Even the darkest night will end and the sun will rise."
];
function getQuotes() {
  for (let i = 0; i < 5; i++) {
    const x = Math.floor(Math.random() * quotes.length);
    const y = Math.floor(Math.random() * quotes.length);
    const tmp = quotes[x];
    quotes[x] = quotes[y];
    quotes[y] = tmp;
  }
  const wait = "/".repeat(25);
  for (let i = 0; i < quotes.length; i++)
    quotes[i] += wait;
  return quotes;
}
const css$b = {
  code: "svg.svelte-djhb7z{height:35px;width:35px;fill:#fff}svg.svelte-djhb7z:hover{fill:rgba(4, 125, 255, 0.7960784314)}",
  map: '{"version":3,"file":"Github.svelte","sources":["Github.svelte"],"sourcesContent":["<svg\\r\\n  viewBox=\\"0 0 256 250\\"\\r\\n  version=\\"1.1\\"\\r\\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n  xmlns:xlink=\\"http://www.w3.org/1999/xlink\\"\\r\\n  preserveAspectRatio=\\"xMidYMid\\"\\r\\n  fill=\\"#bbb\\"\\r\\n>\\r\\n  <g>\\r\\n    <path\\r\\n      d=\\"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z\\"\\r\\n    ></path>\\r\\n  </g>\\r\\n</svg>\\r\\n<style lang=\\"scss\\">svg {\\n  height: 35px;\\n  width: 35px;\\n  fill: #fff;\\n}\\nsvg:hover {\\n  fill: rgba(4, 125, 255, 0.7960784314);\\n}</style>\\r\\n"],"names":[],"mappings":"AAcmB,iBAAI,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,IACR,CACA,iBAAG,MAAO,CACR,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CACtC"}'
};
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$b);
  return `<svg viewBox="0 0 256 250" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#bbb" class="svelte-djhb7z"><g><path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"></path></g></svg>`;
});
const css$a = {
  code: "svg.svelte-djhb7z{height:35px;width:35px;fill:#fff}svg.svelte-djhb7z:hover{fill:rgba(4, 125, 255, 0.7960784314)}",
  map: '{"version":3,"file":"Linkedin.svelte","sources":["Linkedin.svelte"],"sourcesContent":["<svg\\r\\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n  fill=\\"#bbb\\"\\r\\n  width=\\"24\\"\\r\\n  height=\\"24\\"\\r\\n  viewBox=\\"0 0 24 24\\"\\r\\n>\\r\\n  <path\\r\\n    d=\\"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z\\"\\r\\n  />\\r\\n</svg>\\r\\n<style lang=\\"scss\\">svg {\\n  height: 35px;\\n  width: 35px;\\n  fill: #fff;\\n}\\nsvg:hover {\\n  fill: rgba(4, 125, 255, 0.7960784314);\\n}</style>\\r\\n"],"names":[],"mappings":"AAWmB,iBAAI,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,IACR,CACA,iBAAG,MAAO,CACR,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CACtC"}'
};
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" width="24" height="24" viewBox="0 0 24 24" class="svelte-djhb7z"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>`;
});
const css$9 = {
  code: "svg.svelte-djhb7z{height:35px;width:35px;fill:#fff}svg.svelte-djhb7z:hover{fill:rgba(4, 125, 255, 0.7960784314)}",
  map: '{"version":3,"file":"Mail.svelte","sources":["Mail.svelte"],"sourcesContent":["<svg\\r\\n  version=\\"1.1\\"\\r\\n  id=\\"Layer_1\\"\\r\\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n  xmlns:xlink=\\"http://www.w3.org/1999/xlink\\"\\r\\n  x=\\"0px\\"\\r\\n  y=\\"0px\\"\\r\\n  viewBox=\\"0 0 330.001 330.001\\"\\r\\n  style=\\"enable-background: new 0 0 330.001 330.001\\"\\r\\n  xml:space=\\"preserve\\"\\r\\n  fill=\\"#bbb\\"\\r\\n>\\r\\n  <g id=\\"XMLID_348_\\">\\r\\n    <path\\r\\n      id=\\"XMLID_350_\\"\\r\\n      d=\\"M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602\\r\\n\\t\\tL0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z\\"\\r\\n    />\\r\\n    <polygon id=\\"XMLID_351_\\" points=\\"165.001,146.4 310.087,40.001 19.911,40 \\t\\" />\\r\\n  </g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n  <g></g>\\r\\n</svg>\\r\\n<style lang=\\"scss\\">svg {\\n  height: 35px;\\n  width: 35px;\\n  fill: #fff;\\n}\\nsvg:hover {\\n  fill: rgba(4, 125, 255, 0.7960784314);\\n}</style>\\r\\n"],"names":[],"mappings":"AAoCmB,iBAAI,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,IACR,CACA,iBAAG,MAAO,CACR,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CACtC"}'
};
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330.001 330.001" style="enable-background: new 0 0 330.001 330.001" xml:space="preserve" fill="#bbb" class="svelte-djhb7z"><g id="XMLID_348_"><path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"></path><polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"></polygon></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
});
const css$8 = {
  code: "svg.svelte-djhb7z{height:35px;width:35px;fill:#fff}svg.svelte-djhb7z:hover{fill:rgba(4, 125, 255, 0.7960784314)}",
  map: '{"version":3,"file":"Salesforce.svelte","sources":["Salesforce.svelte"],"sourcesContent":["<svg\\r\\n  version=\\"1.1\\"\\r\\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n  xmlns:xlink=\\"http://www.w3.org/1999/xlink\\"\\r\\n  viewBox=\\"0 0 24 24\\"\\r\\n  fill=\\"#bbb\\"\\r\\n>\\r\\n  <path\\r\\n    d=\\"M13.4,7.3c-1-1.6-2.7-2.6-4.6-2.6c-2.3,0-4.3,1.5-4.8,3.5c-0.1,0.2-0.2,0.3-0.4,0.3c-1.3,0-2.3,1-2.3,2.2 s1,2.2,2.3,2.2c0.2,0,0.3,0.1,0.4,0.3c0.5,2,2.5,3.5,4.8,3.5c0.2,0,0.4,0.1,0.5,0.3c1.2,1.2,2.7,1.8,4.4,1.8 c3.3,0,6.1-2.6,6.3-5.9c0-0.2,0.1-0.4,0.3-0.5c1.4-0.6,2.2-2,2.2-3.4c0-2.3-1.8-4.2-4.1-4.2C16.8,4.8,14.9,5.8,13.4,7.3z\\"\\r\\n  />\\r\\n</svg>\\r\\n\\r\\n<style lang=\\"scss\\">svg {\\n  height: 35px;\\n  width: 35px;\\n  fill: #fff;\\n}\\nsvg:hover {\\n  fill: rgba(4, 125, 255, 0.7960784314);\\n}</style>\\r\\n"],"names":[],"mappings":"AAYmB,iBAAI,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,IACR,CACA,iBAAG,MAAO,CACR,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CACtC"}'
};
const Salesforce = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="#bbb" class="svelte-djhb7z"><path d="M13.4,7.3c-1-1.6-2.7-2.6-4.6-2.6c-2.3,0-4.3,1.5-4.8,3.5c-0.1,0.2-0.2,0.3-0.4,0.3c-1.3,0-2.3,1-2.3,2.2 s1,2.2,2.3,2.2c0.2,0,0.3,0.1,0.4,0.3c0.5,2,2.5,3.5,4.8,3.5c0.2,0,0.4,0.1,0.5,0.3c1.2,1.2,2.7,1.8,4.4,1.8 c3.3,0,6.1-2.6,6.3-5.9c0-0.2,0.1-0.4,0.3-0.5c1.4-0.6,2.2-2,2.2-3.4c0-2.3-1.8-4.2-4.1-4.2C16.8,4.8,14.9,5.8,13.4,7.3z"></path></svg>`;
});
const css$7 = {
  code: "svg.svelte-djhb7z{height:35px;width:35px;fill:#fff}svg.svelte-djhb7z:hover{fill:rgba(4, 125, 255, 0.7960784314)}",
  map: '{"version":3,"file":"Resume.svelte","sources":["Resume.svelte"],"sourcesContent":["<svg\\r\\n  version=\\"1.1\\"\\r\\n  id=\\"Layer_1\\"\\r\\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n  xmlns:xlink=\\"http://www.w3.org/1999/xlink\\"\\r\\n  x=\\"0px\\"\\r\\n  y=\\"0px\\"\\r\\n  viewBox=\\"0 0 330 330\\"\\r\\n  style=\\"enable-background:new 0 0 330 330;\\"\\r\\n  xml:space=\\"preserve\\"\\r\\n  fill=\\"#bbb\\"\\r\\n>\\r\\n  <path\\r\\n    d=\\"M210,135v-90c0-8.284-6.716-15-15-15H45c-8.284,0-15,6.716-15,15v240c0,8.284,6.716,15,15,15h180c8.284,0,15-6.716,15-15V150\\r\\n\\tC240,141.716,233.284,135,225,135H210z M60,60h120v75h-75c-8.284,0-15-6.716-15-15V60z M210,270H60V150h120v120H210z\\"\\r\\n  />\\r\\n  <path\\r\\n    d=\\"M285,135h-15v-15c0-8.284-6.716-15-15-15s-15,6.716-15,15v15h-15c-8.284,0-15,6.716-15,15s6.716,15,15,15h15v15\\r\\n\\tc0,8.284,6.716,15,15,15s15-6.716,15-15v-15h15c8.284,0,15-6.716,15-15S293.284,135,285,135z\\"\\r\\n  />\\r\\n</svg>\\r\\n\\r\\n<style lang=\\"scss\\">svg {\\n  height: 35px;\\n  width: 35px;\\n  fill: #fff;\\n}\\nsvg:hover {\\n  fill: rgba(4, 125, 255, 0.7960784314);\\n}</style>\\r\\n"],"names":[],"mappings":"AAsBmB,iBAAI,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,IACR,CACA,iBAAG,MAAO,CACR,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CACtC"}'
};
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve" fill="#bbb" class="svelte-djhb7z"><path d="M210,135v-90c0-8.284-6.716-15-15-15H45c-8.284,0-15,6.716-15,15v240c0,8.284,6.716,15,15,15h180c8.284,0,15-6.716,15-15V150
	C240,141.716,233.284,135,225,135H210z M60,60h120v75h-75c-8.284,0-15-6.716-15-15V60z M210,270H60V150h120v120H210z"></path><path d="M285,135h-15v-15c0-8.284-6.716-15-15-15s-15,6.716-15,15v15h-15c-8.284,0-15,6.716-15,15s6.716,15,15,15h15v15
	c0,8.284,6.716,15,15,15s15-6.716,15-15v-15h15c8.284,0,15-6.716,15-15S293.284,135,285,135z"></path></svg>`;
});
const css$6 = {
  code: 'main.svelte-optg1h{height:100vh;width:100vw;position:fixed;top:0;left:0;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);font-family:"Source Code Pro", monospace;display:flex;flex-direction:column;justify-content:center;align-items:center;background-image:url("/layer.svg");background-size:cover;background-repeat:no-repeat;background-position:center;z-index:0;background-color:#202020;color:#fff}section.svelte-optg1h{display:grid;grid-template-columns:repeat(5, 1fr);grid-template-rows:1fr;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);align-items:center;text-align:center;border-radius:10px;width:90vw;height:60px;max-width:400px;background-color:#303030}img.svelte-optg1h{box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);aspect-ratio:1;max-width:200px;width:40vw;border-radius:10px}h1.svelte-optg1h{text-shadow:3px 5px #404040;font-size:xxx-large;text-align:center}p.svelte-optg1h{max-width:90vw;text-align:center}span.svelte-optg1h{border-right:6px solid #fff;animation:1000ms infinite svelte-optg1h-blink}@keyframes svelte-optg1h-blink{0%{border-color:#202020}20%{border-color:#fff}80%{border-color:#fff}100%{border-color:#202020}}',
  map: '{"version":3,"file":"Home.svelte","sources":["Home.svelte"],"sourcesContent":["<script>\\r\\n  import { getQuotes } from \\"$lib/utils.js\\";\\r\\n  import Codechef from \\"$lib/svgs/Codechef.svelte\\";\\r\\n  import Github from \\"$lib/svgs/Github.svelte\\";\\r\\n  import Linkedin from \\"$lib/svgs/Linkedin.svelte\\";\\r\\n  import Hackerrank from \\"$lib/svgs/Hackerrank.svelte\\";\\r\\n  import Mail from \\"$lib/svgs/Mail.svelte\\";\\r\\n  import Salesforce from \\"$lib/svgs/Salesforce.svelte\\";\\r\\n  import Resume from \\"$lib/svgs/Resume.svelte\\";\\r\\n  import ContactForm from \\"../_common/ContactForm.svelte\\";\\r\\n  import { onMount } from \\"svelte\\";\\r\\n\\r\\n  let text = \\"\\";\\r\\n  let arrIndex = 0,\\r\\n    index = 0,\\r\\n    done = false;\\r\\n  let showForm = false;\\r\\n  const strings = [\\"Hello Friend///////\\", ...getQuotes()];\\r\\n\\r\\n  function write(strs) {\\r\\n    if (done) {\\r\\n      text = text.slice(0, -1);\\r\\n      if (!text.length) {\\r\\n        done = false;\\r\\n        if (arrIndex == strs.length - 1) return true;\\r\\n      }\\r\\n      return false;\\r\\n    }\\r\\n\\r\\n    if (strs[index] != \\"/\\") text += strs[index];\\r\\n    index++;\\r\\n    if (index >= strs.length) {\\r\\n      index = 0;\\r\\n      done = true;\\r\\n      return true;\\r\\n    }\\r\\n    return false;\\r\\n  }\\r\\n\\r\\n  onMount(() => {\\r\\n    const id = setInterval(() => {\\r\\n      if (write(strings[arrIndex])) {\\r\\n        arrIndex++;\\r\\n        if (arrIndex >= strings.length) clearInterval(id);\\r\\n      }\\r\\n    }, 150);\\r\\n  });\\r\\n<\/script>\\r\\n\\r\\n<main>\\r\\n  <img src=\\"/logo.png\\" alt=\\"logo\\" />\\r\\n  <h1>Shivam Patro</h1>\\r\\n  <p>\\r\\n    > {text}\\r\\n    <span></span>\\r\\n  </p>\\r\\n  <section>\\r\\n    <a\\r\\n      aria-label=\\"Mail\\"\\r\\n      href=\\"#contact\\"\\r\\n      on:click|preventDefault={() => (showForm = true)}\\r\\n    >\\r\\n      <Mail />\\r\\n    </a>\\r\\n    <a\\r\\n      aria-label=\\"Github\\"\\r\\n      target=\\"_blank\\"\\r\\n      href=\\"https://github.com/Shivampatro/\\"\\r\\n    >\\r\\n      <Github />\\r\\n    </a>\\r\\n    <a\\r\\n      aria-label=\\"Linkedin\\"\\r\\n      target=\\"_blank\\"\\r\\n      href=\\"https://www.linkedin.com/in/shivam130/\\"\\r\\n    >\\r\\n      <Linkedin />\\r\\n    </a>\\r\\n    <a\\r\\n      aria-label=\\"Salesforce\\"\\r\\n      target=\\"_blank\\"\\r\\n      href=\\"https://www.salesforce.com/trailblazer/d87hu06bo764lw6a68\\"\\r\\n    >\\r\\n      <Salesforce />\\r\\n    </a>\\r\\n    <a\\r\\n      aria-label=\\"Resume\\"\\r\\n      href=\\"/resume.pdf\\"\\r\\n      download=\\"Shivam_Patro_Resume.pdf\\"\\r\\n    >\\r\\n      <Resume />\\r\\n    </a>\\r\\n  </section>\\r\\n\\r\\n  {#if showForm}\\r\\n    <ContactForm on:close={() => (showForm = false)} />\\r\\n  {/if}\\r\\n</main>\\r\\n\\r\\n<style lang=\\"scss\\">main {\\n  height: 100vh;\\n  width: 100vw;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);\\n  font-family: \\"Source Code Pro\\", monospace;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-image: url(\\"/layer.svg\\");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  z-index: 0;\\n  background-color: #202020;\\n  color: #fff;\\n}\\n\\nsection {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n  grid-template-rows: 1fr;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);\\n  align-items: center;\\n  text-align: center;\\n  border-radius: 10px;\\n  width: 90vw;\\n  height: 60px;\\n  max-width: 400px;\\n  background-color: #303030;\\n}\\n\\nimg {\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);\\n  aspect-ratio: 1;\\n  max-width: 200px;\\n  width: 40vw;\\n  border-radius: 10px;\\n}\\n\\nh1 {\\n  text-shadow: 3px 5px #404040;\\n  font-size: xxx-large;\\n  text-align: center;\\n}\\n\\np {\\n  max-width: 90vw;\\n  text-align: center;\\n}\\n\\nspan {\\n  border-right: 6px solid #fff;\\n  animation: 1000ms infinite blink;\\n}\\n\\n@keyframes blink {\\n  0% {\\n    border-color: #202020;\\n  }\\n  20% {\\n    border-color: #fff;\\n  }\\n  80% {\\n    border-color: #fff;\\n  }\\n  100% {\\n    border-color: #202020;\\n  }\\n}</style>\\r\\n"],"names":[],"mappings":"AAmGmB,kBAAK,CACtB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC/C,WAAW,CAAE,iBAAiB,CAAC,CAAC,SAAS,CACzC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,iBAAiB,CACnC,eAAe,CAAE,KAAK,CACtB,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IACT,CAEA,qBAAQ,CACN,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,kBAAkB,CAAE,GAAG,CACvB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC/C,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,KAAK,CAChB,gBAAgB,CAAE,OACpB,CAEA,iBAAI,CACF,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC/C,YAAY,CAAE,CAAC,CACf,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IACjB,CAEA,gBAAG,CACD,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,OAAO,CAC5B,SAAS,CAAE,SAAS,CACpB,UAAU,CAAE,MACd,CAEA,eAAE,CACA,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACd,CAEA,kBAAK,CACH,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC5B,SAAS,CAAE,MAAM,CAAC,QAAQ,CAAC,mBAC7B,CAEA,WAAW,mBAAM,CACf,EAAG,CACD,YAAY,CAAE,OAChB,CACA,GAAI,CACF,YAAY,CAAE,IAChB,CACA,GAAI,CACF,YAAY,CAAE,IAChB,CACA,IAAK,CACH,YAAY,CAAE,OAChB,CACF"}'
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text = "";
  ["Hello Friend///////", ...getQuotes()];
  $$result.css.add(css$6);
  return `<main class="svelte-optg1h"><img src="/logo.png" alt="logo" class="svelte-optg1h"> <h1 class="svelte-optg1h" data-svelte-h="svelte-zg0bl8">Shivam Patro</h1> <p class="svelte-optg1h">&gt; ${escape(text)} <span class="svelte-optg1h"></span></p> <section class="svelte-optg1h"><a aria-label="Mail" href="#contact">${validate_component(Mail, "Mail").$$render($$result, {}, {}, {})}</a> <a aria-label="Github" target="_blank" href="https://github.com/Shivampatro/">${validate_component(Github, "Github").$$render($$result, {}, {}, {})}</a> <a aria-label="Linkedin" target="_blank" href="https://www.linkedin.com/in/shivam130/">${validate_component(Linkedin, "Linkedin").$$render($$result, {}, {}, {})}</a> <a aria-label="Salesforce" target="_blank" href="https://www.salesforce.com/trailblazer/d87hu06bo764lw6a68">${validate_component(Salesforce, "Salesforce").$$render($$result, {}, {}, {})}</a> <a aria-label="Resume" href="/resume.pdf" download="Shivam_Patro_Resume.pdf">${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})}</a></section> ${``} </main>`;
});
const css$5 = {
  code: 'main.svelte-2ihvyr{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;padding-top:3vh;padding-bottom:3vh;border-top-left-radius:80px;border-top-right-radius:80px;background-color:#202020;color:#fff;z-index:2;pointer-events:auto}.para.svelte-2ihvyr{width:80vw;max-width:800px;text-align:center}',
  map: '{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<main>\\n  <h1>Hello there! 👋</h1>\\n  <p class=\\"para\\">\\n    I am {new Date().getFullYear() - 2007} year old full stack web developer and data \\n    analyst. I do competative programming as a passion.\\n  </p>\\n  <p class=\\"para\\">\\n    I love computers, drawing pencil arts , good humour, mythology, biriyani and my\\n    family and friends. I watch a lot of mythology movies and enjoy shows like cooking, Shark tank ,etc.\\n  </p>\\n  <p class=\\"para\\">\\n    I am also tough to describe, atleast i find it hard.\\n  </p>\\n  <p class=\\"para\\">\\n    I am a good <strong>Artist</strong> btw! checkout my\\n    <a href=\\"https://www.instagram.com/_its_me_yash_130/\\"> Instagram</a>.\\n  </p>\\n</main>\\n\\n<style lang=\\"scss\\">main {\\n  height: fit-content;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: \\"Source Code Pro\\", monospace;\\n  padding-top: 3vh;\\n  padding-bottom: 3vh;\\n  border-top-left-radius: 80px;\\n  border-top-right-radius: 80px;\\n  background-color: #202020;\\n  color: #fff;\\n  z-index: 2;\\n  pointer-events: auto;\\n}\\n\\n.para {\\n  width: 80vw;\\n  max-width: 800px;\\n  text-align: center;\\n}\\n\\ndiv {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-template-rows: 1fr;\\n  height: fit-content;\\n  width: 90vw;\\n  max-width: 500px;\\n  text-align: center;\\n}</style>\\n"],"names":[],"mappings":"AAmBmB,kBAAK,CACtB,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,iBAAiB,CAAC,CAAC,SAAS,CACzC,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,GAAG,CACnB,sBAAsB,CAAE,IAAI,CAC5B,uBAAuB,CAAE,IAAI,CAC7B,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAClB,CAEA,mBAAM,CACJ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MACd"}'
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<main class="svelte-2ihvyr"><h1 data-svelte-h="svelte-sf0jcj">Hello there! 👋</h1> <p class="para svelte-2ihvyr">I am ${escape((/* @__PURE__ */ new Date()).getFullYear() - 2007)} year old full stack web developer and data 
    analyst. I do competative programming as a passion.</p> <p class="para svelte-2ihvyr" data-svelte-h="svelte-1fiz6t8">I love computers, drawing pencil arts , good humour, mythology, biriyani and my
    family and friends. I watch a lot of mythology movies and enjoy shows like cooking, Shark tank ,etc.</p> <p class="para svelte-2ihvyr" data-svelte-h="svelte-15w8bu0">I am also tough to describe, atleast i find it hard.</p> <p class="para svelte-2ihvyr" data-svelte-h="svelte-jdxdbp">I am a good <strong>Artist</strong> btw! checkout my
    <a href="https://www.instagram.com/_its_me_yash_130/">Instagram</a>.</p> </main>`;
});
const css$4 = {
  code: 'main.svelte-66ws42.svelte-66ws42{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;background-color:#202020;z-index:2}.para.svelte-66ws42.svelte-66ws42{width:80vw;max-width:800px;text-align:center}section.svelte-66ws42.svelte-66ws42{height:fit-content;width:90vw;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;column-gap:20px;row-gap:20px;max-width:700px}.project-card.svelte-66ws42.svelte-66ws42{text-decoration:none;color:inherit;display:block;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);background-color:#303030;border-radius:10px;padding:15px;cursor:pointer;transition:transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;border:1px solid transparent}.project-card.svelte-66ws42.svelte-66ws42:hover{transform:translateY(-8px) scale(1.02);box-shadow:0px 12px 24px 0px rgba(0, 0, 0, 0.4);border-color:rgba(4, 125, 255, 0.7960784314)}.project-card.svelte-66ws42:hover .github-link.svelte-66ws42{opacity:1;color:rgba(4, 125, 255, 0.7960784314)}.content.svelte-66ws42 h2.svelte-66ws42{margin-top:0;font-size:1.25rem;color:#fff}.content.svelte-66ws42 p.svelte-66ws42{color:#aaa;font-size:0.9rem;line-height:1.4;margin-bottom:20px}.github-link.svelte-66ws42.svelte-66ws42{display:block;font-size:0.8rem;font-weight:bold;opacity:0.6;transition:opacity 0.3s ease, color 0.3s ease}@media screen and (max-width: 500px){section.svelte-66ws42.svelte-66ws42{grid-template-columns:1fr}}',
  map: `{"version":3,"file":"Projects.svelte","sources":["Projects.svelte"],"sourcesContent":["<script>\\n  import Pin from \\"./Pin.svelte\\";\\n  import load from \\"$lib/loader.js\\";\\n  import { onMount } from \\"svelte\\";\\n\\n  let titles = [],\\n    des = [];\\n  onMount(async () => {\\n    const arr = await load(\\"/projects.txt\\");\\n    titles = arr[0];\\n    des = arr[1];\\n  });\\n<\/script>\\n\\n<main>\\n  <h1>Some of my projects.</h1>\\n  <section>\\n    {#each titles as title, i}\\n      <a\\n        href=\\"https://github.com/Shivampatro/{title\\n          .toLowerCase()\\n          .replaceAll(' ', '-')}\\"\\n        target=\\"_blank\\"\\n        rel=\\"noopener noreferrer\\"\\n        class=\\"project-card\\"\\n      >\\n        <div class=\\"content\\">\\n          <h2>{title.replaceAll(/-|_/g, \\" \\")}</h2>\\n          <p>{des[i]}</p>\\n          <span class=\\"github-link\\">View on GitHub →</span>\\n        </div>\\n      </a>\\n    {/each}\\n  </section>\\n  <p class=\\"para\\">\\n    More on my\\n    <a href=\\"https://github.com/Shivampatro/\\">Github</a>.\\n  </p>\\n</main>\\n\\n<style lang=\\"scss\\">main {\\n  height: fit-content;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: \\"Source Code Pro\\", monospace;\\n  background-color: #202020;\\n  z-index: 2;\\n}\\n\\n.para {\\n  width: 80vw;\\n  max-width: 800px;\\n  text-align: center;\\n}\\n\\nsection {\\n  height: fit-content;\\n  width: 90vw;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr;\\n  column-gap: 20px;\\n  row-gap: 20px;\\n  max-width: 700px;\\n}\\n\\n.project-card {\\n  text-decoration: none;\\n  color: inherit;\\n  display: block;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);\\n  background-color: #303030;\\n  border-radius: 10px;\\n  padding: 15px;\\n  cursor: pointer;\\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;\\n  border: 1px solid transparent;\\n}\\n.project-card:hover {\\n  transform: translateY(-8px) scale(1.02);\\n  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.4);\\n  border-color: rgba(4, 125, 255, 0.7960784314);\\n}\\n.project-card:hover .github-link {\\n  opacity: 1;\\n  color: rgba(4, 125, 255, 0.7960784314);\\n}\\n\\n.content h2 {\\n  margin-top: 0;\\n  font-size: 1.25rem;\\n  color: #fff;\\n}\\n.content p {\\n  color: #aaa;\\n  font-size: 0.9rem;\\n  line-height: 1.4;\\n  margin-bottom: 20px;\\n}\\n\\n.github-link {\\n  display: block;\\n  font-size: 0.8rem;\\n  font-weight: bold;\\n  opacity: 0.6;\\n  transition: opacity 0.3s ease, color 0.3s ease;\\n}\\n\\n@media screen and (max-width: 500px) {\\n  section {\\n    grid-template-columns: 1fr;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAwCmB,gCAAK,CACtB,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,iBAAiB,CAAC,CAAC,SAAS,CACzC,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,CACX,CAEA,iCAAM,CACJ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MACd,CAEA,mCAAQ,CACN,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,kBAAkB,CAAE,GAAG,CACvB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,KACb,CAEA,yCAAc,CACZ,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC/C,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,YAAY,CAAC,IAAI,CAAC,IAAI,CAC7E,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WACpB,CACA,yCAAa,MAAO,CAClB,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,MAAM,IAAI,CAAC,CACvC,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAChD,YAAY,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CAC9C,CACA,2BAAa,MAAM,CAAC,0BAAa,CAC/B,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CACvC,CAEA,sBAAQ,CAAC,gBAAG,CACV,UAAU,CAAE,CAAC,CACb,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,IACT,CACA,sBAAQ,CAAC,eAAE,CACT,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,IACjB,CAEA,wCAAa,CACX,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,IAAI,CAAC,IAC5C,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,mCAAQ,CACN,qBAAqB,CAAE,GACzB,CACF"}`
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let titles = [], des = [];
  $$result.css.add(css$4);
  return `<main class="svelte-66ws42"><h1 data-svelte-h="svelte-1oc6t25">Some of my projects.</h1> <section class="svelte-66ws42">${each(titles, (title, i) => {
    return `<a href="${"https://github.com/Shivampatro/" + escape(title.toLowerCase().replaceAll(" ", "-"), true)}" target="_blank" rel="noopener noreferrer" class="project-card svelte-66ws42"><div class="content svelte-66ws42"><h2 class="svelte-66ws42">${escape(title.replaceAll(/-|_/g, " "))}</h2> <p class="svelte-66ws42">${escape(des[i])}</p> <span class="github-link svelte-66ws42" data-svelte-h="svelte-18vndro">View on GitHub →</span></div> </a>`;
  })}</section> <p class="para svelte-66ws42" data-svelte-h="svelte-179u55e">More on my
    <a href="https://github.com/Shivampatro/">Github</a>.</p> </main>`;
});
const css$3 = {
  code: 'main.svelte-zsikfo{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;background-color:#202020;z-index:2;color:#fff;padding-bottom:20px}@media screen and (max-width: 500px){}p.svelte-zsikfo{width:80vw;max-width:800px;text-align:center}',
  map: '{"version":3,"file":"Tech.svelte","sources":["Tech.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n  import load from \\"$lib/loader.js\\";\\n  const links = [\\n    \\"https://img.shields.io/badge/Salesforce-00A1E0?style=for-the-badge&logo=salesforce&logoColor=white\\",\\n    \\"https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black\\",\\n    \\"https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white\\",\\n    \\"https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Amazon_DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white\\",\\n    \\"https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black\\",\\n    \\"https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white\\",\\n    \\"https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white\\",\\n    \\"https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black\\",\\n    \\"https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white\\",\\n    \\"https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white\\",\\n    \\"https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=apache&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Apache_Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black\\",\\n    \\"https://img.shields.io/badge/Adobe_Photoshop-31A8FF?style=for-the-badge&logo=adobe-photoshop&logoColor=black\\",\\n    \\"https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white\\",\\n    \\"https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white\\",\\n    \\"https://img.shields.io/badge/Matplotlib-ffffff?style=for-the-badge&logo=matplotlib&logoColor=black\\",\\n    \\"https://img.shields.io/badge/NVIDIA-76B900?style=for-the-badge&logo=nvidia&logoColor=white\\",\\n  ];\\n<\/script>\\n\\n<main>\\n  <h1>Technologies i use,</h1>\\n  <p>\\n    I use technologies, depending on the work at hand, but some notable ones are\\n  </p>\\n  <p>\\n    {#each links as link}\\n      <img src={link} alt=\\"\\" />\\n    {/each}\\n  </p>\\n</main>\\n\\n<style lang=\\"scss\\">main {\\n  height: fit-content;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: \\"Source Code Pro\\", monospace;\\n  background-color: #202020;\\n  z-index: 2;\\n  color: #fff;\\n  padding-bottom: 20px;\\n}\\n\\nsection {\\n  height: fit-content;\\n  width: 90vw;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-template-rows: 1fr;\\n  max-width: 500px;\\n}\\n\\n@media screen and (max-width: 500px) {\\n  section {\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n  }\\n}\\nh2 {\\n  text-decoration: underline;\\n}\\n\\np {\\n  width: 80vw;\\n  max-width: 800px;\\n  text-align: center;\\n}\\n\\ndiv {\\n  text-align: center;\\n}</style>\\n"],"names":[],"mappings":"AA8CmB,kBAAK,CACtB,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,iBAAiB,CAAC,CAAC,SAAS,CACzC,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,IAClB,CAWA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAKrC,CAKA,eAAE,CACA,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MACd"}'
};
const Tech = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    "https://img.shields.io/badge/Salesforce-00A1E0?style=for-the-badge&logo=salesforce&logoColor=white",
    "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
    "https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
    "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
    "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/Amazon_DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white",
    "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
    "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
    "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
    "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
    "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    "https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white",
    "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
    "https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=apache&logoColor=white",
    "https://img.shields.io/badge/Apache_Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black",
    "https://img.shields.io/badge/Adobe_Photoshop-31A8FF?style=for-the-badge&logo=adobe-photoshop&logoColor=black",
    "https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white",
    "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white",
    "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
    "https://img.shields.io/badge/Matplotlib-ffffff?style=for-the-badge&logo=matplotlib&logoColor=black",
    "https://img.shields.io/badge/NVIDIA-76B900?style=for-the-badge&logo=nvidia&logoColor=white"
  ];
  $$result.css.add(css$3);
  return `<main class="svelte-zsikfo"><h1 data-svelte-h="svelte-1a2dbn8">Technologies i use,</h1> <p class="svelte-zsikfo" data-svelte-h="svelte-97vy5o">I use technologies, depending on the work at hand, but some notable ones are</p> <p class="svelte-zsikfo">${each(links, (link) => {
    return `<img${add_attribute("src", link, 0)} alt="">`;
  })}</p> </main>`;
});
const totalContent = [
  {
    month: " 10 March 2026",
    notes: [
      " started building a salesforce project"
    ]
  },
  {
    month: " 2 March 2026",
    notes: [
      "gained google cloud points"
    ]
  },
  {
    month: " 1 March 2026",
    notes: [
      "salesforce agentforce legend rank started"
    ]
  },
  {
    month: " 26 February 2026",
    notes: [
      "Gaining knowledge of Apex programming"
    ]
  },
  {
    month: " 23 February 2026",
    notes: [
      "Started learning Salesforce again "
    ]
  },
  {
    month: " 22 February 2026",
    notes: [
      "Day 2 starts of Hacknovation 2.O "
    ]
  },
  {
    month: " 21 February 2026",
    notes: [
      "Day 1 of Hacknovation 2.O "
    ]
  },
  {
    month: " 15 February 2026",
    notes: [
      "completed salesforce agentforce innovator rank"
    ],
    link: "https://www.linkedin.com/posts/shivam130_be-an-agentblazer-gain-ai-agentforce-skills-activity-7428477423769493504-ifrX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfD-G4BYwFil6-zcUIHo37yaA8nsx3ovHk"
  },
  {
    month: " 14 February 2026",
    notes: [
      "started preparing for cycle test-1"
    ]
  },
  {
    month: " 13 February 2026",
    notes: [
      "Registered in Hacknovation 2.O "
    ]
  },
  {
    month: "February 2026",
    notes: [
      "Started making new portfolio website "
    ]
  },
  {
    month: "February 2026",
    notes: [
      "Reached 16000 points in Salesforce"
    ],
    link: "https://www.salesforce.com/trailblazer/d87hu06bo764lw6a68"
  },
  {
    month: "January 2026",
    notes: [
      "Completed the champyon rank 2026 in Salesforce"
    ],
    link: "https://www.salesforce.com/trailblazer/d87hu06bo764lw6a68"
  },
  {
    month: "September 2025",
    notes: [
      "became a finalist in Agentic AI Hackathon"
    ],
    link: "https://hostwebs.site/aV8MP3"
  },
  {
    month: "October 2025",
    notes: [
      "got hands on oracle certificates with scoring a incane marks"
    ]
  },
  {
    month: "August 2025",
    notes: [
      "Learned more about cloud applications.",
      "Achived a champion rank and a ambasitor rank in SalesForce"
    ]
  },
  {
    month: "May 2025",
    notes: [
      "Got a golden opportunity to use AWS cloud services",
      "Got a internship at Habble Acadamy "
    ],
    link: "https://hostwebs.site/5iOvid"
  },
  {
    month: "Apri 2025",
    notes: [
      "2021-2025 batch farewell"
    ]
  },
  {
    month: "April 2025",
    notes: [
      "completed 2nd year"
    ]
  },
  {
    month: "January 2025",
    notes: [
      "Worked on Avyakt 4.0, Which got cancelled",
      "Started Computer Networks",
      "Began the schedule"
    ]
  },
  {
    month: "December 2024",
    notes: [
      {
        note: "Skipped Srujan and went home for DL,etc"
      }
    ]
  },
  {
    month: "November 2024",
    notes: [
      "Got my first NPTEL certificate"
    ]
  },
  {
    month: "October 2024",
    notes: [
      "Made a GUI for smart carrere guidence system"
    ],
    link: "https://hostwebs.site/qHfxk0"
  },
  {
    month: "September 2024",
    notes: [
      "First Smart India Hackathon",
      {
        note: "competed and made a dynamic project in 3 days ",
        link: "https://hostwebs.site/wwNOow"
      }
    ]
  },
  {
    month: "August 2024",
    notes: [
      "Achived a certificate from ISRO ",
      "AI/ML for Geodata Analysis"
    ]
  },
  {
    month: "May 2024",
    notes: [
      "Learned React",
      "Also done an Internship at collage ",
      "made a comprehensive python project"
    ],
    link: "https://hostwebs.site/wA9zaC"
  },
  {
    month: "March 2024",
    notes: [
      "learned many courses and gained many certificates"
    ]
  },
  {
    month: "February 1 - April 13 2024",
    notes: [
      "started a Internship at Yhills ",
      "worked in a team as a data analist"
    ],
    link: "https://hostwebs.site/tyYCO0"
  },
  {
    month: "January 30 2024",
    notes: [
      "Celebrated my 17th birthday with my friends"
    ]
  },
  {
    month: "November 2023",
    notes: [
      {
        note: "Won 3 Awards at Avyakt 3.0 CSE Dept Fest."
      }
    ]
  },
  {
    month: "October 2023",
    notes: [
      "Completed Cyber security workshop , GIET",
      "and also won the prize"
    ]
  },
  {
    month: "August 2023",
    notes: [
      "Joined GIETU, Gunupur"
    ]
  },
  {
    month: "June 2023",
    notes: [
      "Started with C programming"
    ]
  },
  {
    month: "April 2023",
    notes: [
      "Nepal Vacation"
    ]
  },
  {
    month: "March 2023",
    notes: [
      "Completed 12th Board",
      "Passed out from Sanskar International School"
    ]
  },
  {
    month: "February 2023",
    notes: [
      "Witnessed 12th Farewell "
    ]
  },
  {
    month: "January 2023",
    notes: [
      "Apeared jee mains"
    ]
  },
  {
    month: "September 2022",
    notes: [
      "Visited Raipur, Chhattisgarh."
    ]
  },
  {
    month: "March 2022",
    notes: [
      "Learned more about programming."
    ]
  },
  {
    month: "February 2022",
    notes: [
      "Introduced to Functional Programming."
    ]
  },
  {
    month: "August 2021",
    notes: [
      "My 10th Result. (70.2%)"
    ]
  },
  {
    month: "April 2021",
    notes: [
      "Learned python as a subject.",
      "Python Programming."
    ]
  },
  {
    month: "July 2016",
    notes: [
      "Joined Prasad Techno School, Rayagada."
    ]
  },
  {
    month: "June 2016",
    notes: [
      "Got a madle in maths olympiad"
    ]
  },
  {
    month: "January 2013",
    notes: [
      "Got My First Computer as a birthday gift."
    ]
  },
  {
    month: "January 2007",
    notes: [
      "Started Life."
    ]
  }
];
const css$2 = {
  code: "svg.svelte-1pwgh3p{fill:#fff;height:20px;width:20px}svg.svelte-1pwgh3p:hover{fill:rgba(4, 125, 255, 0.7960784314)}",
  map: '{"version":3,"file":"Link.svelte","sources":["Link.svelte"],"sourcesContent":["<svg version=\\"1.1\\" id=\\"Capa_1\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" \\r\\n\\t viewBox=\\"0 0 577.545 577.545\\"\\r\\n\\t xml:space=\\"preserve\\">\\r\\n<g>\\r\\n\\t<g>\\r\\n\\t\\t<path d=\\"M245.531,245.532c4.893-4.896,11.42-7.589,18.375-7.589s13.482,2.696,18.375,7.589l49.734,49.734\\r\\n\\t\\t\\tc1.723,1.72,4.058,2.689,6.49,2.689s4.771-0.967,6.49-2.689l49.733-49.734c1.724-1.72,2.69-4.058,2.69-6.49\\r\\n\\t\\t\\tc0-2.433-0.967-4.771-2.69-6.49l-49.733-49.734c-21.668-21.662-50.469-33.589-81.093-33.589s-59.425,11.928-81.093,33.586\\r\\n\\t\\t\\tL33.602,332.022C11.934,353.69,0,382.494,0,413.128c0,30.637,11.934,59.432,33.605,81.084l49.731,49.73\\r\\n\\t\\t\\tc21.65,21.668,50.447,33.603,81.081,33.603s59.438-11.935,81.108-33.603l84.083-84.082c2.705-2.705,3.448-6.803,1.869-10.285\\r\\n\\t\\t\\tc-1.496-3.295-4.776-5.386-8.356-5.386c-0.205,0-0.407,0.007-0.615,0.021c-2.959,0.199-5.958,0.297-8.917,0.297\\r\\n\\t\\t\\tc-23.354,0-46.322-6.208-66.417-17.956c-1.444-0.844-3.042-1.254-4.629-1.254c-2.375,0-4.725,0.921-6.494,2.689l-53.238,53.238\\r\\n\\t\\t\\tc-4.902,4.901-11.426,7.604-18.372,7.604c-6.949,0-13.479-2.699-18.381-7.604l-49.734-49.734\\r\\n\\t\\t\\tc-4.908-4.896-7.61-11.411-7.616-18.348c-0.003-6.953,2.699-13.489,7.616-18.406L245.531,245.532z\\"/>\\r\\n\\t\\t<path d=\\"M543.942,83.324L494.208,33.59C472.556,11.931,443.762,0,413.128,0s-59.438,11.928-81.105,33.587l-84.086,84.119\\r\\n\\t\\t\\tc-2.705,2.705-3.448,6.806-1.867,10.288c1.497,3.292,4.777,5.382,8.354,5.382c0.205,0,0.413-0.006,0.621-0.021\\r\\n\\t\\t\\tc2.987-0.202,6.013-0.303,9-0.303c23.4,0,46.316,6.206,66.274,17.947c1.45,0.854,3.057,1.267,4.65,1.267\\r\\n\\t\\t\\tc2.375,0,4.725-0.921,6.494-2.689l53.274-53.274c4.893-4.896,11.42-7.589,18.375-7.589s13.482,2.696,18.375,7.589l49.734,49.734\\r\\n\\t\\t\\tc10.123,10.135,10.123,26.634-0.003,36.775L332.017,332.014c-4.894,4.905-11.408,7.604-18.348,7.604\\r\\n\\t\\t\\tc-6.956,0-13.495-2.702-18.415-7.61l-49.723-49.725c-1.723-1.72-4.057-2.69-6.49-2.69c-2.433,0-4.771,0.967-6.49,2.69\\r\\n\\t\\t\\tl-49.734,49.734c-3.586,3.586-3.586,9.397,0,12.983l49.734,49.734c21.668,21.668,50.469,33.602,81.093,33.602\\r\\n\\t\\t\\tc30.625,0,59.426-11.934,81.094-33.602l149.205-149.206c21.668-21.658,33.603-50.462,33.603-81.102S565.61,104.983,543.942,83.324\\r\\n\\t\\t\\tz\\"/>\\r\\n\\t</g>\\r\\n</g>\\r\\n</svg>\\r\\n\\r\\n<style lang=\\"scss\\">svg {\\n  fill: #fff;\\n  height: 20px;\\n  width: 20px;\\n}\\nsvg:hover {\\n  fill: rgba(4, 125, 255, 0.7960784314);\\n}</style>\\r\\n"],"names":[],"mappings":"AA2BmB,kBAAI,CACrB,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACT,CACA,kBAAG,MAAO,CACR,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CACtC"}'
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 577.545 577.545" xml:space="preserve" class="svelte-1pwgh3p"><g><g><path d="M245.531,245.532c4.893-4.896,11.42-7.589,18.375-7.589s13.482,2.696,18.375,7.589l49.734,49.734
			c1.723,1.72,4.058,2.689,6.49,2.689s4.771-0.967,6.49-2.689l49.733-49.734c1.724-1.72,2.69-4.058,2.69-6.49
			c0-2.433-0.967-4.771-2.69-6.49l-49.733-49.734c-21.668-21.662-50.469-33.589-81.093-33.589s-59.425,11.928-81.093,33.586
			L33.602,332.022C11.934,353.69,0,382.494,0,413.128c0,30.637,11.934,59.432,33.605,81.084l49.731,49.73
			c21.65,21.668,50.447,33.603,81.081,33.603s59.438-11.935,81.108-33.603l84.083-84.082c2.705-2.705,3.448-6.803,1.869-10.285
			c-1.496-3.295-4.776-5.386-8.356-5.386c-0.205,0-0.407,0.007-0.615,0.021c-2.959,0.199-5.958,0.297-8.917,0.297
			c-23.354,0-46.322-6.208-66.417-17.956c-1.444-0.844-3.042-1.254-4.629-1.254c-2.375,0-4.725,0.921-6.494,2.689l-53.238,53.238
			c-4.902,4.901-11.426,7.604-18.372,7.604c-6.949,0-13.479-2.699-18.381-7.604l-49.734-49.734
			c-4.908-4.896-7.61-11.411-7.616-18.348c-0.003-6.953,2.699-13.489,7.616-18.406L245.531,245.532z"></path><path d="M543.942,83.324L494.208,33.59C472.556,11.931,443.762,0,413.128,0s-59.438,11.928-81.105,33.587l-84.086,84.119
			c-2.705,2.705-3.448,6.806-1.867,10.288c1.497,3.292,4.777,5.382,8.354,5.382c0.205,0,0.413-0.006,0.621-0.021
			c2.987-0.202,6.013-0.303,9-0.303c23.4,0,46.316,6.206,66.274,17.947c1.45,0.854,3.057,1.267,4.65,1.267
			c2.375,0,4.725-0.921,6.494-2.689l53.274-53.274c4.893-4.896,11.42-7.589,18.375-7.589s13.482,2.696,18.375,7.589l49.734,49.734
			c10.123,10.135,10.123,26.634-0.003,36.775L332.017,332.014c-4.894,4.905-11.408,7.604-18.348,7.604
			c-6.956,0-13.495-2.702-18.415-7.61l-49.723-49.725c-1.723-1.72-4.057-2.69-6.49-2.69c-2.433,0-4.771,0.967-6.49,2.69
			l-49.734,49.734c-3.586,3.586-3.586,9.397,0,12.983l49.734,49.734c21.668,21.668,50.469,33.602,81.093,33.602
			c30.625,0,59.426-11.934,81.094-33.602l149.205-149.206c21.668-21.658,33.603-50.462,33.603-81.102S565.61,104.983,543.942,83.324
			z"></path></g></g></svg>`;
});
const css$1 = {
  code: 'main.svelte-1i32ief{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;text-align:center;background-color:#202020;pointer-events:auto}section.svelte-1i32ief{height:fit-content;width:fit-content;background:linear-gradient(#404040, #404040) no-repeat center/1px 90%}.para.svelte-1i32ief{width:80vw;max-width:800px;text-align:center}.show-more.svelte-1i32ief{color:rgba(4, 125, 255, 0.7960784314);cursor:pointer}div.svelte-1i32ief{height:fit-content;width:40vw;position:relative}.left.svelte-1i32ief{text-align:left;left:25vw}.right.svelte-1i32ief{text-align:right;right:25vw}@media only screen and (max-width: 700px){section.svelte-1i32ief{background:none}.left.svelte-1i32ief,.right.svelte-1i32ief{text-align:center;left:0;right:0;width:80vw}}',
  map: '{"version":3,"file":"Journey.svelte","sources":["Journey.svelte"],"sourcesContent":["<script>\\n  import totalContent from \\"$lib/journey.json\\";\\n  import Link from \\"../../lib/svgs/Link.svelte\\";\\n\\n  let index = 5;\\n  let content = totalContent.slice(0, index);\\n  function showMore() {\\n    index += 4;\\n    if (index > totalContent.length) index = totalContent.length;\\n    content = totalContent.slice(0, index);\\n  }\\n  const isEven = (x) => x % 2 == 0;\\n<\/script>\\n\\n<main>\\n  <h1> What i have been up to? </h1>\\n  <section>\\n    {#each content as entry,i}\\n      <div class={isEven(i) ? \\"left\\" : \\"right\\"}>\\n        <h2>{entry.month}</h2>\\n        {#each entry.notes as line}\\n          {#if typeof line == \\"string\\"}\\n          <p>{line}</p>\\n          {:else}\\n          <p>\\n            {line.note}\\n            <a target=\\"_blank\\" href=\\"{line.link}\\">\\n              <Link />\\n            </a>\\n          </p>\\n          {/if}\\n        {/each}\\n      </div>\\n    {/each}\\n  </section>\\n  {#if index == totalContent.length}\\n  <p class=\\"para\\"> Sadly, i dont recall anything before that. </p>\\n  {:else}\\n  <p class=\\"show-more para\\" on:mousedown={showMore}> Show More </p>\\n  {/if}\\n</main>\\n\\n<style lang=\\"scss\\">main {\\n  height: fit-content;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: \\"Source Code Pro\\", monospace;\\n  text-align: center;\\n  background-color: #202020;\\n  pointer-events: auto;\\n}\\n\\nsection {\\n  height: fit-content;\\n  width: fit-content;\\n  background: linear-gradient(#404040, #404040) no-repeat center/1px 90%;\\n}\\n\\n.para {\\n  width: 80vw;\\n  max-width: 800px;\\n  text-align: center;\\n}\\n\\n.show-more {\\n  color: rgba(4, 125, 255, 0.7960784314);\\n  cursor: pointer;\\n}\\n\\ndiv {\\n  height: fit-content;\\n  width: 40vw;\\n  position: relative;\\n}\\n\\n.left {\\n  text-align: left;\\n  left: 25vw;\\n}\\n\\n.right {\\n  text-align: right;\\n  right: 25vw;\\n}\\n\\n@media only screen and (max-width: 700px) {\\n  section {\\n    background: none;\\n  }\\n  .left, .right {\\n    text-align: center;\\n    left: 0;\\n    right: 0;\\n    width: 80vw;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AA0CmB,mBAAK,CACtB,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,iBAAiB,CAAC,CAAC,SAAS,CACzC,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,OAAO,CACzB,cAAc,CAAE,IAClB,CAEA,sBAAQ,CACN,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,WAAW,CAClB,UAAU,CAAE,gBAAgB,OAAO,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CAAC,MAAM,CAAC,GAAG,CAAC,GACrE,CAEA,oBAAM,CACJ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MACd,CAEA,yBAAW,CACT,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,YAAY,CAAC,CACtC,MAAM,CAAE,OACV,CAEA,kBAAI,CACF,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QACZ,CAEA,oBAAM,CACJ,UAAU,CAAE,IAAI,CAChB,IAAI,CAAE,IACR,CAEA,qBAAO,CACL,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IACT,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACxC,sBAAQ,CACN,UAAU,CAAE,IACd,CACA,oBAAK,CAAE,qBAAO,CACZ,UAAU,CAAE,MAAM,CAClB,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,IACT,CACF"}'
};
const Journey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let index = 5;
  let content = totalContent.slice(0, index);
  const isEven = (x) => x % 2 == 0;
  $$result.css.add(css$1);
  return `<main class="svelte-1i32ief"><h1 data-svelte-h="svelte-61xhb2">What i have been up to?</h1> <section class="svelte-1i32ief">${each(content, (entry, i) => {
    return `<div class="${escape(null_to_empty(isEven(i) ? "left" : "right"), true) + " svelte-1i32ief"}"><h2>${escape(entry.month)}</h2> ${each(entry.notes, (line) => {
      return `${typeof line == "string" ? `<p>${escape(line)}</p>` : `<p>${escape(line.note)} <a target="_blank"${add_attribute("href", line.link, 0)}>${validate_component(Link, "Link").$$render($$result, {}, {}, {})}</a> </p>`}`;
    })} </div>`;
  })}</section> ${index == totalContent.length ? `<p class="para svelte-1i32ief" data-svelte-h="svelte-mobk99">Sadly, i dont recall anything before that.</p>` : `<p class="show-more para svelte-1i32ief" data-svelte-h="svelte-j1qt9f">Show More</p>`} </main>`;
});
const css = {
  code: 'main.svelte-ucpdhr{position:absolute;top:0;left:0;height:fit-content;width:100vw;display:flex;flex-direction:column;z-index:2;color:#fff;padding-top:100vh;pointer-events:none}main.svelte-ucpdhr>*{pointer-events:auto}footer.svelte-ucpdhr{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;text-align:center;color:#fff;background-color:#202020}a.svelte-ucpdhr{color:#fff}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import Home from \\"./_index/Home.svelte\\";\\r\\n  import About from \\"./_index/About.svelte\\";\\r\\n  import Projects from \\"./_index/Projects.svelte\\";\\r\\n  import Tech from \\"./_index/Tech.svelte\\";\\r\\n  import Journey from \\"./_index/Journey.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<Home />\\r\\n<main>\\r\\n  <About />\\r\\n  <Projects />\\r\\n  <Tech />\\r\\n  <Journey />\\r\\n  <footer>\\r\\n    <p>\\r\\n      made with ❤ and svelte.js by @Shivam Patro <br />\\r\\n      <a href=\\"https://github.com/Shivampatro/Protfolio\\"> code </a>\\r\\n      |\\r\\n      <a href=\\"https://kit.svelte.dev/\\"> svelte </a>\\r\\n      |\\r\\n      <a href=\\"https://en.wikipedia.org/wiki/Free_and_open-source_software\\"\\r\\n        >FOSS</a\\r\\n      >\\r\\n    </p>\\r\\n  </footer>\\r\\n</main>\\r\\n\\r\\n<style lang=\\"scss\\">main {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: fit-content;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  z-index: 2;\\n  color: #fff;\\n  padding-top: 100vh;\\n  pointer-events: none;\\n}\\nmain > :global(*) {\\n  pointer-events: auto;\\n}\\n\\nfooter {\\n  height: fit-content;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: \\"Source Code Pro\\", monospace;\\n  text-align: center;\\n  color: #fff;\\n  background-color: #202020;\\n}\\n\\na {\\n  color: #fff;\\n}</style>\\r\\n"],"names":[],"mappings":"AA4BmB,kBAAK,CACtB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,KAAK,CAClB,cAAc,CAAE,IAClB,CACA,kBAAI,CAAW,CAAG,CAChB,cAAc,CAAE,IAClB,CAEA,oBAAO,CACL,MAAM,CAAE,WAAW,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,iBAAiB,CAAC,CAAC,SAAS,CACzC,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,OACpB,CAEA,eAAE,CACA,KAAK,CAAE,IACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})} <main class="svelte-ucpdhr">${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Tech, "Tech").$$render($$result, {}, {}, {})} ${validate_component(Journey, "Journey").$$render($$result, {}, {}, {})} <footer class="svelte-ucpdhr" data-svelte-h="svelte-v4g4hq"><p>made with ❤ and svelte.js by @Shivam Patro <br> <a href="https://github.com/Shivampatro/Protfolio" class="svelte-ucpdhr">code</a>
      |
      <a href="https://kit.svelte.dev/" class="svelte-ucpdhr">svelte</a>
      |
      <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software" class="svelte-ucpdhr">FOSS</a></p></footer> </main>`;
});
export {
  Page as default
};
