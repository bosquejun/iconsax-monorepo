
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TextUnderlineOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19 21.75H5C4.59 21.75 4.25 21.41 4.25 21C4.25 20.59 4.59 20.25 5 20.25H19C19.41 20.25 19.75 20.59 19.75 21C19.75 21.41 19.41 21.75 19 21.75Z" fill={color} />
<path d="M12 17.75C7.73 17.75 4.25 14.27 4.25 10V3C4.25 2.59 4.59 2.25 5 2.25C5.41 2.25 5.75 2.59 5.75 3V10C5.75 13.45 8.55 16.25 12 16.25C15.45 16.25 18.25 13.45 18.25 10V3C18.25 2.59 18.59 2.25 19 2.25C19.41 2.25 19.75 2.59 19.75 3V10C19.75 14.27 16.27 17.75 12 17.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TextUnderlineOutlineIcon;
      