
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LampBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.4306 11.78L18.2306 3.7C17.9806 2.77 16.9706 2 16.0106 2H7.9906C7.0306 2 6.0206 2.77 5.7706 3.7L3.5706 11.78C3.1306 13.38 4.1306 14.69 5.7906 14.69H11.2506V20.5H8.0006C7.5906 20.5 7.2506 20.84 7.2506 21.25C7.2506 21.66 7.5906 22 8.0006 22H16.0006C16.4106 22 16.7506 21.66 16.7506 21.25C16.7506 20.84 16.4106 20.5 16.0006 20.5H12.7506V14.69H18.2106C19.8706 14.69 20.8706 13.38 20.4306 11.78Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LampBoldIcon;
      