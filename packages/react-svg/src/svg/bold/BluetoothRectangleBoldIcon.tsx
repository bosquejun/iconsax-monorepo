
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BluetoothRectangleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.9004 16.3302L14.5704 14.9402L12.9004 13.4102V16.3302Z" fill={color} />
<path d="M12.9004 10.5919L14.5704 9.06188L12.9004 7.67188V10.5919Z" fill={color} />
<path d="M15 2H9C6 2 4 4 4 7V17C4 20 6 22 9 22H15C18 22 20 20 20 17V7C20 4 18 2 15 2ZM15.72 13.95C16.01 14.22 16.17 14.59 16.16 14.97C16.15 15.35 15.97 15.72 15.67 15.97L13.6 17.7C13.22 18.02 12.87 18.11 12.6 18.11C12.38 18.11 12.21 18.05 12.11 18.01C11.89 17.91 11.39 17.58 11.39 16.67V14L9.09 16.11C8.79 16.39 8.31 16.37 8.03 16.06C7.75 15.75 7.77 15.28 8.08 15L11.36 12L8.08 8.99C7.78 8.71 7.76 8.24 8.04 7.93C8.32 7.63 8.8 7.6 9.1 7.88L11.4 10V7.33C11.4 6.43 11.9 6.1 12.12 5.99C12.33 5.89 12.91 5.71 13.61 6.29L15.67 8.01C15.97 8.26 16.15 8.63 16.16 9.01C16.17 9.39 16.01 9.77 15.72 10.03L13.58 12L15.72 13.95Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BluetoothRectangleBoldIcon;
      