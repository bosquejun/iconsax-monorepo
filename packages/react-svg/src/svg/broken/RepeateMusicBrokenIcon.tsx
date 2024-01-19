
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const RepeateMusicBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.0005 21.0001L7.56055 18.66L15.5105 18.6801C19.0805 18.6801 22.0105 15.75 22.0105 12.16C22.0105 10.37 21.2806 8.74006 20.1006 7.56006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 12H15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.56055 4.97998C4.99055 4.97998 2.06055 7.91 2.06055 11.5C2.06055 13.29 2.79055 14.92 3.97055 16.1" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.0602 2.65991L16.5002 4.99994L12.9902 4.98993" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default RepeateMusicBrokenIcon;
      