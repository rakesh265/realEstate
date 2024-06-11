import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [listingType, setListingType] = useState("sales");
  const [area, setArea] = useState("");
  const [minPrice, setMinPrice] = useState(1000000); 
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [bedrooms, setBedrooms] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (minPrice >= maxPrice) {
      alert("Max price should be greater than Min price.");
      return;
    }
    const searchParams = {
      listingType,
      area,
      minPrice,
      maxPrice,
      bedrooms,
    };
    console.log("Search parameters:", searchParams);
    
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="form-group">
        <label htmlFor="listing-type">Listing Type</label>
        <select
          id="listing-type"
          name="listing-type"
          value={listingType}
          onChange={(e) => setListingType(e.target.value)}
        >
          <option value="sales">Sales</option>
          <option value="rent">Rent</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="area">Areas</label>
        <div className="input-group">
          <input
            type="text"
            id="area"
            name="area"
            placeholder="Which area?"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price Range</label>
        <div className="price-inputs">
        <select
          
        >
        <option value="" > select range</option>
          <option value="">10l - 1cr</option>
          <option value="">1cr - 5cr</option>
          <option value="">above 5cr</option>
        </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="bedrooms">Bedrooms</label>
        <select
          id="bedrooms"
          name="bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <option value="">BHK</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="form-group">
        <button type="submit" className="search-btn">
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default Search;
