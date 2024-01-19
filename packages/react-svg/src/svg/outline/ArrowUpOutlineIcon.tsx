
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowUpOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.6698 18.75H9.3298C7.4498 18.75 6.0198 18.07 5.3098 16.84C4.5998 15.61 4.7298 14.03 5.6698 12.4L8.3398 7.77C9.2798 6.15 10.5798 5.25 11.9998 5.25C13.4198 5.25 14.7198 6.15 15.6598 7.78L18.3298 12.41C19.2698 14.04 19.3998 15.62 18.6898 16.85C17.9798 18.07 16.5498 18.75 14.6698 18.75ZM11.9998 6.75C11.1398 6.75 10.2998 7.38 9.6398 8.53L6.9698 13.16C6.3098 14.31 6.1798 15.35 6.6098 16.1C7.0398 16.85 8.0098 17.26 9.3298 17.26H14.6698C15.9898 17.26 16.9598 16.85 17.3898 16.1C17.8198 15.35 17.6898 14.31 17.0298 13.16L14.3598 8.53C13.6998 7.38 12.8598 6.75 11.9998 6.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowUpOutlineIcon;
      