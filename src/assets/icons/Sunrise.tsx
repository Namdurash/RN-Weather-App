import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Styles {
    width: number;
    color?: string;
    height: number;
};

const Sunrise = ({width, height, color = '#fff'}: Styles) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
    >
      <Path
        d="M20.335 12.937a.713.713 0 110-1.426h2.952a.713.713 0 110 1.426h-2.952zm-19.622 0a.713.713 0 110-1.426h2.953a.713.713 0 110 1.426H.713zm16.676-6.103a.71.71 0 010-1.008l2.087-2.087a.713.713 0 111.008 1.008l-2.087 2.087a.71.71 0 01-1.008 0zM3.517 4.75a.713.713 0 111.008-1.008l2.087 2.087a.713.713 0 11-1.008 1.008L3.517 4.75zm7.77-.859V.94a.713.713 0 111.425 0V3.89a.713.713 0 11-1.425 0z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.171 13.75c.143 0 .28.057.38.158l4.29 4.29h6.622a.537.537 0 010 1.075h-6.844a.537.537 0 01-.38-.157l-4.068-4.068-4.068 4.068c-.1.1-.238.157-.38.157H.537a.537.537 0 110-1.074H7.5l4.291-4.29c.1-.102.238-.158.38-.158z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9.151a4.95 4.95 0 00-4.95 4.95.675.675 0 11-1.35 0 6.3 6.3 0 1112.6 0 .675.675 0 11-1.35 0A4.95 4.95 0 0012 9.151z"
        fill={color}
      />
    </Svg>
  )
}

export default Sunrise;