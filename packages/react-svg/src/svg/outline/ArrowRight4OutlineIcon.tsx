
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowRight4OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.9 19.1498C8.27 19.1498 7.68 18.9998 7.16 18.6998C5.93 17.9898 5.25 16.5598 5.25 14.6798V9.3298C5.25 7.4498 5.93 6.0198 7.16 5.3098C8.39 4.5998 9.96 4.7298 11.6 5.6698L16.23 8.3398C17.86 9.2798 18.76 10.5798 18.76 11.9998C18.76 13.4198 17.86 14.7198 16.23 15.6598L11.6 18.3298C10.66 18.8798 9.74 19.1498 8.9 19.1498ZM8.9 6.3598C8.53 6.3598 8.19 6.4398 7.9 6.6098C7.16 7.0398 6.75 7.9998 6.75 9.3298V14.6698C6.75 15.9898 7.16 16.9598 7.91 17.3898C8.66 17.8198 9.7 17.6898 10.85 17.0298L15.48 14.3598C16.63 13.6998 17.26 12.8598 17.26 11.9998C17.26 11.1398 16.63 10.2998 15.48 9.6398L10.85 6.9698C10.14 6.5598 9.48 6.3598 8.9 6.3598Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowRight4OutlineIcon;
      