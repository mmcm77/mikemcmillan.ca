# CopyButton Component

A modern, accessible copy-to-clipboard button component with visual feedback states, theme awareness, and multiple configuration options.

## Features

- **Clipboard API Integration** - Uses native `navigator.clipboard.writeText()` for reliable copying
- **Visual Feedback States** - Animated transitions between idle, copied, and error states
- **Theme Aware** - Automatically adapts to light/dark mode using CSS custom properties
- **Accessibility** - Full keyboard navigation, ARIA labels, and focus management
- **Multiple Sizes** - Small, default, and large variants
- **Flexible Display** - Icon-only, with label, or hover-tooltip modes
- **Edge Case Handling** - Gracefully handles clipboard API unavailability and copy failures
- **TypeScript Support** - Fully typed with comprehensive prop documentation

## Installation

The component is already installed at `/src/components/CopyButton.tsx`. It depends on:

- `lucide-react` - For icons (Copy, Check, AlertCircle)
- `@/lib/utils` - For the `cn()` classname utility

These dependencies are already in your project.

## Basic Usage

### Icon-Only Button (Recommended for Prompt Cards)

```tsx
import CopyButton from "@/components/CopyButton";

function MyComponent() {
  const promptText = "Your prompt text here...";

  return (
    <CopyButton text={promptText} size="sm" />
  );
}
```

### Button with Label

```tsx
<CopyButton text="Text to copy" label="Copy" size="default" />
```

### Button with Hover Tooltip

```tsx
<CopyButton
  text="Text to copy"
  label="Copy to clipboard"
  showLabelOnHoverOnly
  size="sm"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **Required** | The text content to copy to clipboard |
| `label` | `string` | `undefined` | Optional label to display next to the icon |
| `feedbackDuration` | `number` | `2000` | Duration to show the "copied" state in milliseconds |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Size variant of the button |
| `showLabelOnHoverOnly` | `boolean` | `false` | Show label as tooltip on hover (requires `label` prop) |
| `className` | `string` | `undefined` | Additional CSS classes to apply |

All standard `HTMLButtonElement` props are also supported (e.g., `onClick`, `disabled`, `aria-label`, etc.).

## Size Variants

- **`sm`**: Height 28px, icon 14px - Best for compact UIs and prompt cards
- **`default`**: Height 36px, icon 16px - Standard button size
- **`lg`**: Height 44px, icon 18px - Prominent standalone buttons

## States

The component has three visual states:

1. **Idle** - Shows Copy icon, default styling
2. **Copied** - Shows Check icon, success colors (green)
3. **Error** - Shows AlertCircle icon, error colors (red)

Transitions between states are animated with smooth scale and opacity effects.

## Accessibility Features

- **ARIA Labels** - Dynamic labels that update based on state
- **Keyboard Navigation** - Full support for keyboard interaction
- **Focus Management** - Clear focus ring using theme colors
- **Screen Reader Support** - Announces state changes to assistive technologies
- **Disabled State** - Prevents interaction when copying
- **Color Contrast** - Uses theme-aware colors that meet WCAG AA standards

## Integration with AI Tools Page

Here's how to integrate the CopyButton into the existing AI Tools page:

### Step 1: Update the prompts data structure

Add a `fullPrompt` field to each prompt object:

```tsx
const prompts = [
  {
    title: "Case Study Analysis",
    category: "Product Management",
    description: "Analyze a product experience and create a compelling PM case study...",
    preview: "Analyze [product/feature] and create a PM case study focusing on...",
    fullPrompt: `You are a Product Management expert specializing in case study analysis.

Please analyze the following product/feature: [INSERT DETAILS]

Create a comprehensive PM case study that includes:
1. Problem Statement & Context
2. User Research & Insights
3. Solution Approach & Hypothesis
4. Implementation Strategy
5. Key Metrics & Results
6. Learnings & Takeaways

Focus on quantifiable outcomes and strategic decision-making.`,
    color: "purple"
  },
  // ... more prompts
];
```

### Step 2: Import the component

```tsx
import CopyButton from "@/components/CopyButton";
```

### Step 3: Update the prompt card JSX

Replace the existing code block with:

```tsx
<div className="bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border-secondary)] rounded-lg p-3">
  <div className="flex items-start justify-between gap-3">
    <code className="text-xs text-[var(--color-text-tertiary)] font-mono flex-1">
      {prompt.preview}
    </code>
    <CopyButton
      text={prompt.fullPrompt}
      size="sm"
      className="shrink-0"
    />
  </div>
</div>
```

## Theme Awareness

The component uses CSS custom properties from your design system:

- `--color-bg-tertiary` - Background color
- `--color-bg-hover` - Hover background
- `--color-border-secondary` - Border color
- `--color-border-primary` - Hover border color
- `--color-text-secondary` - Text color
- `--color-text-primary` - Hover text color
- `--color-brand-primary` - Focus ring color
- `--color-success` - Copied state color
- `--color-error` - Error state color

These automatically adapt when switching between light and dark themes.

## Edge Cases Handled

### 1. Clipboard API Not Supported

If `navigator.clipboard` is not available (older browsers, insecure contexts):
- Shows error state briefly
- Logs to console for debugging
- Returns to idle state after feedback duration

### 2. Copy Operation Fails

If the copy operation throws an error:
- Shows error state with AlertCircle icon
- Logs error to console
- Returns to idle state after feedback duration

### 3. Rapid Clicks

The component handles rapid clicking by:
- Clearing previous timeout before setting new one
- Preventing state confusion
- Maintaining consistent UX

### 4. Component Unmount

Cleanup happens automatically:
- Timeouts are cleared on unmount
- Prevents memory leaks
- No console warnings

## Advanced Examples

### Custom Feedback Duration

```tsx
<CopyButton
  text="Quick feedback"
  feedbackDuration={1000}
  label="Copy"
/>
```

### Styled with Additional Classes

```tsx
<CopyButton
  text="Styled button"
  label="Copy"
  className="rounded-full shadow-lg"
/>
```

### Programmatic Usage

```tsx
function MyComponent() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const triggerCopy = () => {
    buttonRef.current?.click();
  };

  return (
    <>
      <CopyButton ref={buttonRef} text="Copy me" />
      <button onClick={triggerCopy}>Trigger Copy</button>
    </>
  );
}
```

## Browser Support

- **Modern Browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **Clipboard API**: Requires HTTPS or localhost
- **Fallback**: Shows error state if API unavailable

## Performance

- Lightweight component (~5KB)
- No external dependencies beyond lucide-react
- Optimized animations using CSS transitions
- Cleanup prevents memory leaks

## Troubleshooting

### Button shows error state immediately

**Cause**: Clipboard API not available
**Solution**: Ensure you're running on HTTPS or localhost

### Copy doesn't work

**Cause**: Browser security restrictions
**Solution**: Check browser console for errors, verify HTTPS

### Animations feel slow

**Cause**: Default transition duration
**Solution**: Override with custom CSS or reduce `feedbackDuration`

### Focus ring not visible

**Cause**: Theme colors not defined
**Solution**: Ensure CSS custom properties are set in globals.css

## Related Components

- `Button` - Base button component in `/src/components/ui/button.tsx`
- `Card` - Container components in `/src/components/ui/card.tsx`
- `Badge` - Category badges in `/src/components/ui/badge.tsx`

## Contributing

When modifying this component:

1. Maintain accessibility features
2. Keep theme awareness intact
3. Test in both light and dark modes
4. Verify keyboard navigation
5. Update this documentation
