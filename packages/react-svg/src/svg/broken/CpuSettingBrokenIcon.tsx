
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CpuSettingBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20 9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.35 8C15.8 7.3 14.88 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 14.88 7.3 15.8 7.99 16.35" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.00977 4V2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 4V2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16 4V2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20 8H22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8.00977 20V22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 8H4" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 12H4" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 16H4" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.7091 18.5899C17.5873 18.5899 18.2991 17.878 18.2991 16.9999C18.2991 16.1218 17.5873 15.4099 16.7091 15.4099C15.831 15.4099 15.1191 16.1218 15.1191 16.9999C15.1191 17.878 15.831 18.5899 16.7091 18.5899Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.4102 17.46V16.53C11.4102 15.98 11.8602 15.53 12.4102 15.53C13.3702 15.53 13.7602 14.85 13.2802 14.02C13.0002 13.54 13.1702 12.92 13.6502 12.65L14.5602 12.12C14.9802 11.87 15.5202 12.02 15.7702 12.44L15.8302 12.54C16.3102 13.37 17.0902 13.37 17.5702 12.54L17.6302 12.44C17.8802 12.02 18.4202 11.88 18.8402 12.12L19.7502 12.65C20.2302 12.93 20.4002 13.54 20.1202 14.02C19.6402 14.85 20.0302 15.53 20.9902 15.53C21.5402 15.53 21.9902 15.98 21.9902 16.53V17.46C21.9902 18.01 21.5402 18.46 20.9902 18.46C20.0302 18.46 19.6402 19.14 20.1202 19.97C20.4002 20.45 20.2302 21.07 19.7502 21.34L18.8402 21.87C18.4202 22.12 17.8802 21.97 17.6302 21.55L17.5702 21.45C17.0902 20.62 16.3102 20.62 15.8302 21.45L15.7702 21.55C15.5202 21.97 14.9802 22.11 14.5602 21.87L13.6502 21.34C13.1702 21.06 13.0002 20.45 13.2802 19.97C13.7602 19.14 13.3702 18.46 12.4102 18.46C11.8602 18.47 11.4102 18.02 11.4102 17.46Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default CpuSettingBrokenIcon;
      