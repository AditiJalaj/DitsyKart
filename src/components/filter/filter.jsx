import React from 'react';
import * as styles from './styles';
//maitain a custom hook for this , will come from api later
const filterOptions = [
  { option: 'Neck', subOptions: ['Round neck', 'Mandarin Collar', 'Hood', 'Cutaway Collar', 'Button-down Collar', 'Open collar'] },
  { option: 'Pattern', subOptions: ['Checked', 'Pattern', 'Solid', 'Striped', 'Button-down Collar', 'Open collar'] },
  { option: 'Fit', subOptions: ['Slim Fit', 'Regular Fit'] },
  { option: 'Sleeve Length', subOptions: ['Long Sleeves', 'Short Sleeves', 'Three Quarter Sleeves'] },
  { option: 'Fabric', subOptions: ['Cotton Linen', 'Linen', 'Cotton', 'Polyster', 'Sating'] },
];

export const FilterOption = ({ filter }) => <span>{filter.option}</span>;

export const FilterOptions = () => {
  return filterOptions.map((_filter, index) => {
    return <FilterOption filter={_filter} key={index} />;
  });
};

export const Selector = () => (
  <select class='input' type='text' value='Sort by' placeholder='outlined' style={styles.selector}>
    <option>Sort By Popularity</option>
    <option>Price High to Low</option>
    <option>Price Low to High</option>
    <option>Discount</option>
  </select>
);

function Filter(props) {
  return (
    <div style={styles.filterHorizontal}>
      <h5>FILTERS</h5>
      {/* render filteroptions only if category selectd */}
      <FilterOptions />
      <Selector />
    </div>
  );
}

export default Filter;
