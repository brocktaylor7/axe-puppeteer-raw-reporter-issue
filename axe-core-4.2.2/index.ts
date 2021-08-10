import { AxePuppeteer } from "@axe-core/puppeteer";
import * as axe from "axe-core";
import * as Puppeteer from "puppeteer";

const axeVersion: string = axe.version;
const axeSource: string = axe.source;
const axeReporters: axe.ReporterVersion[] = ["v1", "v2", "raw"];
const testUrl = "https://www.w3.org/WAI/demos/bad/before/home.html";

async function newTestPage(
  browser: Puppeteer.Browser,
  url: string
): Promise<Puppeteer.Page> {
  const page = await browser.newPage();
  await page.setBypassCSP(true);
  await page.goto(url);
  return page;
}

async function runAxe() {
  const browser = await Puppeteer.launch();
  for (const reporter of axeReporters) {
    const page = await newTestPage(browser, testUrl);
    const axeOptions: axe.RunOptions = {
      xpath: true,
      reporter: reporter,
    };
    console.log(reporter);
    const axeResult = await new AxePuppeteer(page, axeSource)
      .options(axeOptions)
      .analyze();
    console.log(axeResult);
  }
  await browser.close();
}

runAxe();
