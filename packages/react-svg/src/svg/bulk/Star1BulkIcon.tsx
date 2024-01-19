
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Star1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M5.73937 16C5.84937 15.51 5.64937 14.81 5.29937 14.46L2.86937 12.03C2.10937 11.27 1.80937 10.46 2.02937 9.76C2.25937 9.06 2.96937 8.58 4.02937 8.4L7.14937 7.88C7.59937 7.8 8.14937 7.4 8.35937 6.99L10.0794 3.54C10.5794 2.55 11.2594 2 11.9994 2C12.7394 2 13.4194 2.55 13.9194 3.54L15.6394 6.99C15.7694 7.25 16.0394 7.5 16.3294 7.67L5.55937 18.44C5.41937 18.58 5.17937 18.45 5.21937 18.25L5.73937 16Z" fill={color} />
<path d="M18.7008 14.4599C18.3408 14.8199 18.1408 15.5099 18.2608 15.9999L18.9508 19.0099C19.2408 20.2599 19.0608 21.1999 18.4408 21.6499C18.1908 21.8299 17.8908 21.9199 17.5408 21.9199C17.0308 21.9199 16.4308 21.7299 15.7708 21.3399L12.8408 19.5999C12.3808 19.3299 11.6208 19.3299 11.1608 19.5999L8.23078 21.3399C7.12078 21.9899 6.17078 22.0999 5.56078 21.6499C5.33078 21.4799 5.16078 21.2499 5.05078 20.9499L17.2108 8.7899C17.6708 8.3299 18.3208 8.1199 18.9508 8.2299L19.9608 8.3999C21.0208 8.5799 21.7308 9.0599 21.9608 9.7599C22.1808 10.4599 21.8808 11.2699 21.1208 12.0299L18.7008 14.4599Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Star1BulkIcon;
      