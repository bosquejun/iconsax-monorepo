
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const QuoteUpCircleOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.9989 12.5898H14.3189C13.2289 12.5898 12.3789 11.7398 12.3789 10.6498V9.15973C12.3789 8.06973 13.2289 7.21973 14.3189 7.21973H15.8089C16.8789 7.21973 17.7489 8.08973 17.7489 9.15973V11.8298C17.7489 12.2498 17.4089 12.5898 16.9989 12.5898ZM14.3189 8.71973C13.9989 8.71973 13.8789 8.95973 13.8789 9.15973V10.6498C13.8789 10.8498 13.9889 11.0898 14.3189 11.0898H16.2489V9.16974C16.2489 8.92974 16.0489 8.72974 15.8089 8.72974H14.3189V8.71973Z" fill={color} />
<path d="M14.91 16.7798C14.65 16.7798 14.4 16.6498 14.26 16.4098C14.05 16.0498 14.17 15.5898 14.52 15.3798C15.88 14.5698 16.25 14.3598 16.25 11.8398C16.25 11.4298 16.59 11.0898 17 11.0898C17.41 11.0898 17.75 11.4298 17.75 11.8398C17.75 14.9198 17.08 15.6098 15.29 16.6698C15.17 16.7398 15.04 16.7798 14.91 16.7798Z" fill={color} />
<path d="M10.8602 12.5898H8.18022C7.09022 12.5898 6.24023 11.7398 6.24023 10.6498V9.15973C6.24023 8.06973 7.09022 7.21973 8.18022 7.21973H9.67023C10.7402 7.21973 11.6102 8.08973 11.6102 9.15973V11.8298C11.6102 12.2498 11.2802 12.5898 10.8602 12.5898ZM8.19023 8.71973C7.87023 8.71973 7.75023 8.95973 7.75023 9.15973V10.6498C7.75023 10.8498 7.86023 11.0898 8.19023 11.0898H10.1202V9.16974C10.1202 8.92974 9.92022 8.72974 9.68022 8.72974H8.19023V8.71973Z" fill={color} />
<path d="M8.76934 16.7798C8.50934 16.7798 8.25933 16.6498 8.11933 16.4098C7.90933 16.0498 8.02934 15.5898 8.37934 15.3798C9.73934 14.5698 10.1093 14.3598 10.1093 11.8398C10.1093 11.4298 10.4493 11.0898 10.8593 11.0898C11.2693 11.0898 11.6093 11.4298 11.6093 11.8398C11.6093 14.9198 10.9393 15.6098 9.14933 16.6698C9.02933 16.7398 8.89934 16.7798 8.76934 16.7798Z" fill={color} />
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default QuoteUpCircleOutlineIcon;
      