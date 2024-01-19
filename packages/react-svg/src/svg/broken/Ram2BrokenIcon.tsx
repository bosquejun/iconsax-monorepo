
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Ram2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7.99047 21.97L7.98047 19C7.98047 17.89 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.93945 4.95006L8.98945 2.06006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9395 4.95006L11.9895 2.06006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.9395 4.92004L14.9895 2.04004" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.50023 11V17C3.50023 20 4.97023 22 8.50023 22H15.5002C18.9702 22 20.5002 20 20.5002 17V15.83C20.5002 15.3 20.2902 14.79 19.9102 14.42L19.0802 13.59C18.7002 13.21 18.4902 12.71 18.4902 12.18V10C18.4902 9.45 18.9402 9 19.4902 9C20.0402 9 20.4902 8.55 20.4902 8V7C20.4902 4 18.9602 2 15.4902 2H8.49023C4.96023 2 3.49023 4 3.49023 7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Ram2BrokenIcon;
      