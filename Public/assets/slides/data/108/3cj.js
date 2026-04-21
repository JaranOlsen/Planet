(function() {
  window.addEventListener('slideLoaded', function onSlideLoaded() {
      const container = document.getElementById("d3-quadrant-chart");
      if (container) {
        generateQuadrantChart();
      }
    
      // Remove this event listener since it's no longer needed
      window.removeEventListener('slideLoaded', onSlideLoaded);
    });
    
  function generateQuadrantChart() {
    // Set up dimensions and margins
    const container = document.getElementById("d3-quadrant-chart");
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const margin = { top: 80, right: 80, bottom: 80, left: 80 };
  
    const svg = d3
      .select("#d3-quadrant-chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
  
    const chartGroup = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
  
    // Define scales
    const xScale = d3.scaleLinear().domain([-1, 1]).range([0, chartWidth]);
    const yScale = d3.scaleLinear().domain([-1, 1]).range([chartHeight, 0]);
  
    // Add quadrants
    const quadWidth = chartWidth / 2;
    const quadHeight = chartHeight / 2;
  
    const quadrantData = [
      { x: 0, y: quadHeight, color: "#00aaff" }, // Top-left (Deep & Narrow)
      { x: quadWidth, y: quadHeight, color: "#ffaa00" }, // Top-right (Deep & Wide)
      { x: 0, y: 0, color: "#aa00ff" }, // Bottom-left (Shallow & Narrow)
      { x: quadWidth, y: 0, color: "#ff00aa" }, // Bottom-right (Shallow & Wide)
    ];
  
    chartGroup
      .selectAll(".quadrant")
      .data(quadrantData)
      .enter()
      .append("rect")
      .attr("class", "quadrant")
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("width", quadWidth)
      .attr("height", quadHeight)
      .attr("fill", d => d.color)
      .attr("opacity", 0.2);
  
    // Add axes
    // X Axis
    chartGroup
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0,${chartHeight / 2})`)
      .call(d3.axisBottom(xScale).ticks(0).tickSize(0));
  
    // Y Axis
    chartGroup
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(${chartWidth / 2},0)`)
      .call(d3.axisLeft(yScale).ticks(0).tickSize(0));
  
    // Remove axis lines and ticks
    chartGroup.selectAll(".axis path").attr("stroke", "#fff");
    chartGroup.selectAll(".axis .tick line").attr("display", "none");
  
    // Add labels for axes
    // X-Axis Labels
    chartGroup
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", chartWidth - 10)
      .attr("y", chartHeight / 2 - 15)
      .attr("fill", "#fff")
      .style("font-size", "24px")
      .text("Wide Attention");
  
    chartGroup
      .append("text")
      .attr("text-anchor", "start")
      .attr("x", 10)
      .attr("y", chartHeight / 2 - 15)
      .attr("fill", "#fff")
      .style("font-size", "24px")
      .text("Narrow Attention");
  
    // Y-Axis Labels
    // Deep Concentration Label (Top)
    chartGroup
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", -margin.left / 2)
      .attr("y", chartHeight / 4)
      .attr("transform", `rotate(-90, ${-margin.left / 2}, ${chartHeight / 4})`)
      .attr("fill", "#fff")
      .style("font-size", "24px")
      .text("Deep Concentration");
  
    // Shallow Concentration Label (Bottom)
    chartGroup
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", -margin.left / 2)
      .attr("y", (3 * chartHeight) / 4)
      .attr("transform", `rotate(-90, ${-margin.left / 2}, ${(3 * chartHeight) / 4})`)
      .attr("fill", "#fff")
      .style("font-size", "24px")
      .text("Shallow Concentration");
  
    // Define the labels for each quadrant
    const quadrants = [
      {
        x: xScale(-0.5),
        y: yScale(0.5),
        text: "Samādhi\n(Deep & Narrow)",
      },
      {
        x: xScale(0.5),
        y: yScale(0.5),
        text: "Open Awareness\n(Deep & Wide)",
      },
      {
        x: xScale(-0.5),
        y: yScale(-0.5),
        text: "Focused Distraction\n(Shallow & Narrow)",
      },
      {
        x: xScale(0.5),
        y: yScale(-0.5),
        text: "Scattered Mind\n(Shallow & Wide)",
      },
    ];
  
    // Add labels to quadrants
    chartGroup
      .selectAll(".quadrant-label")
      .data(quadrants)
      .enter()
      .append("text")
      .attr("class", "quadrant-label")
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("text-anchor", "middle")
      .attr("fill", "#fff")
      .style("font-size", "30px")
      .text(d => d.text)
      .call(wrap, quadWidth - 20);
  
    // Function to wrap text within a given width
    function wrap(text, width) {
      text.each(function () {
        const text = d3.select(this);
        const words = text.text().split("\n").reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 1.1; // ems
        const y = text.attr("y");
        const dy = 0;
        let tspan = text.text(null).append("tspan").attr("x", text.attr("x")).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width && line.length > 1) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", text.attr("x")).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          }
        }
      });
    }
  }
})();