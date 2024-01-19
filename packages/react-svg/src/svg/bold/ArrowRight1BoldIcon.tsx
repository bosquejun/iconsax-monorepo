
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowRight1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6 9.32919V14.6692C6 17.9892 8.35 19.3392 11.22 17.6892L12.5 16.9492C12.81 16.7692 13 16.4392 13 16.0792V7.91919C13 7.55919 12.81 7.22919 12.5 7.04919L11.22 6.30919C8.35 4.65919 6 6.00919 6 9.32919Z" fill={color} />
<path d="M14 8.79152V15.2215C14 15.6115 14.42 15.8515 14.75 15.6515L15.85 15.0115C18.72 13.3615 18.72 10.6415 15.85 8.99152L14.75 8.35152C14.42 8.16152 14 8.40152 14 8.79152Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowRight1BoldIcon;
      