
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SidebarTopBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.9493 4.13C20.6593 3.71 20.2893 3.34 19.8693 3.05C18.9193 2.36 17.6793 2 16.1893 2H7.8093C4.3693 2 2.2393 3.94 2.0293 7.22H21.9793C21.8993 5.99 21.5493 4.95 20.9493 4.13Z" fill={color} />
<path d="M2 16.1888C2 17.6788 2.36 18.9188 3.05 19.8688C3.34 20.2888 3.71 20.6588 4.13 20.9488C5.08 21.6388 6.32 21.9987 7.81 21.9987H16.19C19.83 21.9987 22 19.8288 22 16.1888V8.71875H2V16.1888ZM8.91 14.4387L11.47 11.8787C11.76 11.5887 12.24 11.5887 12.53 11.8787L15.09 14.4387C15.24 14.5887 15.31 14.7787 15.31 14.9688C15.31 15.1588 15.24 15.3487 15.09 15.4987C14.8 15.7887 14.32 15.7887 14.03 15.4987L12 13.4787L9.97 15.4987C9.68 15.7887 9.2 15.7887 8.91 15.4987C8.62 15.2087 8.62 14.7387 8.91 14.4387Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SidebarTopBoldIcon;
      