
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Map1OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.3795 21.13C20.1795 21.13 19.9895 21.05 19.8495 20.91L13.4695 14.53C13.1795 14.24 13.1795 13.76 13.4695 13.47L21.1995 5.74001C21.3895 5.55001 21.6795 5.48001 21.9395 5.55001C22.1995 5.63001 22.3994 5.84001 22.4594 6.10001C22.6494 6.95001 22.7495 7.90001 22.7495 9.00001V15C22.7495 17.77 22.1695 19.64 20.9095 20.91C20.7695 21.05 20.5595 21.08 20.3795 21.13ZM15.0594 14L20.3195 19.26C20.9495 18.29 21.2495 16.91 21.2495 15V9.00001C21.2495 8.59001 21.2394 8.21001 21.2094 7.85001L15.0594 14Z" fill={color} />
<path d="M6.26999 22.48C6.20999 22.48 6.16001 22.47 6.10001 22.46C2.79001 21.7 1.25 19.33 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C19.33 1.25 21.7 2.79001 22.46 6.10001C22.52 6.35001 22.44 6.62 22.26 6.8L6.79999 22.26C6.65999 22.4 6.46999 22.48 6.26999 22.48ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 18.47 3.71001 20.21 6.04001 20.9L20.89 6.05C20.21 3.72 18.46 2.75999 14.99 2.75999H9V2.75Z" fill={color} />
<path d="M15.0004 22.7499H9.00037C7.90037 22.7499 6.96038 22.6599 6.10038 22.4599C5.83038 22.3999 5.62036 22.1999 5.55036 21.9399C5.47036 21.6799 5.55036 21.3999 5.74036 21.1999L13.4704 13.4699C13.7604 13.1799 14.2404 13.1799 14.5304 13.4699L20.9104 19.8499C21.0504 19.9899 21.1304 20.1799 21.1304 20.3799C21.1304 20.5799 21.0504 20.7699 20.9104 20.9099C19.6404 22.1699 17.7704 22.7499 15.0004 22.7499ZM7.85038 21.2099C8.21038 21.2399 8.59037 21.2499 9.00037 21.2499H15.0004C16.9204 21.2499 18.2904 20.9499 19.2604 20.3199L14.0004 15.0599L7.85038 21.2099Z" fill={color} />
<path d="M9.11896 13.31C8.48896 13.31 7.85895 13.08 7.35895 12.61C5.76895 11.1 5.12898 9.44005 5.50898 7.82005C5.88898 6.16005 7.33896 5.04004 9.11896 5.04004C10.899 5.04004 12.349 6.16005 12.729 7.82005C13.099 9.45005 12.459 11.1 10.869 12.61C10.379 13.07 9.74896 13.31 9.11896 13.31ZM6.96897 8.15004C6.64897 9.51004 7.56896 10.7301 8.39896 11.5201C8.80896 11.91 9.43897 11.91 9.83897 11.5201C10.659 10.7401 11.579 9.52004 11.269 8.15004C10.999 6.96004 9.93896 6.53004 9.11896 6.53004C8.29896 6.53004 7.24897 6.96004 6.96897 8.15004Z" fill={color} />
<path d="M9.15039 9.49023C8.60039 9.49023 8.15039 9.04023 8.15039 8.49023C8.15039 7.94023 8.59039 7.49023 9.15039 7.49023H9.1604C9.7104 7.49023 10.1604 7.94023 10.1604 8.49023C10.1604 9.04023 9.70039 9.49023 9.15039 9.49023Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Map1OutlineIcon;
      