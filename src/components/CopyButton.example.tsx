/**
 * CopyButton Component - Usage Examples
 *
 * This file demonstrates various ways to use the CopyButton component.
 * These examples can be integrated into the AI Tools page prompt cards.
 */

import CopyButton from "@/components/CopyButton";

// EXAMPLE 1: Basic icon-only button (recommended for prompt cards)
export function Example1_IconOnly() {
  const promptText = "Analyze [product/feature] and create a PM case study focusing on...";

  return (
    <div className="bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border-secondary)] rounded-lg p-4">
      <div className="flex items-start justify-between gap-3">
        <code className="text-xs text-[var(--color-text-tertiary)] font-mono flex-1">
          {promptText}
        </code>
        <CopyButton text={promptText} size="sm" />
      </div>
    </div>
  );
}

// EXAMPLE 2: Button with visible label
export function Example2_WithLabel() {
  const promptText = "Help me prioritize these features using the RICE framework...";

  return (
    <div className="bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border-secondary)] rounded-lg p-4">
      <div className="flex items-start justify-between gap-3">
        <code className="text-xs text-[var(--color-text-tertiary)] font-mono flex-1">
          {promptText}
        </code>
        <CopyButton text={promptText} label="Copy" size="sm" />
      </div>
    </div>
  );
}

// EXAMPLE 3: Button with hover-only tooltip (clean but informative)
export function Example3_HoverLabel() {
  const promptText = "Create user stories for [feature] including acceptance criteria...";

  return (
    <div className="bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border-secondary)] rounded-lg p-4">
      <div className="flex items-start justify-between gap-3">
        <code className="text-xs text-[var(--color-text-tertiary)] font-mono flex-1">
          {promptText}
        </code>
        <CopyButton
          text={promptText}
          label="Copy prompt"
          showLabelOnHoverOnly
          size="sm"
        />
      </div>
    </div>
  );
}

// EXAMPLE 4: Large standalone button
export function Example4_LargeButton() {
  const promptText = `You are a Product Strategy Advisor with expertise in:
- Feature prioritization frameworks (RICE, ICE, Value vs Effort)
- Product roadmap planning
- Metrics definition and success criteria
- User story refinement

Help me analyze this feature request and provide strategic recommendations...`;

  return (
    <div className="space-y-4">
      <pre className="bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border-secondary)] rounded-lg p-4 text-xs text-[var(--color-text-tertiary)] font-mono overflow-x-auto">
        {promptText}
      </pre>
      <div className="flex justify-end">
        <CopyButton text={promptText} label="Copy Full Prompt" size="lg" />
      </div>
    </div>
  );
}

// EXAMPLE 5: Integration with AI Tools page prompt card
export function Example5_PromptCard() {
  const prompt = {
    title: "Feature Prioritization Framework",
    category: "Strategy",
    description: "Evaluate and prioritize features using RICE, impact/effort matrix, or custom frameworks.",
    preview: "Help me prioritize these features using the RICE framework...",
    fullPrompt: `I need help prioritizing the following features:

[List your features here]

Please use the RICE framework to evaluate each feature:
- Reach: How many users will this impact?
- Impact: What's the impact on those users?
- Confidence: How confident are we in our estimates?
- Effort: How much work is required?

Provide a final ranking with justification for each score.`,
    color: "blue"
  };

  const colorMap: Record<string, { badge: string; card: string }> = {
    blue: {
      badge: "bg-blue-400/10 border-blue-400/30 text-blue-400",
      card: "border-blue-400/30 hover:border-blue-400/50",
    }
  };

  return (
    <div className={`glass-card-hover p-6 ${colorMap[prompt.color]?.card} transition-all duration-300`}>
      <div className="mb-4">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-3 ${colorMap[prompt.color]?.badge}`}>
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

      {/* Prompt preview with copy button */}
      <div className="bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border-secondary)] rounded-lg p-3">
        <div className="flex items-start justify-between gap-3">
          <code className="text-xs text-[var(--color-text-tertiary)] font-mono flex-1">
            {prompt.preview}
          </code>
          <CopyButton
            text={prompt.fullPrompt}
            label="Copy"
            size="sm"
            className="shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

// EXAMPLE 6: Multiple size variants
export function Example6_SizeVariants() {
  const text = "Sample text to copy";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm text-[var(--color-text-secondary)] w-24">Small:</span>
        <CopyButton text={text} size="sm" label="Copy" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-[var(--color-text-secondary)] w-24">Default:</span>
        <CopyButton text={text} size="default" label="Copy" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-[var(--color-text-secondary)] w-24">Large:</span>
        <CopyButton text={text} size="lg" label="Copy" />
      </div>
    </div>
  );
}

/**
 * RECOMMENDED INTEGRATION FOR AI TOOLS PAGE
 *
 * Update the prompts section in /src/app/ai-tools/page.tsx:
 */
export function RecommendedIntegration() {
  return `
// In /src/app/ai-tools/page.tsx

import CopyButton from "@/components/CopyButton";

// Add full prompt text to your prompts array:
const prompts = [
  {
    title: "Case Study Analysis",
    category: "Product Management",
    description: "Analyze a product experience and create a compelling PM case study with metrics, outcomes, and learnings.",
    preview: "Analyze [product/feature] and create a PM case study focusing on...",
    fullPrompt: \`You are a Product Management expert specializing in case study analysis.

Please analyze the following product/feature: [INSERT DETAILS]

Create a comprehensive PM case study that includes:
1. Problem Statement & Context
2. User Research & Insights
3. Solution Approach & Hypothesis
4. Implementation Strategy
5. Key Metrics & Results
6. Learnings & Takeaways

Focus on quantifiable outcomes and strategic decision-making.\`,
    color: "purple"
  },
  // ... more prompts
];

// Then in your JSX, update the prompt card:
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
  `;
}
