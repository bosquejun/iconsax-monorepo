
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const StickerBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.9595 11.6608C20.7695 10.9108 19.3895 10.5008 17.9695 10.5008C13.8295 10.5008 10.4695 13.8608 10.4695 18.0008C10.4695 19.4208 10.8695 20.7908 11.6195 21.9808C11.1595 21.9708 10.6895 21.9208 10.2095 21.8508C6.0995 21.1508 2.7895 17.8208 2.1095 13.7008C0.979502 6.85075 6.8195 1.01075 13.6695 2.14075C17.7895 2.82075 21.1195 6.13075 21.8195 10.2408C21.8995 10.7208 21.9495 11.2008 21.9595 11.6608Z" fill={color} />
<path d="M13.3807 21.86C12.5007 20.82 11.9707 19.47 11.9707 18C11.9707 14.69 14.6607 12 17.9707 12C19.4407 12 20.7907 12.53 21.8307 13.41" fill={color} />
        </svg>
      )
    }
    
    
    export default StickerBoldIcon;
      