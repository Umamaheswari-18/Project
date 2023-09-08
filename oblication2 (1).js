import React, { useState, useRef, useEffect } from "react";
import "./oblicationstyle.css";

export const Oblication2 = (props) => {
  const [data, setData] = useState(false);
  const [Filterstate, setFilterstate] = useState(props.listname);
  const [isEdit, setIsedit] = useState(null);
  const [isEditdate, setIseditDate] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editDateIndex, setEditDateIndex] = useState(null);

  const handleclick = () => {
    setData(!data);
  };

  console.log(Filterstate, "f");

  // Delete
  const handleDelete = (index) => {
    const Newfilter = Filterstate.filter((_, i) => {
      return i !== index;
    });
    setFilterstate(Newfilter);
  };

  //Edit
  const handleEdit = (index) => {
    setEditIndex(index);
    setIsedit(!isEdit);
  };

  const handleDate = (index) => {
    setEditDateIndex(index);
    setIseditDate(!isEdit);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // setUpdatevalue(true);
          setIsedit(false);
          setIseditDate(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleInputChange = (e, index) => {
    const newarray = Filterstate.map((item, i) => {
      console.log(e.target.value, e.target.name, index, i, index === i, "kk");
      if (index === i) {
        return { ...item, Status: e.target.value };
      } else {
        return item;
      }
    });
    console.log(newarray, "newarray");
    setFilterstate(newarray);
    //     const [value] = e.target;
    //     setFilterstate(prev => {
    //    const updatedArray = [...prev];
    //    updatedArray[index] = { ...updatedArray[index], Status: value };
    //    return updatedArray
    //     }
    // ? {
    //     ...el,
    //     [e.taget.name] :e.taget.value,
    // } : el,
    // )
  };

  const handleDatechange = (e, index) => {
    console.log(e.target.value,"kkkkkkk");
    const newarray = Filterstate.map((item, i) => {
      //3
      console.log(e.target.value, e.target.name, index, i, index === i, "kk");
      if (index === i) {
        return { ...item, date: e.target.value };
      } else {
        return item;
      }
    });
    setFilterstate(newarray);
  };

  const handleAdd = () => {
    const randomstatus = [
      "yellow",
      "blue",
      "red",
      "orange",
      "black",
      "reed",
      "sun",
      "Moon",
      "star",
      "suriya",
    ];

    const random = Math.floor(Math.random() * randomstatus.length);
    const name = randomstatus.reverse();
    const finalrandam = Math.floor(Math.random() * name.length);

    const randomdate = [
      "1-1-1",
      "2-22-2",
      "3-33-3",
      "4-4-4",
      "5-5-5",
      "6-6-6",
      "7-7-7",
      "8-8-8",
      "9-9-9",
      "10-1-2",
      "11-1-2",
      "23-22-3",
    ];
    const randomd = Math.floor(Math.random() * randomdate.length);

    const temp = {
      statuslogo: "check",
      Status: randomstatus[random],
      name: name[finalrandam],
      date: randomdate[randomd],
      link: "",
      delete: "",
    };

    setFilterstate((prev) => [...prev, temp]);

    console.log(Filterstate, "Filterstate");
  };

  return (
    <div className="App-Main" ref={wrapperRef}>
      <div className="App-Heading">
        <div className="flex-row">
          <div className="col-6 d-flex align-item-center">
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2344_29154)">
                <path
                  d="M15.5619 2.78572C15.3291 2.54077 15.0074 2.39844 14.6695 2.39844H5.5998C4.27432 2.39844 3.19981 3.47295 3.1998 4.79842L3.19971 19.1984C3.1997 20.5239 4.27421 21.5984 5.5997 21.5984L16.3997 21.5984C17.7252 21.5984 18.7997 20.524 18.7998 19.1985L18.8001 6.47627C18.8001 6.16943 18.683 5.87447 18.4701 5.65357C18.0763 5.24508 17.4187 4.57295 17.0001 4.19844C16.466 3.72058 15.9118 3.15382 15.5619 2.78572Z"
                  fill="white"
                />
                <path
                  d="M15.5619 2.78572C15.3291 2.54077 15.0074 2.39844 14.6695 2.39844H5.5998C4.27432 2.39844 3.19981 3.47295 3.1998 4.79842L3.19971 19.1984C3.1997 20.5239 4.27421 21.5984 5.5997 21.5984L16.3997 21.5984C17.7252 21.5984 18.7997 20.524 18.7998 19.1985L18.8001 6.47627C18.8001 6.16943 18.683 5.87447 18.4701 5.65357C18.0763 5.24508 17.4187 4.57295 17.0001 4.19844C16.466 3.72058 15.9118 3.15382 15.5619 2.78572Z"
                  stroke="#3A8DE6"
                  stroke-width="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.54883 8.69691L8.48898 15.2969H10.0594L10.9997 12.0312L11.94 15.2969H13.5104L15.4506 8.69691H13.6254L12.7259 11.985L11.8259 8.69531L10.1728 8.70684L9.27384 11.9861L8.37402 8.69691H6.54883Z"
                fill="#3A8DE6"
              />
              <defs>
                <filter
                  id="filter0_d_2344_29154"
                  x="0.799805"
                  y="0"
                  width="20.4004"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" itemult="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    itemult="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    itemult="effect1_dropShadow_2344_29154"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2344_29154"
                    itemult="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p className="p_heading w-700">
              Contract for Admin, Reviewer and Approver, specialist
              <span className="p">3</span>
            </p>
          </div>
          <div className="col-6 item_1">
            <div className="col-6 d-flex">
              <div className="col-3 d-flex align-item-center gap"></div>
              <div className="col-3 d-flex align-item-center gap"></div>
              <div className="col-6 d-flex align-item-center gap"></div>
            </div>
            <div className="col-6 d-flex ">
              <div className="col-6 d-flex align-item-center justify-content-end gap"></div>
              <div
                className="col-6 d-flex align-item-center justify-content-center "
                onClick={handleclick}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5999 10.9979H10.9999M10.9999 10.9979H7.3999M10.9999 10.9979V14.5979M10.9999 10.9979L10.9999 7.39785M20.5999 10.9984C20.5999 16.3004 16.3018 20.5984 10.9999 20.5984C5.69797 20.5984 1.3999 16.3004 1.3999 10.9984C1.3999 5.6965 5.69797 1.39844 10.9999 1.39844C16.3018 1.39844 20.5999 5.6965 20.5999 10.9984Z"
                    stroke="#646B72"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="App_Statusbar">
          <p className="status  w-500">
            Pending <span className="p_span">1</span>
          </p>
          <p className="status w-500">
            Overdue <span className="p_span">2</span>
          </p>
          <p className="status  w-500">
            Completed <span className="p_span">3</span>
          </p>
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button
            className="btn-primary"
            onClick={(e) => {
              handleAdd();
            }}
          >
            Add New
          </button>
        </div>
        {data ? (
          <>
            {Filterstate?.map((item, index) => (
              <>
                {console.log(item, "item")}
                <div className="flex_container">
                  <div className="flex-row">
                    <div className="col-6 item">
                      <div className="col-1 logo d-flex align-item-center">
                        {item.statuslogo === "Updated" ? (
                          <>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.9999 19.5984C15.3018 19.5984 19.5999 15.3004 19.5999 9.99844C19.5999 4.6965 15.3018 0.398438 9.9999 0.398438C4.69797 0.398438 0.399902 4.6965 0.399902 9.99844C0.399902 15.3004 4.69797 19.5984 9.9999 19.5984ZM10.5999 5.345C10.5999 4.79272 10.1522 4.345 9.5999 4.345C9.04762 4.345 8.5999 4.79272 8.5999 5.345V10.4919C8.5999 10.7571 8.70526 11.0114 8.8928 11.199L12.2528 14.559C12.6433 14.9495 13.2765 14.9495 13.667 14.559C14.0575 14.1685 14.0575 13.5353 13.667 13.1448L10.5999 10.0777V5.345Z"
                                fill="#ADB5BD"
                              />
                            </svg>
                          </>
                        ) : item.statuslogo === "Pending" ? (
                          <>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              role="pitementation"
                              focusable="false"
                              {...props}
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.9999 19.5999C15.3018 19.5999 19.5999 15.3018 19.5999 9.9999C19.5999 4.69797 15.3018 0.399902 9.9999 0.399902C4.69797 0.399902 0.399902 4.69797 0.399902 9.9999C0.399902 15.3018 4.69797 19.5999 9.9999 19.5999ZM10.9999 5.19989C10.9999 4.64761 10.5522 4.19989 9.99988 4.19989C9.44759 4.19989 8.99988 4.64761 8.99988 5.19989V9.99989C8.99988 10.5522 9.44759 10.9999 9.99988 10.9999C10.5522 10.9999 10.9999 10.5522 10.9999 9.99989V5.19989ZM10.9999 13.5577C10.9999 13.0054 10.5522 12.5577 9.99988 12.5577C9.44759 12.5577 8.99988 13.0054 8.99988 13.5577V13.5999C8.99988 14.1522 9.44759 14.5999 9.99988 14.5999C10.5522 14.5999 10.9999 14.1522 10.9999 13.5999V13.5577Z"
                                fill="#F25022"
                              />
                            </svg>
                          </>
                        ) : item.statuslogo === "Done" ? (
                          <>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.9999 0.398438C4.69797 0.398438 0.399902 4.6965 0.399902 9.99844C0.399902 15.3004 4.69797 19.5984 9.9999 19.5984C15.3018 19.5984 19.5999 15.3004 19.5999 9.99844C19.5999 4.6965 15.3018 0.398438 9.9999 0.398438ZM13.8489 8.68861C14.2395 8.29809 14.2395 7.66493 13.8489 7.2744C13.4584 6.88388 12.8253 6.88388 12.4347 7.2744L8.87484 10.8343L8.12744 10.0869C7.73692 9.69638 7.10375 9.69638 6.71323 10.0869C6.3227 10.4774 6.3227 11.1106 6.71323 11.5011L8.16773 12.9556C8.55826 13.3461 9.19142 13.3461 9.58195 12.9556L13.8489 8.68861Z"
                                fill="#00984F"
                              />
                            </svg>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      {editIndex === index && isEdit ? (
                        <div className="col-6 p_span w-500" key={index}>
                          <input
                            type="text"
                            name={item.name}
                            value={item.Status}
                            onChange={(e) =>
                              handleInputChange(e, index, "Status")
                            }
                          ></input>
                        </div>
                      ) : (
                        <p className="col-6 p_span w-500">{item.Status}</p>
                      )}

                      <div className="col-5"></div>
                    </div>

                    {console.log(item.Status, "s")}

                    <div className="col-6 item_1">
                      <div className="col-6 d-flex">
                        <div className="col-3 d-flex align-item-center gap">
                          {item.additionalsetting && (
                            <>
                              <svg
                                width="14"
                                height="16"
                                viewBox="0 0 14 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.0064 5.60492C12.1128 5.60492 13.0097 4.70804 13.0097 3.60168C13.0097 2.49532 12.1128 1.59844 11.0064 1.59844C9.90008 1.59844 9.00319 2.49532 9.00319 3.60168C9.00319 4.70804 9.90008 5.60492 11.0064 5.60492ZM11.0064 5.60492L11.0064 8.36526C11.0064 10.5744 9.21557 12.3653 7.00643 12.3653L4.99773 12.3653M2.99347 10.392C4.09983 10.392 4.99672 11.2888 4.99672 12.3952C4.99672 13.5016 4.09983 14.3984 2.99347 14.3984C1.88712 14.3984 0.990234 13.5016 0.990234 12.3952C0.990234 11.2888 1.88712 10.392 2.99347 10.392Z"
                                  stroke="#8E99A4"
                                  stroke-width="1.6"
                                  stroke-linecap="round"
                                />
                              </svg>
                              <p>2</p>
                            </>
                          )}
                        </div>
                        <div className="col-3 d-flex align-item-center gap">
                          {item.link && (
                            <>
                              <svg
                                width="14"
                                height="16"
                                viewBox="0 0 14 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.1015 7.26598L7.09108 13.2764C5.72425 14.6432 3.50817 14.6432 2.14134 13.2764C0.774502 11.9095 0.774502 9.69347 2.14134 8.32664L8.15174 2.31623C9.06297 1.40501 10.5404 1.40501 11.4516 2.31623C12.3628 3.22745 12.3628 4.70484 11.4516 5.61606L5.67687 11.3908C5.22126 11.8464 4.48257 11.8464 4.02695 11.3908C3.57134 10.9352 3.57134 10.1965 4.02695 9.74085L9.09455 4.67325"
                                  stroke="#8E99A4"
                                  stroke-width="1.6"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>

                              <p>2</p>
                            </>
                          )}
                        </div>
                        <div className="col-6 d-flex align-item-center gap">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.9999 19.5984C15.3018 19.5984 19.5999 15.3004 19.5999 9.99844C19.5999 4.6965 15.3018 0.398438 9.9999 0.398438C4.69797 0.398438 0.399902 4.6965 0.399902 9.99844C0.399902 15.3004 4.69797 19.5984 9.9999 19.5984ZM10.5999 5.345C10.5999 4.79272 10.1522 4.345 9.5999 4.345C9.04762 4.345 8.5999 4.79272 8.5999 5.345V10.4919C8.5999 10.7571 8.70526 11.0114 8.8928 11.199L12.2528 14.559C12.6433 14.9495 13.2765 14.9495 13.667 14.559C14.0575 14.1685 14.0575 13.5353 13.667 13.1448L10.5999 10.0777V5.345Z"
                              fill="#ADB5BD"
                            />
                          </svg>
                          <p className="col-10 d w-500 ">{item.name}</p>
                        </div>
                      </div>
                      <div className="col-6 d-flex ">
                        <div
                          className="col-6 d-flex align-item-center justify-content-end gap"
                          onClick={() => handleDate(index)}
                        >
                          <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.0835 5.64844H12.5835M3.44064 1.33594V2.46108M11.0835 1.33594V2.46094M11.0835 2.46094H3.5835C2.34086 2.46094 1.3335 3.4683 1.3335 4.71094V12.211C1.3335 13.4536 2.34086 14.461 3.5835 14.461H11.0835C12.3261 14.461 13.3335 13.4536 13.3335 12.211L13.3335 4.71094C13.3335 3.4683 12.3261 2.46094 11.0835 2.46094ZM9.2085 9.77347H5.4585"
                              stroke="#646B72"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <p className="p_span">
                            {index === editDateIndex && isEditdate ? (
                              <input
                                type="date"
                                value={item.date}
                                onChange={(e) => handleDatechange(e, index)}
                              ></input>
                            ) : (
                              item.date
                            )}
                          </p>
                        </div>
                        <div className="col-6 d-flex align-item-center justify-content-center gap_10 ">
                          <svg
                            onClick={() => handleEdit(index)}
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.7307 16.5H16.5M1.5 16.5L5.69808 15.6263C5.92094 15.5799 6.12557 15.4666 6.28628 15.3005L15.6841 5.58825C16.1347 5.1226 16.1344 4.3678 15.6834 3.90254L13.6926 1.84859C13.2418 1.38353 12.5114 1.38384 12.0611 1.8493L2.66228 11.5625C2.50188 11.7283 2.39236 11.9392 2.34741 12.1689L1.5 16.5Z"
                              stroke="#ADB5BD"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <svg
                            onClick={(e) => handleDelete(index)}
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="gap"
                          >
                            <path
                              d="M1.45117 4.20588H15.8825M5.96098 1.5H11.3727M11.8237 16.8333H5.51C4.51372 16.8333 3.70607 16.0257 3.70607 15.0294L3.29424 5.14539C3.27289 4.63297 3.68255 4.20588 4.19542 4.20588H13.1383C13.6512 4.20588 14.0608 4.63297 14.0395 5.14539L13.6276 15.0294C13.6276 16.0257 12.82 16.8333 11.8237 16.8333Z"
                              stroke="#ADB5BD"
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
