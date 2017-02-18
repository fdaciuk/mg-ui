import { configure, setAddon } from '@kadira/storybook'
import addonInfo from '@kadira/react-storybook-addon-info'
import 'milligram'

setAddon(addonInfo)

const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
