import Navbar from "@/components/navbar/navbar"
import { ReactNode } from "react"

interface Props {
  children: ReactNode,
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
