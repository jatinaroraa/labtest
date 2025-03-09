// import React, { useState } from "react";
// import { Card, Button, Row, Col } from "antd";
// import styled from "styled-components";
// import { useCart } from "../../context/CartProvider";

// const tests = [
//   { name: "Complete Blood Count (CBC)", image: "path_to_cbc_image" },
//   { name: "Prothrombin Time (PT)", image: "path_to_pt_image" },
//   {
//     name: "Activated Partial Thromboplastin Time (APTT)",
//     image: "path_to_aptt_image",
//   },
//   { name: "D-Dimer Test", image: "path_to_ddimer_image" },
//   { name: "Erythrocyte Sedimentation Rate (ESR)", image: "path_to_esr_image" },
//   { name: "Hemoglobin Test", image: "path_to_hb_image" },
// ];

// const StyledCard = styled(Card)`
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   transition: transform 0.3s;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   .ant-card-body {
//     padding: 16px;
//   }

//   img {
//     width: 100%;
//     height: 150px;
//     object-fit: cover;
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
//   }

//   h3 {
//     font-weight: bold;
//     margin-top: 10px;
//   }

//   .add-to-cart {
//     margin-top: 10px;
//     width: 100%;
//   }
// `;

// const HematologyTestsPage = () => {
//   const { cart, addToCart } = useCart();

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Hematology Tests</h2>
//       <Row gutter={[16, 16]}>
//         {tests.map((test, index) => (
//           <Col xs={24} sm={12} md={8} key={index}>
//             <StyledCard>
//               <img src={test.image} alt={test.name} />
//               <h3>{test.name}</h3>
//               <Button
//                 type="primary"
//                 className="add-to-cart"
//                 onClick={() => addToCart(test)}
//               >
//                 Add to Cart
//               </Button>
//             </StyledCard>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default HematologyTestsPage;

import React from "react";
import { Card, Button, Row, Col } from "antd";
import styled from "styled-components";
import { useCart } from "../../context/CartProvider";

const tests = [
  {
    name: "Complete Blood Count (CBC)",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain1.webp",
  },
  {
    name: "Prothrombin Time (PT)",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain1.webp",
  },
  {
    name: "Activated Partial Thromboplastin Time (APTT)",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain1.webp",
  },
  {
    name: "D-Dimer Test",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain1.webp",
  },
  {
    name: "Erythrocyte Sedimentation Rate (ESR)",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain1.webp",
  },
  {
    name: "Hemoglobin Test",
    image: "https://www.drdangslab.com/PhotosAndLogos/ServiceMain1.webp",
  },
];

const StyledCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  .ant-card-body {
    padding: 16px;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  h3 {
    font-weight: bold;
    margin-top: 10px;
  }

  .cart-button {
    margin-top: 10px;
    width: 100%;
  }
`;

const HematologyTestsPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hematology Tests</h2>
      <Row gutter={[16, 16]}>
        {tests.map((test, index) => {
          const isInCart = cart.some((item) => item.name === test.name);

          return (
            <Col xs={24} sm={12} md={8} key={index}>
              <StyledCard>
                <img src={test.image} alt={test.name} />
                <h3>{test.name}</h3>
                {isInCart ? (
                  <Button
                    type="default"
                    danger
                    className="cart-button"
                    onClick={() => removeFromCart(test.name)}
                  >
                    Remove
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    className="cart-button"
                    onClick={() => addToCart(test)}
                  >
                    Add to Cart
                  </Button>
                )}
              </StyledCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HematologyTestsPage;
