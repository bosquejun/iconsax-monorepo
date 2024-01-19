
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Forward15SecondsTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M15.9606 10.8301H12.9006L12.1406 13.1201H14.4306C15.2706 13.1201 15.9606 13.8001 15.9606 14.6501C15.9606 15.4901 15.2806 16.1801 14.4306 16.1801H12.1406" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M9.53906 16.17V10.8301L8.03906 12.5001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.98 4.46997L12 2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.0894 7.79974C20.1994 9.27974 20.8894 11.1097 20.8894 13.1097C20.8894 18.0197 16.9094 21.9998 11.9994 21.9998C7.08939 21.9998 3.10938 18.0197 3.10938 13.1097C3.10938 8.19974 7.08939 4.21973 11.9994 4.21973C12.6794 4.21973 13.3394 4.30978 13.9794 4.45978" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Forward15SecondsTwotoneIcon;
      