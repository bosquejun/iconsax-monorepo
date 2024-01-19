
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BackwardItem1LinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 5.14999V7.85001C22 10.1 21.1 11 18.85 11H16.15C13.9 11 13 10.1 13 7.85001V5.14999C13 2.89999 13.9 2 16.15 2H18.85C21.1 2 22 2.89999 22 5.14999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.38 11.0001V13.6201C17.38 16.3101 16.31 17.3801 13.62 17.3801H11V16.1501C11 13.9001 10.1 13.0001 7.85 13.0001H6.62V10.3801C6.62 7.69013 7.69 6.62012 10.38 6.62012H13V7.85013C13 10.1001 13.9 11.0001 16.15 11.0001H17.38Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BackwardItem1LinearIcon;
      