import React from 'react';
import { useParams } from 'react-router-dom';
import './Form.css';
import Header from '../header/Header';
import { useForm } from 'react-hook-form';
import instance from '../../api/axios';

const HandleCeta = () => {
  const { subcategory } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await instance.post('/loanAdd', data);
      console.log(response);
    } catch (error) {
      console.error('Error:', error.message);
    }
  
  };

  return (
    <div className="category-container">
      <div className="content-wrapper">
        <h1 className="category-title">
          Details for Category: <span>{subcategory}</span>
        </h1>
        <p className="category-description">
          Enter the details for <strong>{subcategory}</strong> loan request.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="category-form">
          {/* Loan Amount Field */}
          <div className="form-group">
            <label htmlFor="amount">Loan Amount</label>
            <input
              id="amount"
              type="number"
              placeholder="Enter loan amount"
              {...register('amount', {
                required: 'Loan amount is required',
                min: {
                  value: 500,
                  message: 'Amount must be at least 500',
                },
              })}
              className={`form-input ${errors.amount ? 'input-error' : ''}`}
            />
            {errors.amount && (
              <span className="error-message">{errors.amount.message}</span>
            )}
          </div>

          {/* Loan Type Field */}
          <div className="form-group">
            <label htmlFor="laon">Loan Type</label>
            <input
              id="loan"
              type="text"
              placeholder="Enter loan type"
              {...register('laon', {
                required: 'Loan type is required',
                maxLength: {
                  value: 200,
                  message: 'Loan type cannot exceed 50 characters',
                },
              })}
              className={`form-input ${errors.loan ? 'input-error' : ''}`}
            />
            {errors.loan && (
              <span className="error-message">{errors.loan.message}</span>
            )}
          </div>

          {/* Repayment Days Field */}
          <div className="form-group">
            <label htmlFor="repaymentDays">Repayment Period (in days)</label>
            <input
              id="repaymentDays"
              type="number"
              placeholder="Enter number of days to repay loan"
              {...register('paydate', {
                required: 'Repayment period is required',
                min: {
                  value: 1,
                  message: 'Repayment period must be at least 1 day',
                },
                max: {
                  value: 365,
                  message: 'Repayment period cannot exceed 365 days',
                },
              })}
              className={`form-input ${
                errors.repaymentDays ? 'input-error' : ''
              }`}
            />
            {errors.repaymentDays && (
              <span className="error-message">
                {errors.repaymentDays.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HandleCeta;
