
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartSearchBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 20.9C11.78 20.9 11.55 20.87 11.38 20.81C8.48 19.82 2 15.69 2 8.67999C2 7.27999 2.51 6.00002 3.36 5.02002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.4905 12C21.8105 10.98 22.0005 9.88 22.0005 8.69C22.0005 5.6 19.5106 3.09998 16.4406 3.09998C14.6206 3.09998 13.0105 3.98003 12.0005 5.34003C10.9905 3.98003 9.37055 3.09998 7.56055 3.09998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.7391 21C19.5064 21 20.9391 19.5673 20.9391 17.8C20.9391 16.0327 19.5064 14.6 17.7391 14.6C15.9717 14.6 14.5391 16.0327 14.5391 17.8C14.5391 19.5673 15.9717 21 17.7391 21Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.5391 21.6L20.5391 20.6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default HeartSearchBrokenIcon;
      