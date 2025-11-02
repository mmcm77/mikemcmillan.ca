# CopyButton Visual Guide

This guide shows what the CopyButton looks like in different states, sizes, and configurations.

## State Transitions

```
[IDLE STATE]
┌─────────────┐
│  📋 Copy    │  ← Icon + Label
└─────────────┘
  Background: var(--color-bg-tertiary)
  Border: var(--color-border-secondary)
  Text: var(--color-text-secondary)

        ↓ (User clicks)

[COPIED STATE - 2 seconds]
┌─────────────┐
│  ✓ Copied!  │  ← Check icon + Success text
└─────────────┘
  Background: var(--color-success)/10
  Border: var(--color-success)/30
  Text: var(--color-success)

        ↓ (2 seconds pass)

[BACK TO IDLE]
┌─────────────┐
│  📋 Copy    │
└─────────────┘
```

## Size Variants

```
SMALL (size="sm")
┌────────┐
│ 📋     │  ← 28px height, 14px icon
└────────┘
Best for: Compact UIs, inline elements, prompt cards


DEFAULT (size="default")
┌──────────┐
│  📋      │  ← 36px height, 16px icon
└──────────┘
Best for: Standard buttons, general use


LARGE (size="lg")
┌─────────────┐
│   📋        │  ← 44px height, 18px icon
└─────────────┘
Best for: Prominent CTAs, standalone buttons
```

## Label Configurations

### Icon Only (No Label)
```tsx
<CopyButton text="..." size="sm" />
```
```
┌─────┐
│ 📋  │  Clean, minimal
└─────┘
```

### With Visible Label
```tsx
<CopyButton text="..." label="Copy" size="sm" />
```
```
┌────────────┐
│ 📋 Copy    │  Always visible
└────────────┘
```

### Hover-Only Tooltip
```tsx
<CopyButton text="..." label="Copy prompt" showLabelOnHoverOnly size="sm" />
```
```
Default:        On Hover:
┌─────┐         ┌─────┐
│ 📋  │         │ 📋  │
└─────┘         └─────┘
                   ↓
              Copy prompt
```

## In Context: Prompt Card

```
┌──────────────────────────────────────────────────────────┐
│ STRATEGY                                                  │
│                                                           │
│ Feature Prioritization Framework                         │
│                                                           │
│ Evaluate and prioritize features using RICE,             │
│ impact/effort matrix, or custom frameworks.              │
│                                                           │
│ ┌────────────────────────────────────────────────────┐   │
│ │ Help me prioritize these features using the...    📋│   │
│ │                                                    ↑│   │
│ │ Preview text              CopyButton (size="sm")  ││   │
│ └────────────────────────────────────────────────────┘   │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

## Theme Adaptation

### Dark Mode (Default)
```
┌──────────────┐
│ 📋 Copy      │
└──────────────┘
Background: rgba(24, 24, 31, 0.6)      [Dark gray]
Border: rgba(255, 255, 255, 0.1)       [Subtle white]
Text: #D1D1D6                          [Light gray]

On Hover:
Background: rgba(37, 37, 53, 0.8)      [Slightly lighter]
Border: rgba(139, 92, 246, 0.3)        [Purple glow]
Text: #FFFFFF                          [White]
```

### Light Mode
```
┌──────────────┐
│ 📋 Copy      │
└──────────────┘
Background: #F3F4F6                    [Light gray]
Border: rgba(0, 0, 0, 0.15)           [Subtle dark]
Text: #334155                          [Dark gray]

On Hover:
Background: #F3F4F6                    [Same]
Border: rgba(139, 92, 246, 0.5)       [Purple glow]
Text: #0F172A                          [Near black]
```

## Interaction States

### 1. Default (Idle)
```
┌──────────────┐
│ 📋 Copy      │  ← Copy icon visible
└──────────────┘
   ↑ Cursor changes to pointer on hover
```

### 2. Hover
```
┌──────────────┐
│ 📋 Copy      │  ← Border glows purple
└──────────────┘  ← Subtle lift animation
   ↑ Background slightly lighter
```

### 3. Focus (Keyboard)
```
   ┌────────────────┐
   │  Focus Ring    │  ← Purple outline
   │ ┌────────────┐ │
   │ │ 📋 Copy    │ │
   │ └────────────┘ │
   └────────────────┘
   ↑ 3px outline with glow
```

### 4. Clicked (Copied)
```
┌──────────────┐
│ ✓ Copied!    │  ← Check icon, green color
└──────────────┘
   ↑ Icon animates: scale 0.75→1.0
   ↑ Text fades in
```

### 5. Error State
```
┌──────────────┐
│ ⚠ Failed     │  ← AlertCircle icon, red color
└──────────────┘
   ↑ Shown if clipboard API fails
```

## Animation Timing

```
Icon Transition:
  Duration: 200ms
  Easing: ease-in-out

  Copy → Check:
    Old icon: opacity 1→0, scale 1→0.75
    New icon: opacity 0→1, scale 0.75→1

Background/Border:
  Duration: 200ms
  Easing: ease-in-out

