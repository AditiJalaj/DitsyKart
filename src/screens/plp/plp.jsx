import React from 'react';
import Filter from '../../components/filter/filter';
import PlpContainer from '../../components/plpContainer/plpContainer';

function ProductListing(props) {
  return (
    <div>
      <h4>category selected from homepg here (casual shirt) - 2837 items </h4>
      <Filter />
      <PlpContainer />
    </div>
  );
}

export default ProductListing;
