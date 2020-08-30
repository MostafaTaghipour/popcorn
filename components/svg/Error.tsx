import * as React from "react";
import Svg, {
  G,
  RadialGradient,
  Stop,
  Path,
  LinearGradient,
  Circle,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export default function ErrorSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    //@ts-ignore
    <Svg viewBox="0 0 300 300" {...props}>
      <Path
        fill="#313444"
        d="M112.3 173.7c13.5 3.1-14.4 8.1-35.9 3.4-25.7-5.6-53.6-5.4-57-.6-3.3 4.8 40 4.7 50.3 8.2 9.4 3.3-30 5.7-21.2 12.4 11.2 8.5 73.1 7.5 87.9 2.5 33.1-11.2 67.3-3.7 79.9-1.4 26.5 4.9 91.9-1.1 43.1-9-24.2-3.9-20-7.8-1.3-10.1 30.4-3.7 2.8-9.8-18.7-7.9-5.7.5-10.4 2.1-21.5 2.6-9.7.5-20.8-.5-22.2-2.1-3.6-3.9 30-6.8 26.9-10.2-4.5-5-46.7-5.9-49.8-.7-3.4 5.6-17 8-38.5 6.1-16.2-1.4-29.3-.7-34.2 1.7-4.7 2.4 6.8 3.9 12.2 5.1z"
      />
      <Path
        fill="#C9C8CD"
        d="M57.5 84.6h9.7v120.9h-9.7zM229 84.6h9.7v120.9H229z"
      />
      <Path
        fill="#848489"
        d="M50.4 201.4h23.8v5.5H50.4zM222 201.4h23.8v5.5H222z"
      />
      <G>
        <Path
          fill="#FF7300"
          d="M41.9 84.6h212.5v26.5H41.9zM41.9 127.2h212.5v26.5H41.9z"
        />
        <Path
          fill="#FFF"
          d="M222 84.6l7.4 13.2 7.3 13.3h16.1l-7.3-13.3-7.3-13.2zM223.8 127.2l7.2 13.2 7.3 13.3h15.9l-7.2-13.3-7.3-13.2zM174.2 84.6l8.3 13.2 8.2 13.3h18.1l-8.2-13.3-8.3-13.2zM178.5 127.2l7.5 13.2 7.6 13.3h16.6l-7.5-13.3-7.6-13.2zM132.1 84.6l7.8 13.2 7.8 13.3h17.1L157 97.8l-7.8-13.2zM136.2 127.2l7.1 13.2 7.2 13.3h15.7l-7.2-13.3-7.1-13.2zM90.4 84.6l7.2 13.2 7.3 13.3h15.9l-7.3-13.3-7.2-13.2zM90.6 127.2l7.5 13.2 7.5 13.3h16.5l-7.5-13.3-7.5-13.2zM46.8 127.2l7.5 13.2 7.6 13.3h16.5l-7.5-13.3-7.6-13.2zM47.6 84.6l7 13.2 6.9 13.3h15.2l-6.9-13.3-6.9-13.2z"
        />
      </G>
      <G>
        <Path
          fill="#FFCE00"
          d="M196.7 145.8l-41.5-69.3c-1.7-2.9-4.7-4.4-7.7-4.4s-6 1.5-7.7 4.4l-41.4 69.3c-3.6 6 .7 13.6 7.7 13.6H189c7 0 11.3-7.6 7.7-13.6z"
        />
        <Path
          fill="#232321"
          d="M188.3 155.1h-81.5c-2 0-3.8-1.1-4.8-2.8-1-1.8-1-3.9.1-5.6l40.7-68.1c1-1.7 2.8-2.7 4.8-2.7s3.8 1 4.8 2.7l40.7 68.1c1 1.7 1.1 3.8.1 5.6-1.1 1.7-2.9 2.8-4.9 2.8zm-40.7-75.9c-.8 0-1.5.4-1.9 1.1L105 148.4c-.4.7-.4 1.5 0 2.3.4.7 1.1 1.1 2 1.1h81.5c.8 0 1.5-.4 2-1.1.4-.7.4-1.6 0-2.3l-40.7-68.1c-.7-.7-1.4-1.1-2.2-1.1z"
        />
        <G fill="#232321">
          <Path d="M147.2 93.3c-2.3.2-3.9 2.3-3.8 4.6l1.9 32c.1 1.2 1.1 2.2 2.3 2.2 1.2 0 2.3-1 2.3-2.2l1.9-32.2c.1-2.5-2-4.6-4.6-4.4zM151.8 140.4c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3 0 4.2 1.9 4.2 4.2z" />
        </G>
      </G>
      <G>
        <Path
          fill="#CECECE"
          d="M42.7 210.9c0 1.1-8 1.9-17.9 1.9-9.9 0-17.9-.9-17.9-1.9 0-1.1 8-1.9 17.9-1.9 9.9 0 17.9.8 17.9 1.9z"
        />
        <Path
          fill="#B3B3B3"
          d="M39.484 157.462l7.686-19.542 5.398 2.123-7.686 19.542z"
        />
        <Path
          fill="#9A9896"
          d="M41.6 144.8l10 3.9c14.2 5.5 16.3 9.4 17.3 6.9 1.2-3.2 3.3-10.3-13.2-17.1l-10-3.9c-.7-.3-1.6.1-1.9.8l-3 7.5c-.3.7 0 1.6.8 1.9z"
        />
        <Path
          fill="#B3B3B3"
          d="M39.057 142.398l3.088-7.704 1.578.632-3.088 7.704z"
        />
        <Path
          fill="#F5A200"
          d="M21.9 211.2l-.7-.3c-2.2-.8-3.2-3.3-2.4-5.5l18.3-46.8c.8-2.2 3.3-3.2 5.5-2.4l.7.3c2.2.8 3.2 3.3 2.4 5.5l-18.3 46.8c-.9 2.2-3.3 3.2-5.5 2.4z"
        />
        <Path
          fill="#D98400"
          d="M45.6 163.6l-9.4-3.7c-1.4-.6-2.1-2.2-1.6-3.6l.2-.4c.6-1.4 2.2-2.1 3.6-1.6l9.4 3.7c1.4.6 2.1 2.2 1.6 3.6l-.2.4c-.6 1.5-2.2 2.2-3.6 1.6z"
        />
        <Path
          fill="#9A9896"
          d="M35.9 144.2l-.4-.2c-1.4-.5-2-2.1-1.5-3.4l3-7.7c.5-1.4 2.1-2 3.4-1.5l.4.2c1.4.5 2 2.1 1.5 3.4l-3 7.7c-.5 1.3-2 2-3.4 1.5z"
        />
        <G fill="#D98400">
          <Path d="M20.4 207.2c-.2-.1-.3-.3-.3-.5l16.4-41.8c.1-.2.3-.3.5-.2h.1c.2.1.3.3.2.5L20.8 207c0 .2-.2.3-.4.2zM22.7 208.1c-.2-.1-.3-.3-.3-.5l16.4-41.8c.1-.2.3-.3.5-.2h.1c.2.1.3.3.2.5l-16.4 41.8c-.1.2-.3.3-.5.2zM25.1 209.1c-.2-.1-.3-.3-.3-.5l16.4-41.8c.1-.2.3-.3.5-.2h.1c.2.1.3.3.2.5l-16.4 41.8c-.1.2-.3.3-.5.2z" />
        </G>
      </G>
      <G>
        <Path
          fill="#CECECE"
          d="M295 225.7c0 1-7.8 1.9-17.5 1.9s-17.5-.8-17.5-1.9c0-1 7.8-1.9 17.5-1.9s17.5.9 17.5 1.9z"
        />
        <Path
          fill="#6E6E6E"
          d="M253.485 186.013l5.584-4.22 7.357 9.731-5.584 4.221z"
        />
        <Path
          fill="#F5A200"
          d="M226 146.2l2.2-1.7c1.3-.9 3-.7 4 .6l28.1 37.1c.9 1.3.7 3-.6 4l-2.2 1.7c-1.3.9-3 .7-4-.6l-28.1-37.1c-.9-1.2-.7-3 .6-4z"
        />
        <Path
          fill="#D98400"
          d="M264.2 184.1l-10 7.5c-1.4 1.1-3.5.8-4.5-.6l-.5-.7c-1.1-1.4-.8-3.5.6-4.5l10-7.5c1.4-1.1 3.5-.8 4.5.6l.5.7c1.1 1.4.8 3.4-.6 4.5z"
        />
        <Path
          fill="#9A9896"
          d="M246.8 204.2l31.5-23.8s9.6 12.7 12.3 16.2c2.6 3.5 1.4 23-4.2 27.3-5.6 4.2-24.4.6-27.7-3.9-3.3-4.4-11.9-15.8-11.9-15.8z"
        />
        <Path
          fill="#8D8B8A"
          d="M251 201l-4.2 3.2s8.6 11.4 11.9 15.8c3.3 4.4 22.1 8.1 27.7 3.9 3.2-2.4 5-9.9 5.4-16.5-13.6-1.5-27.2-4-40.8-6.4z"
        />
        <G fill="#D98400">
          <Path d="M231 146.3c.2-.1.4-.1.5 0l24.2 32.3c.1.1 0 .3-.1.5-.2.1-.4.1-.5 0l-24.2-32.3c-.1-.2 0-.4.1-.5zM229 147.8c.2-.1.4-.1.5 0l24.2 32.3c.1.1 0 .3-.1.5-.2.1-.4.1-.5 0l-24.2-32.3c-.1-.2 0-.4.1-.5zM227 149.3c.2-.1.4-.1.5 0l24.2 32.3c.1.1 0 .3-.1.5-.2.1-.4.1-.5 0l-24.2-32.3c-.1-.2 0-.4.1-.5z" />
        </G>
      </G>
    </Svg>
  );
}