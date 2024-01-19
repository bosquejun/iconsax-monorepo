
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Routing2OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.50977 6.5C4.95977 6.5 4.50977 6.05 4.50977 5.5C4.50977 4.95 4.94977 4.5 5.50977 4.5H5.51977C6.06977 4.5 6.51977 4.95 6.51977 5.5C6.51977 6.05 6.06977 6.5 5.50977 6.5Z" fill={color} />
<path d="M18.5098 19.5C17.9598 19.5 17.5098 19.05 17.5098 18.5C17.5098 17.95 17.9498 17.5 18.5098 17.5H18.5198C19.0698 17.5 19.5198 17.95 19.5198 18.5C19.5198 19.05 19.0698 19.5 18.5098 19.5Z" fill={color} />
<path d="M5.4707 9.75C3.1307 9.75 1.2207 7.84 1.2207 5.5C1.2207 3.16 3.1307 1.25 5.4707 1.25C7.8107 1.25 9.7207 3.16 9.7207 5.5C9.7207 7.84 7.8207 9.75 5.4707 9.75ZM5.4707 2.75C3.9507 2.75 2.7207 3.98 2.7207 5.5C2.7207 7.02 3.9507 8.25 5.4707 8.25C6.9907 8.25 8.2207 7.02 8.2207 5.5C8.2207 3.98 6.9907 2.75 5.4707 2.75Z" fill={color} />
<path d="M19.9707 22.75H16.9707C15.4507 22.75 14.2207 21.52 14.2207 20V17C14.2207 15.48 15.4507 14.25 16.9707 14.25H19.9707C21.4907 14.25 22.7207 15.48 22.7207 17V20C22.7207 21.52 21.4907 22.75 19.9707 22.75ZM16.9707 15.75C16.2807 15.75 15.7207 16.31 15.7207 17V20C15.7207 20.69 16.2807 21.25 16.9707 21.25H19.9707C20.6607 21.25 21.2207 20.69 21.2207 20V17C21.2207 16.31 20.6607 15.75 19.9707 15.75H16.9707Z" fill={color} />
<path d="M11.9995 19.75H9.31945C8.15945 19.75 7.14945 19.05 6.74945 17.97C6.33945 16.89 6.63945 15.7 7.50945 14.93L15.4995 7.94C15.9795 7.52 15.9895 6.95 15.8495 6.56C15.6995 6.17 15.3195 5.75 14.6795 5.75H11.9995C11.5895 5.75 11.2495 5.41 11.2495 5C11.2495 4.59 11.5895 4.25 11.9995 4.25H14.6795C15.8395 4.25 16.8495 4.95 17.2495 6.03C17.6595 7.11 17.3595 8.3 16.4895 9.07L8.49945 16.06C8.01945 16.48 8.00945 17.05 8.14945 17.44C8.29945 17.83 8.67945 18.25 9.31945 18.25H11.9995C12.4095 18.25 12.7495 18.59 12.7495 19C12.7495 19.41 12.4095 19.75 11.9995 19.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Routing2OutlineIcon;
      