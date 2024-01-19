
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartSlashTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M6.10999 17.4998C3.89999 15.4298 2 12.4798 2 8.67981C2 5.58981 4.49 3.08984 7.56 3.08984C9.38 3.08984 10.99 3.96983 12 5.32983C13.01 3.96983 14.63 3.08984 16.44 3.08984C17.59 3.08984 18.66 3.4398 19.55 4.0498" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M21.7395 7C21.9095 7.53 21.9995 8.1 21.9995 8.69C21.9995 15.69 15.5195 19.82 12.6195 20.82C12.2795 20.94 11.7195 20.94 11.3795 20.82C10.7295 20.6 9.90953 20.22 9.01953 19.69" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default HeartSlashTwotoneIcon;
      