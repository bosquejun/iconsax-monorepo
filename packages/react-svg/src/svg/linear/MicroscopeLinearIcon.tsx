
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MicroscopeLinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.0301 10.77L20.6901 6.97998C21.2601 6.59998 21.4101 5.81998 21.0301 5.25998L19.2101 2.54996C18.8301 1.97996 18.0501 1.82996 17.4901 2.20996L11.8301 5.99997L15.0301 10.77Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.1739 6.4792L7.39624 9.67908L9.95614 13.5012L14.7338 10.3013L12.1739 6.4792Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.83004 15.8999L9.78004 13.2599L7.54004 9.91992L3.59004 12.5599C3.13004 12.8699 3.01004 13.4899 3.32004 13.9499L4.45004 15.6299C4.75004 16.0799 5.37004 16.1999 5.83004 15.8999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.0501 12.2L7.56006 21.9999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 12.2L16.44 21.9999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MicroscopeLinearIcon;
      