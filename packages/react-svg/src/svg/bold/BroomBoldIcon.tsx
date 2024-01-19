
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BroomBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.82005 4.90101L7.54005 2.78101C7.06005 2.00101 6.11005 1.56101 5.22005 1.82101C3.88005 2.22101 3.36005 3.73101 4.03005 4.84101L5.35005 7.01101C5.50005 7.24101 5.81005 7.32101 6.04005 7.18101L8.65005 5.59101C8.89005 5.44101 8.97005 5.13101 8.82005 4.90101Z" fill={color} />
<path d="M19.7404 14.2098L16.9304 10.4098C15.9504 9.08984 14.2504 8.46984 12.6504 8.89984C12.6504 8.88984 12.6404 8.88984 12.6404 8.87984L10.9804 6.14984C10.6804 5.67984 10.0604 5.52984 9.59037 5.81984L6.12037 7.92984C5.64037 8.20984 5.49037 8.83984 5.78037 9.31984L7.43037 12.0498C7.43037 12.0498 7.43037 12.0598 7.44037 12.0598C6.33037 13.2898 6.09037 15.0798 6.83037 16.5698L8.91037 20.8098C9.55037 22.1198 11.0604 22.6198 12.3404 21.9598C12.4404 21.9098 12.4704 21.7898 12.4104 21.6898L10.8504 19.1098C10.6304 18.7498 10.7404 18.2898 11.1004 18.0598C11.4604 17.8498 11.9204 17.9598 12.1504 18.3098L13.7204 20.8898C13.7804 20.9798 13.9004 21.0098 13.9904 20.9598L14.9504 20.3798C15.0404 20.3198 15.0704 20.1998 15.0204 20.1098L13.4504 17.5298C13.2404 17.1698 13.3504 16.7098 13.7004 16.4798C14.0704 16.2698 14.5304 16.3798 14.7504 16.7298L16.3204 19.3098C16.3804 19.3998 16.5004 19.4298 16.5904 19.3798L17.5504 18.7998C17.6404 18.7398 17.6704 18.6198 17.6204 18.5298L16.0504 15.9498C15.8404 15.5898 15.9504 15.1298 16.3004 14.8998C16.6704 14.6898 17.1304 14.7998 17.3504 15.1498L18.9304 17.7198C18.9904 17.8098 19.1104 17.8398 19.2004 17.7798C20.3604 16.9498 20.6204 15.3898 19.7404 14.2098Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BroomBoldIcon;
      