import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import './CodeDemo.css';

export interface CodeDemoProps {
  children: ReactNode;
  code: string;
}

export const CodeDemo: React.FC<CodeDemoProps> = ({ children, code }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="code-demo">
      <div className="code-demo-live">
        {children}
      </div>
      <div className="code-demo-actions">
        <button onClick={() => setShowCode(!showCode)}>
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>
      {showCode && (
        <div className="code-demo-source">
          <Highlight theme={themes.github} code={code} language="tsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      )}
    </div>
  );
};
