
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PlayCricleBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.0717 19.8211C18.8817 19.8211 18.6917 19.7511 18.5417 19.6011C18.2517 19.3111 18.2517 18.8311 18.5417 18.5411C22.1517 14.9311 22.1517 9.06109 18.5417 5.46109C18.2517 5.17109 18.2517 4.69109 18.5417 4.40109C18.8317 4.11109 19.3117 4.11109 19.6017 4.40109C23.7917 8.59109 23.7917 15.4111 19.6017 19.6011C19.4517 19.7511 19.2617 19.8211 19.0717 19.8211Z" fill={color} />
<path d="M4.93031 19.8211C4.74031 19.8211 4.55031 19.7511 4.40031 19.6011C0.210312 15.4111 0.210312 8.59109 4.40031 4.40109C4.69031 4.11109 5.17031 4.11109 5.46031 4.40109C5.75031 4.69109 5.75031 5.17109 5.46031 5.46109C1.85031 9.07109 1.85031 14.9411 5.46031 18.5411C5.75031 18.8311 5.75031 19.3111 5.46031 19.6011C5.31031 19.7511 5.12031 19.8211 4.93031 19.8211Z" fill={color} />
<path d="M11.9988 22.7119C10.7488 22.7019 9.55878 22.5019 8.44878 22.1119C8.05878 21.9719 7.84878 21.5419 7.98878 21.1519C8.12878 20.7619 8.54878 20.5519 8.94878 20.6919C9.90878 21.0219 10.9288 21.2019 12.0088 21.2019C13.0788 21.2019 14.1088 21.0219 15.0588 20.6919C15.4488 20.5619 15.8788 20.7619 16.0188 21.1519C16.1588 21.5419 15.9488 21.9719 15.5588 22.1119C14.4388 22.5019 13.2488 22.7119 11.9988 22.7119Z" fill={color} />
<path d="M15.2988 3.33906C15.2188 3.33906 15.1288 3.32906 15.0488 3.29906C14.0988 2.95906 13.0688 2.78906 11.9988 2.78906C10.9288 2.78906 9.90878 2.96906 8.94878 3.29906C8.54878 3.42906 8.12878 3.22906 7.98878 2.83906C7.84878 2.44906 8.05878 2.01906 8.44878 1.87906C9.56878 1.48906 10.7588 1.28906 11.9988 1.28906C13.2388 1.28906 14.4388 1.48906 15.5488 1.87906C15.9388 2.01906 16.1488 2.44906 16.0088 2.83906C15.8988 3.14906 15.6088 3.33906 15.2988 3.33906Z" fill={color} />
<path d="M8.73828 12.0001V10.3301C8.73828 8.25014 10.2083 7.40014 12.0083 8.44014L13.4583 9.28014L14.9083 10.1201C16.7083 11.1601 16.7083 12.8601 14.9083 13.9001L13.4583 14.7401L12.0083 15.5801C10.2083 16.6201 8.73828 15.7701 8.73828 13.6901V12.0001Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PlayCricleBoldIcon;
      