
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const UserEditOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill={color} />
<path d="M15.8196 22.7499C15.4396 22.7499 15.0796 22.6099 14.8196 22.3499C14.5096 22.0399 14.3696 21.5899 14.4396 21.1199L14.6296 19.7699C14.6796 19.4199 14.8896 19.0099 15.1396 18.7499L18.6796 15.2099C20.0996 13.7899 21.3496 14.5999 21.9596 15.2099C22.4796 15.7299 22.7496 16.2899 22.7496 16.8499C22.7496 17.4199 22.4896 17.9499 21.9596 18.4799L18.4195 22.0199C18.1695 22.2699 17.7496 22.4799 17.3996 22.5299L16.0495 22.7198C15.9695 22.7398 15.8996 22.7499 15.8196 22.7499ZM20.3096 15.9199C20.1296 15.9199 19.9696 16.0399 19.7396 16.2699L16.1996 19.8099C16.1696 19.8399 16.1196 19.9399 16.1196 19.9799L15.9396 21.2299L17.1896 21.0499C17.2296 21.0399 17.3295 20.9899 17.3595 20.9599L20.8996 17.4199C21.0596 17.2599 21.2496 17.0299 21.2496 16.8499C21.2496 16.6999 21.1296 16.4899 20.8996 16.2699C20.6596 16.0299 20.4796 15.9199 20.3096 15.9199Z" fill={color} />
<path d="M20.9206 19.2198C20.8506 19.2198 20.7806 19.2099 20.7206 19.1899C19.4006 18.8199 18.3506 17.7699 17.9806 16.4499C17.8706 16.0499 18.1006 15.6399 18.5006 15.5299C18.9006 15.4199 19.3106 15.6499 19.4206 16.0499C19.6506 16.8699 20.3006 17.5199 21.1206 17.7499C21.5206 17.8599 21.7506 18.2799 21.6406 18.6699C21.5506 18.9999 21.2506 19.2198 20.9206 19.2198Z" fill={color} />
<path d="M3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85018 14.25 12.0002 14.25C13.0902 14.25 14.1702 14.41 15.1802 14.71C15.5802 14.83 15.8002 15.25 15.6802 15.64C15.5602 16.04 15.1402 16.26 14.7502 16.14C13.8702 15.88 12.9502 15.74 12.0002 15.74C7.68018 15.74 4.16016 18.54 4.16016 21.99C4.16016 22.41 3.82016 22.75 3.41016 22.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default UserEditOutlineIcon;
      