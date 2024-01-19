
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.9609 6.16992C18.9609 7.55992 20.3409 9.76992 20.6209 12.3199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.49023 12.37C3.75023 9.82997 5.11023 7.61997 7.09023 6.21997" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.18945 20.9399C9.34945 21.5299 10.6695 21.8599 12.0595 21.8599C13.3995 21.8599 14.6595 21.5599 15.7895 21.0099" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.2793 4.91989C9.2793 6.44989 10.5193 7.69989 12.0593 7.69989C13.5993 7.69989 14.8393 6.45989 14.8393 4.91989C14.8393 3.37989 13.5993 2.13989 12.0593 2.13989" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M4.83078 19.9201C6.36613 19.9201 7.61078 18.6755 7.61078 17.1401C7.61078 15.6048 6.36613 14.3601 4.83078 14.3601C3.29543 14.3601 2.05078 15.6048 2.05078 17.1401C2.05078 18.6755 3.29543 19.9201 4.83078 19.9201Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9409 17.1401C21.9409 15.6101 20.7009 14.3601 19.1609 14.3601C17.6209 14.3601 16.3809 15.6001 16.3809 17.1401C16.3809 18.6801 17.6209 19.9201 19.1609 19.9201" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ShareBrokenIcon;
      