const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderColor: 'gray',
    minHeight: '1.5em',
    height: '2em',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: '0.8em',
  }),
  menu: (provided: any) => ({
    ...provided,
    fontSize: '0.8em',
  })
};

export default customStyles;