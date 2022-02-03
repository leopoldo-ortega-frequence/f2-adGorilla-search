export const renderbudgetGraphs = (selector, data) => {
  const color = d3.scaleOrdinal(d3.schemeTableau10);
  const radius = 50;

  data.forEach((d, i) => {
    const circleG = selector
      .append("g")
      .attr("transform", `translate(${i * 170}, 0)`);

    circleG
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .text(`${d.value}%`);

    circleG
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-weight", "bold")
      .attr("transform", "translate(0,80)")
      .text(`${d.name}`);
    circleG
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "translate(0,100)")
      .text(`CLICKS/MONTH: ${d.clicks}`);

    const values = [];
    values.push(d.value);
    values.push(100 - d.value);
    // Generate the pie
    var pie = d3.pie();

    // Generate the arcs
    var arc = d3.arc().innerRadius(36).outerRadius(radius);

    //Generate groups
    var arcs = circleG
      .selectAll("arc")
      .data(pie(values))
      .enter()
      .append("g")
      .attr("class", "arc");

    //Draw arc paths
    arcs
      .append("path")
      .attr("fill", (d, i) => (d.value < 50 ? color(d.value) : "#dbdbdb"))
      .attr("d", arc)

      .attr("stroke-width", 6);
  });
};
