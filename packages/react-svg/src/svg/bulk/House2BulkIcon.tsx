
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const House2BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22.75 22C22.75 22.41 22.41 22.75 22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.58 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.58 22.75 22Z" fill={color} />
<path opacity="0.4" d="M20.9992 9.98017V21.2502H2.94922L2.99922 9.97016C2.99922 9.36016 3.27922 8.78022 3.76922 8.40022L10.7692 2.96021C11.4892 2.39021 12.5092 2.39021 13.2292 2.96021L20.2292 8.40022C20.7192 8.78022 20.9992 9.36017 20.9992 9.98017Z" fill={color} />
<path d="M13.5 8.25H10.5C10.09 8.25 9.75 7.91 9.75 7.5C9.75 7.09 10.09 6.75 10.5 6.75H13.5C13.91 6.75 14.25 7.09 14.25 7.5C14.25 7.91 13.91 8.25 13.5 8.25Z" fill={color} />
<path d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11ZM10.75 17.75C10.75 18.16 10.41 18.5 10 18.5C9.59 18.5 9.25 18.16 9.25 17.75V16.25C9.25 15.84 9.59 15.5 10 15.5C10.41 15.5 10.75 15.84 10.75 16.25V17.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default House2BulkIcon;
      