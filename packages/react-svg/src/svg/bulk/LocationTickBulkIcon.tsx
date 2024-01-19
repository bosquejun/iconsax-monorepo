
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LocationTickBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M20.6207 8.7C19.5807 4.07 15.5407 2 12.0007 2C12.0007 2 12.0007 2 11.9907 2C8.46073 2 4.43073 4.07 3.38073 8.69C2.20073 13.85 5.36073 18.22 8.22073 20.98C9.28073 22 10.6407 22.51 12.0007 22.51C13.3607 22.51 14.7207 22 15.7707 20.98C18.6307 18.22 21.7907 13.86 20.6207 8.7Z" fill={color} />
<path d="M10.7495 13.7499C10.5595 13.7499 10.3695 13.6799 10.2195 13.5299L8.71945 12.0299C8.42945 11.7399 8.42945 11.2599 8.71945 10.9699C9.00945 10.6799 9.48945 10.6799 9.77945 10.9699L10.7495 11.9399L14.2195 8.46994C14.5095 8.17994 14.9895 8.17994 15.2795 8.46994C15.5695 8.75994 15.5695 9.23994 15.2795 9.52994L11.2795 13.5299C11.1295 13.6799 10.9395 13.7499 10.7495 13.7499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LocationTickBulkIcon;
      