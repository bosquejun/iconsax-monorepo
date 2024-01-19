
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CloudNotifBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.2717 8.76172C21.2717 9.78172 20.8017 10.7017 20.0417 11.3017C19.4917 11.7517 18.7817 12.0217 18.0117 12.0217C16.2217 12.0217 14.7617 10.5617 14.7617 8.77172C14.7617 7.88172 15.1217 7.07172 15.7217 6.48172V6.47172C16.3117 5.88172 17.1217 5.51172 18.0117 5.51172C19.8117 5.51172 21.2717 6.97172 21.2717 8.76172Z" fill={color} />
<path d="M20.1817 18.7289C19.1317 19.6889 17.7817 20.2189 16.3517 20.2189H5.97172C3.23172 20.0189 2.01172 17.9089 2.01172 16.0289C2.01172 14.3489 2.98172 12.4889 5.11172 11.9689C4.18172 8.38887 5.96172 5.88887 8.04172 4.69887C10.1017 3.52887 13.0017 3.33887 15.1817 4.94887C14.9917 5.08887 14.8217 5.23887 14.6517 5.40887L14.2217 5.85887V5.91887C13.6017 6.72887 13.2617 7.71887 13.2617 8.75887C13.2617 11.3789 15.4017 13.5089 18.0217 13.5089C19.1017 13.5089 20.1517 13.1389 20.9717 12.4689C21.1217 12.3489 21.2717 12.2189 21.4017 12.0789C22.3917 14.1589 22.2517 16.9189 20.1817 18.7289Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CloudNotifBoldIcon;
      