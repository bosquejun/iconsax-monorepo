
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UserOctagonBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M10.4299 2.42C11.3999 1.86 12.5999 1.86 13.5799 2.42L19.5199 5.84999C20.4899 6.40999 21.0899 7.45003 21.0899 8.58003V15.42C21.0899 16.54 20.4899 17.58 19.5199 18.15L13.5799 21.58C12.6099 22.14 11.4099 22.14 10.4299 21.58L4.48992 18.15C3.51992 17.59 2.91992 16.55 2.91992 15.42V8.58003C2.91992 7.46003 3.51992 6.41999 4.48992 5.84999L6.38992 4.75002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.9999 11.0001C13.2867 11.0001 14.3299 9.95687 14.3299 8.67004C14.3299 7.38322 13.2867 6.34009 11.9999 6.34009C10.7131 6.34009 9.66992 7.38322 9.66992 8.67004C9.66992 9.95687 10.7131 11.0001 11.9999 11.0001Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16 16.6601C16 14.8601 14.21 13.4001 12 13.4001C9.79 13.4001 8 14.8601 8 16.6601" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default UserOctagonBrokenIcon;
      