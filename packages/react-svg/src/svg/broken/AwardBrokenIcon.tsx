
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AwardBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.0198 18.9599C19.7398 17.7999 19.7398 17.7999 19.7398 15.9799V11.0099C19.7398 9.18993 19.7398 9.18993 18.0198 8.02993L13.2898 5.29993C12.5798 4.88993 11.4198 4.88993 10.7098 5.29993L5.97977 8.03993C4.25977 9.19993 4.25977 9.19993 4.25977 11.0199V15.9899C4.25977 17.8099 4.25977 17.8099 5.97977 18.9699L10.7098 21.6999C11.4198 22.1099 12.5798 22.1099 13.2898 21.6999L14.8098 20.8199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.2795 16.4199C12.1295 16.3599 11.8795 16.3599 11.7295 16.4199L10.7495 16.8099C10.1495 17.0499 9.68955 16.7099 9.72955 16.0699L9.78955 15.0199C9.79955 14.8599 9.71955 14.6199 9.61955 14.4999L8.94955 13.6899C8.53955 13.1899 8.70955 12.6499 9.33955 12.4899L10.3595 12.2299C10.5195 12.1899 10.7195 12.0399 10.7995 11.9099L11.3695 11.0199C11.7195 10.4699 12.2895 10.4699 12.6395 11.0199L13.2095 11.9099C13.2995 12.0499 13.4995 12.1899 13.6495 12.2299L14.6695 12.4899C15.2995 12.6499 15.4695 13.1899 15.0595 13.6899L14.3895 14.4999C14.2895 14.6299 14.2095 14.8599 14.2195 15.0199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default AwardBrokenIcon;
      