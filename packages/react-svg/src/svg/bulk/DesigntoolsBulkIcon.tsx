
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DesigntoolsBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.0391 13.2799L20.1191 12.3799L12.3691 20.1199L13.2991 21.0499C14.0791 21.8299 14.8891 22.2199 15.6891 22.2199C16.4891 22.2199 17.2991 21.8299 18.0791 21.0499L21.0391 18.0899C22.6291 16.4899 22.6291 14.8799 21.0391 13.2799Z" fill={color} />
<path d="M10.6898 2.92994C9.11976 1.35994 7.46977 1.35994 5.89977 2.92994L2.92977 5.88994C1.36977 7.45994 1.36977 9.10994 2.92977 10.6799L3.84977 11.5999L11.5998 3.84994L10.6898 2.92994Z" fill={color} />
<path opacity="0.4" d="M21.8098 3.94009C20.4998 7.21009 17.5098 11.4801 14.6598 14.2701C14.2498 11.6901 12.1898 9.67009 9.58984 9.31009C12.3898 6.45009 16.6898 3.42009 19.9698 2.10009C20.5498 1.88009 21.1298 2.05009 21.4898 2.41009C21.8698 2.79009 22.0498 3.36009 21.8098 3.94009Z" fill={color} />
<path d="M14.6595 14.2701C14.1595 14.7601 13.6595 15.2101 13.1795 15.5901L11.2095 17.1701C10.9595 17.3501 10.7095 17.5001 10.4295 17.6201C10.4295 17.4301 10.4095 17.2401 10.3895 17.0401C10.2795 16.2101 9.89953 15.4201 9.22953 14.7501C8.53953 14.0701 7.71953 13.6801 6.86953 13.5701C6.66953 13.5501 6.45953 13.5401 6.26953 13.5501C6.37953 13.2401 6.54953 12.9501 6.75953 12.7101L8.31953 10.7401C8.68953 10.2701 9.11953 9.79006 9.58953 9.31006C12.1895 9.67006 14.2495 11.6901 14.6595 14.2701Z" fill={color} />
<path opacity="0.4" d="M10.4298 17.6198C10.4298 18.7198 10.0098 19.7698 9.20976 20.5598C8.59976 21.1798 7.77977 21.5998 6.77977 21.7198L4.32976 21.9898C2.98976 22.1398 1.83976 20.9898 1.98976 19.6398L2.25976 17.1798C2.49976 14.9898 4.32976 13.5898 6.26976 13.5498C6.45976 13.5398 6.66976 13.5498 6.86976 13.5698C7.71976 13.6798 8.53976 14.0698 9.22976 14.7498C9.89976 15.4198 10.2798 16.2098 10.3898 17.0398C10.4098 17.2398 10.4298 17.4298 10.4298 17.6198Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DesigntoolsBulkIcon;
      