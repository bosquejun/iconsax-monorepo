
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BoxRemoveBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.6005 5.31125L11.9505 2.27125C11.3505 1.95125 10.6405 1.95125 10.0405 2.27125L4.40047 5.31125C3.99047 5.54125 3.73047 5.98125 3.73047 6.46125C3.73047 6.95125 3.98047 7.39125 4.40047 7.61125L10.0505 10.6512C10.3505 10.8112 10.6805 10.8913 11.0005 10.8913C11.3205 10.8913 11.6605 10.8112 11.9505 10.6512L17.6005 7.61125C18.0105 7.39125 18.2705 6.95125 18.2705 6.46125C18.2705 5.98125 18.0105 5.54125 17.6005 5.31125Z" fill={color} />
<path d="M9.12 11.7106L3.87 9.09058C3.46 8.88058 3 8.91058 2.61 9.14058C2.23 9.38058 2 9.79058 2 10.2406V15.2006C2 16.0606 2.48 16.8306 3.25 17.2206L8.5 19.8406C8.68 19.9306 8.88 19.9806 9.08 19.9806C9.31 19.9806 9.55 19.9106 9.76 19.7906C10.14 19.5506 10.37 19.1406 10.37 18.6906V13.7306C10.36 12.8706 9.88 12.1006 9.12 11.7106Z" fill={color} />
<path d="M20.0006 10.2406V12.7006C19.5206 12.5606 19.0106 12.5006 18.5006 12.5006C17.1406 12.5006 15.8106 12.9706 14.7606 13.8106C13.3206 14.9406 12.5006 16.6506 12.5006 18.5006C12.5006 18.9906 12.5606 19.4806 12.6906 19.9506C12.5406 19.9306 12.3906 19.8706 12.2506 19.7806C11.8706 19.5506 11.6406 19.1406 11.6406 18.6906V13.7306C11.6406 12.8706 12.1206 12.1006 12.8806 11.7106L18.1306 9.09058C18.5406 8.88058 19.0006 8.91058 19.3906 9.14058C19.7706 9.38058 20.0006 9.79058 20.0006 10.2406Z" fill={color} />
<path d="M21.6814 15.3206C20.7914 14.4306 19.6114 13.9806 18.4414 14.0006C17.3114 14.0106 16.1814 14.4606 15.3214 15.3206C14.7214 15.9106 14.3314 16.6506 14.1414 17.4206C14.0314 17.8406 13.9914 18.2706 14.0214 18.7006V18.7506C14.0214 18.8206 14.0314 18.8806 14.0414 18.9606C14.0414 18.9606 14.0414 18.9606 14.0514 18.9706V19.0006C14.1414 19.9806 14.5614 20.9306 15.3214 21.6806C16.4814 22.8406 18.1114 23.2306 19.5814 22.8606C20.0214 22.7506 20.4514 22.5706 20.8514 22.3306C21.1514 22.1606 21.4314 21.9406 21.6814 21.6806C22.4314 20.9306 22.8614 19.9806 22.9514 18.9906C22.9614 18.9906 22.9614 18.9706 22.9614 18.9606C22.9814 18.8906 22.9814 18.8106 22.9814 18.7406C22.9814 18.7306 22.9914 18.7106 22.9914 18.6906C23.0514 17.4806 22.6114 16.2406 21.6814 15.3206ZM20.2314 20.2106C19.9414 20.5006 19.4714 20.5006 19.1714 20.2106L18.5114 19.5506L17.8314 20.2306C17.5314 20.5306 17.0614 20.5306 16.7714 20.2306C16.4714 19.9406 16.4714 19.4706 16.7714 19.1706L17.4514 18.4906L16.7914 17.8306C16.5014 17.5306 16.5014 17.0606 16.7914 16.7706C17.0914 16.4706 17.5614 16.4706 17.8614 16.7706L18.5114 17.4306L19.1414 16.7906C19.4414 16.5006 19.9114 16.5006 20.2114 16.7906C20.5014 17.0906 20.5014 17.5606 20.2114 17.8606L19.5714 18.4906L20.2314 19.1406C20.5314 19.4406 20.5314 19.9106 20.2314 20.2106Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BoxRemoveBoldIcon;
      