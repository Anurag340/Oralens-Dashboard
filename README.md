# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


After cloning : 

Simple npm i should work:
npm i or npm install

If not, install the below packages:

npm i react-router-dom

npm i react-icons

npm install -D tailwindcss
npx tailwindcss init

npm i axios


To run
npm run dev


axios.get('http://localhost:8080/Dashboard/show-individual-details',{params: {indv}})   -->  FifthPage

axios.post('http://localhost:8080/Dashboard/individual-register',userData)  -->  ThirdPage

axios.get('http://localhost:8080/Dashboard/get-teams', { params: { orgId } })  -->  SecondPage
axios.post('http://localhost:8080/Dashboard/register-team', {teamId: selectedTeam.id});  -->  Second Page
axios.post('http://localhost:8080/Dashboard/add-team', { unitNo, department });  -->  SecondPage