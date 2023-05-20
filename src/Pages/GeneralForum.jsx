import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import PostItemList from "../Components/PostItemList";
import "./GeneralForum.css";
import { Button } from "react-bootstrap";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import ImageCarousel from "../Components/ImageCarousel";

const GeneralForum = () => {
  const [currPageNum, setCurrPageNum] = useState(1);
  const RECORDS_PER_PAGE = 10;
  const indexOfLastRecord = currPageNum * RECORDS_PER_PAGE;
  const indexOfFirstRecord = indexOfLastRecord - RECORDS_PER_PAGE;

  let paginators = [];
  let items = [];
  // Mock data
  for (let i = 1; i <= 100; i++) {
    items.push({
      id: i,
      title: "How to be success in an interview",
      author: "Terry Wu",
      num_views: 88,
      last_update_time: "April 27, 2018 5:41 PM",
      create_time: "April 26, 2018 5:22 PM",
      up_votes: 322,
      sticky_top: false,
      tags: [
        "Google",
        "Facebook",
        "javascript",
        "onsite-final",
        "TKH Recommand",
      ],
      last_reply: "Terry Wu",
    });
  }
  items[0].sticky_top = true;

  // ^ Mock Data
  const currentRecords = items.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(items.length / RECORDS_PER_PAGE);

  for (let number = 1; number <= nPages; number++) {
    paginators.push(
      <Pagination.Item
        key={number}
        active={number === currPageNum}
        onClick={() => {
          setCurrPageNum(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <ImageCarousel />
      <Link to="/post/create">
        <Button id={"btn-create"} variant="outline-success">
          <MdOutlineLibraryAdd /> Create Post
        </Button>{" "}
      </Link>
      <PostItemList currentRecords={currentRecords} />
      <Pagination id="pagination">{paginators}</Pagination>
    </div>
  );
};

export default GeneralForum;
