
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TriangleTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.9994 21.4098H5.93944C2.46944 21.4098 1.01944 18.9298 2.69944 15.8998L5.81944 10.2798L8.75944 4.99979C10.5394 1.78979 13.4594 1.78979 15.2394 4.99979L18.1794 10.2898L21.2994 15.9098C22.9794 18.9398 21.5194 21.4198 18.0594 21.4198H11.9994V21.4098Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TriangleTwotoneIcon;
      