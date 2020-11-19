import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';
//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    rooms,
  } = context;
  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* Endo of select type */}
        {/* Guests */}
        <div className="form-group">
          <label htmlFor="capactiy">Guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* End of guests */}
      </form>
    </section>
  );
}

export default RoomFilter;
