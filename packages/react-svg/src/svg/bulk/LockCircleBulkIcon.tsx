
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LockCircleBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color} />
<path d="M15.7491 10.73V10C15.7491 9.07 15.7491 6.25 11.9991 6.25C8.24915 6.25 8.24915 9.07 8.24915 10V10.73C7.02915 11 6.61914 11.79 6.61914 13.5V14.5C6.61914 16.7 7.29915 17.38 9.49915 17.38H14.4991C16.6991 17.38 17.3792 16.7 17.3792 14.5V13.5C17.3792 11.79 16.9691 11 15.7491 10.73ZM11.9991 15.1C11.3891 15.1 10.8992 14.61 10.8992 14C10.8992 13.39 11.3891 12.9 11.9991 12.9C12.6091 12.9 13.0991 13.39 13.0991 14C13.0991 14.61 12.6091 15.1 11.9991 15.1ZM14.2491 10.62H9.74915V10C9.74915 8.54 10.1091 7.75 11.9991 7.75C13.8891 7.75 14.2491 8.54 14.2491 10V10.62Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LockCircleBulkIcon;
      