
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StopCircleBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill={color} />
<path d="M10.7695 16.23H13.2295C14.8895 16.23 16.2295 14.89 16.2295 13.23V10.77C16.2295 9.11002 14.8895 7.77002 13.2295 7.77002H10.7695C9.10953 7.77002 7.76953 9.11002 7.76953 10.77V13.23C7.76953 14.89 9.10953 16.23 10.7695 16.23Z" fill={color} />
        </svg>
      )
    }
    
    
    export default StopCircleBulkIcon;
      