import React, { Component } from 'react'

class About extends Component {
  render () {
    return (
      <div>
        <div className="header-content">
          <div className="has-text-centered">
            <h1 className="title is-spaced">
              About
            </h1>
          </div>
        </div>

        <div className="subheader-content has-text-centered">
          <h4 className="subtitle is-4"><i>Violets are red, purples are blue</i></h4>
          <hr/>
        </div>

        <div className="single-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia euismod urna, in gravida leo efficitur a. Sed tempus augue risus, eget faucibus urna hendrerit a. Donec pulvinar maximus dui ut porttitor. Nullam tristique tortor et ipsum tristique, ac lacinia diam faucibus. Nunc cursus massa eget consectetur laoreet. Sed porttitor metus a velit pellentesque fringilla. Maecenas urna velit, euismod non risus id, efficitur sodales ante. Vestibulum eu condimentum dui. Sed vitae eros dolor. Curabitur ornare tortor eu ligula pellentesque egestas. Nam posuere sapien ac ligula commodo, at aliquet magna tincidunt. Vestibulum dapibus tortor dui, ac tristique velit dignissim vitae. Maecenas blandit urna vel lectus suscipit faucibus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia euismod urna, in gravida leo efficitur a. Sed tempus augue risus, eget faucibus urna hendrerit a. Donec pulvinar maximus dui ut porttitor. Nullam tristique tortor et ipsum tristique, ac lacinia diam faucibus. Nunc cursus massa eget consectetur laoreet. Sed porttitor metus a velit pellentesque fringilla. Maecenas urna velit, euismod non risus id, efficitur sodales ante. Vestibulum eu condimentum dui. Sed vitae eros dolor. Curabitur ornare tortor eu ligula pellentesque egestas. Nam posuere sapien ac ligula commodo, at aliquet magna tincidunt. Vestibulum dapibus tortor dui, ac tristique velit dignissim vitae. Maecenas blandit urna vel lectus suscipit faucibus.</p>
        </div>

        <div className="has-text-right">
          <p><a className="button" href="index.html">Back to Home</a></p>
        </div>
      </div>
    )
  }
}

export default About
