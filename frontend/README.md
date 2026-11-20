# Employee Manager — Frontend

React dashboard for viewing, creating, updating, and deleting employee records. It uses Material UI for the table and forms, React Router for navigation, and Axios for requests to the Spring Boot API.

## Start

Start the backend first using the [project setup](../README.md), then run:

```bash
npm ci
npm run dev -- --port 5174 --strictPort
```

Open http://localhost:5174.

## Routes

| Route | Page |
| --- | --- |
| / | Employee list |
| /add | Add employee |
| /update/:id | Update employee |
| Any other path | 404 page |

## Key files

- `src/components/EmployeeTable.jsx`: employee table and delete actions.
- `src/pages/`: list, add, update, and fallback pages.
- `src/services/EmployeeService.js`: Axios requests and the API base URL.
- `src/App.jsx`: page routing.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev -- --port 5174 --strictPort` | Start with an origin allowed by the backend |
| `npm run build` | Build into `dist/` |
| `npm run preview -- --port 5174 --strictPort` | Preview the production build |
| `npm run lint` | Run ESLint |

The API address is currently `http://localhost:8080/api/v1/employees`, configured in `src/services/EmployeeService.js`. There is no frontend test script.
