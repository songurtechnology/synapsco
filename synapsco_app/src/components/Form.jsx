import React, { useState } from "react";
import styles from "../style";
import SubmitButton from "./Submit";
import { formFields } from "../constants";
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState(new FormData());
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(null);
  const [formError, setFormError] = useState(null);

  const validateForm = () => {
    const mandatoryFields = ['name', 'surname', 'email', 'sector'];
  
    for (const fieldId of mandatoryFields) {
      if (!formData.get(fieldId)) {
        setFormError(`Lütfen ${fieldId === 'surname' ? 'soyadınızı' : fieldId} giriniz!`);
        return false;
      }
    }
  
    setFormError(null);
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!validateForm()) {
      // Validation failed
      return;
    }
  
    try {
      console.log('Form Data:', formData);
      const response = await axios.post('http://127.0.0.1:8000/api/submit-contact-form/', formData);
      console.log('Form submitted successfully:', response.data);
      setFormSubmissionStatus('success');
      setFormData(new FormData()); // Reset the form data
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with:', error.response.data);
      }
      setFormSubmissionStatus('error');
    }
  };

  const handleChange = (fieldId, event) => {
    let value;
  
    if (event.target.type === 'file') {
      value = event.target.files[0];
    } else if (event.target.type === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
  
    setFormData((prevFormData) => {
      const formDataCopy = new FormData();
      for (const key of prevFormData.keys()) {
        formDataCopy.append(key, prevFormData.get(key));
      }
  
      if (fieldId === 'description') {
        // Special handling for description field
        formDataCopy.set(fieldId, [value]);
      } else {
        formDataCopy.set(fieldId, value);
      }
  
      return formDataCopy;
    });
  };
  

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" method="POST" className={`${styles.boxWidth} ${styles.flexCenter} ${styles.flexStart} flex-col bg-black-gradient p-8 rounded-md box-shadow`}>
      {formError && (
        <div className="text-red-500">{formError}</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formFields.map((field) => (
          <div key={field.id} className={`mb-4 ${field.id === 'description' ? 'md:col-span-2 lg:col-span-3' : ''}`}>
            <label htmlFor={field.id} className={`text-gradient ${styles.paragraph} mb-2`}>
              {field.label}:
            </label>
            {field.type === "radio" ? (
              <div className={`flex flex-wrap ${styles.paddingX}`}>
                {field.options.map((option) => (
                  <div key={option.id} className="flex items-center mr-4 mb-2">
                    <input
                      type="radio"
                      id={option.id}
                      name={field.id}
                      value={option.id}
                      className="mr-2 cursor-pointer"
                      checked={formData.get(field.id) === option.id}
                      onChange={(e) => handleChange(field.id, e)}
                    />
                    <label htmlFor={option.id} className={`text-gradient ${styles.paragraph} cursor-pointer`}>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            ) : field.type === "file" ? (
              <input
                type="file"
                id={field.id}
                name={field.id}
                className={`border-2 border-white rounded-md p-2 ${styles.paddingX} w-full focus:outline-none`}
                onChange={(e) => handleChange(field.id, e)}
              />
            ) : field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.id}
                rows="4"
                className={`border-2 border-white rounded-md p-2 ${styles.paddingX} w-full focus:outline-none`}
                value={formData.get(field.id) || ''}
                onChange={(e) => handleChange(field.id, e)}
              ></textarea>
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className={`border-2 border-white rounded-md p-2 ${styles.paddingX} w-full focus:outline-none`}
                value={formData.get(field.id) || ''}
                onChange={(e) => handleChange(field.id, e)}
              />
            )}
          </div>
        ))}
        <div className="mb-6 md:col-span-2 lg:col-span-3">
          <SubmitButton />
          {formSubmissionStatus === 'success' && (
            <div className="text-green-500 mt-2">Form başarıyla gönderildi!</div>
          )}
          {formSubmissionStatus === 'error' && (
            <div className="text-red-500 mt-2">Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
