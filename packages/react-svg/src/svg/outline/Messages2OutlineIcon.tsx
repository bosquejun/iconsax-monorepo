
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Messages2OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.8701 21.8698C17.5601 21.8698 17.2501 21.7898 16.9701 21.6198L12.9601 19.2397C12.5401 19.2297 12.1201 19.1998 11.7201 19.1398C11.4501 19.0998 11.2201 18.9197 11.1201 18.6597C11.0201 18.3997 11.0701 18.1197 11.2501 17.9097C11.9101 17.1397 12.2501 16.2197 12.2501 15.2397C12.2501 12.8197 10.1201 10.8497 7.50008 10.8497C6.52008 10.8497 5.58007 11.1198 4.79007 11.6398C4.57007 11.7798 4.30007 11.7998 4.06007 11.6898C3.83007 11.5798 3.66008 11.3597 3.63008 11.0997C3.60008 10.8197 3.58008 10.5398 3.58008 10.2498C3.58008 5.28976 7.88008 1.25977 13.1601 1.25977C18.4401 1.25977 22.7401 5.28976 22.7401 10.2498C22.7401 12.9698 21.4801 15.4697 19.2601 17.1797L19.6001 19.8998C19.6801 20.5798 19.3801 21.2198 18.8101 21.5898C18.5301 21.7698 18.2001 21.8698 17.8701 21.8698ZM13.1501 17.7297C13.2901 17.7197 13.4301 17.7598 13.5501 17.8398L17.7401 20.3298C17.8501 20.3998 17.9401 20.3698 18.0001 20.3298C18.0501 20.2998 18.1301 20.2198 18.1101 20.0798L17.7201 16.9197C17.6901 16.6397 17.8101 16.3698 18.0301 16.2098C20.0701 14.7798 21.2401 12.5997 21.2401 10.2297C21.2401 6.09974 17.6201 2.73975 13.1601 2.73975C8.87008 2.73975 5.35007 5.85979 5.09007 9.77979C5.84007 9.48979 6.65008 9.32977 7.49008 9.32977C10.9401 9.32977 13.7401 11.9697 13.7401 15.2197C13.7501 16.0997 13.5401 16.9497 13.1501 17.7297Z" fill={color} />
<path d="M4.57977 22.7498C4.31977 22.7498 4.06977 22.6798 3.83977 22.5298C3.38977 22.2398 3.14978 21.7398 3.20978 21.2098L3.40977 19.6698C2.05977 18.5698 1.25977 16.9398 1.25977 15.2298C1.25977 13.2798 2.27978 11.4598 3.98978 10.3698C5.01978 9.69981 6.23977 9.33984 7.50977 9.33984C10.9598 9.33984 13.7598 11.9798 13.7598 15.2298C13.7598 16.5498 13.2798 17.8498 12.3998 18.8798C11.2698 20.2498 9.57977 21.0498 7.71977 21.1098L5.27977 22.5598C5.05977 22.6898 4.81977 22.7498 4.57977 22.7498ZM7.49977 10.8398C6.51977 10.8398 5.57976 11.1098 4.78976 11.6298C3.50976 12.4498 2.74977 13.7898 2.74977 15.2298C2.74977 16.6198 3.42978 17.8898 4.62978 18.7098C4.85978 18.8698 4.97977 19.1398 4.94977 19.4198L4.72977 21.1298L7.11977 19.7098C7.23977 19.6398 7.36977 19.5998 7.49977 19.5998C8.96977 19.5998 10.3598 18.9698 11.2398 17.8998C11.8998 17.1198 12.2498 16.1998 12.2498 15.2198C12.2498 12.8098 10.1198 10.8398 7.49977 10.8398Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Messages2OutlineIcon;
      