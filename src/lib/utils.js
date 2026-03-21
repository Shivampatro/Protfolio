import quotes from "./quotes.json";

export function getQuotes() {
  // Create a copy to prevent mutating the imported JSON module state on every request
  const quoteList = [...quotes];
  
  for (let i = 0; i < 5; i++) {
    const x = Math.floor(Math.random() * quoteList.length);
    const y = Math.floor(Math.random() * quoteList.length);
    const tmp = quoteList[x];
    quoteList[x] = quoteList[y];
    quoteList[y] = tmp;
  } 
  
  const wait = "/".repeat(25);
  return quoteList.map(q => q + wait);
}
