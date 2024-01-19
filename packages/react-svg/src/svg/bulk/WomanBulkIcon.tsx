
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WomanBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M19 9C19 12.62 16.26 15.59 12.75 15.96C12.5 15.99 12.25 16 12 16C11.75 16 11.5 15.99 11.25 15.96C7.74 15.59 5 12.62 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z" fill={color} />
<path d="M15.75 19C15.75 19.41 15.41 19.75 15 19.75H12.75V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V19.75H9C8.59 19.75 8.25 19.41 8.25 19C8.25 18.59 8.59 18.25 9 18.25H11.25V15.96C11.5 15.99 11.75 16 12 16C12.25 16 12.5 15.99 12.75 15.96V18.25H15C15.41 18.25 15.75 18.59 15.75 19Z" fill={color} />
        </svg>
      )
    }
    
    
    export default WomanBulkIcon;
      