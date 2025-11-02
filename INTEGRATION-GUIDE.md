# CopyButton Integration Guide for AI Tools Page

## Quick Start

This guide shows you exactly how to add the CopyButton component to the AI Tools page prompt cards.

## Step 1: Update AI Tools Page Data

Open `/src/app/ai-tools/page.tsx` and modify the `prompts` array to include full prompt text:

```tsx
const prompts = [
  {
    title: "Case Study Analysis",
    category: "Product Management",
    description: "Analyze a product experience and create a compelling PM case study with metrics, outcomes, and learnings.",
    preview: "Analyze [product/feature] and create a PM case study focusing on...",
    fullPrompt: `You are a Product Management expert specializing in case study analysis.

Please analyze the following product/feature: [INSERT YOUR PRODUCT/FEATURE]

Create a comprehensive PM case study that includes:

1. Problem Statement & Context
   - What problem were you solving?
   - What was the market opportunity?
   - Who were the target users?

2. User Research & Insights
   - What research did you conduct?
   - What were the key findings?
   - How did insights inform the solution?

3. Solution Approach & Hypothesis
   - What solution did you propose?
   - What was your hypothesis?
   - What alternatives did you consider?

4. Implementation Strategy
   - How did you prioritize features?
   - What was the rollout plan?
   - How did you collaborate with engineering/design?

5. Key Metrics & Results
   - What metrics did you track?
   - What were the outcomes? (Use specific numbers)
   - What was the business impact?

6. Learnings & Takeaways
   - What went well?
   - What would you do differently?
   - What did you learn about users/product/process?

Focus on quantifiable outcomes and strategic decision-making.`,
    color: "purple"
  },
  {
    title: "Feature Prioritization Framework",
    category: "Strategy",
    description: "Evaluate and prioritize features using RICE, impact/effort matrix, or custom frameworks.",
    preview: "Help me prioritize these features using the RICE framework...",
    fullPrompt: `You are a Product Strategy expert specializing in feature prioritization.

I need help prioritizing the following features:

[LIST YOUR FEATURES HERE - One per line]

Please use the RICE framework to evaluate each feature:

**RICE Scoring:**
- **Reach**: How many users will this impact in a given time period?
- **Impact**: What's the impact on those users? (Massive=3, High=2, Medium=1, Low=0.5, Minimal=0.25)
- **Confidence**: How confident are we in our estimates? (High=100%, Medium=80%, Low=50%)
- **Effort**: How many person-months of work is required?

**RICE Score = (Reach × Impact × Confidence) / Effort**

For each feature, provide:
1. Detailed scoring breakdown
2. Assumptions and reasoning
3. Risks and dependencies
4. Final RICE score
5. Recommended priority ranking

Present the final ranking in a clear table with justification for each score.`,
    color: "blue"
  },
  {
    title: "User Story Generator",
    category: "Requirements",
    description: "Generate well-structured user stories with acceptance criteria from feature descriptions.",
    preview: "Create user stories for [feature] including acceptance criteria...",
    fullPrompt: `You are a Product Manager expert in writing clear, actionable user stories.

Feature Description:
[INSERT YOUR FEATURE DESCRIPTION]

Please create comprehensive user stories using this format:

**User Story Format:**
As a [type of user]
I want to [action/goal]
So that [benefit/value]

**For each user story, include:**

1. **Story Title** (concise, action-oriented)
2. **User Story** (following format above)
3. **Acceptance Criteria** (testable, specific)
   - Given [context]
   - When [action]
   - Then [expected result]
4. **Story Points** (estimated complexity: 1, 2, 3, 5, 8, 13)
5. **Dependencies** (if any)
6. **Open Questions** (anything that needs clarification)

Break down the feature into:
- Epic-level overview
- 3-5 detailed user stories
- Edge cases and error states
- Analytics/instrumentation requirements

Make stories small enough to complete in a sprint but meaningful enough to deliver value.`,
    color: "green"
  },
  {
    title: "Component Architecture Review",
    category: "Development",
    description: "Review React component architecture, suggest improvements, and identify refactoring opportunities.",
    preview: "Review this component structure and suggest architectural improvements...",
    fullPrompt: `You are a Senior React Component Architect with expertise in modern best practices.

Component Code to Review:
[PASTE YOUR COMPONENT CODE HERE]

Please provide a comprehensive architecture review covering:

**1. Component Structure**
   - Is the component properly decomposed?
   - Are responsibilities clearly separated?
   - Suggestions for breaking down complex components

**2. State Management**
   - Is state properly organized?
   - Are there opportunities to lift state up/down?
   - Should we use Context, custom hooks, or external state?

**3. Performance Optimization**
   - Are there unnecessary re-renders?
   - Should we use useMemo, useCallback, or React.memo?
   - Are there bundle size concerns?

**4. Accessibility (WCAG 2.1 AA)**
   - Are ARIA attributes properly used?
   - Is keyboard navigation supported?
   - Are focus states clearly visible?

**5. TypeScript Best Practices**
   - Are types properly defined?
   - Are there any 'any' types to fix?
   - Can we use stricter types?

**6. Code Quality**
   - Are there code smells?
   - DRY violations?
   - Opportunities for abstraction?

**7. Testing Considerations**
   - Is the component testable?
   - What test cases should be covered?

