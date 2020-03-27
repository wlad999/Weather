import React from "react";

const Input = () => {
  return (
    <div className="col-3 align-self-center">
      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Find city..."
          />
        </div>
      </form>
    </div>
  );
};
export default Input;
