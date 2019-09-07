import React, { useState, useCallback } from 'react';

const Form = (props) => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'job') {
      setJob(value);
    }
  }, []);

  const submitForm = useCallback(() => {
    props.handleSubmit({ name, job });
    setJob('');
    setName('');
  }, [job, name, props]);

  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <label>Job</label>
      <input type="text" name="job" value={job} onChange={handleChange} />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
};

export default Form;
