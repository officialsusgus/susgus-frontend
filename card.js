const cardContainer = document.querySelector(".react-card");

// React component for form inputs
class CardInput extends React.Component {
  render() {
    return (
      <fieldset>
        <input
          name={this.props.name}
          id={this.props.id}
          type={this.props.type || "text"}
          placeholder={this.props.placeholder}
          required
        />
      </fieldset>
    );
  }
}

// React component for textarea
class CardTextarea extends React.Component {
  render() {
    return (
      <fieldset>
        <textarea
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.placeholder}
          required
        ></textarea>
      </fieldset>
    );
  }
}

// React component for form button
class CardBtn extends React.Component {
  render() {
    return (
      <fieldset>
        <button
          className={this.props.className}
          type={this.props.type}
          value={this.props.value}
        >
          {this.props.value}
        </button>
      </fieldset>
    );
  }
}

// React component for the front side of the card
class CardFront extends React.Component {
  render() {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
              <img src="https://source.unsplash.com/w8YICpz1I10/358x458" />
            </div>

            <div className="col-xs-6 side-front-content">
              <h2>Malmö stad</h2>

              <h1>Dagens skolmat</h1>

              <p>(Huvudrätt)</p>

              <p>(Alternativ)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// React component for the card (main component)
class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <CardFront />
        </div>
      </div>
    );
  }
}

// Render Card component
ReactDOM.render(<Card />, cardContainer);
