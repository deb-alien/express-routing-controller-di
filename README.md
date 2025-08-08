# Express Blog Post API with routing-controllers & typedi

A modular, scalable, **class-based CRUD API** for blog posts built with **Express.js**, **TypeScript**, **routing-controllers**, and **typedi** for Dependency Injection (DI).  
This project emphasizes **clean architecture**, **DRY principles**, and is designed for easy extension and maintainability.

---

## Features

-   🔹 Class-based Controllers, Services, and Middlewares
-   🔹 Dependency Injection with `typedi`
-   🔹 Auto-loading of Controllers and Middlewares (recursive, modular)
-   🔹 RESTful CRUD endpoints for blog posts
-   🔹 Custom global error handling middleware
-   🔹 Typed DTOs (Data Transfer Objects) with validation support (optional)
-   🔹 Configuration via environment variables
-   🔹 Friendly to testing and further extension

---

## Project Structure

```
src/
├── main.ts                 # App factory with auto-loading controllers & middlewares
├── server.ts               # Server bootstrap file
├── middlewares/            # All middleware classes
│   ├── logger.middleware.ts
│   └── error.middleware.ts
├── modules/                # Feature modules (e.g. blog posts)
│   └── post/
│       ├── post.controller.ts
│       ├── post.service.ts
│       └── post.dto.ts     # Optional DTOs for request validation
├── config/                 # Environment and app configs
```

---

## Getting Started

### 1. Clone repo & install dependencies

```bash
git clone https://github.com/deb-alien/express-routing-controller-di.git
cd express-routing-controller-di
pnpm install
```

### 2. Create `.env` file in the root

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/blog-api
```

### 3. Run development server

```bash
pnpm run dev
# or
npx ts-node-dev src/server.ts
```

---

## 🔍 How It Works

### Dependency Injection

-   Using `typedi` and `useContainer(Container)` to unify DI in controllers, services, and middlewares.
-   All injectable classes are decorated with `@Service()`.

### Dynamic Loading

-   Controllers and Middlewares are **auto-loaded recursively** from `src/modules` and `src/middlewares`.
-   This enables scalable modular development without manually importing every file.

### Middlewares

-   Middlewares are class-based and support DI.
-   Examples include `LoggerMiddleware` (logs requests) and `GlobalErrorHandler` (custom error responses).

### Routing

-   API routes are prefixed with `/api/v0`.
-   Controllers define routes using decorators from `routing-controllers`.

---

## 📚 Example Endpoints

| Method | Path                | Description          |
| ------ | ------------------- | -------------------- |
| GET    | /api/v0/posts/hello | Sample hello route   |
| GET    | /api/v0/posts       | Get all blog posts   |
| GET    | /api/v0/posts/\:id  | Get post by ID       |
| POST   | /api/v0/posts       | Create new blog post |
| PUT    | /api/v0/posts/\:id  | Update blog post     |
| DELETE | /api/v0/posts/\:id  | Delete blog post     |

---

## 🛠 Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start dev server with reload  |
| `npm run build` | Compile TypeScript to JS      |
| `npm start`     | Run compiled production build |

---

## 🧩 Why Use `@Service()` Decorator?

-   Registers classes with the `typedi` container.
-   Enables dependency injection and lifecycle management.
-   Required for all controllers, services, and middlewares when using `useContainer(Container)`.

---

## 👨‍💻 Author

Rahim Ahasan – open to feedback, contributions, and freelance work.

---

## 📄 License

MIT License — use freely and contribute back!

---

Feel free to open issues or PRs to improve the project!
