import React, { useState } from "react";
import { Modal, Form, Input, Button, List } from "antd";
import { useCart } from "../../context/CartProvider";

const CheckoutModal = ({ visible, onClose }) => {
  const { cart } = useCart();
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Patient Details:", values);
        console.log("Cart Items:", cart);
        onClose();
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  return (
    <Modal
      title="Patient Details & Checkout"
      visible={visible}
      onOk={handleOk}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Enter patient name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="mobile"
          label="Mobile"
          rules={[
            { required: true, message: "Please enter your mobile number!" },
          ]}
        >
          <Input placeholder="Enter mobile number" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: "Please enter your address!" }]}
        >
          <Input.TextArea placeholder="Enter address" />
        </Form.Item>
      </Form>
      <h3>Items in Cart:</h3>
      <List
        bordered
        dataSource={cart}
        renderItem={(item) => <List.Item>{item.name}</List.Item>}
      />
    </Modal>
  );
};

export default CheckoutModal;
