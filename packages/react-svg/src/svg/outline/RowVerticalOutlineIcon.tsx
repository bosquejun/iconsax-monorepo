
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RowVerticalOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.9 22.75H4.1C2.18 22.75 1.25 21.77 1.25 19.77V15.73C1.25 13.72 2.18 12.75 4.1 12.75H19.9C21.82 12.75 22.75 13.73 22.75 15.73V19.77C22.75 21.77 21.82 22.75 19.9 22.75ZM4.1 14.25C3.09 14.25 2.75 14.46 2.75 15.73V19.77C2.75 21.04 3.09 21.25 4.1 21.25H19.9C20.91 21.25 21.25 21.04 21.25 19.77V15.73C21.25 14.46 20.91 14.25 19.9 14.25H4.1Z" fill={color} />
<path d="M19.9 11.25H4.1C2.18 11.25 1.25 10.27 1.25 8.27V4.23C1.25 2.22 2.18 1.25 4.1 1.25H19.9C21.82 1.25 22.75 2.23 22.75 4.23V8.27C22.75 10.27 21.82 11.25 19.9 11.25ZM4.1 2.75C3.09 2.75 2.75 2.96 2.75 4.23V8.27C2.75 9.54 3.09 9.75 4.1 9.75H19.9C20.91 9.75 21.25 9.54 21.25 8.27V4.23C21.25 2.96 20.91 2.75 19.9 2.75H4.1Z" fill={color} />
        </svg>
      )
    }
    
    
    export default RowVerticalOutlineIcon;
      