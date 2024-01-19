
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PenTool2BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.7513 22.4999H13.2713C14.2313 22.4999 14.8513 21.8199 14.6713 20.9899L14.2613 19.1799H9.76129L9.3513 20.9899C9.1713 21.7699 9.8513 22.4999 10.7513 22.4999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.2208 12.6699L13.1708 11.3399C12.5308 10.5299 11.4808 10.5299 10.8408 11.3399L7.79077 15.2099C7.02077 16.1799 7.02078 16.8099 8.03078 17.6399L9.76078 19.1799" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.2617 19.1698L15.9917 17.6298C16.9617 16.7698 17.0017 16.1697 16.2317 15.1997" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.0117 11.1199V13.6499" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.5195 5H11.5195C10.9695 5 10.5195 4.55 10.5195 4V3C10.5195 2.45 10.9695 2 11.5195 2H12.5195C13.0695 2 13.5195 2.45 13.5195 3V4C13.5195 4.55 13.0695 5 12.5195 5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.26953 14.17H4.26953C4.81953 14.17 5.26953 13.72 5.26953 13.17V12.17C5.26953 11.62 4.81953 11.1699 4.26953 11.1699H3.26953C2.71953 11.1699 2.26953 11.62 2.26953 12.17V13.17C2.26953 13.72 2.71953 14.17 3.26953 14.17Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.7305 14.17H19.7305C19.1805 14.17 18.7305 13.72 18.7305 13.17V12.17C18.7305 11.62 19.1805 11.1699 19.7305 11.1699H20.7305C21.2805 11.1699 21.7305 11.62 21.7305 12.17V13.17C21.7305 13.72 21.2805 14.17 20.7305 14.17Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M3.75 11.17C3.75 9.20004 4.49001 7.41005 5.71001 6.05005" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.5199 3.56006C9.87993 3.64006 9.25992 3.79007 8.66992 4.01007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.2495 11.17C20.2495 7.25004 17.3095 4.03006 13.5195 3.56006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default PenTool2BrokenIcon;
      