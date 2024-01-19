
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SecurityBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M3.08984 6.60992C3.08984 5.78992 3.70986 4.85992 4.47986 4.54992L10.0498 2.26995C11.2998 1.75995 12.7098 1.75995 13.9598 2.26995L19.5298 4.54992C20.2898 4.85992 20.9199 5.78992 20.9199 6.60992V10.9999C20.9199 15.8899 17.3698 20.4699 12.5198 21.8099C12.1898 21.8999 11.8298 21.8999 11.4998 21.8099C6.64985 20.4699 3.09985 15.8899 3.09985 10.9999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SecurityBrokenIcon;
      