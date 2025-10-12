import { useState, useRef, useEffect } from "react";

interface DropdownMenuProps {
  options?: string[] | { label: string; value: string; disabled?: boolean; icon?: any }[];
  defaultValue?: string;
  onSelect: (option: string | { label: string; value: string }) => void;
  placeholder?: string;
  className?: string;
  variant?: string;
  icon?: any;
  disabled?: boolean;
}

const DropdownMenu = ({ 
  options = [], 
  defaultValue = "", 
  onSelect, 
  placeholder = "Select an option",
  className = "",
  variant = "default",
  icon = null,
  disabled = false
}: DropdownMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && event.target && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: any) => {
    setSelectedValue(option.label || option);
    setOpen(false);
    if (onSelect) {
      onSelect(option.value || option);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "outline":
        return "border-2 border-gray-300 hover:border-gray-400 bg-white";
      case "ghost":
        return "border border-transparent hover:bg-gray-100";
      case "filled":
        return "bg-gray-100 hover:bg-gray-200 border border-gray-200";
      default:
        return "border border-gray-300 hover:border-gray-400 bg-white";
    }
  };

  return (
<div className={`relative inline-block ${className}`} ref={dropdownRef}>
    {/* Dropdown Button */}
    <button
      onClick={() => !disabled && setOpen(!open)}
      disabled={disabled}
      className={`
        flex items-center justify-between w-full px-4 py-2 text-left
        rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 
        focus:ring-blue-500 focus:border-transparent
        ${getVariantStyles()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${open ? 'ring-2 ring-blue-500' : ''}
      `}
    >
      <div className="flex items-center space-x-2">
        {icon && <span className="text-gray-500">{icon}</span>}
        <span className={`text-sm font-medium ${selectedValue ? 'text-gray-900' : 'text-gray-500'}`}>
          {selectedValue || placeholder}
        </span>
      </div>
      
      <div className="flex items-center space-x-1">
        {/* Remove this entire block that contains the clear button (x) */}
        
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white rounded-lg shadow-lg border border-gray-200 py-1 max-h-60 overflow-auto">
          {options.length === 0 ? (
            <div className="px-4 py-3 text-sm text-gray-500 text-center">
              No options available
            </div>
          ) : (
            options.map((option, index) => {
              const isObject = typeof option === 'object';
              const label = isObject ? option.label : option;
              const disabled = isObject ? option.disabled : false;
              const icon = isObject ? option.icon : null;

              return (
                <button
                  key={index}
                  onClick={() => !disabled && handleSelect(option)}
                  disabled={disabled}
                  className={`
                    w-full text-left px-4 py-2 text-sm transition-colors duration-150
                    flex items-center space-x-2
                    ${disabled 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer'
                    }
                    ${selectedValue === label ? 'bg-blue-100 text-blue-700' : ''}
                  `}
                >
                  {icon && <span className="text-gray-500">{icon}</span>}
                  <span>{label}</span>
                  {selectedValue === label && (
                    <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;