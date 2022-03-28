import React from 'react';
import SidebarContainer from '../sidebarContainer/sidebarContainer';
import ListingContainer from '../listingContainer/listingContainer';

function PlpContainer(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SidebarContainer />
      <ListingContainer />
    </div>
  );
}

export default PlpContainer;
