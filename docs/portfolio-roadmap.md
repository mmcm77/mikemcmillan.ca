# Portfolio Roadmap: Next Opportunities

## Current State (January 2025)

### ✅ Completed
- 3 flagship case studies (Okra, Buildable, Bookmark)
- Revenue PM positioning and hero redesign
- Animated metric counters and micro-interactions
- Scroll-triggered timeline with Framer Motion
- Enhanced design system with advanced hover effects
- Work history updated with Lightspeed & Interac

### 📊 Portfolio Grade: A
- **Design Quality:** Top 1%
- **Content Depth:** Strong (3 case studies with frameworks)
- **Technical Polish:** Advanced animations & interactions
- **SEO Foundation:** Metadata in place

---

## Roadmap Overview

### 🎯 Priority Matrix

| Priority | Effort | Impact | Timeline |
|----------|--------|--------|----------|
| P0 | Low | High | This week |
| P1 | Medium | High | 1-2 weeks |
| P2 | High | Medium | 1 month |
| P3 | Medium | Low | Future |

---

## P0: Immediate Wins (1-3 hours)

### 1. Add Testimonials/Recommendations
**Effort:** Low | **Impact:** High | **Time:** 1 hour

**Why:** Social proof is missing. Testimonials from colleagues/investors validate your impact.

**Implementation:**
```
Create new section on homepage:
- 2-3 quotes from colleagues at Okra, Bookmark, or Buildable
- Include name, title, company, and headshot/avatar
- Use card-based layout with subtle animations
```

**File:** `src/app/page.tsx`

**Design:**
- Quote cards with glassmorphism effect
- Rotating carousel (optional) or static grid
- Link to LinkedIn recommendations

---

### 2. Add "Technologies & Skills" Section
**Effort:** Low | **Impact:** Medium | **Time:** 30 minutes

**Why:** Visitors want to know your technical depth and methodology expertise.

**Implementation:**
```
Add section to homepage or create /skills page:

Categories:
- Product Management: Roadmapping, Prioritization (RICE), User Research, A/B Testing
- Technical: REST APIs, SQL, Python, Data Analytics, System Design
- Go-to-Market: Positioning, Pricing, Sales Enablement, PLG
- Tools: Jira, Figma, Mixpanel, Amplitude, Notion
```

**File:** `src/app/page.tsx` or new `src/app/skills/page.tsx`

---

### 3. Performance Quick Wins
**Effort:** Low | **Impact:** Medium | **Time:** 30 minutes

**Why:** Remove unused dependencies identified by performance-optimizer agent.

**Action Items:**
```bash
# Remove unused Radix UI packages
npm uninstall @radix-ui/react-checkbox @radix-ui/react-label @radix-ui/react-slot

# Verify no build errors
npm run build
```

**Expected Savings:** ~95KB bundle size reduction

---

### 4. Add SEO Metadata
**Effort:** Low | **Impact:** High | **Time:** 1 hour

**Why:** Missing Open Graph and Twitter Card metadata for social sharing.

**Implementation:**

**File:** `src/app/layout.tsx`
```tsx
export const metadata: Metadata = {
  // ... existing metadata
  openGraph: {
    title: "Mike McMillan | Product Manager",
    description: "Product leader with 10+ years building revenue-generating products. $50M+ raised, 100+ products shipped.",
    url: "https://mikemcmillan.ca",
    siteName: "Mike McMillan",
    images: [
      {
        url: "/og-image.png", // Create this
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike McMillan | Product Manager",
    description: "Product leader with 10+ years building revenue-generating products.",
    images: ["/og-image.png"],
  },
};
```

**Create:** `public/og-image.png` (1200x630px social sharing image)

---

### 5. Add robots.txt and sitemap.xml
**Effort:** Low | **Impact:** Medium | **Time:** 20 minutes

**Why:** Essential for SEO crawling and indexing.

**Create:** `public/robots.txt`
```
User-agent: *
Allow: /

Sitemap: https://mikemcmillan.ca/sitemap.xml
```

**Create:** `src/app/sitemap.ts`
```tsx
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mikemcmillan.ca',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://mikemcmillan.ca/work',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mikemcmillan.ca/work/okra',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://mikemcmillan.ca/work/buildable',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://mikemcmillan.ca/work/bookmark',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
```

---

## P1: Content Expansion (1-2 weeks)

### 6. Create Case Studies for Recent Positions
**Effort:** High | **Impact:** High | **Time:** 4-6 hours each

**Target:**
1. **Lightspeed Commerce** (current role - partial case study)
2. **Interac Corp** (digital wallet infrastructure)

**Why:** Demonstrates current expertise and recent impact.

**Structure:** Follow Okra/Buildable/Bookmark template
- Challenge
- Strategic Approach (3-5 frameworks)
- Impact & Results (with metrics where possible)
- Key Learnings (3-5 insights)

**Constraint:** May need to be more general/higher-level due to NDA/ongoing work.

---

### 7. Add "Product Philosophy" Section
**Effort:** Medium | **Impact:** Medium | **Time:** 2 hours

