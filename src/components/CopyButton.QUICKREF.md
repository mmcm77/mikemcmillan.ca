# CopyButton Quick Reference

## Import

```tsx
import CopyButton from "@/components/CopyButton";
```

## Basic Usage

```tsx
<CopyButton text="Text to copy" />
```

## Common Patterns

### Icon Only (Most Common)
```tsx
<CopyButton text={promptText} size="sm" />
```

### With Label
```tsx
<CopyButton text={promptText} label="Copy" size="default" />
```

### With Hover Tooltip
```tsx
<CopyButton text={promptText} label="Copy prompt" showLabelOnHoverOnly size="sm" />
```

### In Flex Container
```tsx
<div className="flex items-start justify-between gap-3">
  <code className="flex-1">{preview}</code>
  <CopyButton text={fullText} size="sm" className="shrink-0" />
</div>
```

## Props at a Glance

| Prop | Type | Required | Default | Example |
|------|------|----------|---------|---------|
| `text` | string | ✅ Yes | - | `"Copy this"` |
| `label` | string | ❌ No | `undefined` | `"Copy"` |
| `size` | enum | ❌ No | `"default"` | `"sm"` \| `"default"` \| `"lg"` |
| `feedbackDuration` | number | ❌ No | `2000` | `1500` |
| `showLabelOnHoverOnly` | boolean | ❌ No | `false` | `true` |
| `className` | string | ❌ No | `undefined` | `"shrink-0"` |

## Sizes

- `sm` - 28px height, 14px icon (compact)
- `default` - 36px height, 16px icon (standard)
- `lg` - 44px height, 18px icon (prominent)

## States

1. **Idle** - Copy icon, normal colors
2. **Copied** - Check icon, green colors (2s default)
3. **Error** - AlertCircle icon, red colors (2s default)

## Accessibility

- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ ARIA labels (dynamic based on state)
- ✅ Focus visible (theme-aware ring)
- ✅ Screen reader support

## Theme Support

Works automatically with light/dark mode. Uses CSS custom properties:
- `--color-bg-tertiary`, `--color-bg-hover`
- `--color-border-secondary`, `--color-border-primary`
- `--color-text-secondary`, `--color-text-primary`
- `--color-success`, `--color-error`

## Browser Requirements

- Modern browsers (Chrome, Firefox, Safari, Edge)
- HTTPS or localhost (for Clipboard API)
- Shows error state if clipboard unavailable

## Common Use Cases

### Prompt Cards
```tsx
<div className="bg-[var(--color-bg-secondary)]/40 border rounded-lg p-3">
  <div className="flex items-start justify-between gap-3">
    <code className="text-xs font-mono flex-1">{prompt.preview}</code>
    <CopyButton text={prompt.fullPrompt} size="sm" className="shrink-0" />
  </div>
</div>
```

### Code Snippets
```tsx
<pre className="bg-black rounded-lg p-4 overflow-x-auto">
  <div className="flex justify-between items-start mb-2">
    <span className="text-xs text-gray-400">JavaScript</span>
    <CopyButton text={codeSnippet} size="sm" />
  </div>
  <code>{codeSnippet}</code>
</pre>
```

### Large Text Blocks
```tsx
<div className="space-y-4">
  <pre className="p-4 rounded-lg">{longText}</pre>
  <div className="flex justify-end">
    <CopyButton text={longText} label="Copy Full Text" size="lg" />
  </div>
</div>
```

## Tips

1. Use `size="sm"` for compact UIs
2. Add `className="shrink-0"` in flex containers
3. Set custom `feedbackDuration` for quicker feedback
4. Use `showLabelOnHoverOnly` for icon-first UX
5. Always provide meaningful `text` prop (not preview/truncated)
6. Test keyboard navigation (Tab + Enter/Space)
7. Verify HTTPS/localhost for clipboard access

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Error state on click | Ensure HTTPS or localhost |
| No visual feedback | Check theme CSS variables |
| Focus ring missing | Verify `--color-brand-primary` |
| Copy doesn't work | Check browser console, verify permissions |

## File Locations

- Component: `/src/components/CopyButton.tsx`
- Full Docs: `/src/components/CopyButton.README.md`
- Examples: `/src/components/CopyButton.example.tsx`
- Quick Ref: `/src/components/CopyButton.QUICKREF.md` (this file)
