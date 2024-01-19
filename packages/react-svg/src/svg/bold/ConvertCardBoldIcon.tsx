
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ConvertCardBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 4.2V4.31C22 4.59 21.78 4.81 21.5 4.81H12.5C12.22 4.81 12 4.59 12 4.31V4.2C12 2.44 12.44 2 14.22 2H19.78C21.56 2 22 2.44 22 4.2Z" fill={color} />
<path d="M12.5 5.80859C12.22 5.80859 12 6.02859 12 6.30859V7.30859V8.29859C12 10.0586 12.44 10.4986 14.22 10.4986H19.78C21.56 10.4986 22 10.0586 22 8.29859V7.30859V6.30859C22 6.02859 21.78 5.80859 21.5 5.80859H12.5Z" fill={color} />
<path d="M12 15.7V15.81C12 16.09 11.78 16.31 11.5 16.31H2.5C2.22 16.31 2 16.09 2 15.81V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7Z" fill={color} />
<path d="M2.5 17.3086C2.22 17.3086 2 17.5286 2 17.8086V18.8086V19.7986C2 21.5586 2.44 21.9986 4.22 21.9986H9.78C11.56 21.9986 12 21.5586 12 19.7986V18.8086V17.8086C12 17.5286 11.78 17.3086 11.5 17.3086H2.5Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ConvertCardBoldIcon;
      