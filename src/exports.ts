import {templates} from './templates'
import * as path from 'path'
export default {
    commands: {
        "docs": {
            "name": "hospitalrun-docs",
            "description": "Generate documentation for your project"
        }
    },
    templates,
    distPath: path.resolve(__dirname, './build')
}
