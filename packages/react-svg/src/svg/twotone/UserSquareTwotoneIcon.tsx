
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UserSquareTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M18.1394 21.6198C17.2594 21.8798 16.2194 21.9998 14.9994 21.9998H8.99937C7.77937 21.9998 6.73937 21.8798 5.85938 21.6198C6.07937 19.0198 8.74937 16.9697 11.9994 16.9697C15.2494 16.9697 17.9194 19.0198 18.1394 21.6198Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 9V15C22 18.78 20.86 20.85 18.14 21.62C17.26 21.88 16.22 22 15 22H9C7.78 22 6.74 21.88 5.86 21.62C3.14 20.85 2 18.78 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default UserSquareTwotoneIcon;
      