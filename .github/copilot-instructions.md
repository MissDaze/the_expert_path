# Copilot Instructions for ExpertPath

## Project Overview

ExpertPath is an educational platform that provides courses designed to help users pass Outlier.ai expert assessments. The platform offers courses in Git, Python, and English proficiency, helping learners increase their hourly rate and advance their expertise.

## Technology Stack

- **Frontend Framework**: React 19.2+ with TypeScript 5.6+
- **Build Tool**: Vite 7.1+
- **Styling**: Tailwind CSS 4.1+ with custom theme configuration
- **UI Components**: Radix UI primitives with shadcn/ui patterns
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation
- **State Management**: React Context API (ThemeContext, PaymentContext)
- **Package Manager**: pnpm 10.4+
- **Payment Integration**: Stripe

## Project Structure

```
the_expert_path/
├── client/                  # Frontend source code
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   └── ui/        # shadcn/ui components
│   │   ├── contexts/      # React Context providers
│   │   ├── pages/         # Route page components
│   │   ├── lib/           # Utility functions and helpers
│   │   ├── App.tsx        # Main application component
│   │   └── main.tsx       # Application entry point
│   └── index.html         # HTML template
├── public/                 # Static assets and course materials
│   └── course-materials/  # Educational content (markdown)
├── dist/                   # Build output directory
├── .github/               # GitHub configuration
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Code Style and Conventions

### TypeScript

- **Strict Mode**: TypeScript strict mode is enabled
- **No Unused Variables**: Enforce `noUnusedLocals` and `noUnusedParameters`
- **Import Aliases**: Use `@/` for imports from `client/src/`
  - Example: `import { Button } from "@/components/ui/button"`
- **Type Safety**: Always provide explicit types for function parameters and return values
- **Interface vs Type**: Prefer `type` for object shapes, `interface` for extensible contracts

### React

- **Function Components**: Use functional components with hooks (no class components)
- **Component Structure**: Export default component at end of file
- **Hooks**: Follow React hooks rules (use at top level, not in conditionals)
- **Context Usage**: Use existing contexts (ThemeContext, PaymentContext) for shared state
- **Error Handling**: Wrap main app content in ErrorBoundary component

### Styling

- **Tailwind First**: Use Tailwind CSS utility classes for styling
- **Custom Colors**: Use theme colors defined in `tailwind.config.ts`:
  - `primary` (#1e3a8a) - Primary brand color
  - `secondary` (#d97706) - Secondary accent
  - `accent` (#0d9488) - Additional accent
  - `dark` (#111827) - Dark mode background
  - `light` (#f9fafb) - Light mode background
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Variants**: Use `class-variance-authority` for component variants

### File Organization

- **Component Files**: One component per file, named with PascalCase
- **Page Components**: Located in `client/src/pages/`, represent routes
- **UI Components**: Located in `client/src/components/ui/`, reusable primitives
- **Utility Files**: Located in `client/src/lib/`, use camelCase naming

## Development Workflow

### Setup and Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Code Quality

```bash
# Type check without emitting files
pnpm check

# Format code with Prettier
pnpm format
```

### Testing

- Testing framework: Vitest 2.1+
- Run tests before submitting changes

## Routing

- Use Wouter for client-side routing
- Route definitions in `App.tsx`
- Available routes:
  - `/` - Home page
  - `/dashboard` - Course dashboard
  - `/course/:courseId/module/:moduleId` - Module detail view
  - `/success` - Payment success page
  - `/terms`, `/privacy`, `/refund`, `/disclaimer` - Legal pages

## Key Patterns and Practices

### Component Composition

- Use composition over inheritance
- Leverage Radix UI primitives for accessibility
- Wrap UI components with custom styling and behavior

### State Management

- Use Context API for global state (theme, payment)
- Use local state (`useState`) for component-specific state
- Use `useReducer` for complex state logic

### Form Handling

- Use React Hook Form for form management
- Use Zod for schema validation
- Use `@hookform/resolvers` for integration

### Accessibility

- Ensure all interactive elements are keyboard accessible
- Use semantic HTML elements
- Leverage Radix UI for built-in accessibility features
- Include proper ARIA labels where necessary

### Performance

- Code split routes with dynamic imports if needed
- Optimize images and assets
- Use React.memo for expensive components
- Avoid unnecessary re-renders

## Dependencies Management

- Use pnpm for package management
- Lock file (`pnpm-lock.yaml`) should be committed
- Check for security vulnerabilities before adding new dependencies
- Prefer well-maintained packages with good TypeScript support

## Course Content

- Course materials stored as Markdown files in `public/course-materials/`
- Support for multiple course types (one-day, Python, etc.)
- Include projects and answer keys

## Payment Integration

- Stripe integration for payment processing
- PaymentContext manages payment state
- Success page confirms completed purchases

## UI Framework

- Based on shadcn/ui patterns
- Radix UI primitives for core components
- Custom theme with Tailwind CSS
- Dark/light theme support via ThemeContext

## Best Practices

1. **Type Safety**: Always leverage TypeScript's type system
2. **Component Reusability**: Create small, focused, reusable components
3. **Consistent Styling**: Follow established Tailwind patterns
4. **Error Handling**: Use ErrorBoundary and handle errors gracefully
5. **Accessibility**: Ensure features are accessible to all users
6. **Performance**: Consider performance implications of changes
7. **Testing**: Write tests for new features and bug fixes
8. **Documentation**: Update documentation when making significant changes
9. **Code Review**: Review your own code before submitting
10. **Minimal Changes**: Make the smallest changes necessary to achieve goals

## Common Tasks

### Adding a New Page

1. Create component in `client/src/pages/`
2. Add route in `App.tsx`
3. Ensure proper navigation and error handling

### Adding a New UI Component

1. Create component in `client/src/components/ui/`
2. Use Radix UI primitives when available
3. Style with Tailwind CSS
4. Ensure accessibility

### Modifying Styles

1. Check `tailwind.config.ts` for theme values
2. Use utility classes first
3. Create custom CSS only when necessary
4. Maintain responsive design

### Working with Forms

1. Use React Hook Form
2. Define Zod schema for validation
3. Handle errors appropriately
4. Provide user feedback

## Notes for Copilot

- This is a production educational platform
- Prioritize accessibility and user experience
- Follow existing patterns and conventions
- Test changes thoroughly before committing
- Consider mobile users and different screen sizes
- Maintain type safety throughout the codebase
- Use existing UI components before creating new ones
