
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ChartSquareBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={color} />
<path d="M10.1103 11.1504H7.4603C6.8303 11.1504 6.32031 11.6603 6.32031 12.2903V17.4103H10.1103V11.1504Z" fill={color} />
<path opacity="0.4" d="M12.7596 6.6001H11.2396C10.6096 6.6001 10.0996 7.11011 10.0996 7.74011V17.4001H13.8896V7.74011C13.8896 7.11011 13.3896 6.6001 12.7596 6.6001Z" fill={color} />
<path d="M16.5504 12.8501H13.9004V17.4001H17.6904V13.9901C17.6804 13.3601 17.1704 12.8501 16.5504 12.8501Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ChartSquareBulkIcon;
      