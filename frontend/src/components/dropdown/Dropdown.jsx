import React from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import './dropdown.css'
import { loanCategories } from "../../utils/DropDown";

const DropdownComponent = () => {
    const navigate = useNavigate()
  const generateSubcategoryItems = (category) => {
  
    return category.subcategories.map((subcategory, index) => ({
      label: (
        <p onClick={() => navigate(`/category/${subcategory}`)}>
          {subcategory}
        </p>
      ),
      key: `${category.category}-${index}`,
    }));
  };
  
  

  return (
    <div className="maindiv">
      {loanCategories.map((category) => (
        <Dropdown
        className="dropdown"
          key={category.category}
          menu={{
            items: generateSubcategoryItems(category),
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {category.category}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      ))}
    </div>
  );
};

export default DropdownComponent;
