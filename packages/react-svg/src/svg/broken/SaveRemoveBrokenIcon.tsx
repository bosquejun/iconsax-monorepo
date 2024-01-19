
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SaveRemoveBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 20.3499C2 21.7999 3.04 22.4099 4.31 21.7099L8.24 19.5199C8.66 19.2899 9.34 19.2899 9.76 19.5199L13.69 21.7099C14.96 22.4099 16 21.7999 16 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988H5.11C3.4 5.87988 2 7.27987 2 8.98987V16.5699" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.58984 13.4101L10.4098 10.5901" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.4098 13.4101L7.58984 10.5901" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.4 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SaveRemoveBrokenIcon;
      