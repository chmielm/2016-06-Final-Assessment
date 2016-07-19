class ElementEntry extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  render() {
    return (
      <tr onClick={() => this.setState({clicked: !this.state.clicked})}>
        <td className="element-description">{this.props.element.description}</td>
        <td>
          <img src={this.props.element.image} />
        </td>
        {this.state.clicked ? <td className="element-like">{this.props.element.like}</td> : null}
      </tr>
    )
  }
}

window.ElementEntry = ElementEntry;