**Why:** Differentiation. Shows how you think about product management.

**Content Ideas:**
- Your approach to prioritization
- How you balance user needs vs. business goals
- Framework for 0-to-1 product development
- Thoughts on product-led growth
- Data vs. intuition in decision-making

**Implementation:**
- Create `/philosophy` page
- Or add to homepage as new section
- Use conversational, opinionated tone
- Include 2-3 specific examples from your work

---

### 8. Create "Projects" or "Side Projects" Section
**Effort:** Medium | **Impact:** Medium | **Time:** 3 hours

**Why:** Shows curiosity, continuous learning, technical depth.

**Examples:**
- Personal projects or prototypes
- Open source contributions
- Product experiments
- Writing/thought leadership
- Tools you've built for PMs

**Format:** Card grid with links to GitHub, blog posts, or live demos

---

### 9. Add Blog/Writing Section
**Effort:** High | **Impact:** Medium | **Time:** Ongoing

**Why:** Establishes thought leadership and drives organic traffic.

**Initial Topics (based on your case studies):**
1. "How to Navigate Agency-to-Product Pivots" (from Buildable)
2. "Building Products in Emerging Markets: Lessons from Africa" (from Okra)
3. "AI Positioning: More Than Just Marketing" (from Bookmark)
4. "The Revenue PM: Why PMs Should Think Like Business Owners"
5. "0-to-1 Product Playbook: From Idea to First Revenue"

**Implementation:**
- Create `/blog` page
- Use MDX for blog posts
- Add RSS feed
- Share on LinkedIn

---

## P2: Design & UX Enhancements (1 month)

### 10. Add Data Visualizations to Case Studies
**Effort:** High | **Impact:** Medium | **Time:** 4-6 hours

**Why:** Make metrics more engaging and memorable.

**Examples:**
- **Okra:** Timeline showing geographic expansion (Nigeria → SA → Kenya)
- **Buildable:** Funnel showing agency/product revenue mix over time
- **Bookmark:** Graph showing MVP → acquisition journey

**Tools:**
- Recharts or Chart.js for interactive charts
- Custom SVG animations for timelines
- Scroll-triggered reveals

---

### 11. Implement Scroll-Triggered Section Animations
**Effort:** Medium | **Impact:** Medium | **Time:** 3 hours

**Why:** Professional polish, makes sections feel more dynamic.

**Target Sections:**
- Homepage "My Approach" section
- Case study challenge/results sections
- Stats grids on case studies

**Implementation:**
- Use Framer Motion `whileInView` prop
- Fade in + slide up animations
- Stagger children for lists

---

### 12. Add Dark/Light Mode Toggle
**Effort:** Medium | **Impact:** Low | **Time:** 2 hours

**Why:** User preference. Currently only dark mode.

**Implementation:**
- Add toggle button in navigation
- Use Next.js `next-themes` package
- Persist preference in localStorage
- Ensure all custom colors support both modes

**Note:** Low priority since dark mode is trendy for portfolios.

---

### 13. Create 404 and Error Pages
**Effort:** Low | **Impact:** Low | **Time:** 1 hour

**Why:** Brand consistency when users hit broken links.

**Files:**
- `src/app/not-found.tsx` (404 page)
- `src/app/error.tsx` (error boundary)

**Design:** Match existing aesthetic, add helpful navigation links

---

## P3: Advanced Features (Future)

### 14. Add Analytics & Tracking
**Effort:** Low | **Impact:** Medium | **Time:** 1 hour

**Why:** Understand visitor behavior and optimize conversion.

**Options:**
- Google Analytics 4
- Plausible Analytics (privacy-friendly)
- Vercel Analytics (if deployed on Vercel)

**Track:**
- Page views
- Case study engagement
- CTA clicks (LinkedIn, GitHub)
- Time on page

---

### 15. Implement Feature Flags for A/B Testing
**Effort:** Medium | **Impact:** Low | **Time:** 2 hours

**Why:** Test different hero copy, CTA text, or layout variations.

**Tools:**
- Vercel Edge Config
- LaunchDarkly
- Split.io

**Example Tests:**
- Hero headline variations
- CTA button text ("Connect on LinkedIn" vs "Let's Talk")
- Case study layout (long-form vs. summary cards)

---

### 16. Create Email Newsletter Signup
**Effort:** Medium | **Impact:** Low | **Time:** 2 hours

**Why:** Build audience for future blog content or product launches.

**Implementation:**
- Add signup form to homepage footer
- Use ConvertKit, Mailchimp, or Buttondown
- Simple design, minimal friction

---

### 17. Add Interactive Resume/CV Download
**Effort:** Low | **Impact:** Medium | **Time:** 1 hour

**Why:** Some recruiters/companies prefer traditional resumes.

**Implementation:**
- Create PDF version of work history
- Add download button on /work page
- Keep design minimal and ATS-friendly

---

### 18. Implement Search Functionality
**Effort:** High | **Impact:** Low | **Time:** 4-6 hours

**Why:** Help visitors find specific content quickly (useful if blog grows).

