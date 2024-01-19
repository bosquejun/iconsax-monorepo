
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudConnectionBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.2007 14.7811C18.3407 15.5711 17.2007 16.0111 16.0307 16.0011H6.3707C2.3007 15.7111 2.2907 9.80114 6.3707 9.51114H6.4107C3.6207 1.75114 15.4107 -1.33886 16.7607 6.80114C20.5307 7.28114 22.0607 12.2911 19.2007 14.7811Z" fill={color} />
<path d="M18.75 21C18.75 21.41 18.41 21.75 18 21.75H14C13.95 21.75 13.91 21.75 13.86 21.73C13.57 22.47 12.84 23 12 23C11.16 23 10.43 22.47 10.14 21.73C10.09 21.75 10.05 21.75 10 21.75H6C5.59 21.75 5.25 21.41 5.25 21C5.25 20.59 5.59 20.25 6 20.25H10C10.05 20.25 10.09 20.25 10.14 20.27C10.34 19.75 10.75 19.34 11.27 19.14C11.25 19.09 11.25 19.05 11.25 19V16H12.75V19C12.75 19.05 12.75 19.09 12.73 19.14C13.25 19.34 13.66 19.75 13.86 20.27C13.91 20.25 13.95 20.25 14 20.25H18C18.41 20.25 18.75 20.59 18.75 21Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CloudConnectionBoldIcon;
      