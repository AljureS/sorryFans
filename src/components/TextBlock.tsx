import { memo } from 'react';

interface TextBlockProps {
  paragraph1?: string;
  paragraph2?: string;
  steps?: string[];
}

function TextBlock({ paragraph1, paragraph2, steps }: TextBlockProps) {
  return (
    <div id="component-text-block" className="text-block-container">
      <div className="text-block-content">
        {paragraph1 && (
          <p className="text-block-p1">{paragraph1}</p>
        )}

        {paragraph2 && (
          <p className="text-block-p2">{paragraph2}</p>
        )}

        {steps && steps.length > 0 && (
          <div className="steps-container">
            <ol className="steps-list">
              {steps.map((step, index) => (
                <li key={index} className="step-item">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(TextBlock);
