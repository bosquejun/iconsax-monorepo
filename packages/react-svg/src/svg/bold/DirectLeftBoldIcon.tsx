
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DirectLeftBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.2916 17.0218L19.5516 13.5418C19.0716 12.5718 19.0716 11.4418 19.5516 10.4718L21.2916 6.99178C22.7816 4.00178 19.5716 0.861782 16.6216 2.42178L15.0816 3.24178C14.8716 3.35178 14.7016 3.53178 14.6016 3.75178L8.90164 16.3918C8.67164 16.9118 8.88164 17.5218 9.38164 17.7818L16.6216 21.5918C19.5716 23.1518 22.7816 20.0018 21.2916 17.0218Z" fill={color} />
<path d="M7.68953 15.6004L11.4195 7.32045C11.8395 6.39045 10.8395 5.45045 9.93953 5.93045L4.16953 8.96045C1.71953 10.2504 1.71953 13.7504 4.16953 15.0404L6.20953 16.1104C6.75953 16.4004 7.42953 16.1704 7.68953 15.6004Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DirectLeftBoldIcon;
      