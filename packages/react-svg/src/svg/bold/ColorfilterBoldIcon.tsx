
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ColorfilterBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14 15.9991C14 17.7691 13.23 19.3691 12 20.4591C10.94 21.4191 9.54 21.9991 8 21.9991C4.69 21.9991 2 19.3091 2 15.9991C2 13.9743 3.01397 12.1804 4.5554 11.0964C4.80358 10.9219 5.1393 11.0413 5.27324 11.3135C6.21715 13.2322 7.95419 14.669 10.02 15.2291C10.65 15.4091 11.31 15.4991 12 15.4991C12.4872 15.4991 12.9539 15.4529 13.4074 15.3678C13.6958 15.3137 13.9828 15.4985 13.9955 15.7916C13.9985 15.8611 14 15.9305 14 15.9991Z" fill={color} />
<path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill={color} />
<path d="M22 15.9991C22 19.3091 19.31 21.9991 16 21.9991C15.2555 21.9991 14.5393 21.8633 13.8811 21.6131C13.5624 21.492 13.503 21.0841 13.7248 20.8253C14.8668 19.4928 15.5 17.785 15.5 15.9991C15.5 15.6591 15.47 15.3191 15.42 14.9991C15.3902 14.8146 15.4844 14.6333 15.6478 14.5428C16.9719 13.8098 18.0532 12.6866 18.727 11.3144C18.8609 11.0418 19.1968 10.9221 19.4452 11.0968C20.9863 12.1809 22 13.9746 22 15.9991Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ColorfilterBoldIcon;
      