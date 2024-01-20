<article ><a name="user-content-readme-top"></a></p>

<div align="center">
  <h1 align="center"></a>Iconsax React SVG</h1>
  <p align="center">
    Latest Iconsax pack in different designs </strong>
  </p>
</div>

<br>
<br>

# Installation

- Install Yarn package

```bash
yarn add iconsax-react-svg
```

- Install NPM package

```bash
npm install iconsax-react-svg
```

## Usage

Local registration:

```jsx
import { VsxIcon } from "iconsax-react-svg";

function App() {
  return (
    <div>
      // Dynamic icon component - Use PascalCase for iconName prop
      <VsxIcon iconName="VolumeUp" />
    </div>
  );
}

export default App;
```

## Props

| Prop       | Type                                                | Default        | Note                                                               |
| ---------- | --------------------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `color`    | `string`                                            | `currentColor` | css color                                                          |
| `size`     | `number` `string`                                   | 24px           | size="24" or :size="24"                                            |
| `type`     | `Linear` `Outline` `TwoTone` `Bulk` `Broken` `Bold` | `Linear`       | icons styles                                                       |
| `iconName` | string                                              |                | iconName is only required with vsx-icon tag (Dynamic icon imports) |

## Contact

Emad Moghimi [jaxtheprime@gmail.com](jaxtheprime@gmail.com)

Project Link: [https://github.com/JaxThePrime/react-iconsax-vite](https://github.com/JaxThePrime/react-iconsax-vite)

</article >