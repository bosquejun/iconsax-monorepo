
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Grid1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.75 2V7.8H2C2 4.19 4.15 2.02 7.75 2Z" fill={color} />
<path d="M22 7.8H16.25V2C19.85 2.02 22 4.19 22 7.8Z" fill={color} />
<path d="M22 16.3008C21.96 19.8508 19.82 21.9808 16.25 22.0008V16.3008H22Z" fill={color} />
<path d="M7.75 16.3008V22.0008C4.18 21.9808 2.04 19.8508 2 16.3008H7.75Z" fill={color} />
<path d="M7.75 9.30078H2V14.8008H7.75V9.30078Z" fill={color} />
<path d="M22 9.30078H16.25V14.8008H22V9.30078Z" fill={color} />
<path d="M14.75 9.30078H9.25V14.8008H14.75V9.30078Z" fill={color} />
<path d="M14.75 2H9.25V7.8H14.75V2Z" fill={color} />
<path d="M14.75 16.3008H9.25V22.0008H14.75V16.3008Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Grid1BoldIcon;
      