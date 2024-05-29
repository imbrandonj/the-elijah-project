# the-elijah-project

Live: https://elijah-project.com

The Elijah Project is an educational-exercise, single page web application. Made with React.js.

![EPpreview2](https://github.com/imbrandonj/elijah-project/assets/90408885/cea19875-a881-4e2f-869e-98fd24f37b2e)

## Navigating the Codebase

- `src`
  - `app.jsx`
  - `views`
    - Menu/
      - `MainMenu.jsx`
      - `MainMenu.css`
    - Dashboard/
      - `Dashboard.jsx`
      - `Dashboard.css`
      - `DashEntry.jsx`
      - `MissionSelect.jsx`
      - `Mission.jsx`
    - Alpha-Literacy/
      - `AlphaLit.jsx`
      - `AlphaLit.css`
      - levels/
        - `AlphaLevel1.jsx`
        - `AlphaLevel2.jsx`
        - `AlphaLevel3.jsx`
        - etc.
    - Arith/
      - `Arith.jsx`
      - `Arith.css`
      - levels/
        - `ArithLevel1.jsx`
        - `ArithLevel2.jsx`
        - `ArithLevel3.jsx`
        - etc.
    - Perspective/
      - `Perspective.jsx`
      - `Perspective.css`
      - levels/
        - `PerspLevel1.jsx`
        - `PerspLevel2.jsx`
        - `PerspLevel3.jsx`
        - etc.
  - `components/`
    - reusable JSX components
  - `modules/`
    - reusable vanilla JS modules

`app.jsx`, the entry to the application, checks for adequate viewport width and then calls `MainMenu.jsx`

## Views

The website has a handful of views (Dashboard, Arith, Alpha-Lit, Perspective).

`MainMenu.jsx` calls the appropriate view via React's useContext state management.  
The view is rendered from here, rather than being nested in a deep path within the application.

`MainMenu.jsx` is the first application view.  
Once the user presses the start button, they are directed to a new view - `Dashboard.jsx`  
From here, the user selects via `DashEntry.jsx` an action ( launch mission, profile, sign out ).  
From 'launch mission', the user will be presented with `MissionSelect.jsx` which allows them to select their planet (educational subject).

`Mission.jsx` displays the mission location ( Arith, Alpha-Lit, Perspective, etc. )  
and allows the user to set their desired level ( `setLevel` useState found in `ViewContext.jsx` )

The user is then displayed either `AlphaLit.jsx`, `Arith.jsx`, or `Perspective.jsx` and that planet becomes the view.  
Each planet has a `levels` folder with a set of levels.

Note that many displays come from the `components` folder, i.e., `levelUp.jsx` and `levelEntry.jsx`
