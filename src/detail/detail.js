import { findAllByTestId } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import "./detail.css";

function DetailPage(props) {
  let { id } = useParams();
  let productId = props.product.find((x) => {
    return x.id == id;
  });
  let [빠른구매, 셋빠른구매] = useState(true);
  let [toolBox, setToolBox] = useState(0);
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout();
      setFade("");
    };
  }, []);
  let [num, setNum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자를 입력해주세요.");
    }
  }, [num]);

  return (
    <div className={`start + ${fade}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="images/shoes1.webp" width="500px" />
          </div>

          <div className="col-md-6">
            <h4 className="pt-5">{productId.title}</h4>
            <p>{productId.price}</p>
            <p>{productId.content}</p>
            <button className="btn btn-danger">주문하기</button>
            {/* <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          /> */}
          </div>
        </div>
        <Nav className="justify-content-center" activeKey="link-1">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setToolBox((toolBox = 1));
              }}
              eventKey="link-1"
            >
              상세 설명
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setToolBox((toolBox = 2));
              }}
              eventKey="link-2"
            >
              Qna
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setToolBox((toolBox = 3));
              }}
              eventKey="link-2"
            >
              리뷰
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tool toolBox={toolBox} />
      </div>
    </div>
  );
}
// props.  붙히기 싫을 때 {} 에 스테이트 이름 바로 넣으면 props 안붙히고 사용 가능
function Tool({ toolBox }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout();
      setFade("");
    };
  }, [toolBox]);

  if (toolBox == 1) {
    return <h4 className={`start + ${fade}`}> 상세 페이지 입니다.</h4>;
  }
  if (toolBox == 2) {
    return <h4 className={`start + ${fade}`}> QnA 페이지 입니다.</h4>;
  }
  if (toolBox == 3) {
    return <h4 className={`start + ${fade}`}> 리뷰 페이지 입니다.</h4>;
  }
}

export default DetailPage;
