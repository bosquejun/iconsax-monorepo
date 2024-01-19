
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const KeySquareBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2 12.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.2792 13.61C15.1492 14.74 13.5292 15.09 12.0992 14.64L9.50922 17.22C9.32922 17.41 8.95922 17.53 8.68922 17.49L7.48922 17.33C7.08922 17.28 6.72922 16.9 6.66922 16.51L6.50922 15.31C6.46922 15.05 6.59922 14.68 6.77922 14.49L9.35922 11.91C8.91922 10.48 9.25922 8.86001 10.3892 7.73001C12.0092 6.11001 14.6492 6.11001 16.2792 7.73001C17.8992 9.34001 17.8992 11.98 16.2792 13.61Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M10.4496 16.28L9.59961 15.42" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.3949 10.7H13.4039" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default KeySquareBrokenIcon;
      