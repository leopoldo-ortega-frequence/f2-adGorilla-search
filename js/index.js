import { renderCircleGraph } from "./circleGraph.js";
import { renderbudgetGraphs } from "./budget.js";
// here we will try and use a different approach
const container = document.getElementById("content-chart");
const MARGIN = { LEFT: 50, RIGHT: 50, TOP: 50, BOTTOM: 50 };
const WIDTH = container.clientWidth - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = container.clientHeight - MARGIN.TOP - MARGIN.BOTTOM;

const svg = d3
  .select("#content-chart")
  .append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM);

// create a group element
const g = svg
  .append("g")
  .attr("transform", `translate(${MARGIN.LEFT},${MARGIN.TOP})`);
d3.json("./data/data.json").then((data) => {
  const circleGraphG = g.append("g");
  const budgetGraphG = g.append("g").attr("transform", `translate(60,380)`);
  // pass dat onto new graph
  renderCircleGraph(circleGraphG, data);
  renderbudgetGraphs(budgetGraphG, data);
});
