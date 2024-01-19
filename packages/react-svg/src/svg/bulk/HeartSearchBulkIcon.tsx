
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartSearchBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.44 3.1001C14.63 3.1001 13.01 3.98008 12 5.33008C10.99 3.98008 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60009 2 8.69009C2 9.88009 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.88009 22 8.69009C22 5.60009 19.51 3.1001 16.44 3.1001Z" fill={color} />
<path d="M21.77 20.68L21.01 19.92C21.41 19.32 21.64 18.6 21.64 17.83C21.64 15.72 19.93 14.01 17.82 14.01C15.71 14.01 14 15.72 14 17.83C14 19.94 15.71 21.65 17.82 21.65C18.59 21.65 19.31 21.42 19.91 21.02L20.67 21.78C20.82 21.93 21.02 22.01 21.22 22.01C21.42 22.01 21.62 21.93 21.77 21.78C22.08 21.47 22.08 20.98 21.77 20.68Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HeartSearchBulkIcon;
      