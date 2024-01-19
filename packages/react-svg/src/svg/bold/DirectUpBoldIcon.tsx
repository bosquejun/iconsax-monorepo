
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectUpBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.0192 21.2916L13.5392 19.5516C12.5692 19.0716 11.4392 19.0716 10.4692 19.5516L6.98918 21.2916C3.99918 22.7816 0.84918 19.5716 2.40918 16.6216L3.22918 15.0816C3.33918 14.8716 3.51918 14.7016 3.73918 14.6016L16.3792 8.90164C16.8992 8.67164 17.5092 8.88164 17.7692 9.38164L21.5792 16.6216C23.1392 19.5716 19.9992 22.7816 17.0192 21.2916Z" fill={color} />
<path d="M15.6004 7.68953L7.32045 11.4195C6.39045 11.8395 5.45045 10.8395 5.93045 9.93953L8.97045 4.16953C10.2604 1.71953 13.7604 1.71953 15.0504 4.16953L16.1204 6.20953C16.4004 6.75953 16.1604 7.43953 15.6004 7.68953Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DirectUpBoldIcon;
      