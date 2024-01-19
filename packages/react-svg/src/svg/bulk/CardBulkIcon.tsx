
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M22 9V16.46C22 18.75 20.14 20.6 17.85 20.6H6.15C3.86 20.6 2 18.75 2 16.46V9H22Z" fill={color} />
<path d="M22 7.5399V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H17.85C20.14 3.3999 22 5.2499 22 7.5399Z" fill={color} />
<path d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z" fill={color} />
<path d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CardBulkIcon;
      