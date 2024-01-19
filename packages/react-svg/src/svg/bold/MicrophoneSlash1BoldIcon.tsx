
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MicrophoneSlash1BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.6189 5.72L7.00891 16.33C6.27891 15.34 5.87891 14.13 5.87891 12.82V8.11C5.87891 6.27 6.69891 4.62 7.99891 3.5V7.64C7.99891 8.03 8.31891 8.35 8.69891 8.35C9.08891 8.35 9.40891 8.03 9.40891 7.64V2.57C9.86891 2.34 10.3589 2.18 10.8689 2.09V5.75C10.8689 6.15 11.1889 6.46 11.5789 6.46C11.9689 6.46 12.2889 6.15 12.2889 5.75V2C14.6789 2.11 16.7389 3.61 17.6189 5.72Z" fill={color} />
<path d="M18.1202 8.87891V12.8189C18.1202 16.1889 15.3702 18.9389 12.0002 18.9389C11.8202 18.9389 11.6402 18.9289 11.4602 18.9089C11.3802 18.9089 11.3002 18.8989 11.2302 18.8889C11.1002 18.8689 10.9702 18.8489 10.8502 18.8289C10.8002 18.8289 10.7602 18.8089 10.7002 18.7989C10.5602 18.7689 10.4202 18.7289 10.2902 18.6889C10.0702 18.6289 9.86016 18.5489 9.66016 18.4689C9.53016 18.4189 9.41016 18.3689 9.29016 18.2989C9.26016 18.2889 9.24016 18.2689 9.21016 18.2589C9.11016 18.2089 9.01016 18.1589 8.91016 18.0889L18.1202 8.87891Z" fill={color} />
<path d="M21.7497 11V13C21.7497 18.38 17.3797 22.75 11.9997 22.75C9.87969 22.75 7.84969 22.07 6.17969 20.82L7.25969 19.74C8.63969 20.72 10.2797 21.25 11.9997 21.25C16.5497 21.25 20.2497 17.55 20.2497 13V11C20.2497 10.59 20.5897 10.25 20.9997 10.25C21.4097 10.25 21.7497 10.59 21.7497 11Z" fill={color} />
<path d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MicrophoneSlash1BoldIcon;
      