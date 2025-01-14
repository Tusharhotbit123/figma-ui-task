const arr = [
  {
    name: 'name',
    label: 'Full Name',
    placeholder: 'Charlene Reed',
    type: 'text', // Text input
    validation: {
      required: 'Full Name is required',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters long',
      },
      maxLength: { value: 50, message: 'Name cannot exceed 50 characters' },
    },
  },
  {
    name: 'username',
    label: 'Username',
    placeholder: 'Charlene Reed',
    type: 'text', // Text input
    validation: {
      required: 'Username is required',
      minLength: {
        value: 3,
        message: 'Username must be at least 3 characters long',
      },
      maxLength: { value: 20, message: 'Username cannot exceed 20 characters' },
    },
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'charlenereed@gmail.com',
    type: 'email', // Email input
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Invalid email address',
      },
    },
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: '*************',
    type: 'password', // Password input
    validation: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters long',
      },
    },
  },
  {
    name: 'dob',
    label: 'Date of Birth',
    placeholder: '25 Jan 1990',
    type: 'date', // Date input
    validation: {
      required: 'Date of Birth is required',
    },
  },
  {
    name: 'presentAddress',
    label: 'Present Address',
    placeholder: 'San Jose, California, USA',
    type: 'text', // Text input
    validation: {
      required: 'Present Address is required',
    },
  },
  {
    name: 'permanentAddress',
    label: 'Permanent Address',
    placeholder: 'San Jose, California, USA',
    type: 'text', // Text input
    validation: {
      required: 'Permanent Address is required',
    },
  },
  {
    name: 'city',
    label: 'City',
    placeholder: 'San Jose',
    type: 'text', // Text input
    validation: {
      required: 'City is required',
    },
  },
  {
    name: 'postalCode',
    label: 'Postal Code',
    placeholder: '45962',
    type: 'text', // Text input
    validation: {
      required: 'Postal Code is required',
      pattern: {
        value: /^[0-9]{4,10}$/,
        message: 'Postal code must be between 4 and 10 digits',
      },
    },
  },
  {
    name: 'country',
    label: 'Country',
    placeholder: 'USA',
    type: 'text', // Text input
    validation: {
      required: 'Country is required',
    },
  },
];

export default arr;
