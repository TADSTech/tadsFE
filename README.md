# TADS Tech - Frontend

A modern, high-performance web application built with Next.js, React, TypeScript, and Three.js, featuring stunning 3D experiences and clean, minimalist design.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js, React Three Fiber
- **Animation:** Framer Motion
- **UI Components:** Custom components with Aceternity UI elements
- **Package Manager:** pnpm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (required) - Fast, disk space efficient package manager

### Installing pnpm Globally

pnpm is **required** for this project. Install it globally using one of the following methods:

#### Using npm (recommended):
```bash
npm install -g pnpm
```

#### Using Homebrew (macOS):
```bash
brew install pnpm
```

#### Using PowerShell (Windows):
```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

#### Using Bash (Linux/macOS):
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Verify installation:
```bash
pnpm --version
```

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/TADSTech/tadsFE.git
cd tadsFE
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Run the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for production
```bash
pnpm build
```

### 5. Start production server
```bash
pnpm start
```

## 🤝 Collaboration Guidelines

### Branch Strategy

We follow a structured branching model:

- **`main`** - Production-ready code
- **`develop`** - Integration branch for features
- **`feature/*`** - Feature branches (e.g., `feature/new-hero-section`)
- **`fix/*`** - Bug fix branches (e.g., `fix/contact-form-validation`)
- **`hotfix/*`** - Urgent production fixes

### Workflow

1. **Create a new branch** from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit regularly:
   ```bash
   git add .
   git commit -m "feat: add description of your changes"
   ```

3. **Keep your branch updated** with develop:
   ```bash
   git fetch origin
   git rebase origin/develop
   ```

4. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** to merge into `develop`:
   - Provide a clear description of changes
   - Reference any related issues
   - Request review from team members
   - Ensure all checks pass

### Commit Message Convention

We follow conventional commits for clear history:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Example:**
```bash
git commit -m "feat: add 3D animation to hero section"
git commit -m "fix: resolve window undefined error in SSR"
git commit -m "docs: update README with collaboration guidelines"
```

### Code Style

- **TypeScript** is required for all components
- Use **functional components** with hooks
- Follow **ESLint** rules (auto-fixed on commit)
- Use **Tailwind CSS** for styling
- Keep components **modular and reusable**
- Add **"use client"** directive for client-side only components

### Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code builds without errors (`pnpm build`)
- [ ] No TypeScript errors (`pnpm run type-check` if available)
- [ ] Code follows project style guidelines
- [ ] All new features are tested locally
- [ ] Documentation is updated if needed
- [ ] Commit messages follow convention
- [ ] Branch is up to date with `develop`

### Communication

- Use GitHub Issues for bug reports and feature requests
- Use Pull Request comments for code review discussions
- Tag relevant team members in discussions
- Keep communication professional and constructive

## 📁 Project Structure

```
tadsFE/
├── public/               # Static assets
│   ├── data/            # JSON data files
│   ├── logo/            # Logo assets
│   └── models/          # 3D models
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── contact/     # Contact page
│   │   ├── main/        # Main page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # React components
│   │   ├── 3d/          # Three.js components
│   │   ├── models/      # 3D model components
│   │   ├── providers/   # Context providers
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Reusable UI components
│   └── lib/             # Utility functions
├── components.json      # Shadcn/UI config
├── package.json         # Dependencies
├── pnpm-lock.yaml       # Lock file (DO NOT modify manually)
├── tsconfig.json        # TypeScript config
└── README.md           # This file
```

## 🚨 Common Issues

### Build Errors

**"window is not defined"**
- Ensure client-side only code uses `"use client"` directive
- Use `useEffect` for window/document access
- Avoid using browser APIs during SSR

**TypeScript errors**
- Run `pnpm build` to check for type errors
- Ensure all imports are properly typed

### pnpm Issues

**Command not found**
- Make sure pnpm is installed globally
- Restart your terminal after installation

**Lock file conflicts**
- Never edit `pnpm-lock.yaml` manually
- Run `pnpm install` to resolve

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint (if configured)

## 🌐 Deployment

The project is deployed on Firebase Hosting:

```bash
pnpm build
firebase deploy --only hosting:tadstechfe
```

## 📄 License

This project is proprietary and confidential to TADS Tech.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Three.js and React Three Fiber communities
- Aceternity UI for component inspiration

---

**Built with ❤️ by TADS Tech**
