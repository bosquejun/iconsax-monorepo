
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const GridEraserOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V11C22.75 11.41 22.41 11.75 22 11.75C21.59 11.75 21.25 11.41 21.25 11V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H10C10.41 21.25 10.75 21.59 10.75 22C10.75 22.41 10.41 22.75 10 22.75Z" fill={color} />
<path d="M22.0013 9.25H2.03125C1.62125 9.25 1.28125 8.91 1.28125 8.5C1.28125 8.09 1.62125 7.75 2.03125 7.75H22.0013C22.4113 7.75 22.7513 8.09 22.7513 8.5C22.7513 8.91 22.4113 9.25 22.0013 9.25Z" fill={color} />
<path d="M12.0013 16.25H2.03125C1.62125 16.25 1.28125 15.91 1.28125 15.5C1.28125 15.09 1.62125 14.75 2.03125 14.75H12.0013C12.4113 14.75 12.7513 15.09 12.7513 15.5C12.7513 15.91 12.4113 16.25 12.0013 16.25Z" fill={color} />
<path d="M8.50977 22.74C8.09977 22.74 7.75977 22.4 7.75977 21.99V2.02002C7.75977 1.61002 8.09977 1.27002 8.50977 1.27002C8.91977 1.27002 9.25977 1.61002 9.25977 2.02002V21.99C9.25977 22.4 8.92977 22.74 8.50977 22.74Z" fill={color} />
<path d="M15.5098 12.74C15.0998 12.74 14.7598 12.4 14.7598 11.99V2.02002C14.7598 1.61002 15.0998 1.27002 15.5098 1.27002C15.9198 1.27002 16.2598 1.61002 16.2598 2.02002V11.99C16.2598 12.4 15.9298 12.74 15.5098 12.74Z" fill={color} />
<path d="M15.9492 22.7501C15.4092 22.7501 14.8792 22.5501 14.4592 22.1401L12.8692 20.5401C12.0592 19.7301 12.0592 18.4 12.8692 17.57L14.7792 15.6701C15.0692 15.3801 15.5492 15.3801 15.8392 15.6701L19.3392 19.1701C19.4792 19.3101 19.5592 19.5 19.5592 19.7C19.5592 19.9 19.4792 20.0901 19.3392 20.2301L17.4392 22.1301C17.0192 22.5401 16.4892 22.7501 15.9492 22.7501ZM15.2992 17.2701L13.9292 18.6401C13.6992 18.8701 13.6992 19.2601 13.9292 19.4901L15.5092 21.08C15.7392 21.31 16.1292 21.31 16.3592 21.08L17.7392 19.7101L15.2992 17.2701Z" fill={color} />
<path d="M18.8002 20.4498C18.6002 20.4498 18.4102 20.3699 18.2702 20.2299L14.7702 16.7299C14.4802 16.4399 14.4802 15.9599 14.7702 15.6699L17.5802 12.8499C18.4002 12.0299 19.7402 12.0299 20.5602 12.8499L22.1403 14.4398C22.5303 14.8298 22.7502 15.3599 22.7502 15.9299C22.7502 16.4999 22.5303 17.0199 22.1403 17.4199L19.3402 20.2299C19.1902 20.3799 19.0002 20.4498 18.8002 20.4498ZM16.3702 16.2098L18.8102 18.6499L21.0802 16.3699C21.1902 16.2599 21.2502 16.1098 21.2502 15.9398C21.2502 15.7798 21.1902 15.6199 21.0802 15.5099L19.5002 13.9199C19.2702 13.6899 18.8802 13.6899 18.6502 13.9199L16.3702 16.2098Z" fill={color} />
        </svg>
      )
    }
    
    
    export default GridEraserOutlineIcon;
      