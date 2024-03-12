# 7. React Router

A local website that uses `react-router-dom` to navigate between different components in a single webpage by re-rendering the UI instead of accessing a different webpage.  
Different comopents are loaded as per URL change on a single **index.html** file.
- Learn more about react-router [here](https://reactrouter.com/en/main/start/overview).

## File System 📁
- components folder
    - **Header.jsx** : Contains navbar that uses `<Link>` and `<Navlink>` for navigating through pages(components).
    - **Footer.jsx, Home.jsx, About.jsx and Contact.jsx** : Static pages for display / no functionality
    - **users/User.jsx** : Component that makes use of a part of the URL; like id passed by user.
    - **github/Github.jsx** : Fetches data from github api to get data about user and display in a card
- **App.jsx** : Imports the Header and footer component and sets a layout and uses an `<Outlet/>` tag to handle UI changes by keeping layout intact.
- **main.jsx** : Sets up a router and specifies routing.

## Flow 📈
**main.jsx** rpovides a router and sets up routing by specifing which element to load on which path. **App.jsx** is set up as the root comoponent which contains the layout and **Home.js** loads up as the default component. **Header.jsx** is the navbar component that links other pages using `<Navlink>` tag. Other pages are static pages. **User.jsx** takes a part of the URL that can be accessed in the component. **Github.jsx** has an async task that fetches data from github in paralell to component rendering.