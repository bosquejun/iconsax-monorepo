
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CandleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.5 4.5H7.25V2C7.25 1.59 6.91 1.25 6.5 1.25C6.09 1.25 5.75 1.59 5.75 2V4.5H5.5C3.91 4.5 3 5.41 3 7V13C3 14.59 3.91 15.5 5.5 15.5H5.75V22C5.75 22.41 6.09 22.75 6.5 22.75C6.91 22.75 7.25 22.41 7.25 22V15.5H7.5C9.09 15.5 10 14.59 10 13V7C10 5.41 9.09 4.5 7.5 4.5Z" fill={color} />
<path d="M18.5 8.5H18.25V2C18.25 1.59 17.91 1.25 17.5 1.25C17.09 1.25 16.75 1.59 16.75 2V8.5H16.5C14.91 8.5 14 9.41 14 11V17C14 18.59 14.91 19.5 16.5 19.5H16.75V22C16.75 22.41 17.09 22.75 17.5 22.75C17.91 22.75 18.25 22.41 18.25 22V19.5H18.5C20.09 19.5 21 18.59 21 17V11C21 9.41 20.09 8.5 18.5 8.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CandleBoldIcon;
      