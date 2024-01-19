
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CropOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19 19.75H9.9C5.57 19.75 4.25 18.43 4.25 14.1V5C4.25 4.59 4.59 4.25 5 4.25H14.1C18.43 4.25 19.75 5.57 19.75 9.9V19C19.75 19.41 19.41 19.75 19 19.75ZM5.75 5.75V14.1C5.75 17.59 6.41 18.25 9.9 18.25H18.25V9.9C18.25 6.41 17.59 5.75 14.1 5.75H5.75Z" fill={color} />
<path d="M5 5.75C4.59 5.75 4.25 5.41 4.25 5V2C4.25 1.59 4.59 1.25 5 1.25C5.41 1.25 5.75 1.59 5.75 2V5C5.75 5.41 5.41 5.75 5 5.75Z" fill={color} />
<path d="M5 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H5C5.41 4.25 5.75 4.59 5.75 5C5.75 5.41 5.41 5.75 5 5.75Z" fill={color} />
<path d="M19 22.75C18.59 22.75 18.25 22.41 18.25 22V19C18.25 18.59 18.59 18.25 19 18.25C19.41 18.25 19.75 18.59 19.75 19V22C19.75 22.41 19.41 22.75 19 22.75Z" fill={color} />
<path d="M22 19.75H19C18.59 19.75 18.25 19.41 18.25 19C18.25 18.59 18.59 18.25 19 18.25H22C22.41 18.25 22.75 18.59 22.75 19C22.75 19.41 22.41 19.75 22 19.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CropOutlineIcon;
      