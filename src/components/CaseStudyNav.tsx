type CaseStudyNavItem = {
  href: string;
  label: string;
};

export default function CaseStudyNav({ items }: { items: CaseStudyNavItem[] }) {
  return (
    <nav className="case-jump-nav" aria-label="Case study sections">
      <span>In this story</span>
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            <a href={item.href}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
