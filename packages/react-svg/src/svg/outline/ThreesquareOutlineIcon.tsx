
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ThreesquareOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M9.37 22.75H4.62C2.32 22.75 1.25 21.68 1.25 19.38V14.63C1.25 12.32 2.32 11.25 4.62 11.25H7C7.41 11.25 7.75 11.59 7.75 12V14.37C7.75 15.83 8.17 16.25 9.62 16.25H12C12.41 16.25 12.75 16.59 12.75 17V19.38C12.75 21.68 11.68 22.75 9.37 22.75ZM4.62 12.75C3.17 12.75 2.75 13.17 2.75 14.63V19.38C2.75 20.83 3.17 21.25 4.62 21.25H9.37C10.83 21.25 11.25 20.83 11.25 19.38V17.75H9.62C7.32 17.75 6.25 16.68 6.25 14.37V12.75H4.62Z" fill={color} />
<path d="M14.37 17.75H9.62C7.32 17.75 6.25 16.68 6.25 14.37V9.62C6.25 7.32 7.32 6.25 9.62 6.25H12C12.41 6.25 12.75 6.59 12.75 7V9.37C12.75 10.83 13.17 11.25 14.62 11.25H17C17.41 11.25 17.75 11.59 17.75 12V14.37C17.75 16.68 16.68 17.75 14.37 17.75ZM9.62 7.75C8.17 7.75 7.75 8.17 7.75 9.62V14.37C7.75 15.83 8.17 16.25 9.62 16.25H14.37C15.83 16.25 16.25 15.83 16.25 14.37V12.75H14.62C12.32 12.75 11.25 11.68 11.25 9.37V7.75H9.62Z" fill={color} />
<path d="M19.37 12.75H14.62C12.32 12.75 11.25 11.68 11.25 9.37V4.62C11.25 2.32 12.32 1.25 14.62 1.25H19.37C21.68 1.25 22.75 2.32 22.75 4.62V9.37C22.75 11.68 21.68 12.75 19.37 12.75ZM14.62 2.75C13.17 2.75 12.75 3.17 12.75 4.62V9.37C12.75 10.83 13.17 11.25 14.62 11.25H19.37C20.83 11.25 21.25 10.83 21.25 9.37V4.62C21.25 3.17 20.83 2.75 19.37 2.75H14.62Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ThreesquareOutlineIcon;
      