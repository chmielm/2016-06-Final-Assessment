var Navi = React.createClass({
  onSaveClicked: function() {
    this.props.saveClickHandle(this.refs.inputTxt.value);
  },
  onImportClicked: function() {
    this.props.importClickHandle(this.refs.inputTxt.value);
  },
  render: function(){
    return (
      <div className="navi">
        <input className="file-name" type="text" ref="inputTxt" placeholder="... to do"/>
        <button className="save" onClick={this.onSaveClicked}>Save</button>
        <button className="import" onClick={this.onImportClicked}>Import</button>
      </div> );
  }});

var Bar = (props) => (
  <nav className="bar">
    <div className="barNavi">
      <Navi saveClickHandle={props.saveClickHandle} importClickHandle={props.saveClickHandle}/>
    </div> 
  </nav>
);

window.Bar = Bar;