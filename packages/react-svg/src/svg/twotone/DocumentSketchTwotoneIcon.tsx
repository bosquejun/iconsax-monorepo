
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentSketchTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill={color} {...otherProps} >
          <path d="M21 9V14C21 19 19 21 14 21H8C3 21 1 19 1 14V8C1 3 3 1 8 1H13" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21 9H17C14 9 13 8 13 5V1L21 9Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M7.31975 11H9.96975C10.2398 11 10.5798 11.18 10.7198 11.4L11.8498 13.1C12.0798 13.44 12.0298 13.95 11.7398 14.24L9.27975 16.7C8.92975 17.05 8.34975 17.05 7.99975 16.7L5.53975 14.24C5.24975 13.95 5.19975 13.44 5.42975 13.1L6.55975 11.4C6.71975 11.18 7.05975 11 7.31975 11Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DocumentSketchTwotoneIcon;
      