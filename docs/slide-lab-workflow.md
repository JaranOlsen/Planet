# Planet Slide Lab Workflow

## Purpose
- `Planet` remains the stable production repo.
- `Planet-slide-lab` is the isolated architecture sandbox for slideshow and slide-authoring work.
- Promotion is one-way: validate in the lab first, then cherry-pick or manually port narrow changes back into `Planet`.

## Remote Policy
- `origin`: intended lab remote.
- `upstream`: original `Planet` repo, treated as read-only reference.
- Do not merge the lab repo back into `Planet`.

## Branching
- `main`: stable lab baseline.
- Feature branches:
  - `slides/runtime`
  - `slides/templates`
  - `slides/editor`
  - `slides/migration`

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
- Rotate any GitHub token that was previously embedded in a remote URL.
- Create the private GitHub repo `Planet-slide-lab`.
- Push this lab repo to that remote once it exists.
