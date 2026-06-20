# Planet Slide Lab Integration Workflow

## Purpose
- `Planet` is the production repo and now contains the promoted Slide Lab runtime and editor work on `develop`.
- `Planet-slide-lab` remains useful as a sandbox for risky slide-authoring experiments.
- Promotion from the lab should be selective: validate there first, then port narrow changes into `Planet`.

## Remote Policy
- `origin`: `Planet`.
- Treat `Planet-slide-lab` as a separate sandbox remote if you add it locally.
- Do not point this checkout origin at the lab repository.

## Branching
- `main`: stable production baseline.
- `develop`: integration branch for promoted Slide Lab work before release.
- Keep larger slide changes on focused feature branches before merging into `develop`.

## Working Rules
- Keep legacy slide families working while the new system is developed.
- Validate changes against representative current slide types before promotion:
  - full-image slides
  - fullscreen text and quote slides
  - split image + bullets/text slides
  - iframe/media slides
  - interactive D3 and WordCloud slides
- Promote back in narrow, production-safe units such as renderer, adapter, controller, or template groups.

## Manual Follow-up
- Keep GitHub tokens out of remotes and shell history.
- Re-run `npm run build` and `npm run validate:slides` before promotion.
