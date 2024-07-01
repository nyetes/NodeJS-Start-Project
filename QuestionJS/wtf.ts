import React, { useEffect, useState } from 'react';
import * as style from '../../styles/main.module.scss';
import { Link } from 'react-router-dom';
import { employeeOnWFHToday, employeeOnWFHHistory } from '../../services/LeaveServices';
import toast from 'react-hot-toast';
import { PunchHistoryDatePicker } from '../../components/Dashboard/PunchInComponents/PunchHistoryDatePicker';
import AlertIcon from '../../components/common/AlertIcon';
import moment from 'moment';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { IUserStore, IEmployeesonWFHToday } from '../../interfaces/Interfaces'; // import interfaces

interface IError {
  dateFrom?: string; // make dateFrom optional
}

const DashboardEmployeeWFH: React.FC = () => {
  const [empWFHToday, setEmpWFHToday] = useState<IEmployeesonWFHToday[]>([]);
  const date = new Date();
  const [dateFrom, onDateFrom] = useState<Date>(date);
  const [error, setError] = useState<IError>({});

  const user: IUserStore | null = JSON.parse(localStorage.getItem('user') || '{}'); // add null check and default value
  const userRole: string = user?.Role?.name || ''; // add null checks

  useEffect(() => {
    employeeOnWFHToday()
      .then((res) => setEmpWFHToday(res))
      .catch((err) => toast.error(err.message));
    return () => setEmpWFHToday([]);
  }, []);

  const isOwnManager = (managerId: number | string | undefined): boolean => {
    const userId: number = user?.id || 0;
    return userId === managerId;
  };

  const applyUser = (appliedById: number | string | undefined): boolean => {
    const id: number = user?.managerId || 0;
    return id === appliedById;
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const formattedDate = moment(dateFrom).endOf('day').toISOString();
    employeeOnWFHHistory(formattedDate)
      .then((res) => setEmpWFHToday(res))
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div>
        <h5 className={`${style.employeeOnLeaveHeading}`}>EMPLOYEES ON WFH</h5>
        {userRole === 'Admin' && (
          <form method="POST" onSubmit={handleSubmit}>
            <div className={`${style.employeeOnLeaveHeaderComponents} d-flex ml-4`}>
              <div className={`${style.employeeOnLeaveFilterDate} col-lg-4 col-md-6 col-6`}>
                <h6 className="text-nowrap mt-4 p-3 font-weight-bold">Choose Date:</h6>
                <PunchHistoryDatePicker
                  onChange={onDateFrom}
                  className={`form-control p-4 ${style.employeeOnLeaveDatePicker} ${error.dateFrom ? `is-invalid ` : ''}`}
                  value={dateFrom}
                />
                <AlertIcon errorMessage={error.dateFrom} />
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <button type="submit" className={`${style.employeeOnLeaveSearchButton} btn btn-lg`}>
                  SEARCH
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      <div className={`${
