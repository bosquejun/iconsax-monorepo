
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Bookmark2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17 4.96V12.08C17 14.07 15.59 14.84 13.86 13.8L12.54 13C12.24 12.82 11.76 12.82 11.46 13L10.14 13.8C8.41 14.84 7 14.07 7 12.08V4.99C7.01 3 8.01 2 10 2H14C15.98 2 16.98 2.99 17 4.96Z" fill={color} />
<path d="M22 11.9008V14.9308C22 19.9808 20 22.0008 15 22.0008H9C4 22.0008 2 19.9808 2 14.9308V11.9008C2 9.21083 2.57 7.38083 3.85 6.26083C4.5 5.71083 5.5 6.19083 5.5 7.04083V12.0808C5.5 13.5708 6.11 14.7708 7.17 15.3708C8.24 15.9808 9.6 15.8708 10.92 15.0808L12 14.4308L13.09 15.0808C13.83 15.5308 14.6 15.7608 15.32 15.7608C15.86 15.7608 16.37 15.6308 16.83 15.3708C17.89 14.7708 18.5 13.5708 18.5 12.0808V7.03083C18.5 6.18083 19.51 5.70083 20.15 6.26083C21.43 7.38083 22 9.21083 22 11.9008Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Bookmark2BoldIcon;
      