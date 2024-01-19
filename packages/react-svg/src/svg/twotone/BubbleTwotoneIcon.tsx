
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BubbleTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.5909 12.26C18.4242 12.26 20.7209 9.96323 20.7209 7.13C20.7209 4.29678 18.4242 2 15.5909 2C12.7577 2 10.4609 4.29678 10.4609 7.13C10.4609 9.96323 12.7577 12.26 15.5909 12.26Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path opacity="0.4" d="M6.35928 19.4398C8.06032 19.4398 9.4393 18.0608 9.4393 16.3598C9.4393 14.6587 8.06032 13.2798 6.35928 13.2798C4.65825 13.2798 3.2793 14.6587 3.2793 16.3598C3.2793 18.0608 4.65825 19.4398 6.35928 19.4398Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path opacity="0.4" d="M16.6205 21.9999C18.0344 21.9999 19.1805 20.8537 19.1805 19.4399C19.1805 18.026 18.0344 16.8799 16.6205 16.8799C15.2067 16.8799 14.0605 18.026 14.0605 19.4399C14.0605 20.8537 15.2067 21.9999 16.6205 21.9999Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
        </svg>
      )
    }
    
    
    export default BubbleTwotoneIcon;
      