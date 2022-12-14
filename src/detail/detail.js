function DetailPage(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={props.product[0].img} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.product[0].title}</h4>
          <p>{props.product[0].price}</p>
          <p>{props.product[0].content}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
