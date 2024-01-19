
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BatteryEmpty1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12.93 4.78906H7.35C3.25 4.78906 2 6.03906 2 10.1391V13.8591C2 17.9591 3.25 19.2091 7.35 19.2091H12.93C17.03 19.2091 18.28 17.9591 18.28 13.8591V10.1391C18.28 6.03906 17.03 4.78906 12.93 4.78906Z" fill={color} />
<path d="M20.4192 9.00047C20.2792 8.99047 20.0992 8.98047 19.8992 8.98047C19.5092 8.98047 19.1992 9.29047 19.1992 9.68047V14.3305C19.1992 14.7205 19.5092 15.0305 19.8992 15.0305C20.0992 15.0305 20.2692 15.0205 20.4392 15.0105C21.9992 14.8305 21.9992 13.7305 21.9992 12.9305V11.0705C21.9992 10.2705 21.9992 9.17047 20.4192 9.00047Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BatteryEmpty1BoldIcon;
      