# Employee Manager

A full-stack employee directory with a React dashboard and a Spring Boot REST API. View employees, add records, edit names and email addresses, and delete entries from one interface.

## Project structure

| Folder | Purpose | Stack |
| --- | --- | --- |
| [frontend/](frontend/) | Employee table, add/edit forms, and API requests | React 18, Vite 5, Material UI, Axios, React Router |
| [backend/](backend/) | Employee endpoints, service layer, and database access | Java 11, Spring Boot 2.7.1, Spring Data JPA, H2, Lombok |

## Run locally

You need Node.js 18+ with npm and JDK 11 with Maven.

Clone this repository:

```bash
git clone https://github.com/KaiAlexander-commits/Employee-Manager-Dashboard.git
cd Employee-Manager-Dashboard
```

Start the API in one terminal:

```bash
cd backend
mvn spring-boot:run
```

Start the dashboard in another terminal from the repository root:

```bash
cd frontend
npm ci
npm run dev -- --port 5174 --strictPort
```

Open **http://localhost:5174**. The dashboard calls **http://localhost:8080/api/v1/employees**.

Port 5174 is intentional: the backend's CORS configuration permits `http://localhost:5174` and `http://localhost:4000`. If you change the frontend port, update `backend/src/main/java/com/chambers/employeemgrserver/domain/employee/controllers/WebConfig.java`. To change the API address, edit `frontend/src/services/EmployeeService.js`.

## Features

- List employee IDs, first names, last names, and email addresses.
- Create an employee with the add form.
- Edit an existing employee using its ID.
- Delete employees directly from the table.
- Look up an employee by email through the API.

## API

All paths below are relative to `http://localhost:8080/api/v1/employees`.

| Method | Path | Operation |
| --- | --- | --- |
| GET | / | List employees |
| POST | / | Create an employee |
| GET | /{id} | Retrieve an employee |
| PUT | /{id} | Update an employee |
| DELETE | /{id} | Delete an employee |
| GET | /lookup?email={email} | Find an employee by email |

Example creation request:

```bash
curl -X POST http://localhost:8080/api/v1/employees \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Alex","lastName":"Taylor","email":"alex@example.com"}'
```

## Build and checks

```bash
# From frontend/
npm run build
npm run lint

# From backend/
mvn test
mvn package
```

The frontend does not currently define a test script. The backend includes a Spring Boot context-load test.

## Development notes

The backend uses an embedded H2 database with Spring Boot's default configuration. Treat employee records as temporary: they do not survive application restarts. No external database setup is required.

This is a learning project with no authentication or role-based access controls. Run it locally with sample data.

The frontend and backend were originally maintained in separate repositories. They now live together here; the original [server repository](https://github.com/KaiAlexander-commits/Employee-Manager-Server) remains available for its history.
