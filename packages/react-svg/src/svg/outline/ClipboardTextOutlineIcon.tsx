
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ClipboardTextOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 12.9502H8C7.59 12.9502 7.25 12.6102 7.25 12.2002C7.25 11.7902 7.59 11.4502 8 11.4502H15C15.41 11.4502 15.75 11.7902 15.75 12.2002C15.75 12.6102 15.41 12.9502 15 12.9502Z" fill={color} />
<path d="M12.38 16.9502H8C7.59 16.9502 7.25 16.6102 7.25 16.2002C7.25 15.7902 7.59 15.4502 8 15.4502H12.38C12.79 15.4502 13.13 15.7902 13.13 16.2002C13.13 16.6102 12.79 16.9502 12.38 16.9502Z" fill={color} />
<path d="M14 6.75H10C9.04 6.75 7.25 6.75 7.25 4C7.25 1.25 9.04 1.25 10 1.25H14C14.96 1.25 16.75 1.25 16.75 4C16.75 4.96 16.75 6.75 14 6.75ZM10 2.75C9.01 2.75 8.75 2.75 8.75 4C8.75 5.25 9.01 5.25 10 5.25H14C15.25 5.25 15.25 4.99 15.25 4C15.25 2.75 14.99 2.75 14 2.75H10Z" fill={color} />
<path d="M15 22.7499H9C3.38 22.7499 2.25 20.1699 2.25 15.9999V9.99993C2.25 5.43993 3.9 3.48993 7.96 3.27993C8.36 3.25993 8.73 3.56993 8.75 3.98993C8.77 4.40993 8.45 4.74993 8.04 4.76993C5.2 4.92993 3.75 5.77993 3.75 9.99993V15.9999C3.75 19.6999 4.48 21.2499 9 21.2499H15C19.52 21.2499 20.25 19.6999 20.25 15.9999V9.99993C20.25 5.77993 18.8 4.92993 15.96 4.76993C15.55 4.74993 15.23 4.38993 15.25 3.97993C15.27 3.56993 15.63 3.24993 16.04 3.26993C20.1 3.48993 21.75 5.43993 21.75 9.98993V15.9899C21.75 20.1699 20.62 22.7499 15 22.7499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ClipboardTextOutlineIcon;
      