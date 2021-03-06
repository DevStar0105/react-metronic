/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import Test from './test'
import Saludo from './saludo'
import Promoted from './promoted'
import { VenturesPage } from './venturespage'

const Ventures: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/ventures/dashboard'>
          <PageTitle breadcrumbs={[]}>Ventures</PageTitle>
          <VenturesPage />
        </Route>
        <Route path='/ventures/test'>
          <Test />
        </Route>

        <Route path='/ventures/saludo'>
          <Saludo />
        </Route>

        <Route path='/ventures/promoted'>
          <Promoted />
        </Route>

        <Redirect from='/ventures/' exact={true} to='/ventures/dashboard' />
        <Redirect to='/ventures/dashboard' />
      </Switch>
    </>
  )
}

export {Ventures}