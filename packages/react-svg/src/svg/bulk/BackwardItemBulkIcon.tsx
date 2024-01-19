
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BackwardItemBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M21.25 5.14999V7.85001C21.25 9.69001 20.69 10.25 18.85 10.25H16.15C14.31 10.25 13.75 9.69001 13.75 7.85001V5.14999C13.75 3.30999 14.31 2.75 16.15 2.75H18.85C20.69 2.75 21.25 3.30999 21.25 5.14999Z" fill={color} />
<path opacity="0.4" d="M10.25 16.15V18.85C10.25 20.69 9.69 21.25 7.85 21.25H5.15C3.31 21.25 2.75 20.69 2.75 18.85V16.15C2.75 14.31 3.31 13.75 5.15 13.75H7.85C9.69 13.75 10.25 14.31 10.25 16.15Z" fill={color} />
<path d="M16.6291 11.7501V13.6201C16.6291 15.9001 15.8991 16.6301 13.6191 16.6301H11.7491V16.1501C11.7491 13.4901 10.5091 12.2501 7.84914 12.2501H7.36914V10.3801C7.36914 8.10013 8.09914 7.37012 10.3791 7.37012H12.2491V7.85013C12.2491 10.5101 13.4891 11.7501 16.1491 11.7501H16.6291Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BackwardItemBulkIcon;
      