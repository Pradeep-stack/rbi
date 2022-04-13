import React from "react";

const About = () => {
  // const [userData, setUserData] = useState();

  return (
    <div>
      <div class="d-sm-flex align-items-md-center flex-wrap flex-lg-nowrap py-0 ps-sm-0 card-body">
        <div class="text-start text-sm-center ps-0 ps-sm-4 mb-2 mb-sm-0 col-lg-1 col-auto">
          <div class="check-lg inbox-check me-sm-2">
            <input
              type="checkbox"
              id="task-1"
              class="form-check-input"
              value=""
            />
            <label for="task-1" class="form-check-label"></label>
          </div>
        </div>
        <div class="d-block px-0 mb-4 mb-md-0 col-lg-8 col-10">
          <div class="mb-2">
            <h5 class="line-through">
              Meeting with Ms. Bonnie from Themesberg LLC
            </h5>
            <div class="d-block d-sm-flex">
              <div>
                <h6 class="fw-normal text-gray mb-3 mb-sm-0">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>{" "}
                  10:00 AM
                </h6>
              </div>
              <div class="ms-sm-3">
                <span class="super-badge badge-lg badge bg-success">Done</span>
              </div>
            </div>
          </div>
          <div>
            <a class="fw-bold text-dark card-link" href="#/message">
              <span class="fw-normal text-gray line-through">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius
                vel, aliquet non augue.
              </span>
            </a>
          </div>
        </div>
        <div class="d-none d-lg-block d-xl-inline-flex align-items-center ms-lg-auto text-end justify-content-end px-md-0 col-xl-2 col-lg-2 col-sm-2 col-10">
          <div class="rating-star star-lg d-none d-lg-inline-block">
            <input type="checkbox" id="star-task-1" class="form-check-input" />
            <label
              for="star-task-1"
              class="rating-star-label form-check-label"
            ></label>
          </div>
          <div class="ms-3 dropdown">
            <button
              aria-haspopup="true"
              aria-expanded="false"
              data-toggle="dropdown"
              type="button"
              class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0 dropdown-toggle btn btn-link"
            >
              <span class="icon icon-sm icon-dark">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="ellipsis-h"
                  class="svg-inline--fa fa-ellipsis-h fa-w-16 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
