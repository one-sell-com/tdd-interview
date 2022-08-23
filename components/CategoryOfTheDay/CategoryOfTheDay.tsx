import * as React from 'react';

const dataUrl = "https://raw.githubusercontent.com/one-sell-com/tdd-interview-server/main/categories.db?category=";

interface CategoryData {
  category: { name: string; seo: { metaTitle: string } };
}

export const CategoryOfTheDay: React.FC<{ url: string }> = ({ url }) => {
  const categoryUrl = `${dataUrl}${url}`;
  const [categoryData, setCategoryData] = React.useState<null | CategoryData>(
    null
  );
  React.useEffect(() => {
    fetch(categoryUrl)
      .then((res) => res.json())
      .then((data: any) => {
        if (categoryData !== data) {
          setCategoryData(data);
          console.log("CATEGORY DATA UPDATED");
        }
      });
  }, [categoryUrl, categoryData]);

  return (
    <div className="border-2 border-pink-400 rounded-lg p-4">
      Category of the day is:{" "}
      <span>
        {categoryData
          ? `${categoryData.category.name} : ${categoryData.category.seo.metaTitle}`
          : "Loading"}
      </span>
    </div>
  );
};
