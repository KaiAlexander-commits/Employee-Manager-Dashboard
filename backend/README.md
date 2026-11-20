# Employee Manager — Backend

Spring Boot REST API for employee records, backed by Spring Data JPA and an embedded H2 database.

## Requirements and startup

Use JDK 11 and Maven. From this folder:

```bash
mvn spring-boot:run
```

The API is available at http://localhost:8080/api/v1/employees. H2 runs in memory with the current default configuration, so records are temporary.

## Employee fields

| Field | Type | Purpose |
| --- | --- | --- |
| id | Long | Generated identifier |
| firstName | String | First name |
| lastName | String | Last name |
| email | String | Email address |

See the [root README](../README.md#api) for endpoints and an example request.

## Organization

Under `src/main/java/com/chambers/employeemgrserver/`:

- `domain/employee/controllers/`: REST endpoints and CORS configuration.
- `domain/employee/services/`: employee operations.
- `domain/employee/repos/`: Spring Data repository.
- `domain/employee/models/`: JPA employee entity.
- `domain/core/exceptions/`: resource exceptions.

`src/main/resources/application.properties` contains application settings.

## Development

```bash
mvn test
mvn package
```

The existing test checks that the Spring application context loads. Authentication and authorization are not implemented.

The frontend should run on http://localhost:5174; the CORS configuration also allows http://localhost:4000. See [frontend setup](../frontend/README.md).
