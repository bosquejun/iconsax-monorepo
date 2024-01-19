
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TreeOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.1703 10.8098H7.83022C6.97022 10.8098 6.31025 10.4698 6.01025 9.88985C5.71025 9.29985 5.83022 8.56984 6.33022 7.87984L10.5002 2.03985C11.2402 0.979847 12.7702 0.979849 13.5202 2.04985L17.6902 7.87984C18.1902 8.56984 18.3102 9.29985 18.0102 9.88985C17.6902 10.4698 17.0303 10.8098 16.1703 10.8098ZM12.0002 2.69984C11.9102 2.69984 11.8102 2.77985 11.7202 2.89985L7.55023 8.74985C7.35023 9.01985 7.34024 9.17984 7.35024 9.20985C7.36024 9.22985 7.50023 9.30984 7.84023 9.30984H16.1802C16.5102 9.30984 16.6503 9.21984 16.6703 9.19984C16.6703 9.17984 16.6602 9.01985 16.4702 8.74985L12.3002 2.90985C12.1902 2.76985 12.0902 2.69984 12.0002 2.69984Z" fill={color} />
<path d="M17.5897 18.7501H6.41968C4.98968 18.7501 4.41966 18.0601 4.20966 17.6501C3.99966 17.2401 3.77966 16.3801 4.61966 15.2201L8.60965 9.62006C8.74965 9.42006 8.97967 9.31006 9.21967 9.31006H14.7897C15.0297 9.31006 15.2597 9.43006 15.3997 9.62006L19.3897 15.2301C20.2297 16.3801 19.9997 17.2401 19.7897 17.6501C19.5797 18.0601 19.0197 18.7501 17.5897 18.7501ZM9.59967 10.8101L5.82965 16.1001C5.50965 16.5401 5.47967 16.8401 5.53967 16.9701C5.60967 17.1001 5.86967 17.2501 6.40967 17.2501H17.5797C18.1197 17.2501 18.3897 17.1001 18.4497 16.9701C18.5197 16.8401 18.4797 16.5401 18.1597 16.1001L14.3897 10.8001H9.59967V10.8101Z" fill={color} />
<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V18C11.25 17.59 11.59 17.25 12 17.25C12.41 17.25 12.75 17.59 12.75 18V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TreeOutlineIcon;
      