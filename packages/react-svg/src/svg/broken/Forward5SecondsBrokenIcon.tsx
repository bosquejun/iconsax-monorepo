
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Forward5SecondsBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.98 4.46997L12 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0094 16.96C18.5794 19.94 15.5294 22 11.9994 22C7.08939 22 3.10938 18.02 3.10938 13.11C3.10938 8.19999 7.08939 4.21997 11.9994 4.21997C12.6794 4.21997 13.3394 4.31002 13.9794 4.46002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.0898 7.80005C20.1998 9.28005 20.8898 11.11 20.8898 13.11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.9098 10.8301H10.8498L10.0898 13.1201H12.3798C13.2198 13.1201 13.9098 13.8001 13.9098 14.6501C13.9098 15.4901 13.2298 16.1801 12.3798 16.1801H10.0898" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Forward5SecondsBrokenIcon;
      