import { getCssText, styled } from '@/styles'
import Head from 'next/head'

const Button = styled('button', {
  backgroundColor: '$green300',
  padding: 6,

  border: 0,
  borderRadius: 4,
});

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Create Next App</title>
      </Head>
      <main>
        <Button>Enviar</Button>
      </main>
    </>
  )
}
