const customStyles2 = {
  control: (provided: any) => ({
    ...provided,
    borderColor: 'gray',
    minHeight: '1.5em',
    height: '2em',
    width: '20em'
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: '0.8em'
  }),
  menu: (provided: any) => ({
    ...provided,
    fontSize: '0.8em',
    width: '20em'
  })
};

export default customStyles2;