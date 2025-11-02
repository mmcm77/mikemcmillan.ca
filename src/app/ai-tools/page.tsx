"use client";

import React from "react";
import { Spotlight, GridBackground } from "@/components/ui/spotlight-new";

export default function AITools() {
  const agents = [
    {
      name: "Product Strategy Advisor",
      category: "Strategy",
      description: "Helps with strategic product thinking, feature planning, and prioritization decisions. Use proactively when making product decisions.",
      useCases: ["Feature Planning", "Requirement Refinement", "Prioritization", "Metrics Definition"],
      color: "purple"
    },
    {
      name: "Component Architect",
      category: "Development",
      description: "Specialized in building React components, implementing shadcn/ui, design systems, and ensuring accessibility standards.",
      useCases: ["React Components", "Design Systems", "Form Validation", "Accessibility"],
      color: "blue"
    },
    {
      name: "Visual Design Expert",
      category: "Design",
      description: "Provides visual design guidance, color palettes, typography systems, and modern web aesthetics for portfolios.",
      useCases: ["Color Palettes", "Typography", "Visual Hierarchy", "Accessibility"],
      color: "pink"
    },
    {
      name: "Performance Optimizer",
      category: "Performance",
      description: "Next.js performance optimization, Lighthouse scores, Core Web Vitals, bundle size reduction, and best practices.",
      useCases: ["Lighthouse Optimization", "Core Web Vitals", "Bundle Size", "Code Splitting"],
      color: "green"
    },
    {
      name: "Animation Specialist",
      category: "Animation",
      description: "Implements web animations with Framer Motion, GSAP, scroll-triggered effects, and micro-interactions.",
      useCases: ["Framer Motion", "Scroll Animations", "Micro-interactions", "Page Transitions"],
      color: "orange"
    },
    {
      name: "Data Viz Specialist",
      category: "Visualization",
      description: "Creates data visualizations, implements charts, builds dashboards, and designs KPI displays.",
      useCases: ["Charts & Graphs", "Dashboards", "KPI Displays", "Interactive Metrics"],
      color: "cyan"
    }
  ];

  const prompts = [
    {
      title: "Case Study Analysis",
      category: "Product Management",
      description: "Analyze a product experience and create a compelling PM case study with metrics, outcomes, and learnings.",
      preview: "Analyze [product/feature] and create a PM case study focusing on...",
      color: "purple"
    },
    {
      title: "Feature Prioritization Framework",
      category: "Strategy",
      description: "Evaluate and prioritize features using RICE, impact/effort matrix, or custom frameworks.",
      preview: "Help me prioritize these features using the RICE framework...",
      color: "blue"
    },
    {
      title: "User Story Generator",
      category: "Requirements",
      description: "Generate well-structured user stories with acceptance criteria from feature descriptions.",
      preview: "Create user stories for [feature] including acceptance criteria...",
      color: "green"
    },
    {
      title: "Component Architecture Review",
      category: "Development",
      description: "Review React component architecture, suggest improvements, and identify refactoring opportunities.",
      preview: "Review this component structure and suggest architectural improvements...",
      color: "orange"
    }
  ];

  const skills = [
    {
      name: "Product Strategy Canvas",
      description: "Interactive canvas for mapping product strategy, user needs, and business objectives.",
      status: "Coming Soon",
      color: "purple"
    },
    {
      name: "Metrics Dashboard Builder",
      description: "Tool for defining KPIs, success metrics, and instrumentation strategy for new features.",
      status: "Coming Soon",
      color: "blue"
    },
    {
      name: "A/B Test Planner",
      description: "Framework for designing experiments, defining hypotheses, and calculating sample sizes.",
      status: "Coming Soon",
      color: "pink"
    }
  ];

  const colorMap = {
    purple: {
      badge: "bg-purple-400/10 border-purple-400/30 text-purple-400",
      card: "border-purple-400/30 hover:border-purple-400/50",
      tag: "bg-purple-400/10 text-purple-400 border-purple-400/30"
    },
    blue: {
      badge: "bg-blue-400/10 border-blue-400/30 text-blue-400",
      card: "border-blue-400/30 hover:border-blue-400/50",
      tag: "bg-blue-400/10 text-blue-400 border-blue-400/30"
    },
    pink: {
      badge: "bg-pink-400/10 border-pink-400/30 text-pink-400",
      card: "border-pink-400/30 hover:border-pink-400/50",
      tag: "bg-pink-400/10 text-pink-400 border-pink-400/30"
    },
    green: {
      badge: "bg-green-400/10 border-green-400/30 text-green-400",
      card: "border-green-400/30 hover:border-green-400/50",
      tag: "bg-green-400/10 text-green-400 border-green-400/30"
    },
    orange: {
      badge: "bg-orange-400/10 border-orange-400/30 text-orange-400",
      card: "border-orange-400/30 hover:border-orange-400/50",
      tag: "bg-orange-400/10 text-orange-400 border-orange-400/30"
    },
    cyan: {
      badge: "bg-cyan-400/10 border-cyan-400/30 text-cyan-400",
      card: "border-cyan-400/30 hover:border-cyan-400/50",
      tag: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30"
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 relative">
        <GridBackground />
        <Spotlight />

        <div className="relative z-10 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/40 mb-6">
            <span className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
              AI Tools & Resources
            </span>
          </div>

          <h1 className="text-display-hero mb-6">
            <span className="text-gradient">AI-Powered</span> Tools for Product Managers
          </h1>

          <p className="text-body-enhanced max-w-3xl text-[var(--color-text-tertiary)] mb-8">
            A collection of AI agents, prompts, and skills designed to enhance product management workflows.
            Built with Claude Code to accelerate decision-making, strategic thinking, and execution.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#agents" className="btn-primary">
              Explore Agents
            </a>
            <a href="#prompts" className="btn-secondary">
              Browse Prompts
            </a>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-16 sm:py-20">
        <div className="mb-12">
          <h2 className="text-heading-section mb-4">AI Agents</h2>
          <p className="text-body-enhanced text-[var(--color-text-tertiary)] max-w-3xl">
            Specialized agents built for Claude Code that provide expert guidance across product strategy,
            development, design, and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div
              key={index}
              className={`glass-card-hover p-6 ${colorMap[agent.color as keyof typeof colorMap].card} transition-all duration-300`}
            >
              <div className="mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-3 ${colorMap[agent.color as keyof typeof colorMap].badge}`}>
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    {agent.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                  {agent.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  {agent.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wide mb-2">
                  Use Cases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {agent.useCases.map((useCase, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-full border ${colorMap[agent.color as keyof typeof colorMap].tag}`}
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompts Section */}
      <section id="prompts" className="py-16 sm:py-20">
        <div className="mb-12">
          <h2 className="text-heading-section mb-4">Prompt Library</h2>
          <p className="text-body-enhanced text-[var(--color-text-tertiary)] max-w-3xl">
            Curated prompts for common product management tasks, from feature planning to technical
            architecture reviews.
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

              <div className="bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border-secondary)] rounded-lg p-3">
                <code className="text-xs text-[var(--color-text-tertiary)] font-mono">
                  {prompt.preview}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="mb-12">
          <h2 className="text-heading-section mb-4">Custom Skills</h2>
          <p className="text-body-enhanced text-[var(--color-text-tertiary)] max-w-3xl">
            Specialized skills and tools for product management workflows. More coming soon!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`glass-card-hover p-6 ${colorMap[skill.color as keyof typeof colorMap].card} transition-all duration-300 opacity-75`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  {skill.description}
                </p>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bg-secondary)]/60 border border-[var(--color-border-secondary)] text-xs font-semibold text-[var(--color-text-tertiary)]">
                  {skill.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pb-24">
        <div className="text-center">
          <h2 className="text-heading-section mb-6">Want to Build Your Own?</h2>
          <p className="text-body-enhanced mb-10 max-w-2xl mx-auto text-[var(--color-text-tertiary)]">
            These tools are built with Claude Code. Check out the documentation to create your own
            AI agents, prompts, and skills.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://docs.claude.com/en/docs/claude-code"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Code Docs
            </a>
            <a
              href="https://github.com/mmcm77/mikemcmillan.ca"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
