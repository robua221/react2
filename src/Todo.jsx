import React from "react";

const Todo = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center", color: "darkblue" }}>MY TODO LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new Task"
          style={{ padding: "5px" }}
        />
        <button
          style={{
            color: "white",
            backgroundColor: "darkblue",
            padding: "5px 10px",
            border: "none",
            marginLeft: "5px",
          }}
        >
          Add
        </button>
        <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}></ul>
      </div>
    </div>
  );
};

export default Todo;
