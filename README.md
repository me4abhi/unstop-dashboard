# UNSTOP ASSESSMENT PAGE DESIGN

### `File Structure`

`screenshots/` Contains screenshots of app at different screen sizes

src/

|-- assets/

|-- |-- icons/

|-- components/

|-- |-- ...

|-- layouts/

|-- |-- Header

|-- |-- Sidebar

|-- views/

|-- |-- components

|-- |-- |-- AssessmentsOverview

|-- |-- |-- MyAssessment

|-- |-- css

|-- |-- |-- {css files for "views/\_.jsx"}

|-- |-- \_.jsx

|-- App.js

|-- index.css

|-- main.js

`assets` Contains static assets like images and icons used throughout the app.

`components` Contains reusable/shared components used across the app.

`layouts` Contains components that define the layout of the app

`views` Contains top-level components that represent different pages or views in the app. Also contains sub-top level components.

`App.js` The root component that sets up global configurations and component display/routing.

`index.css` Global CSS styles.

`main.js` The entry point of the application.
