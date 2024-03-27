import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import hamburger_menu from '../../images/dash/hamburger_menu.svg';
import hankHill from '../../images/dash/Hank_Hill.webp';
import image103 from '../../images/logos/loginGroup103.svg';
import HamburgerNav from '../../components/hamburger-nav/HamburgerNav';
import DropdownSelect from '../../components/dropdown-select/DropdownSelect';
import './assets.css';
import styles from '../../app.module.scss';

export const Assets = () => {
  const navigate = useNavigate();
  const initInputs = {
    select_month: '',
    select_year: '',
  };

  const [inputs, setInputs] = useState(initInputs);
  // const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(!(initInputs.select_month && initInputs.select_year));


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    console.log(inputs);
  };

  const handleSubmit = () => {
    navigateToNewPage();
    console.log('Submitted!');
  };

  const navigateToNewPage = () => {
    console.log('new page');
    navigate('/assets/input');
  };

  useEffect(() => {
    // Update isDisabled whenever select_month or select_year changes
    setIsDisabled(!(inputs.select_month && inputs.select_year));
  }, [inputs]);
  return (
    <>

      <div className="headline">
        <p>
          Let's get an understanding of your assets this month
        </p>
      </div>
      
  

      <div>
        <p className="p_select_month">Select Month</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="month_input">
          <select className="input" name="select_month" onChange={handleChange}>
            <option value="">--Select Month--</option>
            <option value="jan">JAN</option>
            <option value="feb">FEB</option>
            <option value="mar">MAR</option>
            <option value="apr">APR</option>
            <option value="may">MAY</option>
            <option value="jun">JUN</option>
            <option value="jul">JUL</option>
            <option value="aug">AUG</option>
            <option value="sep">SEP</option>
            <option value="oct">OCT</option>
            <option value="nov">NOV</option>
            <option value="dec">DEC</option>
          </select>
        </div>
        <p className="p_select_year">Select Year</p>
        <div className="year_input">
          <div className="select_year_div">
            <select
              className="input"
              name="select_year"
              onChange={handleChange}
            >
              <option value="">--Select Year--</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
              <option value="2033">2033</option>
              <option value="2034">2034</option>
              <option value="2035">2035</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="asset_button_large"
          disabled={isDisabled}
        >
          Submit
        </button>
      </form>
    </>
  );
};
  
