
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AlignRightOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.9 20H7.1C5.18 20 4.25 19.02 4.25 17.02V15.98C4.25 13.98 5.18 13 7.1 13H18.9C19.31 13 19.65 13.34 19.65 13.75C19.65 14.16 19.31 14.5 18.9 14.5H7.1C6.09 14.5 5.75 14.71 5.75 15.98V17.02C5.75 18.29 6.09 18.5 7.1 18.5H18.9C19.31 18.5 19.65 18.84 19.65 19.25C19.65 19.66 19.31 20 18.9 20Z" fill={color} />
<path d="M18.9 11.5H12.1C10.18 11.5 9.25 10.52 9.25 8.52V7.48C9.25 5.47 10.18 4.5 12.1 4.5H18.9C19.31 4.5 19.65 4.84 19.65 5.25C19.65 5.66 19.31 6 18.9 6H12.1C11.09 6 10.75 6.21 10.75 7.48V8.52C10.75 9.79 11.09 10 12.1 10H18.9C19.31 10 19.65 10.34 19.65 10.75C19.65 11.16 19.31 11.5 18.9 11.5Z" fill={color} />
<path d="M19 22.7402C18.59 22.7402 18.25 22.4002 18.25 21.9902V1.99023C18.25 1.58023 18.59 1.24023 19 1.24023C19.41 1.24023 19.75 1.58023 19.75 1.99023V21.9902C19.75 22.4002 19.41 22.7402 19 22.7402Z" fill={color} />
        </svg>
      )
    }
    
    
    export default AlignRightOutlineIcon;
      