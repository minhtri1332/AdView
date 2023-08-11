import {useEffect, useState} from "react";

export const useMounted = (sleep?: number) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, sleep || 300)
  }, [sleep])

  return mounted
}