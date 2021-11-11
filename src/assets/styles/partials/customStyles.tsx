const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderColor: 'lightgray',
    borderRadius:'0.4em',
    minHeight: '1.5em',
    height: '2.4em',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: '0.9em',
  }),
  menu: (provided: any) => ({
    ...provided,
    fontSize: '0.8em',
  })
};

export default customStyles;