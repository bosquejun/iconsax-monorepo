
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VerifyBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M10.7509 2.45007C11.4409 1.86007 12.5709 1.86007 13.2709 2.45007L14.8509 3.81007C15.1509 4.07007 15.7109 4.28007 16.1109 4.28007H17.8109C18.8709 4.28007 19.7409 5.15007 19.7409 6.21007V7.91007C19.7409 8.30007 19.9509 8.87007 20.2109 9.17007L21.5709 10.7501C22.1609 11.4401 22.1609 12.5701 21.5709 13.2701L20.2109 14.8501C19.9509 15.1501 19.7409 15.7101 19.7409 16.1101V17.8101C19.7409 18.8701 18.8709 19.7401 17.8109 19.7401H16.1109C15.7209 19.7401 15.1509 19.9501 14.8509 20.2101L13.2709 21.5701C12.5809 22.1601 11.4509 22.1601 10.7509 21.5701L9.17086 20.2101C8.87086 19.9501 8.31086 19.7401 7.91086 19.7401H6.18086C5.12086 19.7401 4.25086 18.8701 4.25086 17.8101V16.1001C4.25086 15.7101 4.04086 15.1501 3.79086 14.8501L2.44086 13.2601C1.86086 12.5701 1.86086 11.4501 2.44086 10.7601L3.79086 9.17007C4.04086 8.87007 4.25086 8.31007 4.25086 7.92007V6.20007C4.25086 5.14007 5.12086 4.27007 6.18086 4.27007H7.91086C8.30086 4.27007 8.87086 4.06007 9.17086 3.80007L10.7509 2.45007Z" fill={color} />
<path d="M10.7905 15.17C10.5905 15.17 10.4005 15.09 10.2605 14.95L7.84055 12.53C7.55055 12.24 7.55055 11.76 7.84055 11.47C8.13055 11.18 8.61055 11.18 8.90055 11.47L10.7905 13.36L15.0905 9.06003C15.3805 8.77003 15.8605 8.77003 16.1505 9.06003C16.4405 9.35003 16.4405 9.83003 16.1505 10.12L11.3205 14.95C11.1805 15.09 10.9905 15.17 10.7905 15.17Z" fill={color} />
        </svg>
      )
    }
    
    
    export default VerifyBulkIcon;
      