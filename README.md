# elijah-project

Live: https://elijah-project.vercel.app/

The Elijah Project is a React SPA educational game.

## Navigating the Codebase

`src` ->
  `app.jsx`
  `views` ->
    Dashboard
    Literacy
    Math
    Menu ->
      `About`
      `MainMenu`
    Perspective
  `components` ->
    reusable jsx components
  `modules` ->
    reusable vanilla js modules

`app.jsx` calls the appropriate view via useState hook.
The view calls the nested components.
