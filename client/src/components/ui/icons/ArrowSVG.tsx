interface ArrowSVGProps {
  className?: string;
  fillColor?: string;
}

function ArrowSVG({ className, fillColor = 'currentColor' }: ArrowSVGProps) {
    return (
      <div className={`${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44 42"
          fill={`${fillColor}`}
        >
          <g clipPath="url(#clip0_3346_6663)">
            <path
              d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
              fill="#68769F"
            />
          </g>
          <defs>
            <clipPath id="clip0_3346_6663">
              <rect
                width="42"
                height="42"
                fill="white"
                transform="translate(0.666748)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
}

export default ArrowSVG;