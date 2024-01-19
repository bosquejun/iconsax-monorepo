
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PercentageCircleTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M8.32031 15.27L14.8603 8.72998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M8.73001 10.3701C9.40932 10.3701 9.95999 9.81948 9.95999 9.14017C9.95999 8.46086 9.40932 7.91016 8.73001 7.91016C8.0507 7.91016 7.5 8.46086 7.5 9.14017C7.5 9.81948 8.0507 10.3701 8.73001 10.3701Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M15.269 16.0899C15.9484 16.0899 16.4991 15.5392 16.4991 14.8599C16.4991 14.1806 15.9484 13.6299 15.269 13.6299C14.5897 13.6299 14.0391 14.1806 14.0391 14.8599C14.0391 15.5392 14.5897 16.0899 15.269 16.0899Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PercentageCircleTwotoneIcon;
      