# workshop_landing — Frontend

Frontend generated with the `project` CLI.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- ESLint

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Structure:

```
frontend/
├── public/
│   └── images/
└── src/
    ├── assets/
    ├── components/
    ├── services/
    ├── styles/
    ├── App.tsx
    └── main.tsx
```

## Environment:

```
cp .env.example .env
```

The API URL is configured through:

```
VITE_API_URL=http://localhost:8000

```
