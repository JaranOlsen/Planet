# Mindmap-Driven Procedural Planet

The procedural planet is opt-in. Legacy texture rendering remains the default.

## Running It

- Legacy planet: `?planet=legacy` or no query param
- Procedural planet: `?planet=procedural`
- Optional seed overrides:
  - `?planet=procedural&planetSeed=my-seed`
  - `?planet=procedural&weatherSeed=my-weather-seed`
  - `?planet=procedural&seaLevel=0.18&terrainScale=1`

Fixed comparison views can be opened with `planetView`:

- `?planet=procedural&planetView=far`
- `?planet=procedural&planetView=mindmap`
- `?planet=procedural&planetView=head`
- `?planet=procedural&planetView=heart`
- `?planet=procedural&planetView=gut`
- `?planet=procedural&planetView=surface`
- `?planet=procedural&planetView=surfaceFlight`

The same bookmarks are available in the browser console:

```js
window.planetDebug.bookmark('head');
window.planetDebug.bookmark('surface');
window.planetDebug.bookmarkAt({ mode: 'surface', lat: 20.2, lng: 20.2 });
```

## Debug Hooks

```js
window.planetDebug.mode
window.planetDebug.sampleLatLng(25.5, 18.5)
window.planetDebug.sampleSurfaceLatLng(25.5, 18.5)
window.planetDebug.getNodeMetrics('14BA8BEB-FA35-44B7-9DE3-A1503614069D')
window.planetDebug.getTextureStats()
window.planetDebug.getProceduralLayerStats()
window.planetDebug.getSurfaceDetailStats()
window.planetDebug.getSurfacePropSnapshot()
window.planetDebug.getSemanticOverlayStats()
window.planetDebug.getSemanticLandmarkStats()
window.planetDebug.setSemanticOverlayVisible(false)
window.planetDebug.getSurfacePresentationState()
window.planetDebug.setSurfacePresentation(false)
window.planetDebug.getSurfaceFlightState()
window.planetDebug.setSurfaceFlightAltitude(-0.08)
window.planetDebug.getCameraPose()
window.planetDebug.getPresentationLighting()
window.planetDebug.setPresentationLighting()
window.planetDebug.setNaturalLighting()
window.planetDebug.openDebugMap()
```

`openDebugMap()` shows the low-resolution semantic control map used by the generated terrain. Water is blue; land is biome-colored and brightened by settlement suitability.

## Visual Comparison Protocol

Visual quality should be judged separately from architecture. Do not score a view from one still screenshot alone.

- Compare each target view in both lighting states:
  - natural lighting/terminator: `window.planetDebug.setNaturalLighting()`
  - presentation-lit night side: `window.planetDebug.setPresentationLighting()`
- Capture both day-side and night-side camera angles for every orbit-level comparison. If the night side is meant for presentation use, include a presentation-lit version rather than judging only the dark natural-light frame.
- Use motion checks, not only stills:
  - orbit: rotate or pan slowly and watch cloud shadows, route/contour readability, label occlusion, and shimmer
  - surface: move the camera laterally and forward/backward; rocks, growth forms, settlements, route markers, and haze must remain world-stable instead of popping or reshuffling
- Capture multiple locations per zoom level:
  - far orbit: at least day side, terminator, and night/presentation-lit side
  - semi-zoomed orbit: at least head, heart, and gut regions
  - surface/flight: at least three locations, including a settlement-adjacent area, a route corridor, and a sparse terrain area
- Keep the visual score separate from the implementation score. The procedural architecture can be healthy while the visible result is still early.

## Current Scope

The v1 path derives a deterministic semantic world map from `planetTagData` and the current connection arrays. It generates height, normal, albedo, roughness, water, coast-foam, emission, cloud, and weather-shadow maps in memory with `DataTexture`s. The terrain albedo receives a mild generated cloud-shadow tint, and the terrain shader also samples the animated weather-shadow map so cloud shadow motion is visible instead of only baked into the first frame. The cloud layer is deliberately patchier/lighter than the first prototype so semi-orbit comparisons can still read the semantic geography beneath it. The water layer includes a separate additive foam shell around shallow/coastal regions. A procedural semantic overlay draws generated coastlines from the sea-level field, low-opacity elevation/ridge contours from land-height bands, and route corridors from the mindmap edge graph, while a separate semantic landmark-light layer marks important current mindmap nodes in orbit/semi-orbit views. This keeps the generated planet comparable to the legacy texture without hiding which regions are being shaped by the model. The settlement layer uses the same sampler for terrain cost, graph centrality, settlement class, roads, bridges, and ferries.

Surface mode now has a first local terrain-detail patch: a camera-following tangent grid with deterministic micro-relief/color grain, edge alpha so the patch dissolves into the generated planet, world-stable generated rocks/growth forms with terrain/biome instance colors, stable terrain strokes for local ridge/shore/route grain, softened route corridors with small route markers, and local semantic settlement pads/structures/spires/beacons generated from nearby mindmap anchors. A local sky dome, surface-only distance fog, a shallow camera-facing atmosphere veil, inspection light, soft fill light, vertex-color emission lift, material lift, and thin generated horizon-haze rim keep the terrain readable on the night side without turning the surface view into a flat UI overlay. Prop and stroke placement is cell-based in world latitude/longitude, and `getSurfacePropSnapshot()` exists specifically to detect motion jitter by comparing stable rock, growth, and terrain-stroke positions across nearby camera moves. The `surface` and `surfaceFlight` bookmarks also enable a procedural surface presentation pass that hides intro/status DOM overlays, large label cards/text, legacy connection geometry, generic scene lines, the global route/coast overlay, orbit landmark lights, and orbit-scale atmosphere/cloud/water shells so the close terrain can be judged without UI or planet-scale layers cutting through the view. Flight altitude is clamped against the generated surface radius plus a small clearance, so the same sampler now drives terrain visuals, settlement/road placement, and near-surface collision height. This is not a full geometry clipmap yet, and higher-quality local road geometry is still a later phase.
