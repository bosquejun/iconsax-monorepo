
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Like1OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.2794 22.1H12.4794C11.9194 22.1 10.6994 21.93 10.0494 21.28L7.01937 18.94L7.93937 17.75L11.0394 20.15C11.2894 20.39 11.9194 20.59 12.4794 20.59H16.2794C17.1794 20.59 18.1494 19.87 18.3494 19.06L20.7694 11.71C20.9294 11.27 20.8994 10.87 20.6894 10.58C20.4694 10.27 20.0694 10.09 19.5794 10.09H15.5794C15.0594 10.09 14.5794 9.86999 14.2494 9.48999C13.9094 9.09999 13.7594 8.57999 13.8394 8.03999L14.3394 4.82999C14.4594 4.26999 14.0794 3.63999 13.5394 3.45999C13.0494 3.27999 12.4194 3.53999 12.1994 3.85999L8.09938 9.95999L6.85938 9.12999L10.9594 3.02999C11.5894 2.08999 12.9694 1.63999 14.0494 2.04999C15.2994 2.45999 16.0994 3.83999 15.8194 5.11999L15.3294 8.26999C15.3194 8.33999 15.3194 8.43999 15.3894 8.51999C15.4394 8.56999 15.5094 8.59999 15.5894 8.59999H19.5894C20.5694 8.59999 21.4194 9.00999 21.9194 9.71999C22.4094 10.41 22.5094 11.32 22.1894 12.2L19.7994 19.48C19.4294 20.93 17.8894 22.1 16.2794 22.1Z" fill={color} />
<path d="M5.38086 20.9999H4.38086C2.53086 20.9999 1.63086 20.1299 1.63086 18.3499V8.5499C1.63086 6.7699 2.53086 5.8999 4.38086 5.8999H5.38086C7.23086 5.8999 8.13086 6.7699 8.13086 8.5499V18.3499C8.13086 20.1299 7.23086 20.9999 5.38086 20.9999ZM4.38086 7.3999C3.29086 7.3999 3.13086 7.6599 3.13086 8.5499V18.3499C3.13086 19.2399 3.29086 19.4999 4.38086 19.4999H5.38086C6.47086 19.4999 6.63086 19.2399 6.63086 18.3499V8.5499C6.63086 7.6599 6.47086 7.3999 5.38086 7.3999H4.38086Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Like1OutlineIcon;
      