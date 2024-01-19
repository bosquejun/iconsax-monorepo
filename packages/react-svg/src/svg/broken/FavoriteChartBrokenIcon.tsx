
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FavoriteChartBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.51001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.5492 16.9799C20.2492 16.9299 19.8892 16.6599 19.7492 16.3799L19.4692 15.8099C18.9292 14.7199 18.0492 14.7199 17.5192 15.8099L17.2392 16.3799C17.0992 16.6599 16.7492 16.9199 16.4392 16.9799L16.0592 17.0399C14.9192 17.2299 14.6492 18.0699 15.4692 18.8999L15.8192 19.2499C16.0492 19.4899 16.1792 19.9499 16.1092 20.2699L16.0592 20.4799C15.7492 21.8599 16.4792 22.3899 17.6792 21.6699L17.9392 21.5199C18.2492 21.3399 18.7492 21.3399 19.0592 21.5199L19.3192 21.6699C20.5292 22.3999 21.2592 21.8599 20.9392 20.4799L20.8892 20.2699" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FavoriteChartBrokenIcon;
      