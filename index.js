const express = require("express");
const app = express();

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});

app.get("/", (req, res) => {
    res.send("Welcome to a basic express App");
  });
  
  // Mock APIs
  app.get("/countries", (req, res) => {
    res.json([
      { country_name: "Germany", rules:"https://www.bild.de/politik/inland/politik-inland/coronavirus-offizielle-regeln-das-gilt-ab-sofort-in-deutschland-69413434.bild.html"},
      { country_name: "Netherlands", rules: "https://www.government.nl/topics/coronavirus-covid-19/frequently-asked-questions-about-coronavirus-and-health" },
      { country_name: "USA", rules: "https://www.cdc.gov/coronavirus/2019-ncov/index.html" },
      { country_name: "United Kingdom", rules: "https://www.gov.uk/government/topical-events/coronavirus-covid-19-uk-government-response" },
      { country_name: "China", rules: "-" },
      { country_name: "Russia", rules: "-" },
      { country_name: "Italy", rules: "https://www.worldometers.info/coronavirus/country/italy/" },
      { country_name: "France", rules: "https://www.washingtonpost.com/world/2020/03/14/coronavirus-latest-news/" },
      { country_name: "Denmark", rules: "https://um.dk/en/news/newsdisplaypage/?newsID=73C819B1-D0AE-4219-BACD-95043E533D78" },
      { country_name: "India", rules: "-" },
      { country_name: "Poland", rules: "-" }
    ]);
  });
  

