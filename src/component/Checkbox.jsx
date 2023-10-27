import React, { useState } from "react";
import { Checkbox, Col, Row } from "antd";

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const Check = () => {
  const [boxOne, setBoxOne] = useState(false);
  const [boxTwo, setBoxTwo] = useState(false);
  const [boxThree, setBoxThree] = useState(false);

  const handleButton = () => {
    setBoxOne(true);
  };
  const handleSubmit = () => {
    setBoxTwo(true);
  };
  const handleToggle = () => {
    setBoxThree(true);
  };
  return (
    <Checkbox.Group
      style={{
        width: "100%",
      }}
      onChange={onChange}
    >
      <Row className="checkbox">
      <Col span={4}>
          <Checkbox className="Check" value="A">
            Task done
          </Checkbox>
        </Col>
        <button className="button-checkbox">x</button>
        <Col span={4}>
          <Checkbox className="Check" value="B">
            Task done
          </Checkbox>
        </Col>
        <button className="button-checkbox">x</button>
        <Col span={4}>
          <Checkbox className="Check" value="C">
            Task done
          </Checkbox>
        </Col>
        <button className="button-checkbox">x</button>
      </Row>
    </Checkbox.Group>
  );
};

export default Check;
