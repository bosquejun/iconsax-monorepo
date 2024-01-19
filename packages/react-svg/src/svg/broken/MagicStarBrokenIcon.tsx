
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MagicStarBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M4.27028 6.41999C3.68028 4.51999 4.74027 3.46998 6.63027 4.08998L9.58028 5.05998C10.0803 5.21998 10.8303 5.10997 11.2503 4.79997L14.3303 2.57997C16.0003 1.37997 17.3302 2.07998 17.2902 4.12998L17.2202 7.91999C17.2102 8.43999 17.5403 9.12998 17.9603 9.43998L20.4403 11.32C22.0303 12.52 21.7703 13.99 19.8703 14.59L16.6403 15.6C16.1003 15.77 15.5303 16.36 15.3903 16.91L14.6203 19.85C14.0103 22.17 12.4902 22.4 11.2302 20.36L9.47024 17.51C9.15024 16.99 8.39024 16.6 7.79024 16.63L4.45028 16.8C2.06028 16.92 1.38027 15.54 2.94027 13.72L4.92025 11.42C5.11025 11.2 5.24026 10.9 5.31026 10.58" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9108 22L18.8809 18.97" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MagicStarBrokenIcon;
      