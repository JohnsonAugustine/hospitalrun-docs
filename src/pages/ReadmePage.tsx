import * as React from 'react';
import marked from 'marked';

interface IReadme {
    markdown: string;
    pkg?: any;
}

/**
 * TODO: Document This Component
 */
export default class ReadmePage extends React.Component<IReadme> {
    public defaultProps = {
        markdown: ''
    }
    public state = {
        pkg: {
            name: '',
            description: '',
            version: ''
        },
        Header: '',
        About: '',
        Details: '',
        CODE_OF_CONDUCT: ''
    }
    componentDidMount() {
        let pkg: any, readmeDetails: any;

        if(typeof this.props !== 'undefined'){
            if(typeof this.props.pkg === 'string'){
                pkg = require(this.props.pkg)
            } else if(typeof this.props.pkg === 'object') {
                pkg = this.props.pkg
            } else {
                pkg = require('../../package.json')
            }

            if(typeof this.props.markdown === 'string'){
                readmeDetails = this.props.markdown
            } else {
                readmeDetails = ''
            }
        } else {
            pkg = require('../../package.json')
            readmeDetails = ''
        }


        const markdown: {[key: string]: any} = {
            Details: readmeDetails,
            About: require("../templates/About.md"),
            Header: require("../templates/Header.md")
        }


        Promise.all(
            Object.keys(markdown)
                .map((template: string)=>{
                    // If the markdown has been loaded via storyboard
                    if(typeof markdown[template].default !== 'undefined'){
                        return {
                            text: markdown[template].default,
                            name: template
                        }
                    // If the markdown is called from a client application
                    } else {
                        return fetch(markdown[template])
                            .then(response => response.text())
                            .then(text=>{
                                return {
                                    text,
                                    name: template
                                }
                            })
                    }

                })
        ).then(templates => {
            let state: {[key: string]: any} = {}
            templates.forEach((template)=>{
                state[template.name] = marked(template.text)
            })
            this.setState({pkg, ...state})
        })

    }
    render() {
        const { Header, About, pkg, Details, CODE_OF_CONDUCT } = this.state;
        return (
            <section>
                <h1>{pkg.name}</h1>
                <h2>{pkg.description}</h2>
                <div dangerouslySetInnerHTML={{__html: Header}}></div>
                <div dangerouslySetInnerHTML={{__html: Details}}></div>
                <div dangerouslySetInnerHTML={{__html: About}}></div>
            </section>
        )
    }
}