
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DiscoverOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={color} />
<path d="M10.5 16.75C8.71 16.75 7.25 15.29 7.25 13.5C7.25 10.05 10.05 7.25 13.5 7.25C15.29 7.25 16.75 8.71 16.75 10.5C16.75 13.95 13.95 16.75 10.5 16.75ZM13.5 8.75C10.88 8.75 8.75 10.88 8.75 13.5C8.75 14.46 9.54 15.25 10.5 15.25C13.12 15.25 15.25 13.12 15.25 10.5C15.25 9.54 14.46 8.75 13.5 8.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DiscoverOutlineIcon;
      