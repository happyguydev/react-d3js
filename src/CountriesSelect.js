import React, { Component } from 'react';

class CountriesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    let val = event.target.value;
    alert("You'll never have me!"+val);
  }

  render() {
    return (
      <select className={this.props.className} onChange={this.handleChange}>
        <ChildOption value="usa_states" name="USA" />
		<ChildOption value="india_states" name="India" />
		<ChildOption value="belgium_states" name="Belgium" />
		<ChildOption value="bulgaria_states" name="Bulgaria" />
		<ChildOption value="Czech_republic_states" name="Czech republic" />
		<ChildOption value="denmark_states" name="Denmark" />
		<ChildOption value="germany_states" name="Germany" />
		<ChildOption value="estonia_states" name="Estonia" />
		<ChildOption value="ireland_states" name="Ireland" />
		<ChildOption value="greece_states" name="Greece" />
		<ChildOption value="great_Britain_states" name="Great Britain" />
		<ChildOption value="spain_states" name="Spain" />
		<ChildOption value="france_states" name="France" />
		<ChildOption value="croatia_states" name="Croatia" />
		<ChildOption value="italy_states" name="Italy" />
		<ChildOption value="cyprus_states" name="Cyprus" />
		<ChildOption value="latvia_states" name="Latvia" />
		<ChildOption value="lithuania_states" name="Lithuania" />
		<ChildOption value="luxembourg_states" name="Luxembourg" />
		<ChildOption value="hungaria_states" name="Hungaria" />
		<ChildOption value="malta_states" name="Malta" />
		<ChildOption value="netherlands_states" name="Netherlands" />
		<ChildOption value="austria_states" name="Austria" />
		<ChildOption value="poland_states" name="Poland" />
		<ChildOption value="portugal_states" name="Portugal" />
		<ChildOption value="romania_states" name="Romania" />
		<ChildOption value="slovakia_states" name="Slovakia" />
		<ChildOption value="slovenia_states" name="Slovenia" />
		<ChildOption value="finland_states" name="Finland" />
		<ChildOption value="sweden_states" name="Sweden" />
		<ChildOption value="canada_states" name="Canada" />
      </select>
    );
  } // end render
}  // end FlavorForm class

// via http://stackoverflow.com/a/26180068/1762493
class ChildOption extends React.Component {
  propTypes: {
    name: React.PropTypes.string,
    value: React.PropTypes.string,
  };

  render() {
    return (
      <ChildOption value={this.props.value}>{this.props.name}" />
    )
  }
}

export default CountriesSelect