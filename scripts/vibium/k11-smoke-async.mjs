import fs from "node:fs/promises";
import path from "node:path";
import { browser } from "vibium";

const url = process.env.K11_URL || "https://k11softwaresolutions.com";
const artifactsDir = "artifacts";
const homeShot = path.join(artifactsDir, "k11-home-async.png");

await fs.mkdir(artifactsDir, { recursive: true });

const bro = await browser.start();

try {
  const page = await bro.page();
  await page.go(url);

  const png = await page.screenshot();
  await fs.writeFile(homeShot, png);

  console.log(`[vibium-demo] Async smoke check completed for ${url}`);
  console.log(`[vibium-demo] Screenshot saved: ${homeShot}`);
} finally {
  await bro.stop();
}
