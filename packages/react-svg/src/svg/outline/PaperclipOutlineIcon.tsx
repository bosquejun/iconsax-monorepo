
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PaperclipOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.9707 22.75C7.2507 22.75 4.2207 19.72 4.2207 16V10C4.2207 5.73 7.7007 2.25 11.9707 2.25C16.2407 2.25 19.7207 5.73 19.7207 10V15.5C19.7207 17.84 17.8107 19.75 15.4707 19.75C13.1307 19.75 11.2207 17.84 11.2207 15.5V12C11.2207 11.59 11.5607 11.25 11.9707 11.25C12.3807 11.25 12.7207 11.59 12.7207 12V15.5C12.7207 17.02 13.9507 18.25 15.4707 18.25C16.9907 18.25 18.2207 17.02 18.2207 15.5V10C18.2207 6.55 15.4207 3.75 11.9707 3.75C8.5207 3.75 5.7207 6.55 5.7207 10V16C5.7207 18.89 8.0707 21.25 10.9707 21.25C11.3807 21.25 11.7207 21.59 11.7207 22C11.7207 22.41 11.3907 22.75 10.9707 22.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PaperclipOutlineIcon;
      