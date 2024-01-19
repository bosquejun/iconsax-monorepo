
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShieldSecurityBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M10.9608 2.10989L5.46078 4.16989C4.41078 4.56989 3.55078 5.80989 3.55078 6.93989V15.0399C3.55078 15.8499 4.08078 16.9199 4.73078 17.3999L10.2308 21.5099C11.2008 22.2399 12.7908 22.2399 13.7608 21.5099L19.2608 17.3999C19.9108 16.9099 20.4408 15.8499 20.4408 15.0399V6.93989C20.4408 5.81989 19.5808 4.56988 18.5308 4.17988L13.0308 2.11989C12.4708 1.89989 11.5308 1.89989 10.9608 2.10989Z" fill={color} />
<path d="M14.5 10.5C14.5 9.12 13.38 8 12 8C10.62 8 9.5 9.12 9.5 10.5C9.5 11.62 10.24 12.55 11.25 12.87V15.5C11.25 15.91 11.59 16.25 12 16.25C12.41 16.25 12.75 15.91 12.75 15.5V12.87C13.76 12.55 14.5 11.62 14.5 10.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ShieldSecurityBulkIcon;
      