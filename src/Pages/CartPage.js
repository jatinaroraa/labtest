import React, { useState } from "react";
import { useCart } from "../context/CartProvider";
import { Link } from "react-router-dom";
import { Table, Button, Row, Col, Typography } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CheckoutModal from "../components/modal/CheckoutModal";

const { Title } = Typography;

const CartContainer = styled.div`
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 5px;
  }
`;

const EnquiryButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  font-size: 16px;
  height: 45px;
`;

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const columns = [
    {
      title: "Tests",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {/* <img
            src={record.image}
            alt={text}
            style={{ width: "60px", height: "60px", borderRadius: "5px" }}
          /> */}
          <span>{text}</span>
        </div>
      ),
    },
    // {
    //   title: "Quantity",
    //   key: "quantity",
    //   render: (record) => (
    //     <QuantityControl>
    //       <Button
    //         size="small"
    //         icon={<MinusOutlined />}
    //         onClick={() => updateQuantity(record.name, record.quantity - 1)}
    //         disabled={record.quantity <= 1}
    //       />
    //       <span>{record.quantity}</span>
    //       <Button
    //         size="small"
    //         icon={<PlusOutlined />}
    //         onClick={() => updateQuantity(record.name, record.quantity + 1)}
    //       />
    //     </QuantityControl>
    //   ),
    // },
    {
      title: "",
      key: "remove",
      render: (record) => (
        <Button
          type="link"
          danger
          icon={<DeleteOutlined />}
          onClick={() => removeFromCart(record.name)}
        />
      ),
    },
  ];

  return (
    <CartContainer>
      <Title level={2}>Your Cart ({cart.length} items)</Title>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <Table
            columns={columns}
            dataSource={cart.map((item) => ({
              ...item,
              key: item.name,
              quantity: item.quantity || 1,
            }))}
            pagination={false}
          />
          <Row justify="center">
            <Col xs={24} md={12}>
              <EnquiryButton
                onClick={() => setIsModalVisible(true)}
                type="primary"
              >
                Enquiry Now
              </EnquiryButton>
            </Col>
          </Row>
        </>
      )}

      <Link to="/">
        <Button type="link" style={{ marginTop: "20px" }}>
          ← Back to Tests
        </Button>
      </Link>
      <CheckoutModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </CartContainer>
  );
};

export default CartPage;
