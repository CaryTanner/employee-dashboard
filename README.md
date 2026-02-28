# Employee Dashboard — Angular App

An Angular application that fetches and displays employee data from a REST API. Users can browse all employees and view detailed information for each individual.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Features](#features)
- [Views](#views)
- [API](#api)

---

## Tech Stack

| Tool                                    | Purpose                         |
| --------------------------------------- | ------------------------------- |
| [Angular 21+](https://angular.dev)      | Framework                       |
| TypeScript                              | Language                        |
| [Tailwind CSS](https://tailwindcss.com) | Styling                         |
| Angular Signals                         | Reactive state management       |
| [Zod](https://zod.dev)                  | Runtime API response validation |
| Angular Router                          | Client-side navigation          |

---

## Getting Started

### Prerequisites

- Node.js ^20.19.0 || ^22.12.0 || ^24.0.0

### Installation

```bash
# Clone the repository
git clone <https://github.com/CaryTanner/employee-dashboard>
cd employee-dashboard-gisys

# Install dependencies
npm install

# Start the development server
npm start
```

The app will be available at `http://localhost:4200`.

### Build

```bash
npm run build
```

---

## Features

- **Employee list** — Displays all employees with their names, clickable to navigate to the detail view.
- **Employee detail** — Shows all available information about a specific employee.
- **Error handling** — Error states for failed API responses.
- **Loading states** — Visual feedback while data is being fetched.
- **Runtime validation** — API responses are validated with Zod to catch unexpected data shapes.

---

## Views

### All Employees — `/employees`

Fetches the full list of employees and renders each one as a clickable card or list item. Clicking navigates to that employee's detail page.

**API:** `GET http://dummy.restapiexample.com/api/v1/employees`

### Employee Detail — `/employees/:id`

Displays all available fields for the selected employee: name, salary, age.

**API:** `GET http://dummy.restapiexample.com/api/v1/employee/{id}`

### Zod Schema Example

```ts
import * as z from 'zod';

export const EmployeeSchema = z.object({
  id: z.number(),
  employee_name: z.string(),
  employee_salary: z.number(),
  employee_age: z.number(),
  profile_image: z.string().optional(),
});

// Generic API response wrapper
export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    status: z.string(),
    data: dataSchema,
    message: z.string(),
  });

export type Employee = z.infer<typeof EmployeeSchema>;
```

---

## License

MIT