**Tools:**
- Algolia DocSearch
- Flexsearch (client-side)
- Fuse.js (fuzzy search)

**Search Across:**
- Case studies
- Blog posts (when added)
- Work history

---

## Strategic Opportunities

### 19. Expand Into Consulting/Advisory Brand
**Effort:** High | **Impact:** High | **Time:** Ongoing

**Why:** Leverage case studies and expertise to offer consulting.

**Actions:**
- Create "/consulting" or "/advisory" page
- Outline service offerings (product strategy, 0-to-1 workshops, fractional PM)
- Add pricing or "Let's talk" CTA
- Include calendar booking link (Calendly)

---

### 20. Build Personal Brand on LinkedIn
**Effort:** High | **Impact:** High | **Time:** Ongoing

**Why:** Drive traffic to portfolio, establish thought leadership.

**Actions:**
- Share weekly posts about PM lessons from case studies
- Cross-link to portfolio case studies
- Engage with PM community
- Share portfolio link in LinkedIn featured section

---

### 21. Create Video Content
**Effort:** Very High | **Impact:** Medium | **Time:** Ongoing

**Why:** Some audiences prefer video. Shows personality.

**Ideas:**
- 2-minute case study walkthroughs
- "How I built X product" explainers
- PM career advice
- Product teardowns

**Platform:** YouTube or LinkedIn native video

---

## Technical Debt & Maintenance

### 22. Set Up Automated Testing
**Effort:** Medium | **Impact:** Medium | **Time:** 3 hours

**Why:** Prevent regressions as portfolio grows.

**Tests:**
- Snapshot tests for key pages
- Link validation (no 404s)
- Performance budgets (Lighthouse)

**Tools:** Playwright or Cypress

---

### 23. Improve Accessibility (WCAG AAA)
**Effort:** Medium | **Impact:** Medium | **Time:** 2 hours

**Current:** WCAG AA compliant (14:1+ contrast ratios)

**Improvements:**
- Add skip navigation links
- Improve screen reader labels
- Keyboard navigation testing
- Focus state enhancements

---

### 24. Add CI/CD Pipeline
**Effort:** Low | **Impact:** Medium | **Time:** 1 hour

**Why:** Automate testing and deployment.

**GitHub Actions Workflow:**
- Run tests on PR
- Lint code
- Build check
- Auto-deploy to production on merge

---

## Metrics for Success

Track these KPIs to measure portfolio effectiveness:

### Traffic
- [ ] Monthly unique visitors
- [ ] Pages per session
- [ ] Avg. time on site
- [ ] Bounce rate

### Engagement
- [ ] Case study completion rate
- [ ] CTA click-through rate (LinkedIn, GitHub)
- [ ] Contact form submissions (if added)

### SEO
- [ ] Organic search traffic
- [ ] Ranking for "product manager portfolio"
- [ ] Backlinks from other sites

### Career Impact
- [ ] Interview requests per month
- [ ] Quality of opportunities
- [ ] Recruiter inbound messages

---

## Prioritization Recommendation

**This Week:**
1. ✅ Add testimonials (P0 #1)
2. ✅ Add SEO metadata (P0 #4)
3. ✅ Remove unused dependencies (P0 #3)

**Next 2 Weeks:**
4. ✅ Add robots.txt + sitemap (P0 #5)
5. ✅ Create Interac case study (P1 #6)
6. ✅ Add product philosophy section (P1 #7)

**Next Month:**
7. ✅ Start blog with 2-3 initial posts (P1 #9)
8. ✅ Add data visualizations to case studies (P2 #10)
9. ✅ Implement analytics tracking (P3 #14)

**Q1 2025 Goals:**
- 5 total case studies (add Lightspeed + Interac)
- Blog with 5-10 posts
- 1,000 monthly visitors
- 10+ quality LinkedIn connections from portfolio

---

## Notes

### What Makes Top 1% Portfolios Stand Out

Based on analysis of leading PM portfolios:

1. **Deep Case Studies** ✅ (You have this)
   - Not just bullet points
   - Show strategic thinking
   - Quantified impact

2. **Unique Point of View** 🟡 (Partially there)
   - Add philosophy section
   - Share contrarian opinions
   - Show personality

3. **Proof of Expertise** ✅ (You have this)
   - Multiple exits
   - $50M+ raised
   - 100+ products

4. **Active Presence** 🔴 (Missing)
   - Blog or thought leadership
   - Speaking engagements
   - Community contributions

5. **Professional Polish** ✅ (You have this)
   - Modern design
   - Smooth animations
   - Technical excellence

**Gap to A+:** Add thought leadership (blog/writing) and expand active presence.

---

## Maintenance Schedule

### Weekly
- Review analytics for insights
- Check for broken links
- Update case studies with new metrics

### Monthly
- Publish new blog post
- Update work timeline if role changes
- Review and update SEO metadata

### Quarterly
- Audit dependencies for updates
- Performance review (Lighthouse)
- Accessibility audit
- Content refresh for case studies

---

*Last Updated: January 2025*
*Maintained by: Mike McMillan*
