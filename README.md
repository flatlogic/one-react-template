# 🤘 Flatlogic One React 

Free and open-source admin dashboard template built with React and Bootstrap 4. Developed with ❤️ by [Flatlogic](https://flatlogic.com/). If you love our project please star ⭐️ our repo!

**Development at risk! Our developer wants to eat and accepted a job offer from McDonalds! Buy a [full version of Flatlogic One React](https://flatlogic.com/templates/flatlogic-one-react) to help us hire him again!** *

[View Demo](https://flatlogic.github.io/one-react-template/) | [Download](https://github.com/flatlogic/one-react.git) | [More templates](https://flatlogic.com/templates) | [Support forum](https://flatlogic.com/forum)

[![image](https://user-images.githubusercontent.com/43149862/80715665-5d031c80-8aff-11ea-801b-dd22163b4874.png)](https://flatlogic.github.io/one-react-template/)

This dashboard, a free version (containing only a few components) of our [Flatlogic One React](https://flatlogic.com/templates/flatlogic-one-react), offers a glimpse into the full suite of ready-to-use components available in the full version. Built on top of React 16, it ensures wide support across the web, making it a valuable starting point for [business software](https://flatlogic.com/) projects looking for a robust, scalable framework. You can easily customize the template by changing SCSS variables. All paddings and colors are in _variables.scss file. 

## Features

Flatlogic One React Template is a great template to quick-start development of SAAS, CMS, IoT Dashboard, E-Commerce apps, etc  
Lite version of a Flatlogic One React includes following features and pages:

* Bootstrap 4+ & SCSS
* Responsive layout
* React Chart.js
* Simple login / logout 
* Error page
* Styled Bootstrap components like buttons, modals, etc


## Pages
We have implemented some basic pages, so you can see our template in action.

* Dashboard sample
* Typography
* Tables
* Notifications
* Charts
* Icons
* Maps
* Chat
* Login
* Error page

## Instalation 

1. Clone repository
```shell
git clone https://github.com/flatlogic/one-react-template
```
2. Get in the project folder
```shell
cd one-react-template
```
3. Install dependencies via npm or yarn
```shell
npm install
```
```shell
yarn
```
If you encounter problems use `yarn install --ignore-optional`

## Quick start
Run development server
```shell
yarn run serve
```

## Support
For any additional information please go to our [**support forum**](https://flatlogic.com/forum) and raise your questions or feedback provide there. We highly appreciate your participation!

## How can I support developers?
- Star our GitHub repo :star:
- [Tweet about it](https://twitter.com/intent/tweet?text=Amazing%20dashboard%20built%20with%20%23VueJS%20and%20%23Bootstrap!&url=https://github.com/flatlogic/light-blue-vue-admin&via=flatlogic).
- Create pull requests, submit bugs, suggest new features or documentation updates :wrench:
- Follow [@flatlogic on Twitter](https://twitter.com/flatlogic).
- Subscribe to Flatlogic newsletter at [flatlogic.com](https://flatlogic.com/)
- Like our page on [Facebook](https://www.facebook.com/flatlogic/) :thumbsup:

## More from Flatlogic
- [Awesome Bootstrap Checkboxes & Radios](https://github.com/flatlogic/awesome-bootstrap-checkbox) - ✅ Pure css way to make inputs look prettier
- [React Native Starter](https://github.com/flatlogic/react-native-starter) - 🚀 A powerful react native starter template that bootstraps development of your mobile application
- [React Dashboard](https://github.com/flatlogic/react-dashboard) - 🔥 React Dashboard - isomorphic admin dashboard template with GraphQL
- [Sing App](https://github.com/flatlogic/sing-app) - 💥 Free and open-source admin dashboard template built with Bootstrap 4
- [Light Blue Dashboard](https://github.com/flatlogic/light-blue-dashboard) - 💦 Free and open-source (no frameworks) admin dashboard template built with Bootstrap

## Premium themes
Looking for premium themes and templates? Check out our other template at [flatlogic.com](https://flatlogic.com/admin-dashboards).

## License

Flatlogic One React Template version is [MIT](https://github.com/flatlogic/one-react-template/blob/master/LICENCE)-licensed.

* that's a joke actually, but we would really appreciate if you support us by buying a premium version. Anyways free is just free and is limited to only few components, while premium one has more and comes with premium support.

## Maintained dependency workflow

Use Node >=22.12 and npm (`npm ci`, `npm start`, `npm run build`). Vite replaces
the vulnerable ejected Webpack/CRA toolchain while preserving React16, Router4,
SCSS and the dashboard. `package-lock.json` is canonical after a clean full
`npm audit`; the superseded Yarn lock is removed. `npm test` checks the production
build in installed Chrome: login, charts, tables, typography, and logout.
The former Layout test referenced undeclared Enzyme/Chai and a child-rendering
contract absent from the routed layout; this is replaced by the browser test.

Unused amCharts/Rickshaw dependencies had no imports anywhere in source or styles
and are removed; the dashboard uses its existing ApexCharts components.
