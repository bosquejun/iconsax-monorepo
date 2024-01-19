
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Scissor1OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.5 10.75C3.16 10.75 1.25 8.84 1.25 6.5C1.25 4.16 3.16 2.25 5.5 2.25C7.84 2.25 9.75 4.16 9.75 6.5C9.75 8.84 7.84 10.75 5.5 10.75ZM5.5 3.75C3.98 3.75 2.75 4.98 2.75 6.5C2.75 8.02 3.98 9.25 5.5 9.25C7.02 9.25 8.25 8.02 8.25 6.5C8.25 4.98 7.02 3.75 5.5 3.75Z" fill={color} />
<path d="M5.5 21.75C3.16 21.75 1.25 19.84 1.25 17.5C1.25 15.16 3.16 13.25 5.5 13.25C7.84 13.25 9.75 15.16 9.75 17.5C9.75 19.84 7.84 21.75 5.5 21.75ZM5.5 14.75C3.98 14.75 2.75 15.98 2.75 17.5C2.75 19.02 3.98 20.25 5.5 20.25C7.02 20.25 8.25 19.02 8.25 17.5C8.25 15.98 7.02 14.75 5.5 14.75Z" fill={color} />
<path d="M8.65066 16.7303C8.42066 16.7303 8.20065 16.6303 8.05065 16.4303C7.80065 16.1003 7.87068 15.6303 8.20068 15.3803L21.5507 5.40027C21.8807 5.15027 22.3507 5.22027 22.6007 5.55027C22.8507 5.88027 22.7807 6.35027 22.4507 6.60027L9.10067 16.5803C8.97067 16.6803 8.81066 16.7303 8.65066 16.7303Z" fill={color} />
<path d="M22.0007 18.72C21.8407 18.72 21.6907 18.67 21.5507 18.57L8.20068 8.59002C7.87068 8.34002 7.80065 7.87002 8.05065 7.54002C8.30065 7.21002 8.77067 7.14002 9.10067 7.39002L22.4507 17.37C22.7807 17.62 22.8507 18.09 22.6007 18.42C22.4507 18.61 22.2307 18.72 22.0007 18.72Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Scissor1OutlineIcon;
      