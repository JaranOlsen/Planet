// Initialize the mind map when the slide is loaded
window.addEventListener('slideLoaded', function onSlideLoaded() {
  const container = document.getElementById("mindmap-container");
  if (container) {
    generateMindmap();
  }
  window.removeEventListener('slideLoaded', onSlideLoaded);
});

function generateMindmap() {
  // Sample data for the mind map
  const data = {
    name: "Central Idea",
    children: [
      {
        name: "Concept A",
        children: [
          { name: "Detail A1" },
          { name: "Detail A2" },
        ],
      },
      {
        name: "Concept B",
        children: [
          { name: "Detail B1" },
        ],
      },
      {
        name: "Concept C",
        children: [
          { name: "Detail C1" },
          { name: "Detail C2" },
          { name: "Detail C3" },
          {
            name: "Detail C4",
            children: [
              { name: "Detail C4-1" ,
                children: [
                  { name: "Detail C4-1-1" },
                  { name: "Detail C4-1-2" },
                  { name: "Detail C4-1-3" },
                ],
              },
              { name: "Detail C4-2" },
              { name: "Detail C4-3" },
            ],
          },
        ],
      },
      {
        name: "Concept D",
        children: [
          { name: "Detail D1" },
          { name: "Detail D2" },
        ],
      },
      // Additional concepts can be added here
    ],
  };

  // Set up dimensions and SVG container
  const container = document.getElementById("mindmap-container");
  const width = container.clientWidth;
  const height = container.clientHeight;

  const svg = d3
    .select("#mindmap-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  let i = 0;
  const duration = 750;

  // Adjusted root node position
  const root = d3.hierarchy(data);
  root.x0 = height / 2;
  root.y0 = 100; // Move root node to the right by setting y0 to 100

  const treeLayout = d3.tree().size([height, width - 200]);

  // Assign colors to branches
  const branchColors = d3.scaleOrdinal()
    .domain(root.children.map((d, i) => i))
    .range(d3.schemeGreens[root.children.length > 3 ? root.children.length : 3]);

  update(root);

  function update(source) {
    const treeData = treeLayout(root);
    const nodes = treeData.descendants();
    const links = treeData.links();

    // Normalize for fixed-depth and shift nodes to the right
    nodes.forEach((d) => {
      d.y = d.depth * 180 + 100; // Shift all nodes by 100 units to the right
    });

    /** Nodes Section **/
    const node = svg.selectAll('g.node').data(nodes, (d) => d.id || (d.id = ++i));

    // Enter new nodes
    const nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', () => `translate(${source.y0},${source.x0})`)
      .on('click', click);

    // Add circles for the nodes
    nodeEnter
      .append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style('fill', (d) => getNodeColor(d));

    // Add labels for the nodes
    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('x', (d) => (d.children || d._children ? -13 : 13))
      .attr('text-anchor', (d) => (d.children || d._children ? 'end' : 'start'))
      .text((d) => d.data.name);

    // Transition nodes to their new position
    const nodeUpdate = nodeEnter.merge(node);
    nodeUpdate
      .transition()
      .duration(duration)
      .attr('transform', (d) => `translate(${d.y},${d.x})`);

    // Update the node attributes and style
    nodeUpdate
      .select('circle.node')
      .attr('r', 10)
      .style('fill', (d) => getNodeColor(d))
      .attr('cursor', 'pointer');

    // Remove any exiting nodes
    const nodeExit = node.exit()
      .transition()
      .duration(duration)
      .attr('transform', (d) => `translate(${source.y},${source.x})`) // Transition to the parent node's position
      .remove();

    nodeExit.select('circle').attr('r', 1e-6);
    nodeExit.select('text').style('fill-opacity', 1e-6);

    /** Links Section **/
    const link = svg.selectAll('path.link').data(links, (d) => d.target.id);

    // Enter new links
    const linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .attr('d', () => {
        const o = { x: source.x0, y: source.y0 };
        return diagonal(o, o);
      })
      .style('stroke', (d) => getNodeColor(d.target));

    // Transition links to their new position
    const linkUpdate = linkEnter.merge(link);
    linkUpdate
      .transition()
      .duration(duration)
      .attr('d', (d) => diagonal(d.source, d.target));

    // Remove any exiting links
    link.exit()
      .transition()
      .duration(duration)
      .attr('d', (d) => {
        const o = { x: source.x, y: source.y };
        return diagonal(o, o);
      })
      .remove();

    // Store the old positions for transition
    nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved path from parent to child nodes
    function diagonal(s, d) {
      return `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`;
    }

    // Toggle children on click
    function click(event, d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }
  }

  // Function to generate color based on node depth and branch
  function getNodeColor(d) {
    let color;
    if (d.depth === 0) {
      // Root node color
      color = d3.hsl(120, 0.6, 0.5); // Adjust as needed
    } else {
      // Get the top-level ancestor (first child of root)
      let ancestor = d;
      while (ancestor.depth > 1) {
        ancestor = ancestor.parent;
      }
      // Assign a hue based on the index of the top-level ancestor
      const branchIndex = root.children.indexOf(ancestor);
      const hue = 100 + (branchIndex * 40); // Different hues of green
      const saturation = 0.8;
      const lightness = 0.6 - d.depth * 0.12; // Decrease lightness with depth
      color = d3.hsl(hue % 360, saturation, lightness);
    }
    return color.toString();
  }
}