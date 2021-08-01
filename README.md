# Search For Countries Basic Information

This project is mainly based on searching for countries' information.

It's created with nextjs.

## Why I worked on this project

My goal was to learn how nextjs works.

## How to navigate this project

It's a two-page project.

1. **[HomePage](https://countries-ruddy-seven.vercel.app/)**

    - Entry point that shows basic data about all countries.
    - It has a filter form that filters country based on country's name or capital. [File Code](https://github.com/Olaleye-Blessing/countries/blob/main/components/Form/Form.jsx)
    - It also has a switch mode for light/dark mode. [File Code](https://github.com/Olaleye-Blessing/countries/blob/main/components/Navbar/Navbar.jsx)

    [File Code](https://github.com/Olaleye-Blessing/countries/blob/main/pages/index.js)

2. **Country**

    - Shows information about a specific country **([Nigeria's info](https://countries-ruddy-seven.vercel.app/countries/NGA))**

    [File Code](https://github.com/Olaleye-Blessing/countries/blob/main/pages/countries/%5Bcountry%5D.jsx)

## If I had more time, I would change this

-   Refactor some of the code, especially [this part](https://github.com/Olaleye-Blessing/countries/blob/main/pages/countries/%5Bcountry%5D.jsx)
-   Enable user to filter countries base on **Alpha3Code**

### Homepage screenshot

<p align="center">
  <img src="/Screenshot.png" width="100%" title="project screenshot">
</p>

## Getting Started

First, run the development server <pre>`yarn dev`</pre>

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.
