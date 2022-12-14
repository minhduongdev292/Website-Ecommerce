import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductReview,
  listProductDetails,
} from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/ProductConstants";
import moment from "moment";

const SingleProduct = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successCreateReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };
  return (
    <>
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
                <div className="col-md-6">
                    <div className="single-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div class="single-commit">
                    <h5>SugarStore cam k???t v??? s???n ph???m, gi?? c???, ch???t l?????ng:</h5>
                        <li>
                            Cam k???t mang ?????n cho qu?? kh??ch h??ng nh???ng s???n ph???m ch??nh h??ng ch???t l?????ng nh???t.
                        </li>
                        <li>
                            Cam k???t gi?? c??? ph?? h???p v???i th??? tr?????ng, nhu c???u s??? d???ng c???a kh??ch h??ng.
                        </li>
                        <li>
                            Ch??? t??n lu??n ???????c ?????t l??n h??ng ?????u, lu??n ?????ng v??? ph??a kh??ch h??ng ????? th???u hi???u.
                        </li>
                        <li>
                            Ch??ng t??i lu??n s???n s??ng h??? tr??? kh??ch h??ng 24/7.
                        </li>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-dtl">
                    <div className="product-info">
                        <div className="product-name">{product.name}</div>
                    </div>
                    <p>{product.description}</p>
                    <div class="single-commit">
                      <h5>B???n s??? nh???n ???????c:</h5>
                      <li>Th??? th??nh vi??n Sugar Store.</li>
                      <li>G??i v??? sinh laptop mi???n ph?? 3 l???n.</li>
                      <li>Chu???t logitech G304 phi??n b???n limited.</li>
                      <li>M?? gi???m gi?? 200k khi mua m??n h??nh t??? 23inch tr??? l??n.</li>
                      <li>Gi???m 10% khi mua k??m combo Gaming Gear cho sinh vi??n.</li>
                    </div>

                    <div className="product-count col-lg-10">
                        <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Gi?? b??n</h6>
                            <span>${product.price}</span>
                        </div>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Th??? lo???i</h6>
                            <span>{product.category}</span>
                        </div>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Tr???ng th??i</h6>
                            {product.countInStock > 0 ? (
                                <span>Trong kho</span>
                            ) : (
                                <span>kh??ng c?? s???n</span>
                            )}
                        </div>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>????nh gi??</h6>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} ????nh gi??`}
                            />
                        </div>
                        {product.countInStock > 0 ? (
                        <>
                            <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>S??? l?????ng</h6>
                            <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            >
                                {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                    <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                    </option>
                                )
                                )}
                            </select>
                            </div>
                            <button
                            onClick={AddToCartHandle}
                            className="round-black-btn"
                            >
                            Th??m v??o gi??? h??ng
                            </button>
                        </>
                        ) : null}
                      </div>
                    </div>
                       <div className="product-policy">
                            <div className="col-md-6">
                                <h5>Ch??nh s??ch b??n h??ng</h5>
                                    <li>Mi???n ph?? giao h??ng cho ????n h??ng t??? 2000k</li>
                                    <li>Cam k???t ch??nh h??ng 100%</li>
                                    <li>?????i tr??? trong v??ng 10 ng??y</li>
                                <h5>D???ch v??? kh??c</h5>
                                    <li>S???a ch???a ?????ng gi?? 200k.</li>
                                    <li>Ki???m tra v?? v??? sinh laptop.</li>
                                    <li>B???o h??nh t???i nh??.</li>
                            </div>
                       </div>
                </div>
            </div>

            {/* RATING */}
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">????nh gi??</h6>
                {product.reviews.length === 0 && (
                  <Message variant={"alert-info mt-3"}>Kh??ng c?? b??i ????nh gi?? n??o</Message>
                )}
                {product.reviews.map((review) => (
                  <div
                    key={review._id}
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <span>{moment(review.createdAt).calendar()}</span>
                    <div className="alert alert-info mt-3">
                      {review.comment}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h6>Vi???t b??i ????nh gi?? c???a kh??ch h??ng</h6>
                <div className="my-4">
                  {loadingCreateReview && <Loading />}
                  {errorCreateReview && (
                    <Message variant="alert-danger">
                      {errorCreateReview}
                    </Message>
                  )}
                </div>
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <div className="my-4">
                      <strong>X???p h???ng</strong>
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      >
                        <option value="">L???a ch???n...</option>
                        <option value="1">1 - K??m</option>
                        <option value="2">2 - B??nh th?????ng</option>
                        <option value="3">3 - T???t</option>
                        <option value="4">4 - R???t t???t</option>
                        <option value="5">5 - Xu???t s???c</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>B??nh lu???n</strong>
                      <textarea
                        row="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button
                        disabled={loadingCreateReview}
                        className="col-12 bg-black border-0 p-3 rounded text-white"
                      >
                        G???I ??I
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="my-3">
                    <Message variant={"alert-warning"}>
                      Vui l??ng{" "}
                      <Link to="/login">
                        " <strong>????ng nh???p</strong> "
                      </Link>{" "}
                      ????? vi???t ????nh gi??{" "}
                    </Message>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
