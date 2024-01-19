
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SmileysBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 6.19995C2 3.19995 3.2 2 6.2 2H9.8C12.8 2 14 3.19995 14 6.19995V10C11.21 10.05 10.05 11.21 10 14H6.2C3.2 14 2 12.8 2 9.80005" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.95922 5.86996C6.42922 5.50996 5.72922 5.50998 5.19922 5.88998" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.9592 5.86996C10.4292 5.50996 9.72922 5.50998 9.19922 5.88998" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.16078 11.42H5.84078C5.54078 11.42 5.30078 11.18 5.30078 10.88C5.30078 9.39 6.51078 8.18005 8.00078 8.18005C8.64078 8.18005 9.23078 8.40002 9.69078 8.77002" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 17.8C22 20.8 20.8 22 17.8 22H14.2C11.2 22 10 20.8 10 17.8V14C10.05 11.21 11.21 10.05 14 10H17.8C20.8 10 22 11.2 22 14.2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.9592 13.62C14.4292 13.98 13.7292 13.98 13.1992 13.6" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.9592 13.62C18.4292 13.98 17.7292 13.98 17.1992 13.6" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.8408 16.1801H18.1608C18.4608 16.1801 18.7008 16.42 18.7008 16.72C18.7008 18.21 17.4908 19.42 16.0008 19.42C14.5108 19.42 13.3008 18.21 13.3008 16.72C13.3008 16.42 13.5408 16.1801 13.8408 16.1801Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SmileysBrokenIcon;
      