
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CrownOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17 21.0401H7C3.83 21.0401 1.25 18.4601 1.25 15.2901V5.7101C1.25 4.4101 1.85 3.9601 2.21 3.8101C2.57 3.6601 3.31 3.5501 4.23 4.4701L6.82 7.0601C6.92 7.1601 7.08 7.1601 7.17 7.0601L10.76 3.4701C11.42 2.8101 12.58 2.8101 13.23 3.4701L16.82 7.0601C16.92 7.1601 17.08 7.1601 17.17 7.0601L19.76 4.4701C20.68 3.5501 21.42 3.6701 21.78 3.8101C22.14 3.9601 22.74 4.4001 22.74 5.7101V15.3001C22.75 18.7301 20.44 21.0401 17 21.0401ZM2.81 5.2401C2.78 5.3201 2.75 5.4701 2.75 5.7101V15.3001C2.75 17.6401 4.66 19.5501 7 19.5501H17C19.58 19.5501 21.25 17.8801 21.25 15.3001V5.7101C21.25 5.4701 21.22 5.3301 21.19 5.2501C21.11 5.2901 20.99 5.3701 20.82 5.5401L18.23 8.1301C17.57 8.7901 16.41 8.7901 15.76 8.1301L12.17 4.5401C12.07 4.4401 11.91 4.4401 11.82 4.5401L8.24 8.1201C7.58 8.7801 6.42 8.7801 5.77 8.1201L3.18 5.5301C3.01 5.3601 2.88 5.2801 2.81 5.2401Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CrownOutlineIcon;
      