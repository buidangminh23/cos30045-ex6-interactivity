// GenAI: steps follow the Exercise 6.1 and 6.2 briefs; drafted with Claude Opus 5.5 and reviewed by me
d3.csv("data/W6_TVdata.csv", d => ({
  brand: d.brand,
  model: d.model,
  screenSize: +d.screenSize,
  screenTech: d.screenTech,
  energyConsumption: +d.energyConsumption,
  star: +d.star
})).then(data => {
  console.log(data);

  drawHistogram(data);
  populateFilters(data);
}).catch(error => {
  console.error("Error loading the CSV file:", error);
});
