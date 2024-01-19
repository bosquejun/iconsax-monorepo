
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PlayCircleBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill={color} />
<path d="M14.9694 10.2301L12.0694 8.56012C11.3494 8.14012 10.4794 8.14012 9.75938 8.56012C9.03938 8.98012 8.60938 9.72012 8.60938 10.5601V13.9101C8.60938 14.7401 9.03938 15.4901 9.75938 15.9101C10.1194 16.1201 10.5194 16.2201 10.9094 16.2201C11.3094 16.2201 11.6994 16.1201 12.0594 15.9101L14.9594 14.2401C15.6794 13.8201 16.1094 13.0801 16.1094 12.2401C16.1294 11.4001 15.6994 10.6501 14.9694 10.2301Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PlayCircleBulkIcon;
      