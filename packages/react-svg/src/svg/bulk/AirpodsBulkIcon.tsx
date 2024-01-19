
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const AirpodsBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M10.5 4.83002V17.11C10.5 17.93 9.98 18.62 9.25 18.88C9.05 18.96 8.82999 19 8.60999 19C8.29999 19 8 18.92 7.75 18.78C7.14 18.47 6.72 17.84 6.72 17.11V9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 4.74003 2.41999 3.79999 3.10999 3.10999C3.79999 2.41999 4.74 2 5.78 2H7.67001C9.22001 2 10.5 3.28002 10.5 4.83002Z" fill={color} />
<path d="M5.77985 7.47003C4.84985 7.47003 4.08984 6.71008 4.08984 5.77008C4.08984 4.83008 4.84985 4.08008 5.77985 4.08008C6.18985 4.08008 6.52985 4.42008 6.52985 4.83008C6.52985 5.24008 6.18985 5.58008 5.77985 5.58008C5.66985 5.58008 5.58984 5.67008 5.58984 5.77008C5.58984 5.87008 5.67985 5.97003 5.77985 5.97003C6.18985 5.97003 6.52985 6.31003 6.52985 6.72003C6.52985 7.13003 6.18985 7.47003 5.77985 7.47003Z" fill={color} />
<path opacity="0.4" d="M22 5.78003C22 7.86003 20.3 9.56 18.22 9.56H17.28V17.11C17.28 17.84 16.86 18.47 16.25 18.78C16 18.92 15.7 19 15.39 19C15.17 19 14.95 18.96 14.75 18.88C14.02 18.62 13.5 17.93 13.5 17.11V4.83002C13.5 3.28002 14.77 2 16.33 2H18.22C19.26 2 20.2 2.41999 20.89 3.10999C21.58 3.79999 22 4.74003 22 5.78003Z" fill={color} />
<path d="M18.2207 7.47003C17.8107 7.47003 17.4707 7.13003 17.4707 6.72003C17.4707 6.31003 17.8107 5.97003 18.2207 5.97003C18.3307 5.97003 18.4107 5.88008 18.4107 5.77008C18.4107 5.66008 18.3207 5.58008 18.2207 5.58008C17.8107 5.58008 17.4707 5.24008 17.4707 4.83008C17.4707 4.42008 17.8107 4.08008 18.2207 4.08008C19.1507 4.08008 19.9107 4.84008 19.9107 5.77008C19.9107 6.70008 19.1607 7.47003 18.2207 7.47003Z" fill={color} />
<path d="M9.25 18.88V22C9.25 22.41 8.91 22.75 8.5 22.75C8.09 22.75 7.75 22.41 7.75 22V18.78C8 18.92 8.29999 19 8.60999 19C8.82999 19 9.05 18.96 9.25 18.88Z" fill={color} />
<path d="M16.25 18.78V22C16.25 22.41 15.91 22.75 15.5 22.75C15.09 22.75 14.75 22.41 14.75 22V18.88C14.95 18.96 15.17 19 15.39 19C15.7 19 16 18.92 16.25 18.78Z" fill={color} />
        </svg>
      )
    }
    
    
    export default AirpodsBulkIcon;
      