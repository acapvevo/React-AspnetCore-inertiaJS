import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import 'core-js'

import './bootstrap'
import store from './store'
import './scss/style.scss'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'NickSoftware'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(`./views/${name}.jsx`, import.meta.glob('./views/**/*.jsx')),

  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    )
  },
})
