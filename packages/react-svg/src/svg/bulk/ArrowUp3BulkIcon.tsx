
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowUp3BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.32919 18H14.6692C17.9892 18 19.3392 15.65 17.6892 12.78L16.9492 11.5C16.7692 11.19 16.4392 11 16.0792 11H7.91919C7.55919 11 7.22919 11.19 7.04919 11.5L6.30919 12.78C4.65919 15.65 6.00919 18 9.32919 18Z" fill={color} />
<path opacity="0.4" d="M8.78957 10.0001H15.2196C15.6096 10.0001 15.8496 9.58006 15.6496 9.25006L15.0096 8.15006C13.3596 5.28006 10.6396 5.28006 8.98957 8.15006L8.34957 9.25006C8.15957 9.58006 8.39957 10.0001 8.78957 10.0001Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowUp3BulkIcon;
      