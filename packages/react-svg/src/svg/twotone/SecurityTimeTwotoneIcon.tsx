
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SecurityTimeTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.4901 2.23006L5.50015 4.10006C4.35015 4.53006 3.41016 5.89006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19017 17.2801 5.14017 17.9901L9.44016 21.2001C10.8502 22.2601 13.1701 22.2601 14.5801 21.2001L18.8802 17.9901C19.8302 17.2801 20.6101 15.7301 20.6101 14.5501V7.12006C20.6101 5.89006 19.6701 4.53006 18.5201 4.10006L13.5302 2.23006C12.6802 1.92006 11.3201 1.92006 10.4901 2.23006Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M12.25 10.25V11.18C12.25 11.53 12.07 11.86 11.76 12.04L11 12.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SecurityTimeTwotoneIcon;
      