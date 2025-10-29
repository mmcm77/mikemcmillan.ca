# shadcn/ui Components

This directory contains shadcn/ui components installed and optimized for this portfolio.

## Installation Complete

**Dependencies installed:**
- class-variance-authority (CVA for component variants)
- clsx (utility for conditional classes)
- tailwind-merge (merge Tailwind classes)
- lucide-react (icon library)
- @radix-ui/react-slot (primitive for composable components)
- tailwindcss-animate (animation utilities)

**Components installed:**
- ✅ Button (6 variants: default, destructive, outline, secondary, ghost, link)
- ✅ Card (with CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- ✅ Badge (styled labels and tags)
- ✅ Separator (horizontal and vertical dividers)

## Theme Customization

**Brand Colors Applied:**
- Primary: Purple (#8B5CF6) - oklch(0.67 0.24 295)
- Accent: Blue (#3B82F6) - oklch(0.62 0.23 253)
- Borders: Purple-tinted with 20% opacity
- Focus rings: Purple brand color

**Tailwind CSS v4 Compatibility:**
- ✅ Removed problematic `@apply` directives
- ✅ Converted to direct CSS properties (border-color, background-color)
- ✅ Fixed broken tw-animate-css import
- ✅ All components compile without errors

## Usage Examples

### Button Component

```tsx
import { Button } from "@/components/ui/button"

// Default purple button
<Button>Click me</Button>

// Variants
<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="link">Link Style</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">⚙️</Button>

// With icons (using lucide-react)
import { ArrowRight } from "lucide-react"
<Button>
  Continue <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

### Card Component

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content of the card</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Badge Component

```tsx
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

// Example: Technology tags
<div className="flex gap-2">
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Next.js</Badge>
</div>
```

### Separator Component

```tsx
import { Separator } from "@/components/ui/separator"

// Horizontal separator
<Separator />

// Vertical separator
<Separator orientation="vertical" />

// Example: Dividing sections
<div>
  <p>First section</p>
  <Separator className="my-4" />
  <p>Second section</p>
</div>
```

## Utility Function

The `cn()` utility is available for merging Tailwind classes:

```tsx
import { cn } from "@/lib/utils"

<Button className={cn("custom-class", someCondition && "conditional-class")}>
  Button
</Button>
```

## Next Steps

### Phase 2 Components (Install when needed):
```bash
npx shadcn@latest add dialog tabs tooltip
```

### Phase 3 Components (For forms):
```bash
npx shadcn@latest add form input label textarea select
```

### Phase 4 Components (Advanced features):
```bash
npx shadcn@latest add accordion avatar progress skeleton command
```

## Design System Integration

These components integrate with our existing design system:
- Glass card effects can be combined with shadcn Card component
- Buttons maintain our purple/blue gradient brand
- All components support dark mode
- Focus states use purple ring (--ring variable)
- Animations respect `prefers-reduced-motion`

## Browser Compatibility

Components are tested and working with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Class Variance Authority](https://cva.style/docs)
- [Lucide Icons](https://lucide.dev/)
