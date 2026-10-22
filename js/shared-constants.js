// GenAI: steps follow the Exercise 6.1 brief; drafted with Claude Opus 5.5 and reviewed by me
const margin = { top: 40, right: 30, bottom: 60, left: 70 };
const width = 800;
const height = 400;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const barColor = "#7d6747";
const bodyBackgroundColor = "#faf3dc";

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

const binGenerator = d3.bin()
  .value(d => d.energyConsumption);
