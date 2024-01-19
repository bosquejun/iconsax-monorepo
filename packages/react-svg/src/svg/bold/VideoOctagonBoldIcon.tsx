
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VideoOctagonBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.5119 5.85L13.5719 2.42C12.6019 1.86 11.4019 1.86 10.4219 2.42L4.49187 5.85C3.52187 6.41 2.92188 7.45 2.92188 8.58V15.42C2.92188 16.54 3.52187 17.58 4.49187 18.15L10.4319 21.58C11.4019 22.14 12.6019 22.14 13.5819 21.58L19.5219 18.15C20.4919 17.59 21.0919 16.55 21.0919 15.42V8.58C21.0819 7.45 20.4819 6.42 19.5119 5.85ZM14.2519 13.4L13.2119 14L12.1719 14.6C10.8419 15.37 9.75187 14.74 9.75187 13.2V12V10.8C9.75187 9.26 10.8419 8.63 12.1719 9.4L13.2119 10L14.2519 10.6C15.5819 11.37 15.5819 12.63 14.2519 13.4Z" fill={color} />
        </svg>
      )
    }
    
    
    export default VideoOctagonBoldIcon;
      