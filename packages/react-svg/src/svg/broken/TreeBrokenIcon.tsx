
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TreeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.1694 10.0601H7.82933C6.64933 10.0601 6.23934 9.27006 6.92934 8.31006L11.0994 2.47007C11.5894 1.77007 12.4094 1.77007 12.8894 2.47007L17.0593 8.31006C17.7593 9.27006 17.3494 10.0601 16.1694 10.0601Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.7794 15.6701C19.7094 16.9501 19.1694 18.0001 17.5894 18.0001H6.41937C4.83937 18.0001 4.29937 16.9501 5.22937 15.6701L9.21936 10.0601H14.7894L16.1694 12.0001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22V18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TreeBrokenIcon;
      