const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 1500, height: 700 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });
  await page.screenshot({ path: "beermover.png" });
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 700, height: 1500 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });
  await page.screenshot({ path: "beermoverresponsive.png" });
  await browser.close();
})();
