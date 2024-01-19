
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FilterBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.6004 2.1001C19.7004 2.1001 20.6004 3.0001 20.6004 4.1001V6.3001C20.6004 7.1001 20.1004 8.1001 19.6004 8.6001L15.3004 12.4001C14.7004 12.9001 14.3004 13.9001 14.3004 14.7001V19.0001C14.3004 19.6001 13.9004 20.4001 13.4004 20.7001L12.0004 21.6001C10.7004 22.4001 8.90039 21.5001 8.90039 19.9001V14.6001C8.90039 13.9001 8.50039 13.0001 8.10039 12.5001L4.30039 8.5001C3.80039 8.0001 3.40039 7.1001 3.40039 6.5001V4.2001C3.40039 3.0001 4.30039 2.1001 5.40039 2.1001H14.4004" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.93 2.1001L6 10.0001" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FilterBrokenIcon;
      