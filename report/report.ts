const report = require("multiple-cucumber-html-reporter");

report.generate({
    //path-to-your-json-output
  jsonDir: "tests-result-report",
    //path-where-the-report-needs-to-be/
  reportPath: "./",
  reportname: "Playwright Automation Test Goarn-Project",
  pageTitle:"Goarn-Project",
  displayDuration:true,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "KOTHEESWARI-PC",
    platform: {
      name: "Windows",
      version: "10",
    },
  }, 
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Goarn-Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
      
    ],
  },
});