import { useContext } from "react";
import ProductCard from "../components/productCard";
import GlobalContext from "../context/context";
import { Link } from "react-router-dom";

export default function Home() {
  const { productList, loading, handleCategory } = useContext(GlobalContext);

  if (loading) return <div>Loading...please wait!</div>;

  return (
    <div className="container mt-5 body-section">
      <div className="row">
        <div className="col-2">
          <div className="fixed p-2 sidebar">
            <div className="flex-shrink-0 p-3 ">
              <Link
                to="/"
                className="d-flex align-items-center p-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
              >
                {/* <svg className="bi pe-none me-2" width="30" height="24">
                  <use xlinkHref="#bootstrap"></use>
                </svg> */}
                <span className="fs-5 fw-semibold">Categories</span>
              </Link>
              <ul className="list-unstyled text-left">
                <li>
                  <Link
                    name="electronics"
                    onClick={(event) => handleCategory(event, event.target.name)}
                    className="btn link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    electronics
                  </Link>
                </li>
                <li>
                  <Link
                    name="jewelery"
                    onClick={(event) => handleCategory(event, event.target.name)}
                    className="btn link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    jewellery
                  </Link>
                </li>
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#Clothe-collapse"
                    aria-expanded="false"
                  >
                    Clothes
                  </button>
                  <div className="collapse" id="Clothe-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link
                          name="men's clothing"
                          onClick={(event) => handleCategory(event, event.target.name)}
                          className="sub-menu link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Men
                        </Link>
                      </li>
                      <li>
                        <Link
                          name="women's clothing"
                          onClick={(event) => handleCategory(event, event.target.name)}
                          className="sub-menu link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          Women
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/*               <li className="mb-1">
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
                </li> */}
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
