
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MessageAddBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M22 7.43018V13.4302C22 14.9302 21.5 16.1802 20.62 17.0602C19.75 17.9302 18.5 18.4302 17 18.4302V20.5602C17 21.3602 16.11 21.8402 15.45 21.4002L11 18.4302H8.88C8.96 18.1302 9 17.8202 9 17.5002C9 16.4802 8.61 15.5402 7.97 14.8302C7.25 14.0102 6.18 13.5002 5 13.5002C3.88 13.5002 2.86 13.9602 2.13 14.7102C2.04 14.3102 2 13.8802 2 13.4302V7.43018C2 4.43018 4 2.43018 7 2.43018H17C20 2.43018 22 4.43018 22 7.43018Z" fill={color} />
<path d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z" fill={color} />
<path d="M5.20998 13.5098C4.11998 13.4398 3 13.8398 2.17 14.6698C0.61 16.2298 0.61 18.7598 2.17 20.3298C2.7 20.8598 3.35 21.2098 4.04 21.3798C4.42 21.4798 4.81999 21.5098 5.21999 21.4898C6.16999 21.4498 7.09997 21.0698 7.82997 20.3398C8.85997 19.3098 9.20999 17.8598 8.87999 16.5498C8.71999 15.8598 8.35997 15.2098 7.82997 14.6798C7.10997 13.9498 6.16998 13.5598 5.20998 13.5098ZM7.23998 17.4798C7.23998 17.6898 7.15998 17.8698 7.01998 18.0098C6.87998 18.1498 6.69998 18.2298 6.48998 18.2298H5.74999V19.0098C5.74999 19.2198 5.66999 19.3998 5.52999 19.5398C5.38999 19.6798 5.20999 19.7598 4.99999 19.7598C4.58999 19.7598 4.24999 19.4198 4.24999 19.0098V18.2298H3.49999C3.08999 18.2298 2.74999 17.8898 2.74999 17.4798C2.74999 17.0698 3.08999 16.7298 3.49999 16.7298H4.24999V16.0198C4.24999 15.6098 4.58999 15.2698 4.99999 15.2698C5.40999 15.2698 5.74999 15.6098 5.74999 16.0198V16.7298H6.48998C6.90998 16.7298 7.23998 17.0698 7.23998 17.4798Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MessageAddBulkIcon;
      