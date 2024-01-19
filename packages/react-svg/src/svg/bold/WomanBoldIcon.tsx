
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WomanBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19 9C19 5.13 15.87 2 12 2C8.13 2 5 5.13 5 9C5 12.62 7.74 15.59 11.25 15.96V18.25H9C8.59 18.25 8.25 18.59 8.25 19C8.25 19.41 8.59 19.75 9 19.75H11.25V22C11.25 22.41 11.59 22.75 12 22.75C12.41 22.75 12.75 22.41 12.75 22V19.75H15C15.41 19.75 15.75 19.41 15.75 19C15.75 18.59 15.41 18.25 15 18.25H12.75V15.96C16.26 15.59 19 12.62 19 9Z" fill={color} />
        </svg>
      )
    }
    
    
    export default WomanBoldIcon;
      