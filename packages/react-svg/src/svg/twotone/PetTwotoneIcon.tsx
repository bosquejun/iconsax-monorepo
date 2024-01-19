
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PetTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.41064 16.75C4.17064 19.64 6.35064 22 9.25064 22H14.0406C17.3006 22 19.5406 19.37 19.0006 16.15C18.4306 12.77 15.1706 10 11.7406 10C8.02064 10 4.72064 13.04 4.41064 16.75Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.34" d="M10.4707 7.5C11.8514 7.5 12.9707 6.38071 12.9707 5C12.9707 3.61929 11.8514 2.5 10.4707 2.5C9.08999 2.5 7.9707 3.61929 7.9707 5C7.9707 6.38071 9.08999 7.5 10.4707 7.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.34" d="M17.3008 8.7002C18.4053 8.7002 19.3008 7.80476 19.3008 6.7002C19.3008 5.59563 18.4053 4.7002 17.3008 4.7002C16.1962 4.7002 15.3008 5.59563 15.3008 6.7002C15.3008 7.80476 16.1962 8.7002 17.3008 8.7002Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.34" d="M21 12.7002C21.8284 12.7002 22.5 12.0286 22.5 11.2002C22.5 10.3718 21.8284 9.7002 21 9.7002C20.1716 9.7002 19.5 10.3718 19.5 11.2002C19.5 12.0286 20.1716 12.7002 21 12.7002Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.34" d="M3.9707 10.7002C5.07527 10.7002 5.9707 9.80476 5.9707 8.7002C5.9707 7.59563 5.07527 6.7002 3.9707 6.7002C2.86613 6.7002 1.9707 7.59563 1.9707 8.7002C1.9707 9.80476 2.86613 10.7002 3.9707 10.7002Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PetTwotoneIcon;
      