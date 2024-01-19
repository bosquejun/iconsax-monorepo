
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartCircleOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={color} />
<path d="M11.9994 18.2501C11.7894 18.2501 11.5894 18.2201 11.4194 18.1601C9.26937 17.4301 5.85938 14.8101 5.85938 10.9101C5.85938 8.83013 7.53938 7.14014 9.60938 7.14014C10.5094 7.14014 11.3394 7.45013 12.0094 8.01013C12.6794 7.45013 13.5194 7.14014 14.3994 7.14014C16.4694 7.14014 18.1494 8.83013 18.1494 10.9101C18.1494 14.8001 14.7394 17.4201 12.5794 18.1601C12.4094 18.2201 12.1994 18.2501 11.9994 18.2501ZM9.59938 8.65012C8.35938 8.65012 7.34938 9.67014 7.34938 10.9201C7.34938 14.4101 10.7194 16.3501 11.8994 16.7501C11.9394 16.7601 12.0394 16.7601 12.0794 16.7501C13.2594 16.3501 16.6294 14.4101 16.6294 10.9201C16.6294 9.67014 15.6194 8.65012 14.3794 8.65012C13.6794 8.65012 13.0094 8.99012 12.5894 9.56012C12.3094 9.94012 11.6694 9.94012 11.3894 9.56012C10.9694 8.98012 10.3194 8.65012 9.59938 8.65012Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HeartCircleOutlineIcon;
      