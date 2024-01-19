
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BankOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21 11.7501H3C2.04 11.7501 1.25 10.9601 1.25 10.0001V6.68013C1.25 6.00013 1.71998 5.31013 2.34998 5.06013L11.35 1.46016C11.73 1.31016 12.27 1.31016 12.65 1.46016L21.65 5.06013C22.28 5.31013 22.75 6.01013 22.75 6.68013V10.0001C22.75 10.9601 21.96 11.7501 21 11.7501ZM12 2.84016C11.96 2.84016 11.92 2.84011 11.9 2.85011L2.90997 6.45015C2.84997 6.48015 2.75 6.61013 2.75 6.68013V10.0001C2.75 10.1401 2.86 10.2501 3 10.2501H21C21.14 10.2501 21.25 10.1401 21.25 10.0001V6.68013C21.25 6.61013 21.16 6.48015 21.09 6.45015L12.09 2.85011C12.07 2.84011 12.04 2.84016 12 2.84016Z" fill={color} />
<path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22V19C1.25 18.04 2.04 17.25 3 17.25H21C21.96 17.25 22.75 18.04 22.75 19V22C22.75 22.41 22.41 22.75 22 22.75ZM2.75 21.25H21.25V19C21.25 18.86 21.14 18.75 21 18.75H3C2.86 18.75 2.75 18.86 2.75 19V21.25Z" fill={color} />
<path d="M4 18.75C3.59 18.75 3.25 18.41 3.25 18V11C3.25 10.59 3.59 10.25 4 10.25C4.41 10.25 4.75 10.59 4.75 11V18C4.75 18.41 4.41 18.75 4 18.75Z" fill={color} />
<path d="M8 18.75C7.59 18.75 7.25 18.41 7.25 18V11C7.25 10.59 7.59 10.25 8 10.25C8.41 10.25 8.75 10.59 8.75 11V18C8.75 18.41 8.41 18.75 8 18.75Z" fill={color} />
<path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V11C11.25 10.59 11.59 10.25 12 10.25C12.41 10.25 12.75 10.59 12.75 11V18C12.75 18.41 12.41 18.75 12 18.75Z" fill={color} />
<path d="M16 18.75C15.59 18.75 15.25 18.41 15.25 18V11C15.25 10.59 15.59 10.25 16 10.25C16.41 10.25 16.75 10.59 16.75 11V18C16.75 18.41 16.41 18.75 16 18.75Z" fill={color} />
<path d="M20 18.75C19.59 18.75 19.25 18.41 19.25 18V11C19.25 10.59 19.59 10.25 20 10.25C20.41 10.25 20.75 10.59 20.75 11V18C20.75 18.41 20.41 18.75 20 18.75Z" fill={color} />
<path d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z" fill={color} />
<path d="M12 9.25C10.76 9.25 9.75 8.24 9.75 7C9.75 5.76 10.76 4.75 12 4.75C13.24 4.75 14.25 5.76 14.25 7C14.25 8.24 13.24 9.25 12 9.25ZM12 6.25C11.59 6.25 11.25 6.59 11.25 7C11.25 7.41 11.59 7.75 12 7.75C12.41 7.75 12.75 7.41 12.75 7C12.75 6.59 12.41 6.25 12 6.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BankOutlineIcon;
      