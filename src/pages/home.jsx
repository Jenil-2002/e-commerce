import { useContext } from "react";
import ProductCard from "../components/productCard";
import GlobalContext from "../context/context";
import { Link } from "react-router-dom";

export default function Home() {
  const { productList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...please wait!</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="p-2">
            <div className="flex-shrink-0 p-3">
              <Link
                to="/"
                className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
              >
                <svg className="bi pe-none me-2" width="30" height="24">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
                <span className="fs-5 fw-semibold">Categories</span>
              </Link>
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="false"
                  >
                    Home
                  </button>
                  <div className="collapse" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link
                          to="#"
                          className="sub-menu link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="sub-menu link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Updates
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="sub-menu link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Reports
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse"
                    aria-expanded="false"
                  >
                    Dashboard
                  </button>
                  <div className="collapse" id="dashboard-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Annually
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#orders-collapse"
                    aria-expanded="false"
                  >
                    Orders
                  </button>
                  <div className="collapse" id="orders-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          New
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Processed
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Shipped
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Returned
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="border-top my-3"></li>
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#account-collapse"
                    aria-expanded="false"
                  >
                    Account
                  </button>
                  <div className="collapse" id="account-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          New...
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-10 product-row justify-center">
          {/* <div className="row"> */}
          {productList && productList.length > 0 ? (
            productList.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))
          ) : (
            <p className="no-products">
              Nothing to show. Please search something
            </p>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
