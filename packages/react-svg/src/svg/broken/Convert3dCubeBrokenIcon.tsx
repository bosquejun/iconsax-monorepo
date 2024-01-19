
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Convert3dCubeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.6992 4.44995L17.6792 6.74994L21.6192 4.45996" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.6797 10.82V6.73999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.7396 2.21L14.3396 3.53996C13.7996 3.83996 13.3496 4.59995 13.3496 5.21995V7.75999C13.3496 8.37999 13.7896 9.13998 14.3396 9.43998L16.7396 10.77C17.2496 11.06 18.0896 11.06 18.6096 10.77L21.0096 9.43998C21.5496 9.13998 21.9996 8.37999 21.9996 7.75999V5.21995C21.9996 4.59995 21.5596 3.83996 21.0096 3.53996L18.6096 2.21C18.0996 1.93 17.2596 1.93 16.7396 2.21Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.34961 15.45L6.31961 17.7499L10.2696 15.46" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.32031 21.82V17.74" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.65 16.23C10.65 15.61 10.21 14.85 9.66 14.55L7.25999 13.2199C6.74999 12.9299 5.91 12.9299 5.39 13.2199L2.99001 14.55C2.45001 14.85 2 15.61 2 16.23V18.77C2 19.39 2.44001 20.15 2.99001 20.45L5.39 21.78C5.9 22.07 6.73999 22.07 7.25999 21.78L9.66 20.45" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Convert3dCubeBrokenIcon;
      