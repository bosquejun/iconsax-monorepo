
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LikeBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.98001C3 3.34001 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.34001 21 4.98001V15.89C21 17.52 19.66 18.86 18 18.86Z" fill={color} />
<path d="M12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51001C7.5 8.12001 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12001 16.5 9.51001C16.49 12.66 13.58 14.51 12.28 14.96Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LikeBulkIcon;
      