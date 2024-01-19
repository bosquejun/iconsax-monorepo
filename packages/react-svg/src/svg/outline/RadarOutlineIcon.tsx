
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RadarOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22.7502C6.07 22.7502 1.25 17.9302 1.25 12.0002C1.25 10.1202 1.73999 8.27026 2.67999 6.64026C2.88999 6.28026 3.34001 6.16023 3.70001 6.36023L12.37 11.3402C12.73 11.5502 12.85 12.0002 12.65 12.3602C12.44 12.7202 11.99 12.8403 11.63 12.6403L3.63 8.05023C3.05 9.28023 2.75 10.6202 2.75 11.9902C2.75 17.0902 6.9 21.2402 12 21.2402C17.1 21.2402 21.25 17.0902 21.25 11.9902C21.25 6.89023 17.1 2.74023 12 2.74023C9.98 2.74023 8.06001 3.38024 6.45001 4.59024C6.12001 4.84024 5.64999 4.77025 5.39999 4.44025C5.14999 4.11025 5.21999 3.64026 5.54999 3.39026C7.41999 1.99026 9.65 1.24023 12 1.24023C17.93 1.24023 22.75 6.06023 22.75 11.9902C22.75 17.9202 17.93 22.7502 12 22.7502Z" fill={color} />
        </svg>
      )
    }
    
    
    export default RadarOutlineIcon;
      