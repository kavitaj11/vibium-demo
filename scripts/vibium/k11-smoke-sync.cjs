const fs = require("node:fs");
const path = require("node:path");
const { browser } = require("vibium/sync");

const url = process.env.K11_URL || "https://k11softwaresolutions.com";
const artifactsDir = "artifacts";
const homeShot = path.join(artifactsDir, "k11-home-sync.png");
const clickShot = path.join(artifactsDir, "k11-after-click-sync.png");

fs.mkdirSync(artifactsDir, { recursive: true });

const bro = browser.start();

try {
  const page = bro.page();
  page.go(url);

  fs.writeFileSync(homeShot, page.screenshot());

  const firstLink = page.find("a");
  if (firstLink) {
    firstLink.click();
    fs.writeFileSync(clickShot, page.screenshot());
    console.log(`[vibium-demo] Click step completed. Screenshot saved: ${clickShot}`);
  }

  console.log(`[vibium-demo] Sync smoke check completed for ${url}`);
  console.log(`[vibium-demo] Screenshot saved: ${homeShot}`);
} finally {
  bro.stop();
}
