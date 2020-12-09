import React from 'react';
import {addFeature} from '../actions/actions'
import {connect} from 'react-redux'


const AdditionalFeature = props => {
  const handleOnClick=(e)=>{
   props.addFeature(props.feature.id)
  }
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleOnClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps=(state)=>{
  return{
    additionalFeatures:state.additionalFeatures
  };
}
export default connect(mapStateToProps,{addFeature})(AdditionalFeature);
  


