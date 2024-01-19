
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Forward15SecondsBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.98 4.46997L12 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0094 16.96C18.5794 19.94 15.5294 22 11.9994 22C7.08939 22 3.10938 18.02 3.10938 13.11C3.10938 8.19999 7.08939 4.21997 11.9994 4.21997C12.6794 4.21997 13.3394 4.31002 13.9794 4.46002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.0898 7.80005C20.1998 9.28005 20.8898 11.11 20.8898 13.11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.9587 10.8301H12.8987L12.1387 13.1201H14.4286C15.2686 13.1201 15.9587 13.8001 15.9587 14.6501C15.9587 15.4901 15.2786 16.1801 14.4286 16.1801H12.1387" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.53906 16.17V10.8301L8.03906 12.5001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Forward15SecondsBrokenIcon;
      