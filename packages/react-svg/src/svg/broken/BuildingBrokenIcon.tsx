
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BuildingBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M1.9707 5.9501V5.09011C1.9707 2.47011 3.9207 1.2801 6.3107 2.4501L10.7507 4.63011C11.7107 5.10011 12.5007 6.3501 12.5007 7.4101V22.0001H4.0807C2.9207 22.0001 1.9707 21.0701 1.9707 19.9301V10.0201" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.97 15.0599V18.8399C21.97 20.9999 20.97 21.9999 18.81 21.9999H12.5V10.4199L12.97 10.5199L17.47 11.5299L19.5 11.9799C20.82 12.2699 21.9 12.9499 21.96 14.8699C21.97 14.9299 21.97 14.9899 21.97 15.0599Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.5 9H8.97" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.5 13H8.97" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.4707 11.53V14.75C17.4707 15.99 16.4607 17 15.2207 17C13.9807 17 12.9707 15.99 12.9707 14.75V10.52L17.4707 11.53Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.9607 14.87C21.9007 16.05 20.9207 17 19.7207 17C18.4807 17 17.4707 15.99 17.4707 14.75V11.53L19.5007 11.98C20.8207 12.27 21.9007 12.95 21.9607 14.87Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default BuildingBrokenIcon;
      