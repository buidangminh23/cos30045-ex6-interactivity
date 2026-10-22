// GenAI: steps follow the Exercise 6.1 to 6.4 briefs; drafted with Claude Opus 5.5 and reviewed by me
const margin = { top: 40, right: 30, bottom: 60, left: 70 };
const width = 800;
const height = 400;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const barColor = "#7d6747";
const bodyBackgroundColor = "#faf3dc";

let innerChartS;

const tooltipWidth = 65;
const tooltipHeight = 32;

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();
const colorScale = d3.scaleOrdinal();

const binGenerator = d3.bin()
  .value(d => d.energyConsumption)
  .domain([0, 2800])
  .thresholds(d3.range(0, 2800, 200));

const filters_screen = [
  { id: "all", label: "All", isActive: true },
  { id: "LED", label: "LED", isActive: false },
  { id: "LCD", label: "LCD", isActive: false },
  { id: "OLED", label: "OLED", isActive: false }
];
