
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CardPosBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.25 22H2.75C2.34 22 2 21.66 2 21.25C2 20.84 2.34 20.5 2.75 20.5H21.25C21.66 20.5 22 20.84 22 21.25C22 21.66 21.66 22 21.25 22Z" fill={color} />
<path opacity="0.4" d="M20.5909 13.7002L13.3609 20.9302C11.9409 22.3502 9.65086 22.3502 8.24086 20.9402L3.63086 16.3302L15.9909 3.97021L20.6009 8.58021C22.0109 9.99021 22.0109 12.2802 20.5909 13.7002Z" fill={color} />
<path d="M15.9906 3.97016L3.62055 16.3302L2.71055 15.4202C1.30055 14.0102 1.30055 11.7202 2.72055 10.3002L9.95055 3.07016C11.3706 1.65016 13.6606 1.65016 15.0705 3.06016L15.9906 3.97016Z" fill={color} />
<path d="M12.8903 17.5999L11.5403 18.9499C11.2603 19.2299 10.8103 19.2299 10.5303 18.9499C10.2503 18.6699 10.2503 18.2199 10.5303 17.9399L11.8803 16.5899C12.1603 16.3099 12.6103 16.3099 12.8903 16.5899C13.1703 16.8699 13.1703 17.3199 12.8903 17.5999Z" fill={color} />
<path d="M17.2694 13.22L14.5794 15.91C14.2994 16.19 13.8494 16.19 13.5694 15.91C13.2894 15.63 13.2894 15.18 13.5694 14.9L16.2594 12.21C16.5394 11.93 16.9894 11.93 17.2694 12.21C17.5394 12.49 17.5394 12.94 17.2694 13.22Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CardPosBulkIcon;
      