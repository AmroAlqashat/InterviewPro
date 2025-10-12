interface ClockSVGProps {
  className: string;
  fillColor?: string;
}



function ClockSVG({ className, fillColor = "currentColor" }: ClockSVGProps) {
  return (
    <svg className={`${className}`} fill={`${fillColor}`} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

ClockSVG.propTypes = {
};

export default ClockSVG;
