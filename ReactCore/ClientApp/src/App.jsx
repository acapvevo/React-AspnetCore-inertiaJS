import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import 'core-js'

import './bootstrap'
import store from './store'
import './scss/style.scss'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'InertiaReactASPNETCore'

createInertiaApp({
  title: (title) => {
    return title ? `${title} - ${appName}` : appName
  },
  resolve: (name) =>
    resolvePageComponent(`./views/${name}.jsx`, import.meta.glob('./views/**/*.jsx')),
  progress: {
    color: '#29d',
    includeCSS: true,
  },
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(
      <StrictMode>
        <Provider store={store}>
          <App {...props} />
        </Provider>
      </StrictMode>,
    )
  },
})
