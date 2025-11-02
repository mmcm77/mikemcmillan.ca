import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools & Resources",
  description:
    "Specialized AI agents, prompts, and skills for product managers. Built with Claude Code to accelerate strategic thinking, feature planning, and product execution.",
  keywords: [
    "AI tools",
    "product management tools",
    "Claude Code agents",
    "AI prompts",
    "product strategy",
    "PM resources",
    "AI-powered workflows",
    "product management automation",
    "strategic planning tools",
    "feature prioritization",
  ],
  openGraph: {
    title: "AI Tools for Product Managers | Mike McMillan",
    description:
      "Specialized AI agents and prompts for product managers. Accelerate strategic thinking, feature planning, and execution with AI-powered tools.",
    type: "website",
    url: "https://mikemcmillan.ca/ai-tools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Tools for Product Managers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools for Product Managers",
    description:
      "Specialized AI agents and prompts built with Claude Code. Accelerate your product management workflow.",
    images: ["/og-image.png"],
  },
};

export default function AIToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
