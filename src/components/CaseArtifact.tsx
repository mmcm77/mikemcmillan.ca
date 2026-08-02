type ArtifactStep = {
  label: string;
  title: string;
  detail: string;
};

type CaseArtifactProps = {
  id: string;
  title: string;
  description: string;
  steps: ArtifactStep[];
  caption: string;
  loop?: boolean;
};

export default function CaseArtifact({
  id,
  title,
  description,
  steps,
  caption,
  loop = false,
}: CaseArtifactProps) {
  return (
    <figure className={`case-artifact${loop ? " case-artifact-loop" : ""}`} aria-labelledby={id}>
      <div className="case-artifact-header">
        <div>
          <p className="case-artifact-label">Product reconstruction</p>
          <h3 id={id}>{title}</h3>
        </div>
        <p>{description}</p>
      </div>

      <ol className="case-artifact-flow">
        {steps.map((step, index) => (
          <li key={step.title}>
            <div className="case-artifact-step">
              <span className="case-artifact-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="case-artifact-step-label">{step.label}</p>
              <h4>{step.title}</h4>
              <p>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <figcaption>
        <span>How to read it</span>
        {caption}
      </figcaption>
    </figure>
  );
}
