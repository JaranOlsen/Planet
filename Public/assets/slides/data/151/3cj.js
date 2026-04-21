(function() {
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
        { id: "Type 9", group: 1 },
        { id: "Core Motivations", group: 2, parent: "Type 9" },
        { id: "Challenges", group: 2, parent: "Type 9" },
        { id: "Inner Work", group: 2, parent: "Type 9" },
        { id: "Growth Potential", group: 2, parent: "Type 9" },
        { id: "Practices", group: 2, parent: "Type 9" },
        { id: "Basic Desire: To have peace and harmony", group: 3, parent: "Core Motivations" },
        { id: "Basic Fear: Conflict or loss of connection", group: 3, parent: "Core Motivations" },
        { id: "Core Need: To feel connected and at ease", group: 3, parent: "Core Motivations" },
        { id: "Core Belief: The world rewards those who maintain harmony and avoid conflict", group: 3, parent: "Core Motivations" },
        { id: "Vice/Passion: Sloth (Inertia)", group: 3, parent: "Challenges" },
        { id: "Fixation: Indolence", group: 3, parent: "Challenges" },
        { id: "Trap: Avoiding discomfort to maintain peace", group: 3, parent: "Challenges" },
        { id: "Avoidance: Conflict", group: 3, parent: "Challenges" },
        { id: "Defense Mechanism: Dissociation", group: 3, parent: "Challenges" },
        { id: "Childhood Wound: Belief that love depends on keeping peace and avoiding conflict", group: 3, parent: "Inner Work" },
        { id: "Core Strategy: Staying neutral and avoiding confrontation", group: 3, parent: "Inner Work" },
        { id: "Inner Critic: Critiques for being disruptive or causing conflict", group: 3, parent: "Inner Work" },
        { id: "Virtue: Right Action", group: 3, parent: "Growth Potential" },
        { id: "Holy Idea: Love", group: 3, parent: "Growth Potential" },
        { id: "Body-based", group: 3, parent: "Practices" },
        { id: "Grounding Practices", group: 4, parent: "Body-based" },
        { id: "Tai Chi", group: 4, parent: "Body-based" },
        { id: "Dynamic Movement", group: 4, parent: "Body-based" }, // From Methods.csv
        { id: "Discursive", group: 3, parent: "Practices" },
        { id: "Reflection on Connectedness", group: 4, parent: "Discursive" },
        { id: "Loving-Kindness (Mettā)", group: 4, parent: "Discursive" },
        { id: "Recollection of Buddha/Dhamma/Sangha", group: 4, parent: "Discursive" }, // From Methods.csv
        { id: "Non-discursive", group: 3, parent: "Practices" },
        { id: "Breath Awareness", group: 4, parent: "Non-discursive" },
        { id: "Body Scan", group: 4, parent: "Non-discursive" },
        { id: "Non-dual", group: 3, parent: "Practices" },
        { id: "Open Presence", group: 4, parent: "Non-dual" },
        { id: "Awareness of Unity", group: 4, parent: "Non-dual" },
        { id: "Dynamic Stillness", group: 4, parent: "Non-dual" } // From Methods.csv
      ],
      links: [
        { source: "Type 9", target: "Core Motivations" },
        { source: "Type 9", target: "Challenges" },
        { source: "Type 9", target: "Inner Work" },
        { source: "Type 9", target: "Growth Potential" },
        { source: "Type 9", target: "Practices" },
        { source: "Core Motivations", target: "Basic Desire: To have peace and harmony" },
        { source: "Core Motivations", target: "Basic Fear: Conflict or loss of connection" },
        { source: "Core Motivations", target: "Core Need: To feel connected and at ease" },
        { source: "Core Motivations", target: "Core Belief: The world rewards those who maintain harmony and avoid conflict" },
        { source: "Challenges", target: "Vice/Passion: Sloth (Inertia)" },
        { source: "Challenges", target: "Fixation: Indolence" },
        { source: "Challenges", target: "Trap: Avoiding discomfort to maintain peace" },
        { source: "Challenges", target: "Avoidance: Conflict" },
        { source: "Challenges", target: "Defense Mechanism: Dissociation" },
        { source: "Inner Work", target: "Childhood Wound: Belief that love depends on keeping peace and avoiding conflict" },
        { source: "Inner Work", target: "Core Strategy: Staying neutral and avoiding confrontation" },
        { source: "Inner Work", target: "Inner Critic: Critiques for being disruptive or causing conflict" },
        { source: "Growth Potential", target: "Virtue: Right Action" },
        { source: "Growth Potential", target: "Holy Idea: Love" },
        { source: "Practices", target: "Body-based" },
        { source: "Body-based", target: "Grounding Practices" },
        { source: "Body-based", target: "Tai Chi" },
        { source: "Body-based", target: "Dynamic Movement" }, // Added link
        { source: "Practices", target: "Discursive" },
        { source: "Discursive", target: "Reflection on Connectedness" },
        { source: "Discursive", target: "Loving-Kindness (Mettā)" },
        { source: "Discursive", target: "Recollection of Buddha/Dhamma/Sangha" }, // Added link
        { source: "Practices", target: "Non-discursive" },
        { source: "Non-discursive", target: "Breath Awareness" },
        { source: "Non-discursive", target: "Body Scan" },
        { source: "Practices", target: "Non-dual" },
        { source: "Non-dual", target: "Open Presence" },
        { source: "Non-dual", target: "Awareness of Unity" },
        { source: "Non-dual", target: "Dynamic Stillness" } // Added link
      ]
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
  
    // Detect group 2 nodes (branch starting points)
    const branchNodes = data.nodes.filter((node) => node.group === 2);
    const branchCount = branchNodes.length;
  
    // Generate hues for each branch
    const branchColors = branchNodes.reduce((acc, node, index) => {
      const hue = (360 / branchCount) * index; // Spread hues evenly
      acc[node.id] = hue;
      return acc;
    }, {});
  
    // Dynamic color generation
    const color = (node) => {
      if (node.group === 1) return `hsl(0, 0%, 100%)`; // Central node is always white
      const branch = node.group === 2 ? node.id : node.parent; // Use parent for sub-nodes
      const hue = branchColors[branch] || 0; // Default hue if branch not found
      const lightness = 50 + (node.group - 2) * 15; // Scale lightness by depth
      return `hsl(${hue}, 80%, ${lightness}%)`;
    };
  
    const simulation = d3
      .forceSimulation(data.nodes)
      .force("link", d3.forceLink(data.links).id((d) => d.id).distance(60))
      .force("charge", d3.forceManyBody().strength((d) => (d.group === 1 ? -400 : -400)))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(60))
      .force("bounding", forceBoundingBox(120, 120, width - 120, height - 120));
  
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
      .attr("fill", (d) => color(d))
      .call(drag(simulation))
      .on("mouseover", function (event, d) {
        d3.select(this).attr("r", 20); // Enlarge node
      
        const textElement = d3.selectAll("text").filter((n) => n === d);
        textElement
          .raise() // Bring the hovered text in front of everything else
          .style("font-size", "40px")
          .style("fill", color(d))
          //.style("stroke", "black") // Add a black stroke to the text
          //.style("stroke-width", "1px") // Thin stroke
          .style("text-shadow", "2px 2px 4px rgba(0, 0, 0, 0.8)"); // Add subtle shadow
      
        // Adjust position dynamically based on the number of lines and position
        textElement.attr("transform", function (d) {
          const lines = d3.select(this).selectAll("tspan").size(); // Count lines
          const verticalOffset = d.y < height / 2 
            ? -30 - (lines - 1) * 50 // Shift up further if multi-line and above the node
            : 50;
          return `translate(${d.x}, ${d.y + verticalOffset})`;
        });
      })
      .on("mouseout", function (event, d) {
        d3.select(this).attr("r", 15); // Restore node size
      
        d3.selectAll("text")
          .filter((n) => n === d)
          .style("fill", (d) => {
            if (d.group === 1) return "white"; // Central node
            if (d.group === 2) return "hsl(0, 0%, 95%)"; // Immediate children almost white
            return "grey"; // Other nodes
          })
          .style("font-size", (d) => {
            if (d.group === 1) return "60px"; // Central node larger
            if (d.group === 2) return "30px"; // Immediate children slightly larger
            return `${20 - d.group * 2}px`; // Other nodes
          })
          .style("stroke", "none") // Remove stroke
          .style("text-shadow", "none") // Remove shadow
          .attr("transform", function (d) {
            const lines = d3.select(this).selectAll("tspan").size();
            const verticalOffset = d.y < height / 2
              ? -25 - (lines - 1) * 15 // Text is above the node
              : d.group === 1
                ? 50 + (lines - 1) * 15 // Higher offset for group 1 below the node
                : d.group === 2
                  ? 40 + (lines - 1) * 15 // Slightly lower offset for group 2 below the node
                  : 30; // Default offset for other groups below the node
            return `translate(${d.x}, ${d.y + verticalOffset})`;
          });
      })
      .call(drag(simulation));

      const label = svg
      .append("g")
      .selectAll("text")
      .data(data.nodes)
      .join("text")
      .attr("text-anchor", "middle")
      .attr("fill", (d) => {
        if (d.group === 1) return "white"; // Central node
        if (d.group === 2) return "hsl(0, 0%, 95%)"; // Immediate children almost white
        return "grey"; // Other nodes
      })
      .attr("font-size", (d) => {
        if (d.group === 1) return "60px"; // Central node larger
        if (d.group === 2) return "30px"; // Immediate children slightly larger
        return `${20 - d.group * 2}px`; // Other nodes
      })
      .each(function (d) {
        const lines = wrapText(d.id, 25);
        lines.forEach((line, i) => {
          d3.select(this)
            .append("tspan")
            .attr("x", 0)
            .attr("dy", i === 0 ? 0 : "1.2em")
            .text(line);
        });
      });

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      label.attr("transform", function (d) {
        const lines = d3.select(this).selectAll("tspan").size();
        const verticalOffset = d.y < height / 2 
        ? -25 - (lines - 1) * 15 // Text is above the node
        : d.group === 1
          ? 50 + (lines - 1) * 15 // Higher offset for group 1 below the node
          : d.group === 2
            ? 40 + (lines - 1) * 15 // Slightly lower offset for group 2 below the node
            : 30; // Default offset for other groups below the node
        return `translate(${d.x}, ${d.y + verticalOffset})`;
      });
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

    function wrapText(text, maxWidth) {
      const words = text.split(" ");
      const lines = [];
      let line = [];

      words.forEach((word) => {
        const testLine = [...line, word].join(" ");
        if (testLine.length > maxWidth) {
          lines.push(line.join(" "));
          line = [word];
        } else {
          line.push(word);
        }
      });

      if (line.length) lines.push(line.join(" "));
      return lines;
    }

    function forceBoundingBox(xMin, yMin, xMax, yMax) {
      return function () {
        for (const node of data.nodes) {
          if (node.x < xMin) node.x = xMin;
          if (node.x > xMax) node.x = xMax;
          if (node.y < yMin) node.y = yMin;
          if (node.y > yMax) node.y = yMax;
        }
      };
    }
  }
})();