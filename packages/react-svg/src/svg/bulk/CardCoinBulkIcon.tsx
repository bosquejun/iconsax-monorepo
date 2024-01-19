
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardCoinBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 15.7V16.31H2V15.7C2 13.94 2.43997 13.5 4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7Z" fill={color} />
<path d="M2 16.3101V17.8101V19.8001C2 21.5601 2.43997 22.0001 4.21997 22.0001H9.78003C11.56 22.0001 12 21.5601 12 19.8001V17.8101V16.3101H2Z" fill={color} />
<path opacity="0.4" d="M23 6.5H14C14 8.98 16.02 11 18.5 11C20.99 11 23 8.98 23 6.5Z" fill={color} />
<path d="M23 6.5C23 4.01 20.99 2 18.5 2C16.02 2 14 4.01 14 6.5H23Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CardCoinBulkIcon;
      