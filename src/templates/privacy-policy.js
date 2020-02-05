import React from "react"
import _ from "lodash"

import { Layout } from "../components/index"
import { htmlToReact } from "../utils"

export default class Contact extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <article className="post page post-full">
          <header className="post-header">
            <h1 className="post-title">
              {_.get(this.props, "pageContext.frontmatter.title")}
            </h1>
          </header>
          {_.get(this.props, "pageContext.frontmatter.subtitle") && (
            <div className="post-subtitle">
              {htmlToReact(
                _.get(this.props, "pageContext.frontmatter.subtitle")
              )}
            </div>
          )}
          <div className="post-content">
            {htmlToReact(_.get(this.props, "pageContext.html"))}
          </div>
        </article>
      </Layout>
    )
  }
}
