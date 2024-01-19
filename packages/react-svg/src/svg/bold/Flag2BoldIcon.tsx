
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Flag2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.1992 7.16L7.19922 3.7V2.75C7.19922 2.34 6.85922 2 6.44922 2C6.03922 2 5.69922 2.34 5.69922 2.75V21.25C5.69922 21.66 6.03922 22 6.44922 22C6.85922 22 7.19922 21.66 7.19922 21.25V17.29L15.4192 13.23C15.4192 13.23 15.4192 13.23 15.4292 13.23C17.0892 12.37 17.9792 11.26 17.9292 10.09C17.8792 8.92 16.9092 7.88 15.1992 7.16Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Flag2BoldIcon;
      