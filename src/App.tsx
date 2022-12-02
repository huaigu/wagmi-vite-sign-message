import { ConnectKitButton } from 'connectkit'
import { useEffect } from 'react'
import { useAccount, useConnect } from 'wagmi'
import { useSignMessage } from 'wagmi'

import { Profile } from './components'

export function App() {
  const { address, connector, isConnected } = useAccount()
  const { connect } =
      useConnect()
      
  const { data, error, isLoading, signMessageAsync } = useSignMessage()

  useEffect(()=>{
    const f = async ()=>{
      // force to back to mobile wallet app
     await connect({connector})
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
