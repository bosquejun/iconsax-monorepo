
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VolumeLow1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.3301 7.40979C16.3301 4.42979 14.2601 3.28979 11.7401 4.86979L8.82008 6.69979C8.50008 6.88979 8.13008 6.99979 7.76008 6.99979H6.33008C4.33008 6.99979 3.33008 7.99979 3.33008 9.99979V13.9998C3.33008 15.9998 4.33008 16.9998 6.33008 16.9998H7.76008C8.13008 16.9998 8.50008 17.1098 8.82008 17.2998L11.7401 19.1298C14.2601 20.7098 16.3301 19.5598 16.3301 16.5898V11.6498" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.3301 8C21.1101 10.37 21.1101 13.63 19.3301 16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default VolumeLow1BrokenIcon;
      