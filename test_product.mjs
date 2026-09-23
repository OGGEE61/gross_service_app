import * as cheerio from 'cheerio';

async function testPage() {
  const res = await fetch('https://gross-zerkleinerer.de/zerkleinerer/gaz-600/');
  const html = await res.text();
  const $ = cheerio.load(html);

  console.log('Images containing "see_through" or "xray" or similar transparent imagery:');
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    const srcset = $(el).attr('srcset');
    if (src && (src.includes('see') || src.includes('xray') || src.includes('trans'))) {
      console.log('SRC:', src);
      if (srcset) console.log('SRCSET:', srcset);
    }
  });

  // Also look for standard images just in case
  console.log('\nAll images starting with GROSS:');
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    if (src && src.includes('GROSS')) {
      console.log(src);
    }
  });
}

testPage().catch(console.error);
