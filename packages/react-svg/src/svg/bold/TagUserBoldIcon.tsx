
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TagUserBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.86 6 18.86H6.76C7.55 18.86 8.32 19.17 8.88 19.73L10.59 21.42C11.37 22.19 12.63 22.19 13.41 21.42L15.12 19.73C15.68 19.17 16.45 18.86 17.24 18.86H18C19.66 18.86 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.55C13.08 5.55 13.95 6.43 13.95 7.5C13.95 8.56 13.11 9.41 12.07 9.45C12.03 9.45 11.97 9.45 11.92 9.45C10.87 9.41 10.04 8.56 10.04 7.5C10.05 6.43 10.92 5.55 12 5.55ZM14.75 14.69C13.24 15.7 10.76 15.7 9.25 14.69C7.92 13.81 7.92 12.35 9.25 11.46C10.77 10.45 13.25 10.45 14.75 11.46C16.08 12.35 16.08 13.8 14.75 14.69Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TagUserBoldIcon;
      