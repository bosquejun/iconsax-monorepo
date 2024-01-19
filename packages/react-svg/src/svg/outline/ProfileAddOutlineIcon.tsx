
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ProfileAddOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M18.5 20.25H14.5C14.09 20.25 13.75 19.91 13.75 19.5C13.75 19.09 14.09 18.75 14.5 18.75H18.5C18.91 18.75 19.25 19.09 19.25 19.5C19.25 19.91 18.91 20.25 18.5 20.25Z" fill={color} />
<path d="M16.5 22.25C16.09 22.25 15.75 21.91 15.75 21.5V17.5C15.75 17.09 16.09 16.75 16.5 16.75C16.91 16.75 17.25 17.09 17.25 17.5V21.5C17.25 21.91 16.91 22.25 16.5 22.25Z" fill={color} />
<path d="M12.1607 11.62C12.1307 11.62 12.1107 11.62 12.0807 11.62C12.0307 11.61 11.9607 11.61 11.9007 11.62C9.00068 11.53 6.81068 9.25 6.81068 6.44C6.80068 5.06 7.34068 3.76 8.32068 2.78C9.30068 1.8 10.6007 1.25 11.9907 1.25C14.8507 1.25 17.1807 3.58 17.1807 6.44C17.1807 9.25 14.9907 11.52 12.1907 11.62C12.1807 11.62 12.1707 11.62 12.1607 11.62ZM11.9907 2.75C11.0007 2.75 10.0807 3.14 9.38068 3.83C8.69068 4.53 8.31068 5.45 8.31068 6.43C8.31068 8.43 9.87068 10.05 11.8607 10.11C11.9207 10.1 12.0507 10.1 12.1807 10.11C14.1507 10.02 15.6807 8.41 15.6807 6.43C15.6807 4.41 14.0207 2.75 11.9907 2.75Z" fill={color} />
<path d="M11.9902 22.5599C9.95016 22.5599 8.02016 22.0299 6.56016 21.0499C5.17016 20.1199 4.41016 18.8499 4.41016 17.4799C4.41016 16.1099 5.18016 14.8499 6.56016 13.9299C9.55016 11.9299 14.4102 11.9299 17.4002 13.9299C17.7402 14.1599 17.8402 14.6299 17.6102 14.9699C17.3802 15.3199 16.9102 15.4099 16.5702 15.1799C14.0802 13.5199 9.88016 13.5199 7.39016 15.1799C6.43016 15.8199 5.91016 16.6299 5.91016 17.4799C5.91016 18.3299 6.43016 19.1599 7.39016 19.7999C8.60016 20.6099 10.2302 21.0499 11.9802 21.0499C12.3902 21.0499 12.7302 21.3899 12.7302 21.7999C12.7302 22.2099 12.4002 22.5599 11.9902 22.5599Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ProfileAddOutlineIcon;
      