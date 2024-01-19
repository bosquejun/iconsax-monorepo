
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GiftLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.97 10H3.96997V18C3.96997 21 4.96997 22 7.96997 22H15.97C18.97 22 19.97 21 19.97 18V10Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.64 4.99994H6.12003C5.78003 4.62994 5.79003 4.05994 6.15003 3.69994L7.57003 2.27994C7.94003 1.90994 8.55003 1.90994 8.92003 2.27994L11.64 4.99994Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.87 4.99994H12.35L15.07 2.27994C15.44 1.90994 16.05 1.90994 16.42 2.27994L17.84 3.69994C18.2 4.05994 18.21 4.62994 17.87 4.99994Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.93994 10V15.14C8.93994 15.94 9.81994 16.41 10.4899 15.98L11.4299 15.36C11.7699 15.14 12.1999 15.14 12.5299 15.36L13.4199 15.96C14.0799 16.4 14.9699 15.93 14.9699 15.13V10H8.93994Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default GiftLinearIcon;
      