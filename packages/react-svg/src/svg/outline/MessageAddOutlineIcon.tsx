
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageAddOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.9998 22.3199C15.6598 22.3199 15.3298 22.22 15.0398 22.03L10.7798 19.1899H8.88977C8.65977 19.1899 8.43974 19.08 8.29974 18.9C8.15974 18.71 8.10977 18.4699 8.16977 18.2499C8.22977 18.0099 8.25977 17.7699 8.25977 17.5099C8.25977 16.7099 7.95977 15.94 7.41977 15.34C6.80977 14.65 5.93977 14.2599 5.00977 14.2599C4.11977 14.2599 3.28975 14.6099 2.67975 15.2399C2.48975 15.4399 2.19976 15.5199 1.93976 15.4399C1.67976 15.3599 1.46976 15.1499 1.40976 14.8799C1.30976 14.4399 1.25977 13.9599 1.25977 13.4399V7.43994C1.25977 3.99994 3.56977 1.68994 7.00977 1.68994H17.0098C20.4498 1.68994 22.7598 3.99994 22.7598 7.43994V13.4399C22.7598 15.1099 22.2098 16.5499 21.1598 17.5999C20.2798 18.4799 19.1098 19.01 17.7598 19.15V20.5699C17.7598 21.2199 17.3997 21.8099 16.8297 22.1199C16.5597 22.2499 16.2798 22.3199 15.9998 22.3199ZM9.74976 17.6799H10.9998C11.1498 17.6799 11.2898 17.7199 11.4198 17.8099L15.8698 20.78C15.9698 20.85 16.0698 20.8199 16.1198 20.7899C16.1698 20.7599 16.2598 20.6999 16.2598 20.5599V18.4299C16.2598 18.0199 16.5998 17.6799 17.0098 17.6799C18.2798 17.6799 19.3498 17.28 20.0998 16.53C20.8598 15.77 21.2598 14.6999 21.2598 13.4299V7.42993C21.2598 4.84993 19.5898 3.17993 17.0098 3.17993H7.00977C4.42977 3.17993 2.75977 4.84993 2.75977 7.42993V13.3099C3.43977 12.9399 4.20977 12.7499 5.00977 12.7499C6.36977 12.7499 7.65976 13.33 8.53976 14.33C9.31976 15.2 9.75977 16.3299 9.75977 17.4999C9.74977 17.5599 9.74976 17.6199 9.74976 17.6799Z" fill={color} />
<path d="M5 22.25C3.82 22.25 2.69999 21.81 1.82999 21.02C1.47999 20.72 1.16999 20.35 0.929993 19.94C0.489993 19.22 0.25 18.37 0.25 17.5C0.25 16.25 0.729996 15.08 1.59 14.19C2.49 13.26 3.7 12.75 5 12.75C6.36 12.75 7.65 13.33 8.53 14.33C9.31 15.2 9.75 16.33 9.75 17.5C9.75 17.88 9.70001 18.26 9.60001 18.62C9.50001 19.07 9.30999 19.54 9.04999 19.95C8.21999 21.37 6.66 22.25 5 22.25ZM5 14.25C4.11 14.25 3.28001 14.6 2.67001 15.23C2.08001 15.84 1.75 16.64 1.75 17.5C1.75 18.09 1.91 18.67 2.22 19.17C2.38 19.45 2.58999 19.7 2.82999 19.91C3.42999 20.46 4.2 20.76 5 20.76C6.15 20.76 7.19 20.17 7.78 19.19C7.96 18.91 8.07999 18.6 8.14999 18.28C8.21999 18.02 8.25 17.77 8.25 17.51C8.25 16.71 7.95 15.94 7.41 15.34C6.81 14.64 5.93 14.25 5 14.25Z" fill={color} />
<path d="M6.48999 18.23H3.5C3.09 18.23 2.75 17.89 2.75 17.48C2.75 17.07 3.09 16.73 3.5 16.73H6.48999C6.89999 16.73 7.23999 17.07 7.23999 17.48C7.23999 17.89 6.90999 18.23 6.48999 18.23Z" fill={color} />
<path d="M5 19.76C4.59 19.76 4.25 19.42 4.25 19.01V16.02C4.25 15.61 4.59 15.27 5 15.27C5.41 15.27 5.75 15.61 5.75 16.02V19.01C5.75 19.43 5.41 19.76 5 19.76Z" fill={color} />
<path d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MessageAddOutlineIcon;
      