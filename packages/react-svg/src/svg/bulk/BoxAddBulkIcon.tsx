
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BoxAddBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C15.69 21.99 15.7 22 15.71 22C16.46 22.63 17.43 23 18.5 23C20.14 23 21.57 22.12 22.35 20.82C22.58 20.43 22.76 20 22.87 19.55C22.96 19.21 23 18.86 23 18.5C23 17.44 22.63 16.46 22 15.7ZM20.18 19.23H19.25V20.2C19.25 20.61 18.91 20.95 18.5 20.95C18.09 20.95 17.75 20.61 17.75 20.2V19.23H16.82C16.41 19.23 16.07 18.89 16.07 18.48C16.07 18.07 16.41 17.73 16.82 17.73H17.75V16.84C17.75 16.43 18.09 16.09 18.5 16.09C18.91 16.09 19.25 16.43 19.25 16.84V17.73H20.18C20.59 17.73 20.93 18.07 20.93 18.48C20.93 18.89 20.6 19.23 20.18 19.23Z" fill={color} />
<path opacity="0.4" d="M19.3504 5.65995L13.0604 2.27C12.4004 1.91 11.6004 1.91 10.9304 2.27L4.6404 5.65995C4.1804 5.90995 3.90039 6.39998 3.90039 6.93998C3.90039 7.47998 4.1804 7.96995 4.6404 8.21995L10.9304 11.61C11.2604 11.79 11.6304 11.88 11.9904 11.88C12.3504 11.88 12.7204 11.79 13.0504 11.61L19.3404 8.21995C19.8004 7.96995 20.0804 7.47998 20.0804 6.93998C20.1004 6.39998 19.8104 5.90995 19.3504 5.65995Z" fill={color} />
<path opacity="0.4" d="M9.9007 12.7899L4.0507 9.85989C3.6007 9.62989 3.0807 9.65989 2.6507 9.91989C2.2207 10.1799 1.9707 10.6399 1.9707 11.1399V16.6699C1.9707 17.6299 2.5007 18.4899 3.3607 18.9199L9.21071 21.8399C9.41071 21.9399 9.63071 21.9899 9.85071 21.9899C10.1107 21.9899 10.3707 21.9199 10.6007 21.7699C11.0307 21.5099 11.2807 21.0499 11.2807 20.5499V15.0199C11.2907 14.0799 10.7607 13.2199 9.9007 12.7899Z" fill={color} />
<path opacity="0.4" d="M22.0309 11.1502V15.7401C22.0209 15.7301 22.0109 15.7101 22.0009 15.7001C22.0009 15.6901 21.9909 15.6801 21.9809 15.6701C21.9409 15.6101 21.8909 15.5501 21.8409 15.5001C21.8309 15.4901 21.8209 15.4702 21.8109 15.4602C21.0009 14.5602 19.8109 14.0001 18.5009 14.0001C17.2409 14.0001 16.0909 14.5201 15.2709 15.3601C14.4809 16.1701 14.0009 17.2801 14.0009 18.5001C14.0009 19.3401 14.2409 20.1401 14.6509 20.8201C14.8209 21.1101 15.0309 21.3701 15.2609 21.6101L14.7909 21.8501C14.5909 21.9501 14.3709 22.0001 14.1509 22.0001C13.8909 22.0001 13.6309 21.9302 13.3909 21.7802C12.9709 21.5202 12.7109 21.0601 12.7109 20.5601V15.0401C12.7109 14.0801 13.2409 13.2201 14.1009 12.7901L19.9509 9.87013C20.4009 9.64013 20.9209 9.66012 21.3509 9.93012C21.7709 10.1901 22.0309 10.6502 22.0309 11.1502Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BoxAddBulkIcon;
      