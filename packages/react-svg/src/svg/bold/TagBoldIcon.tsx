
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TagBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.8305 8.6998L15.3005 4.1698C14.3505 3.2198 13.0405 2.7098 11.7005 2.7798L6.70046 3.0198C4.70046 3.1098 3.11046 4.6998 3.01046 6.6898L2.77046 11.6898C2.71046 13.0298 3.21046 14.3398 4.16046 15.2898L8.69046 19.8198C10.5505 21.6798 13.5705 21.6798 15.4405 19.8198L19.8305 15.4298C21.7005 13.5798 21.7005 10.5598 19.8305 8.6998ZM9.50046 12.3798C7.91046 12.3798 6.62046 11.0898 6.62046 9.4998C6.62046 7.9098 7.91046 6.6198 9.50046 6.6198C11.0905 6.6198 12.3805 7.9098 12.3805 9.4998C12.3805 11.0898 11.0905 12.3798 9.50046 12.3798Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TagBoldIcon;
      