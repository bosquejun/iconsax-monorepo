
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeadphonesTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M15.5 21.9998V7.21973" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.0998 5.29999C10.0998 5.78999 9.89982 6.25001 9.56982 6.57001C9.24982 6.90001 8.7998 7.09998 8.2998 7.09998H6.0498C6.3298 6.72998 6.49982 6.25 6.49982 5.75V4.84998C6.49982 4.34998 6.3298 3.87 6.0498 3.5H8.2998C9.2898 3.5 10.0998 4.30999 10.0998 5.29999Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.5 4.85002V5.75005C6.5 6.25005 6.32999 6.73002 6.04999 7.10002C5.28999 8.11002 3.73 8.45002 2.28 7.16002C2.12 7.02002 2 6.72005 2 6.50005V4.16002C2 3.97002 2.10001 3.69003 2.23001 3.55003C3.49001 2.23003 5.01 2.42005 5.84 3.25005C5.91 3.32005 5.97999 3.40004 6.04999 3.49004C6.32999 3.87004 6.5 4.35002 6.5 4.85002Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.9004 5.29999C13.9004 5.78999 14.1004 6.25001 14.4304 6.57001C14.7504 6.90001 15.2004 7.09998 15.7004 7.09998H17.9504C17.6704 6.72998 17.5004 6.25 17.5004 5.75V4.84998C17.5004 4.34998 17.6704 3.87 17.9504 3.5H15.7004C14.7104 3.5 13.9004 4.30999 13.9004 5.29999Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.5 4.85002V5.75005C17.5 6.25005 17.67 6.73002 17.95 7.10002C18.71 8.11002 20.27 8.45002 21.72 7.16002C21.88 7.02002 22 6.72005 22 6.50005V4.16002C22 3.97002 21.9 3.69003 21.77 3.55003C20.51 2.23003 18.99 2.42005 18.16 3.25005C18.09 3.32005 18.02 3.40004 17.95 3.49004C17.67 3.87004 17.5 4.35002 17.5 4.85002Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default HeadphonesTwotoneIcon;
      