import { useState } from 'react';


import './assets.css';


export interface InfoTooltipProps {
  tooltiptext: string;
  circleI?: string;
  children?: React.ReactNode;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  tooltiptext,
  circleI,
  children,
}) => {
  const [showToolTip, setShowToolTip] = useState(false);
  return (
    <div className="info-tool-tip">
      <img
        src={circleI}
        alt="icon"
        onMouseEnter={() => setShowToolTip(true)}
        onMouseLeave={() => setShowToolTip(false)}
        style={{ cursor: 'pointer' }}
      />
      {children}

      {showToolTip && <div className="tooltip-div">{tooltiptext}</div>}
      {children}
    </div>
  );
};
