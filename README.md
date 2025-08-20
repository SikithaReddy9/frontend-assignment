# Frontend Assignment – React Components

## 📦 Tech Stack
- React
- TypeScript
- TailwindCSS
- Storybook
- Vitest (optional for testing)

## 📁 Folder Structure

Your components and supporting files are organized under `src/components/`:

src/components/ ├── InputField.tsx ├── InputField.stories.tsx ├── DataTable.tsx ├── DataTable.stories.tsx ├── Card.tsx ├── Card.stories.tsx ├── Header.tsx ├── Page.tsx ├── button.css

Other core files:
src/ ├── App.tsx ├── main.tsx ├── index.css

.storybook/ ├── main.ts ├── preview.ts


## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests (if added)
npm run test

🧩 Components
1. InputField
A flexible input component with:

Label, placeholder, helper text, error message

States: disabled, invalid, loading

Variants: filled, outlined, ghost

Sizes: small, medium, large

2. DataTable
A responsive table component with:

Column sorting

Row selection (single/multiple)

Loading and empty states

3. Card, Header, Page
Supporting layout and UI components used in the demo

📚 Storybook Preview
Deployed via Chromatic or Vercel Link to preview goes here

📸 Screenshots / GIFs
(Optional) Add visuals to showcase component states and interactions.

This project demonstrates reusable, accessible React components with Storybook integration and a clean, professional architecture. It’s ready for extension, testing, and deployment — built with clarity, scalability, and best practices in mind.