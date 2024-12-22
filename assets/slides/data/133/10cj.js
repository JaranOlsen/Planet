function onSlideLoaded() {
    const container = document.getElementById('mindmap-container');
    if (container) {
        const mindmapData = {
            text: 'Central Node',
            children: [
                {
                    text: 'Child Node 1',
                    children: [
                        { text: 'Grandchild 1' },
                        { text: 'Grandchild 2' },
                        { text: 'Grandchild 3' },
                        { text: 'Grandchild 4' },
                        { text: 'Grandchild 5' },
                        { text: 'Grandchild 6' },
                    ]
                },
                {
                    text: 'Child Node 2',
                    children: [
                        { text: 'Grandchild 7',
                            children: [
                                { text: 'Great Grandchild 1' },
                                { text: 'Great Grandchild 2' },
                                { text: 'Great Grandchild 3' ,
                                    children: [
                                        { text: 'Great Grandchild 1' },
                                        { text: 'Great Grandchild 2' ,
                                            children: [
                                                { text: 'Great Grandchild 1' },
                                                { text: 'Great Grandchild 2' },
                                                { text: 'Great Grandchild 3' },
                                                { text: 'Great Grandchild 4' },
                                            ]},
                                        { text: 'Great Grandchild 3' },
                                        { text: 'Great Grandchild 4' },
                                    ]},
                                { text: 'Great Grandchild 4' },
                            ]
                         },
                        { text: 'Grandchild 8' ,
                            children: [
                                { text: 'Great Grandchild 1' },
                                { text: 'Great Grandchild 2' },
                                { text: 'Great Grandchild 3' },
                                { text: 'Great Grandchild 4' },
                            ]},
                    ]
                },
                {
                    text: 'Child Node 3',
                    children: [
                        { text: 'Grandchild 9' },
                    ]
                },
                {
                    text: 'Child Node 4',
                    // No grandchildren
                },
                // Add more child nodes if needed
            ]
        };
        generateMindmap(mindmapData);
    }
    // Remove the event listener after it's been called
    window.removeEventListener('slideLoaded', onSlideLoaded);
}

window.addEventListener('slideLoaded', onSlideLoaded);


