
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HomeTrendDownBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.0402 6.82165L14.2802 2.79165C12.7102 1.69165 10.3002 1.75165 8.79023 2.92165L3.78023 6.83165C2.78023 7.61165 1.99023 9.21165 1.99023 10.4716V17.3716C1.99023 19.9216 4.06023 22.0016 6.61023 22.0016H17.3902C19.9402 22.0016 22.0102 19.9316 22.0102 17.3816V10.6016C22.0102 9.25165 21.1402 7.59165 20.0402 6.82165ZM16.8802 16.1916C16.8802 16.2816 16.8602 16.3716 16.8302 16.4616C16.7602 16.6316 16.6202 16.7716 16.4502 16.8416C16.3602 16.8816 16.2702 16.8916 16.1802 16.8916H14.3202C13.9302 16.8916 13.6202 16.5816 13.6202 16.1916C13.6202 15.8016 13.9302 15.4916 14.3202 15.4916H14.5002L12.3902 13.3816L11.3702 14.9016C11.2502 15.0716 11.0702 15.1916 10.8602 15.2116C10.6402 15.2316 10.4502 15.1616 10.3002 15.0116L7.32023 12.0316C7.05023 11.7616 7.05023 11.3216 7.32023 11.0416C7.59023 10.7616 8.03023 10.7716 8.31024 11.0416L10.6902 13.4216L11.7102 11.9016C11.8302 11.7316 12.0102 11.6116 12.2202 11.5916C12.4402 11.5716 12.6302 11.6416 12.7802 11.7916L15.5002 14.5116V14.3316C15.5002 13.9416 15.8102 13.6316 16.2002 13.6316C16.5902 13.6316 16.9002 13.9416 16.9002 14.3316V16.1916H16.8802Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HomeTrendDownBoldIcon;
      