import Image from "next/image"

interface Props {
  src: string
  positionTop: number
  positionLeft?: number
  positionRight?: number
}

const Blob = ({
  src,
  positionLeft = 0,
  positionTop,
  positionRight = 0,
}: Props) => {
  return (
    <Image
      src={src}
      width={300}
      height={300}
      alt="Blob"
      className="absolute w-80 h-80 opacity-50"
      style={{
        top: `${positionTop}px`,
        left: `${positionLeft}px`,
        right: `${positionRight}px`,
      }}
    />
  )
}

export default Blob
