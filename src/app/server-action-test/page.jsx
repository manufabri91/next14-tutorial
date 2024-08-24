import { addPost, deletePost } from "@/lib/actions";
import React from "react";

const PageForm = () => {
  return (
    <>
      <form action={addPost}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
          />
        </div>
        <div>
          <label htmlFor="slug">Slug:</label>
          <input type="text" name="slug" id="slug" placeholder="Enter slug" />
        </div>
        <div>
          <label htmlFor="userId">User Id:</label>
          <input
            type="text"
            name="userId"
            id="userId"
            placeholder="Enter userId"
          />
        </div>
        <button type="submit">Create</button>
      </form>

      <form action={deletePost}>
        <div>
          <label htmlFor="id">PostId:</label>
          <input type="text" id="id" name="id" placeholder="Enter id" />
        </div>
        <button type="submit">Delete</button>
      </form>
    </>
  );
};

export default PageForm;
