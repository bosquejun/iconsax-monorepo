
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ForwardItemBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.72937 14.9699C6.64937 14.5699 6.60938 14.1199 6.60938 13.6099V10.3799C6.60938 7.68988 7.68938 6.60986 10.3794 6.60986H13.6094C16.2994 6.60986 17.3794 7.68988 17.3794 10.3799V13.6099C17.3794 16.2999 16.2994 17.3799 13.6094 17.3799H10.3794" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22.0005 5.76999V9C22.0005 11.69 20.9205 12.77 18.2305 12.77H17.3805V10.39C17.3805 7.70001 16.3005 6.62 13.6105 6.62H11.2305V5.76999C11.2305 3.07999 12.3105 2 15.0005 2H18.2305C20.9205 2 22.0005 3.07999 22.0005 5.76999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.77 17.38V18.23C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23V15C2 12.31 3.08 11.23 5.77 11.23H6.62" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default ForwardItemBrokenIcon;
      