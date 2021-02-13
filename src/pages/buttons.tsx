import React from 'react'
import Head from 'next/head'
import Button from '@/components/Button'

const Buttons: React.FC = () => {
  return (
    <>
      <Head>
        <title>Buttons</title>
      </Head>
      <main>
        <Button buttonType="primaryNeutral">This is Button</Button>
        <Button buttonType="primaryNeutral" disabled>
          This is Button
        </Button>
        <Button buttonType="primaryDanger">This is Button</Button>
        <Button buttonType="primaryDanger" disabled>
          This is Button
        </Button>
        <Button buttonType="primarySuccess">This is Button</Button>
        <Button buttonType="primarySuccess" disabled>
          This is Button
        </Button>

        <Button buttonType="secondaryNeutral">This is Button</Button>
        <Button buttonType="secondaryNeutral" disabled>
          This is Button
        </Button>
        <Button buttonType="secondaryDanger">This is Button</Button>
        <Button buttonType="secondaryDanger" disabled>
          This is Button
        </Button>
        <Button buttonType="secondarySuccess">This is Button</Button>
        <Button buttonType="secondarySuccess" disabled>
          This is Button
        </Button>

        <Button buttonType="terciaryNeutral">This is Button</Button>
        <Button buttonType="terciaryNeutral" disabled>
          This is Button
        </Button>
        <Button buttonType="terciaryDanger">This is Button</Button>
        <Button buttonType="terciaryDanger" disabled>
          This is Button
        </Button>
        <Button buttonType="terciarySuccess">This is Button</Button>
        <Button buttonType="terciarySuccess" disabled>
          This is Button
        </Button>

        <Button buttonType="quartiaryNeutral">This is Button</Button>
        <Button buttonType="quartiaryNeutral" disabled>
          This is Button
        </Button>
        <Button buttonType="quartiaryDanger">This is Button</Button>
        <Button buttonType="quartiaryDanger" disabled>
          This is Button
        </Button>
        <Button buttonType="quartiarySuccess">This is Button</Button>
        <Button buttonType="quartiarySuccess" disabled>
          This is Button
        </Button>
      </main>
    </>
  )
}

export default Buttons
