
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SoundBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3 16.5C2.59 16.5 2.25 16.16 2.25 15.75V8.25C2.25 7.84 2.59 7.5 3 7.5C3.41 7.5 3.75 7.84 3.75 8.25V15.75C3.75 16.16 3.41 16.5 3 16.5Z" fill={color} />
<path opacity="0.4" d="M7.5 19C7.09 19 6.75 18.66 6.75 18.25V5.75C6.75 5.34 7.09 5 7.5 5C7.91 5 8.25 5.34 8.25 5.75V18.25C8.25 18.66 7.91 19 7.5 19Z" fill={color} />
<path d="M12 21.5C11.59 21.5 11.25 21.16 11.25 20.75V3.25C11.25 2.84 11.59 2.5 12 2.5C12.41 2.5 12.75 2.84 12.75 3.25V20.75C12.75 21.16 12.41 21.5 12 21.5Z" fill={color} />
<path opacity="0.4" d="M16.5 19C16.09 19 15.75 18.66 15.75 18.25V5.75C15.75 5.34 16.09 5 16.5 5C16.91 5 17.25 5.34 17.25 5.75V18.25C17.25 18.66 16.91 19 16.5 19Z" fill={color} />
<path d="M21 16.5C20.59 16.5 20.25 16.16 20.25 15.75V8.25C20.25 7.84 20.59 7.5 21 7.5C21.41 7.5 21.75 7.84 21.75 8.25V15.75C21.75 16.16 21.41 16.5 21 16.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SoundBulkIcon;
      