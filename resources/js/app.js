import {
    createApp,
    h
} from 'vue'
import {
    createInertiaApp
} from '@inertiajs/inertia-vue3'

import {
    InertiaProgress
} from '@inertiajs/progress'

import {
    Link
} from '@inertiajs/inertia-vue3'

InertiaProgress.init()

/* Dizendo ao vueJS para registrar o link do inertia globalmente,
   para todos os componentes do projeto */
/* Vue.component('inertia-link', Link) */

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({
        el,
        App,
        props,
        plugin
    }) {
        createApp({
                render: () => h(App, props)
            })
            .use(plugin)
        .component('inertia-link', Link)
            .mount(el)
    },
})
