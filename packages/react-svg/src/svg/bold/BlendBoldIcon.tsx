
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BlendBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C15.2262 18 14.51 17.8643 13.8518 17.6141C13.5331 17.4929 13.4737 17.0851 13.6955 16.8262C14.8375 15.4938 15.4707 13.786 15.4707 12C15.4707 10.2082 14.8319 8.49432 13.6986 7.17467C13.4759 6.91543 13.5349 6.50621 13.8544 6.38494C14.5118 6.13537 15.2272 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z" fill={color} />
<path d="M13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18C4.6607 18 1.9707 15.31 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BlendBoldIcon;
      