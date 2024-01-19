
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Box1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 21.61V12.54" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.39062 13.2501V14.8301C2.39062 16.2101 3.38063 17.8901 4.59063 18.5601L9.93062 21.5301C11.0706 22.1601 12.9406 22.1601 14.0806 21.5301L19.4206 18.5601C20.6306 17.8901 21.6206 16.2101 21.6206 14.8301V9.17006C21.6206 7.79006 20.6306 6.11006 19.4206 5.44006L14.0806 2.47006C12.9406 1.84006 11.0706 1.84006 9.93062 2.47006L4.59063 5.44006C3.38063 6.11006 2.39062 7.79006 2.39062 9.17006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Box1BrokenIcon;
      