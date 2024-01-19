
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Lamp1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.7807 13.6502V18.5902H3.2207V13.6502C3.2207 8.83018 7.1207 4.93018 11.9407 4.93018H12.0607C16.8807 4.93018 20.7807 8.83018 20.7807 13.6502Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M12 2V4.92999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M15.6496 18.5898C15.5196 20.4998 13.9296 21.9998 11.9996 21.9998C10.0696 21.9998 8.47961 20.4998 8.34961 18.5898H15.6496Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Lamp1TwotoneIcon;
      