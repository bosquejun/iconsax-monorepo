
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TicketExpiredTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.9023 19.8701H17.3723C21.0723 19.8701 21.9923 18.9501 21.9923 15.2501C20.7123 15.2501 19.6823 14.2101 19.6823 12.9401C19.6823 11.6601 20.7123 10.6201 21.9923 10.6201V9.70008C21.9923 6.00008 21.0723 5.08008 17.3723 5.08008H10.9923V11.8701" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M10.9936 16.87V19.87H8.22356C6.74356 19.87 5.87357 18.86 4.91357 16.54L4.73356 16.09C5.94356 15.61 6.53357 14.21 6.02357 13C5.53357 11.79 4.14357 11.21 2.92357 11.71L2.75357 11.28C1.31356 7.76 1.81357 6.53 5.33357 5.08L7.97357 4L10.9936 11.32V13.87" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.16219 19.8701H7.99219" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TicketExpiredTwotoneIcon;
      