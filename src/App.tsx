import { ConnectKitButton } from 'connectkit'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useSignMessage } from 'wagmi'

import { Profile } from './components'

export function App() {
  const { isConnected } = useAccount()
  const { data, error, isLoading, signMessageAsync } = useSignMessage()

  useEffect(()=>{
    const f = async ()=>{
     const data =  await signMessageAsync({ message: "hello" })
     alert(data)
    }
    f()
  },[isConnected])

  return (
    <>
      <h1>wagmi + ConnectKit + Vite</h1>
      {/* <ConnectKitButton /> */}
      <Profile />
    </>
  )
}
