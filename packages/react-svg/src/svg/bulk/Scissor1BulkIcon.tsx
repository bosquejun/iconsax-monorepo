
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Scissor1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={color} />
<path d="M14.1692 11.9899L17.7692 9.29992C18.0992 9.04992 18.1692 8.57992 17.9192 8.24992C17.6692 7.91992 17.1992 7.84992 16.8692 8.09992L12.9192 11.0499L10.5192 9.24992C10.5292 9.15992 10.5492 9.06992 10.5492 8.96992C10.5492 7.69992 9.51921 6.66992 8.24921 6.66992C6.97921 6.66992 5.94922 7.69992 5.94922 8.96992C5.94922 10.2399 6.97921 11.2699 8.24921 11.2699C8.86921 11.2699 9.42918 11.0199 9.84918 10.6199L11.6792 11.9899L9.83923 13.3699C9.42923 12.9799 8.86922 12.7299 8.25922 12.7299C6.98922 12.7299 5.95923 13.7599 5.95923 15.0299C5.95923 16.2999 6.98922 17.3299 8.25922 17.3299C9.52922 17.3299 10.5592 16.2999 10.5592 15.0299C10.5592 14.9299 10.5392 14.8299 10.5292 14.7299L12.9392 12.9299L16.8892 15.8799C17.0192 15.9799 17.1792 16.0299 17.3392 16.0299C17.5692 16.0299 17.7892 15.9299 17.9392 15.7299C18.1892 15.3999 18.1192 14.9299 17.7892 14.6799L14.1692 11.9899Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Scissor1BulkIcon;
      