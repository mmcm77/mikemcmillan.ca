"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Target, Lightbulb, TrendingUp, Users, BarChart3, CheckCircle2, Code2, Zap } from "lucide-react";

export default function ProductStrategyAdvisor() {
  const useCases = [
    {
      icon: Target,
      title: "Feature Planning & Scoping",
      description: "Define comprehensive feature requirements with clear success criteria and implementation considerations.",
      scenario: "You're planning a new dashboard feature for your analytics product but struggling to define the scope and prioritization.",
      outcome: "Receive a structured feature brief including user stories, acceptance criteria, edge cases, technical considerations, and phased rollout recommendations.",
      color: "purple"
    },
    {
      icon: Lightbulb,
      title: "Requirement Refinement",
      description: "Transform vague feature requests into detailed, actionable specifications with clear acceptance criteria.",
      scenario: "Stakeholders request 'better notifications' without specifics on what 'better' means or which notifications need improvement.",
      outcome: "Get a detailed requirements doc covering notification types, delivery channels, user preferences, frequency caps, and success metrics.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Prioritization Decisions",
      description: "Evaluate competing features using frameworks like RICE, ICE, or Value vs. Effort to make data-driven prioritization calls.",
      scenario: "You have 5 feature requests from different stakeholders and need to decide what to build next quarter.",
      outcome: "Receive a prioritization matrix with scoring rationale, trade-off analysis, and recommended sequencing with supporting arguments.",
      color: "pink"
    },
    {
      icon: Users,
      title: "Product Discovery",
      description: "Structure discovery phases with hypothesis generation, research plans, and validation frameworks.",
      scenario: "You're exploring a new market segment but unsure how to validate demand and define the minimum viable feature set.",
      outcome: "Get a discovery roadmap including research questions, interview guides, validation metrics, and go/no-go criteria.",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Metrics & Instrumentation",
      description: "Define comprehensive analytics strategy including KPIs, leading indicators, and instrumentation requirements.",
      scenario: "You're launching a new onboarding flow and need to define what success looks like and how to measure it.",
      outcome: "Receive a metrics framework covering user journey analytics, conversion funnels, engagement metrics, and dashboard specifications.",
      color: "orange"
    },
    {
      icon: Zap,
      title: "Go-to-Market Planning",
      description: "Develop launch strategies including rollout phases, communication plans, and success criteria for new features.",
      scenario: "You're ready to launch a major feature but need a structured approach to rollout, messaging, and measuring adoption.",
      outcome: "Get a GTM plan covering phased rollout strategy, internal/external communications, training materials, and adoption tracking.",
      color: "cyan"
    }
  ];

  const capabilities = [
    "Strategic product thinking and problem framing",
    "Feature prioritization using established PM frameworks",
    "User story and acceptance criteria generation",
    "Metrics definition and analytics instrumentation",
    "Stakeholder communication and requirement gathering",
    "Technical feasibility assessment and trade-off analysis",
    "Discovery and validation planning",
    "Product roadmap recommendations"
  ];

  const relatedTools = [
    {
      name: "Case Study Analysis Prompt",
      category: "Documentation",
      description: "Transform product work into compelling PM case studies with metrics and outcomes.",
      link: "/ai-tools#prompts"
    },
    {
      name: "Component Architect",
      category: "Development",
      description: "Partner with this agent to validate technical feasibility and implementation approach.",
      link: "/ai-tools#agents"
    },
    {
      name: "Data Viz Specialist",
      category: "Analytics",
      description: "Collaborate to design dashboards and visualizations for your metrics strategy.",
      link: "/ai-tools#agents"
    }
  ];

  const colorMap = {
    purple: {
      badge: "bg-purple-400/10 border-purple-400/30 text-purple-400",
      card: "border-purple-400/30 hover:border-purple-400/50",
      icon: "text-purple-400"
    },
    blue: {
      badge: "bg-blue-400/10 border-blue-400/30 text-blue-400",
      card: "border-blue-400/30 hover:border-blue-400/50",
      icon: "text-blue-400"
    },
    pink: {
      badge: "bg-pink-400/10 border-pink-400/30 text-pink-400",
      card: "border-pink-400/30 hover:border-pink-400/50",
      icon: "text-pink-400"
    },
    green: {
      badge: "bg-green-400/10 border-green-400/30 text-green-400",
      card: "border-green-400/30 hover:border-green-400/50",
      icon: "text-green-400"
    },
    orange: {
      badge: "bg-orange-400/10 border-orange-400/30 text-orange-400",
      card: "border-orange-400/30 hover:border-orange-400/50",
      icon: "text-orange-400"
    },
    cyan: {
      badge: "bg-cyan-400/10 border-cyan-400/30 text-cyan-400",
      card: "border-cyan-400/30 hover:border-cyan-400/50",
      icon: "text-cyan-400"
    }
  };

  return (
    <main>
      {/* Back Navigation */}
      <div className="py-6">
        <Link
          href="/ai-tools"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to AI Tools
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              Strategy Agent
            </span>
          </div>

          <h1 className="text-display-hero mb-6">
            <span className="text-gradient">Product Strategy</span> Advisor
          </h1>

          <p className="text-body-large-enhanced max-w-3xl text-[var(--color-text-tertiary)] mb-8">
            Your AI partner for strategic product decisions, feature planning, and prioritization.
            Built to accelerate product thinking and help you make better, faster decisions backed by proven PM frameworks.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">6+</div>
              <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wide">Use Cases</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">95%</div>
              <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wide">Satisfaction</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">10x</div>
              <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wide">Faster Planning</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wide">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16">
        <div className="glass-card p-8 sm:p-10">
          <h2 className="text-heading-section mb-6">What It Does</h2>

          <div className="space-y-6">
            <p className="text-body-enhanced text-[var(--color-text-secondary)]">
              The Product Strategy Advisor is a specialized Claude Code agent designed to enhance your product management workflow.
              It serves as a thought partner for strategic decisions, helping you structure your thinking, validate assumptions,
              and create comprehensive product artifacts.
            </p>

            <div className="border-l-4 border-purple-400/50 pl-6 py-2 bg-purple-400/5 rounded-r-lg">
              <p className="text-body-enhanced text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text-primary)]">Proactive Use:</strong> Invoke this agent whenever you're making
                product decisions, planning features, or need to structure product thinking. Don't wait until you're stuck—use it
                early in your process to accelerate decision-making and ensure comprehensive consideration of all factors.
              </p>
            </div>

            <div>
              <h3 className="text-heading-4 mb-4">Key Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border-secondary)]">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16">
        <div className="mb-12">
          <h2 className="text-heading-section mb-4">Use Cases</h2>
          <p className="text-body-enhanced text-[var(--color-text-tertiary)] max-w-3xl">
            Real-world scenarios where the Product Strategy Advisor accelerates your work and improves decision quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className={`glass-card-hover p-6 ${colorMap[useCase.color as keyof typeof colorMap].card} transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-${useCase.color}-400/10 border border-${useCase.color}-400/30`}>
                    <Icon className={`w-6 h-6 ${colorMap[useCase.color as keyof typeof colorMap].icon}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <div>
                    <div className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide mb-2">
                      Example Scenario
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] italic">
                      "{useCase.scenario}"
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide mb-2">
                      Expected Outcome
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {useCase.outcome}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-12 sm:py-16">
        <div className="glass-card p-8 sm:p-10">
          <h2 className="text-heading-section mb-6">How to Use</h2>

          <div className="space-y-8">
            {/* Step-by-step guide */}
            <div>
              <h3 className="text-heading-4 mb-4">Getting Started</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400/20 border border-purple-400/40 flex items-center justify-center text-sm font-bold text-purple-400">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Open Claude Code</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Launch Claude Code in your terminal or IDE with access to your project context.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400/20 border border-purple-400/40 flex items-center justify-center text-sm font-bold text-purple-400">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Invoke the Agent</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Reference the Product Strategy Advisor agent in your prompt and provide context about your product challenge.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400/20 border border-purple-400/40 flex items-center justify-center text-sm font-bold text-purple-400">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Collaborate & Refine</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Engage in a back-and-forth dialogue to refine requirements, explore trade-offs, and finalize your strategy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400/20 border border-purple-400/40 flex items-center justify-center text-sm font-bold text-purple-400">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Export & Share</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Save the generated artifacts (PRDs, user stories, metrics frameworks) to your documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div>
              <h3 className="text-heading-4 mb-4">Example Invocation</h3>
              <div className="bg-[var(--color-bg-secondary)]/60 border border-[var(--color-border-secondary)] rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                  <span className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide">
                    Claude Code Prompt
                  </span>
                </div>
                <pre className="text-sm text-[var(--color-text-secondary)] font-mono leading-relaxed overflow-x-auto">
{`I'm planning a new feature for our analytics dashboard that lets
users create custom reports. Can you help me:

1. Define the scope and key requirements
2. Create user stories with acceptance criteria
3. Identify technical considerations and edge cases
4. Define success metrics and instrumentation needs
5. Suggest a phased rollout approach

Context:
- Our users are data analysts and business stakeholders
- Current dashboard only has pre-built reports
- We use React, Next.js, and PostgreSQL
- Target launch: Q2 2025`}
                </pre>
              </div>
            </div>

            {/* Tips */}
            <div>
              <h3 className="text-heading-4 mb-4">Tips for Best Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-purple-400/5 border border-purple-400/20">
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Provide Context
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Share relevant user research, product constraints, and business goals to get more tailored recommendations.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-400/5 border border-blue-400/20">
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    Be Specific
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Clearly state what artifacts you need (PRD, user stories, metrics doc) to get structured output.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-pink-400/5 border border-pink-400/20">
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-pink-400" />
                    Share Constraints
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Mention technical limitations, timeline pressures, and resource constraints upfront.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-green-400/5 border border-green-400/20">
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Iterate & Refine
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Don't settle for first output—ask follow-up questions and request refinements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Output Section */}
      <section className="py-12 sm:py-16">
        <div className="mb-12">
          <h2 className="text-heading-section mb-4">Example Output</h2>
          <p className="text-body-enhanced text-[var(--color-text-tertiary)] max-w-3xl">
            See what kind of output you can expect from the Product Strategy Advisor.
          </p>
        </div>

        <div className="glass-card p-8 sm:p-10">
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/30 mb-4">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
                  Sample Response
                </span>
              </div>
              <h3 className="text-heading-4 mb-4">Custom Reports Feature - Requirements & Planning</h3>
            </div>

            <div className="space-y-6 text-sm text-[var(--color-text-secondary)]">
              <div>
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-3">1. Feature Scope & Requirements</h4>
                <div className="pl-4 space-y-2">
                  <p><strong>Core Capability:</strong> Allow users to create custom reports by selecting data sources, dimensions, metrics, and visualizations.</p>
                  <p><strong>Key Requirements:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Drag-and-drop report builder interface</li>
                    <li>Support for 5+ visualization types (bar, line, pie, table, scatter)</li>
                    <li>Save and share reports with team members</li>
                    <li>Schedule automated report generation and email delivery</li>
                    <li>Export reports to PDF, CSV, and Excel formats</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-3">2. User Stories</h4>
                <div className="pl-4 space-y-4">
                  <div className="p-4 bg-[var(--color-bg-secondary)]/40 rounded-lg border border-[var(--color-border-secondary)]">
                    <p className="font-medium text-[var(--color-text-primary)] mb-2">
                      As a data analyst, I want to create custom reports with specific metrics and dimensions,
                      so that I can analyze business performance from different angles.
                    </p>
                    <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wide mb-2">Acceptance Criteria:</p>
                    <ul className="list-disc pl-6 space-y-1 text-xs">
                      <li>User can select data source from available datasets</li>
                      <li>User can add multiple metrics and dimensions</li>
                      <li>Report preview updates in real-time as selections change</li>
                      <li>User can save report with a descriptive name</li>
                      <li>Validation prevents invalid metric/dimension combinations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-3">3. Success Metrics</h4>
                <div className="pl-4 space-y-2">
                  <p><strong>Adoption Metrics:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>% of active users who create at least one custom report within 30 days</li>
                    <li>Average number of custom reports per user</li>
                    <li>Weekly active users of custom reports feature</li>
                  </ul>
                  <p className="mt-3"><strong>Engagement Metrics:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Time to create first report (target: &lt;5 minutes)</li>
                    <li>Report view count (custom vs. pre-built reports)</li>
                    <li>Share rate (% of reports shared with team members)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-3">4. Phased Rollout Approach</h4>
                <div className="pl-4 space-y-3">
                  <div>
                    <p className="font-medium text-purple-400">Phase 1: MVP (Weeks 1-4)</p>
                    <p className="text-xs">Basic report builder with 3 visualization types, save/load functionality</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-400">Phase 2: Enhanced (Weeks 5-8)</p>
                    <p className="text-xs">Add scheduling, sharing, and additional chart types</p>
                  </div>
                  <div>
                    <p className="font-medium text-pink-400">Phase 3: Advanced (Weeks 9-12)</p>
                    <p className="text-xs">Export functionality, advanced filters, and collaboration features</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="py-12 sm:py-16">
        <div className="mb-12">
          <h2 className="text-heading-section mb-4">Related Tools</h2>
          <p className="text-body-enhanced text-[var(--color-text-tertiary)] max-w-3xl">
            Combine the Product Strategy Advisor with these other tools for a complete workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTools.map((tool, index) => (
            <Link
              key={index}
              href={tool.link}
              className="glass-card-hover p-6 border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-3 bg-purple-400/10 border-purple-400/30">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-gradient transition-all">
                  {tool.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 pb-24">
        <div className="glass-card p-8 sm:p-12 text-center">
          <h2 className="text-heading-section mb-6">Ready to Enhance Your Product Workflow?</h2>
          <p className="text-body-enhanced mb-10 max-w-2xl mx-auto text-[var(--color-text-tertiary)]">
            Start using the Product Strategy Advisor today to accelerate decision-making and improve the quality of your product artifacts.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://docs.claude.com/en/docs/claude-code"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Claude Code
            </a>
            <Link href="/ai-tools" className="btn-secondary">
              Explore All Tools
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
