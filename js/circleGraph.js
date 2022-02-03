export const renderCircleGraph = (selector, data) => {
  const title = "Percentage of Search Opportunity";
  const color = d3.scaleOrdinal(d3.schemeTableau10);

  selector
    .append("text")
    .attr("font-weight", "bold")
    .attr("font-size", "1.5rem")
    .text(title);
  const parentCircle = selector
    .append("circle")
    .attr("cx", 200)
    .attr("cy", 160)
    .attr("r", 130)
    .attr("fill", "#fff")
    .attr("stroke", "#333")
    .attr("stroke-dasharray", "4")
    .attr("stroke-width", 2);
  const circles = selector
    .selectAll(".circle-data")
    .data(data.reverse())
    .enter()
    .append("circle")
    .attr("class", "circle-data")
    .attr("cx", 140)
    .attr("cy", 180)
    .attr("r", (d) => d.value * 5)
    .attr("fill", "#fff")
    .attr("stroke", (d) => color(d.value))
    .attr("stroke-width", 6);
};
