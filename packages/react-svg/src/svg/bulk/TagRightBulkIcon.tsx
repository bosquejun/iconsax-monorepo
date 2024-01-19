
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TagRightBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.8794 6.12009L3.92936 20.0701C3.49936 20.5001 2.77936 20.4601 2.42936 19.9701C1.92936 19.2801 1.82937 18.3201 2.34937 17.4901L5.10937 13.0601C5.47937 12.4701 5.47937 11.5101 5.10937 10.9201L2.34937 6.49009C1.41937 5.01009 2.48936 3.09009 4.22936 3.09009H15.6794C16.3594 3.09009 17.1994 3.56009 17.5594 4.13009L18.0294 4.87009C18.2594 5.28009 18.2094 5.79009 17.8794 6.12009Z" fill={color} />
<path opacity="0.4" d="M21.6299 13.11L16.4499 20.01C16.0899 20.5 15.2899 20.9 14.6699 20.9H7.50986C6.61986 20.9 6.16987 19.82 6.79987 19.19L18.3099 7.67999C18.7599 7.22999 19.5299 7.30999 19.8699 7.85999L21.7199 10.83C22.1299 11.47 22.0899 12.5 21.6299 13.11Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TagRightBulkIcon;
      