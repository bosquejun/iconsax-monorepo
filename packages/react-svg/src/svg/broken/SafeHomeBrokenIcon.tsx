
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SafeHomeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22.9998 17.5601V15.37C22.9998 14.95 22.6898 14.49 22.3098 14.33L20.5198 13.6L19.5198 13.1899C18.8898 12.9399 18.1898 12.9399 17.5598 13.1899L14.7798 14.33C14.3998 14.49 14.0898 14.95 14.0898 15.37V17.5601C14.0898 18.8101 14.5498 20.02 15.3398 21C16.0698 21.93 17.1099 22.65 18.2899 22.97C18.4499 23.01 18.6298 23.01 18.7998 22.97C19.7898 22.7 20.6698 22.1499 21.3598 21.4399" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2.0293 11.0101C1.8693 10.0801 2.33929 8.83004 3.07929 8.24004L9.65931 2.98003C10.6693 2.17003 12.3093 2.17004 13.3193 2.99004L19.8993 8.24004C20.6293 8.83004 21.1093 10.0801 20.9493 11.0101L20.5193 13.6L19.5193 13.19C18.8893 12.94 18.1893 12.94 17.5593 13.19L14.7793 14.33C14.3993 14.49 14.0893 14.95 14.0893 15.37V17.5601C14.0893 18.8101 14.5493 20.02 15.3393 21H6.1793C4.8093 21 3.51931 19.9101 3.28931 18.5601L2.7393 15.24" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default SafeHomeBrokenIcon;
      