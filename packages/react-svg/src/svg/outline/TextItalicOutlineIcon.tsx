
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TextItalicOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.8809 3.75H9.62086C9.21086 3.75 8.88086 3.41 8.88086 3C8.88086 2.59 9.22086 2.25 9.63086 2.25H18.8809C19.2909 2.25 19.6309 2.59 19.6309 3C19.6309 3.41 19.2909 3.75 18.8809 3.75Z" fill={color} />
<path d="M14.3791 21.75H5.11914C4.70914 21.75 4.36914 21.41 4.36914 21C4.36914 20.59 4.70914 20.25 5.11914 20.25H14.3691C14.7791 20.25 15.1191 20.59 15.1191 21C15.1191 21.41 14.7891 21.75 14.3791 21.75Z" fill={color} />
<path d="M9.7501 21.7501C9.6901 21.7501 9.6301 21.7401 9.5701 21.7301C9.1701 21.6301 8.9201 21.2201 9.0201 20.8201L13.5201 2.8201C13.6201 2.4201 14.0201 2.1701 14.4301 2.2701C14.8301 2.3701 15.0801 2.7801 14.9801 3.1801L10.4801 21.1801C10.3901 21.5201 10.0901 21.7501 9.7501 21.7501Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TextItalicOutlineIcon;
      