function generateMindmap(data) {
    const container = document.getElementById('mindmap-container');
    container.innerHTML = ''; // Clear existing content

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('id', 'mindmap-svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    container.appendChild(svg);

    const nodes = [];
    let mainBranches = [];
    let branchColors = [];

    function generateBranchColors(numBranches) {
        const colors = [];
        const goldenRatioConjugate = 0.618033988749895;
        let hue = Math.random(); // Start with a random hue
    
        for (let i = 0; i < numBranches; i++) {
            hue += goldenRatioConjugate;
            hue %= 1;
            const color = hslToHex(hue * 360, 40, 65); // Set saturation to 40%, lightness to 65%
            colors.push(color);
        }
        return colors;
    }
    
    function hslToHex(h, s, l) {
        h = h % 360;
        s /= 80;
        l /= 90;
        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;
        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }

    function adjustColorBrightness(hexColor, percent) {
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);

    r = Math.min(255, Math.max(0, r + (255 - r) * (percent / 100)));
    g = Math.min(255, Math.max(0, g + (255 - g) * (percent / 100)));
    b = Math.min(255, Math.max(0, b + (255 - b) * (percent / 100)));

    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);

    const newColor = `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)}`;

    return newColor;
}

    function getBrightness(hexColor) {
        const r = parseInt(hexColor.substring(1, 3), 16);
        const g = parseInt(hexColor.substring(3, 5), 16);
        const b = parseInt(hexColor.substring(5, 7), 16);
        return (r * 299 + g * 587 + b * 114) / 1000;
    }

    function createNode(nodeData, depth = 0, parent = null, branchColor = null) {
        const nodeElement = document.createElement('div');
        nodeElement.className = 'mindmap-node';
    
        const textElement = document.createElement('div');
        textElement.className = 'mindmap-text';
        textElement.textContent = nodeData.text;
    
        nodeElement.appendChild(textElement);
        container.appendChild(nodeElement);
    
        const nodeObj = {
            element: nodeElement,
            data: nodeData,
            depth: depth,
            parent: parent,
            children: [],
            x: 0,
            y: 0,
            size: 0,
            descendants: 0,
            color: branchColor
        };
    
        // Calculate number of descendants
        nodeObj.descendants = countDescendants(nodeData);
    
        nodes.push(nodeObj);
    
        // Assign colors
        if (depth === 1) {
            // Assign a unique color to each main branch
            const branchIndex = mainBranches.indexOf(nodeData);
            nodeObj.color = branchColors[branchIndex];
        } else if (depth > 1 && parent) {
            // Create lighter variations of the parent's color for sub-branches
            nodeObj.color = adjustColorBrightness(parent.color, -10 * (depth - 1)); // Darken by 10% per depth level
        } else if (depth === 0) {
            // Central node color
            nodeObj.color = '#1a1a1a'; // Dark background color
        }
    
        // Apply the color to the node
        nodeElement.style.backgroundColor = nodeObj.color;
        nodeElement.style.borderColor = adjustColorBrightness(nodeObj.color, -15);

        // Set text color based on background brightness
        const brightness = getBrightness(nodeObj.color);
        nodeElement.style.color = brightness > 125 ? '#000000' : '#ffffff';
    
        // Recursively create child nodes
        if (nodeData.children && nodeData.children.length > 0) {
            nodeData.children.forEach(childData => {
                const childNode = createNode(childData, depth + 1, nodeObj, nodeObj.color);
                nodeObj.children.push(childNode);
            });
        }
    
        return nodeObj;
    }

    function countDescendants(nodeData) {
        if (!nodeData.children || nodeData.children.length === 0) {
            return 0;
        }
        let count = nodeData.children.length;
        nodeData.children.forEach(child => {
            count += countDescendants(child);
        });
        return count;
    }

    // Get the main branches (children of the root)
    mainBranches = data.children || [];
    branchColors = generateBranchColors(mainBranches.length);

    // Create nodes
    const rootNode = createNode(data);

    // Adjust node sizes based on text content and depth
    adjustNodeSizes();

    // Position nodes
    positionNodes();

    // Draw lines
    drawLines();

    function adjustNodeSizes() {
        const maxDepth = Math.max(...nodes.map(n => n.depth));

        nodes.forEach(node => {
            // Base size adjusted by depth
            const baseSize = 120; // Maximum size for the root node
            const minSize = 50; // Minimum size for the deepest nodes
            const size = baseSize - ((baseSize - minSize) * (node.depth / maxDepth));

            node.element.style.width = `${size}px`;
            node.element.style.height = `${size}px`;

            // Adjust font size
            const fontSize = (size / baseSize) * 16; // Base font size is 16px
            node.element.querySelector('.mindmap-text').style.fontSize = `${fontSize}px`;

            // Save size for positioning calculations
            node.size = size;
        });
    }

    function positionNodes() {
        const slideWidth = container.offsetWidth;
        const slideHeight = container.offsetHeight;
        const aspectRatio = slideWidth / slideHeight;

        const centralNode = nodes.find(n => n.depth === 0);
        const centerX = slideWidth / 2;
        const centerY = slideHeight / 2;

        setPosition(centralNode, centerX, centerY);

        // Start positioning child nodes recursively
        const initialRadius = Math.min(slideWidth, slideHeight) / 2.5; // Increased base radius
        const angleOffset = Math.PI / 6; // 30 degrees offset
        positionChildNodes(centralNode, initialRadius, aspectRatio, -Math.PI + angleOffset, Math.PI - angleOffset);
    }

    function positionChildNodes(node, radius, aspectRatio, startAngle, endAngle) {
        const children = node.children;
        if (children.length === 0) return;
    
        // Adjust radius for the current depth
        const scalingFactor = 0.8; // Decrease radius by 20% for each level
        const adjustedRadius = radius * scalingFactor;
    
        // Calculate total weight based on descendants
        const totalWeight = children.reduce((sum, child) => sum + child.descendants + 1, 0);
    
        let currentAngle = startAngle;
    
        children.forEach((child) => {
            const childWeight = child.descendants + 1;
            const angleSpan = (childWeight / totalWeight) * (endAngle - startAngle);
            const childStartAngle = currentAngle;
            const childEndAngle = currentAngle + angleSpan;
    
            const angle = (childStartAngle + childEndAngle) / 2;
    
            // Adjust angle to avoid overlaps
            const adjustedAngle = adjustAngleForOverlap(
                node,
                child,
                angle,
                adjustedRadius,
                aspectRatio,
                childStartAngle,
                childEndAngle // Pass the angle range
            );
    
            const x = node.x + adjustedRadius * Math.cos(adjustedAngle);
            const y = node.y + adjustedRadius * Math.sin(adjustedAngle) / aspectRatio;
    
            setPosition(child, x, y);
    
            // Ensure nodes stay within the container
            keepNodeWithinBounds(child);
    
            // Position child nodes recursively with their allocated angle range
            positionChildNodes(child, adjustedRadius, aspectRatio, childStartAngle, childEndAngle);
    
            currentAngle += angleSpan;
        });
    }

    function adjustAngleForOverlap(node, child, angle, radius, aspectRatio, startAngle, endAngle) {
        const maxIterations = 360;
        let iterations = 0;
        let overlap = true;
    
        while (overlap && iterations < maxIterations) {
            overlap = false;
            const x = node.x + radius * Math.cos(angle);
            const y = node.y + radius * Math.sin(angle) / aspectRatio;
    
            // Check for overlap with existing nodes
            nodes.forEach(existingNode => {
                if (existingNode !== child && existingNode !== node) {
                    const dx = existingNode.x - x;
                    const dy = (existingNode.y - y) * aspectRatio;
                    const distance = Math.hypot(dx, dy);
                    const minDistance = (existingNode.size + child.size) / 2 + 10; // Add buffer
    
                    if (distance < minDistance) {
                        overlap = true;
                        angle += Math.PI / 180; // Adjust angle by 1 degree
    
                        // Ensure angle stays within the allocated range
                        if (angle > endAngle) angle = startAngle + (angle - endAngle);
                        if (angle < startAngle) angle = endAngle - (startAngle - angle);
                    }
                }
            });
    
            iterations++;
        }
    
        return angle;
    }

    function setPosition(nodeObj, x, y) {
        const element = nodeObj.element;
        nodeObj.x = x;
        nodeObj.y = y;

        const left = x - element.offsetWidth / 2;
        const top = y - element.offsetHeight / 2;

        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
    }

    function keepNodeWithinBounds(node) {
        const element = node.element;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        let x = node.x;
        let y = node.y;

        const halfWidth = element.offsetWidth / 2;
        const halfHeight = element.offsetHeight / 2;

        // Left boundary
        if (x - halfWidth < 0) {
            x = halfWidth;
        }
        // Right boundary
        if (x + halfWidth > containerWidth) {
            x = containerWidth - halfWidth;
        }
        // Top boundary
        if (y - halfHeight < 0) {
            y = halfHeight;
        }
        // Bottom boundary
        if (y + halfHeight > containerHeight) {
            y = containerHeight - halfHeight;
        }

        node.x = x;
        node.y = y;

        const left = x - halfWidth;
        const top = y - halfHeight;

        element.style.left = `${left}px`;
        element.style.top = `${top}px`;
    }

    function drawLines() {
        svg.innerHTML = ''; // Clear existing lines
        nodes.forEach(node => {
            if (node.parent) {
                const line = document.createElementNS(svgNS, 'line');
                line.classList.add('mindmap-line');
    
                line.setAttribute('x1', node.parent.x);
                line.setAttribute('y1', node.parent.y);
                line.setAttribute('x2', node.x);
                line.setAttribute('y2', node.y);
    
                // Set line color based on node color
                line.style.stroke = adjustColorBrightness(node.color, -20);
    
                svg.appendChild(line);
            }
        });
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        positionNodes();
        drawLines();
    });
}