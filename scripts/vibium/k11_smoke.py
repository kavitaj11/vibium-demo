from pathlib import Path
import os

from vibium import browser

url = os.getenv("K11_URL", "https://k11softwaresolutions.com")
artifacts_dir = Path("artifacts")
home_shot = artifacts_dir / "k11-home-python.png"

artifacts_dir.mkdir(parents=True, exist_ok=True)

bro = browser.start()

try:
    page = bro.page()
    page.go(url)

    png = page.screenshot()
    home_shot.write_bytes(png)

    print(f"[vibium-demo] Python smoke check completed for {url}")
    print(f"[vibium-demo] Screenshot saved: {home_shot}")
finally:
    bro.stop()
