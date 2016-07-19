var App = React.createClass({

  getInitialState: function(){
    return { elements: this.props.elements};
  },
  elementClickHandle: function(i) {
    this.setState({ elements: this.state.elementss });
  },  
  saveClickHandle: function(saveText){
    
  },
  importClickHandle: function(importText){
    importFromGiphy(importText, this.refreshOnQuery); 
  },
  refreshOnQuery: function(state){
    this.setState(state);
  },

  render: function(){
    return (
      <div>
        <Bar saveClickHandle={this.saveClickHandle} importClickHandle={this.importClickHandle}/>
        <br/>
        <div className="ElementsList">
          <ElementsList elements={this.state.elements} elementClickHandle={this.elementClickHandle}/>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App elements={ElementsData}/>, document.getElementById('app'));

window.App = App;