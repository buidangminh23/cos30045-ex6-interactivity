// GenAI: steps follow the Exercise 6.2 brief; drafted with Claude Opus 5.5 and reviewed by me
const populateFilters = (data) => {
  d3.select("#filters_screen")
    .selectAll(".filter")
    .data(filters_screen)
    .join("button")
      .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
      .attr("type", "button")
      .text(d => d.label)
      .on("click", (e, d) => {
        console.log("DOM event", e);
        console.log("Attached datum", d);

        if (!d.isActive) {
          filters_screen.forEach(filter => {
            filter.isActive = d.id === filter.id ? true : false;
          });

          d3.selectAll("#filters_screen .filter")
            .classed("active", filter => filter.id === d.id ? true : false);

          updateHistogram(d.id, data);
        }
      });

  const updateHistogram = (filterId, data) => {
    const updatedData = filterId === "all"
      ? data
      : data.filter(tv => tv.screenTech === filterId);

    const updatedBins = binGenerator(updatedData);

    d3.selectAll("#histogram rect")
      .data(updatedBins)
      .transition()
        .duration(500)
        .ease(d3.easeCubicInOut)
        .attr("y", d => yScale(d.length))
        .attr("height", d => innerHeight - yScale(d.length));
  };
};
