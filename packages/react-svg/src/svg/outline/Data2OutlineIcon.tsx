
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Data2OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M7 8.75H4C2.48 8.75 1.25 7.52 1.25 6V4C1.25 2.48 2.48 1.25 4 1.25H7C8.52 1.25 9.75 2.48 9.75 4V6C9.75 7.52 8.52 8.75 7 8.75ZM4 2.75C3.31 2.75 2.75 3.31 2.75 4V6C2.75 6.69 3.31 7.25 4 7.25H7C7.69 7.25 8.25 6.69 8.25 6V4C8.25 3.31 7.69 2.75 7 2.75H4Z" fill={color} />
<path d="M20.8 7.75H17.2C16.12 7.75 15.25 6.86999 15.25 5.79999V4.20001C15.25 3.12001 16.13 2.25 17.2 2.25H20.8C21.88 2.25 22.75 3.13001 22.75 4.20001V5.79999C22.75 6.87999 21.88 7.75 20.8 7.75ZM17.2 3.75C16.96 3.75 16.75 3.96001 16.75 4.20001V5.79999C16.75 6.03999 16.96 6.25 17.2 6.25H20.8C21.04 6.25 21.25 6.03999 21.25 5.79999V4.20001C21.25 3.96001 21.04 3.75 20.8 3.75H17.2Z" fill={color} />
<path d="M20.8 15.25H17.2C16.12 15.25 15.25 14.37 15.25 13.3V11.7C15.25 10.62 16.13 9.75 17.2 9.75H20.8C21.88 9.75 22.75 10.63 22.75 11.7V13.3C22.75 14.38 21.88 15.25 20.8 15.25ZM17.2 11.25C16.96 11.25 16.75 11.46 16.75 11.7V13.3C16.75 13.54 16.96 13.75 17.2 13.75H20.8C21.04 13.75 21.25 13.54 21.25 13.3V11.7C21.25 11.46 21.04 11.25 20.8 11.25H17.2Z" fill={color} />
<path d="M16 5.75H9C8.59 5.75 8.25 5.41 8.25 5C8.25 4.59 8.59 4.25 9 4.25H16C16.41 4.25 16.75 4.59 16.75 5C16.75 5.41 16.41 5.75 16 5.75Z" fill={color} />
<path d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16" fill={color} />
<path d="M16 20.75H14.5C12.98 20.75 11.75 19.52 11.75 18V5C11.75 4.59 12.09 4.25 12.5 4.25C12.91 4.25 13.25 4.59 13.25 5V18C13.25 18.69 13.81 19.25 14.5 19.25H16C16.41 19.25 16.75 19.59 16.75 20C16.75 20.41 16.41 20.75 16 20.75Z" fill={color} />
<path d="M16 13.25H12.5C12.09 13.25 11.75 12.91 11.75 12.5C11.75 12.09 12.09 11.75 12.5 11.75H16C16.41 11.75 16.75 12.09 16.75 12.5C16.75 12.91 16.41 13.25 16 13.25Z" fill={color} />
<path d="M20.8 22.75H17.2C16.12 22.75 15.25 21.87 15.25 20.8V19.2C15.25 18.12 16.13 17.25 17.2 17.25H20.8C21.88 17.25 22.75 18.13 22.75 19.2V20.8C22.75 21.88 21.88 22.75 20.8 22.75ZM17.2 18.75C16.96 18.75 16.75 18.96 16.75 19.2V20.8C16.75 21.04 16.96 21.25 17.2 21.25H20.8C21.04 21.25 21.25 21.04 21.25 20.8V19.2C21.25 18.96 21.04 18.75 20.8 18.75H17.2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Data2OutlineIcon;
      