

window.addEventListener('slideLoaded', function onSlideLoaded() {
  const container = document.getElementById("d3-mindmap");
  if (container) {
    generateMindmap();
  }

  // Remove this event listener since it's no longer needed
  window.removeEventListener('slideLoaded', onSlideLoaded);
});

function generateMindmap() {
  const data = {
    nodes: [
      { id: "Central Idea", group: 1 },
      { id: "Concept A", group: 2 },
      { id: "Concept B", group: 2 },
      { id: "Concept C", group: 2 },
      { id: "Concept D", group: 2 },
      { id: "Concept E", group: 2 },
      { id: "Concept F", group: 2 },
      { id: "Detail A1", group: 3 },
      { id: "Detail A2", group: 3 },
      { id: "Detail B1", group: 3 },
      { id: "Detail C1", group: 3 },
      { id: "Detail C2", group: 3 },
      { id: "Detail C3", group: 3 },
      { id: "Detail C4", group: 3 },
      { id: "Detail C4-1", group: 4 },
      { id: "Detail C4-2", group: 4 },
      { id: "Detail C4-3", group: 4 },
    ],
    links: [
      { source: "Central Idea", target: "Concept A" },
      { source: "Central Idea", target: "Concept B" },
      { source: "Central Idea", target: "Concept C" },
      { source: "Central Idea", target: "Concept D" },
      { source: "Central Idea", target: "Concept E" },
      { source: "Central Idea", target: "Concept F" },
      { source: "Concept A", target: "Detail A1" },
      { source: "Concept A", target: "Detail A2" },
      { source: "Concept B", target: "Detail B1" },
      { source: "Concept C", target: "Detail C1" },
      { source: "Concept C", target: "Detail C2" },
      { source: "Concept C", target: "Detail C3" },
      { source: "Concept C", target: "Detail C4" },
      { source: "Detail C4", target: "Detail C4-1" },
      { source: "Detail C4", target: "Detail C4-2" },
      { source: "Detail C4", target: "Detail C4-3" },
      
    ],
  };

  const container = document.getElementById("d3-mindmap");
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  const svg = d3
    .select("#d3-mindmap")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const simulation = d3
    .forceSimulation(data.nodes)
    .force(
      "link",
      d3.forceLink(data.links).id((d) => d.id).distance(100)
    )
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2, height / 2));

  const link = svg
    .append("g")
    .attr("stroke", "#aaa")
    .selectAll("line")
    .data(data.links)
    .join("line")
    .attr("stroke-width", 2);

  const node = svg
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(data.nodes)
    .join("circle")
    .attr("r", 15)
    .attr("fill", (d) => color(d.group))
    .call(drag(simulation));

  const label = svg
    .append("g")
    .selectAll("text")
    .data(data.nodes)
    .join("text")
    .attr("dy", -20)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text((d) => d.id);

  simulation.on("tick", () => {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

    label.attr("x", (d) => d.x).attr("y", (d) => d.y);
  });

  function drag(simulation) {
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }
}