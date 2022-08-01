import React, { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { useStateContext } from '../../../../contexts/ContextProvider';

const EditDateField = (props) => {
  const { row, dateType } = props;
  const { handleEditDateFieldChange } = useStateContext();
  const [date, setDate] = useState();
  const [label, setLabel] = useState('');

  const handleDateChange = (event) => {
    setDate(event);
  };

  useEffect(() => {
    if (dateType === 'start') {
      setDate(row.startDate);
      setLabel('Start Date');
    } else {
      setDate(row.endDate);
      setLabel('End Date');
    }
  }, []);
  return (
    <div>
      <DatePicker
        label={label}
        value={date}
        onChange={(e) => {
          handleDateChange(e);
          handleEditDateFieldChange(e, dateType);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
};

export default EditDateField;
