
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TagRightBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.21948 3.1001C2.46948 3.1001 1.40953 5.0201 2.32953 6.5101L5.09949 10.9401C5.46949 11.5301 5.46949 12.4901 5.09949 13.0801L2.32953 17.5101C1.39953 18.9901 2.46948 20.9201 4.21948 20.9201H14.6695C15.2795 20.9201 16.0795 20.5201 16.4495 20.0301L21.6295 13.1301C22.0895 12.5201 22.1295 11.4901 21.7295 10.8501L17.5495 4.1701C17.1895 3.5901 16.3395 3.1201 15.6595 3.1201H8.65949" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TagRightBrokenIcon;
      