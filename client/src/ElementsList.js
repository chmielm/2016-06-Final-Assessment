var ElementsList = (props) => (
  <table>
    <tbody>
      {props.elements.map(function(ele, i){
          return <ElementEntry element={ele} key={i} keyInd={i}/>;
      })}
    </tbody>
  </table>
);

ElementsList.propTypes = {
  elements: React.PropTypes.array.isRequired
};

window.ElementsList = ElementsList;