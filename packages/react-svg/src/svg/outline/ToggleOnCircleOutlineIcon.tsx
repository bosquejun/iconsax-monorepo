
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ToggleOnCircleOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14 20.75H10C5.17 20.75 1.25 16.82 1.25 12C1.25 7.18 5.17 3.25 10 3.25H14C18.83 3.25 22.75 7.18 22.75 12C22.75 16.82 18.83 20.75 14 20.75ZM10 4.75C6 4.75 2.75 8 2.75 12C2.75 16 6 19.25 10 19.25H14C18 19.25 21.25 16 21.25 12C21.25 8 18 4.75 14 4.75H10Z" fill={color} />
<path d="M14 16.75C11.38 16.75 9.25 14.62 9.25 12C9.25 9.38 11.38 7.25 14 7.25C16.62 7.25 18.75 9.38 18.75 12C18.75 14.62 16.62 16.75 14 16.75ZM14 8.75C12.21 8.75 10.75 10.21 10.75 12C10.75 13.79 12.21 15.25 14 15.25C15.79 15.25 17.25 13.79 17.25 12C17.25 10.21 15.79 8.75 14 8.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ToggleOnCircleOutlineIcon;
      