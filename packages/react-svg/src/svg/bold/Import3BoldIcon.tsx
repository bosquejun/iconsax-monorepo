
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Import3BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.14 9.89844H12.68V13.5684L14.25 11.9984C14.54 11.7084 15.02 11.7084 15.31 11.9984C15.6 12.2884 15.6 12.7684 15.31 13.0584L12.46 15.8984C12.17 16.1884 11.69 16.1884 11.4 15.8984L8.55 13.0584C8.4 12.9084 8.33 12.7184 8.33 12.5284C8.33 12.3384 8.41 12.1484 8.56 11.9984C8.85 11.7084 9.33 11.7084 9.62 11.9984L11.18 13.5584V9.89844H2.86C2.38 9.89844 2 10.2784 2 10.7584C2 16.6484 6.11 20.7584 12 20.7584C17.89 20.7584 22 16.6484 22 10.7584C22 10.2784 21.62 9.89844 21.14 9.89844Z" fill={color} />
<path d="M12.6797 3.98828C12.6797 3.57828 12.3397 3.23828 11.9297 3.23828C11.5197 3.23828 11.1797 3.57828 11.1797 3.98828V9.88828H12.6797V3.98828Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Import3BoldIcon;
      