import React from "react";

const TrendsKeyword = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      country: "Trend in Inda",
      keyword: "TII",
      totalKeywords: "90m",
    },
    {
      id: 2,
      country: "Trend in Inda",
      keyword: "Chandrayaan-3",
      totalKeywords: "80600k",
    },
    {
      id: 3,
      country: "Trend in Inda",
      keyword: "Historical Moment",
      totalKeywords: "2406m",
    },
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h4>Trends for you</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword__name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsKeyword;
