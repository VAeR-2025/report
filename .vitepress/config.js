import {defineConfig} from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

let reportPath = '/report'
let processPath = '/process'
// https://vitepress.dev/reference/site-config

export default withMermaid(
    defineConfig({
        base: '/VAeR/',
        title: "Visione Artificiale e Riconoscimento",
        description: "localissazione fratture ossee in immagini radiografiche",
        themeConfig: {
            // https://vitepress.dev/reference/default-theme-config
            nav: [
                {text: 'Home', link: '/'},
            ],

            sidebar: [
                {text: 'Report',
                    items: [
                        {text: 'Introduzione', link: `${reportPath}/1-introductione`},
                        {text: 'Stato dell\'arte', link: `${reportPath}/2-sa`},
                        {text: 'Approccio sviluppato', link: `${reportPath}/3-approccio`},
                        {text: 'Valutasioni Sperimentali', link: `${reportPath}/4-valutasioni`},
                        {text: 'Conclusioni', link: `${reportPath}/5-Conclusioni`}
                    ]
                }
            ]
        }
    })
)
