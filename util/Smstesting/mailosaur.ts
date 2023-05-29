const playwright = require('playwright');
const assert = require('chai').assert;
const Mailosaur = require('mailosaur');

(async () => {
  const apiKey = 'RqhtsCrHFLiTfr9K1NWENrB7OMWz2Uih';
  const mailosaur = new Mailosaur(apiKey);

  const serverId = 'bvoje7xw';
  const serverDomain = 'bvoje7xw.mailosaur.net';

  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
 
  // Make up an email address for this test
  const randomString = 'testemail'
  const testEmail = `${randomString}@${serverDomain}`;

})();