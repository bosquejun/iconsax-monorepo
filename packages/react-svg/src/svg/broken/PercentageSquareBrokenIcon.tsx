
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PercentageSquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.32031 15.27L14.8603 8.72998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.73001 10.3699C9.40932 10.3699 9.95999 9.81923 9.95999 9.13992C9.95999 8.46061 9.40932 7.90991 8.73001 7.90991C8.0507 7.90991 7.5 8.46061 7.5 9.13992C7.5 9.81923 8.0507 10.3699 8.73001 10.3699Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.269 16.0899C15.9484 16.0899 16.4991 15.5392 16.4991 14.8599C16.4991 14.1806 15.9484 13.6299 15.269 13.6299C14.5897 13.6299 14.0391 14.1806 14.0391 14.8599C14.0391 15.5392 14.5897 16.0899 15.269 16.0899Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PercentageSquareBrokenIcon;
      