
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TagRightTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.21915 3.1001H15.6592C16.3392 3.1001 17.1892 3.5701 17.5492 4.1501L21.7292 10.8301C22.1292 11.4801 22.0892 12.5001 21.6292 13.1101L16.4492 20.0101C16.0792 20.5001 15.2792 20.9001 14.6692 20.9001H4.21915C2.46915 20.9001 1.4092 18.9801 2.3292 17.4901L5.09916 13.0601C5.46916 12.4701 5.46916 11.5101 5.09916 10.9201L2.3292 6.4901C1.4092 5.0201 2.47915 3.1001 4.21915 3.1001Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TagRightTwotoneIcon;
      