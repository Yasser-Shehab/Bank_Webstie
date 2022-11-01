import React from "react";

const FeatureCard = ({ icon, title, content }) => {
  return (
    <div>
      <div>
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default FeatureCard;
