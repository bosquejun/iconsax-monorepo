
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowSquareUpOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M15.5302 14.2101C15.3402 14.2101 15.1502 14.1401 15.0002 13.9901L12.0002 10.9901L9.00016 13.9901C8.71016 14.2801 8.23016 14.2801 7.94016 13.9901C7.65016 13.7001 7.65016 13.2201 7.94016 12.9301L11.4702 9.40012C11.7602 9.11012 12.2402 9.11012 12.5302 9.40012L16.0602 12.9301C16.3502 13.2201 16.3502 13.7001 16.0602 13.9901C15.9102 14.1401 15.7202 14.2101 15.5302 14.2101Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowSquareUpOutlineIcon;
      