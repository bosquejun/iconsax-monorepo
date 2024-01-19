
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FavoriteChartBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.1199 14.9414L19.4399 15.5914C19.5999 15.9114 20.0099 16.2114 20.3499 16.2714L20.7799 16.3414C22.0899 16.5614 22.3899 17.5214 21.4599 18.4614L21.0599 18.8614C20.7899 19.1314 20.6499 19.6514 20.7299 20.0314L20.7799 20.2714C21.1399 21.8514 20.2999 22.4614 18.9299 21.6314L18.6399 21.4514C18.2899 21.2414 17.7099 21.2414 17.3599 21.4514L17.0699 21.6314C15.6899 22.4614 14.8599 21.8514 15.2199 20.2714L15.2699 20.0314C15.3499 19.6614 15.2099 19.1314 14.9399 18.8614L14.5399 18.4614C13.6099 17.5114 13.9099 16.5614 15.2199 16.3414L15.6499 16.2714C15.9999 16.2114 16.3999 15.9114 16.5599 15.5914L16.8799 14.9414C17.4999 13.6914 18.4999 13.6914 19.1199 14.9414Z" fill={color} />
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H13.09C13.44 22 13.69 21.64 13.65 21.29C13.61 20.91 13.63 20.46 13.75 19.94C13.77 19.87 13.75 19.79 13.69 19.73L13.47 19.51C12.62 18.65 12.31 17.61 12.61 16.66C12.92 15.72 13.78 15.06 14.97 14.86L15.27 14.81L15.54 14.27C16.09 13.15 16.99 12.5 18 12.5C19.01 12.5 19.91 13.15 20.46 14.27L20.61 14.58C20.68 14.73 20.82 14.83 20.98 14.86C21.07 14.88 21.16 14.9 21.25 14.92C21.6 15.01 22 14.73 22 14.36V7.81C22 4.17 19.83 2 16.19 2ZM16.26 8.96L13.95 11.94C13.66 12.31 13.25 12.55 12.78 12.6C12.32 12.66 11.85 12.53 11.49 12.24L9.66 10.82C9.59 10.76 9.51 10.76 9.47 10.77C9.43 10.77 9.36 10.79 9.3 10.87L6.92 13.96C6.77 14.15 6.55 14.25 6.32 14.25C6.16 14.25 6 14.2 5.86 14.09C5.53 13.84 5.47 13.37 5.72 13.04L8.1 9.95C8.39 9.58 8.8 9.34 9.27 9.28C9.74 9.22 10.2 9.35 10.57 9.64L12.4 11.08C12.47 11.14 12.54 11.13 12.59 11.13C12.63 11.13 12.7 11.11 12.76 11.03L15.07 8.05C15.32 7.72 15.79 7.66 16.12 7.92C16.46 8.17 16.51 8.64 16.26 8.96Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FavoriteChartBoldIcon;
      