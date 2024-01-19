
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TextItalicBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill={color} />
<path d="M15.8706 6.00977H10.4906C10.0806 6.00977 9.74062 6.34977 9.74062 6.75977C9.74062 7.16977 10.0806 7.50977 10.4906 7.50977H12.3806L10.1406 16.4798H8.14063C7.73063 16.4798 7.39062 16.8198 7.39062 17.2298C7.39062 17.6398 7.73063 17.9798 8.14063 17.9798H13.5206C13.9306 17.9798 14.2706 17.6398 14.2706 17.2298C14.2706 16.8198 13.9306 16.4798 13.5206 16.4798H11.6806L13.9206 7.50977H15.8706C16.2806 7.50977 16.6206 7.16977 16.6206 6.75977C16.6206 6.34977 16.2806 6.00977 15.8706 6.00977Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TextItalicBulkIcon;
      