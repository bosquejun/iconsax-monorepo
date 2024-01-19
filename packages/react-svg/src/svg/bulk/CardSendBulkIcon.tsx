
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardSendBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.19 4.31C21.07 4.43 20.91 4.49 20.75 4.49C20.59 4.49 20.43 4.43 20.31 4.31L20.13 4.13V6.37C20.13 6.72 19.85 7 19.5 7C19.15 7 18.87 6.72 18.87 6.37V4.13L18.69 4.31C18.45 4.55 18.05 4.55 17.81 4.31C17.57 4.07 17.57 3.67 17.81 3.43L19.06 2.18C19.11 2.13 19.18 2.09 19.25 2.06C19.27 2.05 19.29 2.05 19.31 2.04C19.36 2.02 19.41 2.01 19.47 2.01C19.49 2.01 19.51 2.01 19.53 2.01C19.6 2.01 19.66 2.02 19.73 2.05C19.74 2.05 19.74 2.05 19.75 2.05C19.82 2.08 19.88 2.12 19.93 2.17C19.94 2.18 19.94 2.18 19.95 2.18L21.2 3.43C21.44 3.67 21.44 4.07 21.19 4.31Z" fill={color} />
<path opacity="0.4" d="M22 7.7699V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H16V5.9699C16 7.2399 16.76 7.9999 18.03 7.9999H20.97C21.37 7.9999 21.71 7.9299 22 7.7699Z" fill={color} />
<path d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CardSendBulkIcon;
      