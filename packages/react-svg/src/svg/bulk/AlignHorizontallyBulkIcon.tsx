
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AlignHorizontallyBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" fill={color} />
<path d="M4.75 12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.59 2.34 11.25 2.75 11.25H4.75V12.75Z" fill={color} />
<path d="M13.25 11.25H10.25V12.75H13.25V11.25Z" fill={color} />
<path d="M21.25 12.75H18.75V11.25H21.25C21.66 11.25 22 11.59 22 12C22 12.41 21.66 12.75 21.25 12.75Z" fill={color} />
<path opacity="0.4" d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z" fill={color} />
        </svg>
      )
    }
    
    
    export default AlignHorizontallyBulkIcon;
      