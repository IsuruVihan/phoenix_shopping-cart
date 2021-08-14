import React, {FC, useState} from 'react';
import customStyles2 from "../../../assets/styles/partials/customStyles2";
import Select from "react-select";

type CategoryDropdownProps = {
  selectedCategory: (category: string) => void
};

const CategoryDropdown: FC<CategoryDropdownProps> = (props) => {
  const {selectedCategory} = props;

  const categoryList = [
    {value: 'All', label: 'All'},
    {value: 'Grocery', label: 'Grocery'},
    {value: 'Pharmacy', label: 'Pharmacy'},
    {value: 'Food', label: 'Food'},
    {value: 'Electronic', label: 'Electronic'}
  ];

  const [category, setCategory] = useState<string>(categoryList[0].value);

  const handleOnChangeCategory = (item: any) => {
    let productCategory: string;
    switch (item.value) {
      case "Grocery":
        productCategory = "Grocery";
        break;
      case "Pharmacy":
        productCategory = "Pharmacy";
        break;
      case "Food":
        productCategory = "Food";
        break;
      case "Electronic":
        productCategory = "Electronic";
        break;
      default:
        productCategory = "All";
    }
    setCategory(productCategory);
    selectedCategory(category);
  }

  return (
    <Select
      defaultValue={categoryList[0]}
      isSearchable={true}
      name="category"
      styles={customStyles2}
      options={categoryList}
      onChange={handleOnChangeCategory}
    />
  );
}

export default CategoryDropdown;