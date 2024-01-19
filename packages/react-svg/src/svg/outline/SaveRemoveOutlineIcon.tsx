
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SaveRemoveOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.6902 22.7501C14.2502 22.7501 13.7902 22.6201 13.3202 22.3701L9.39023 20.1801C9.20023 20.0801 8.79024 20.0801 8.60023 20.1801L4.67023 22.3701C3.82023 22.8401 2.96023 22.8801 2.29023 22.4901C1.63023 22.1001 1.24023 21.3201 1.24023 20.3601V9.00012C1.24023 6.87012 2.97023 5.14014 5.10023 5.14014H12.8802C15.0102 5.14014 16.7402 6.87012 16.7402 9.00012V20.3601C16.7402 21.3201 16.3602 22.1001 15.6902 22.4901C15.4002 22.6601 15.0602 22.7501 14.6902 22.7501ZM9.00023 18.6001C9.40023 18.6001 9.79023 18.6901 10.1202 18.8701L14.0602 21.0601C14.4202 21.2601 14.7502 21.3101 14.9502 21.1901C15.1402 21.0801 15.2602 20.7601 15.2602 20.3501V8.99011C15.2602 7.69011 14.2002 6.63013 12.9002 6.63013H5.11023C3.81023 6.63013 2.75023 7.69011 2.75023 8.99011V20.3501C2.75023 20.7601 2.87023 21.0801 3.06023 21.1901C3.25023 21.3001 3.59023 21.2501 3.95023 21.0501L7.88023 18.8601C8.20023 18.6901 8.60023 18.6001 9.00023 18.6001Z" fill={color} />
<path d="M7.5893 14.16C7.3993 14.16 7.2093 14.09 7.0593 13.94C6.7693 13.65 6.7693 13.17 7.0593 12.88L9.8893 10.05C10.1793 9.76002 10.6593 9.76002 10.9493 10.05C11.2393 10.34 11.2393 10.82 10.9493 11.11L8.1193 13.94C7.9693 14.09 7.7793 14.16 7.5893 14.16Z" fill={color} />
<path d="M10.4095 14.16C10.2195 14.16 10.0295 14.09 9.87953 13.94L7.04953 11.11C6.75953 10.82 6.75953 10.34 7.04953 10.05C7.33953 9.76002 7.81953 9.76002 8.10953 10.05L10.9395 12.88C11.2295 13.17 11.2295 13.65 10.9395 13.94C10.7995 14.09 10.6095 14.16 10.4095 14.16Z" fill={color} />
<path d="M20.69 18.8698C20.25 18.8698 19.79 18.7397 19.32 18.4897L15.63 16.4297C15.39 16.2997 15.25 16.0498 15.25 15.7798V8.99976C15.25 7.69976 14.19 6.63977 12.89 6.63977H8C7.59 6.63977 7.25 6.29977 7.25 5.88977V5.11975C7.25 2.98975 8.98 1.25977 11.11 1.25977H18.89C21.02 1.25977 22.75 2.98975 22.75 5.11975V16.4798C22.75 17.4398 22.37 18.2197 21.7 18.6097C21.4 18.7797 21.06 18.8698 20.69 18.8698ZM16.75 15.3297L20.06 17.1797C20.42 17.3797 20.75 17.4298 20.95 17.3098C21.14 17.1998 21.26 16.8798 21.26 16.4698V5.10974C21.26 3.80974 20.2 2.74976 18.9 2.74976H11.12C9.82 2.74976 8.76 3.80974 8.76 5.10974V5.12976H12.9C15.03 5.12976 16.76 6.85975 16.76 8.98975V15.3297H16.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SaveRemoveOutlineIcon;
      