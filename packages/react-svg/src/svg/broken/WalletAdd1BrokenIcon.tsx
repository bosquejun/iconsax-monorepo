
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WalletAdd1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.5 15.4399H9.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 13V18" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12 22.0001H8.1C7.86 22.0001 7.62 21.9801 7.39 21.9501C4.21 21.7401 2.51 20.0401 2.3 16.8601C2.27 16.6301 2.25 16.3901 2.25 16.1501V14.2001C2.25 12.1901 3.47 10.4601 5.21 9.71007C5.81 9.46007 6.45 9.32007 7.13 9.32007H16.89C17.38 9.32007 17.86 9.39007 18.3 9.52007C20.3 10.1201 21.76 11.9901 21.76 14.1901V16.1401C21.76 16.3401 21.75 16.5401 21.74 16.7401C21.55 20.2401 19.6 22.0001 15.9 22.0001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.8992 2.52009L12.8692 2.59009L9.96922 9.32009H7.11922C6.43922 9.32009 5.78922 9.46009 5.19922 9.71009L6.94922 5.53009L6.98922 5.43009L7.05922 5.27009C7.07922 5.21009 7.09922 5.15009 7.12922 5.10009C8.43922 2.07009 9.91922 1.38009 12.8992 2.52009Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.2907 9.52002C17.8407 9.38002 17.3607 9.32002 16.8807 9.32002H9.9707L12.8707 2.59002L12.9007 2.52002C13.0507 2.57002 13.1907 2.64002 13.3407 2.70002L15.5507 3.63002C16.7807 4.14002 17.6407 4.67002 18.1607 5.31002C18.2607 5.43002 18.3407 5.54002 18.4107 5.67002C18.5007 5.81002 18.5707 5.95002 18.6107 6.10002C18.6507 6.19002 18.6807 6.28002 18.7007 6.36002C18.9707 7.20002 18.8107 8.23002 18.2907 9.52002Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.95023 5.53003L5.20023 9.71003C3.46023 10.46 2.24023 12.19 2.24023 14.2V11.27C2.24023 8.43003 4.26023 6.06003 6.95023 5.53003Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.7608 11.2701V14.2001C21.7608 12.0001 20.3008 10.1301 18.3008 9.5301C18.8208 8.2301 18.9708 7.2101 18.7208 6.3601C18.7008 6.2701 18.6708 6.1801 18.6308 6.1001C20.4908 7.0601 21.7608 9.0301 21.7608 11.2701Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default WalletAdd1BrokenIcon;
      