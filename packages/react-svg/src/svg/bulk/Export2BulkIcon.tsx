
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Export2BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} />
<path d="M16.7475 7H11.9175C11.5075 7 11.1675 7.34 11.1675 7.75C11.1675 8.16 11.5075 8.5 11.9175 8.5H14.9375L7.2175 16.22C6.9275 16.51 6.9275 16.99 7.2175 17.28C7.3675 17.43 7.5575 17.5 7.7475 17.5C7.9375 17.5 8.1275 17.43 8.2775 17.28L15.9975 9.56V12.58C15.9975 12.99 16.3375 13.33 16.7475 13.33C17.1575 13.33 17.4975 12.99 17.4975 12.58V7.75C17.4975 7.34 17.1575 7 16.7475 7Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Export2BulkIcon;
      