
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ReceiptEditTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M8 7H16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M9 11H15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.2091 14.7698L14.6691 18.3098C14.5291 18.4498 14.3991 18.7098 14.3691 18.8998L14.1791 20.2498C14.1091 20.7398 14.4491 21.0798 14.9391 21.0098L16.2891 20.8198C16.4791 20.7898 16.7491 20.6598 16.8791 20.5198L20.4191 16.9798C21.0291 16.3698 21.3191 15.6598 20.4191 14.7598C19.5291 13.8698 18.8191 14.1598 18.2091 14.7698Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.6992 15.2798C17.9992 16.3598 18.8392 17.1998 19.9192 17.4998" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ReceiptEditTwotoneIcon;
      