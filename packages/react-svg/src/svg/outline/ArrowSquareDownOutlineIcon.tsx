
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowSquareDownOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M12.0002 14.9098C11.8102 14.9098 11.6202 14.8398 11.4702 14.6898L7.94016 11.1598C7.65016 10.8698 7.65016 10.3898 7.94016 10.0998C8.23016 9.80982 8.71016 9.80982 9.00016 10.0998L12.0002 13.0998L15.0002 10.0998C15.2902 9.80982 15.7702 9.80982 16.0602 10.0998C16.3502 10.3898 16.3502 10.8698 16.0602 11.1598L12.5302 14.6898C12.3802 14.8398 12.1902 14.9098 12.0002 14.9098Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowSquareDownOutlineIcon;
      