
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Calendar2OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill={color} />
<path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill={color} />
<path d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z" fill={color} />
<path d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill={color} />
<path d="M8.5 14.5C8.37 14.5 8.24 14.47 8.12 14.42C8 14.37 7.89001 14.3 7.79001 14.21C7.70001 14.11 7.62999 14 7.57999 13.88C7.52999 13.76 7.5 13.63 7.5 13.5C7.5 13.24 7.61001 12.98 7.79001 12.79C7.89001 12.7 8 12.63 8.12 12.58C8.3 12.5 8.50001 12.48 8.70001 12.52C8.76001 12.53 8.82 12.55 8.88 12.58C8.94 12.6 9 12.63 9.06 12.67C9.11 12.71 9.15999 12.75 9.20999 12.79C9.24999 12.84 9.29999 12.89 9.32999 12.94C9.36999 13 9.40001 13.06 9.42001 13.12C9.45001 13.18 9.47001 13.24 9.48001 13.3C9.49001 13.37 9.5 13.43 9.5 13.5C9.5 13.76 9.38999 14.02 9.20999 14.21C9.01999 14.39 8.76 14.5 8.5 14.5Z" fill={color} />
<path d="M12 14.4999C11.74 14.4999 11.48 14.3899 11.29 14.2099C11.25 14.1599 11.21 14.1099 11.17 14.0599C11.13 13.9999 11.1 13.9399 11.08 13.8799C11.05 13.8199 11.03 13.7599 11.02 13.6999C11.01 13.6299 11 13.5699 11 13.4999C11 13.3699 11.03 13.2399 11.08 13.1199C11.13 12.9999 11.2 12.8899 11.29 12.7899C11.57 12.5099 12.02 12.4199 12.38 12.5799C12.51 12.6299 12.61 12.6999 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.5699 12.99 13.6299 12.98 13.6999C12.97 13.7599 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.79 14.1099 12.75 14.1599 12.71 14.2099C12.61 14.2999 12.51 14.3699 12.38 14.4199C12.26 14.4699 12.13 14.4999 12 14.4999Z" fill={color} />
<path d="M8.5 17.9999C8.37 17.9999 8.24 17.9699 8.12 17.9199C8 17.8699 7.89001 17.7999 7.79001 17.7099C7.70001 17.6099 7.62999 17.5099 7.57999 17.3799C7.52999 17.2599 7.5 17.1299 7.5 16.9999C7.5 16.7399 7.61001 16.4799 7.79001 16.2899C7.89001 16.1999 8 16.1299 8.12 16.0799C8.49 15.9199 8.92999 16.0099 9.20999 16.2899C9.24999 16.3399 9.29999 16.3899 9.32999 16.4399C9.36999 16.4999 9.40001 16.5599 9.42001 16.6199C9.45001 16.6799 9.47001 16.7399 9.48001 16.8099C9.49001 16.8699 9.5 16.9399 9.5 16.9999C9.5 17.2599 9.38999 17.5199 9.20999 17.7099C9.01999 17.8899 8.76 17.9999 8.5 17.9999Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Calendar2OutlineIcon;
      