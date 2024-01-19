
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShieldSlashTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M7.83984 20.0201L9.42984 21.2101C10.8398 22.2701 13.1598 22.2701 14.5698 21.2101L18.8698 18.0001C19.8198 17.2901 20.5998 15.7401 20.5998 14.5601V7.12012" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.9802 4.34006C18.8302 4.25006 18.6702 4.17006 18.5102 4.10006L13.5202 2.23006C12.6902 1.92006 11.3302 1.92006 10.5002 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L5.34016 18.1401" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 2L2 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ShieldSlashTwotoneIcon;
      