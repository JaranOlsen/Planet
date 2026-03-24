(function () {
  const INITIAL_PROGRESS = 0.5;
  const VIEWBOX = {
    width: 1200,
    height: 820,
    centerX: 600,
    centerY: 398,
    outerRx: 458,
    outerRy: 278,
  };
  const PRIMARY_NODE_ANGLES = [-90, -30, 30, 90, 150, 210];
  const MALADAPTIVE_MIDDLE_NODES = new Set([0, 2, 4]);
  const PRIMARY_NODE_VARIANTS = [
    { size: 0.94, sizePhase: 0.04, sizeAmplitude: 0.34, hue: 24, lightBase: 77, blendPhase: 0.22, blendAmplitude: 0.32 },
    { size: 1.02, sizePhase: 0.18, sizeAmplitude: 0.29, hue: 54, lightBase: 76, blendPhase: 0.57, blendAmplitude: 0.25 },
    { size: 0.9, sizePhase: 0.31, sizeAmplitude: 0.37, hue: 16, lightBase: 74, blendPhase: 0.82, blendAmplitude: 0.31 },
    { size: 1.06, sizePhase: 0.48, sizeAmplitude: 0.27, hue: 48, lightBase: 79, blendPhase: 0.11, blendAmplitude: 0.26 },
    { size: 0.96, sizePhase: 0.63, sizeAmplitude: 0.35, hue: 12, lightBase: 73, blendPhase: 0.4, blendAmplitude: 0.33 },
    { size: 1.01, sizePhase: 0.79, sizeAmplitude: 0.3, hue: 42, lightBase: 78, blendPhase: 0.69, blendAmplitude: 0.24 },
  ];
  const TOOLTIP_CONTENT = {
    process: {
      tone: "process",
      title: "Secondary processes",
      examples: [
        { emoji: "🗡️", label: "self-criticism" },
        { emoji: "✋", label: "self-interruption" },
        { emoji: "🌀", label: "worry / rumination" },
        { emoji: "🚪", label: "avoidance / withdrawal" },
      ],
      needs:
        "In EFT these usually protect against feared core pain. They serve needs for safety, control, predictability, and not being exposed, shamed, or emotionally overwhelmed, but they also interrupt access to the deeper needs underneath.",
    },
    emotion: {
      tone: "emotion",
      title: "Secondary emotions",
      examples: [
        { emoji: "😰", label: "anxiety / panic" },
        { emoji: "😵", label: "helplessness" },
        { emoji: "😞", label: "despair / hopelessness" },
        { emoji: "😤", label: "reactive anger" },
      ],
      needs:
        "These are often symptomatic states that need validation, steadiness, and enough safety to slow down and reach the deeper hurt, fear, shame, or longing beneath them.",
    },
    primary: {
      early: {
        tone: "primary",
        title: "Primary maladaptive emotions",
        examples: [
          { emoji: "😳", label: "shame / defectiveness" },
          { emoji: "🫥", label: "loneliness / abandonment" },
          { emoji: "😨", label: "fear / terror" },
          { emoji: "💔", label: "rejection pain" },
        ],
        needs:
          "Common unmet needs here are to be seen and acknowledged, to belong and be loved, and to feel safe, protected, and able to act with some agency.",
      },
      middle: {
        tone: "primary",
        title: "Primary emotions",
        examples: [
          { emoji: "🥺", label: "hurt" },
          { emoji: "😟", label: "fear" },
          { emoji: "😢", label: "sadness" },
          { emoji: "🫶", label: "longing" },
        ],
        needs:
          "When the person can stay with these feelings, they usually clarify needs for comfort, attunement, closeness, reassurance, repair, and responsive care.",
      },
      late: {
        tone: "primary",
        title: "Primary adaptive emotions",
        examples: [
          { emoji: "😠", label: "assertive anger" },
          { emoji: "😭", label: "grief / mourning" },
          { emoji: "🤍", label: "self-compassion" },
          { emoji: "🌟", label: "healthy pride" },
        ],
        needs:
          "These organize adaptive action: anger claims boundaries and protection, grief seeks comfort and helps mourning, self-compassion soothes shame, and healthy pride supports dignity, confidence, and agency.",
      },
    },
    core: {
      early: {
        tone: "core",
        title: "Core Pain",
        examples: [
          { emoji: "😳", label: "shame / inferiority" },
          { emoji: "🫥", label: "aloneness / unloved" },
          { emoji: "😨", label: "terror" },
          { emoji: "💔", label: "rejection / abandonment" },
        ],
        needs:
          "At the center are unmet needs to be seen and included, to feel connected and cared for, and to be safe, protected, and able to act with agency.",
      },
      middle: {
        tone: "core",
        title: "Core pain / sensitivity",
        examples: [
          { emoji: "🥺", label: "hurt" },
          { emoji: "🫶", label: "longing" },
          { emoji: "🌿", label: "sensitivity" },
          { emoji: "🫀", label: "vulnerability" },
        ],
        needs:
          "Here the wound and the sensitivity sit close together, so the central needs are tenderness, attuned contact, emotional safety, and room to feel without being shamed or cut off.",
      },
      late: {
        tone: "core",
        title: "Core sensitivity / Core Gift",
        examples: [
          { emoji: "✨", label: "tenderness" },
          { emoji: "🤍", label: "empathy" },
          { emoji: "🧭", label: "discernment" },
          { emoji: "🌱", label: "aliveness" },
        ],
        needs:
          "The gift side of sensitivity needs reciprocity, expression, protected boundaries, and relationships that can welcome depth, care, and meaningful contribution.",
      },
    },
  };

  window.addEventListener("slideLoaded", onSlideLoaded);

  function onSlideLoaded() {
    const root = document.querySelector("#slide .eft-slide");
    if (root) {
      initEftSlide(root);
    }

    window.removeEventListener("slideLoaded", onSlideLoaded);
  }

  function initEftSlide(root) {
    if (root.dataset.eftInitialised === "true") {
      return;
    }

    const stage = root.querySelector(".eft-stage");
    const svg = root.querySelector(".eft-chart");
    const axis = root.querySelector(".eft-axis");
    const axisTrack = root.querySelector(".eft-axis__track");
    const tooltip = root.querySelector(".eft-tooltip");

    if (!stage || !svg || !axis || !axisTrack || !tooltip) {
      return;
    }

    root.dataset.eftInitialised = "true";

    const refs = buildChart(svg);
    const state = {
      pointerId: null,
      dragSurface: null,
      progress: INITIAL_PROGRESS,
      frame: 0,
      axisRevealed: false,
    };
    const tooltipController = createTooltipController(stage, tooltip, state);

    const render = () => {
      state.frame = 0;

      const t = smoothstep(state.progress);
      const earlyCoreMix = 1 - smoothstep01(clamp((t - 0.26) / 0.18, 0, 1));
      const middleCoreRise = smoothstep01(clamp((t - 0.2) / 0.18, 0, 1));
      const middleCoreFall = 1 - smoothstep01(clamp((t - 0.7) / 0.15, 0, 1));
      const middleCoreMix = middleCoreRise * middleCoreFall;
      const lateCoreMix = smoothstep01(clamp((t - 0.66) / 0.16, 0, 1));
      const currentPhase = getTherapyPhase(state.progress);

      const outerRx = VIEWBOX.outerRx;
      const outerRy = VIEWBOX.outerRy;
      const middleRx = lerp(336, 442, t);
      const middleRy = lerp(206, 268, t);
      const coreRx = lerp(202, 404, t);
      const coreRy = lerp(124, 248, t);

      setEllipse(refs.processGlow, VIEWBOX.centerX, VIEWBOX.centerY, outerRx + 6, outerRy + 6);
      setEllipse(refs.processBand, VIEWBOX.centerX, VIEWBOX.centerY, outerRx, outerRy);
      setEllipse(refs.processOutline, VIEWBOX.centerX, VIEWBOX.centerY, outerRx, outerRy);
      refs.processBand.setAttribute("opacity", format(lerp(0.72, 0.55, t)));
      refs.processGlow.setAttribute("opacity", format(lerp(0.18, 0.1, t)));

      setEllipse(refs.emotionBand, VIEWBOX.centerX, VIEWBOX.centerY, middleRx, middleRy);
      setEllipse(refs.emotionOutline, VIEWBOX.centerX, VIEWBOX.centerY, middleRx, middleRy);
      refs.emotionBand.setAttribute("opacity", format(lerp(0.84, 0.7, t)));

      setEllipse(refs.coreGlow, VIEWBOX.centerX, VIEWBOX.centerY, coreRx + 8, coreRy + 8);
      setEllipse(refs.coreBand, VIEWBOX.centerX, VIEWBOX.centerY, coreRx, coreRy);
      setEllipse(refs.coreOutline, VIEWBOX.centerX, VIEWBOX.centerY, coreRx, coreRy);
      refs.coreBand.setAttribute("opacity", format(lerp(0.2, 0.97, t)));
      refs.coreGlow.setAttribute("opacity", format(lerp(0.08, 0.32, t)));

      const processBandThickness = Math.min(outerRx - middleRx, outerRy - middleRy);
      const emotionBandThickness = Math.min(middleRx - coreRx, middleRy - coreRy);
      const processLabelRx = (outerRx + middleRx) * 0.5;
      const processLabelRy = (outerRy + middleRy) * 0.5;
      const emotionLabelRx = (middleRx + coreRx) * 0.5;
      const emotionLabelRy = (middleRy + coreRy) * 0.5;
      const processFontSize = clamp(12 + processBandThickness * 0.22, 14, 28);
      const emotionFontSize = clamp(12 + emotionBandThickness * 0.2, 14, 27);

      refs.processLabelPath.setAttribute(
        "d",
        describeEllipseArc(VIEWBOX.centerX, VIEWBOX.centerY, processLabelRx, processLabelRy, -166, -14)
      );
      refs.emotionLabelPath.setAttribute(
        "d",
        describeEllipseArc(VIEWBOX.centerX, VIEWBOX.centerY, emotionLabelRx, emotionLabelRy, -158, -22)
      );
      refs.processLabel.setAttribute("font-size", format(processFontSize));
      refs.emotionLabel.setAttribute("font-size", format(emotionFontSize));
      refs.processLabel.style.opacity = format(clamp(processBandThickness / 26, 0.72, 1));
      refs.emotionLabel.style.opacity = format(clamp(emotionBandThickness / 30, 0.75, 1));

      positionLabel(refs.coreLabelEarly, VIEWBOX.centerX, VIEWBOX.centerY);
      positionLabel(refs.coreLabelMiddle, VIEWBOX.centerX, VIEWBOX.centerY);
      positionLabel(refs.coreLabelLate, VIEWBOX.centerX, VIEWBOX.centerY);
      refs.coreLabelEarly.style.opacity = format(earlyCoreMix);
      refs.coreLabelMiddle.style.opacity = format(middleCoreMix);
      refs.coreLabelLate.style.opacity = format(lateCoreMix);
      refs.coreHitbox.dataset.tooltipRole = `core-${currentPhase}`;
      refs.coreLabelEarly.setAttribute("font-size", format(lerp(30, 27, middleCoreMix)));
      refs.coreLabelMiddle.setAttribute("font-size", format(lerp(26, 36, middleCoreMix)));
      refs.coreLabelLate.setAttribute("font-size", format(lerp(26, 39, lateCoreMix)));

      const activeCoreLabel =
        currentPhase === "early"
          ? refs.coreLabelEarly
          : currentPhase === "late"
            ? refs.coreLabelLate
            : refs.coreLabelMiddle;
      setRectFromBBox(refs.coreHitbox, activeCoreLabel.getBBox(), 22, 16, 24);

      const nodeRx = lerp(58, 76, t);
      const nodeRy = lerp(23, 28, t);
      const orbitRx = Math.max(72, (coreRx - nodeRx - 12) * 0.62);
      const orbitRy = Math.max(44, (coreRy - nodeRy - 10) * 0.62);
      const nodeFillOpacity = lerp(0.24, 0.92, t);

      refs.primaryNodes.forEach((node, index) => {
        const point = ellipsePoint(VIEWBOX.centerX, VIEWBOX.centerY, orbitRx, orbitRy, PRIMARY_NODE_ANGLES[index]);
        const labelMode = getPrimaryLabelMode(index, currentPhase, state.axisRevealed);
        const nodeState = getPrimaryNodeState(index, state.progress);
        const variant = PRIMARY_NODE_VARIANTS[index];
        const sizeScale = variant.size * lerp(0.66, 1.34, nodeState.presence);
        const nodeOpacity = clamp(nodeFillOpacity * lerp(0.14, 1.18, nodeState.presence), 0.06, 0.98);
        const saturation = lerp(3, 78, nodeState.presence);
        const lightness = clamp(variant.lightBase + lerp(18, -6, nodeState.presence), 68, 92);
        const rimOpacity = clamp(lerp(0.02, 0.7, nodeState.presence), 0.02, 0.72);
        const rimLightness = clamp(lightness + lerp(3, 16, nodeState.presence), 74, 94);
        const scaledRx = nodeRx * sizeScale;
        const scaledRy = nodeRy * lerp(sizeScale, sizeScale * 0.95, 0.5);

        node.group.setAttribute("transform", `translate(${format(point.x)} ${format(point.y)})`);
        node.ellipse.setAttribute("rx", format(scaledRx));
        node.ellipse.setAttribute("ry", format(scaledRy));
        node.ellipse.setAttribute("opacity", format(nodeOpacity));
        node.ellipse.setAttribute(
          "fill",
          `hsla(${format(variant.hue)}, ${format(saturation)}%, ${format(lightness)}%, ${format(
            clamp(0.18 + nodeState.presence * 0.72, 0.16, 0.94)
          )})`
        );
        node.ellipse.setAttribute(
          "stroke",
          `hsla(${format(variant.hue)}, ${format(clamp(saturation * 0.9, 10, 62))}%, ${format(rimLightness)}%, ${format(
            clamp(0.04 + nodeState.presence * 0.48, 0.04, 0.64)
          )})`
        );
        node.rim.setAttribute("rx", format(Math.max(scaledRx - 4, 8)));
        node.rim.setAttribute("ry", format(Math.max(scaledRy - 4, 8)));
        node.rim.setAttribute(
          "stroke",
          `hsla(${format(variant.hue)}, ${format(clamp(saturation * 0.72, 10, 50))}%, ${format(rimLightness + 3)}%, ${format(
            rimOpacity
          )})`
        );
        node.hitbox.dataset.tooltipRole = `primary-${labelMode}`;
        node.early.style.opacity = labelMode === "early" ? "1" : "0";
        node.middle.style.opacity = labelMode === "middle" ? "1" : "0";
        node.late.style.opacity = labelMode === "late" ? "1" : "0";

        const activeText =
          labelMode === "early" ? node.early : labelMode === "late" ? node.late : node.middle;
        const paddingX = labelMode === "middle" ? 16 : 18;
        const paddingY = labelMode === "middle" ? 8 : 10;
        setRectFromBBox(node.hitbox, activeText.getBBox(), paddingX, paddingY, 14);
      });

      axis.style.setProperty("--eft-progress", `${(state.progress * 100).toFixed(3)}%`);
    };

    const scheduleRender = () => {
      if (state.frame) {
        return;
      }

      state.frame = requestAnimationFrame(render);
    };

    const revealAxis = () => {
      if (state.axisRevealed) {
        return;
      }

      state.axisRevealed = true;
      root.classList.add("is-axis-revealed");
    };

    const updateFromClientX = (clientX, surface = "stage") => {
      const rect = surface === "axis" ? axisTrack.getBoundingClientRect() : stage.getBoundingClientRect();
      const next = clamp((clientX - rect.left) / rect.width, 0, 1);
      state.progress = next;
      revealAxis();
      scheduleRender();
    };

    const startDragging = (event, target, surface) => {
      state.pointerId = event.pointerId;
      state.dragSurface = surface;
      tooltipController.hide();
      stage.classList.toggle("is-dragging", surface === "stage");
      axis.classList.toggle("is-dragging", surface === "axis");
      target.setPointerCapture(event.pointerId);
      updateFromClientX(event.clientX, surface);
      event.preventDefault();
    };

    const onSurfacePointerMove = (event, target) => {
      if (state.pointerId !== event.pointerId || state.dragSurface === null || target !== event.currentTarget) {
        return;
      }

      updateFromClientX(event.clientX, state.dragSurface);
      event.preventDefault();
    };

    const releaseSurfacePointer = (event, target) => {
      if (state.pointerId !== event.pointerId || target !== event.currentTarget) {
        return;
      }

      if (target.hasPointerCapture(event.pointerId)) {
        target.releasePointerCapture(event.pointerId);
      }

      axis.classList.remove("is-dragging");
      stage.classList.remove("is-dragging");
      state.pointerId = null;
      state.dragSurface = null;
    };

    bindSurface(stage, "stage");
    bindSurface(axis, "axis");

    attachTooltipHandlers(refs, tooltipController, state);
    axis.style.setProperty("--eft-progress", `${(INITIAL_PROGRESS * 100).toFixed(3)}%`);
    render();

    function bindSurface(target, surface) {
      target.addEventListener("pointerdown", (event) => {
        startDragging(event, target, surface);
      });

      target.addEventListener("pointermove", (event) => {
        onSurfacePointerMove(event, target);
      });

      target.addEventListener("pointerup", (event) => {
        releaseSurfacePointer(event, target);
      });

      target.addEventListener("pointercancel", (event) => {
        releaseSurfacePointer(event, target);
      });

      target.addEventListener("lostpointercapture", () => {
        axis.classList.remove("is-dragging");
        stage.classList.remove("is-dragging");
        state.pointerId = null;
        state.dragSurface = null;
      });
    }
  }

  function buildChart(svg) {
    const primaryNodesMarkup = PRIMARY_NODE_ANGLES.map(
      (_, index) => `
        <g data-primary-node="${index}">
          <rect class="eft-node__hitbox" data-tooltip-role="primary-middle" tabindex="0"></rect>
          <ellipse class="eft-node__ellipse" fill="url(#eftNodeGradient)" stroke="rgba(255, 247, 228, 0.45)"></ellipse>
          <ellipse class="eft-node__rim"></ellipse>
          <text class="eft-node__text eft-node__text--early" y="0">
            <tspan x="0" y="-7">Primary maladaptive</tspan>
            <tspan x="0" y="10">emotion</tspan>
          </text>
          <text class="eft-node__text eft-node__text--middle" y="0">
            <tspan x="0">Primary emotion</tspan>
          </text>
          <text class="eft-node__text eft-node__text--late" y="0">
            <tspan x="0" y="-7">Primary adaptive</tspan>
            <tspan x="0" y="10">emotion</tspan>
          </text>
        </g>
      `
    ).join("");

    svg.innerHTML = `
      <defs>
        <radialGradient id="eftCoreGradient" cx="50%" cy="42%" r="64%">
          <stop offset="0%" stop-color="rgba(255, 248, 232, 0.98)" />
          <stop offset="58%" stop-color="rgba(234, 217, 179, 0.92)" />
          <stop offset="100%" stop-color="rgba(194, 164, 111, 0.84)" />
        </radialGradient>
        <linearGradient id="eftEmotionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(183, 130, 108, 0.92)" />
          <stop offset="100%" stop-color="rgba(112, 74, 62, 0.82)" />
        </linearGradient>
        <linearGradient id="eftProcessGradient" x1="0%" y1="12%" x2="100%" y2="88%">
          <stop offset="0%" stop-color="rgba(111, 139, 156, 0.9)" />
          <stop offset="100%" stop-color="rgba(56, 79, 95, 0.82)" />
        </linearGradient>
        <linearGradient id="eftNodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255, 246, 224, 0.94)" />
          <stop offset="100%" stop-color="rgba(207, 180, 136, 0.84)" />
        </linearGradient>
        <filter id="eftGlow" x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>
      <g>
        <ellipse class="eft-guide" cx="${VIEWBOX.centerX}" cy="${VIEWBOX.centerY}" rx="${VIEWBOX.outerRx}" ry="${VIEWBOX.outerRy}"></ellipse>
        <ellipse class="eft-guide" cx="${VIEWBOX.centerX}" cy="${VIEWBOX.centerY}" rx="${VIEWBOX.outerRx * 0.74}" ry="${VIEWBOX.outerRy * 0.74}"></ellipse>
        <ellipse class="eft-guide" cx="${VIEWBOX.centerX}" cy="${VIEWBOX.centerY}" rx="${VIEWBOX.outerRx * 0.46}" ry="${VIEWBOX.outerRy * 0.46}"></ellipse>
      </g>
      <g>
        <ellipse id="eft-process-glow" fill="rgba(92, 118, 134, 0.28)" filter="url(#eftGlow)"></ellipse>
        <ellipse id="eft-process-band" stroke="rgba(164, 191, 207, 0.18)" fill="url(#eftProcessGradient)"></ellipse>
        <ellipse id="eft-process-outline" class="eft-band-outline" stroke="rgba(164, 191, 207, 0.36)"></ellipse>
        <ellipse id="eft-emotion-band" stroke="rgba(228, 186, 165, 0.16)" fill="url(#eftEmotionGradient)"></ellipse>
        <ellipse id="eft-emotion-outline" class="eft-band-outline" stroke="rgba(228, 186, 165, 0.34)"></ellipse>
        <ellipse id="eft-core-glow" fill="rgba(234, 217, 179, 0.3)" filter="url(#eftGlow)"></ellipse>
        <ellipse id="eft-core-band" fill="url(#eftCoreGradient)"></ellipse>
        <ellipse id="eft-core-outline" class="eft-band-outline" stroke="rgba(255, 242, 212, 0.55)"></ellipse>
      </g>
      <g>
        <path id="eft-process-label-path" class="eft-curve-path"></path>
        <text id="eft-process-label" class="eft-curve-label eft-curve-label--process eft-hover-target" data-tooltip-role="process" tabindex="0">
          <textPath href="#eft-process-label-path" startOffset="50%">Secondary processes</textPath>
        </text>
        <path id="eft-emotion-label-path" class="eft-curve-path"></path>
        <text id="eft-emotion-label" class="eft-curve-label eft-curve-label--emotion eft-hover-target" data-tooltip-role="emotion" tabindex="0">
          <textPath href="#eft-emotion-label-path" startOffset="50%">Secondary emotions</textPath>
        </text>
      </g>
      <g>
        <rect id="eft-core-hitbox" class="eft-core-hitbox" data-tooltip-role="core-middle" tabindex="0"></rect>
        <text id="eft-core-label-early" class="eft-core-label eft-core-label--early">Core Pain</text>
        <text id="eft-core-label-middle" class="eft-core-label eft-core-label--middle">Core pain / sensitivity</text>
        <text id="eft-core-label-late" class="eft-core-label eft-core-label--late">Core sensitivity / Core Gift</text>
        ${primaryNodesMarkup}
      </g>
    `;

    return {
      processGlow: svg.querySelector("#eft-process-glow"),
      processBand: svg.querySelector("#eft-process-band"),
      processOutline: svg.querySelector("#eft-process-outline"),
      emotionBand: svg.querySelector("#eft-emotion-band"),
      emotionOutline: svg.querySelector("#eft-emotion-outline"),
      coreGlow: svg.querySelector("#eft-core-glow"),
      coreBand: svg.querySelector("#eft-core-band"),
      coreOutline: svg.querySelector("#eft-core-outline"),
      processLabelPath: svg.querySelector("#eft-process-label-path"),
      processLabel: svg.querySelector("#eft-process-label"),
      emotionLabelPath: svg.querySelector("#eft-emotion-label-path"),
      emotionLabel: svg.querySelector("#eft-emotion-label"),
      coreHitbox: svg.querySelector("#eft-core-hitbox"),
      coreLabelEarly: svg.querySelector("#eft-core-label-early"),
      coreLabelMiddle: svg.querySelector("#eft-core-label-middle"),
      coreLabelLate: svg.querySelector("#eft-core-label-late"),
      primaryNodes: Array.from(svg.querySelectorAll("[data-primary-node]")).map((group) => ({
        group,
        hitbox: group.querySelector(".eft-node__hitbox"),
        ellipse: group.querySelector(".eft-node__ellipse"),
        rim: group.querySelector(".eft-node__rim"),
        early: group.querySelector(".eft-node__text--early"),
        middle: group.querySelector(".eft-node__text--middle"),
        late: group.querySelector(".eft-node__text--late"),
      })),
    };
  }

  function attachTooltipHandlers(refs, tooltipController, state) {
    const targets = [
      refs.processLabel,
      refs.emotionLabel,
      refs.coreHitbox,
      ...refs.primaryNodes.map((node) => node.hitbox),
    ];

    targets.forEach((target) => {
      target.addEventListener("pointerenter", (event) => {
        if (state.pointerId !== null) {
          return;
        }

        tooltipController.show(resolveTooltipContent(target.dataset.tooltipRole, state.progress), event);
      });

      target.addEventListener("pointermove", (event) => {
        if (state.pointerId !== null) {
          return;
        }

        tooltipController.move(event);
      });

      target.addEventListener("pointerleave", () => {
        tooltipController.hide();
      });

      target.addEventListener("focus", () => {
        const rect = target.getBoundingClientRect();
        tooltipController.show(resolveTooltipContent(target.dataset.tooltipRole, state.progress), {
          clientX: rect.left + rect.width * 0.5,
          clientY: rect.top + rect.height * 0.5,
        });
      });

      target.addEventListener("blur", () => {
        tooltipController.hide();
      });
    });
  }

  function resolveTooltipContent(role, progress) {
    if (role.startsWith("primary-")) {
      return TOOLTIP_CONTENT.primary[role.split("-")[1]];
    }

    if (role.startsWith("core-")) {
      return TOOLTIP_CONTENT.core[role.split("-")[1]];
    }

    return TOOLTIP_CONTENT[role];
  }

  function getTherapyPhase(progress) {
    if (progress < 0.3) {
      return "early";
    }

    if (progress < 0.72) {
      return "middle";
    }

    return "late";
  }

  function createTooltipController(stage, tooltip, state) {
    return {
      show(content, eventLike) {
        if (!content || state.pointerId !== null) {
          return;
        }

        tooltip.dataset.tone = content.tone;
        tooltip.innerHTML = `
          <div class="eft-tooltip__title">${content.title}</div>
          <div class="eft-tooltip__section">
            <div class="eft-tooltip__eyebrow">Examples</div>
            <div class="eft-tooltip__chips">
              ${content.examples
                .map(
                  (example) => `
                    <span class="eft-tooltip__chip">
                      <span class="eft-tooltip__emoji">${example.emoji}</span>
                      <span>${example.label}</span>
                    </span>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="eft-tooltip__section">
            <div class="eft-tooltip__eyebrow">Needs</div>
            <p class="eft-tooltip__needs">${content.needs}</p>
          </div>
        `;
        tooltip.classList.add("is-visible");
        positionTooltip(stage, tooltip, eventLike.clientX, eventLike.clientY);
      },

      move(eventLike) {
        if (!tooltip.classList.contains("is-visible")) {
          return;
        }

        positionTooltip(stage, tooltip, eventLike.clientX, eventLike.clientY);
      },

      hide() {
        tooltip.classList.remove("is-visible");
      },
    };
  }

  function positionTooltip(stage, tooltip, clientX, clientY) {
    const rect = stage.getBoundingClientRect();
    const width = tooltip.offsetWidth || 280;
    const height = tooltip.offsetHeight || 180;
    const x = clamp(clientX - rect.left + 18, 12, rect.width - width - 12);
    const y = clamp(clientY - rect.top - height * 0.5, 12, rect.height - height - 12);

    tooltip.style.setProperty("--eft-tooltip-x", `${format(x)}px`);
    tooltip.style.setProperty("--eft-tooltip-y", `${format(y)}px`);
  }

  function getPrimaryLabelMode(index, phase, axisRevealed) {
    if (phase === "early") {
      return "early";
    }

    if (phase === "late") {
      return "late";
    }

    if (!axisRevealed) {
      return "middle";
    }

    return MALADAPTIVE_MIDDLE_NODES.has(index) ? "early" : "late";
  }

  function getPrimaryNodeState(index, progress) {
    const variant = PRIMARY_NODE_VARIANTS[index];
    const sizeCycle = Math.sin((progress * 2.35 + variant.sizePhase) * Math.PI * 2);
    const sizeWave = 0.5 + sizeCycle * 0.5;
    const blendCycle = Math.sin((progress * 1.6 + variant.blendPhase) * Math.PI * 2);
    const blendWave = 0.5 + blendCycle * 0.5;
    const therapyArc = 0.5 + Math.sin((progress + variant.sizePhase * 0.7) * Math.PI) * 0.5;
    const rawPresence = clamp(
      0.04 + sizeWave * variant.sizeAmplitude + blendWave * variant.blendAmplitude + therapyArc * 0.22,
      0,
      1
    );
    const presence = smoothstep01(clamp((rawPresence - 0.14) / 0.72, 0, 1));

    return {
      presence,
    };
  }

  function setEllipse(node, cx, cy, rx, ry) {
    node.setAttribute("cx", format(cx));
    node.setAttribute("cy", format(cy));
    node.setAttribute("rx", format(rx));
    node.setAttribute("ry", format(ry));
  }

  function setRect(node, x, y, width, height, radius) {
    node.setAttribute("x", format(x));
    node.setAttribute("y", format(y));
    node.setAttribute("width", format(width));
    node.setAttribute("height", format(height));
    node.setAttribute("rx", format(radius));
    node.setAttribute("ry", format(radius));
  }

  function setRectFromBBox(node, box, paddingX, paddingY, radius) {
    setRect(
      node,
      box.x - paddingX,
      box.y - paddingY,
      box.width + paddingX * 2,
      box.height + paddingY * 2,
      radius
    );
  }

  function positionLabel(node, x, y) {
    node.setAttribute("x", format(x));
    node.setAttribute("y", format(y));
  }

  function ellipsePoint(cx, cy, rx, ry, angleDegrees) {
    const radians = (angleDegrees * Math.PI) / 180;
    return {
      x: cx + rx * Math.cos(radians),
      y: cy + ry * Math.sin(radians),
    };
  }

  function describeEllipseArc(cx, cy, rx, ry, startAngle, endAngle) {
    const start = ellipsePoint(cx, cy, rx, ry, startAngle);
    const end = ellipsePoint(cx, cy, rx, ry, endAngle);
    const delta = endAngle - startAngle;
    const largeArc = Math.abs(delta) > 180 ? 1 : 0;
    const sweep = delta >= 0 ? 1 : 0;

    return [
      "M",
      format(start.x),
      format(start.y),
      "A",
      format(rx),
      format(ry),
      "0",
      String(largeArc),
      String(sweep),
      format(end.x),
      format(end.y),
    ].join(" ");
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function lerp(start, end, progress) {
    return start + (end - start) * progress;
  }

  function smoothstep(value) {
    const t = clamp(value, 0, 1);
    return t * t * (3 - 2 * t);
  }

  function smoothstep01(value) {
    const t = clamp(value, 0, 1);
    return t * t * (3 - 2 * t);
  }

  function format(value) {
    return Number(value).toFixed(2);
  }
})();
