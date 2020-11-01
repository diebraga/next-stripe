import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import GlobalStyles from '../global';

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'TypeScript Next.js Stripe',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
        <GlobalStyles />
      <header>
        <div className="header-content">
          <h1>
            <br />
            Next.js, TypeScript, and Stripe!
          </h1>
        </div>
      </header>
      {children}
    </div>
  </>
)

export default Layout
