
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BroomBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.87031 5.6701L6.45031 7.75012L4.89031 5.19012C4.32031 4.25012 4.62031 3.01012 5.56031 2.44012C6.50031 1.87012 7.74031 2.1701 8.31031 3.1101L9.87031 5.6701Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.19913 20.4401C9.85913 21.7901 11.4591 22.26 12.7391 21.47L19.1691 17.5601C20.4591 16.7801 20.7691 15.1501 19.8791 13.9401L17.1091 10.2001C15.9091 8.59009 13.6491 8.04005 11.8191 9.16005L8.65914 11.0801C6.81914 12.2001 6.25913 14.4601 7.14913 16.2601" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.7574 5.09791L5.63281 8.21851L7.71321 11.6349L12.8378 8.51431L10.7574 5.09791Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.3105 16.8101L15.9606 19.5201" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.75 18.3701L13.4 21.0801" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.8691 15.25L18.5191 17.96" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BroomBrokenIcon;
      