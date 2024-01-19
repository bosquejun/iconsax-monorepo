
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentCopyTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16 12.4V15.4C16 19.4 14.4 21 10.4 21H6.6C2.6 21 1 19.4 1 15.4V11.6C1 7.6 2.6 6 6.6 6H9.6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.9996 12.4H12.7996C10.3996 12.4 9.59961 11.6 9.59961 9.2V6L15.9996 12.4Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M6 4C6 2.34 7.34 1 9 1H15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M20.9995 7V13.19C20.9995 14.74 19.7395 16 18.1895 16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21 7H18C15.75 7 15 6.25 15 4V1L21 7Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DocumentCopyTwotoneIcon;
      