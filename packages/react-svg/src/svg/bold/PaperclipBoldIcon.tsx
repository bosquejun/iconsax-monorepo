
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PaperclipBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.75 13.71C16.75 15.23 15.52 16.46 14 16.46C12.48 16.46 11.25 15.23 11.25 13.71V11.71C11.25 11.3 11.59 10.96 12 10.96C12.41 10.96 12.75 11.3 12.75 11.71V13.71C12.75 14.4 13.31 14.96 14 14.96C14.69 14.96 15.25 14.4 15.25 13.71V10.57C15.25 8.78 13.79 7.32 12 7.32C10.21 7.32 8.75 8.78 8.75 10.57V14C8.75 15.48 9.95 16.68 11.43 16.68C11.84 16.68 12.18 17.02 12.18 17.43C12.18 17.84 11.84 18.18 11.43 18.18C9.13 18.18 7.25 16.3 7.25 14V10.57C7.25 7.95 9.38 5.82 12 5.82C14.62 5.82 16.75 7.95 16.75 10.57V13.71Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PaperclipBoldIcon;
      