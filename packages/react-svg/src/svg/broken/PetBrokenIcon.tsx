
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PetBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.41064 16.75C4.17064 19.64 6.35064 22 9.25064 22H14.0406C17.3006 22 19.5406 19.37 19.0006 16.15C18.4306 12.77 15.1706 10 11.7406 10C9.46064 10 7.34064 11.14 5.97064 12.87" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.4707 7.5C11.8514 7.5 12.9707 6.38071 12.9707 5C12.9707 3.61929 11.8514 2.5 10.4707 2.5C9.08999 2.5 7.9707 3.61929 7.9707 5C7.9707 6.38071 9.08999 7.5 10.4707 7.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.3008 8.69995C18.4053 8.69995 19.3008 7.80452 19.3008 6.69995C19.3008 5.59538 18.4053 4.69995 17.3008 4.69995C16.1962 4.69995 15.3008 5.59538 15.3008 6.69995C15.3008 7.80452 16.1962 8.69995 17.3008 8.69995Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21 12.7C21.8284 12.7 22.5 12.0284 22.5 11.2C22.5 10.3715 21.8284 9.69995 21 9.69995C20.1716 9.69995 19.5 10.3715 19.5 11.2C19.5 12.0284 20.1716 12.7 21 12.7Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.9707 10.7C5.07527 10.7 5.9707 9.80452 5.9707 8.69995C5.9707 7.59538 5.07527 6.69995 3.9707 6.69995C2.86613 6.69995 1.9707 7.59538 1.9707 8.69995C1.9707 9.80452 2.86613 10.7 3.9707 10.7Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PetBrokenIcon;
      