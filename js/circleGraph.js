export const renderCircleGraph = (selector, data) => {
  const title = "Percentage of Search Opportunity";
  const color = d3.scaleOrdinal(d3.schemeTableau10);
  const xScale = d3.scaleLinear().domain([0, 100]).range([0, 400]).nice();

  const yScale = d3.scaleLinear().domain([0, 100]).range([0, 300]).nice();
  // The scale you use for bubble size
  const size = d3
    .scaleSqrt()
    .domain([1, 100]) // What's in the data, let's say it is percentage
    .range([1, 100]); // Size in pixel
  const xAxis = d3.axisBottom(xScale).tickSize(-300).tickPadding(15);

  const yAxis = d3.axisLeft(yScale).tickSize(-400).tickPadding(10);
  const yAxisG = selector.append("g").call(yAxis);
  const xAxisG = selector
    .append("g")
    .call(xAxis)
    .attr("transform", `translate(0,${300})`);

  selector
    .append("text")
    .attr("transform", "translate(0,-20)")
    .attr("font-weight", "bold")
    .attr("font-size", "1.5rem")
    .text(title);
  const parentCircle = selector
    .append("circle")
    .attr("cx", 200)
    .attr("cy", 160)
    .attr("r", 130)
    .attr("fill", "none")
    .attr("stroke", "#333")
    .attr("stroke-dasharray", "4")
    .attr("stroke-width", 2);

  // Add legend: circles
  const valuesToShow = [32, 25, 20];
  const xCircle = 200;
  const xLabel = 380;
  const yCircle = 220;
  const circles = selector
    .selectAll("legend")
    .data(valuesToShow)
    .join("circle")
    .attr("cx", xCircle)
    .attr("cy", (d) => yCircle - size(d))
    .attr("r", (d) => size(d))
    .style("fill", "#fff")
    .attr("stroke", (d) => color(d))
    .attr("stroke-width", 5);
  circles.attr("transform", "rotate(15)");
};
