interface DarkWheelIconProps {
  width?: number
  height?: number
}

export default function DarkWheelIcon({ width, height }: DarkWheelIconProps) {
  return (
    <svg
      width={width ?? 23}
      height={height ?? 23}
      viewBox={`0 0 ${width ?? 23} ${height ?? 23}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        width={`${width ?? 23}`}
        height={`${height ?? 23}`}
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_63" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_1_63"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}
