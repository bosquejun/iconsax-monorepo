
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const BookSavedBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.25 5.99813V19.9081C11.25 20.6181 10.53 21.1081 9.88 20.8381C8.02 20.0581 5.71 19.3781 4.07 19.1581L3.76 19.1181C2.79 18.9981 2 18.1081 2 17.1381V5.24813C2 4.04813 2.97 3.07812 4.17 3.07812H4.24C6.12 3.23812 8.89 4.11813 10.72 5.10813C11.05 5.28813 11.25 5.61812 11.25 5.99813Z" fill={color} />
<path d="M19.83 3.07812H19.77C19.53 3.09812 19.27 3.12813 19 3.17813C17.77 3.37813 16.31 3.79813 15 4.31813C14.38 4.56813 13.8 4.83813 13.29 5.10813C12.96 5.28813 12.75 5.62813 12.75 5.99813V19.9081C12.75 20.6181 13.47 21.1081 14.12 20.8381C15.98 20.0581 18.29 19.3781 19.93 19.1581L20.24 19.1181C21.21 18.9981 22 18.1081 22 17.1381V5.24813C22 4.04813 21.03 3.07812 19.83 3.07812ZM19.27 13.7281C19.27 14.1181 18.99 14.2881 18.65 14.0981L17.59 13.5081C17.48 13.4481 17.3 13.4481 17.18 13.5081L16.12 14.0981C15.78 14.2881 15.5 14.1181 15.5 13.7281V10.6581C15.5 10.1981 15.88 9.81812 16.34 9.81812H18.44C18.9 9.81812 19.28 10.1981 19.28 10.6581V13.7281H19.27Z" fill={color} />
        </svg>
      )
    }
    
    
    export default BookSavedBoldIcon;
      