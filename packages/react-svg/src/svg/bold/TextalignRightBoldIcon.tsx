
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TextalignRightBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z" fill={color} />
<path d="M21.0013 10.25H11.5312C11.1213 10.25 10.7812 9.91 10.7812 9.5C10.7812 9.09 11.1213 8.75 11.5312 8.75H21.0013C21.4113 8.75 21.7513 9.09 21.7513 9.5C21.7513 9.91 21.4113 10.25 21.0013 10.25Z" fill={color} />
<path d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z" fill={color} />
<path d="M21.0013 20.25H11.5312C11.1213 20.25 10.7812 19.91 10.7812 19.5C10.7812 19.09 11.1213 18.75 11.5312 18.75H21.0013C21.4113 18.75 21.7513 19.09 21.7513 19.5C21.7513 19.91 21.4113 20.25 21.0013 20.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TextalignRightBoldIcon;
      