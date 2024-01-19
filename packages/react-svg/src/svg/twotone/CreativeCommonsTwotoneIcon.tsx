
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CreativeCommonsTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M10.8792 14.1499C10.3692 14.5899 9.70914 14.8699 8.98914 14.8699C7.40914 14.8699 6.11914 13.5899 6.11914 11.9999C6.11914 10.4099 7.39914 9.12988 8.98914 9.12988C9.71914 9.12988 10.3792 9.39985 10.8792 9.84985" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M17.8792 14.1499C17.3692 14.5899 16.7091 14.8699 15.9891 14.8699C14.4091 14.8699 13.1191 13.5899 13.1191 11.9999C13.1191 10.4099 14.3991 9.12988 15.9891 9.12988C16.7191 9.12988 17.3792 9.39985 17.8792 9.84985" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CreativeCommonsTwotoneIcon;
      