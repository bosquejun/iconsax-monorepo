
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VolumeMuteTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.5 9.99979V13.9998C5.5 15.9998 6.5 16.9998 8.5 16.9998H9.93C10.3 16.9998 10.67 17.1098 10.99 17.2998L13.91 19.1298C16.43 20.7098 18.5 19.5598 18.5 16.5898V7.40979C18.5 4.42979 16.43 3.28979 13.91 4.86979L10.99 6.69979C10.67 6.88979 10.3 6.99979 9.93 6.99979H8.5C6.5 6.99979 5.5 7.99979 5.5 9.99979Z" stroke={color} stroke-width="1.5" />
        </svg>
      )
    }
    
    
    export default VolumeMuteTwotoneIcon;
      