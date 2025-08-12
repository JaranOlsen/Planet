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
        { id: "Type 1", group: 1 },
        { id: "Core Motivations", group: 2, parent: "Type 1" },
        { id: "Challenges", group: 2, parent: "Type 1" },
        { id: "Inner Work", group: 2, parent: "Type 1" },
        { id: "Growth Potential", group: 2, parent: "Type 1" },
        { id: "Practices", group: 2, parent: "Type 1" },
        { id: "Basic Desire: To be good, virtuous, and in integrity", group: 3, parent: "Core Motivations" },
        { id: "Basic Fear: Being corrupt, wrong, or defective", group: 3, parent: "Core Motivations" },
        { id: "Core Need: To be good and virtuous", group: 3, parent: "Core Motivations" },
        { id: "Core Belief: The world rewards those who are good and virtuous", group: 3, parent: "Core Motivations" },
        { id: "Vice/Passion: Anger", group: 3, parent: "Challenges" },
        { id: "Fixation: Resentment", group: 3, parent: "Challenges" },
        { id: "Trap: Fixating on perfection to feel worthy", group: 3, parent: "Challenges" },
        { id: "Avoidance: Imperfection", group: 3, parent: "Challenges" },
        { id: "Defense Mechanism: Repression", group: 3, parent: "Challenges" },
        { id: "Childhood Wound: Belief that love depends on being good and doing things right", group: 3, parent: "Inner Work" },
        { id: "Core Strategy: Improving and correcting themselves and others", group: 3, parent: "Inner Work" },
        { id: "Inner Critic: Harshly critiques for not being good enough", group: 3, parent: "Inner Work" },
        { id: "Virtue: Serenity", group: 3, parent: "Growth Potential" },
        { id: "Holy Idea: Perfection", group: 3, parent: "Growth Potential" },
        { id: "Body-based", group: 3, parent: "Practices" },
        { id: "Yoga", group: 4, parent: "Body-based" },
        { id: "Standing Meditation (Zhan Zhuang)", group: 4, parent: "Body-based" },
        { id: "Discursive", group: 3, parent: "Practices" },
        { id: "Reflection on Ethical Conduct", group: 4, parent: "Discursive" },
        { id: "Contemplation of Impermanence", group: 4, parent: "Discursive" },
        { id: "Non-discursive", group: 3, parent: "Practices" },
        { id: "Mindfulness of Breathing", group: 4, parent: "Non-discursive" },
        { id: "Body Scan", group: 4, parent: "Non-discursive" },
        { id: "Non-dual", group: 3, parent: "Practices" },
        { id: "Open Presence", group: 4, parent: "Non-dual" },
        { id: "Awareness of Awareness", group: 4, parent: "Non-dual" }
      ],
      links: [
        { source: "Type 1", target: "Core Motivations" },
        { source: "Type 1", target: "Challenges" },
        { source: "Type 1", target: "Inner Work" },
        { source: "Type 1", target: "Growth Potential" },
        { source: "Type 1", target: "Practices" },
        { source: "Core Motivations", target: "Basic Desire: To be good, virtuous, and in integrity" },
        { source: "Core Motivations", target: "Basic Fear: Being corrupt, wrong, or defective" },
        { source: "Core Motivations", target: "Core Need: To be good and virtuous" },
        { source: "Core Motivations", target: "Core Belief: The world rewards those who are good and virtuous" },
        { source: "Challenges", target: "Vice/Passion: Anger" },
        { source: "Challenges", target: "Fixation: Resentment" },
        { source: "Challenges", target: "Trap: Fixating on perfection to feel worthy" },
        { source: "Challenges", target: "Avoidance: Imperfection" },
        { source: "Challenges", target: "Defense Mechanism: Repression" },
        { source: "Inner Work", target: "Childhood Wound: Belief that love depends on being good and doing things right" },
        { source: "Inner Work", target: "Core Strategy: Improving and correcting themselves and others" },
        { source: "Inner Work", target: "Inner Critic: Harshly critiques for not being good enough" },
        { source: "Growth Potential", target: "Virtue: Serenity" },
        { source: "Growth Potential", target: "Holy Idea: Perfection" },
        { source: "Practices", target: "Body-based" },
        { source: "Body-based", target: "Yoga" },
        { source: "Body-based", target: "Standing Meditation (Zhan Zhuang)" },
        { source: "Practices", target: "Discursive" },
        { source: "Discursive", target: "Reflection on Ethical Conduct" },
        { source: "Discursive", target: "Contemplation of Impermanence" },
        { source: "Practices", target: "Non-discursive" },
        { source: "Non-discursive", target: "Mindfulness of Breathing" },
        { source: "Non-discursive", target: "Body Scan" },
        { source: "Practices", target: "Non-dual" },
        { source: "Non-dual", target: "Open Presence" },
        { source: "Non-dual", target: "Awareness of Awareness" }
      ]
    };

    // Preserve copies of the full node/link lists for re-adding them upon expansion
    const originalNodes = data.nodes.map(d => ({ ...d }));
    const originalLinks = data.links.map(d => ({ ...d }));

    // OPTIONAL: Initialize collapsed flags
    data.nodes.forEach((n) => {
      if (n.group === 2) {
        n.collapsed = false; 
      }
    });

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

    // Detect group 2 nodes (branch starting points) for color generation
    const branchNodes = data.nodes.filter((node) => node.group === 2);
    const branchCount = branchNodes.length;
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

    // Set up the simulation
    const simulation = d3
      .forceSimulation(data.nodes)
      .force("link", d3.forceLink(data.links).id((d) => d.id).distance(60))
      .force("charge", d3.forceManyBody().strength((d) => (d.group === 1 ? -400 : -400)))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(60))
      .force("bounding", forceBoundingBox(120, 120, width - 120, height - 120))
      // NEW: A custom force that keeps higher-level nodes closer to their original spots
      .force("stability", forceStability());

    // Draw links
    let link = svg
      .append("g")
      .attr("stroke", "#aaa")
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke-width", 2);

    // Draw nodes
    let node = svg
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
          .raise() // Bring the hovered text in front
          .style("font-size", "40px")
          .style("fill", color(d))
          .style("text-shadow", "2px 2px 4px rgba(0, 0, 0, 0.8)");

        // Adjust label position based on lines and whether it's above/below midline
        textElement.attr("transform", function (d) {
          const lines = d3.select(this).selectAll("tspan").size(); 
          const verticalOffset = d.y < height / 2 
            ? -30 - (lines - 1) * 50
            : 50;
          return `translate(${d.x}, ${d.y + verticalOffset})`;
        });
      })
      .on("mouseout", function (event, d) {
        d3.select(this).attr("r", 15); // Restore node size

        d3.selectAll("text")
          .filter((n) => n === d)
          .style("fill", (d) => {
            if (d.group === 1) return "white";    // Central node
            if (d.group === 2) return "hsl(0, 0%, 95%)"; 
            return "grey"; 
          })
          .style("font-size", (d) => {
            if (d.group === 1) return "60px";
            if (d.group === 2) return "30px";
            return `${20 - d.group * 2}px`;
          })
          .style("stroke", "none")
          .style("text-shadow", "none")
          .attr("transform", function (d) {
            const lines = d3.select(this).selectAll("tspan").size();
            const verticalOffset = d.y < height / 2
              ? -25 - (lines - 1) * 15
              : d.group === 1
                ? 50 + (lines - 1) * 15
                : d.group === 2
                  ? 40 + (lines - 1) * 15
                  : 30;
            return `translate(${d.x}, ${d.y + verticalOffset})`;
          });
      })
      // Click to toggle expand/collapse (only for group 2 by default)
      .on("click", function (event, d) {
        if (d.group === 2) {
          toggleNode(d);
        }
      })
      .call(drag(simulation));

    // Draw labels
    let label = svg
      .append("g")
      .selectAll("text")
      .data(data.nodes)
      .join("text")
      .attr("text-anchor", "middle")
      .attr("fill", (d) => {
        if (d.group === 1) return "white";         // Central node
        if (d.group === 2) return "hsl(0, 0%, 95%)";
        return "grey";
      })
      .attr("font-size", (d) => {
        if (d.group === 1) return "60px";          // Central node larger
        if (d.group === 2) return "30px";
        return `${20 - d.group * 2}px`;            // Smaller as group # rises
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

    // Force simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);

      label.attr("transform", function (d) {
        const lines = d3.select(this).selectAll("tspan").size();
        const verticalOffset = d.y < height / 2 
          ? -25 - (lines - 1) * 15
          : d.group === 1
            ? 50 + (lines - 1) * 15
            : d.group === 2
              ? 40 + (lines - 1) * 15
              : 30;
        return `translate(${d.x}, ${d.y + verticalOffset})`;
      });
    });

    //----------------------------
    // Expand/Collapse Logic
    //----------------------------

    function getAllDescendants(nodeId, nodeList) {
      const directChildren = nodeList.filter(n => n.parent === nodeId);
      let all = [...directChildren];
      directChildren.forEach(child => {
        all.push(...getAllDescendants(child.id, nodeList));
      });
      return all;
    }

    function hideChildren(node) {
      if (node._descendants) return; // Already hidden

      const descendants = getAllDescendants(node.id, data.nodes);
      node._descendants = descendants; 
      
      // Remove descendant nodes
      data.nodes = data.nodes.filter(n => !descendants.includes(n));

      // Remove descendant links
      data.links = data.links.filter(l => {
        const isSourceDesc = descendants.some(d => d.id === (l.source.id || l.source));
        const isTargetDesc = descendants.some(d => d.id === (l.target.id || l.target));
        return !isSourceDesc && !isTargetDesc;
      });
    }

    function showChildren(node) {
      if (!node._descendants) return; // Already shown or never hidden

      // Add back the descendant nodes
      node._descendants.forEach(desc => {
        if (!data.nodes.find(n => n.id === desc.id)) {
          data.nodes.push(desc);
        }
      });

      // Add back the links that connect these descendants (or the node) in originalLinks
      const idsToAdd = new Set(node._descendants.map(d => d.id).concat(node.id));
      originalLinks.forEach(link => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        const sourceInSet = idsToAdd.has(sourceId);
        const targetInSet = idsToAdd.has(targetId);
        if ((sourceInSet || targetInSet) && !data.links.includes(link)) {
          data.links.push({ ...link });
        }
      });

      node._descendants = null;
    }

    function toggleNode(d) {
      d.collapsed = !d.collapsed;
      if (d.collapsed) {
        hideChildren(d);
      } else {
        showChildren(d);
      }

      // Re-bind data to node/link selections
      node = node.data(data.nodes, d => d.id);
      node.exit().remove();
      const nodeEnter = node
        .enter()
        .append("circle")
        .attr("r", 15)
        .attr("fill", (d) => color(d))
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .call(drag(simulation))
        .on("mouseover", function (event, d) {
          d3.select(this).attr("r", 20);
          const textElement = d3.selectAll("text").filter((n) => n === d);
          textElement
            .raise()
            .style("font-size", "40px")
            .style("fill", color(d))
            .style("text-shadow", "2px 2px 4px rgba(0, 0, 0, 0.8)");
        })
        .on("mouseout", function (event, d) {
          d3.select(this).attr("r", 15);
          d3.selectAll("text")
            .filter((n) => n === d)
            .style("fill", (d) => {
              if (d.group === 1) return "white";
              if (d.group === 2) return "hsl(0, 0%, 95%)";
              return "grey";
            })
            .style("font-size", (d) => {
              if (d.group === 1) return "60px";
              if (d.group === 2) return "30px";
              return `${20 - d.group * 2}px`;
            })
            .style("text-shadow", "none");
        })
        .on("click", function (event, d) {
          if (d.group === 2) {
            toggleNode(d);
          }
        });

      node = nodeEnter.merge(node);

      link = link.data(data.links, d => d.source.id + '-' + d.target.id);
      link.exit().remove();
      link = link
        .enter()
        .append("line")
        .attr("stroke", "#aaa")
        .attr("stroke-width", 2)
        .merge(link);

      // Re-bind data to labels
      label = label.data(data.nodes, d => d.id);
      label.exit().remove();
      const labelEnter = label
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("fill", (d) => {
          if (d.group === 1) return "white";
          if (d.group === 2) return "hsl(0, 0%, 95%)";
          return "grey";
        })
        .attr("font-size", (d) => {
          if (d.group === 1) return "60px";
          if (d.group === 2) return "30px";
          return `${20 - d.group * 2}px`;
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
      label = labelEnter.merge(label);

      // Update the simulation with the new data set
      simulation.nodes(data.nodes);
      simulation.force("link").links(data.links);
      simulation.alpha(0.3).restart();
    }

    //-----------
    // Utility
    //-----------

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

    /**
     * A custom force that gently pulls nodes back to their initial positions,
     * with stronger pull for higher-level (lower group #) nodes.
     */
    function forceStability() {
      let nodes;
      
      function force(alpha) {
        if (!nodes) return;
        for (const node of nodes) {
          // If new node doesn't have x0,y0 yet, store current position
          if (node.x0 == null || node.y0 == null) {
            node.x0 = node.x;
            node.y0 = node.y;
          }
          // Scale factor: group 1 => strongest anchor, group 2 => moderate, group 3/4 => weaker, etc.
          // Adjust these numbers to taste:
          const groupInverse = 1 / Math.max(node.group, 1); 
          const scale = 0.03 * groupInverse; // e.g. group1 => ~0.03, group2 => ~0.015, group3 => ~0.01, etc.
          
          const dx = node.x0 - node.x;
          const dy = node.y0 - node.y;

          // The velocity nudges back toward initial position
          node.vx += dx * scale * alpha;
          node.vy += dy * scale * alpha;
        }
      }

      force.initialize = function(_nodes) {
        nodes = _nodes;
      };

      return force;
    }
  }
})();