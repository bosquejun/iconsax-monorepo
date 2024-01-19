
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ElectricityOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.5 16.75H10.5C7.75 16.75 5.75 14.75 5.75 12V6.92C5.75 5.45 6.95001 4.25 8.42001 4.25H15.59C17.06 4.25 18.26 5.45 18.26 6.92V12C18.25 14.75 16.25 16.75 13.5 16.75ZM8.42001 5.75C7.78001 5.75 7.25 6.27 7.25 6.92V12C7.25 13.62 8.25 15.25 10.5 15.25H13.5C15.75 15.25 16.75 13.62 16.75 12V6.92C16.75 6.28 16.23 5.75 15.58 5.75H8.42001Z" fill={color} />
<path d="M9.5 5.75C9.09 5.75 8.75 5.41 8.75 5V2C8.75 1.59 9.09 1.25 9.5 1.25C9.91 1.25 10.25 1.59 10.25 2V5C10.25 5.41 9.91 5.75 9.5 5.75Z" fill={color} />
<path d="M14.5 5.75C14.09 5.75 13.75 5.41 13.75 5V2C13.75 1.59 14.09 1.25 14.5 1.25C14.91 1.25 15.25 1.59 15.25 2V5C15.25 5.41 14.91 5.75 14.5 5.75Z" fill={color} />
<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V16C11.25 15.59 11.59 15.25 12 15.25C12.41 15.25 12.75 15.59 12.75 16V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ElectricityOutlineIcon;
      