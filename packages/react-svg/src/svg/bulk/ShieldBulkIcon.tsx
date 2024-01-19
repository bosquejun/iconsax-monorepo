
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShieldBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M20.4098 6.95994V9.79994L7.39984 19.3399L4.76984 17.3699C4.11984 16.8799 3.58984 15.8299 3.58984 15.0199V6.95994C3.58984 5.83994 4.44984 4.59994 5.49984 4.20994L10.9698 2.15994C11.5398 1.94994 12.4598 1.94994 13.0298 2.15994L18.4998 4.20994C19.5498 4.59994 20.4098 5.83994 20.4098 6.95994Z" fill={color} />
<path d="M20.4103 11.1699V15.0199C20.4103 15.8299 19.8803 16.8799 19.2303 17.3699L13.7603 21.4599C13.2803 21.8199 12.6403 21.9999 12.0003 21.9999C11.3603 21.9999 10.7203 21.8199 10.2403 21.4599L8.32031 20.0299L20.4103 11.1699Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ShieldBulkIcon;
      