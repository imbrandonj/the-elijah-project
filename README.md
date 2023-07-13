# elijah-project

Live: https://elijah-project.vercel.app/

The Elijah Project is a React SPA educational game.

## Navigating the Codebase

- `src` 
  - `app.jsx`
  - `views` 
    - Dashboard
    - Literacy
      - `LitPath.jsx`
    - Math
      - `MathPath.jsx`
    - Menu 
      - `About.jsx`
      - `MainMenu.jsx`
    - Perspective
      - `LitPath.jsx`
  - `components` 
    - reusable JSX components
  - `modules` 
    - reusable vanilla JS modules

`app.jsx`, the entry to the application, calls the appropriate view via the useState hook.  
The view is rendered from app.jsx, rather than being rendered from a nested path.
