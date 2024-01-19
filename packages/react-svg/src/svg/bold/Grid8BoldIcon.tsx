
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid8BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 7.81125V11.2513H16.75V2.03125C20.05 2.23125 22 4.36125 22 7.81125Z" fill={color} />
<path d="M22 12.75V16.19C22 19.64 20.05 21.77 16.75 21.97V12.75H22Z" fill={color} />
<path d="M7.25 12.75V21.97C3.95 21.77 2 19.64 2 16.19V12.75H7.25Z" fill={color} />
<path d="M7.25 2.03125V11.2513H2V7.81125C2 4.36125 3.95 2.23125 7.25 2.03125Z" fill={color} />
<path d="M15.25 2H8.75V11.25H15.25V2Z" fill={color} />
<path d="M15.25 12.75H8.75V22H15.25V12.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid8BoldIcon;
      