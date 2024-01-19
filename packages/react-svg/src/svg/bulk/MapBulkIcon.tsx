
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MapBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M19.8796 20.9401C18.9296 21.6401 17.6796 22.0001 16.1896 22.0001H7.8096C7.5696 22.0001 7.32961 21.9901 7.09961 21.9601L13.9996 15.0601L19.8796 20.9401Z" fill={color} />
<path opacity="0.4" d="M22.0005 7.8101V16.1901C22.0005 17.6801 21.6406 18.9301 20.9406 19.8801L15.0605 14.0001L21.9605 7.1001C21.9905 7.3301 22.0005 7.5701 22.0005 7.8101Z" fill={color} />
<path opacity="0.4" d="M15.06 14L20.94 19.88C20.65 20.3 20.3 20.65 19.88 20.94L14 15.06L7.10001 21.96C6.46001 21.92 5.88001 21.79 5.35001 21.59C3.21001 20.81 2 18.91 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C18.91 2 20.81 3.21 21.59 5.35C21.79 5.88 21.92 6.46 21.96 7.1L15.06 14Z" fill={color} />
<path d="M15.0596 14.0001L20.9396 19.8801C20.6496 20.3001 20.2996 20.6501 19.8796 20.9401L13.9996 15.0601L7.09961 21.9601C6.45961 21.9201 5.87961 21.7901 5.34961 21.5901L5.73959 21.2001L21.5896 5.3501C21.7896 5.8801 21.9196 6.4601 21.9596 7.1001L15.0596 14.0001Z" fill={color} />
<path d="M12.2408 7.92979C11.8608 6.27979 10.4008 5.53979 9.12078 5.52979C7.84078 5.52979 6.38079 6.26978 6.00079 7.91978C5.58079 9.74978 6.70078 11.2798 7.71078 12.2398C8.11078 12.6198 8.61078 12.7998 9.12078 12.7998C9.63078 12.7998 10.1308 12.6098 10.5308 12.2398C11.5408 11.2798 12.6608 9.74979 12.2408 7.92979ZM9.15078 9.48978C8.60078 9.48978 8.15078 9.03978 8.15078 8.48978C8.15078 7.93978 8.59078 7.48978 9.15078 7.48978H9.16079C9.71079 7.48978 10.1608 7.93978 10.1608 8.48978C10.1608 9.03978 9.70078 9.48978 9.15078 9.48978Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MapBulkIcon;
      