
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HashtagBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={color} />
<path d="M13.8604 6.6499H10.1404C8.22039 6.6499 6.65039 8.2099 6.65039 10.1399V13.8599C6.65039 15.7799 8.22039 17.3499 10.1404 17.3499H13.8604C15.7804 17.3499 17.3504 15.7899 17.3504 13.8599V10.1399C17.3504 8.2199 15.7804 6.6499 13.8604 6.6499ZM15.9504 10.1399V11.2999H12.7004V8.0499H13.8604C15.0104 8.0499 15.9504 8.9899 15.9504 10.1399ZM10.1404 8.0499H11.3004V11.3099H8.05039V10.1499C8.05039 8.9899 8.99039 8.0499 10.1404 8.0499ZM8.05039 13.8599V12.6999H11.3104V15.9599H10.1504C8.99039 15.9499 8.05039 15.0099 8.05039 13.8599ZM13.8604 15.9499H12.7004V12.6999H15.9604V13.8599C15.9504 15.0099 15.0104 15.9499 13.8604 15.9499Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HashtagBulkIcon;
      