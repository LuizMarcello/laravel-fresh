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
    /* resolve: name => require(`./Pages/${name}`), */
    /* Ou assim, fazendo um "code splitting" ("import()"=importação dinâmica)
       para melhorar o "bundle size"(tamanho do bundle) porque, normalmente,
       todos os componentes são carregados simultâneamente, só faltando
       serem renderizados pelo inertia.
       O "code splitting" (divisão de código) divide as várias páginas do
       aplicativo em pacotes menores, que são carregados sob demanda ao
       visitar novas páginas. Isso pode reduzir significativamente o tamanho
       do pacote JavaScript inicial, melhorando o tempo de renderização pela
       primeira vez */
    resolve: name => import(`./Pages/${name}`),
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
