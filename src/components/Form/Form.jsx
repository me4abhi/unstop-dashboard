import "./Form.css";

const Form = () => {
  return (
    <form className="form" action="">
      <div className="flex-col">
        <label htmlFor="formName">Name</label>
        <input id="formName" type="text" placeholder="Type here" />
      </div>

      <div className="flex-col">
        <label htmlFor="formPurpose">Purpose of the test is</label>
        <select name="formPurpose" id="formPurpose">
          <option value="Get a job">Get a job</option>
          <option value="Check my knowledge">Check my knowledge</option>
        </select>
      </div>

      <div className="flex-col">
        <label htmlFor="formDescription">Purpose of the test is</label>
        <select name="formDescription" id="formDescription">
          <option value="Description 1">Description 1</option>
          <option value="Description 2">Description 2</option>
        </select>
      </div>

      <div className="flex-col">
        <label htmlFor="formSkills">Skills</label>
        <div className="formAddedSkills"></div>
        <input id="formSkills" type="text" placeholder="Type here" />
      </div>

      <div className="flex-col">
        <label htmlFor="duration">Duration of assessment</label>
        <input type="date" />
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
