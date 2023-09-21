import { LiaSpinnerSolid } from "react-icons/lia"
import "./styles.css"

interface SpinnerProps {
  size: number
}

export function Spinner({ size }: SpinnerProps) {
  return <LiaSpinnerSolid className="spin" size={size} />
}
