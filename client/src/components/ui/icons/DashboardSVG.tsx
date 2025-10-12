interface DashboardSVGProps {
  className: string;
  fillColor?: string;
}



function DashboardSVG({ className, fillColor = "currentColor" }: DashboardSVGProps) {
  return (
    <svg className={`${className}`} fill={`${fillColor}`} viewBox="0 0 24 24">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  );
}

export default DashboardSVG;
