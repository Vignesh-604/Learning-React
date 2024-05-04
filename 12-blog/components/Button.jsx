import React from 'react'

function Button({
    children,                       // Text or other elements
    type = "button",                // Default attributes
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props                        // Extra attributes 

}) {
  return (
    // Production grade component. Any passed attributes willl also be included
    <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button