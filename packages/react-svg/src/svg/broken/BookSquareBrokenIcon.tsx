
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BookSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.3792 15.27V7.57999C18.3792 6.80999 17.7591 6.25 16.9991 6.31H16.9592C15.6192 6.42 13.5892 7.11001 12.4492 7.82001L12.3392 7.89002C12.1592 8.00002 11.8491 8.00002 11.6591 7.89002L11.4991 7.79001C10.3691 7.08001 8.33915 6.40999 6.99915 6.29999C6.23915 6.23999 5.61914 6.81001 5.61914 7.57001V15.27C5.61914 15.88 6.11913 16.46 6.72913 16.53L6.90912 16.56C8.28912 16.74 10.4292 17.45 11.6492 18.12L11.6791 18.13C11.8491 18.23 12.1291 18.23 12.2891 18.13C13.5091 17.45 15.6591 16.75 17.0491 16.56L17.2592 16.53C17.8792 16.46 18.3792 15.89 18.3792 15.27Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 8.1001V17.6601" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BookSquareBrokenIcon;
      