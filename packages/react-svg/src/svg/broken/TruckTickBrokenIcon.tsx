
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TruckTickBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 2V12C15 13.1 14.1 14 13 14H2V7.62C2.73 8.49 3.85003 9.03 5.09003 9C6.10003 8.98 7.01 8.59 7.69 7.94C8 7.68 8.26002 7.34999 8.46002 6.98999C8.82002 6.37999 9.02 5.65997 9 4.90997C8.97 3.73997 8.45001 2.71 7.64001 2H15Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.2905 9H19.0005C18.4505 9 18.0005 9.45 18.0005 10V13C18.0005 13.55 18.4505 14 19.0005 14H22.0005V17C22.0005 18.66 20.6605 20 19.0005 20H18.0005C18.0005 18.9 17.1005 18 16.0005 18C14.9005 18 14.0005 18.9 14.0005 20H10.0005C10.0005 18.9 9.10049 18 8.00049 18C6.90049 18 6.00049 18.9 6.00049 20H5.00049C3.94049 20 3.01047 19.45 2.48047 18.63" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 14H13C14.1 14 15 13.1 15 12V5H16.84C17.2 5 17.55 5.10002 17.85 5.27002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.9992 4.90999C9.0192 5.65999 8.81922 6.38001 8.45922 6.99001C8.25922 7.35001 7.9992 7.68002 7.6892 7.94002C7.0092 8.59002 6.09922 8.98002 5.08922 9.00002C3.84922 9.03002 2.7292 8.49001 1.9992 7.62001C1.8592 7.47001 1.7392 7.30002 1.6292 7.13002C1.2392 6.54002 1.0192 5.84005 0.999195 5.09005C0.969195 3.83005 1.52919 2.68001 2.42919 1.93001C3.10919 1.37001 3.96917 1.02002 4.90917 1.00002C5.95917 0.98002 6.91921 1.36002 7.63921 2.00002C8.44921 2.71002 8.9692 3.73999 8.9992 4.90999Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.43945 5.03003L4.44946 5.98999L6.53943 3.96997" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TruckTickBrokenIcon;
      