---
name: Add game
about: Add or request a feature
title: "Game name"
labels: "feature"
---

body:
- type: markdown
  attributes:
    value: "# Add a game"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to add a game you want to see to CAP!
      Please provide at least short description of why we should add this game.

body:
- type: input
- id: banner
  attributes:
    label: Banner
    description: |
      Provide a image or gif of this game that you want to suggest as a background.
      Note that we do not guarantee that we will use this as the official background for the game you suggest.
      There's a chance that we'll use it but the sole purpose of this is for reference only.
  validations:
    required: true

body:
- type: textarea
  id: genre
  attributes:
    label: Genre
    description: "Provide the related genre to this game(seperated by comma)."
  render: bash
  validations:
    required: true
