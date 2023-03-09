import React, { Component, useEffect } from "react";
import { FaEdit , FaTrash  } from "react-icons/fa";

//Redux:



const User = (props) => {
  const { post } = props;

  function randomcolor() {
    return Math.floor(Math.random() * 255);
  }

  return (
    <div class="card_item revealer">
      {/* <div className=""> */}

      <div class="card_inner">
        <div class="circular_image">
          {post?.pictureAddress ? (
            <img src={post?.pictureAddress} className="rounded" />
          ) : (
            <div
              class="res-circle"
              style={{
                background:
                  "rgb(" +
                  randomcolor() +
                  "," +
                  randomcolor() +
                  "," +
                  randomcolor() +
                  ")",
              }}
            >
              <div class="circle-txt">
                {post?.firstName?.substring(0, 1)}{" "}
                {post?.lastName?.substring(0, 1)}
              </div>
            </div>
          )}
        </div>

        <div class="role_name">{post.firstName}</div>

        <div className="hidden">
          <div className="button-justify">
         
            <FaEdit onClick={props.update}  className="mr-2" fill="#157DEC" size={"27px"} />

            <FaTrash onClick={props.delete} fill="red" size={"25px"} />
      
          </div>
        </div>

        <div class="film">{post?.address}</div>
      </div>
    </div>
  );
};

export default User;
