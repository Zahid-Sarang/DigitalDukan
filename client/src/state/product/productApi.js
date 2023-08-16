import { products } from "../../constent/data";

// api call for all products
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    resolve({ data });
  });
}

// Api call for sorting and filtering and pagination
export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category":"smartphone"}
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}}&`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8000/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

// api call for category
export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/category");
    const data = await response.json();
    resolve({ data });
  });
}

// api call for colors
export function fetchColor() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/color");
    const data = await response.json();
    resolve({ data });
  });
}

// api call for size
export function fetchSize() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/size");
    const data = await response.json();
    resolve({ data });
  });
}


// Api call for selected product details

export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8000/products/'+id) 
    const data = await response.json()
    
    resolve({data})
  }
  );
}