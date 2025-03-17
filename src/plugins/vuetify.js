import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles' // "style" → "styles"로 수정
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    components,
    directives,
})