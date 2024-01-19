
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HeartAddBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.6804 13.9099V13.8999C19.8004 12.9699 18.5704 12.3999 17.2004 12.3999C14.5504 12.3999 12.4004 14.5499 12.4004 17.1999C12.4004 18.4299 12.8704 19.5499 13.6304 20.3999C14.5104 21.3799 15.7804 21.9999 17.2004 21.9999C19.8504 21.9999 22.0004 19.8499 22.0004 17.1999C22.0004 15.9299 21.5004 14.7699 20.6804 13.9099ZM18.9904 18.0099H17.9504V19.0999C17.9504 19.5099 17.6104 19.8499 17.2004 19.8499C16.7904 19.8499 16.4504 19.5099 16.4504 19.0999V18.0099H15.4103C14.9903 18.0099 14.6603 17.6799 14.6603 17.2599C14.6603 16.8499 14.9804 16.5199 15.4004 16.5099H16.4504V15.5099C16.4504 15.4899 16.4504 15.4699 16.4604 15.4499C16.4804 15.0699 16.8104 14.7599 17.2004 14.7599C17.6004 14.7599 17.9304 15.0799 17.9504 15.4799V16.5099H18.9904C19.4104 16.5099 19.7404 16.8499 19.7404 17.2599C19.7404 17.6799 19.4104 18.0099 18.9904 18.0099Z" fill={color} />
<path opacity="0.4" d="M22 8.69009C22 9.88009 21.81 10.9801 21.48 12.0001C21.27 12.6701 21 13.3101 20.68 13.9001C19.8 12.9701 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.97001 19.9901 4.10002 17.0001 2.52002 12.0001C2.19002 10.9801 2 9.88009 2 8.69009C2 5.60009 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98008 12 5.33008C13.01 3.98008 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60009 22 8.69009Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HeartAddBulkIcon;
      