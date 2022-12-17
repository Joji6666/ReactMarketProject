import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./store";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <h4>{state.user} 의 장바구니</h4>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>

        {state.cartProducts.map((a, i) => {
          return (
            <tbody>
              <tr>
                <td>{state.cartProducts[i].id}</td>
                <td>{state.cartProducts[i].name}</td>
                <td>{state.cartProducts[i].count}</td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default Cart;
