
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const SearchFavorite1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.3005 21.9986C21.1205 21.9986 20.9405 21.9286 20.8105 21.7986L18.9505 19.9386C18.6805 19.6686 18.6805 19.2286 18.9505 18.9486C19.2205 18.6786 19.6605 18.6786 19.9405 18.9486L21.8005 20.8086C22.0705 21.0786 22.0705 21.5186 21.8005 21.7986C21.6605 21.9286 21.4805 21.9986 21.3005 21.9986Z" fill={color} />
<path d="M11.5 2C6.26 2 2 6.26 2 11.5C2 16.74 6.26 21 11.5 21C16.74 21 21 16.74 21 11.5C21 6.26 16.74 2 11.5 2ZM14.68 12.06C14.12 13.84 12.17 14.81 11.5 14.81C10.81 14.81 8.9 13.88 8.32 12.06C7.94 10.87 8.37 9.32 9.73 8.89C10.35 8.69 11.01 8.81 11.5 9.18C11.98 8.81 12.65 8.69 13.28 8.89C14.63 9.33 15.06 10.88 14.68 12.06Z" fill={color} />
        </svg>
      )
    }
    
    
    export default SearchFavorite1BoldIcon;
      