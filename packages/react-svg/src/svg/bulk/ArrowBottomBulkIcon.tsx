
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowBottomBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.32919 6H14.6692C17.9892 6 19.3392 8.35 17.6892 11.22L16.9492 12.5C16.7692 12.81 16.4392 13 16.0792 13H7.91919C7.55919 13 7.22919 12.81 7.04919 12.5L6.30919 11.22C4.65919 8.35 6.00919 6 9.32919 6Z" fill={color} />
<path opacity="0.4" d="M8.78957 14H15.2196C15.6096 14 15.8496 14.42 15.6496 14.75L15.0096 15.85C13.3596 18.72 10.6396 18.72 8.98957 15.85L8.34957 14.75C8.15957 14.42 8.39957 14 8.78957 14Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowBottomBulkIcon;
      