State Auto-Reset:
  Default: 2000ms (2 seconds)
  Customizable via feedbackDuration prop
```

## Accessibility Visual Indicators

### 1. Keyboard Focus
```
     VISIBLE FOCUS RING
┌────────────────────────┐
│  ┌──────────────────┐  │  ← 3px purple outline
│  │   📋 Copy       │  │  ← 3px offset from button
│  └──────────────────┘  │  ← Subtle glow effect
└────────────────────────┘
```

### 2. Disabled State
```
┌──────────────┐
│ ✓ Copied!    │  ← 50% opacity
└──────────────┘  ← Cursor: not-allowed
   ↑ Disabled during "copied" state
```

### 3. ARIA Labels
```
[Default State]
aria-label="Copy to clipboard"

[Copied State]
aria-label="Copied to clipboard"

[Error State]
aria-label="Failed to copy"

[Custom Label]
aria-label={label || "Copy to clipboard"}
```

## Layout Examples

### 1. Inline with Code
```
┌───────────────────────────────────────────┐
│ code-block-text-here-lorem-ipsum...  📋  │
│ ↑ flex-1                             ↑   │
│                                 shrink-0  │
└───────────────────────────────────────────┘
```

### 2. Stack Layout
```
┌─────────────────────────┐
│ Long text content here  │
│ Multiple lines...       │
│ More content...         │
└─────────────────────────┘
           ↓
      ┌─────────────┐
      │ 📋 Copy All │
      └─────────────┘
```

### 3. Grid of Cards
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ Card 1   │  │ Card 2   │  │ Card 3   │
│ Content  │  │ Content  │  │ Content  │
│      📋  │  │      📋  │  │      📋  │
└──────────┘  └──────────┘  └──────────┘
```

## Color Palette Reference

### Success State (Copied)
```
Background: var(--color-success)/10     → rgba(16, 185, 129, 0.1)
Border: var(--color-success)/30         → rgba(16, 185, 129, 0.3)
Text: var(--color-success)              → #10B981
```

### Error State (Failed)
```
Background: var(--color-error)/10       → rgba(239, 68, 68, 0.1)
Border: var(--color-error)/30           → rgba(239, 68, 68, 0.3)
Text: var(--color-error)                → #EF4444
```

### Focus Ring
```
Outline: var(--color-brand-primary)     → #8B5CF6 (Purple)
Offset: 2px
Width: 2px
Glow: rgba(139, 92, 246, 0.2)
```

## Responsive Behavior

```
Mobile (< 640px):
┌─────┐
│ 📋  │  ← Icon only recommended
└─────┘
        Small tap target (min 44x44px for accessibility)

Tablet (640px - 1024px):
┌────────────┐
│ 📋 Copy    │  ← Icon + label works well
└────────────┘

Desktop (> 1024px):
┌────────────┐
│ 📋 Copy    │  ← Full label + hover states
└────────────┘
     ↓
 Hover tooltip appears
```

## Integration Preview: AI Tools Page

```
╔════════════════════════════════════════════════════════╗
║                  PROMPT LIBRARY                        ║
╠════════════════════════════════════════════════════════╣
║                                                        ║
║  ┌──────────────────────┐  ┌──────────────────────┐  ║
║  │ STRATEGY             │  │ DEVELOPMENT          │  ║
║  │                      │  │                      │  ║
║  │ Feature Priorit...   │  │ Component Review     │  ║
║  │                      │  │                      │  ║
║  │ Evaluate and...      │  │ Review React...      │  ║
║  │                      │  │                      │  ║
║  │ ┌────────────────┐   │  │ ┌────────────────┐   │  ║
║  │ │ Help me...  📋 │   │  │ │ Review this 📋 │   │  ║
║  │ └────────────────┘   │  │ └────────────────┘   │  ║
║  └──────────────────────┘  └──────────────────────┘  ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
                        ↑
            CopyButton in each prompt card
```

## Performance Notes

- Component size: ~5KB minified
- No external dependencies (except lucide-react)
- CSS transitions (GPU accelerated)
- Minimal re-renders (state isolated)
- Cleanup on unmount (no memory leaks)

## Browser Rendering

```
Chrome/Edge:
✅ Full support
✅ Smooth animations
✅ Clipboard API works

Firefox:
✅ Full support
✅ Smooth animations
✅ Clipboard API works

Safari:
✅ Full support
✅ Smooth animations
✅ Clipboard API works (iOS 13.4+)

Older Browsers:
⚠️ Shows error state if clipboard unavailable
⚠️ Graceful degradation
```

## Testing Checklist

- [ ] Click button → Shows "Copied!" state
- [ ] Wait 2s → Returns to idle state
- [ ] Paste content → Correct text copied
- [ ] Tab to button → Focus ring visible
- [ ] Press Enter/Space → Copies text
- [ ] Toggle theme → Colors adapt
- [ ] Mobile tap → Works on touch
- [ ] Multiple buttons → Each works independently
- [ ] Rapid clicking → No state confusion
- [ ] HTTPS required → Shows error on HTTP (if applicable)