Provide specific, actionable recommendations with code examples.`,
    color: "orange"
  }
];
```

## Step 2: Add Import Statement

At the top of `/src/app/ai-tools/page.tsx`, add:

```tsx
import CopyButton from "@/components/CopyButton";
```

## Step 3: Update the Prompts Section JSX

Find the prompts section (around line 231) and replace the code block div with:

```tsx
{/* OLD CODE - Remove this */}
<div className="bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border-secondary)] rounded-lg p-3">
  <code className="text-xs text-[var(--color-text-tertiary)] font-mono">
    {prompt.preview}
  </code>
</div>

{/* NEW CODE - Replace with this */}
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

## Complete Updated Section

Here's the complete updated prompts section for reference:

```tsx
{/* Prompts Section */}
<section id="prompts" className="py-16 sm:py-20">
  <div className="mb-12">
    <h2 className="text-heading-section mb-4">Prompt Library</h2>
    <p className="text-body-enhanced text-[var(--color-text-tertiary)] max-w-3xl">
      Curated prompts for common product management tasks, from feature planning to technical
      architecture reviews. Click the copy button to use them instantly.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {prompts.map((prompt, index) => (
      <div
        key={index}
        className={`glass-card-hover p-6 ${colorMap[prompt.color as keyof typeof colorMap].card} transition-all duration-300`}
      >
        <div className="mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-3 ${colorMap[prompt.color as keyof typeof colorMap].badge}`}>
            <span className="text-xs font-semibold uppercase tracking-wide">
              {prompt.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
            {prompt.title}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            {prompt.description}
          </p>
        </div>

        {/* Updated code block with CopyButton */}
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
      </div>
    ))}
  </div>
</section>
```

## Optional: Add to AI Agents Section

You can also add copy functionality to the AI agents section if they have specific prompts. Example:

```tsx
{/* In the agents section */}
<div
  key={index}
  className={`glass-card-hover p-6 ${colorMap[agent.color as keyof typeof colorMap].card} transition-all duration-300`}
>
  {/* ... existing content ... */}

  {/* Add this at the bottom of the card */}
  {agent.promptTemplate && (
    <div className="mt-4 pt-4 border-t border-[var(--color-border-secondary)]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide">
          Quick Start
        </span>
        <CopyButton
          text={agent.promptTemplate}
          label="Copy Template"
          size="sm"
        />
      </div>
    </div>
  )}
</div>
```

## Testing the Integration

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/ai-tools`

3. Test the copy buttons:
   - Click a copy button
   - Should show checkmark and green styling
   - Should display "Copied!" state for 2 seconds
   - Paste into a text editor to verify content

4. Test keyboard navigation:
   - Tab to a copy button
   - Press Enter or Space to copy
   - Should work identically to clicking

5. Test theme switching:
   - Toggle between light and dark mode
   - Copy buttons should adapt colors automatically

6. Test error state (optional):
   - Open DevTools
   - Disable clipboard API temporarily
   - Click copy button
   - Should show error state with red AlertCircle icon

## Customization Options

### Change Feedback Duration

```tsx
<CopyButton
  text={prompt.fullPrompt}
  feedbackDuration={1500} // 1.5 seconds instead of 2
  size="sm"
/>
```

### Add Visible Label

```tsx
<CopyButton
  text={prompt.fullPrompt}
  label="Copy Prompt"
  size="sm"
/>
```

### Add Hover-Only Tooltip

```tsx
<CopyButton
  text={prompt.fullPrompt}
  label="Copy full prompt to clipboard"
  showLabelOnHoverOnly
  size="sm"
/>
```

### Use Different Size

```tsx
<CopyButton
  text={prompt.fullPrompt}
  size="lg" // or "default"
/>
```

## Troubleshooting

### Button shows error immediately
- **Cause**: Not running on HTTPS or localhost
- **Solution**: Ensure dev server is running on localhost:3000

### Copy doesn't work
- **Cause**: Browser security restrictions
- **Solution**: Check browser console, verify HTTPS/localhost

### Styling looks wrong
- **Cause**: CSS custom properties not defined
- **Solution**: Ensure globals.css is loaded and theme is active

### Focus ring not visible
- **Cause**: Theme colors missing
- **Solution**: Verify `--color-brand-primary` exists in CSS variables

## Next Steps

After integrating the CopyButton:

1. **Add Analytics** (Optional)
   ```tsx
   <CopyButton
     text={prompt.fullPrompt}
     onClick={() => {
       // Track copy event
       analytics.track('Prompt Copied', { promptTitle: prompt.title });
     }}
     size="sm"
   />
   ```

2. **Add More Prompts** - Expand the prompt library with more comprehensive examples

3. **Create Agent Templates** - Add `promptTemplate` field to agents for quick-start prompts

4. **Build Prompt Builder** - Create interactive form to customize prompts before copying

## File Locations

- **Component**: `/src/components/CopyButton.tsx`
- **Documentation**: `/src/components/CopyButton.README.md`
- **Examples**: `/src/components/CopyButton.example.tsx`
- **Integration Guide**: `/INTEGRATION-GUIDE.md` (this file)
- **Target Page**: `/src/app/ai-tools/page.tsx`

## Support

For questions or issues:
1. Check the README: `/src/components/CopyButton.README.md`
2. Review examples: `/src/components/CopyButton.example.tsx`
3. Test in isolation before integrating
