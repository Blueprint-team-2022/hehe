/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from "react";
import {Link} from "react-router-dom";
import "../css/MainPage.css";
function MainPage() {
  return (
    <div className="fake-body">
      <div className="row">
        <div className="text col-md-6 col-sm-12">
          <h1 className="h1-main">Time for you to relax</h1>
          <p className="p-main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
        <div className="col-1" />
        <div
          className="right col-md-5 col-sm-12"
          style={{ maxWidth: "80% !important" }}
        >
          <div className="row">
            <div
              className="col-6"
              style={{
                backgroundColor: "#99B898",
                width: "100%",
                height: "40vh",
                borderRadius: "100px 0 0 0",
              }}
            >
              <h3 className="h3-inside">
                <a className="a-h3-inside" href="/music">
                  Music
                </a>
              </h3>
              <img
                src="undraw_music_re_a2jk.svg"
                alt=""
                style={{ maxHeight: "80%", maxWidth: "80%", marginLeft: 30 }}
              />
            </div>
            <div
              className="col-6"
              style={{
                backgroundColor: "#FECEA8",
                width: "100%",
                height: "40vh",
                borderRadius: "0 100px 0 0",
              }}
            >
              <h3 className="h3-inside">
                <a className="a-h3-inside" href="/meditation">
                  Meditation
                </a>
              </h3>
              <img
                src="undraw_meditation_re_gll0.svg"
                alt=""
                style={{ marginLeft: 30, maxHeight: "80%", maxWidth: "80%" }}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-6"
              style={{
                backgroundColor: "#603601",
                width: "100%",
                height: "40vh",
                borderRadius: "0 0 0 100px",
              }}
            >
              <h3 className="h3-inside">
                <a className="a-h3-inside" href="/scenery">
                  Scenery
                </a>
              </h3>
              <img
                src="undraw_landscape_mode_re_r964.svg"
                alt=""
                style={{
                  marginTop: 30,
                  marginLeft: 30,
                  maxHeight: "80%",
                  maxWidth: "80%",
                }}
              />
            </div>
            <div
              className="col-6"
              style={{
                backgroundColor: "#CC9544",
                width: "100%",
                height: "40vh",
                borderRadius: "0 0 100px 0",
              }}
            >
              <h3 className="h3-inside">
                <a className="a-h3-inside" href="/diary">
                  Diary
                </a>
              </h3>
              <img
                src="undraw_diary_re_4jpc.svg"
                alt=""
                style={{
                  marginTop: 30,
                  marginLeft: "25%",
                  maxHeight: "50%",
                  maxWidth: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
