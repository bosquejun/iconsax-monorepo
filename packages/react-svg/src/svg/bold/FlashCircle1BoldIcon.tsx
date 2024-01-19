
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FlashCircle1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.9707 2C6.4507 2 1.9707 6.48 1.9707 12C1.9707 17.52 6.4507 22 11.9707 22C17.4907 22 21.9707 17.52 21.9707 12C21.9707 6.48 17.5007 2 11.9707 2ZM15.7207 12.35L12.0007 16.58L11.5607 17.08C10.9507 17.77 10.4507 17.59 10.4507 16.66V12.7H8.7507C7.9807 12.7 7.7707 12.23 8.2807 11.65L12.0007 7.42L12.4407 6.92C13.0507 6.23 13.5507 6.41 13.5507 7.34V11.3H15.2507C16.0207 11.3 16.2307 11.77 15.7207 12.35Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FlashCircle1BoldIcon;
      