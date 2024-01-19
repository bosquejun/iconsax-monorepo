
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VolumeHighOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.55 20.5901C11.76 20.5901 10.89 20.3101 10.02 19.7601L7.1 17.9301C6.9 17.8101 6.67 17.7401 6.44 17.7401H5C2.58 17.7401 1.25 16.4101 1.25 13.9901V9.99011C1.25 7.57011 2.58 6.24011 5 6.24011H6.43C6.66 6.24011 6.89 6.17011 7.09 6.05011L10.01 4.22011C11.47 3.31011 12.89 3.14011 14.01 3.76011C15.13 4.38011 15.74 5.67011 15.74 7.40011V16.5701C15.74 18.2901 15.12 19.5901 14.01 20.2101C13.57 20.4701 13.07 20.5901 12.55 20.5901ZM5 7.75011C3.42 7.75011 2.75 8.42011 2.75 10.0001V14.0001C2.75 15.5801 3.42 16.2501 5 16.2501H6.43C6.95 16.2501 7.45 16.3901 7.89 16.6701L10.81 18.5001C11.77 19.1001 12.68 19.2601 13.29 18.9201C13.9 18.5801 14.25 17.7301 14.25 16.6001V7.41011C14.25 6.27011 13.9 5.42011 13.29 5.09011C12.68 4.75011 11.77 4.90011 10.81 5.51011L7.88 7.33011C7.45 7.61011 6.94 7.75011 6.43 7.75011H5Z" fill={color} />
<path d="M18.0003 16.7498C17.8403 16.7498 17.6903 16.6998 17.5503 16.5998C17.2203 16.3498 17.1503 15.8798 17.4003 15.5498C18.9703 13.4598 18.9703 10.5398 17.4003 8.44978C17.1503 8.11978 17.2203 7.64978 17.5503 7.39978C17.8803 7.14978 18.3503 7.21978 18.6003 7.54978C20.5603 10.1698 20.5603 13.8298 18.6003 16.4498C18.4503 16.6498 18.2303 16.7498 18.0003 16.7498Z" fill={color} />
<path d="M19.8304 19.2498C19.6704 19.2498 19.5204 19.1998 19.3804 19.0998C19.0504 18.8498 18.9804 18.3798 19.2304 18.0498C21.9004 14.4898 21.9004 9.50978 19.2304 5.94978C18.9804 5.61978 19.0504 5.14978 19.3804 4.89978C19.7104 4.64978 20.1804 4.71978 20.4304 5.04978C23.5004 9.13978 23.5004 14.8598 20.4304 18.9498C20.2904 19.1498 20.0604 19.2498 19.8304 19.2498Z" fill={color} />
        </svg>
      )
    }
    
    
    export default VolumeHighOutlineIcon;
      