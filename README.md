# elijah-project

Live: https://elijah-project.vercel.app/

The Elijah Project is a React SPA educational application.

![EPpreview2](https://github.com/imbrandonj/elijah-project/assets/90408885/cea19875-a881-4e2f-869e-98fd24f37b2e)

## Navigating the Codebase

- `src` 
  - `app.jsx`
  - `views` 
    - Dashboard/
      - `Dashboard.jsx`
      - `DashEntry.jsx`
      - `MissionSelect.jsx`
      - `Mission.jsx`
    - Alpha-Literacy/
      - `AlphaLit.jsx`
    - Arith/
      - `Arith.jsx`
    - Perspective/
      - `Perspective.jsx`
  - `components` 
    - reusable JSX components
  - `modules` 
    - reusable vanilla JS modules

`app.jsx`, the entry to the application, calls the appropriate view via the useState hook.  
The view is rendered from `app.jsx`, rather than being rendered from a nested path.

`Dashboard.jsx` is the first application view.  
From here, the user selects via `DashEntry.jsx` an action ( launch mission is the only available action at this time ).  
From 'launch mission', the user will be presented with `MissionSelect.jsx` which allows them to select their `Mission.jsx`  

`Mission.jsx` displays the mission location ( Arith, Alpha-Lit, Perspective, etc. )  
and allows the user to set their desired level ( `setLevel` useState found in `app.jsx` )  

The user is then displayed either `AlphaLit.jsx`, `Arith.jsx`, or `Perspective.jsx`  
