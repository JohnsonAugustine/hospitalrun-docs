const fs = require('fs-extra')
const path = require('path')
const docPath = fs.realpathSync(__dirname)


export const templates = {
    About: fs.readFileSync(path.join(docPath, './About.md')).toString(),
    Header: fs.readFileSync(path.join(docPath, './Header.md')).toString(),
    github_template_path: path.join(docPath, './github')
}