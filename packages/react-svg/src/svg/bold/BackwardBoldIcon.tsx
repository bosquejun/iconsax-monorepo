
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BackwardBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.9983 8.34032V15.6603C21.9983 17.1603 20.3683 18.1003 19.0683 17.3503L15.8983 15.5203L12.7283 13.6903L12.2383 13.4103V10.5903L12.7283 10.3103L15.8983 8.48032L19.0683 6.65032C20.3683 5.90032 21.9983 6.84032 21.9983 8.34032Z" fill={color} />
<path d="M12.2414 8.34032V15.6603C12.2414 17.1603 10.6114 18.1003 9.32141 17.3503L6.14141 15.5203L2.97141 13.6903C1.68141 12.9403 1.68141 11.0603 2.97141 10.3103L6.14141 8.48032L9.32141 6.65032C10.6114 5.90032 12.2414 6.84032 12.2414 8.34032Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BackwardBoldIcon;
      